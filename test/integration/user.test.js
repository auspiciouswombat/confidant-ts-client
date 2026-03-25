import assert from "node:assert/strict";
import { describe, it, before } from "node:test";
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

  describe("IntakeAddresses", () => {
    const testAddress = `integration-${Date.now()}@test.example.com`;

    it("AddIntakeAddress creates a new address", async () => {
      const resp = await client.user.addIntakeAddress({
        address: testAddress,
        label: "Integration Test",
      });
      assert.ok(resp.intakeAddress, "expected intake address in response");
      assert.equal(resp.intakeAddress.address, testAddress);
      assert.equal(resp.intakeAddress.label, "Integration Test");
      assert.ok(resp.intakeAddress.id, "expected address ID");
    });

    it("ListIntakeAddresses includes the new address", async () => {
      const resp = await client.user.listIntakeAddresses({});
      const found = resp.intakeAddresses.find((a) => a.address === testAddress);
      assert.ok(found, `expected to find ${testAddress} in list`);
    });

    it("AddIntakeAddress rejects duplicates", async () => {
      await assert.rejects(
        () => client.user.addIntakeAddress({ address: testAddress }),
        (err) => {
          assert.ok(err.message.includes("already registered") || err.code, "expected duplicate error");
          return true;
        },
      );
    });

    it("RemoveIntakeAddress deletes the address", async () => {
      const list = await client.user.listIntakeAddresses({});
      const addr = list.intakeAddresses.find((a) => a.address === testAddress);
      assert.ok(addr, "address should exist before removal");

      await client.user.removeIntakeAddress({ id: addr.id });

      const afterList = await client.user.listIntakeAddresses({});
      const found = afterList.intakeAddresses.find((a) => a.address === testAddress);
      assert.ok(!found, "address should not exist after removal");
    });
  });

  describe("User isolation (DRC-082)", () => {
    it("user 2 cannot see user 1 intake addresses", async () => {
      const client2 = getTestClient2();
      if (!client2) {
        // Skip if second user not configured.
        return;
      }

      // User 1 adds an address
      const addr = `isolation-${Date.now()}@test.example.com`;
      await client.user.addIntakeAddress({ address: addr, label: "isolation test" });

      // User 2 should not see it
      const resp2 = await client2.user.listIntakeAddresses({});
      const found = resp2.intakeAddresses.find((a) => a.address === addr);
      assert.ok(!found, "user 2 should not see user 1 addresses");

      // Cleanup
      const resp1 = await client.user.listIntakeAddresses({});
      const toRemove = resp1.intakeAddresses.find((a) => a.address === addr);
      if (toRemove) {
        await client.user.removeIntakeAddress({ id: toRemove.id });
      }
    });
  });
});
