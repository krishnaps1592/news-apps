export interface NewsResult{
    title: string;
    description: string;
    
    publishedAt: string;
    url:string;
}

export interface Pagination{
    limit:number,
    offset:number,
    count:number,
    total:number
}

export interface ApiResult{
    status:Pagination,
    articles: NewsResult[]
}