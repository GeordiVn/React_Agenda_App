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
