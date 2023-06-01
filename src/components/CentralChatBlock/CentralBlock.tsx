import React, {useState} from 'react';
import {messageInterface} from "../helpers/interfaces";
import {postMessage} from "../../http/messengerApi";
import "./CentralBlock.css"
import Header from "../Header/Header";

interface CentralBlockInterface {
    style: object
    globalStore:any
}
const CentralBlock:React.FC<CentralBlockInterface> = ({style,globalStore}) => {

    const [messageValue, setMessageValue] = useState<messageInterface>({chatId:"",message:""})
    const [file, setFile] = useState(null)

    const auto_grow = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        e.target.style.height = "5px"
        e.target.style.height = (e.target.scrollHeight)+"px";
    }

    //on any changes text fill call function
    const changeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        auto_grow(e)
        setMessageValue({chatId: "", message: `${e.target.value.trim()}`}) // clear spaces in messages
    }

    const sendMessage =(messageValue:messageInterface)=>{


        //check length our message and send on phonenumberID
        if(messageValue.message.length) {
            globalStore.setMessagesList([...globalStore.messages, {...messageValue, chatId: "79024580268@c.us"}])
            console.log(globalStore.messages)
            postMessage({...messageValue, chatId: "79024580268@c.us"}).then(data => console.log(data))
        }
        setMessageValue({chatId:"",message:""})
    }

    const selectFile = (e: any) => {
        setFile(e.target.files[0])
    }

    return (
        <div id="central_block" style={style} className="messenger_center">
            <Header></Header>
            <div className="chat_block">
                {globalStore.messages.map((sendedMessage:any)=>
                    {
                        return(
                            <div key={`${Date.now()}`} className="messages_list">
                                <div>{sendedMessage.chatId.split("@")[0]}</div>
                                <div>{sendedMessage.message}</div>
                            </div>
                        )
                    }
                )}
            </div>
            <div className="input_data_block">
                <div className="send_message_block">
                    <div className="send_block" style={{width: "20%" }}>
                        <label className="load_file">
                            <input
                                style={{display: "none"}}
                                type="file"
                                onChange={selectFile}
                            />
                            Add file
                        </label>
                    </div>
                    <div style={{width: "60%"}}>
                            <textarea
                                value={messageValue.message}
                                onChange={changeMessage}
                                placeholder="Введите сообщение..."
                                className="message_text"/>
                    </div>
                    <div className="send_block"
                         style={{width: "20%"}}>
                        <button className="send_button" onClick={()=>sendMessage(messageValue)}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CentralBlock;