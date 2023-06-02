import React, {useContext} from 'react';
import {ReactComponent as BackArrow} from "../../assets/images/back_arrow.svg";
import "./Profile.css"
import {Context} from "../../ContextProvider";
import profileImg from "../../assets/images/person.png";
import {observer} from "mobx-react-lite";


interface ProfileInterface {
    style?: React.CSSProperties
}

const Profile: React.FC<ProfileInterface> = observer(({style}) => {

    const {globalStore} = useContext(Context)

    //remove id,Token, checker messenger
    const RemoveIdToken = () => {
        globalStore.setProfileOpen(!globalStore.profileOpen)
        localStorage.removeItem("idInstance");
        localStorage.removeItem("tokenInstance");
        globalStore.setIdInstance("")
        globalStore.setTokenInstance("")
    }
    const RemoveChats = () => {
        localStorage.removeItem("chats");
        globalStore.setSelectedChat("")
        globalStore.setCreateChats({})
    }


    return (
        <div className={globalStore.profileOpen ? "open_left__hide_panel" : "close_left_hide_panel"}>
            <div className="head_create_chat" style={{height: "10%"}}/>
            <div className="inside_profile_head" style={{height: "10%"}}>
                <BackArrow onClick={() => globalStore.setProfileOpen(!globalStore.profileOpen)}
                           className="back_icon_profile"/>
                <span className="profile_user">Профиль пользователя</span>
            </div>
            <div className="profile_img_block"
                 title="Изменить картинку профиля"
                 >
                <img className="profile_img"
                     src={profileImg}
                     alt={""}
                     title="Изменить изображение"
                />
            </div>
            <div className="info_data info_back" style={{height: "10%"}}>
                <div className="small_info" style={{width: "50%"}}>Ваш ID Instance</div>
                <div style={{width: "50%"}}>{globalStore.idInstance}</div>

            </div>
            <div className="info_data info_broke">
                <div className="small_info " style={{width: "50%", alignSelf: "center", whiteSpace: "nowrap"}}>
                    Ваш Token Instance
                </div>
                <div style={{width: "100%", paddingTop: 20}}>
                    {globalStore.profileOpen ? globalStore.tokenInstance : ""}</div>

            </div>
            <div className="leave_account info_back" onClick={RemoveIdToken} style={{height: "10%"}}>
                Выйти из аккаунта
            </div>
            <hr style={{background:"red"}}/>
            <div className="leave_account info_back" onClick={RemoveChats}>
               Удалить чаты
            </div>
            <div className="center_create_chat">

            </div>
        </div>
    );
});

export default Profile;