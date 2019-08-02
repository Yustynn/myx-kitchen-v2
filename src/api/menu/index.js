import { translateFromGetMenu, translateToUpdateStock } from './translators'

const API_MENU_BASE_URL = 'http://10.12.254.221:11235/menu'

export async function getMenu(storeId) {
    const url = `${API_MENU_BASE_URL}/${storeId}`
    const res = await fetch(url)
    const raw = await res.json();

    return translateFromGetMenu(raw)
}

export async function setItemStockStatus(storeId, itemId, inStock) {
    const url = `${API_MENU_BASE_URL}/${storeId}/${itemId}`
    const body = translateToUpdateStock(inStock)

    return await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    })
}
