import * as RootNavigation from "@navigations/RootNavigation"

export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const navigateTo = (name, params) => {
    return RootNavigation.navigate(name, params)
}

