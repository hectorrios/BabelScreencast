/**
 * Created by hectorrios on 27/12/15.
 */

export default class SmsSender {
    constructor(api) {
        this.apiKey = api;
    }

    send(message) {
        console.log(message);
    }
}