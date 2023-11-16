import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request) {
    const data = user;
    return NextResponse.json(data, { status: 200 })
}

export async function POST(request) {
    let payload = await request.json();
    // console.log(payload)
    if (!payload.name || !payload.age || !payload.email) {
        return NextResponse.json({ result: "require field not found", success: false }, { status: 400 })
    }
    return NextResponse.json({ result: payload, success: true }, { status: 201 })
}