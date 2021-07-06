---
sidebar_position: 4
---

# Mint an existing item

_Note: to follow this tutorial, simply copy/paste the `curl` requests, or use the [Postman collection located here](https://github.com/jwa-lab/tokenization-service/blob/main/postman_collection/JWA%20Platform%20-%20Tokenization%20Service.postman_collection.json)_

We have now created an item in the item store and we want to move it to the blockchain. Our item has an `id` which is a number greater than `1`. It was asigned when the item was first created.
Moving the item to the blockchain will effectively create our first NFT!


```bash
% curl --location --request PUT 'http://localhost:8000/api/tokenization-service/warehouse/<item id>'
```

Which will return the object as it was retrieved from the item store:

```json
{
    "available_quantity": 1,
    "data": {
        "level": "legendary",
        "type": "goose",
        "attribute": "gold"
    },
    "item_id": <item id>,
    "name": "Golden Goose",
    "total_quantity": 1
}
```

This requests takes some time to execute, because writing an item in the blockchain is slow and the request is synchronous, it will only complete when the operation completes in the Tezos blockchain.
Also note the `PUT` request and the `item_id` in the URL. There is no need to describe the item, its current state will be read directly from the item store.

We have now tokenized, or minted, our first item as an NFT. Let take a look in the blockchain!


## Get Warehouse smart contract address

First, let's obtain the smart contract address that holds all items:

```bash
curl --location --request GET 'http://localhost:8000/api/tokenization-service/info'
```

which returns:

```json
{
    "warehouse_address": "<warehouse contract KT1 address>"
}
```

Using this address, we can find its details in the blockchain:

```bash
curl http://localhost:8002/explorer/contract/<warehouse contract KT1 address>
```

Which returns

```json
{
  "address": "<warehouse contract KT1 address>",
  "manager": "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
  "delegate": "",
  "height": 3,
  "fee": 0.007314,
  "gas_limit": 53481,
  "gas_used": 53381,
  "gas_price": 0.13702,
  "storage_limit": 1974,
  "storage_size": 1717,
  "storage_paid": 1717,
  "is_funded": false,
  "is_vesting": false,
  "is_spendable": false,
  "is_delegatable": false,
  "is_delegated": false,
  "first_in": 0,
  "first_out": 0,
  "last_in": 0,
  "last_out": 0,
  "first_seen": 3,
  "last_seen": 19,
  "delegated_since": 0,
  "first_in_time": "0001-01-01T00:00:00Z",
  "first_out_time": "0001-01-01T00:00:00Z",
  "last_in_time": "0001-01-01T00:00:00Z",
  "last_out_time": "0001-01-01T00:00:00Z",
  "first_seen_time": "2021-05-17T04:06:03Z",
  "last_seen_time": "2021-05-17T04:09:28Z",
  "delegated_since_time": "0001-01-01T00:00:00Z",
  "n_ops": 5,
  "n_ops_failed": 0,
  "n_tx": 5,
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
  "iface_hash": "131b099e",
  "call_stats": [
    1,
    2,
    0,
    0
  ]
}
```

Notice that the smart contract is assigned a storage in the form of a bigmap. You can find its bigmap id in the response.

Using the bigmap id, let's see all available items:

```curl
curl http://localhost:8002/explorer/bigmap/<bigmap id>
```

Which returns:

```json
{
  "contract": "KT1SPr1ZaoEwpB354PybTocYbfcbfqhjtfj9",
  "bigmap_id": <bigmap id>,
  "n_updates": 3,
  "n_keys": 1,
  "alloc_height": 3,
  "alloc_block": "BMWxxCLW9zSWpbhoXdEXeJh52zJL9veKGVLKhLDFNzNKo3H9HkN",
  "alloc_time": "2021-05-17T04:06:03Z",
  "update_height": 19,
  "update_block": "BM9tifLhBceZQQ3iVR2q6sbLVZ422jXm3ZEcneZfFEViE5LALaF",
  "update_time": "2021-05-17T04:09:28Z",
  "type": {
    "key_type": "nat",
    "value_type": {
      "available_quantity": "nat",
      "data@map": {
        "0": "string",
        "1": "string"
      },
      "item_id": "nat",
      "name": "string",
      "no_update_after@option": {
        "0": "timestamp"
      },
      "total_quantity": "nat"
    }
  }
}
```

You can see that it currently has `n_keys` `1`, which means it has one key, or one entry. Let's see what that is:

```curl
curl http://localhost:8002/explorer/bigmap/1/keys
```

which returns the list of keys:

```bash
[
  {
    "key": "1",
    "key_hash": "expru2dKqDfZG8hu4wNGkiyunvq2hdSKuVYtcKta7BWP6Q18oNxKjS",
    "key_binary": "1",
    "meta": {
      "contract": "KT1SPr1ZaoEwpB354PybTocYbfcbfqhjtfj9",
      "bigmap_id":<bigmap id>,
      "time": "2021-05-17T04:09:28Z",
      "height": 19,
      "block": "BM9tifLhBceZQQ3iVR2q6sbLVZ422jXm3ZEcneZfFEViE5LALaF",
      "is_replaced": false,
      "is_removed": false
    }
  }
]
```

Notice that there's only one key with index 1. Let's dig into it:

```bash
curl http://localhost:8002/explorer/bigmap/<bigmap id>/<key id>
```

```json
{
  "key": "1",
  "key_hash": "expru2dKqDfZG8hu4wNGkiyunvq2hdSKuVYtcKta7BWP6Q18oNxKjS",
  "key_binary": "1",
  "value": {
    "available_quantity": "1",
    "data": {
      "attribute": "gold",
      "level": "legendary",
      "type": "goose"
    },
    "item_id": "1",
    "name": "Golden Goose",
    "no_update_after": null,
    "total_quantity": "1"
  },
  "meta": {
    "contract": "KT1SPr1ZaoEwpB354PybTocYbfcbfqhjtfj9",
    "bigmap_id": 1,
    "time": "2021-05-17T04:09:28Z",
    "height": 19,
    "block": "BM9tifLhBceZQQ3iVR2q6sbLVZ422jXm3ZEcneZfFEViE5LALaF",
    "is_replaced": false,
    "is_removed": false
  }
}
```

Here's our golden goose!

## Get a warehouse item by id

We know the id of our warehouse item, instead of looking directly inside the blockchain, let's retrieve it via a rest call:

```bash
curl --location --request GET 'http://localhost:8000/api/tokenization-service/warehouse/1'
```

Which returns

```json
{
    "available_quantity": 1,
    "name": "Golden Goose",
    "item_id": 1,
    "total_quantity": 1,
    "data": {
        "attribute": "gold",
        "level": "legendary",
        "type": "goose"
    }
}
```

Now that we have created items, let's assign them to users.