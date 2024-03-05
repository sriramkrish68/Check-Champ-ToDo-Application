import formatTodosForAI from "./formatTodosForAI";

const fetchSuggestion = async (board: Board) => {
    const todos = formatTodosForAI(board);
    console.log("formatted todos to send",todos);
    const response= await fetch('/api/generateSummary', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({todos}),
    });

    if (!response.ok) {
        console.error('Failed to fetch suggestion. Status:', response.status);
        throw new Error('Failed to fetch suggestion');
    }

    let GPTdata = null;

    try {
        // Parse the JSON response
        GPTdata = await response.json();
    } catch (error) {
        console.error('Failed to parse JSON:', error);
        throw error;
    }
    
    const {content} = GPTdata;

    return content;

}

export default fetchSuggestion;



