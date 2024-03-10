const mongoose = require('mongoose');
const { DB_NAME } = require('./../constants.js');
//invocation of function.

//In JavaScript, the syntax ()() typically represents the invocation of a function. When you see this pattern, it means that there are two sets of parentheses immediately following each other. The first set of parentheses is used to define an anonymous function, and the second set is used to immediately invoke that function.

//This pattern is often referred to as an "immediately invoked function expression" (IIFE)

//An IIFE is a way to create a function and execute it immediately after its creation. It is commonly used to create a new scope for variables to avoid polluting the global scope and to encapsulate logic.

;(async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`\n Mongo DB Connected !! DB HOST: ${connectionInstance.connection.host}`);

    }catch (error){
        console.error("MONGODB Connection FAILED: ", error);
        process.exit(1)
    }
})()
