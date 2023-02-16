import '../src';

// this is required due to us not actually having the package installed.
import type AObjects from '../src/objects';
declare global
{
    // this is required
    // eslint-disable-next-line no-var
    var Objects: typeof AObjects;
}

describe('objects tests', () =>
{
    it('object to array', () => 
    {
        expect(Objects.ObjectToArray({ a: 'b', c: 'd', e: 'f' }))
            .toStrictEqual(['b', 'd', 'f']);

        expect(Objects.ObjectToArray({ a: 'b', c: 'd', e: 'f' }, { keepKeys: true }))
            .toStrictEqual([['a', 'b'], ['c', 'd'], ['e', 'f']]);
    });

    it('array to object', () =>
        expect(Objects.ArrayToObject([['a', 'b'], ['c', 'd'], ['e', 'f']]))
            .toStrictEqual({ a: 'b', c: 'd', e: 'f' })
    );

    it('can check null', () =>
    {
        expect(Objects.IsNull(null)).toBeTruthy();
        expect(Objects.IsNull({ a: 'b' })).toBeFalsy();
    });

    it('can check if object is empty', () =>
    {
        expect(Objects.IsEmpty({})).toBeTruthy();
        expect(Objects.IsEmpty({ a: 'b' })).toBeFalsy();
    });

    it('can clone an object', () =>
    {
        expect(Objects.Clone({ a: 'b' }))
            .toStrictEqual({ a: 'b' });

        expect(Objects.Clone({}))
            .toStrictEqual({});
    });

    it('can clone an array', () =>
    {
        expect(Objects.Clone(['a', 'b']))
            .toStrictEqual(['a', 'b']);

        expect(Objects.Clone([]))
            .toStrictEqual([]);

        const arrayData = ['c', ['e', 'f']];
        const clonedValue = Objects.Clone(arrayData);
        expect(clonedValue[0]).toEqual('c');
        expect(clonedValue[1]).toStrictEqual(['e', 'f']);

        clonedValue[1] = ['z', 'v'];

        expect(arrayData[1]).toStrictEqual(['e', 'f']);
        expect(clonedValue[1]).toStrictEqual(['z', 'v']);

        arrayData[1] = ['1', '2'];

        expect(arrayData[1]).toStrictEqual(['1', '2']);
        expect(clonedValue[1]).toStrictEqual(['z', 'v']);
    });

    it('can see if a class extends another', () =>
    {
        class clazz1 { }
        class clazz2 extends clazz1 { }

        expect(Objects.DoesExtend(clazz1, clazz2)).toBeTruthy();
        expect(Objects.DoesExtend(clazz2, clazz1)).toBeFalsy();
    });

    it('can use nonnull and throw correctly', () =>
    {
        expect(() => Objects.NotNull(null)).toThrow();
        expect(() => Objects.NotNull({ a: 'b' })).not.toThrow();

        class CustomError extends Error { }

        expect(() => Objects.NotNull(null, undefined, CustomError)).toThrowError(CustomError);
    });

    it('can force singleton correctly', () =>
    {
        class clazzSingle
        {
            public echo<T>(a: T): T
            {
                return a;
            }
        }

        const abaa = Objects.Singleton(clazzSingle);

        expect(abaa.getInstance()).toBeDefined();
        expect(abaa.getInstance()).toBeInstanceOf(clazzSingle);
        expect(abaa.getInstance().echo({ a: 'b' })).toStrictEqual({ a: 'b' });
        expect(() => Objects.Singleton(clazzSingle)).toThrow();
    });
});