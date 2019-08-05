export function generateAcceptanceBody(isAccept) {
    return JSON.stringify({
        accepted: isAccept
    })
}

export function generateOrderStatusBody(status) {
    return JSON.stringify({
        'status_id': status
    })
}