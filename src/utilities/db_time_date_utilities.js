export function dBTimeStampToLocaleDateString(timeStampDate) {
    return timeStampDate.toDate().toLocaleDateString('nl-BE');
}

export function dbTimeStampToTime(timeStampDate) {
    const date = timeStampDate.toDate();
    return date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
}

export function toDateInputValue(date) {
    const local = date
    local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
}

export function getTwentyFourHourTime(amPmString) {
    const d = new Date("1/1/2013 " + amPmString);
    console.log(d)
    return (d.getHours() < 9 ? "0" + d.getHours() : d.getHours()) + ':' + (d.getMinutes() < 9 ? "0" + d.getMinutes() : d.getMinutes());
}