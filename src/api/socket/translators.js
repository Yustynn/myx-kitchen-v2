export function translateRawOrdersToReceiptGroups(raw) {
    function processOptions(raw) {
        if (!raw) return []

        const processed = []

        for (let { name, options } of raw) {
            for (let option of options) {
                processed.push(`${name}: ${option.name}`)
            }
        }

        return processed
    }

    const receiptGroupsById = {}
    for (let order of raw) {
        const receiptNum = +order['receipt_id']

        if (!receiptGroupsById[receiptNum]) {
            receiptGroupsById[receiptNum] = []
        }

        receiptGroupsById[receiptNum].push({
            compulsoryOptions: processOptions(order['compulsory_options']),
            optionalOptions: processOptions(order['optional_options']),
            name: order['name'],
            quantity: 1, // @TODO check with zoos
            statusId: +order['status_id'],
            itemNum: +order['item_id']
        })

    }

    return Object.keys(receiptGroupsById)
        .sort()
        .map((rid) => {
            return {
                receiptId: rid,
                orders: receiptGroupsById[rid]
            }
        })
}