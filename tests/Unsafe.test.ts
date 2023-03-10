import '../src';

describe('unsafe func', () =>
{
    it('can be accessed globally after called', () => expect(Objects).toBeDefined());
    it('can access functions on the global obj', () => expect(Objects.Validate.Exists({})).toBeTruthy());
});