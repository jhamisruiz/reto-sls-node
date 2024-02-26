import {
    DynamoDBClient,
    PutItemCommand,
    ScanCommand,
    PutItemCommandInput,
    ScanCommandInput,
    GetItemCommand,
    GetItemCommandInput,
    DeleteItemCommand,
    DeleteItemCommandInput,
    UpdateItemCommand,
    UpdateItemCommandInput
} from '@aws-sdk/client-dynamodb';

export const DynamoCli = new DynamoDBClient({});

/**
 * @public
 *
 * Writing an item.
 */
export function PutItem(input: PutItemCommandInput) {
    return new PutItemCommand(input);
}

/**
 * @public
 *
 * Getting all items.
 */
export function Scan(input: ScanCommandInput) {
    return new ScanCommand(input);
}

/**
 * @public
 *
 * Getting an item.
 */
export function GetItem(input: GetItemCommandInput) {
    return new GetItemCommand(input);
}

/**
 * @public
 *
 * Update an item.
 */
export function UpdateItem(input: UpdateItemCommandInput) {
    return new UpdateItemCommand(input);
}

/**
 * @public
 *
 * Deleting an item.
 */
export function DeleteItem(input: DeleteItemCommandInput) {
    return new DeleteItemCommand(input);
}