import axios from 'axios';

export async function processMessage(message:string): Promise<string> {
    const apiUrl = process.env.ELIXIR_API_URL

    try{
        const response = await axios.post(apiUrl,{
            message: message});
return response.data;
    } catch(err) {
        console.error("Failed to process message", err);
        throw new Error("[Failed] Elixir API URL");
    }

}
