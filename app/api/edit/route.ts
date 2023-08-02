import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb"

type Property = {
    city: string,
    name: string,
    price: string,
    image: string,
    address: string,
    country: string,
    garageNo: string,
    bedroomNo: string,
    bathroomNo: string,
    squaremeter: string,
    descriptions: string,
}



export async function POST(request: Request) {
    const data: Property = await request.json()
    const {
        city,
        name,
        price,
        image,
        country,
        address,
        garageNo,
        bedroomNo,
        bathroomNo,
        squaremeter,
        descriptions,
    } = data

    // if (!city || !type || !name || !price || !state || !image || !street || !status || !postcode || !garageNo
    //     || !apartment || !bedroomNo || !imageType1 || !bathroomNo || !squaremeter || !descriptions) {
    //     throw new Error('Please Fill in Missing Fields')
    // }

    // const propertyCreate = await prisma.property.create({
    //     data: {
    //         city,
    //         name,
    //         price,
    //         image,
    //         country,
    //         address,
    //         garageNo,
    //         bedroomNo,
    //         bathroomNo,
    //         squaremeter,
    //         descriptions,
    //     }
    // })

    // return NextResponse.json({ propertyCreate })
}


