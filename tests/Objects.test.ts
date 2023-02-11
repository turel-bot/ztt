import Objects from '../src';

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
    });

    // it('can force singleton correctly', () =>
    // {
    //     class clazzSingle
    //     {
    //         public echo<T>(a: T): T
    //         {
    //             return a;
    //         }
    //     }

    //     const abaa = Objects.ForceSingleton(clazzSingle);
    //     abaa.getInstance();

    //     expect(Objects.ForceSingleton(clazzSingle)).toBeDefined();
    //     expect(Objects.ForceSingleton(clazzSingle)).toBeInstanceOf(clazzSingle);
    //     expect(Objects.ForceSingleton(clazzSingle).echo({ a: 'b' })).toBe({ a: 'b' });
    // });
});