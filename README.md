# platform-docs

The JWA Platform's documentation and examples

### run the tests

```
npx jwalab start

npm run test
```

Verify:

To find the contract name, look at the tokenization-service logs:

```
$ docker ps
CONTAINER ID        IMAGE                                                 COMMAND                  CREATED             STATUS              PORTS                                                                    NAMES
3d74d83a4fd3        blockwatch/tzstats                                    "/bin/sh -c serve"       5 minutes ago       Up 5 minutes        8000/tcp, 0.0.0.0:8001->8001/tcp                                         community-platform_tzstats_1
7ddaa893d486        jwalab/tokenization-service                           "npm run start"          5 minutes ago       Up 5 minutes                                                                                 community-platform_tokenization-service_1
...

$ docker logs 7ddaa893d486
...
[TOKENIZATION-SERVICE] Starting Tokenization Service...
[TOKENIZATION-SERVICE] connected to nats:4222
[TOKENIZATION-SERVICE] Using Tezos RPC URI http://carthagebox:20000
[TOKENIZATION-SERVICE] warehouse contract deployed at KT1StMU861ihUHweRavtZX7zgKGtB5xcHPAU
```

The contract id is `KT1StMU861ihUHweRavtZX7zgKGtB5xcHPAU`

```
// view details about the current smart contract
http://localhost:8002/explorer/contract/<contract id>

// You can see the bigmap id it uses. If it's 0:
http://localhost:8002/explorer/bigmap/<bigmap id>

// view its item Ids:
http://localhost:8002/explorer/bigmap/<bigmap id>/keys

// View a specific item id:
http://localhost:8002/explorer/bigmap/<bigmap id>/13377
```