import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { Response } from '@libs/api-gateway';
import * as uuid from 'uuid';
import { transformObject } from '@config/utils/utils';
import { People } from '@functions/people/interfaces/people-interface';
import { PeopleRepository } from '@functions/people/repositories/people.repository';
import { translator } from '@config/utils/translator';
import { translatMapPeople } from '@functions/people/interfaces/people-map';

const createPeople = async (event): Promise<Response> => {
    try {

        const headers = event.headers;
        const lang = event.queryStringParameters?.ln && event.queryStringParameters?.ln === 'es';

        const created = (new Date()).toISOString();
        const id = uuid.v1();

        let request: Partial<any> = event.body;

        if (headers['Content-Type'] !== 'application/json') {
            request = JSON.parse(event.body);
        }

        const { first_name, mass, hair_color, eye_color, skin_color, height, gender, birth_year } = request;

        const newPeople: People = {
            id: { S: id },
            first_name: { S: first_name },
            mass: { S: mass },
            hair_color: { S: hair_color },
            eye_color: { S: eye_color },
            skin_color: { S: skin_color },
            height: { S: height },
            gender: { S: gender },
            birth_year: { S: birth_year },
            created: { S: created },
            edited: { S: '' }
        };
        const peopleRepository = new PeopleRepository();



        const resPeople: People = await peopleRepository.createPeople(newPeople);
        const people = transformObject<People>(resPeople);

        return formatJSONResponse(lang ? translator(people, translatMapPeople) : people, 201);
    } catch (error) {
        return formatJSONResponse({ error: error || 'Error to add People' }, 500);
    }
};

export const main = middyfy(createPeople);
