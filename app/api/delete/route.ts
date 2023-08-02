import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb"

type PropertyId = {
    id: string
}


export async function POST(request: Request){
    const data: PropertyId = await request.json()
    const { id } = data
    const property = await prisma.property.delete({
        where:{
            id: id
        }
    })
    return NextResponse.json({'message':'Deleted'})
}





