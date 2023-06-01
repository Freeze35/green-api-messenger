import React from 'react';
import UnixTimeConverter from "../helpers/UNIXTimeConverter";
import "./CentralBlock.css"

const TimeDay = (globalStore:any,message: any, index: number) => {
    let prevD = globalStore.previous_day
    let takeDateLast: any = UnixTimeConverter(message[index].timestamp, "date")
    /*UnixTimeConverter(m.timestamp, "date")*/
    let splitDay:any = ""
    if (prevD === 0 || takeDateLast - prevD === 1) {
        const dayPeriod = ["Сегодня","Вчера","Позавчера"]
        let dayToday:any = String(new Date().getDate()).padStart(2, '0');
        let dayBefore = (dayToday - prevD)
        splitDay = (dayPeriod[dayBefore - 1] !==undefined && dayPeriod[dayBefore - 1])
                 || UnixTimeConverter(message[index].timestamp)
    }

    globalStore.setPrevious_day(takeDateLast)

    if(splitDay.length)
    return (
        <div className="time_day">
            <div className="inner_time_day">
                {splitDay}
            </div>
       </div>
    )
};

export default TimeDay;