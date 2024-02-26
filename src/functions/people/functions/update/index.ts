import { handlerPath } from '@libs/handler-resolver';

export default {
    handler: `${handlerPath(__dirname)}/handler/put-people-handler.main`,
    events: [
        {
            http: {
                method: 'put',
                path: 'people/{id}',
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
