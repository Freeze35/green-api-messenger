export const Opens = (globalStore: any, type: string) => {


        if(globalStore.chatCreatorOpen && type !=="chatCreator"){
            globalStore.setChatCreatorOpen(!globalStore.chatCreatorOpen)
        }
        else if (globalStore.profileOpen && type !=="profile") {
            globalStore.setProfileOpen(!globalStore.profileOpen)
        }


    switch (type) {
        case "chatCreator":
            return (
                globalStore.setChatCreatorOpen(!globalStore.chatCreatorOpen)
            );
        case "profile":
            return (
                globalStore.setProfileOpen(!globalStore.profileOpen)
            );
    }

};

export default Opens;