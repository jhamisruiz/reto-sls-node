import { PeopleRepository } from '@functions/people/repositories/people.repository';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

const delPeople = async (event) => {
    const lang = event.queryStringParameters?.ln && event.queryStringParameters?.ln === 'es';

    const { id: id }: { id: string } = event.pathParameters;

    const peopleRepository = new PeopleRepository();

    try {
        const res: string = await peopleRepository.deletePeople(id);

        return formatJSONResponse(lang ? { mensaje: res } : { message: res }, 200);
    } catch (error) {
        return formatJSONResponse({ error: error || 'Error to delete People' }, 500);
    }
};

export const main = middyfy(delPeople);
