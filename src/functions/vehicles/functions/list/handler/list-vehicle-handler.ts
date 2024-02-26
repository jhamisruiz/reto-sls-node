import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { Vehicle } from '@functions/vehicles/interfaces/vehicle-interface';
import { VehicleRepository } from '@functions/vehicles/repositories/vehicle.repository';
import { translator } from '@config/utils/translator';
import { translatMapVehicle } from '@functions/vehicles/interfaces/vehicle-map';


const getVehicle = async (event) => {
    const lang = event.queryStringParameters?.ln && event.queryStringParameters?.ln === 'es';

    const peopleRepository = new VehicleRepository();


    try {
        const res: Vehicle[] = await peopleRepository.listVehicle();

        return formatJSONResponse(lang ? translator(res, translatMapVehicle) : res, 200);
    } catch (error) {
        return formatJSONResponse({ error: error || 'Error to get all vehicle' }, 500);
    }
};

export const main = middyfy(getVehicle);
