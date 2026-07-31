import EventEmitter from "node:events";


function DOMEvents() {
    const myEmitter = new EventEmitter();

    //event template
    return {
        addEventListener(eventType, callback) {
            myEmitter.on(eventType, callback);
        },
        removeEventListener(eventType, callback) {
            myEmitter.off(eventType, callback);
        },
        dispatchEvent(eventType, detail) {
            eventType.target = this;
            eventType.currentTarget = this;
            myEmitter.emit(eventType, detail);
        }
    }
}


export default DOMEvents;

const button = DOMEvents();
function clickHandler(event) {
    console.log("click function");
}
button.addEventListener("click", clickHandler);

button.dispatchEvent({
    eventType: 'click',
    detail: "click function"
});