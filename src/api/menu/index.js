import { translateFrom } from './translators'

const API_MENU_BASE_URL = 'https://www.myxbrewapi.com/menu'

export async function getMenu(storeId) {
    const url = `${API_MENU_BASE_URL}/${storeId}`
    const res = await fetch(url)
    const raw = await res.json();

    return translateFrom(raw)
}
