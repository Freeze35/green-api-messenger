import {makeAutoObservable} from "mobx";

interface BooksInterface{
    items?:any[]
    kind?:""
    totalItems?:""
}

export default class BooksStore {

    private _isLoading: boolean = false;
    private _books: BooksInterface = {}
    private _optionRelevance: string = "relevance"
    private _searchQuery: string = ""
    private _subjectCategory: string = ""
    private _startIndexFetchApi:string = "10"
    private _oneBookData: BooksInterface = {}

    constructor() {
        makeAutoObservable(this)
    }

    setIsLoading = (loading: boolean) => {
        this._isLoading = loading
    }

    get isLoading(): boolean {
        return this._isLoading
    }

    setBooks = (books: {}) => {
        this._books = books
    }

    setBookChangeList = (books: BooksInterface) => {
        this._books.items = books.items
    }

    get books() {
        return this._books

    }

    setOneBookData = (books: {}) => {
        this._oneBookData = books
    }

    get oneBookData() {
        return this._oneBookData

    }

    setSearchQuery = (searchQuery: string) => {
        this._searchQuery = searchQuery
    }

    get searchQuery() {
        return this._searchQuery

    }

    setOptionRelevance = (optionRelevance: string) => {
        this._optionRelevance = optionRelevance
    }

    get optionRelevance() {
        return this._optionRelevance
    }

    setSubjectCategory = (subjectCategory: string) => {
        this._subjectCategory = subjectCategory
    }

    get subjectCategory() {
        return this._subjectCategory
    }
    setStartIndexFetchApi = (startIndexFetchApi: string) => {
        this._startIndexFetchApi = startIndexFetchApi
    }

    get startIndexFetchApi() {
        return this._startIndexFetchApi
    }
}

