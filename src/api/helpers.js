export async function putJson(url, body) {
    return await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    })
}