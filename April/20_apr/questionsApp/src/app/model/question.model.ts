
export interface Options{
    id?:number,
    title?:string,
    cost?:number,
    image?:string,
    // selected:boolean
}
export interface Question{
    [x: string]: any
    id?:number,
    title?:string,
    parentId?:null | number,
    options?:Options[],
    hasMultipleValues?:boolean,
    image?:string
}