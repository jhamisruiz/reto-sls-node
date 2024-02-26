import type { AWS } from '@serverless/typescript';

import { default as Functions } from '@functions/index';
import { Config, TableName } from '@config/constants/constants';

const serverlessConfiguration: AWS = {
  service: Config.SERVICE_NAME,
  frameworkVersion: '3',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    jest: {
      collectCoverage: true
    },
  },
  //plugins: ['serverless-esbuild'],
  plugins: [
    'serverless-webpack',
    'serverless-dynamodb-local',
    'serverless-offline',
    'serverless-jest-plugin',
    'serverless-stack-output'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs20.x',
    region: 'us-west-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    lambdaHashingVersion: '20201221',
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      DYNAMODB_TABLE: TableName,
    },
    iam: {
      role: {
        statements: [
          {
            Effect: 'Allow',
            Action: [
              'dynamodb:Query',
              'dynamodb:Scan',
              'dynamodb:GetItem',
              'dynamodb:PutItem',
              'dynamodb:UpdateItem',
              'dynamodb:DeleteItem'
            ],
            Resource: '*'
          }
        ]
      }
    },
  },
  // import the function via paths
  functions: Functions,
  package: { individually: true },
  resources: {
    Resources: {
      AllDynamoDbTable: {
        Type: 'AWS::DynamoDB::Table',
        DeletionPolicy: 'Retain',
        Properties: {
          AttributeDefinitions: [
            {
              AttributeName: 'id',
              AttributeType: 'S',
            }
          ],
          KeySchema: [
            {
              AttributeName: 'id',
              KeyType: 'HASH'
            }
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
          },
          TableName: TableName
        }
      }
    }
  }
};

module.exports = serverlessConfiguration;
