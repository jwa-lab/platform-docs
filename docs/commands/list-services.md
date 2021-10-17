---
sidebar_position: 8
---

# list-services

The command lists all the services that expose ports to the local machine.
This is a useful debugging tool that helps us remap unavailable ports and identify which service uses which port.

```sh
$ jwalab list-services

┌─────────┬─────────────────┬─────────────┬────────────────────────────┐
│ (index) │  Service Name   │ Mapped Port │    ENV VAR for override    │
├─────────┼─────────────────┼─────────────┼────────────────────────────┤
│    0    │    'Airlock'    │    8000     │   'JWALAB_AIRLOCK_PORT'    │
│    1    │ 'Auth Service'  │    8999     │ 'JWALAB_AUTH_SERVICE_PORT' │
│    2    │     'NATS'      │    4222     │     'JWALAB_NATS_PORT'     │
│    3    │  'PostgreSQL'   │    5432     │   'JWALAB_POSTGRES_PORT'   │
│    4    │  'Swagger UI'   │    8080     │   'JWALAB_SWAGGER_PORT'    │
│    5    │ 'Tezos Sandbox' │    20000    │    'JWALAB_TZBOX_PORT'     │
│    6    │    'TzIndex'    │    8002     │   'JWALAB_TZINDEX_PORT'    │
│    7    │    'TzStats'    │    8001     │   'JWALAB_TZSTATS_PORT'    │
└─────────┴─────────────────┴─────────────┴────────────────────────────┘
```

Here we can see the port used by each service.

If we need to remap any of those ports, we can use the associated environment variable for override:

```
$ JWALAB_AIRLOCK_PORT=9000 jwalab start
```

Please refer to the [platform's documentation](https://github.com/jwa-lab/community-platform#changing-ports) for more information.