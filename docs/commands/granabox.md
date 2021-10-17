---
sidebar_position: 7
---

# granabox (protocol)

The community platform is running a Tezos sandbox to tokenize items. `Granabox` means a Tezos Sand_box_ (it's a Tezos node) running the _Granada_ protocol.
To access the sandbox' client, you can use the `granabox` command:

```sh
$ jwalab granabox -- --help
```

The extra `--` are not a typo, the first `--` after `granabox` indicate that we're passing all the parameters after that to the `granabox` client running in the sandbox.
It's a way to pass command line arguments from a wrapper process inside a nested process which is a standard posix command.

This essentially means that you can pass any option to the client:

```sh
$ jwalab granabox -- info
```

