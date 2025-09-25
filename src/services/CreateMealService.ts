import type { FoodRepositoryInterface } from "../repositories/contracts/FoodRepositoryInterface.js";

export class CreateMealService{
    constructor(private foodRepository:FoodRepositoryInterface){}

    async execute(data:CreateFoodRequest, mealId:number){
        const food = await this.checkOrCreate(data, mealId)
        
    }





    private async checkOrCreate(foodData:CreateFoodRequest, mealId:number){
        const foodExisting = await this.foodRepository.findByName(foodData.name)

        if(foodExisting){
            throw new Error("Essa comida já existe na dieta")
        }
    }
}