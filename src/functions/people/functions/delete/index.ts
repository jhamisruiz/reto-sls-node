import { handlerPath } from '@libs/handler-resolver';

export default {
    handler: `${handlerPath(__dirname)}/handler/del-people-handler.main`,
    events: [
        {
            http: {
                method: 'delete',
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