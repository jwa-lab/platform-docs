---
sidebar_position: 1
---

# Overview

The Community Platform is only a tool orchestrating a number of services offering [REST Apis](/docs/reference) to their users.
As a result, the platform itself doesn't offer many features. In this section, we'll cover the commands that the platform offers.

### Help

At anytime, you can use the tool to see the available options using the `--help` option.

```sh
$ jwalab --help

Usage: jwalab a.k.a JWA Community platform [global options] command

JWA_LAB - v0.1
Run a JWA Community platform (jwalab) on your local machine!


Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  start           start the jwalab environment
  stop            stop the jwalab environment
  kill            kill the jwalab environment
  pull            download the latest versions of the platform's services
  tezos-client    run a command in the tezos-client
  granabox        run a command in granabox
  list-services   list all running services and the port they expose
  logs            view platform logs
  help [command]  display help for command
```

These commands allow us to start/stop the platform and do some basic observability.