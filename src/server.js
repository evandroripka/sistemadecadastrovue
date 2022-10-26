import { Server } from 'mirage.js';

export function makeServer(environment = 'development') {
    let server = new Server({
        environment,
        routes() {
            this.namespace = 'api';
            this.get('/users', () => {
                return {
                    users: [
                        { id: 1, name: 'Bob' },
                        { id: 2, name: 'Alice' },
                    ],
                };
            });
        },
    });
    return server;

}