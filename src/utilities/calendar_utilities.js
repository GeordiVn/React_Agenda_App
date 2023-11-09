import {getDate} from "date-fns";

export function taskIsCurrentDay(task, day, dateSelected) {
    return (task.date.toDate().getMonth() ===
        new Date(dateSelected).getMonth() &&
        task.date.toDate().getDate() ===
        day &&
        task.date.toDate().getFullYear() ===
        new Date(dateSelected).getFullYear());
}

export function taskIsCurrentDayAndIsRepeat(task, day, dateSelected) {
    return (task.date.toDate().getMonth() ===
        new Date(dateSelected).getMonth() &&
        task.date.toDate().getDate() ===
        day && task.repeat === true)
}

export function taskIsToday(task) {
    return task.date.toDate() === new Date();
}

export function dayMonthIsToday(dateSelected,day) {
    return (getDate(dateSelected)=== day && dateSelected.getMonth() === new Date().getMonth());
}

export const toDateInputValue = Date.prototype.toDateInputValue = (function () {
    const local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
});
