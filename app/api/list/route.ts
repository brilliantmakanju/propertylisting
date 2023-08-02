import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb"



export async function GET(request: Request){
    // let listing
    const listing = await prisma.property.findMany({
        orderBy:{
            createdAt: 'desc'
        }
    }) 
    return NextResponse.json({listing})
}