import { format } from 'date-fns'

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

function processTimestamp(timestamp) {
    const date = new Date(timestamp)
    return format(
        date,
        'h:mm A'
    )
}

export function translateRawOrdersToReceiptGroups(raw) {
    const receiptGroupsById = {}
    const receiptIdToTimestamp = {}
    const receiptIdIsPending = {}

    for (let order of raw) {
        const receiptId = parseInt(order['receipt_id'])

        if (!receiptGroupsById[receiptId]) {
            receiptGroupsById[receiptId] = []
        }

        const statusId = +order['status_id']

        if (statusId === 0) receiptIdIsPending[receiptId] = true

        receiptIdToTimestamp[receiptId] = processTimestamp(order['start_datetime'])

        receiptGroupsById[receiptId].push({
            compulsoryOptions: processOptions(order['compulsory_options']),
            optionalOptions: processOptions(order['optional_options']),
            name: order['name'],
            quantity: 1, // @TODO check with zoos
            statusId: +order['status_id'],
            itemNum: +order['item_id']
        })
    }

    for (let orders of Object.values(receiptGroupsById)) {
        orders.sort((a, b) => a.itemNum - b.itemNum)
    }

    return Object.keys(receiptGroupsById)
        .sort((a, b) => a - b)
        .map((receiptId) => {
            return {
                isPending: !!receiptIdIsPending[receiptId],
                orders: receiptGroupsById[receiptId],
                receiptId: +receiptId,
                timestamp: receiptIdToTimestamp[receiptId],
            }
        })
}