export function translateFromGetMenu(raw) {
    return Object.keys(raw).map((category) => ({
        category,
        items: raw[category].map((item) => ({
            itemNum: item.id,
            name: item.name,
            inStock: item['in_stock']
        }))
    }))
}

export function translateToUpdateStock(inStock) {
    return JSON.stringify({
        'in_stock': inStock
    })
}
