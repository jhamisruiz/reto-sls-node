
//export const TableName = `PeopleTable-${'dev'}`;
export const TableName = `PeopleTable-${'production'}`;

export const enum Config {
    SERVICE_NAME = 'reto-sls-node',
    SWAPI_PATH = 'https://swapi.dev/api',

    //test
    URL_PROD = 'https://psaa1b6392.execute-api.us-west-1.amazonaws.com/production',
    URL_DEV = 'https://psaa1b6392.execute-api.us-west-1.amazonaws.com/dev'
}
/**
 * @params
 * ['S', 'N', 'B', 'BOOL', 'NULL', 'M', 'L', 'SS', 'NS', 'BS']
 */
export const DynamoDescriptors: string[] = [
    'S', 'N', 'B', 'BOOL', 'NULL', 'M', 'L', 'SS', 'NS', 'BS'
];