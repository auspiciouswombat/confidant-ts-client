import assert from "node:assert/strict";
import { describe, it, before } from "node:test";
import { isAlreadyExists } from "../../dist/index.js";
import { getTestClient, getTestClient2 } from "./helpers.js";

describe("UserService integration", () => {
  let client;

  before(() => {
    client = getTestClient();
  });

  it("GetCurrentUser returns the authenticated user", async () => {
    const resp = await client.user.getCurrentUser({});
    assert.ok(resp.user, "expected user in response");
    assert.ok(resp.user.id, "expected user ID");
    assert.ok(resp.user.email, "expected user email");
  });

  it("GetCurrentUser is idempotent", async () => {
    const resp1 = await client.user.getCurrentUser({});
    const resp2 = await client.user.getCurrentUser({});
    assert.equal(resp1.user.id, resp2.user.id, "same user ID on repeated calls");
  });

  describe("ContactEmails", () => {
    let contactEmailId;

    it("CreateContactEmail creates a server-generated address", async () => {
      const resp = await client.user.createContactEmail({
        label: "Integration Test",
      });
      assert.ok(resp.contactEmail, "expected contact email in response");
      assert.ok(resp.contactEmail.id, "expected contact email ID");
      assert.ok(resp.contactEmail.address, "expected server-generated address");
      assert.equal(resp.contactEmail.label, "Integration Test");
      contactEmailId = resp.contactEmail.id;
    });

    it("ListContactEmails includes the new address", async () => {
      const resp = await client.user.listContactEmails({});
      const found = resp.contactEmails.find((ce) => ce.id === contactEmailId);
      assert.ok(found, "expected to find new contact email in list");
    });

    it("UpdateContactEmailLabel updates the label", async () => {
      const resp = await client.user.updateContactEmailLabel({
        id: contactEmailId,
        label: "Updated Label",
      });
      assert.equal(resp.contactEmail.label, "Updated Label");
    });

    it("RetireContactEmail retires the address", async () => {
      const resp = await client.user.retireContactEmail({
        id: contactEmailId,
      });
      assert.ok(resp.contactEmail, "expected contact email in response");
      assert.ok(resp.contactEmail.retiredAt, "expected retired_at to be set");
    });

    it("ReactivateContactEmail reactivates the address", async () => {
      const resp = await client.user.reactivateContactEmail({
        id: contactEmailId,
      });
      assert.ok(resp.contactEmail, "expected contact email in response");
      assert.ok(!resp.contactEmail.retiredAt, "expected retired_at to be cleared");
    });

    // Cleanup: retire the test address so it doesn't accumulate
    it("cleanup: retire test address", async () => {
      await client.user.retireContactEmail({ id: contactEmailId });
    });
  });

  describe("User isolation (DRC-082)", () => {
    it("user 2 cannot see user 1 contact emails", { skip: !process.env.CONFIDANT_TEST_TOKEN2 }, async () => {
      const client2 = getTestClient2();
      assert.ok(client2, "second test user must be configured for isolation tests");

      // User 1 creates a contact email
      const resp1 = await client.user.createContactEmail({ label: "isolation test" });
      const ceId = resp1.contactEmail.id;

      // User 2 should not see it
      const resp2 = await client2.user.listContactEmails({});
      const found = resp2.contactEmails.find((ce) => ce.id === ceId);
      assert.ok(!found, "user 2 should not see user 1 contact emails");

      // Cleanup
      await client.user.retireContactEmail({ id: ceId });
    });
  });
});
