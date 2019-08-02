import { API_BASE_URL } from '@/api'
import {generateAcceptanceBody, generateOrderStatusBody} from "./translators";
import { putJson } from "@/api/helpers";

const ORDER_API_URL = `${API_BASE_URL}/orders`
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