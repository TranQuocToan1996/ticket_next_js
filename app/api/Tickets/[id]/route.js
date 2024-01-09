import { NextResponse } from "next/server";
import Ticket from "../../../(models)/Ticket";

export async function POST(req, { params }) {
    try {
        const { id } = params
        await Ticket.findByIdAndDelete(id)
        return NextResponse.json({ message: 'success' }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: 'error', error }, { status: 500 })
    }
}

export async function GET(req, { params }) {
    try {
        const { id } = params
        const found = await Ticket.findById(id)
        return NextResponse.json({ found }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'error', error }, { status: 500 })
    }
}

export async function PUT(req, { params }) {
    try {
        const { id } = params
        const body = await req.json()
        const ticketData = body.formData
        await Ticket.findByIdAndUpdate(id, ticketData)
        return NextResponse.json({ message: 'success' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'error', error }, { status: 500 })
    }
}