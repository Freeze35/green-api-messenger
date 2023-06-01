
const UnixTimeConverter = (UNIX_timestamp: number, type_return?:string) => {
    let ms = new Date(UNIX_timestamp * 1000);
    let months = ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'];
    let year = ms.getFullYear();
    let month = months[ms.getMonth()];
    let date = ms.getDate();
    let hour = ms.getHours();
    let min = ms.getMinutes() < 10 ? '0' + ms.getMinutes() : ms.getMinutes();
    let sec = ms.getSeconds() < 10 ? '0' + ms.getSeconds() : ms.getSeconds();
    switch (type_return) {
        case "year":
            break;
        case "month":
            return month
        case "date":
            return date
        case "hour":
            return hour
        case "min":
            return min
        case "sec":
            return sec
    }
    return date + ' ' + month + ' ' + year + ' г.';

};

export default UnixTimeConverter;