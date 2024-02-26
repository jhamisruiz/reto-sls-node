import { handlerPath } from '@libs/handler-resolver';

export default {
    handler: `${handlerPath(__dirname)}/handler/list-vehicle-handler.main`,
    events: [
        {
            http: {
                method: 'get',
                path: 'vehicles',
                cors: true,
                request: {
                    parameters: {
                        querystrings: {}
                    }
                }
            }
        }
    ]
};
