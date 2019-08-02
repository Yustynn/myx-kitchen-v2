import { translateFromGetMenu, translateToUpdateStock } from './translators'

import { API_BASE_URL } from '@/api'
import { putJson } from '@/api/helpers'

const API_URL = `${API_BASE_URL}/menu`

export async function getMenu(storeId) {
    const url = `${API_URL}/${storeId}`
    const res = await fetch(url)
    const raw = await res.json();

    return translateFromGetMenu(raw)
}

export async function setItemStockStatus(storeId, itemId, inStock) {
    const url = `${API_URL}/${storeId}/${itemId}`
    const body = translateToUpdateStock(inStock)

    return await putJson(url, body)
}
