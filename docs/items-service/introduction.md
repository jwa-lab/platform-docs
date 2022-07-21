---
sidebar_position: 1
---

# Introduction

The Item service allow you to manage your in-game assets on and off chain.

## Concepts

### Schema

A schema defines the shape of your items with a set of attributes specific to each type of items.

You can define as many schema as you want for a given game.

#### Attributes

Attributes are defined by their names, unique within a given schema.

* on-chain attributes will be synchronized in the blockchain where the item lives
* off-chain attributes only exists inside the PlayTiX API

#### Source

A source allow locating NFTs directly on the blockchain.

When a source is attached to a schema, NFTs available on-chain will be automatically synchronized within the PlayTiX API.
You will be able to fetch them with a simple REST call to the API.

The attributes of a schema must match the characteristics of the NFT on-chain to allow for synchronization.

### Item

An item is a unique in-game asset.

Items are always linked to a single schema that defines their available attributes.

#### NFTs items

NFTs items exists primarily on a blockchain. When a schema is linked to a source, automatic synchronization will read
the items on-chain and make them available off-chain in the PlayTiX API.

#### Non-NFTs items

Non-NFTs items exists only off-chain. They can be fully managed with the PlayTiX API but can never be written on-chain.

## API documentation

You can find the detailed API documentation of the items service at https://api.playtix.team/docs
