const Eventemitter=require('node:events'); // will return class

const emitter=new Eventemitter();
// respond to event
emitter.on("order-pizza",()=>{  
    console.log("order successful");
})


emitter.emit("order-pizza") // will create an event

emitter.on("order-tea",(qty,type)=>{
    console.log(`you ordered ${qty} ${type} tea`);
})

//event with parameters
emitter.emit("order-tea","large","ginger")
