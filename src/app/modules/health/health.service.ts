import { Injectable } from "@nestjs/common";

@Injectable()
export class HealthService{

    async getStatus(){
        return "ok"
    }
}