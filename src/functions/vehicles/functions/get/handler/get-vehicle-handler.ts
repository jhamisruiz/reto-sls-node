
import { translator } from '@config/utils/translator';
import { Vehicle } from '@functions/vehicles/interfaces/vehicle-interface';
import { translatMapVehicle } from '@functions/vehicles/interfaces/vehicle-map';
import { VehicleRepository } from '@functions/vehicles/repositories/vehicle.repository';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

const getVehicle = async (event) => {
    const lang = event.queryStringParameters?.ln && event.queryStringParameters?.ln === 'es';

    const { id: id }: { id: string } = event.pathParameters;

    const peopleRepository = new VehicleRepository();

    try {
        const res: Vehicle = await peopleRepository.getVehicle(id);

        return formatJSONResponse(lang ? translator(res, translatMapVehicle) : res, 200);
    } catch (error) {
        return formatJSONResponse({ error: error || 'Error to get all Vehicle' }, 500);
    }
};

export const main = middyfy(getVehicle);
