import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda';
import type { FromSchema } from 'json-schema-to-ts';

export interface Response {
  statusCode: number,
  headers: Record<string, string>,
  body: string
}

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> }
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>

export const formatJSONResponse = (response: unknown, status: number, headers = { 'Content-Type': 'application/json' }): Response => {
  return {
    statusCode: status,
    headers,
    body: JSON.stringify(response)
  } as Response;
};
