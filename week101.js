//declarative function
functionn hello(msg,name){
    //console.log(${msg} ${name})
    return {msg,name,age}
}

const result = hello('Hello World! ','Mark Zuckerberg',25)//
console.log(${result.msg} ${result.name} ${result.age})