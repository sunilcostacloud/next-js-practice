import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request, content) {
    // console.log(content.params.id)
    const userData = user.filter(item => item.id == content.params.id)
    return NextResponse.json(userData.length === 0 ? { result: "No Data Found", success: false } : { result: userData, success: true }, { status: 200 })
}

export async function PUT(request, content) {
    let payload = await request.json();
    payload.id = content.params.id;
    console.log(payload)
    return NextResponse.json(payload)
}

export async function DELETE(request, content) {
    let id = content.params.id
    if (id) {
        return NextResponse.json({ result: "user Deleted", success: true }, { status: 200 })
    } else {
        return NextResponse.json({ result: "user not deleted, please try after sometime", success: false }, { status: 400 })
    }
}