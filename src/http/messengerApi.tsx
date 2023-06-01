import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_MESSENGER_API_URL
})

export const getAccountData = async (idInstance: string, apiTokenInstance: string) => {

    // проверка авторизованности на сервере по токену соответветсвенно используется  $authHost
    // server/routes/typeRoutes.js router.post('/',checkRoleMiddlware("ADMIN"), typeController.create)
    const {data} = await $host.get(`waInstance${idInstance}/GetSettings/${apiTokenInstance}`)
    return data
}

/*export const fetchTypes = async () => {
    const {data} = await $host.get("api/type")
    return data
}

export const createBrand = async (brand) => {
    // проверка авторизованности на сервере по токену используется  $authHost
    // server/routes/typeRoutes.js router.post('/',checkRoleMiddlware("ADMIN"), typeController.create)
    const {data} = await $authHost.post("api/brand", brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get("api/brand")
    return data
}

// проверка авторизованности на сервере по токену соответветсвенно используется  $authHost
// server/routes/typeRoutes.js router.post('/',checkRoleMiddlware("ADMIN"), typeController.create)
export const createDevice = async (device, file) => {
    const {data} = await $authHost.post('api/device', device, file)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit, limitPrice) => {
    const {data} = await $host.get('api/device', {
        params: {
            typeId, brandId, page, limit, limitPrice
        }
    })
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

export const deleteOneInfoDevice = async (id) => {
    const {data} = await $authHost.delete('api/device-info/' + id)
    return data
}

export const createDeviceInfo = async (info) => {
    const {data} = await $authHost.post('api/device-info', info)
    return data
}

export const updateDeviceInfo = async (id, formData) => {
    const {data} = await $authHost.put('api/device-info/' + id, formData)
    return data
}*/
