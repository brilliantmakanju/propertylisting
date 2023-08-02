import { NextApiRequest } from "next";
import { getSession } from 'next-auth/react'
import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb"


const serverAuth = async (req: NextApiRequest) => {
    const session = await getSession({ req })

    if (!session?.user?.email) {
        return NextResponse.json({ error: "Not signed in" }, { status: 500 })
    }

    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    })

    if (!currentUser) {
        return NextResponse.json({ error: "Not signed in" }, { status: 500 })
    }

    return { currentUser }
}

export default serverAuth











