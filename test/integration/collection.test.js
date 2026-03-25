import assert from "node:assert/strict";
import { describe, it, before } from "node:test";
import { getTestClient } from "./helpers.js";

describe("CollectionService integration", () => {
  let client;

  before(() => {
    client = getTestClient();
  });

  describe("CRUD flow", () => {
    let collectionId;

    it("CreateCollection creates a new collection", async () => {
      const resp = await client.collection.createCollection({
        name: `Test Collection ${Date.now()}`,
        description: "Integration test collection",
      });
      assert.ok(resp.collection, "expected collection in response");
      assert.ok(resp.collection.id, "expected collection ID");
      collectionId = resp.collection.id;
    });

    it("ListCollections includes the new collection", async () => {
      const resp = await client.collection.listCollections({});
      const found = resp.collections.find((c) => c.id === collectionId);
      assert.ok(found, "expected new collection in list");
    });

    it("UpdateCollection updates name and description", async () => {
      const resp = await client.collection.updateCollection({
        collectionId,
        name: "Updated Name",
        description: "Updated description",
      });
      assert.ok(resp.collection, "expected collection in response");
      assert.equal(resp.collection.name, "Updated Name");
    });

    it("DeleteCollection removes the collection", async () => {
      await client.collection.deleteCollection({ collectionId });
      const resp = await client.collection.listCollections({});
      const found = resp.collections.find((c) => c.id === collectionId);
      assert.ok(!found, "deleted collection should not appear in list");
    });
  });
});
