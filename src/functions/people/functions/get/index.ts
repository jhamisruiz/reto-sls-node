
import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler/get-people-handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'people/{id}',
        cors: true,
        request: {
          parameters: {
            querystrings: {}
          }
        }
      },
    },
  ],
};
