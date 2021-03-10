const PROTO_PATH = __dirname + "/../protos/airlock.proto";
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const { SERVER_URL = "localhost:50051" } = process.env;

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const airlock = protoDescriptor.airlock;

describe("Given Airlock is running", () => {
    let client;

    beforeAll(() => {
        client = new airlock.Airlock(
            SERVER_URL,
            grpc.credentials.createInsecure()
        );
    });

    describe("When I add an item to the blockcchain", () => {
        let response;

        beforeAll((done) => {
            jest.setTimeout(10000);
            client.request(
                {
                    endpoint: "tokenization-service_add_item",
                    payload_text: JSON.stringify({
                        data: {"XP":"97"},
                        name: "Christiano Ronaldo",
                        item_id: 1,
                        quantity: 0
                    })
                },
                { max: 1, timeout: 10000 },
                (err, res) => {
                    response = res;
                    done();
                }
            );
        });

        it("Then returns the new item", () => {
            expect(JSON.parse(response.response_text)).toEqual({
                data: {"XP":"97"},
                name: "Christiano Ronaldo",
                item_id: 1,
                quantity: 0
            });
        });

        describe("When I get the added item", () => {
            let response;

            beforeAll((done) => {
                client.request(
                    {
                        endpoint: "tokenization-service_get_item",
                        payload_text: JSON.stringify({
                            item_id: 1
                        })
                    },
                    (err, res) => {
                        response = res;
                        done();
                    }
                );
            });

            it("Then returns the item", () => {
                expect(JSON.parse(response.response_text)).toEqual({
                    data: {
                        XP: "97"
                    },
                    name: "Christiano Ronaldo",
                    item_id: 1,
                    quantity: 0
                });
            });
        });
    });
});
