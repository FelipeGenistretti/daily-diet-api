import type { FoodRepositoryInterface } from "../repositories/contracts/FoodRepositoryInterface.js";

export class CreateFoodService{
    constructor(private foodRepository:FoodRepositoryInterface){}

    async execute(data:CreateFoodRequest){
        const foodExisting = await this.foodRepository.findByName(data.name)

        if(foodExisting){
            throw new Error("Essa comida já existe na dieta")
        }

        return await this.foodRepository.createFood(data)
       
    }
}