import React from 'react';

const OpenCreateChat = (globalStore:any) => {
    return (
        globalStore.setChatCreatorOpen(!globalStore.chatCreatorOpen)
    );
};

export default OpenCreateChat;