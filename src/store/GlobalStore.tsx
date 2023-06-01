import {makeAutoObservable} from "mobx";
import React from "react";

export default class GlobalStore {

    private _Authorization: boolean = false
    private _chatCreatorOpen: boolean = false
    private _profileOpen: boolean = false
    private _newPhoneNumber: string = ""
    private _selectedChat: string = ""
    private _chats:{} = {}
    private _id_instance: string = ""
    private _token_instance: string = ""
    private _previous_day: string = ""
    private _getMessages:[] = []
    private _chatRef:any = null
    private _defaultScroll:boolean = true

    constructor() {
        makeAutoObservable(this)
    }

    setIdInstance = (idInstance: string) => {
        this._id_instance = idInstance
    }

    get idInstance(): string {
        return this._id_instance
    }

    setTokenInstance = (token_instance: string) => {
        this._token_instance = token_instance
    }

    get tokenInstance(): string {
        return this._token_instance
    }

    setAuthorization = (IdInstance: boolean) => {
        this._Authorization = IdInstance
    }

    get Authorization(): boolean {
        return this._Authorization
    }

    setNewPhoneNumber = (newPhoneNumber: string) => {
        this._newPhoneNumber = newPhoneNumber
    }

    get newPhoneNumber() {
        return this._newPhoneNumber
    }

    setChatCreatorOpen = (chatOpen: boolean) => {
        this._chatCreatorOpen = chatOpen
    }

    get chatCreatorOpen() {
        return this._chatCreatorOpen
    }

    setProfileOpen = (profileOpen: boolean) => {
        this._profileOpen = profileOpen
    }

    get profileOpen() {
        return this._profileOpen
    }

    setCreateChats = (chats: {}) => {
        this._chats = chats
    }

    get chats() {
        return this._chats
    }

    setSelectedChat = (selectedChat: string) => {
        this._selectedChat = selectedChat
    }

    get selectedChat() {
        return this._selectedChat
    }

    setPrevious_day = (previous_day: string) => {
        this._previous_day = previous_day
    }

    get previous_day() {
        return this._previous_day
    }

    setMessages = (previous_day: []) => {
        this._getMessages = previous_day
    }

    get getMessages() {
        return this._getMessages
    }

    setChatRef = (chatRef: React.MutableRefObject<null>) => {
        this._chatRef = chatRef
    }

    get chatRef() {
        return this._chatRef
    }

    setDefaultScroll = (defaultScroll: boolean) => {
        this._defaultScroll = defaultScroll
    }

    get defaultScroll() {
        return this._defaultScroll
    }

}

