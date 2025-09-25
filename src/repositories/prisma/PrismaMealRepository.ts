import type { Meal } from "@prisma/client";
import type { MealRepositoryInterface } from "../contracts/MealRepositoryInterface.js";
import { prisma } from "../../http/lib/prisma.js";


export class PrismaMealRepository implements MealRepositoryInterface {
    async createMeal(data: CreateMealRequest): Promise<Meal | null> {
        const meal = await prisma.meal.create({
            data: {
                name: data.name,
                description: data.description,
                datetime: data.datetime ?? new Date(),
                userId : data.userId
            },
        });

        return meal;
    }

    async findById(id:number):Promise<Meal | null>{
        const meal = await prisma.meal.findUnique({
            where:{
                id
            }
        })

        return meal
    }

    async findByName(name:string):Promise<Meal | null> {
        const meal = await prisma.meal.findFirst({
            where:{
                name
            }
        })

        return meal
    }
}
