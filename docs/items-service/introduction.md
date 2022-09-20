---
sidebar_position: 1
---

# Introduction

The Item service allow you to manage your in-game assets, on and off chain.

## Concepts

### Schema

A _Schema_ defines the shape of your _Items_ with a set of _Attributes_ specific to each type of _Items_.

#### Attributes

_Attributes_ are defined by their names, unique within a given _Schema_.

* on-chain _Attributes_ will be synchronized in the blockchain where the item lives
* off-chain _Attributes_ only exists inside the L3V3L API

#### Example

In an RPG game, we could create a Weapons _Schema_ to handle all the weapons of the game, with the following _Attributes_:
* attack
* defense
* range
* rarity

We could also create different _Schemas_ for different types of weapons, if they don't share the same characteristics.

Swords _Schema_ with the following _Attributes_:
* hands number
* damages
* rarity

Bow _Schema_ with the following _Attributes_:
* arrows per minute
* accuracy
* rarity

etc...

### Template

A _Template_ allow for fine-grained categorization of _Items_ within a _Schema_.

The _Template_ will allow to pre-define some _Attributes_ of the _Schema_ and to fix a supply limit (coming soon) for the NFTs generated
from the _Template_.
The _Template_ will also restrict the usage of NFTs VS non-NFTs _Items_.


#### Example

Given the Weapons _Schema_ from the previous example, we could create a first **Basic Sword** _Template_ that will allow 
us to create an <u>unlimited</u> number of <u>non-NFTs</u> <u>common</u> swords. We can create another **Steel Sword**
_Template_ that will allow us to mint a maximum of <u>5000</u> <u>uncommon</u> <u>NFTs</u> swords.


### Item

An _Item_ is a unique in-game asset.

_Items_ are always produced from a single _Template_, and by transitiveness, a single _Schema_. Items inherit all attributes
of the _Schema_, with the pre-defined values from the _Template_. _Attributes_ that are not contained in the _Template_
can be set independently on each _Item_.

#### NFTs items

NFTs items are minted asynchronously after a request is sent to the API. When the NFT backing up the Item will be minted
on chain, the Item will be created in the API.
As ownership of the NFT can change on-chain, through direct transfers or marketplace sells, the Blockchain containing the
NFTs are continuously scanned to ensure the correct owner is known from the API.

#### Non-NFTs items

Non-NFTs items exists only off-chain. They can be fully managed with the L3V3L API but can never be written on-chain.


## Publication and on-chain writing

In many cases, you have to publish some of the objects you have created in the API, in order for them to be available 
on-chain. In other cases you will create them on-chain objects directly.

The process is always asynchronous and requires 3 steps:
* As a developer you will send a publication request for a specific element
* The publication will be processed asynchronously by a scheduled task
* The resulting blockchain transaction is verified to ensure its consistency

Depending on the blockchain used by your project this could take a few seconds to several minutes, or even hours.

## API documentation

You can find the detailed API documentation of the items service at https://api.playtix.team/docs
