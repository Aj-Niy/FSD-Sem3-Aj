import EventEmitter from "node:events";


function DOMEvents() {
    const emitter = new EventEmitter();

    //event template
    return {
        addEventListener(eventType, listener) {
            emitter.on(eventType, listener);
        },
        removeEventListener(eventType, listener) {
            emitter.off(eventType, listener);
        },
        dispatchEvent(event) {
            event.target = this;
            event.currentTarget = this;
            emitter.emit(event.eventType, event);
        }
    }
}


export default DOMEvents;

const button=DOMEvents();
button.addEventListener('save',()=>{
    console.log('saving...')
})
function handleClick(event){
    console.log('button clicked');
}
button.addEventListener('click',handleClick);
button.dispatchEvent({
    eventType:"save"
});
button.dispatchEvent({
    eventType:"click"
});

const button2=DOMEvents();
button2.addEventListener('submit',()=>{
    console.log('submitting...')
})
button2.dispatchEvent({
    eventType:"submit"
});