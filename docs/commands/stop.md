---
sidebar_position: 3
---

# stop

Stop is the opposite of start. If you wish to free up some resources you may call stop at any time. This will tear down all running containers.

```sh
$ jwalab stop
```

To restart the platform after a `stop` you may simply call `start` again. Starting the platform again will restart it with the initial state and all data will be lost.
There is no plan to maintain state between restarts as this is only a development tool. For more persistent environment, please reach out to us [play@jwalab.com](mailto:play@jwalab.com) to access a persistent environment.
