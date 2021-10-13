---
slug: v0.1-item-service
title: v0.1 release! Platform now includes Item Service
author: Olivier Scherrer
author_title: CTO @ JWA Lab
author_url: https://github.com/podefr
author_image_url: https://avatars.githubusercontent.com/u/219256?s=400
tags: [JWA, Item Service, Platform, documentation, blockchain, API, services, v0.1, tezos, work queue]
---

Today we're excited to announce a new release of the Community Platform!

The team has been incredibly busy over the last few months to address the great feedback we've received on the first version of the Platform's services.

## Developer Experience

The biggest feedback we've received was around the developer experience. While the platform itself is easy to use, the "tokenization dance"
that the combination of the `Item Store` and `Tokenization Service` APIs required was pretty awful:

- We had to manage our items in `Item Store` and then instruct the `Tokenization Service` to sync up with `Item Store` to update the blockchain
- While the calls to `Item store` were fast, the calls to `Tokenization Service` were synchronous with inherent blockchain delays built in. This meant an API that was difficult to use
 and API calls that could easily fail with unstable network or just timeout.
- Creating item instances was even more complex as we had to introduce the notion of "users" to group instances by players. This was not a feature for our users
but rather a technical requirement introduced by our design.
- And then, some ids were numbers, some were unique ids, the whole thing was confusing.

## Performance

On top of the cumbersome API, we also had a brittle tokenization logic which would prevent a user from requesting a new tokenization while one was still ongoing.

The tokenization calls were synchronous and could take at least one block time (30s to 1 minute). When tokenizing aggressively, that could mean a synchronous request taking minutes.
On top of that, we couldn't start a new tokenization if the previous one didn't complete, risking 2 simultaneous smart contract calls which result in a counter issue in Tezos.

## Introducing the `Item Service` and `Tezos Work Queue`

We've addressed this feedback by making a huge overhaul of our services. While the platform and its architecture haven't changed, we refactored our Tezos smart contracts and built a new integrated
API in a new service called `Item Service` which automates the "tokenization dance". We've also introduced the `Tezos Work Queue` which asynchronously executes operations on the Tezos blockchain while
giving the control back to the `Item Service` to treat new requests.

### A better API

The "tokenization dance" is now completely abstracted away from the user. We only deal with a blazing fast API to manage our items and item instances, and the Item Service executes the tokenization in the background, asynchronously.
This allowed us to simply remove the tokenization service from the platform. The Tezos Work Queue has been added but can't be used directly, it operates in the background to treat the Item Service's tokenization requests and orchestrate smart contracts calls.
A refactoring of our smart contracts also allowed us to simplify managing item instances as we dropped the notion of inventories (collection of item instances for a user) and the associated APIs.

### Better performance

The Tezos Work Queue is an incredible tool that receives tokenization requests at any rate necessary and then immediately sends an ACK back to the `Item Service` so the `Item Service` can keep treating new requests.
At its own pace, the Tezos Work Queue will now interface with the blockchain to unqueue operations, execute them on the blockchain and wait for confirmation. 

This change allowed for a blazing fast `Item Service` API as the heavy lifting is done in the background, and the `Item Service` is free to treat client requests.

### Reduced cost

The smart contracts refactoring involved removing the notion of inventories and collocating items and item instances together. This means that there's no need to deploy and keep track of additional inventories. A nice benefit is that we've drastically reduced
the cost of assigning an item to a first-time user, from `~0.4tz` to `~0.02tz`, and the instance transfer cost from `0.02tz` to `0.0007tz`!

## Next features

Our Tezos Work Queue brings amazing improvements to the User Experience, but it also allows us to start batching operations! Batching will bring our platform's performance to the next level, allowing us to execute dozens or hundreds of operations in a single batch.

## Try it today

We can't wait to get your feedback on this new release. [Please head out to our tutorial to get started!](/), or reach out on our [GitHub](https://github.com/jwa-lab/community-platform/issues) for questions and feedback.