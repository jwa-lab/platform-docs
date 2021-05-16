---
sidebar_position: 3
---

# Mint an existing item

_Note: to follow this tutorial, simply copy/paste the `curl` requests, or use the [Postman collection located here](https://github.com/jwa-lab/tokenization-service/blob/main/postman_collection/JWA%20Platform%20-%20Tokenization%20Service.postman_collection.json)_

We have now created an item in the item store and we want to move it to the blockchain. Our item has an `id` which is a number greater than `1`. It was asigned when the item was first created.
Moving the item to the blockchain will effectively create our first NFT!


```bash
% curl --location --request PUT 'http://localhost:8000/tokenization-service/warehouse/<item id>'
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


**INSERT HERE CODE TO RETRIEVE WAREHOUSE CONTRACT ID AND LOOKUP THE THINGY IN THE BLOCKCHAIN**