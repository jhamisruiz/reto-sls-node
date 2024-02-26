import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { transformArray } from '@config/utils/utils';
import { People } from '@functions/people/interfaces/people-interface';
import { PeopleRepository } from '@functions/people/repositories/people.repository';
import { translator } from '@config/utils/translator';
import { translatMapPeople } from '@functions/people/interfaces/people-map';


const listPeople = async (event) => {
    const lang = event.queryStringParameters?.ln && event.queryStringParameters?.ln === 'es';

    const peopleRepository = new PeopleRepository();

    try {

        const res: People[] = await peopleRepository.listPeople();

        const people = transformArray<People>(res);

        return formatJSONResponse(lang ? translator(people, translatMapPeople) : people, 200);
    } catch (error) {
        return formatJSONResponse({ error: error || 'Error to get all People' }, 500);
    }
};

export const main = middyfy(listPeople);
