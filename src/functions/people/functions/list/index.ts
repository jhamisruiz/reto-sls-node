import { handlerPath } from '@libs/handler-resolver';

export default {
    handler: `${handlerPath(__dirname)}/handler/list-people-handler.main`,
    events: [
        {
            http: {
                method: 'get',
                path: 'people',
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
