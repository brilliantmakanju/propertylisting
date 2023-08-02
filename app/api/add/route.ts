import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"

interface UserId {
    id: string,
}

interface Property {
    id?: string;
    city: string;
    name: string;
    price: string;
    user: UserId; // Use the 'User' interface here
    images: string[];
    address: string;
    country: string;
    garageNo: string;
    bedroomNo: string;
    bathroomNo: string;
    squaremeter: string;
    descriptions: string;
  }

export async function POST(req: Request) {

    const data: Property = await req.json()
    const {
        city,
        name,
        price,
        user,
        images,
        country,
        address,
        garageNo,
        bedroomNo,
        bathroomNo,
        squaremeter,
        descriptions,
    } = data

    const users: UserId ={
        id: user.id,
        
    }
    // console.log(users.id)
    // console.log(images)

    const property = await prisma.property.create({
        data: {
            city,
            name,
            price,
            images,
            user : users.id ,
            country,
            address,
            garageNo,
            bedroomNo,
            bathroomNo,
            squaremeter,
            descriptions,
        }
    })

    return NextResponse.json({ "message": "Property Added" }, { "status": 200 })

}
