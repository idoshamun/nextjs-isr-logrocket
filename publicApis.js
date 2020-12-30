import fetch from 'node-fetch';

export async function getRandomAPI() {
    const res = await fetch('https://api.publicapis.org/random');
    const json = await res.json();
    return {
        name: json.entries[0].API,
        description: json.entries[0].Description,
    };
}