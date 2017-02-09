var express = require('express')
var app = express();
var router = express.Router();
var path = __dirname + '/views/';


router.use(function(req,res,next){
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.get("/cal",function(req,res){
var num1 = parseInt(req.query.num_one);
  var num2 = parseInt(req.query.num_two);
  var operator = req.query.submit;
  switch(operator) {
    case '-':
        result = num1 - num2
        break;
    case '+':
        result = num1 + num2
        break;
    case '*':
        result = num1 * num2
        break;
    default: 
        result = num1 / num2
        break;
}
  //res.redirect('/'+num1);
  console.log(result);
  res.end(result+"");
  //res.render(path+"contact", {output: "hello"});
})
app.use("/", router);


app.listen(3000), function(){
  console.log("Live at Port 3000");
}