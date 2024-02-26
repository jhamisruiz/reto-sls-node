
import { translator } from '@config/utils/translator';
import { transformObject } from '@config/utils/utils';
import { People } from '@functions/people/interfaces/people-interface';
import { translatMapPeople } from '@functions/people/interfaces/people-map';
import { PeopleRepository } from '@functions/people/repositories/people.repository';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

const getPeople = async (event) => {
    const lang = event.queryStringParameters?.ln && event.queryStringParameters?.ln === 'es';

    const { id: id }: { id: string } = event.pathParameters;

    const peopleRepository = new PeopleRepository();

    try {
        const res: People = await peopleRepository.getPeople(id);

        const people = transformObject<People>(res);

        return formatJSONResponse(lang ? translator(people, translatMapPeople) : people, 200);
    } catch (error) {
        return formatJSONResponse({ error: error || 'Error to get all People' }, 500);
    }
};

export const main = middyfy(getPeople);
