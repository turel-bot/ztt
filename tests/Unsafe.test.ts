import '../src';
import type AObjects from '../src/objects';

declare global
{
    // this is required
    // eslint-disable-next-line no-var
    var Objects: typeof AObjects;
}

describe('unsafe func', () =>
{
    it('can be accessed globally after called', () => expect(Objects).toBeDefined());
    it('can access functions on the global obj', () => expect(Objects.Validate.Exists({})).toBeTruthy());
});