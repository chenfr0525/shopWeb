import httpInstance from "@/utils/request"

export const getCategoryDataService=()=>httpInstance.get(`/home/category/head`)

export const getSubCategoryService=(id)=>httpInstance.get(`/category/sub/filter/`,{params:{id}})

export const getCategoryDetailService=(data)=>httpInstance.post(`/category/goods/temporary`,{data})