export function dbTimeStampConverterToDate(timeStampDate)
{
    return timeStampDate.toDate().toLocaleDateString('nl-BE');
}

export function dbTimeStampConverterToTime(timeStampDate)
{
    const date = timeStampDate.toDate();
    return date.getHours()+":"+ (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
}
