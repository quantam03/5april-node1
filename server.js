const http = require("http");    //es5 syntax
//single API (application programmable interface) created
//create a server
http.createServer(function(request, response){
    let user = {name:'vaibhav',age:23};
    response.write(JSON.stringify(user));
    // response.write("<h1>Hello World</h1>")
    // response.write("hey there!!")
    //closing the srever
    response.end();
}).listen(3000)
//port 


//Express Framework- allows us to combine the child router or all the routes to the default route