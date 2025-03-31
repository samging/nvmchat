import {processMessage} from './api';
import {configure} from './config'

interface MessageProcessingConfig {
    apiUrl: string,
    discordToken: string;
}
export class MessageProcessor{
    private config: MessageProcessingConfig;

    constructor(config: MessageProcessingConfig) {
        this.config = config;
        configure(this.config)
    }
    async sendMessage(message:string) {
        try{
            const result = await processMessage(message);
            console.log("Processed message", result);
            return result;
        } catch(err) {
            console.error("Error with processing message", err);
            throw err;
        }
    }
}