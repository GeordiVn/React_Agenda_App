export function dBTimeStampToLocaleDateString(timeStampDate)
{
    return timeStampDate.toDate().toLocaleDateString('nl-BE');
}

export function dbTimeStampToTime(timeStampDate)
{
    const date = timeStampDate.toDate();
    return date.getHours()+":"+ (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
}
