export const api_data = async () => {
    const res = await fetch("https://task-mannager-api.vercel.app/api/snotes");
    const data = await res.json();
    return data;
};