import {deleteLastNotification, getReceiveNotification} from "../../../http/messengerApi";

const ProcessingData = (globalStore:any,setLastData?:any) => {

    getReceiveNotification(globalStore).then(

        data => {
            // change last Data
                if(setLastData !== undefined) {
                    data
                        ? setLastData(true)
                        : setLastData(false)
                }

            if (data && data.messageData?.fileMessageData === undefined
                && data.messageData?.data.messageData?.fileMessageData === undefined
                && data.body.chatId === undefined)
            {
                //Create Chat if not created.
                let number = data.body.senderData.chatId.split("@c.us")[0]
                const CreateNumber = (globalStore: any) => {
                    globalStore.setCreateChats({
                        ...globalStore.chats,
                        [number]:
                            {
                                chatId: data.body.senderData.chatId,
                                messages: [
                                    {
                                        text: "extendedTextMessageData" in data.body.messageData
                                            ? data.body?.messageData?.extendedTextMessageData.text
                                            : data.body?.messageData?.textMessageData.textMessage
                                        ,
                                        ChatName: data.body.senderData || `${number}`,
                                        timestamp: data.body.timestamp, receiptId: data.receiptId
                                    }]
                            }
                    })
                    globalStore.setSelectedChat(number)
                    deleteLastNotification(data.receiptId,globalStore)

                }

                //Adding our messages to existing chats
                const AddToExistsChat = () => {
                    if (!globalStore.chats[number].messages.some((messageData: any) =>
                        messageData.receiptId === data.receiptId)) {
                        globalStore.setCreateChats({
                            ...globalStore.chats,
                            [number]:
                                {
                                    chatId: data.body.senderData.chatId,
                                    ChatName: data.body.senderData || `${number}`,
                                    messages: [...globalStore.chats[number].messages,
                                        {
                                            text: "extendedTextMessageData" in data.body.messageData
                                                ? data.body?.messageData?.extendedTextMessageData.text
                                                : data.body?.messageData?.textMessageData.textMessage
                                            ,
                                            ChatName: data.body.senderData || `${number}`,
                                            timestamp: data.body.timestamp, receiptId: data.receiptId
                                        }]
                                }
                        })
                    }

                }

                if (!Object.keys(globalStore.chats).length ||
                    !Object.keys(globalStore.chats)?.some((key: string) =>
                        ~~key === ~~number)) {
                    CreateNumber(globalStore)
                    deleteLastNotification(data.receiptId,globalStore)
                } else if (Object.keys(globalStore.chats)?.some((key: string) =>
                    ~~key === ~~number)) {
                    AddToExistsChat()
                    deleteLastNotification(data?.receiptId,globalStore)
                }

            } else if (data !== null) {
                deleteLastNotification(data?.receiptId,globalStore)
            }

        }
    )


    return null
};

export default ProcessingData;