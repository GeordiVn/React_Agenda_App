import {getDate, getDaysInMonth, lastDayOfMonth} from "date-fns";
import {DAYNAME_NUMBERS} from "../data/data";


export function taskIsCurrentDay(task, day, dateSelected) {
    return (task.date.toDate().getMonth() === new Date(dateSelected).getMonth() && task.date.toDate().getDate() === day && task.date.toDate().getFullYear() === new Date(dateSelected).getFullYear());
}

export function taskIsCurrentDayAndIsRepeat(task, day, dateSelected) {
    return (task.date.toDate().getMonth() === new Date(dateSelected).getMonth() && task.date.toDate().getDate() === day && task.repeat === true)
}

export function dayMonthIsToday(dateSelected, day) {
    return (getDate(dateSelected) === day && dateSelected.getMonth() === new Date().getMonth());
}

export const addEmptyDaysOfPrevMonth = (startDay) => {
    let emptyDaysOfPrevMonth = [];
    let count = DAYNAME_NUMBERS[startDay.toLocaleDateString('ng-BE', {weekday: 'long'}).toLowerCase()]
    if (count !== 1) {
        for (let i = 0; i < count - 1; i++) {
            emptyDaysOfPrevMonth = [...emptyDaysOfPrevMonth, i]
        }
    }
    return emptyDaysOfPrevMonth
}
export const addCurrentMonthDays = (startDay) => {
    const dayCount = getDaysInMonth(startDay);
    let currentMonthDays = [];
    let count = DAYNAME_NUMBERS[startDay.toLocaleDateString('ng-BE', {weekday: 'long'}).toLowerCase()]
    for (let i = 1; i < dayCount + 1; i++) {
        currentMonthDays = [...currentMonthDays, i]
        if (count === 7) {
            currentMonthDays = [...currentMonthDays, "newrow"]
            count = 0
        }
        count++;

    }
    return currentMonthDays;
}

export const addEmptyDaysOfNextMonth = (endDay, dateSelected) => {
    let emptyDaysOfNextMonth = [];
    if (lastDayOfMonth(dateSelected).toLocaleDateString('nl-BE', {weekday: 'long'}).toLowerCase() !== 'zondag') {
        for (let i = 0; i < 7 - DAYNAME_NUMBERS[endDay.toLocaleDateString('ng-BE', {weekday: 'long'}).toLowerCase()]; i++) {
            emptyDaysOfNextMonth = [...emptyDaysOfNextMonth, i]
        }
    }
    return emptyDaysOfNextMonth;
}