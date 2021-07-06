---
sidebar_position: 5
---

# Assign an item

_Note: to follow this tutorial, simply copy/paste the `curl` requests, or use the [Postman collection located here](https://github.com/jwa-lab/item-store/blob/main/postman_collection/JWA%20Platform%20-%20Item%20Store.postman_collection.json)_

At this point, we have created an item and minted it in the blockchain, or tokenized it.
The item is still owned by the creator, it hasn't yet been assigned to a user or a player for use.

Before assigning an item to a user, we need to create a user:

## Create a user

A user is a simple entity in the `item store` used to group items that belong to the same user. The user is anonymous and doesn't contain any non-public information or game specific information, it's mostly a unique identifier.

Let's create our first user. For convenience, we do assign it a `user_id` but it doesn't need to be unique, it can be used to link the JWA Platform's user id to a user id in the video game editor's database for instance.

```bash
curl --location --request POST 'http://localhost:8000/api/item-store/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    # user id is custom, doesn't need to be unique and is specified by the video game editor. It needs to be a number though.
    "user_id": 42
}'
```

Which returns a user document:

```json
{
    // document alphanum id looks like "GvzrcnkBKbvuvgx_4Nrt" and is a string. It's automatically generated
    "user_id": "<document alphanum id>"
}
```

## Get user

We can now retrieve a user using its unique id:

```bash
# the <document alphanum id> is a string and it looks something like "GvzrcnkBKbvuvgx_4Nrt"
curl --location --request GET 'http://localhost:8000/api/item-store/user/<document alphanum id>'
```

Which returns the initial user:

```json
{
    // user id is the id specified by the video game editor
    "user_id": 42
}
```

To distinguish between the two ids: the document itself contains a `user_id` defined by us. The `id` could be `42` for instance.
The user document in the platform has an automatically generated alpha numeric `id` which looks like `GvzrcnkBKbvuvgx_4Nrt`. If we want to retrieve
the user in the platform, we need to use the unique id which looks like `GvzrcnkBKbvuvgx_4Nrt`, and it's part of the url.

## Assign item

We now have an item in the `item-store`, and a `user` as well. We can assign the item to the user.
For that, we will pass the user's unique id, which looke like `GvzrcnkBKbvuvgx_4Nrt` and the item `id` that we'd like to assign:

```bash
curl --location --request POST 'http://localhost:8000/api/item-store/inventory' \
--header 'Content-Type: application/json' \
--data-raw '{
    # user id is a string and it looks like "GvzrcnkBKbvuvgx_4Nrt"
    "user_id": "<user id>",
    # item id is a number like 1, 1000, 1337. It was assign when we first created the item.
    "item_id": <item id>
}'
```

which returns:

```json
{
    // this is a new type of id, it's an alpha numeric string that looks weird like the <user id>, something like "efzvcnkBKbvuvgx_ptpb"
    "inventory_item_id": "<inventory item id>"
}
```

This operation returns an inventory item. The concept of an inventory is new, so let's explain what happened:

Let's assume we had created `10` `golden geese`. We have 1 item in `item-store` with quantity `10` which means that `10` users may buy one before it's sold out.
Each buyer will have their own **copy** of the item, which can evolve independently.
You could imagine the original item as being the prototype, or mold for new items. Now, if we want to purchase one, we will create a unique instance of that item which can have
its own life. It can be updated (if the golden goose turns into platinum?), or it can be sold to another user, so each copy will evolve differently and indenpendently from the others.
To store the copy, we will create an inventory, linked to a user (1 user = 1 inventory), and all items owned by a user will be stored in the user's single inventory.
Now, each inventory item can still be addressed using its own unique id which is automatically generated.

The inventory item tracks the unique id for the item, the user id, and some data. Let's take a look.

## Get inventory item

Let's see what an inventory item looks like:

```curl
curl --location --request GET 'http://localhost:8000/api/item-store/inventory/<inventory item id>'
```

```json
{
    // The item id is the original item id, which is a number like 1, 2, 1000, 1337...
    "item_id": <item id>,
    "user_id": "<user id>",
    "instance_number": 1,
    "data": {}
}
```

We can see that the inventory item points to the item with id `<item id>`, it belongs to user `<user id>` and it has instance_number `1`. It also has an empty `data` field.
The `instance_number` means that user `<user id>` got the first item, `1`.
The `data` field only stores the fields that have changed from the original item. For now the item hasn't evolved, it has only be assigned, so there are no differences.
So how do I know what the item looks like? Simple, remember that the `item_id` is unique. So if I take id `<item id>` and retrieve the item in the item store, I can get its current status:

```bash
curl --location --request GET 'http://localhost:8000/api/item-store/item/<item id>'
```

Which returns:

```json
{
    "name": "Golden Goose",
    "data": {
        "level": "legendary",
        "type": "goose",
        "attribute": "gold"
    },
    "total_quantity": 1,
    "available_quantity": 0,
    "item_id": <item id>
}
```

So here we are, we can see that the item is our Golden Goose and we can see its attributes.
One thing to notice, given that we just assigned the item, we can see that the `available_quantity` has decreased by 1.
This means that the item can no longer be assigned, the item is sold out. After all, it's a legendary item, there aren't that many of them in our world.

Let's verify that:

## Assigning sold out item

In theory, we could assign the same item multiple times to the same user. What if a user wants to purchase multiple copies of the same item?
So let's try to assign the Goolden Goose again, to the same user:

```bash
curl --location --request POST 'http://localhost:8000/api/item-store/inventory' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user_id": "<user id>",
    "item_id": <item id>
}'
```

Which returns:

```json
{
    "message": "ITEM_SOLD_OUT: <item id>"
}
```

With an `HTTP` error of `400`.

Pretty explicit, the item is sold out and can't be assigned anymore, hence the error.

## Updating an assigned item.

Our golden goose is now assigned to the user.
Let's say the goose has evolved and is now made of platinum, we could update it in the inventory:

```bash
# remember that we received the inventory item id (looks like "efzvcnkBKbvuvgx_ptpb") when we first assigned the item to a user.
# don't include the wrapping quotes " in the url
curl --location --request PUT 'http://localhost:8000/api/item-store/inventory/<inventory item id>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "attribute": "platinum"
}'
```

We have updated the `attribute` field, let's verify it:

```bash
curl --location --request GET 'http://localhost:8000/api/item-store/inventory/<inventory item id>'
```

Which returns:

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

Remember that the original item can't change, it's immutable:

```bash
curl --location --request GET 'http://localhost:8000/api/item-store/item/1'
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
    "available_quantity": 0,
    "item_id": <item id>
}
```

But the inventory item can, because each copy can now evolve differently.
The inventory item only contains the difference between the original item and the inventory item in its `data` field.

Now that we've assigned an item and updated it, let's store its new state in the blockchain.

