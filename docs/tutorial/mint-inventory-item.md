---
sidebar_position: 5
---

# Mint an inventory item

We have previously minted an item, but we haven't yet minted the item assigned to the user.
If we have an item with a `total quantity` of `10`, that means that we can create `10` copies of that item and assign them to up to `10` users.

Let's now move this inventory item to the blockchain which will constitute a proof that the user possesses it. It's like a proof showing that the NFT is owned by the user.

## Create inventory

We have created an implicit inventory in the `item-store` when we created the user, but this concept doesn't yet exist in the blockchain.
In fact, we're going to create a new blockchain inventory first and assign it to that user.

```bash
curl --location --request POST 'http://localhost:8000/tokenization-service/inventory' \
--header 'Content-Type: application/json' \
--data-raw '{
    # The user id is the alpha numeric unique Id returned when the user was created. It looks like "GvzrcnkBKbvuvgx_4Nrt"
    "user_id": "<user id>"
}'
```

Which returns the `user_id`: 

```json
{
    "user_id" : "<user id>"
}
```

Let's verify that the user has an inventory assigned:

```bash
curl --location --request GET 'http://localhost:8000/item-store/user/<user id>'
```

Which returns:

```json
{
    "user_id": 1,
    // looks like a Tezos Smart Contract address: KT1LwdiBVySJhWDyDuVWcywcM2VS8qw6aQFj
    "inventory_address": "<inventory KT1 address>"
}
```

Yes, we can see that this user now has an `inventory_address` added to the document as `KT1xxx` field.
The `KT1` string actually reprents a Tezos smart contract address. Indeed, each inventory is a Tezos smart contract.
Why does this matter to the user? If the user doesn't care about the blockchain, they may not need to know about the smart contract.
But if they're a bit more tech savvy and want to verify their inventory themselves, they can get presented with the address and can look for the item in the blockchain themselves.

Let's tokenize the inventory item and verify this.

## Mint inventory item

Let's now mint this inventory item.

For that, all we need to do is to call the relevant endpoint with the inventory item id. Remember that our id is random and can look like: `efzvcnkBKbvuvgx_ptpb`.
It was assigned when we created the inventory item.

If we look at the content of this inventory item:

```bash
curl --location --request GET 'http://localhost:8000/item-store/inventory/<inventory item id>'
```

```json
{
    "item_id": <item id>,
    "user_id": "<user id>",
    "instance_number": 1,
    "data": {
        "attribute": "platinum"
    }
}
```

We can see that instance `1` of item `<item id>` belongs to user `<user id>`. The tokenization service can assign the item to the right smart contract in the blockchain:

```
curl --location --request PUT 'http://localhost:8000/tokenization-service/inventory/<inventory item id>'
```

Which returns:

```json
{
    "item_id": <item id>,
    "instance_number": 1,
    "inventory_address": "<inventory KT1 address>"
}
```

Wow, our item instance is now the user's inventory smart contract. As a tech savvy user, let's verify. 

For that, we will use the community-platform's built-in Tezos explorer:

```
curl http://localhost:8002/explorer/contract/<inventory KT1 address>
```

```
{
  "address": "<inventory KT1 address>",
  "manager": "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
  "delegate": "",
  "height": 3733,
  "fee": 0.003615,
  "gas_limit": 27046,
  "gas_used": 26946,
  "gas_price": 0.13416,
  "storage_limit": 933,
  "storage_size": 676,
  "storage_paid": 676,
  "is_funded": false,
  "is_vesting": false,
  "is_spendable": false,
  "is_delegatable": false,
  "is_delegated": false,
  "first_in": 0,
  "first_out": 0,
  "last_in": 0,
  "last_out": 0,
  "first_seen": 3733,
  "last_seen": 3818,
  "delegated_since": 0,
  "first_in_time": "0001-01-01T00:00:00Z",
  "first_out_time": "0001-01-01T00:00:00Z",
  "last_in_time": "0001-01-01T00:00:00Z",
  "last_out_time": "0001-01-01T00:00:00Z",
  "first_seen_time": "2021-05-16T02:34:35Z",
  "last_seen_time": "2021-05-16T02:41:40Z",
  "delegated_since_time": "0001-01-01T00:00:00Z",
  "n_ops": 1,
  "n_ops_failed": 0,
  "n_tx": 1,
  "n_delegation": 0,
  "n_origination": 0,
  "token_gen_min": 0,
  "token_gen_max": 0,
  "bigmap_ids": [
    <bigmap id>
  ],
  "op_l": 3,
  "op_p": 0,
  "op_i": 0,
  "iface_hash": "f5cba41c",
  "call_stats": [
    1,
    0
  ]
}
```

That's a lot of information. We're now deep inside the blockchain and lots of information won't make sense, but we can still find our item from there.

Note that the `bigmap_ids` field has value `<bigmap id>`.
this means that this smart contract has a storage of type `bigmap` and that its id is `<bigmap id>`. We can browse this storage with this url:

```bash
curl http://localhost:8002/explorer/bigmap/<bigmap id>
```

which returns:

```json
{
  "contract": "<inventory KT1 address>",
  "bigmap_id": <bigmap id>,
  "n_updates": 1,
  "n_keys": 1,
  "alloc_height": 3733,
  "alloc_block": "BKpVN5tytX3mpAdEr8z4bsz5PhuKnKRzmTWKaGAWsFYbBsKgEKD",
  "alloc_time": "2021-05-16T02:34:35Z",
  "update_height": 3818,
  "update_block": "BMB5q21dA7nZBaNFTAEoxPkpSn9W4CPzSEESfiPwasuhseSU7Kt",
  "update_time": "2021-05-16T02:41:40Z",
  "type": {
    "key_type": "nat",
    "value_type": {
      "0@map": {
        "0": "nat",
        "1@map": {
          "0": "string",
          "1": "string"
        }
      }
    }
  }
}
```

We can see that it has 1 key (`n_keys`).

Let's list the keys:

```bash
curl http://localhost:8002/explorer/bigmap/<bigmap id>/keys
```

And now, let's see what's in key 1:

```bash
curl http://localhost:8002/explorer/bigmap/<bigmap id>/1
```

```json
{
  "key": "<item id>",
  "key_hash": "expru2dKqDfZG8hu4wNGkiyunvq2hdSKuVYtcKta7BWP6Q18oNxKjS",
  "key_binary": "1",
  "value": {
    "0@map": {
      "1": {
        "attribute": "platinum"
      }
    }
  },
  "meta": {
    "contract": "<inventory bigmap address>",
    "bigmap_id": <bigmap id>,
    "time": "2021-05-16T02:41:40Z",
    "height": 3818,
    "block": "BMB5q21dA7nZBaNFTAEoxPkpSn9W4CPzSEESfiPwasuhseSU7Kt",
    "is_replaced": false,
    "is_removed": false
  }
}
```

That's our legendary goose! We have verified that the smart contract had stored item id `<item id>` (`key` is the item id), with instance `1`, and it has the most recent attribute, `platinum`.

We're golden!