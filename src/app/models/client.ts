export class Client {
    _id?: number;
    client: string;
    address: string;

    constructor(client: string, address: string) {
        this.client = client;
        this.address = address;
    }
}