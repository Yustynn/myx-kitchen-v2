import { API_BASE_URL } from '@/api'
import { generateAcceptanceBody, generateOrderStatusBody } from "./translators";
import { putJson } from "@/api/helpers";

export const STATUS_REJECTED = -1
export const STATUS_TO_BE_ACCEPTED = 0
export const STATUS_UNACKNOWLEDGED = 1
export const STATUS_TO_BE_PROCESSED = 2
export const STATUS_PROCESSED = 3
export const STATUS_COMPLETED = 4

const ORDER_API_URL = `${API_BASE_URL}/order`
const RECEIPT_API_URL = `${API_BASE_URL}/receipt`

export async function acceptReceipt(storeId, receiptId) {
    const url = `${RECEIPT_API_URL}/${storeId}/${receiptId}`
    const body = generateAcceptanceBody(true)

    return await putJson(url, body)
}

export async function rejectReceipt(storeId, receiptId) {
    const url = `${RECEIPT_API_URL}/${storeId}/${receiptId}`
    const body = generateAcceptanceBody(false)

    return await putJson(url, body)
}

export async function setOrderStatus(storeId, orderId, status) {
    const url = `${ORDER_API_URL}/${storeId}/${orderId}`
    const body = generateOrderStatusBody(status)

    return await putJson(url, body)
}

export async function setOrdersStatus(storeId, orders, status) {
    return await Promise.all(
        orders.map((o) => setOrderStatus(storeId, o.id, status))
    )
}