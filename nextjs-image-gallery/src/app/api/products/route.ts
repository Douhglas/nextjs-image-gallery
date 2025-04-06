import { NextRequest, NextResponse } from "next/server";

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;
console.log("PEXELS_API_KEY:", PEXELS_API_KEY);

export async function GET(req: NextRequest) {
    if (!PEXELS_API_KEY) {
        console.error("PEXELS_API_KEY is not defined");
        return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const query = req.nextUrl.searchParams.get("query");

    if (!query) {
        return NextResponse.json({ error: "Query parameter is required" }, { status: 400 });
    }

    try {
        const url = `https://api.pexels.com/v1/search?query=${query}&per_page=6`;
        const response = await fetch(url, {
            headers: {
                Authorization: PEXELS_API_KEY,
            },
        });
        console.log("API Endpoint /api/products is being loaded");

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data.photos || []);
    } catch (error: any) {
        console.error("Error in API handler:", error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}