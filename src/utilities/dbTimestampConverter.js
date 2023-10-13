export function dbTimestampConverter(seconds)
{
    const date = new Date(1970,0,1);
    date.setSeconds(seconds);

    return date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay();
}
