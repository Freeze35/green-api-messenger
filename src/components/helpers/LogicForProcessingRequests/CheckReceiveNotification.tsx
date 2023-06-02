import ProcessingData from "./ProcessingData";

interface CheckRInterface {
    globalStore: any
    checkInterval: any
    lastData:boolean
    setLastData: any
    timeout: number
}
const CheckReceiveNotification = ({globalStore, checkInterval,lastData, setLastData, timeout}:CheckRInterface
) => {
    //Checking every 5 seconds or for fast chat 3s incoming message
    if(globalStore.idInstance.length){
        checkInterval.current = setInterval(() => {
        ProcessingData(globalStore,setLastData)

    }, lastData? 3000 : timeout || 5000)
}
    else{
        clearInterval(checkInterval.current as NodeJS.Timeout)
    }
    return null
};

export default CheckReceiveNotification;