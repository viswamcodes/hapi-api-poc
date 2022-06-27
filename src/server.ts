import * as Hapi from "@hapi/hapi";


class Server {

    app: Hapi.Server | undefined;

    constructor() { }

    public async init() {

        //setup server
        this.app = Hapi.server({
            port: process.env.PORT || 3000,
            host: process.env.HOST || '0.0.0.0',
        });

        //register routes here
        this.app.route({
            method: "GET",
            path: "/",
            handler: (request: Hapi.Request, h: Hapi.ResponseToolkit, err?: Error) => {
                return {msg: 'Welcome to the app!'};
            }
        });

    }

    public async start() {
        await this.app?.start();
    }
}

const serverInstance = new Server();

export default serverInstance;