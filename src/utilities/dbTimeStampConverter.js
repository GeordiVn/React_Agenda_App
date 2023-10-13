export function dbTimeStampConverterToDate(timeStampDate)
{
    const date = timeStampDate.toDate().toLocaleDateString('nl-BE')


    return date;
}

export function dbTimeStampConverterToTime(timeStampDate)
{
    const date = timeStampDate.toDate();
    return date.getHours()+":"+ (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
}
