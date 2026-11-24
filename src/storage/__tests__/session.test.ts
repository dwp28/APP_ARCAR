import { describe, expect, test } from '@jest/globals';
import { decodePreferences, encodePreferences } from '../session';
describe('preferencias locales', () => {
  test('recupera favoritos guardados con el formato actual', () => {
    expect(decodePreferences(encodePreferences(['gran-via-32']))).toEqual(['gran-via-32']);
  });
  test.each([null, '{', '{"version":2,"favorites":["a"]}', '{"version":1,"favorites":[1]}'])('tolera almacenamiento vacío, corrupto o incompatible: %s', value => {
    expect(decodePreferences(value)).toEqual([]);
  });
});
