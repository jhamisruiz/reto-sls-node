import { People } from '@functions/people/interfaces/people-interface';
import { DeleteItem, DynamoCli, GetItem, PutItem, Scan, UpdateItem } from '@config/utils/dynamodb';
import { TableName } from '@config/constants/constants';


export class PeopleRepository {
    constructor() { }

    async listPeople(): Promise<People[]> {

        const params = Scan({ TableName });

        const response = await DynamoCli.send(params);
        const res: People[] = response.Items;

        return res;
    }

    async getPeople(id: string): Promise<People> {

        const params = GetItem({
            TableName, Key: {
                id: { S: id },
            }
        });

        const response = await DynamoCli.send(params);
        const res: People = response.Item;

        return res;
    }
    async deletePeople(id: string): Promise<string> {

        const params = DeleteItem({
            TableName, Key: {
                id: { S: id },
            }
        });
        const response = await DynamoCli.send(params);

        const res = 'People deleted' ?? response?.$metadata?.requestId;

        return res;
    }
    async createPeople(data: People): Promise<People> {

        const params = PutItem({
            TableName,
            Item: data as Partial<People>
        });

        const response = await DynamoCli.send(params);
        const res: People = data ?? response?.Attributes;

        return res;
    }
    async updatePeople(id: string, d: any): Promise<People> {
        const edited = (new Date()).toISOString();
        const { first_name, mass, hair_color, eye_color, skin_color, height, gender, birth_year } = d;

        const params = UpdateItem({
            TableName,
            Key: { id: { S: id } },
            UpdateExpression: `set first_name = :first_name,
                                mass = :mass,
                                hair_color = :hair_color,
                                eye_color = :eye_color,
                                skin_color = :skin_color,
                                height = :height,
                                gender = :gender,
                                birth_year = :birth_year,
                                edited = :edited`,
            ExpressionAttributeValues: {
                ':first_name': { S: first_name },
                ':mass': { S: mass },
                ':hair_color': { S: hair_color },
                ':eye_color': { S: eye_color },
                ':skin_color': { S: skin_color },
                ':height': { S: height },
                ':gender': { S: gender },
                ':birth_year': { S: birth_year },
                ':edited': { S: edited },
            }
        });

        const response = await DynamoCli.send(params);

        d['id'] = id;
        d['edited'] = edited;

        const res: People = d ?? response?.Attributes;

        return res;
    }
}