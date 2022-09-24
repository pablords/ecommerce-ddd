export interface BaseServiceInterface{
    create(data: any): Promise<any>
    findOne(id: string): Promise<any>
    findAll(): Promise<any>
    update(id: string, data: any): Promise<boolean>
    delete(id: string): Promise<boolean>
}