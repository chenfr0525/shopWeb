import httpInstance from "@/utils/request"

//加入购物车
export const addCartService=({skuId,count})=>httpInstance.post(`/member/cart`,{skuId,count})

//获取购物车列表
export const getCartListService=()=>httpInstance.get(`/member/cart`)

//删除购物车
export const delCartService=(ids)=>httpInstance.delete(`/member/cart`,{data:{ids}})

//合并购物车
export const mergeCartService=(data)=>httpInstance.post(`/member/cart/merge`,data)