import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {messageInterface} from "../helpers/interfaces";
import {postMessage} from "../../http/messengerApi";
import "./CentralBlock.css"
import Header from "../Header/Header";
import {observer} from "mobx-react-lite";
import UnixTimeConverter from "../helpers/UNIXTimeConverter";
import {ReactComponent as DoubleTick} from "../../assets/images/double-tick.svg"
import profileImg from "../../assets/images/person.png";
import {ReactComponent as SendButton} from "../../assets/images/send_button.svg"
import { ReactComponent as Folder } from "../../assets/images/folder.svg"
import timeDay from "./TimeDay";
import { Virtuoso } from 'react-virtuoso';
import ProcessingData from "../helpers/LogicForProcessingRequests/ProcessingData";
interface CentralBlockInterface {
    style: React.CSSProperties
    globalStore: any
}

const CentralBlock: React.FC<CentralBlockInterface> = observer(({style, globalStore}) => {

    const [messageValue, setMessageValue] = useState<messageInterface>(
        {chatId: "", message: "", idMessage: ""})
    const [file, setFile] = useState(null)

    const virtuoso = useRef(null);
    let messages = globalStore.getMessages
    //set ref on scroll global
    globalStore.setChatRef(virtuoso)
    //messages = Object.values(globalStore?.chats[globalStore.selectedChat]?.messages.slice())


    useLayoutEffect(()=>{
        globalStore.setMessages([])
        setTimeout(()=>{
            //checking if we delete all chats
            if(globalStore?.selectedChat?.length)
                globalStore?.setMessages(Object?.values(globalStore?.chats[globalStore?.selectedChat]?.messages?.slice()))

            // if in some search we disable standart scroll him return to default after all
        },1)


    },[globalStore.selectedChat,globalStore.chats])

    useEffect(() => {
        setTimeout(()=>{
            if(globalStore.defaultScroll){
                ScrollDown("auto")
            }
            // if in some search we disable standart scroll him return to default after all
            globalStore.setDefaultScroll(true)
        },1)
    }, [globalStore.getMessages]);

    const ScrollDown = (type="auto") =>{
        setTimeout(()=>{
            // @ts-ignore ignore .scrollToIndex type "never
            virtuoso.current!.scrollToIndex({
                index: globalStore.getMessages.length-1,
                behavior: type || "auto"
            })
        },5)
    }

    //autogrow textarea on adding scrollHeight and return to 70px height by default message_text
    const auto_grow = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const offsetHeight = 25
        e.target.style.height = "inherit" //return to standart
        e.target.style.height = e.target.scrollHeight + "px"
        document.getElementById("send_message_block")!.style.height = "inherit"
        document.getElementById("send_message_block")!.style.height = (e.target.scrollHeight)
            + offsetHeight + "px"
    }

    //on any changes text fill call function
    const changeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        auto_grow(e)
        setMessageValue({chatId: "", message: `${e.target.value}`, idMessage: ""})
        // clear spaces in messages
    }

    const sendMessage = (messageValue: messageInterface, globalStore: any) => {
        //check length our message and send on phonenumberID
        if (messageValue.message.length) {
            finalPostMessage(globalStore)
        }
        setMessageValue({chatId: "", message: "", idMessage: ""})
    }

    const sendDataEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>,
                           messageValue: messageInterface,
                           globalStore: any) => {
        if (e.key === "Enter" && messageValue.message.length) {
            e.preventDefault()
            finalPostMessage(globalStore)
            setMessageValue({chatId: "", message: "", idMessage: ""})
        }
    }

    //Sending our message on waiting server request
    const finalPostMessage = (globalStore: any) => {
        postMessage({chatId: `${globalStore.selectedChat}@c.us`, message: messageValue.message}
            , globalStore).then(()=>
            ProcessingData(globalStore))
    }

    const selectFile = (e: any) => {
        setFile(e.target.files[0])
    }

    //converting time Unix type
    const time = (message: any) => {
        return `${UnixTimeConverter(message.timestamp, "hour")}
        :${UnixTimeConverter(message.timestamp, "min")}`
    }

    return (
        <div style={style} className="messenger_center">
            <Header>
                <div className="chat_head_select" style={{width: "30%"}}>
                    <img className="profile_icon"
                         src={profileImg}
                         alt={""}
                         title="Профиль_номера"
                    />
                    <div style={{paddingLeft: 20}}>
                        {globalStore.selectedChat}
                    </div>

                </div>
                <div style={{width: "20%"}}></div>
                <div style={{width: "30%"}}></div>
                <div style={{width: "20%"}}></div>
                <div style={{width: "10%"}}></div>
            </Header>
            <div className="chat_block">
                <Virtuoso
                    style={{ height: "100%",width:"100%"}}
                    data={messages}
                    ref={virtuoso}
                    alignToBottom={true}
                    initialTopMostItemIndex={globalStore.getMessages.length-1}
                    itemContent={(index) =>
                    {return messages.length
                        ?
                            <div key={`${messages[index].receiptId}`} className="message_block">
                                {timeDay(globalStore,messages, index)}
                                {messages[index].ChatName.chatId === messages[index].ChatName.sender
                                    ? <div style={{background: "white"}}
                                           className="one_massage">
                                        <div style={{alignSelf: "flex-start"}}
                                             className="one_massage_text">{messages[index].text}</div>
                                        <div className="in_message">
                                            <div
                                                className="one_massage_time">{time(messages[index])}</div>
                                            <DoubleTick className="double_tick"/></div>
                                    </div>
                                    : <div className="one_massage"
                                           style={{marginLeft: "auto"}}>
                                        <div className="one_massage_text">{messages[index].text}</div>
                                        <div className="in_message">
                                            <div
                                                className="one_massage_time">{time(messages[index])}</div>
                                            <DoubleTick className="double_tick"/>
                                        </div>
                                    </div>}
                            </div>
                        :""}}
                />
            </div>
            <div id="input_data_block" className="input_data_block">
                <div className="send_message_block" id="send_message_block">
                    <div className="send_block" style={{width: "20%"}}>
                        <label className="load_file">
                            <input
                                style={{display: "none"}}
                                type="file"
                                onChange={selectFile}
                            />

                            <Folder className="file_folder"/>
                        </label>
                    </div>
                    <div style={{width: "60%"}}>
                            <textarea
                                value={messageValue.message}
                                onChange={changeMessage}
                                placeholder="Введите сообщение..."
                                className="message_text"
                                onKeyDown={(e) => sendDataEnter(e, messageValue, globalStore)}
                            />
                    </div>
                    <div className="send_block"
                         style={{width: "20%"}}>
                        <SendButton className="send_button"
                                    onClick={() => sendMessage(messageValue, globalStore)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CentralBlock;