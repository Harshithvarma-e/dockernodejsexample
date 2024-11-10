const express = require('express');
const app = express();
app.get('/',(req,res) => {
res.send("Docker nodejs example,by harshith");

});
app.listen(3111,() => {
console.log("Server is running on port 3111")
});
