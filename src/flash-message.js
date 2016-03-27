/**
 * Created by hectorrios on 31/12/15.
 */

class FlashMessage {
    constructor(message) {
        this.message = message;
    }

    display() {
        alert(this.message);
    }
}

export default FlashMessage;