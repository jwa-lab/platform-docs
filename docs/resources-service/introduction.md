---
sidebar_position: 1
---

# Introduction

The resource service allow you to manage the in-game resources of your players and to convert them into FTs.

## Concepts
### Resource

A resource defines a type of in-game non unique assets.

Examples of resources: gold, coins, gems, wood, mud, ...

### Player's resources

For each game, a player has a resource balance with the amount of resources he owns. You can interact with this 
balance to give or withdraw resources.

### Token

A given resource can be linked with an on-chain Fungible Token. This will allow players to convert the in-game 
resources into tokens, and to get back resources by spending the tokens.

Examples of fungible tokens: [BRWL](https://coinmarketcap.com/currencies/blockchain-brawlers/)

### Conversions

Resources linked to a token can ben converted back and forth to/from this specific token. See the [conversions' page](./resources-conversions.md) for details.

## API documentation

You can find the detailed API documentation of the items service at https://api.playtix.team/docs
