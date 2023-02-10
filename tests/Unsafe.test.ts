import type AObjects from '../src';
import { makeGlobal } from '../src';


declare global
{
    // this is required
    // eslint-disable-next-line no-var
    var Objects: undefined | typeof AObjects;
}

export { };

describe('unsafe func', () =>
{
    beforeAll(() => makeGlobal());
    it('can be accessed globally after called', () => expect(Objects).toBeDefined());
    // VSCode is weird here : it thinks that Objects can't be undefined, even though the type
    // says it can be. ! DO NOT REMOVE THE BANG.
    it('can access functions on the global obj', () => expect(Objects!.Exists({})).toBeTruthy());
});