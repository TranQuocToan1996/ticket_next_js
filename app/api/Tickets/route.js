import { NextResponse } from "next/server";
import Ticket from "../../(models)/Ticket";


export async function POST(req) {
    try {
        const body = await req.json()
        await Ticket.create(body.formData)
        return NextResponse.json({ message: 'success' }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: 'error', error }, { status: 500 })
    }
}

export async function GET() {
    try {
        const tickets = await Ticket.find()
        return NextResponse.json({ tickets }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'error', error }, { status: 500 })
    }
}