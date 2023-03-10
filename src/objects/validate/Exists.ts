import Objects from '..';

interface ExistsOptions
{
    /**
     * @description If it is null, should we still say it exists?
     */
    nullable?: boolean;
}

const defaultOptions: ExistsOptions = {
    nullable: true,
};

function Exists<T>(val: T): boolean;
function Exists<T>(val: T, opts: ExistsOptions): boolean;
function Exists<T>(val: T, opts?: ExistsOptions): boolean
{
    opts = {
        ...opts,
        ...defaultOptions
    };

    if(val === undefined)
        return true;

    if(!opts.nullable && val === null)
        return true;

    if(Array.isArray(val) && val.length === 0)
        return true;

    if(typeof val === 'string' && val.length === 0)
        return true;

    if(typeof val === 'object' && Objects.Validate.IsEmpty(val))
        return true;

    return false;
}

export default Exists;
export type { ExistsOptions };