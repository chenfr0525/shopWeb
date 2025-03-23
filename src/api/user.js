import httpInstance from "@/utils/request"

export const loginService=({account,password})=>httpInstance.post(`/login`,{account,password})

export const getLikeListService=({limit=4})=>httpInstance.get(`/goods/relevant`,{params:{limit}})