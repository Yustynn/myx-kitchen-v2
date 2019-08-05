import { API_BASE_URL } from '@/api'

const API_URL = `${API_BASE_URL}/depositItem`

export async function registerSlot(slot) {
    const url = `${API_URL}/${slot}`

    return await fetch(url, { method: 'PUT' })
}
