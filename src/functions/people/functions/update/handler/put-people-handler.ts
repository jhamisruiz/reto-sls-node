import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { PeopleRepository } from '@functions/people/repositories/people.repository';
import { People } from '@functions/people/interfaces/people-interface';
import { translator } from '@config/utils/translator';
import { translatMapPeople } from '@functions/people/interfaces/people-map';


const putPeople = async (event) => {
    try {

        const headers = event.headers;
        const lang = event.queryStringParameters?.ln && event.queryStringParameters?.ln === 'es';

        const { id: id }: { id: string } = event.pathParameters;

        let request: Partial<any> = event.body;

        if (headers['Content-Type'] !== 'application/json') {
            request = JSON.parse(event.body);
        }

        const peopleRepository = new PeopleRepository();


        const resPeople: People = await peopleRepository.updatePeople(id, request);

        return formatJSONResponse(lang ? translator(resPeople, translatMapPeople) : resPeople, 200);
    } catch (error) {
        return formatJSONResponse({ error: error || 'Error to update People' }, 500);
    }
};

export const main = middyfy(putPeople);
