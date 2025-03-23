import httpInstance from "@/utils/request"

export const getOrderService=(id)=>httpInstance.get(`/member/order/${id}`)