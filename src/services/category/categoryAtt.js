import httpService from "../httpService"

export const getCategoryAttsService=(id)=>{
    return httpService(`/admin/categories/${id}/attributes`,'get')
}

export const createCategoryAttsService=(id,data)=>{
    return httpService(`/admin/categories/${id}/attributes`,'post', data)
}

export const editCategoryAttService=(id,data)=>{
    return httpService(`/admin/categories/attributes/${id}`,'put',data)
}