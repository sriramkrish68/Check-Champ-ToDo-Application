import { NextResponse } from "next/server";
import openai from "@/openai";
export async function POST(request: Request) {
    const {todos} = await request.json();

    //connect with openai
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            {
                role: 'system',
                content: 'When responding, welcome the user always as Mr. Sriram G and provide the list of events to do today limit response to 200 characters',
            },
            {
                role: 'user',
                content: `Hi there, provide a summary of the following todos. count how many todos are there in each category such as To Do, in progress, done, then tell the user to have a productive day! Here is the data: ${JSON.stringify(todos)}`,
            },
        ],
    });

    

    return NextResponse.json(response.choices[0].message);
}


