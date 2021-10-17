---
sidebar_position: 1
---

# Overview

Tokenization is the process of storing the items created using the platform into the blockchain.

To see a complete flow of creating, assigning and transfering items, please take a look at our [tutorial](/docs/tutorial/getting-started).

In this section, we will dig deeper into how tokenization works, what items and instances are and how we can locate our tokenized items in the blockchain.

## 1. Items and Instances

An item could be anything. In a video game for instance, it could be a car, a sword, a chicken, any item that a player can interact with, has value on its own, and could evolve or be owned. While the platform was designed to manage gaming items, it can actually work with any digital object and is not limited to video games.

An item doesn't need to be unique, it can be created in a large number of copies, with each copy evolving differently and belonging to a different owner. In the PlayTiX ecosystem, a copy is called an instance.

We are making the distinction between items and instances, because the core principle of our solution is that an item should be immutable and can be created with a finite number of copies, or instances. Each instance can be sold independently and can then evolve at its own pace.
We want to track the evolution of each individual instance without altering the initial item.

### A green family car with a production of 100 models

For our first item, let's imagine a green family car with a limited production of 100. In the showroom we may see one instance, or model of the car, but when it gets purchased, any one of the 100 models can be assigned to the buyer. All the 100 models are "fungible", they're all identical and have the same value.

### Buying a model of that green family car

When a model of the green family car is bought, the owner gets its own model and knows which number it was assigned. Most likely, buyer #1 would get model #1 of the car, while the 10th buyer would get number #10, until all models have been sold. Indeed, our instances are all numbered.

### Each model has its own life

Once the car has been assigned, each owner is free to make their own alterations to their car. One owner may choose to put on a sport kit for racing, while another may even decide to paint it a customized blue.

The original car will always be a "green" "family car", but the first owner will have a sportier model, while the other owner will have turned it "blue". Changes made to a model are "added" to the original characteristics of the car.

### Transferring ownership

Now, models can be sold to new owners. The new owner will know what the original car looked like looking at the records, but it will receive the altered version. We can see how each model of the car will have a different value based on its condition, even though the original item was the same with an identical value.

### Car/model and item/instance

The green family car is our Item, while the model sold to the owner is the Instance.

## 2. Tokenizing items and instances

Our solution stores items and instances in the blockchain. Storing them in the blockchain offers their owners a proof of ownership, as well as a history of all alterations made on top of the original item. It's an immutable, unalterable system of record.

To store our items and instances, we use a [Smart Contract](https://en.wikipedia.org/wiki/Smart_contract), and the rules regulating the life or our items and instances are programmed there. This means that even if the platform's services wanted to change their business logic, or rules, they wouldn't be allowed to as the smart contract safeguards the items and instances for their respective owners. This guarantee gives owners the piece of mind that they won't lose their items or they won't change without their consent.

For full transparency, our smart contracts are Open Source and can be found [here](https://github.com/jwa-lab/tokenization-service-contracts).
