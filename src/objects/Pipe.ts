/**
 * IDEA:
 * 
 * const Thing = (): string => 'hi';
 * 
 * const h: string = Objects.Pipe(Thing)
 *  .args('a', 'b')
 *  // pipes along "H"
 *  .do((str) => str[0].toUppercase())
 *  // H is now lowercase
 *  .do((str) => str.toLowercase())
 *  // whatever you want to do last
 *  .finally((str) => str);
 * 
 * h === 'h'
 * 
 * Objects.Pipe(Thing)
 *  .do((str) => str[0].toLowercase())
 *  .end()
 */

/**
 * @beta
 * @todo DOCS
 */
function Pipe<F extends (...args: ARGS[]) => V, V, ARGS>(func: F): Piped<F, V, ARGS>
{
    return new Piped(func);
}


/**
 * @beta
 * @todo DOCS
 */
class Piped<F extends (...args: ARGS[]) => V, V, ARGS>
{
    private readonly data: { func: F | null, args: ARGS[] | null, result: [V | null, boolean]; } = {
        func: null,
        args: null,
        result: [null, false],
    };

    public constructor(func: F)
    {
        this.data.func = func;
    }

    /**
     * @description Allows for you to pass arguments to the function.
     * @param {ARGS[]} args - The arguments to pass.
     * @returns {this} The instance of the Pipe.
     */
    public args(...args: ARGS[]): this
    {
        this.data.args = args;
        return this;
    }

    /**
     * @description Allows you to transform the data returned by previous #do(s) or the original function.
     * @param { (args: V) => V } cb - The function to call to transform the data. 
     * @returns {this} The instance of the Pipe.
     */
    public do(cb: (args: V) => V): this
    {
        if(!this.data.result[1])
            this.data.result = [this.data.func!(...this.data.args!), true];

        this.data.result = [cb(this.data.result[0]!), true];
        return this;
    }

    /**
    * @description Allows you to transform the data returned by previous #do(s) or the original function a FINAL time, and RETURNS the result.
    * @param { (args: V) => V } cb - The function to call to transform the data. 
    * @returns {this} The result of the Pipe.
    */
    public finally(cb: (args: V) => V): V
    {
        if(!this.data.result[1])
            this.data.result = [this.data.func!(...this.data.args!), true];

        this.do(cb);
        return this.data.result[0]!;
    }

    /**
     * @description Ends the Pipe, returns the value of the data.
     * @returns {V} The result of the Pipe.
     */
    public end(): V
    {
        if(!this.data.result[1])
            this.data.result[0] = this.data.func!(...this.data.args!);

        return this.data.result[0]!;
    }
}

export default Pipe;
export { Piped };