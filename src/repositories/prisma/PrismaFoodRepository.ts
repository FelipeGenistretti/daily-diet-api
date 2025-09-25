import { prisma } from "../../http/lib/prisma.js";
import type { Food } from "@prisma/client";
import type { FoodRepositoryInterface } from "../contracts/FoodRepositoryInterface.js";
import { da } from "zod/locales";

class PrismaFoodRepository implements FoodRepositoryInterface {
    async findById(id:number): Promise<Food | null>{
        const food = await prisma.food.findUnique({
            where:{
                id
            }
        })
        return food 
    }

    async findByName(name:string): Promise<Food | null> {
        const food = await prisma.food.findFirst({
            where:{
                name
            }
        })

        return food
    }

    async createFood(data:CreateFoodRequest, mealId:number) : Promise<Food | null>{
        const food = await prisma.food.create({
            data:{
                mealId:mealId,
                name:data.name,
                description:data.description,
                calories:data.calories,
                carbohydrate:data.carbohydrate,
                fat:data.fat,
                protein:data.protein
            }, include:{ meal:true}
        })

        return food
    }
}