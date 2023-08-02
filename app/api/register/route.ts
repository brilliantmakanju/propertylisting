import bcrypt from 'bcrypt'
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server";

interface RegisterData {
    email: string,
    fullName: string,
    password: string
}


export async function POST(request: Request) {

    console.log('Work')

    const data: RegisterData = await request.json()
    const { fullName, email, password } = data

    const emailValidation = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (!email || !fullName || !password) {
        return NextResponse.json({ error: "All Fields are required" }, { status: 500 })
    }

    if (emailValidation) {
        return NextResponse.json({ error: "Email already Exist" }, { status: 500 })
    }

    if (password.length < 8) {
        return NextResponse.json({ error: "Password must be atleast 8 character" }, { status: 500 })
    }

    const hashedpassword = await bcrypt.hash(password, 12)
    const role = "agent"
    const user = await prisma.user.create({
        data: {
            role,
            email,
            fullName,
            hashedpassword
        }
    })

    return NextResponse.json({ success: "Account Created" }, { status: 200 })

}















