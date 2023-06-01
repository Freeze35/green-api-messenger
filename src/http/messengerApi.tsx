import axios from "axios";

const $host = axios.create({
    baseURL: "https://api.green-api.com/"
})


export const getAccountSettings = async (globalStore:any, idIstance?:string, tokenInstance?:string) => {
    // authorization check on the server by ID_INSTANCE and TOKEN_INSTANCE token is used accordingly
    try {
        const {data} = await
            $host
                .get(`waInstance${idIstance || globalStore.idInstance}/GetSettings/${tokenInstance || globalStore.tokenInstance}`)
        return data
    }
    catch (e) {
            if(idIstance?.length && tokenInstance?.length){
                return "Incorrect input data"
            }
            console.log('Incorrect input data', e);
    }
}

export const postMessage = async (message:Object|string,globalStore:any) => {
// Send message use Object: or string JSON.stringify({})
    try {
    const {data} = await $host.post(`waInstance${globalStore.idInstance}/sendMessage/${globalStore.tokenInstance}`
        , message)
    return data}
    catch (e) {
        console.log('Incorrect input data', e);
    }
}

export const getReceiveNotification = async (globalStore:any) => {
    // authorization check on the server by ID_INSTANCE and TOKEN_INSTANCE token is used accordingly
    try {
    const {data} = await $host.get(`waInstance${globalStore.idInstance}/receiveNotification/${globalStore.tokenInstance}`)
    return data}
    catch (e) {
        console.log('Incorrect input data', e);
    }
}

export const deleteLastNotification = async (id:any,globalStore:any) => {
    // authorization check on the server by ID_INSTANCE and TOKEN_INSTANCE token is used accordingly
    try {
    const {data} = await
        $host.delete(`waInstance${globalStore.idInstance}/deleteNotification/${globalStore.tokenInstance}/${id}`)
    return data}
    catch (e) {
        console.log('Incorrect input data', e);
    }
}

export const getQrData = async (globalStore:any) => {
    // request on server for getting QR
    try {
        const {data} = await $host.get(`waInstance${globalStore.idInstance}/qr/${globalStore.tokenInstance}`)
        return data}
    catch (e) {
        console.log('Incorrect input data', e);
    }

}
