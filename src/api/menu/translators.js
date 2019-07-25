export function translateFrom(raw) {
    return Object.keys(raw).map((category) => ({
        category,
        items: raw[category].map((item) => ({
            itemNum: item.id,
            name: item.name,
            inStock: item['in_stock']
        }))
    }))

}