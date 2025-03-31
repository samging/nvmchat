import {MessageProcessingConfig} from "./index";

let config: MessageProcessingConfig;

export function configure(userConfig: MessageProcessingConfig){
    config = userConfig;
    console.log("Configuration set:", config);
}

export function getConfig(): MessageProcessingConfig{
    if (!config) {
        throw new Error("[Error]: Configuration needs to be set");

    }
    return config;
}