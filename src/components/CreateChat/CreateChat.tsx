import React, {useEffect, useState} from 'react';
import "./CreateChat.css"
import {observer} from "mobx-react-lite";
import {ReactComponent as BackArrow} from "../../assets/images/back_arrow.svg"
import {ReactComponent as SendButton} from "../../assets/images/send_button.svg"

interface CreateChatInterface {
    style?: React.CSSProperties
    globalStore?: any
}

const CreateChat: React.FC<CreateChatInterface> = observer(({style, globalStore}) => {

    const [inputPhone, setInputPhone] = useState<string>("")

    useEffect(()=>{

        if(globalStore.newPhoneNumber.length){

            if(!Object.keys(globalStore.chats)?.some((key:string) => key === globalStore.newPhoneNumber)) {
                globalStore.setCreateChats({
                    ...globalStore.chats,
                    [globalStore.newPhoneNumber]: {chatId: `${globalStore.newPhoneNumber}@c.us`,
                        messages: []}
                })
                globalStore.setSelectedChat(globalStore.newPhoneNumber)

            }

        }
    },[globalStore.newPhoneNumber])

    const CheckPhone = (inputPhone: string) => {
        //city codes list for 55 phone code
        let UPDATED_AREA_CODE = {"55": ["11", "12", "13", "14", "15", "16", "17"
                                 , "18", "19", "21", "22", "24", "27", "28"]}

        let cityCodeBrazil = Object.values(UPDATED_AREA_CODE)
        if (inputPhone.length) {
            //Clear only numbers and change to string
            let clearPhone = inputPhone.match(/\d/g)?.join("")

            //Checking RU phoneNumber
            if ((clearPhone?.slice(0, 1) === "8" && clearPhone!.length === 11)
                || (clearPhone?.slice(0, 1) === "7" && clearPhone!.length === 11)
            ) {
                clearPhone = "7" + clearPhone.slice(1, 11)
                globalStore.setNewPhoneNumber(clearPhone)//RU Phone Number

            }

            //Checking Mexican phoneNumber
            else if ((clearPhone?.slice(0, 2) === "11"
                && clearPhone?.slice(2, 4) === "52"
                && clearPhone!.length === 14)
                || (clearPhone?.slice(0, 3) === "011"
                && clearPhone?.slice(3, 5) === "52"
                && clearPhone!.length === 15)) {
                if (clearPhone!.length === 15) {
                    //Mexican phone number
                    globalStore.setNewPhoneNumber(clearPhone.slice(3, 5) + "1" + clearPhone.slice(5, 15))

                } else {
                    //Mexican phone number
                    globalStore.setNewPhoneNumber(clearPhone.slice(2, 4) + "1" + clearPhone.slice(4, 14))
                }
            }
            //Checking Argentina phoneNumber
            else if ((clearPhone?.slice(0, 2) === "15"
                && clearPhone?.slice(2, 4) === "54"
                && clearPhone!.length === 14)
                || (clearPhone?.slice(0, 3) === "015"
                && clearPhone?.slice(3, 5) === "54"
                && clearPhone!.length === 15)) {
                if (clearPhone!.length === 15) {
                    //Mexican phone number
                    globalStore.setNewPhoneNumber(clearPhone.slice(3, 5) + "9" + clearPhone.slice(5, 15))

                } else {
                    //Mexican phone number
                    globalStore.setNewPhoneNumber(clearPhone.slice(2, 4) + "9" + clearPhone.slice(4, 14))
                }
            }

            //Checking Brazil phoneNumber
            else if ((clearPhone?.slice(0, 2) === "55"
                && cityCodeBrazil[0].some(code => clearPhone?.slice(2, 4) === code)
                && clearPhone!.length === 13)
                || (clearPhone?.slice(0, 2) === "55" && clearPhone!.length === 13)
                || (clearPhone?.slice(0, 2) === "55" && clearPhone!.length === 12)
            ) {
                if (clearPhone!.length === 13) {
                    //Brazil phone number
                    globalStore.setNewPhoneNumber(clearPhone.slice(0, 2) + "9" + clearPhone.slice(2, 13))
                } else{
                    //Brazil phone number
                    globalStore.setNewPhoneNumber(clearPhone)
                }
            }
            else if(clearPhone!.length === 11){
                //All number heaving 11 number length
                globalStore.setNewPhoneNumber(clearPhone)
            }

        }
        globalStore.setChatCreatorOpen(!globalStore.chatCreatorOpen)
    }
    return (
        <div className={globalStore.chatCreatorOpen ? "open_left__hide_panel" : "close_left_hide_panel"}>
            <div style={{height: "10%"}}></div>
            <div className="head_create_chat" style={{height: "10%"}}>
                <div className="inside_head_create_chat">
                    <BackArrow onClick={() => globalStore.setChatCreatorOpen(!globalStore.chatCreatorOpen)} className="back_icon"/>
                    <span className="new_chat">Новый чат</span>
                </div>
            </div>
            <div className="center_create_chat" style={{height: "80%"}}>
                <label>Создать чат</label>
                <input onChange={e => setInputPhone(e.target.value)} className="input_create_chat"
                       placeholder="Введите номер телефона..."/>
                <SendButton onClick={() => CheckPhone(inputPhone)} className="create_chat_button button_circle"/>
            </div>
        </div>
    );
});

export default CreateChat;