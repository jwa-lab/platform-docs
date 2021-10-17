---
sidebar_position: 3
---

# Instance

An instance is the copy of an item that is assigned to a user.
The initial assignment to a user is usually done by the studio as the studio is the original, implicit owner of an item they just manufactured. Once the item is assigned to a user, it may then be transferred to other users.

On top of the current user, an instance will also contain the set of characteristics that have evolved from the initial item.
This is what will make each instance different and will infer a different value.

Finally, an item instance is uniquely identified by the original `item_id` and its `instance_number`.

### Characteristics

<u>those fields need to be specified when first creating an item:</u>

When using the APIs to manage instances, you will have to specify those fields.

| Field     | Description                                              | Data type                                    | Notes                                                                                                                                                                                                                                                          |
| --------- | -------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `item_id` | The item from which this item derives                    | `number`                                     |                                                                                                                                                                                                                                                                |
| `user_id` | The user that currently owns this instance               | `string`                                     | The studio knows how to track users, and their system will determine the value for this field. If the studio uses their own directory, they may use their own user ids in this field, but if they use PlayTiX Connect then the `user_id` will be an Okta user. |
| `data`    | The new set of characteristics specific to that instance | A JSON object where each value is a `string` | The data fields in the instance will override the data fields in the original item, without mutating the original item                                                                                                                                         |

<u>Automatically assigned fields:</u>

When creating instances, some fields are automatically added by the platform.

| Field             | Description                                                                | Data type | Notes                                                                                   |
| ----------------- | -------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------- |
| `instance_number` | The number of the instance that was assigned when the instance was created | `number`  | This instance_number is assigned upon creation of the instance and can never be changed |

<u>Tokenization related fields:</u>

When items are tokenized, some additional fields are populated so we can find our items in the blockchain.

| Field                    | Description                                        | Data type | Notes                                                                                                                                                                                                                               |
| ------------------------ | -------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tezos_block`            | The tezos block in which the transaction was baked | `string`  | The last time the item was tokenized, it was tokenized in this block. There may be some delay between a tokenization request, or change in the item's data, and the moment the item is baked into a block and this field is updated |
| `tezos_contract_address` | The smart contract where this item is stored       | `string`  | Using the smart contract address and the item_id it's possible to find the item in the blockchain                                                                                                                                   |

## Final characteristics of an instance

An item contains the basic characteristics of all its instances.
An instance will augment the basic characteristics with its own set of characteristics based on how the item has evolved.

To rebuild the final set of characteristics of an instance, we execute the following operation:

<u>Item data</u>

| Data Field Name | Data Field Value |
| --------------- | ---------------- |
| level           | rare             |
| color           | green            |

**+**

<u>Instance data</u>

| Data Field Name | Data Field Value |
| --------------- | ---------------- |
| color           | blue             |
| tear            | 10%              |

**=**

<u>Resulting data</u>

| Data Field Name | Data Field Value |
| --------------- | ---------------- |
| level           | rare             |
| color           | blue             |
| tear            | 10%              |

### Tokenization cost

The cost of tokenizing an instance is similar to the cost of creating a new item as it's determined by the same 2 factors:

1. The cost of executing the operation on the blockchain
1. The current value of the [`XTZ`](https://coinmarketcap.com/currencies/tezos/) in FIAT currency.

As per the last version of our [smart contracts](https://github.com/jwa-lab/tokenization-service-contracts#011-with-security), assigning an instance costs `~0.03tz`.
