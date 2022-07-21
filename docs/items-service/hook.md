---
sidebar_position: 2
---

# Hook

The hook service allows the Playtix API to communicate with your application to inform you of an internal event.

## Process

When one or more events relevant to you are triggered, the API checks if a hook exists and sends the events to the registered URL.

An event that is relevant to you is an event that concerns an on chain item related to a game that you own.

## Subscribe to Playtix hook

Hook need just a few parameters to be created and subscribed :
* The Playtix Identifier of the game you want to receive the event for.
* The URL that the hook will call when an event is generated and caught.

A set can have multiple hooks, but all events will be sent to all hooks.
It's recommended to have only one hook.

## List of events that trigger the hook

### Change of owner

When an item has changed ownership, we generate an event with the following data :
* event : Contain "ItemOwnerChanged", this is the name of the event
* item_id : The Playtix Identifier of the item
* old_owner_player_id : The Playtix Identifier of the old player who owns the NFT, if the player is not registered and does not have a Playtix account, the value is null.
* new_owner_player_id : The Playtix Identifier of the new player who owns the NFT, if the player is not registered and does not have a Playtix account, the value is null.

### NFT burned
When an item is burned, we generate an event with the following data :
* event : Contain "ItemNftBurned", this is the name of the event
* item_id : The Playtix Identifier of the item
* owner_id : The Playtix Identifier of the player who owns the NFT, if the player is not registered and does not have a Playtix account, the value is null.
* schema_id : The Playtix identifier of the burned item schema.

## receiving a hook call

If you subscribe to Playtix hook, events are grouped and sent to the URL by a POST call.

The data is formatted in JSON like this :

```
[
    {
        "event": "ItemOwnerChanged",
        "item_id": "05c91bc0-6e47-4a2e-a863-b89f743cebb2",
        "old_owner_player_id": "a96a0762-50f4-4d51-aced-f2655864f46a",
        "new_owner_player_id": "192cb21f-4c29-4530-b4ba-290156ff38bd"
    }, {
        ...
    }, {
        "event": "ItemNftBurned",
        "item_id": "b36520eb-6e4d-4f43-881c-75da0ef61ab7",
        "owner_id": "a96a0762-50f4-4d51-aced-f2655864f46a",
        "schema_id": "3c44a275-0398-46e5-8466-9860122aa99a"
    }
]
```

All events are mixed in the same array, you have to check which type of event you receive individually.

Use the "event" parameters to check the type of event.