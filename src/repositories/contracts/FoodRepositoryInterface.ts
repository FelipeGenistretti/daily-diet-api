import type { Food } from "@prisma/client"

export interface FoodRepositoryInterface {
    findById(id:number): Promise<Food | null>
    findByName(name:string): Promise<Food | null>
    createFood(data:CreateFoodRequest, mealId:number) : Promise<Food | null>
}