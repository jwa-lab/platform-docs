---
sidebar_position: 3
---

# Create a new item

_Note: to follow this tutorial, simply copy/paste the `curl` requests, or use the [Postman collection located here](https://github.com/jwa-lab/item-store/blob/main/postman_collection/JWA%20Platform%20-%20Item%20Store.postman_collection.json)_

Let's start by creating an item in the platform. An item can be used in your video games. For instance,
if you're a farmer raising poultry, you may hope to one day find a golden goose. A golden goose is a very rare and desirable animal,
so we'll only create 10 of them. We'll start by adding the golden goose to the `item-store`:

```bash
% curl --location --request POST 'http://localhost:8000/api/item-store/item' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Golden Goose",
    "data": {
        "level": "rare",
        "type": "goose",
        "attribute": "gold"
    },
    "total_quantity": 10,
    "available_quantity": 10
}'
```

Which will return a new `item_id`:

```json
{
    // item id is a number. It starts with 1 and increased by 1, so an item id looks like 1, 2, 1000, 1337...
    "item_id": <item id>
}
```

## Retrieve item

We have now created our first item in the platform. Let's retrieve it to see what it looks like:

```bash
% curl --location --request GET 'http://localhost:8000/api/item-store/item/<item id>'
```

```json
{
    "name": "Golden Goose",
    "data": {
        "level": "rare",
        "type": "goose",
        "attribute": "gold"
    },
    "total_quantity": 10,
    "available_quantity": 10,
    // Reflect the item id back. It's a number like 1, 2, 1000, 1337..
    "item_id": <item id>
}
```

Notice that when we created the item, we didn't specify an item id.
When the item was created, an id was automatically generated for us.
The fact that the `item_id` is an integer and that it monotonically increases will be important later, let's keep that in mind.
When we retrieve the item, the `item_id` is now part of the item.

## Update item

Let's assume that we made a mistake when we created the item. A Golden Goose is actually more than rare, it's legendary and there can only be one.

```bash
% curl --location --request PUT 'http://localhost:8000/api/item-store/item/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Golden Goose",
    "data": {
        "level": "legendary",
        "type": "goose",
        "attribute": "gold"
    },
    "total_quantity": 1,
    "available_quantity": 1,
    # The item id is the numeric id that was returns when the item was first created. it looks like 1, 2, 1000, 1337..
    "item_id": <item id>
}'
```

Which returns the `item_id`:

```json
{
    "item_id": <item id>
}
```

Let's retrieve the item again to verify that it was updated:

```bash
curl --location --request GET 'http://localhost:8000/api/item-store/item/<item id>'
```

```json
{
    "name": "Golden Goose",
    "data": {
        "level": "legendary",
        "type": "goose",
        "attribute": "gold"
    },
    "total_quantity": 1,
    "available_quantity": 1,
    "item_id": <item id>
}
```

Awesome! We can now create, get and update items.

## Purpose of the item store

As you noticed, creating, updating or retrieving an item only takes a few milliseconds.
The reasons is that the item store is a fast storage based on [ElasticSearch](https://www.elastic.co/). ElastichSearch will allow us
to index a great number of documents and make them easily searchable.

We haven't created our NFT yet, for now, the item only exists in the platform, not on the blockchain.

Let's now move our item to the blockchain.

