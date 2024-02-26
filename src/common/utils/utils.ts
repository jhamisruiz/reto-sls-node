import { DynamoDescriptors } from '@config/constants/constants';

export function transformArray<T>(arreglo: T[]): Record<string, string>[] {
    return arreglo.map(objeto => transformObject(objeto));
}

function getValue(objeto: any): string {
    const descriptorEncontrado = Object.keys(objeto).find(key => DynamoDescriptors.includes(key));
    return descriptorEncontrado ? objeto[descriptorEncontrado] : '';
}

export function transformObject<T>(objeto: T): Record<string, string> {
    const objetoTransformado: Record<string, string> = {};

    Object.keys(objeto).forEach(key => {
        const valor = getValue(objeto[key]);
        objetoTransformado[key] = valor;
    });

    return objetoTransformado;
}
