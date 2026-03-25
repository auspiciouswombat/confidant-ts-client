import assert from "node:assert/strict";
import { describe, it, before } from "node:test";
import { getTestClient } from "./helpers.js";

describe("BrandService integration", () => {
  let client;

  before(() => {
    client = getTestClient();
  });

  it("ListBrands returns a response", async () => {
    const resp = await client.brand.listBrands({});
    assert.ok(Array.isArray(resp.brands), "expected brands array");
  });

  describe("FollowBrand + HideBrand flow", () => {
    let brandId;

    it("FollowBrand creates or follows a brand", async () => {
      const resp = await client.brand.followBrand({
        senderAddress: `integration-${Date.now()}@brand.test`,
        brandName: "Integration Test Brand",
      });
      assert.ok(resp.brand, "expected brand in response");
      assert.ok(resp.brand.id, "expected brand ID");
      brandId = resp.brand.id;
    });

    it("ListBrands includes the followed brand", async () => {
      const resp = await client.brand.listBrands({});
      const found = resp.brands.find((b) => b.id === brandId);
      assert.ok(found, "expected followed brand in list");
    });

    it("GetBrand returns the brand", async () => {
      const resp = await client.brand.getBrand({ brandId });
      assert.ok(resp.brand, "expected brand in response");
      assert.equal(resp.brand.id, brandId);
    });

    it("HideBrand hides the brand", async () => {
      await client.brand.hideBrand({ brandId });
      // After hiding, the brand should not appear in the default list.
      const resp = await client.brand.listBrands({});
      const found = resp.brands.find((b) => b.id === brandId);
      assert.ok(!found, "hidden brand should not appear in default list");
    });

    it("UnhideBrand restores the brand", async () => {
      const resp = await client.brand.unhideBrand({ brandId });
      assert.ok(resp.brand, "expected brand in unhide response");
    });
  });
});
