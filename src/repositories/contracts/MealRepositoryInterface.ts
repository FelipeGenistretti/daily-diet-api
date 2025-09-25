import type { Meal } from "@prisma/client";

export interface MealRepositoryInterface {
    createMeal(data:CreateMealRequest):Promise<Meal|null>
    findById(id:number):Promise<Meal | null>
    findByName(name:string):Promise<Meal | null>
}