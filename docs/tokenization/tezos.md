---
sidebar_position: 4
---

# Tezos

What gives our users the assurance that their items belong to them and won't change without their consent is their eventual tokenization in the blockchain.
A key feature of the platform's tokenization services is tokenization in the Tezos Blockchain. When you run the platform, you also run a Tezos Sandbox on your machine.
With only a few keystrokes, you will be able to visualize items and instances directly in the blockchain.

## Benefits of the blockchain

The reason why storing items and instances in the blockchain is so powerful is that there is no central authority governing it. Even though we own the items and instances we create, storing them in the blockchain can only be done by calling a smart contract, and each operation is validated by that network of nodes, verifying that no one is trying to tamper with them, including us.

The blockchain also keeps a complete history of all operations it validated, which could be considered as an audit trail. The history of operations is held by all the nodes in the network, so no one can rewrite the history.

To keep it simple, once an item or instance is created in the blockchain, it's stored there forever, proving its ownership and set of characteristics forever.

## Navigating the blockchain

To prove that our items and instances are stored on the Tezos Blockchain, we're going to use a Tezos block explorer. We can't just rely on our database as it could have bogus information.

The platform comes with [TzIndex](https://github.com/blockwatch-cc/tzindex) built-in and it's running on port 8002 by default. Let's verify this:

```sh
$ curl localhost:8002/explorer/status
{"mode":"sync","status":"synced","blocks":8527,"indexed":8527,"progress":1}
```

We can see here that a node is running and it has already validated a number of blocks.

## Locating an Item

To locate an item in the blockchain, we need 2 pieces of information:

1. The automatically assigned `item_id`. Let's say we want to see item with id `1`.
1. The address of the smart contract. This is stored under the `tezos_contract_address` field. Let's say the address is `KT1KLYjHw7WXNAzS4LzKcktkGDz1kK3fFZh3`.

The way we designed our smart contracts, there is a list of all items stored in a list called a `bigmap`. To find our bigmap's id, we can simply inspect our contract.

```sh
 $ curl localhost:8002/explorer/contract/KT1KLYjHw7WXNAzS4LzKcktkGDz1kK3fFZh3

{"address":"KT1KLYjHw7WXNAzS4LzKcktkGDz1kK3fFZh3","creator":"tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb","delegate":"","storage_size":2195,"storage_paid":2195,"first_seen":3,"last_seen":6819,"first_seen_time":"2021-10-17T14:35:25Z","last_seen_time":"2021-10-17T18:25:45Z","n_ops":2,"n_ops_failed":0,"bigmaps":{"instances":4,"items":5},"iface_hash":"4364d205","code_hash":"26383467","call_stats":{"add_item":1,"assign_item":1,"freeze_item":0,"transfer_instance":0,"update_instance":0,"update_item":0},"features":[],"interfaces":[]}
```

We can see that the id of our `items` bigmap is `5`.

Each key in our bigmap is an `item_id`, so `item_id` `1` would be located at `localhost:8002/explorer/bigmap/<bigmap_id>/<item_id>`:

```sh
$ curl localhost:8002/explorer/bigmap/5/1

{"key":"1","key_hash":"expru2dKqDfZG8hu4wNGkiyunvq2hdSKuVYtcKta7BWP6Q18oNxKjS","value":{"available_quantity":"9","data":{"level": "rare"},"frozen":true,"item_id":"1","name":"green family car","total_quantity":"10"}}
```

This is it! We can see our item fully described in the blockchain.

## Locating an Instance

Similarily, to locate an instance we need:

1. The original `item_id`, with id `1`
1. The automatically assigned `instance_number`. Let's say it's also `1`.
1. The contract number, it's stored under `tezos_contract_address` field in the instance.

Note that items and instances are co-located, so the contract address will always be the same between an instance and its item.

Looking at the contract, we can see that the bigmap id for `instances` is `4`.

Let's list the keys in the `instances` bigmap:

```sh
$ curl localhost:8002/explorer/bigmap/4/keys
[{"key":{"instance_number":"1","item_id":"1"},"key_hash":"exprugozCNaQ1jWWSpTQsB5WD9dvnTLemPK7SeLyqPw1DQUB8CFhvA"}]
```

We can see that our item with `instance_number` `1` is under the key `exprugozCNaQ1jWWSpTQsB5WD9dvnTLemPK7SeLyqPw1DQUB8CFhvA`.

So we can find our instance under `localhost:8002/explorer/bigmap/4/<key>`:

```sh
$  % curl localhost:8002/explorer/bigmap/4/exprugozCNaQ1jWWSpTQsB5WD9dvnTLemPK7SeLyqPw1DQUB8CFhvA
{"key":{"instance_number":"1","item_id":"1"},"key_hash":"exprugozCNaQ1jWWSpTQsB5WD9dvnTLemPK7SeLyqPw1DQUB8CFhvA","value":{"data":{},"user_id":"Mr 2"}}
```

And that's it. Our instance is fully described in the blockchain.

We can see that the `instances` bigmap uses composite keys, composed of the `item_id` and `instance_number`. The bigmap has to create a `hash` of this composite key to index the bigmap, hence the additional step.
