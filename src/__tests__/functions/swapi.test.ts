import { Config } from '@config/constants/constants';
import { httpGet } from '@config/http/http';

describe('Test SWAPI', () => {
  describe('Test SWAPI VEHICLES', () => {
    it('debería retornar un arreglo de objetos vehicle', async () => {
      expect.assertions(2);

      const { data } = await httpGet(`${Config.SWAPI_PATH}/vehicles`);

      expect(data.results).toBeInstanceOf(Array);
      expect(data['results'].length).toBeGreaterThan(1);
    });

    it('debería retornar un objetos vehicle', async () => {
      expect.assertions(1);

      const { data } = await httpGet(`${Config.SWAPI_PATH}/vehicles`);
      expect(data).toBeInstanceOf(Object);
    });
  });

  describe('Test SWAPI VEHICLES Español', () => {
    it('debería retornar un arreglo de objetos vehicle y mapear propiedades a español', async () => {
      expect.assertions(2);

      const { data } = await httpGet(`${Config.SWAPI_PATH}/vehicles?ln=es`);

      expect(data.results).toBeInstanceOf(Array);
      expect(data['results'].length).toBeGreaterThan(1);
    });

    it('debería retornar un objetos vehicle y mapear propiedades a español', async () => {
      expect.assertions(1);

      const { data } = await httpGet(`${Config.SWAPI_PATH}/vehicles/${4}?ln=es`);
      expect(data).toBeInstanceOf(Object);
    });
  });
});
