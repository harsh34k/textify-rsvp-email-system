import { NextResponse } from 'next/server';

export async function POST(request) {
    const { email, responses, sheetId } = await request.json();

    const url = process.env.NEXT_PUBLIC_GSCRIPT_URL;

    // const body = {
    //     email,
    //     response,
    //     sheetId,
    // };
    console.log("response", responses);


    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            action: "updateResponse",
            sheetId,
            email,
            responses
        })
    });

    const data = await res.json();

    if (data.status === 'success') {
        return NextResponse.json({ message: 'RSVP submitted successfully' });
    } else {
        return NextResponse.json({ error: 'Error occurred' });
    }
}
