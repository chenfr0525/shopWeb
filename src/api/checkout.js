import httpInstance from "@/utils/request"

export const getCheckoutService=()=>httpInstance.get(`/member/order/pre`)

//添加收货地址
export const addAddressService=(data)=>httpInstance.post(`/member/address`,data)

//删除地址
export const delAddressService=(id)=>httpInstance.delete(`/member/address/${id}`)

//创建定单
export const createOrderService=(data)=>httpInstance.post(`/member/order`,data)