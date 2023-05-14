
export interface JobInterface {
    id: number;
    company: string;
    role: string;
    date: {
        initial: string,
        final: string,
        total: string,
    },
    tags: {tag:string, color:string}[],
    functions: string
}