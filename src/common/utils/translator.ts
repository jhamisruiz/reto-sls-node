export function translator(data: Record<string, any>[] | Record<string, any>, translations: Record<string, string>): Array<[]> | any {
    const translateKey = (key: string) => translations[key] || key;

    if (data && Array.isArray(data)) {
        return data.map(el => {
            return Object.fromEntries(Object.entries(el).map(([key, value]) => [translateKey(key), value]));
        });
    } else if ('object' === typeof data) {
        const obj = (data as Record<string, any>);
        return Object.fromEntries(Object.entries(obj).map(([key, value]) => [translateKey(key), value]));
    }
}
