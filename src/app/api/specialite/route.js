import { HttpStatusCode } from 'axios';
import connectDB from '@/lib/connectDB';
import Specialite from '@/models/Specialite';
import { NextResponse } from 'next/server';



export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();
        const specialite = await Specialite.create(body);
        return NextResponse.json(
            { specialite, message: 'Your speciality has been created' },
            { status: HttpStatusCode.Created },
        );
    } catch (error) {
        return NextResponse.json({ message: error }, {
            status: HttpStatusCode.BadRequest
        });
    }
}
export async function GET() {

    try {
        await connectDB();
        const specialite = await Specialite.find();
        return NextResponse.json({ specialite });
    } catch (error) {
        return NextResponse.json({ error });
    }
}


