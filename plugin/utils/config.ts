/**
 * last change: 25.11.2021
 * */

import ModalError from "./ModalError";

export const configuration:ConfigInterface = {
    scrollLock: true, // True - When modal was opened the page cannot be scrolled
    animation: "modal-list", // Animation name for transition-group
    backClose: true, //Closing on lick back block
}

export interface ConfigInterface{
    scrollLock?: boolean,
    animation? : string,
    backClose? : boolean
}

/**
 * @description Method for changing default configuration.
 * */
export function config(data:ConfigInterface){
    if (typeof data !== "object") throw ModalError.ConfigurationType(data);

    const availableKeys:Array<string> = Object.keys(configuration);

    for(const key in data) {

        if (!availableKeys.includes(key)) {
            console.warn(ModalError.ConfigurationUndefinedParam(key, availableKeys));
            continue;
        }
        // @ts-ignore
        configuration[key] = data[key];
    }
}