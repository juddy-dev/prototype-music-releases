export class FileValidators {

    static LIMIT_SIZE_PROFILE = 1000000;

    public static getFormat(value: File ): string | undefined {
        let formats = value.name.split('.');
        return formats.pop();
    };

    public static isValidFormat(value: string, formats: string[] ): boolean {
        return formats.includes(value?.toLowerCase());
    };

    public static isValidFormatProfile(value: File): boolean {
        if (value.type.includes('image')) {
            let format = this.getFormat(value);
            return !!format && this.isValidFormat(format, ['jpg','jpeg','png']);
            
        }
        return false;
    };

    public static isValidSize(value: File, limit_size: number): boolean {
        return value.size < limit_size;
    };
};