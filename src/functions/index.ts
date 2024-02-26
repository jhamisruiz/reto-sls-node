import { default as createPeople } from '@functions/people/functions/create';
import { default as listPeople } from '@functions/people/functions/list';
import { default as delPeople } from '@functions/people/functions/delete';
import { default as getPeople } from '@functions/people/functions/get';
import { default as putPeople } from '@functions/people/functions/update';
import { default as listVehicles } from '@functions/vehicles/functions/list';
import { default as getVehicle } from '@functions/vehicles/functions/get';
export default {
    createPeople,
    listPeople,
    getPeople,
    delPeople,
    putPeople,

    /// api vehicles
    listVehicles,
    getVehicle
};