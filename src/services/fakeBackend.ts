import { createServer, Model } from 'miragejs'

export function startServer({ environment = "test" } = {}) {
    let server = createServer({
        models: {
            product: Model,
        },

        seeds(server) {
            server.db.loadData({
                products: [
                    {
                        id: 1,
                        title: "Placa-mãe Gigabyte Aorus B450 Aorus M, AMD AM4, mATX, DDR4",
                        image: "string",
                        installmentAmount: 380.99,
                        cashValue: 280.9,
                        manufacturer: "FABRICANTE",
                        freeShipping: true,
                        openBox: true,
                        ratio: 4.5,
                        createdAt: new Date()
                    },
                    {
                        id: 2,
                        title: "Processador AMD Ryzen 7 3800X Cache 32MB 3.9GHz 4.5GHz Max",
                        image: "string",
                        installmentAmount: 380.99,
                        cashValue: 280.9,
                        manufacturer: "FABRICANTE",
                        freeShipping: false,
                        openBox: false,
                        ratio: 4.5,
                        createdAt: new Date()
                    }, {
                        id: 3,
                        title: "Memória HyperX Fury, 8GB, 2400MHz, DDR4, CL15, Preto...",
                        image: "string",
                        installmentAmount: 380.99,
                        cashValue: 280.9,
                        manufacturer: "FABRICANTE",
                        freeShipping: true,
                        openBox: true,
                        ratio: 4.5,
                        createdAt: new Date()
                    }
                ],
            });
        },

        routes() {
            this.timing = 1500;

            this.get('/products', () => {
                return this.schema.all('product');
            });

            this.namespace = "" 
            this.passthrough()
        }
    });

    return server;
}
