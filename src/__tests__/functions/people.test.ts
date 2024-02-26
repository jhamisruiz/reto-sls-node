
import { TestPeople } from '@functions/people/interfaces/people-interface';
import { Config } from '@config/constants/constants';
import { httpGet, httpPost } from '@config/http/http';

const JupiterDataTest: Partial<TestPeople> = {
    first_name: 'Luke test',
    mass: '77 test',
    hair_color: 'Blond test',
    eye_color: 'Blue test',
    skin_color: 'Fair test',
    height: '172 test',
    gender: 'Male test',
    birth_year: '19  test'
};

describe('Test Planets', () => {
    const url = Config.URL_PROD + '/people';

    it('debería guardar un objeto del tipo People', async () => {
        expect.assertions(2);
        const { data: jupiterInserted }: any = await httpPost(url, JSON.stringify(JupiterDataTest));
        expect(jupiterInserted).toBeInstanceOf(Object);
        expect(jupiterInserted).toHaveProperty('id');
    });

    it('debería retornar una lista de people de dynamodb', async () => {
        expect.assertions(1);
        const { data } = await httpGet(url);
        expect(data).toBeInstanceOf(Array);
    });

    it('debería retornar una objeto de people de dynamodb', async () => {
        expect.assertions(1);
        const { data } = await httpGet(`${url}/7e4fed80-d49f-11ee-896f-ebb1afbab3f8`);
        expect(data).toBeInstanceOf(Object);
    });
});
