---
sidebar_position: 6
---

# tezos-client

The community platform is also running a tezos client. The tezos client is a CLI that issues `RPC` calls to the tezos sandbox.
This is different than the `<protocol>box` command as it doesn't manage the node but consumes it.

You can use the built-in tezos client to create wallets, originate contracts, transfer tezos between addresses and many other things.

To see how to use the client, please refer to the [official documentation](https://assets.tqtezos.com/docs/setup/1-tezos-client/).

```sh
$ jwalab tezos-client -- --help
```