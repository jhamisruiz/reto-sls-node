
import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler/get-vehicle-handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'vehicles/{id}',
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
