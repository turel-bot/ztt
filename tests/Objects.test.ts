import '../src';

// this is required due to us not actually having the package installed.
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-var */
import type objectsObj from '../src/objects';
import type validateObj from '../src/objects/validate';

declare global
{
    var Objects: typeof objectsObj;
    var Validate: typeof validateObj;
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
        expect(Validate.IsNull(null)).toBeTruthy();
        expect(Validate.IsNull({ a: 'b' })).toBeFalsy();
    });

    it('can check if object is empty', () =>
    {
        expect(Validate.IsEmpty({})).toBeTruthy();
        expect(Validate.IsEmpty({ a: 'b' })).toBeFalsy();
    });

    it('can clone an object', () =>
    {
        expect(Objects.Clone({ a: 'b' }))
            .toStrictEqual({ a: 'b' });

        expect(Objects.Clone({}))
            .toStrictEqual({});

        const objectToClone = {
            a: 'b',
            c: {
                d: 'e'
            }
        };

        const clonedData = Objects.Clone(objectToClone);

        expect(clonedData['a']).toEqual(objectToClone['a']);

        clonedData['a'] = 'c';
        clonedData['c'] = {
            d: 'f'
        };

        expect(clonedData['a']).not.toEqual(objectToClone['a']);
        expect(clonedData['c']).not.toEqual(objectToClone['c']);
        expect(clonedData['c']).toStrictEqual({ d: 'f' });
        expect(objectToClone['a']).toEqual('b');
        expect(objectToClone['c']).toStrictEqual({ d: 'e' });
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
        expect(() => Validate.NotNull(null)).toThrow();
        expect(() => Validate.NotNull({ a: 'b' })).not.toThrow();

        class CustomError extends Error { }

        expect(() => Validate.NotNull(null, undefined, CustomError)).toThrowError(CustomError);
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

        class clazzSingleGetter
        {
            public echo<T>(a: T): T
            {
                return a;
            }
        }

        const abab = Objects.Singleton(clazzSingleGetter, true);
        expect(abab.getInstance).toBeDefined();
        expect(abab.getInstance).toBeInstanceOf(clazzSingleGetter);
        expect(abab.getInstance.echo({ a: 'b' })).toStrictEqual({ a: 'b' });
        expect(() => Objects.Singleton(clazzSingleGetter)).toThrow();
    });

    it('can make a random object global', () =>
    {
        const testGlobal = { a: 'b' };
        Objects.Globalify('test', testGlobal);

        expect(global['test']).toStrictEqual(testGlobal);
        expect((global['test'] as any)['a']).toEqual('b');
    });
});