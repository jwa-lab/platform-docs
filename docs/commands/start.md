---
sidebar_position: 2
---

# start

`start` is the first command to run once the platform is [installed](/docs/tutorial/getting-started).

```sh
$ jwalab start
```

Start will orchestrate the start up of all the platform's services in the right order as well as configure all the services so they find each other and work together to offer their services.

The platform doesn't maintain state between restarts, so if you start, stop, and start the platform again it will start with a completely fresh state.

## Verify

To verify if `start` worked, you can run a `docker ps -f name=^/community-platform` and you should see the following

```
% docker ps -f name=^/community-platform
CONTAINER ID   IMAGE                                COMMAND                  CREATED         STATUS         PORTS                                                                                         NAMES
fbbb3d82e671   blockwatch/tzstats                   "/bin/sh -c serve"       8 minutes ago   Up 8 minutes   8000/tcp, 0.0.0.0:8001->8001/tcp, :::8001->8001/tcp                                           community-platform_tzstats_1
56bcfc485126   jwalab/tezos-work-queue:0.0.1        "sh -c 'sleep 10 && …"   8 minutes ago   Up 8 minutes                                                                                                 community-platform_tezos-work-queue_1
17905a1b0463   jwalab/item-service:0.0.2            "sh -c 'npm run seed…"   8 minutes ago   Up 8 minutes                                                                                                 community-platform_item-service_1
876d0ce8d712   blockwatch/tzindex:v9.1-rc2          "docker-entrypoint.s…"   8 minutes ago   Up 8 minutes   8000/tcp, 0.0.0.0:8002->8002/tcp, :::8002->8002/tcp                                           community-platform_tzindex_1
8e079198af28   jwalab/airlock:0.0.8                 "npm run start"          8 minutes ago   Up 8 minutes   0.0.0.0:8000->8000/tcp, :::8000->8000/tcp                                                     community-platform_airlock_1
60a45d9ff8bd   tqtezos/flextesa:20210602            "granabox start"         8 minutes ago   Up 8 minutes   0.0.0.0:20000->20000/tcp, :::20000->20000/tcp                                                 community-platform_tzbox_1
b373edf3ce8b   nats:latest                          "/nats-server -js"       8 minutes ago   Up 8 minutes   0.0.0.0:4222->4222/tcp, :::4222->4222/tcp, 0.0.0.0:51762->6222/tcp, 0.0.0.0:51763->8222/tcp   community-platform_nats_1
70555597b654   postgres                             "docker-entrypoint.s…"   8 minutes ago   Up 8 minutes   0.0.0.0:5432->5432/tcp, :::5432->5432/tcp                                                     community-platform_postgres_1
270722eb8fdd   jwalab/authorization-service:0.0.4   "npm run start"          8 minutes ago   Up 8 minutes   0.0.0.0:8999->8999/tcp, :::8999->8999/tcp                                                     community-platform_authorization-service_1
df16bdf96d9d   swaggerapi/swagger-ui                "/docker-entrypoint.…"   8 minutes ago   Up 8 minutes   80/tcp, 0.0.0.0:8080->8080/tcp, :::8080->8080/tcp                                             community-platform_swagger-ui_1
```

## Troubleshoot

To start, the platform will need access to a number of ports, and some of they may already be used on your local machine. Please refer to the [platform's documentation](https://github.com/jwa-lab/community-platform#changing-ports) to see how to remap the ports.
