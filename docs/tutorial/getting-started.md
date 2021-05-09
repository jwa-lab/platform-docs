---
sidebar_position: 1
---

# Getting started

## What will we do?
 
By following this tutorial you will be able to:

- Create a video game item
- Tokenize it on the blockchain (mint an NFT)
- Create a user, or owner for the item
- Assign the item to its owner in the blockchain

## What do you need?

To use this platform, you will need the following tools installed on your local machine:

1. [Docker](https://www.docker.com/)
1. [Node.js](https://nodejs.org/en/) with [NPM](https://www.npmjs.com/)
1. An HTTP Client such as [Postman](https://www.postman.com/) or [curl](https://curl.se/).

## Install

Make sure you have [Docker](https://docs.docker.com/get-docker/) and [Node.js](https://nodejs.org/en/download/) installed first.

Then simply install the community platform globally on your machine:

```bash
% npm install -g @jwalab/community-platform

changed 11 packages, and audited 12 packages in 2s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

You should have it globally installed:

```bash
% jwalab --help

Usage: jwalab a.k.a JWA Community platform [global options] command

JWA_LAB - v0.0.13
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
  carthagebox     run a command in carthagebox
  help [command]  display help for command
```

## Start

```bash
% jwalab start

The WAREHOUSE_CONTRACT_ADDRESS variable is not set. Defaulting to a blank string.
Creating network "community-platform_default" with the default driver
Creating community-platform_elasticsearch_1 ... done
Creating community-platform_kibana_1        ... done
Creating community-platform_nats_1          ... done
Creating community-platform_carthagebox_1   ... done
Creating community-platform_item-store_1           ... done
Creating community-platform_tzindex_1              ... done
Creating community-platform_airlock_1              ... done
Creating community-platform_tokenization-service_1 ... done
Creating community-platform_tzstats_1              ... done
```

Verify that everything is running:

```bash
 % docker ps
CONTAINER ID        IMAGE                                                 COMMAND                  CREATED             STATUS              PORTS                                                                    NAMES
bfb6769cbc34        blockwatch/tzstats                                    "/bin/sh -c serve"       2 minutes ago       Up 2 minutes        8000/tcp, 0.0.0.0:8001->8001/tcp                                         community-platform_tzstats_1
060431575fd2        jwalab/tokenization-service                           "npm run start"          2 minutes ago       Up 2 minutes                                                                                 community-platform_tokenization-service_1
fd3d2e9547f1        jwalab/airlock:latest                                 "npm run start"          2 minutes ago       Up 2 minutes        8000/tcp, 0.0.0.0:50051->50051/tcp                                       community-platform_airlock_1
75658ff87632        blockwatch/tzindex                                    "docker-entrypoint.s…"   2 minutes ago       Up 2 minutes        8000/tcp, 0.0.0.0:8002->8002/tcp                                         community-platform_tzindex_1
19530b55434d        jwalab/item-store                                     "npm run start"          2 minutes ago       Up 2 minutes                                                                                 community-platform_item-store_1
9403eb352be3        nats:latest                                           "/nats-server --conf…"   2 minutes ago       Up 2 minutes        0.0.0.0:4222->4222/tcp, 0.0.0.0:6222->6222/tcp, 0.0.0.0:8222->8222/tcp   community-platform_nats_1
0aa511d98cbc        tqtezos/flextesa:20200925                             "carthagebox start"      2 minutes ago       Up 2 minutes        0.0.0.0:20000->20000/tcp                                                 community-platform_carthagebox_1
b6b6cfcf7d9f        docker.elastic.co/kibana/kibana:7.9.2                 "/usr/local/bin/dumb…"   2 minutes ago       Up 2 minutes        0.0.0.0:5601->5601/tcp                                                   community-platform_kibana_1
998cbafcbeea        docker.elastic.co/elasticsearch/elasticsearch:7.9.2   "/tini -- /usr/local…"   2 minutes ago       Up 2 minutes        0.0.0.0:9200->9200/tcp, 0.0.0.0:9300->9300/tcp                           community-platform_elasticsearch_1
```

You should see the following services:

`elasticsearch`, `flextesa`, `nats` `airlock`, `tzindex`, `tokenization-server`, `item-store`.

You're now up and running! Next, let's start creating a new item.