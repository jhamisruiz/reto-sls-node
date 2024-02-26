

import { Vehicle } from '../interfaces/vehicle-interface';
import { httpGet } from '@config/http/http';
import { Config } from '@config/constants/constants';


export class VehicleRepository {
    constructor() { }

    async listVehicle(): Promise<Vehicle[]> {

        const { data } = await httpGet(`${Config.SWAPI_PATH}/vehicles`);

        return data.results ?? [];
    }

    async getVehicle(id: string): Promise<Vehicle> {

        const response = await httpGet(`${Config.SWAPI_PATH}/vehicles/${id}`);

        const res: Vehicle = response.data;

        return res;
    }
}