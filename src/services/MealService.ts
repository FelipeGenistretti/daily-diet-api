import { id } from "zod/locales";
import type { MealRepositoryInterface } from "../repositories/contracts/MealRepositoryInterface.js";

export class MealService{
    constructor(private mealRepository: MealRepositoryInterface){}

    async execute(data:CreateMealRequest){
        const mealExisting = await this.mealRepository.findByName(data.name)

        if(mealExisting){
            throw new Error("Já existe uma refeição com este nome")
        }

        return await this.mealRepository.createMeal(data)
    }
}