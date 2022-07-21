---
sidebar_position: 2
---

# Resources conversions

In order to allow players to convert the resources they gathered in your game into an on-chain Fungible Token (FT), a 
resource must be linked to that specific token.
This operation is currently performed manually by the PlayTiX team. Contact us !

The conversion of resources involves a blockchain transaction to assign the token to the player's wallet. This 
transaction can take quite some time depending on the blockchain and the current status of the network.
For this reason, the conversion of resource is an asynchronous process.

You start by requesting the conversion of resources by calling the `/conversions/convert-resources` endpoint

Example of a raw HTTP request
```http request
POST /conversions/convert-resources
```

After that you can call the `/conversions/status/{conversion_id}` endpoint to read the status of the conversion and 
verify that it completed as expected.

Example of a raw HTTP request
```http request
GET /conversions/status/0795aeca-a6e4-4629-aab3-f476a8753a34
```
