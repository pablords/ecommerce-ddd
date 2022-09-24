export interface Relation {
  [key: string]: boolean;
}

export interface BaseRepositoryInterface {
  create?(data: any): Promise<any>;
  findOne?(id: string, relation?: Relation): Promise<any>;
  find?(filter: any): Promise<any[]>;
  update?(id: string, data: any): Promise<any>;
  delete?(id: string): Promise<any>;
}
