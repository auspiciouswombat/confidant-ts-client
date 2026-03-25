import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  ActivationMethodSchema,
  CardStatusFilterSchema,
  CardStatusSchema,
  CardTypeSchema,
  createConfidantClient,
  OfferTypeSchema,
  SeenFilterSchema,
  SubscriptionSourceSchema,
  SubscriptionStatusSchema,
} from "../dist/index.js";

describe("createConfidantClient", () => {
  it("creates a client with all five service namespaces", () => {
    const client = createConfidantClient("http://localhost:8080");
    assert.ok(client.brand, "brand service exists");
    assert.ok(client.card, "card service exists");
    assert.ok(client.collection, "collection service exists");
    assert.ok(client.email, "email service exists");
    assert.ok(client.user, "user service exists");
    assert.ok(typeof client.setToken === "function", "setToken exists");
  });

  it("brand service has all expected methods", () => {
    const client = createConfidantClient("http://localhost:8080");
    assert.ok(typeof client.brand.listBrands === "function");
    assert.ok(typeof client.brand.getBrand === "function");
    assert.ok(typeof client.brand.followBrand === "function");
    assert.ok(typeof client.brand.hideBrand === "function");
    assert.ok(typeof client.brand.unhideBrand === "function");
  });

  it("card service has all expected methods", () => {
    const client = createConfidantClient("http://localhost:8080");
    assert.ok(typeof client.card.listCards === "function");
    assert.ok(typeof client.card.getCard === "function");
    assert.ok(typeof client.card.searchCards === "function");
    assert.ok(typeof client.card.markCardsSeen === "function");
    assert.ok(typeof client.card.dismissCard === "function");
    assert.ok(typeof client.card.saveCard === "function");
    assert.ok(typeof client.card.unsaveCard === "function");
    assert.ok(typeof client.card.noteOnCard === "function");
    assert.ok(typeof client.card.deleteNote === "function");
  });

  it("collection service has all expected methods", () => {
    const client = createConfidantClient("http://localhost:8080");
    assert.ok(typeof client.collection.listCollections === "function");
    assert.ok(typeof client.collection.createCollection === "function");
    assert.ok(typeof client.collection.updateCollection === "function");
    assert.ok(typeof client.collection.deleteCollection === "function");
    assert.ok(typeof client.collection.listCollectionCards === "function");
    assert.ok(typeof client.collection.addCardToCollection === "function");
    assert.ok(typeof client.collection.removeCardFromCollection === "function");
  });

  it("email service has all expected methods", () => {
    const client = createConfidantClient("http://localhost:8080");
    assert.ok(typeof client.email.getInboundAddress === "function");
    assert.ok(typeof client.email.listDiscoveredBrands === "function");
  });
});

describe("proto enum exports", () => {
  it("exports all enum schemas", () => {
    assert.ok(CardTypeSchema, "CardType exported");
    assert.ok(CardStatusSchema, "CardStatus exported");
    assert.ok(CardStatusFilterSchema, "CardStatusFilter exported");
    assert.ok(SeenFilterSchema, "SeenFilter exported");
    assert.ok(OfferTypeSchema, "OfferType exported");
    assert.ok(ActivationMethodSchema, "ActivationMethod exported");
    assert.ok(SubscriptionStatusSchema, "SubscriptionStatus exported");
    assert.ok(SubscriptionSourceSchema, "SubscriptionSource exported");
  });
});
