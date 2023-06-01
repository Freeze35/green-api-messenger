import {ReactComponent as Search_Loop} from "../../assets/images/search_loop.svg";
import React, {useEffect, useState} from "react";
import "./SearchBar.css"

const Search = ({globalStore}: { globalStore: any }) => {

    const [search, setSearch] = useState<string>("")
    const [searchList, setSearchList] = useState<any>([])

    const noneSearchList = () => {
        document.getElementById("search_list")!.style.display = "none"
    }

    //Debounce input search
    useEffect(() => {

        //Debounce for input request
        const delayDebounce = setTimeout(() => {
            let notSortedList: any[] = []

            const chatsNumbers = Object?.keys(globalStore?.chats).slice()

            const checkingDuble = (message: any, indexPosition: any, number: any) => {
                if (!notSortedList.some((value: any) => {
                        return `${value.number}` === `${number}` && `${value.id}` === `${indexPosition}`
                    }
                )) {
                    notSortedList = [...notSortedList, {
                        number: number,
                        id: `${indexPosition}`,
                        text: message.text
                    }]
                }
            }

            let getPhone = search.replace(/\D+/g, "");
            let getfalseLengthStr = !search.replace(/(\d+)/, "").length
            //Search by number phone
            if (~~getPhone[0] === 8) {
                getPhone = `7${getPhone.slice(1, getPhone.length)}`
            }

            if (getPhone.length
                && chatsNumbers.length
                && (~~getPhone?.slice(0, 2) > 0 && getfalseLengthStr
                    || ~~getPhone?.split(" ")[1]?.slice(0, 2) > 0) && getfalseLengthStr
                || (~~getPhone?.split(" ")[0] > 0 && getfalseLengthStr
                    || ~~getPhone?.split(" ")[1] > 0) && getfalseLengthStr
            ) {
                setSearchList([])
                let newNumbers = chatsNumbers.filter((num) =>
                    num.includes(getPhone)
                )
                newNumbers.map((number) =>
                    notSortedList = [...notSortedList, {number: number}]
                )
                document.getElementById("search_list")!.style.display = "flex"
                setSearchList(notSortedList)

            }
            //Search by words
            else if (search.length && chatsNumbers.length) {
                setSearchList([])
                document.getElementById("search_list")!.style.display = "flex"
                //Search data in chats
                chatsNumbers
                    .map(number => globalStore?.chats[number].messages
                        .map(
                            (message: any, indexPosition: number) => {
                                if (message.text.length) {

                                    //Search by full words
                                    if (message.text.toLowerCase().includes(search.toLowerCase())) {
                                        checkingDuble(message, indexPosition, number)
                                    }
                                    //Search by split words
                                    message.text.split(" ")
                                        .map((text: string) => {
                                            //Searching by word if one word in input
                                            if (text.toLowerCase().includes(search.toLowerCase())) {
                                                checkingDuble(message, indexPosition, number)
                                            }
                                            search.toLowerCase().split(" ")
                                                .map((search_word: string) => {
                                                    if (text.toLowerCase().includes(search_word.toLowerCase())) {
                                                        checkingDuble(message, indexPosition, number)
                                                    }
                                                })
                                            //Searching by word if many words in input
                                        })
                                }
                            }
                        ))

                //Sorting our find data
                let SortedList = notSortedList.sort(function (first_word, second_word) {
                    let a
                    let b
                    //additional sort condition
                    const calcLetters = (input_word: string) => {
                        let out: number = 0
                        search.toLowerCase().split(" ").map((word) => {
                            if (input_word.toLowerCase().split(" ").includes(word)) {
                                out += 1
                            }
                        })

                        return out
                    }

                    a = calcLetters(first_word.text)
                    b = calcLetters(second_word.text)
                    if (a > b) return -1
                    else if (a < b) return 1
                    else return 0
                })

                setSearchList(SortedList)
            } else {
                noneSearchList()
                setSearchList([])
            }


        }, 500) //Timeout debounce

        return () => clearTimeout(delayDebounce)
    }, [search])


    const searchDevice = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearch(e.target.value)

        /*globalStore.chatRef.current!.scrollToIndex({
            index: globalStore.getMessages.length-1,
            behavior: "smooth"
        })*/

    }

    const clearedSearch = () => {
        setSearch("")
        noneSearchList()
    }

    //select in our selectlist number or number/message
    const chooseList = (data: any) => {
        //checking select message
        if (data?.text) {
            noneSearchList()
            globalStore.setDefaultScroll(false)
            globalStore.setSelectedChat(data?.number)
            setTimeout(() => {
                globalStore?.chatRef?.current?.scrollToIndex({
                    index: data?.id,
                    align: "end",
                    behavior: "auto"
                })
            }, 50)
            setSearchList([])
            setSearch("")
        }
        //or check number
        else if (data?.number) {
            noneSearchList()
            globalStore.setSelectedChat(data?.number)
            setSearchList([])
            setSearch("")
        }

    }

    return (
        <div className="search_phones_upper">

            <div className="search_phones">
                <Search_Loop className="search_loop"/>
                <input onChange={searchDevice}
                       value={search}
                       className="search_phones_input"/>
                <button onClick={clearedSearch}
                        className="cleared_button">x
                </button>
            </div>
            <div className="search_list" id="search_list">
                {searchList.map((data: any, id: number) => {
                    if (id < 4)
                        return (
                            <div key={id} className="search" onClick={() => chooseList(data)}>
                                <p style={{marginRight: 20, width: "50%"}}>
                                    {data?.number}
                                </p>
                                <p className="text_search_align"
                                   style={{width: "50%"}}>
                                    {data?.text?.split(" ")[0]?.slice(0, 8)} {data?.text?.split(" ")[1]?.slice(0, 8)}
                                </p>
                            </div>
                        )
                })}
                <div style={{height: 25}}></div>
            </div>
        </div>
    );
};

export default Search;