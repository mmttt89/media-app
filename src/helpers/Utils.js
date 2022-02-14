import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import * as RootNavigation from "@navigations/RootNavigation"

dayjs.extend(relativeTime);

export function fromNow(time) {
    return dayjs(time).fromNow()
}

export function monthYear(time) {
    return dayjs(time).format('DD MMMM')
}

export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const navigateTo = (name, params) => {
    return RootNavigation.navigate(name, params)
}

export const randomIntNumber = (num = 1000) => Math.floor((Math.random() * num) + 1);

export const dataFilter = (array, pageNumber, pageSize) => {    
    return array.slice((pageNumber - 1) * pageSize, (pageSize * pageNumber))
}