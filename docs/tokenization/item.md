---
sidebar_position: 2
---

# Item

An item is created and owned by a studio and is composed of a set of characteristics that can be modified until it gets marked as immutable.

### Characteristics

<u>those fields need to be specified when first creating an item:</u>

When using the APIs to create/update an item, you will have to specify those fields.

| Field            | Description                                                       | Data type                                                               | Notes                                                                                                                                      |
| ---------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `frozen`         | Indicates if an item can still be modified or not                 | `boolean`                                                               | Once set to true, an item can't be modified. This is enforced by the smart contract itself                                                 |
| `name`           | Name of the item. This is free text and doesn't need to be unique | `string`                                                                | there's a max length of 100 chars                                                                                                          |
| `data`           | An object containing the items characeteristics                   | JSON Object, each value must be a `string`. E.g: `{ "color": "green" }` | Values can only be strings, no nesting allowed                                                                                             |
| `total_quantity` | The total number of items to be assigned                          | `number`                                                                | Should be greater than `0`. There's no upper bound, but we believe that if an item is "too" available it may not make sense to tokenize it |

<u>Automatically assigned fields:</u>

When creating items, some fields are automatically added by the platform.

| Field                | Description                                                                       | Data type | Notes                                                                                                                                                              |
| -------------------- | --------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `item_id`            | The item's id                                                                     | `number`  | The value in this field is automatically assigned to the item and may never be changed. It's used to locate the item in the blockchain                             |
| `studio_id`          | The studio unique identifier                                                      | `string`  | The value in this field comes from our directory of users. This allows us to know who owns the items and prevents studios from accessing items that they don't own |
| `available_quantity` | This number indicates how many items are left to be sold when the item is created | `number`  | Is initially set to `total_quantity` and then decreases by `1` for each instance assgined.                                                                         |

<u>Tokenization related fields:</u>

When items are tokenized, some additional fields are populated so we can find our items in the blockchain.

| Field                    | Description                                        | Data type | Notes                                                                                                                                                                                                                               |
| ------------------------ | -------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tezos_operation_hash`            | The tezos operation to track the item's tokenization | `string`  | The last time the item was tokenized, it was tokenized in this operation. There may be some delay between a tokenization request, or change in the item's data, and the moment the item is baked into a block and this field is updated |                                                                                                                                |

### How to design a tokenizable item

Items that are too common are probably less desirable and may not require any tokenization. Only items that users are interested in buying should be tokenized and put up for sell. Also, only an item's interesting or important characteristics should be tokenized.
For instance, if we're tokenizing a "green" "family car", then the color, the type of the car are important. Most cars have a steering mechanism, brakes or some sort of door to get in an out, so those characteristics don't need to be tokenized. Unless, the braking mechanism has a direct impact on the performance of the car and your game design values this characteristics.

So a rule of thumb would be to only tokenize items that have some scarcity, and to only tokenize the characteristics that make them different from other similar items based on your game design or application design.

Items have a base set of characteristics that at some point will become immutable, we won't be able to change them. We should be careful when designing an item to have the right characteristics before "freezing" it. If we make a mistake, that's fine, we can either create a new item and stop supporting the "broken" item in our applications, or we can "patch" the instances.

The reasoning behind "freezing" an item is that item owners need some guarantee that the items they've purchased won't change without their consent. Imagine paying a steep price for a rare item that would then turn into a common item because the item wasn't frozen and the studio changed their mind about its scarcity. They would most likely be annoyed and ask for their money back. That way, freezing an item brings some reassurance to the buyer.

### Freezing an item

All of an item's characteristics can be updated until the item is frozen. That means all the fields specified when creating an item, not the automatic ones.
Once an item is frozen, none of the characteristics can change. This is enforced in the smart contract.

It's still possible to sell, or assign an item to a user before the item is frozen, but the user knows that item may still change and may be more reluctant to purchase it, or maybe at a lower price. This should be taken into consideration when choosing to freeze/not freeze an item.

### Tokenization cost

The cost of tokenizing an item is determined by 2 factors:

1. The gas cost of executing the tokenization. We can call it the "computing cost".
2. The current value of the [`XTZ`](https://coinmarketcap.com/currencies/tezos/) in FIAT currency, the cryptocurrency used to pay for the computing cost.

The computing cost is determined by the number of instructions it takes to execute our smart contract and the size of the object to store.
As a rule of thumb, `1KB` of storage costs `1tz`. You can find [here](https://github.com/jwa-lab/tokenization-service-contracts#011-with-security) an estimate in `tz` of the cost of running each tokenization operation.

An average-sized item will cost `~0.05tz` to create. This value will change with each protocol change but it should only increase/decrease to keep a low and constant overall cost in FIAT, so there will be some volatility but it can never increase so much that the blockchain will be too expensive to run, that's a benefit of Tezos.
