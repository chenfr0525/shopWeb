import httpInstance from "@/utils/request";

export const getCategory=()=>httpInstance.get('/home/category/head')
