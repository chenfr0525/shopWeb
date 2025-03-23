import httpInstance from "@/utils/request"

export const getGoodDetailService=(id)=>httpInstance.get(`/goods`,{params:{id}})

export const getHotGoodService=({id,type,limit=3})=>httpInstance.get(`/goods/hot`,{params:{id,type,limit}})