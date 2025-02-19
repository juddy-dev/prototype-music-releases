export class Validators {

    public static isValidBool(value: boolean | undefined ): boolean {
        return value != null && value != undefined;
    };

    public static isValidText(value: string | undefined ): boolean {
        return value != null && value != undefined && value.trim() != '';
    };

    public static isValidNumber(value: number | undefined): boolean {
        return value != null && value != undefined;
    };

    public static isValidID(value: number | undefined): boolean {
        return !!value && value > 0;
    };

    public static isValidObject(value: any | undefined): boolean {
        return value != null && value != undefined;
    };
};