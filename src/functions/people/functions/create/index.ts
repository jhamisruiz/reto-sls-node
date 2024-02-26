import { handlerPath } from '@libs/handler-resolver';
import schema from '../../schemas/peopleSchemas';

export default {
    handler: `${handlerPath(__dirname)}/handler/create-people-handler.main`,
    events: [
        {
            http: {
                method: 'post',
                path: 'people',
                cors: true,
                request: {
                    schemas: {
                        'application/json': schema
                    },
                    parameters: {
                        querystrings: {}
                    }
                }
            }
        }
    ]
};