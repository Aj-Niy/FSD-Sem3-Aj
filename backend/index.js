import EventEmitter from "node:events";
const myEmitter = new EventEmitter();
myEmitter.on("greet", (teacher) => {
  console.log(`Class started by teacher, ${teacher}!`);
});
myEmitter.on("end", () => {
  console.log("Class ended!");
});
myEmitter.emit("greet", "AJ");
myEmitter.emit("end");



console.log("code start");
process.nextTick(()=>{
    console.log("This is process.nextTick operatinn")
})
setTimeot(()=>{
    console.log("This is timeout op",0)
})
console.log("this is the end pt on code")




