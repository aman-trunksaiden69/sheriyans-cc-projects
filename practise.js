//master the basics:-

const { Session } = require("inspector");

//const { promises } = require("dns");

//hoisting - variable and func are hoisted which means there declration is moved on the top of code

//var a - undefined
//console.log(b) - b is not define

//console.log(a);
//var a = 12;
//arguments - real value jo hum dete hai func chalate time
//parameters - vo arguments ki value ko store kerta hai 

/*function abcd(a, b, c){
    console.log(a, b, c);
}

abcd(12, 2, 3)*/

//array - array ko hum index se count kerte hai like [0:1, 1:2, 2:3, 3:4] this is index counting
//arry ka use hum ek se zyada value store kerne ke liye kerte hai 
// pop- for delete value in arr
// push - for add value in arr
// unshift - for add the value in the starting in arr
// shift- for delete the value in the starting in arr
//splice - is use for to delete the value in between from arr eg- [2,1] index
//objects - ek individual ki details ko store kerna

//master the arts:-

//var is the part of ejs5 where let and const is the part of ejs6 we used both part in js 
// var func scoped hota hai means ki aap function ke under kahi per bhi var ko use kersakte ho or
// vo parents ke bhar bhi use ho sakta hai
/*function abcd(){
    for(var a =0; i<12; i++){
        console.log(a)
    }
    console.log(a);
}
abcd()*/
// let braces scoped hota hai vo sirf func ke loops ke braces ke underr hi use hota hai bhar nhi
/*function abcd(){
    for(let a =0; i<12; i++){
        console.log(a);
    }
}
abcd()*/
//windows object - vo hai jo browsers se related feature dale hue hai jo hum js mai use ker sakte hai
//vo features jo js ke pass nhi hai vo jake borwser se maangleta hai jaha pe borwser ke under 
// vo features window object mai hai jisko hum access kersakte hai
//var add window objects itself wheather let or const doesnt add window objects 
//open the console ctrl+shift+j
/*var a = 122;
let b = 12;
const c = 33;*/
//execution context- vo func hai jo apna khud ka ek imgaginery ek box enviroment banaleta hai jiske 
//under var or function ka parent func hota hai or uska lexical enviroment 
/*function abcd(){
    var a = 12;
    function def(){
        var b = 13;
    }
}
abcd()*/
//lexical enviroment- vo hota hai jo decide kerta hai kon execution context ke under rahega or kon nhi rahega
//how to copy refrence value - we use spread opertaor to copy reference value
/*var a = [1, 2, 3,]
var b = [...a]

b.pop();*/
/*var obj = {name:"aman"}
var b = {...obj}*/
//falsy values - NAN 0 false undefined document.all null

//foreach - foreach sirf arr per chalte hai jab bhi array hoto use mai foreach ata hai
/*var a =[1, 2, 3, 4]

a.forEach(function(val){
    console.log(val+2)
})*/

//forin - object pe loop karne ke liye hota hai
/*var obj = {
    name: "aamna",
    age: 12,
    location: "bhopal"
}

for(var key in obj){
    console.log(key, obj[key])
}*/

//call back func - aisa code jo baad mai chalta hai use hum ek func dedete hai ki bhai agar tum complete
//ho jao to ye function chala dena or jo hum func dete hai vo ek nrml func hota hai vo call back func hai
//first class func - hum func ka use kersakte hai as a value jisko hum 1 class func bolte hai ye sirf js mai hota hai
/*function abd(a){
 a();
} 

abd(function(){console.Log("hello")})*/


//the endgame :-

//higher order func- vo func jo parameter mai func ko accept ker raha hai or ya fir vo return kerde
// ek or func and foreach is also a higher order func
/*function linda(val){

}
linda(function(){})*/

/*function abcd(){
    return function(){}
}
abcd()*/

//constructor func - aap ko same properties vaale bhot saare func banane hai uskeliye constructor
//func use hota hai
/*function moledbuscuit(){
    this.height = 100
    this.width = 50
    this.color = "orange"
    this.taste = "sugaryy"
}

var buscuit1 = new moledbuscuit()
var buscuit2 = new moledbuscuit()
var buscuit3 = new moledbuscuit()*/

/*function container(color){
    this.height = 100
    this.width = 100
    this.color = color
}

var box1 = new container("red")
var box2 = new container("blue")
var box3 = new container("white")*/
//new keywords - is always craete a blank obj for constructor func which is getting called just after
//new keywords
/*function abdc(){
    this.age = 12;
}
new abdc(){
    age: 12;
}*/

//iife - immediatley invoked func expression yani code ko turant chalane ki technique jisse hum private
// var banapaye jisko hum access nhi karsakte iife apke code ko safe or priavte banata hai agar ham nhi chate
// ki hamara code koi or access kare to hum uske liye iife ka use kerte hai
/*(function(){
   var a = 12;
})()*/

//to access private value from iife use getter and setter
//setter is for to set the value in return obj
//getter is for get the value in return obj
/*var  ans = (function(){
    var a = 12;

    return {
        getter: function(){
            console.log(a)
        },
        setter: function(val){
            a = val;
        }
    }
})()*/
//prototype - prototype ke under bhot saari js ka helper func or helper methods diye hue hai
//vo sab prototype ka part hai or ye kab ata hai jab hum ek obj banate hai or apko automatically sare func
// or methods apko miljata hai prototype mai  

//prototype inheritance - yani parents ki property ko inherit kerna parents or childern connection
/*var human ={
   cansex: true,
   canfly: false,
   cantalk: true,
   candance: true,
}

var animal = {
    canstrong: true,
    candrive: false,
    havehair: true
}

animal.__prtot__ = human;*/

//globalscoped - this kya global scoped hai window mai show hota hai
/*console.log(this);*/
// jo bhi chij brackets ke under nhi hoti hai use hum global scoped khete hai
//ek func jo obj ke under hai use hum func nhi method bolte hai
//this ki value- func mai window, global mai window, method mai obj

/*var obj ={
    name: "aman",
    cool: function(){
        console.log(this)
    }
}

obj.cool()*/
//call apply bind - agar tumhare pass koi func hai or koi obj hai and tumhe func chalana hai our by defualt 
//this ki value window hai but tumhe window na rehk ke use point kervana hai obj ki taraf 

/*function abcd(val1, val2, val3){
    console.log(this, val1, val2, val3)
}

var obj = {
    age: 12
}
abcd.apply(obj, [1, 2, 3])*/

/*function abcd(val1, val2, val3){
    console.log(this, val1, val2, val3)
}

var obj = {
    age: 12
}
var bindfunc = abcd.bind(obj)
bindfunc()*/


//MASTER ASYNC JS:-

//what is synchronous- ek kaam janbtak complete nhi hota tab tak dusra kaam start nhi hoga phele ek 
//complete hoga uske baad dusra start hoga.

//what is asynchronous- saare kaam ek saath start honge unmai se jo bhi phele complete ho jaye use ka respnose
//dedena yani start sab kardo jiska phele hua uska response dedo
//discription- aysnc code motive hai ki un cases mai hame ye pata nhi ki code ka answer kab aaega
//to answer jab bhi aaye uske respet mai koi particular code chala dena.
//ex- [settimeout, setinterval, xmlhttprequest,promises, fetch, axious]async code

/*console.log("hiiii")
setTimeout(function(){
    console.log("hello",23)
},3000)*/

//callback func- hamehsa aync code main answer per chalta hai

//main stack vs side stack- sync code move forward in the main stack for execution and async code move forward
//into side stack for processing. main stack execute all sync code one by one after main stack is empty
//we chcek side stack for async code, if aysnc code is done processing then move it into main stack for execution
//interview que- the communication between main stack and side stack is done through event loop.
//js is not a synchronous.

//promises-
/*var flag =0
var ans = new Promise((res, rej) => {
    if(flag === 0){
        return res();
    } else{
        return rej();
    }
})

ans.then(function(){
    console.log("helllooo")
})
.catch(function(){
    console.log("meowwwww")
})*/

/*var ans = new Promise((resolve, reject) => {
    var n = Math.Floor(Math.Random()*10)
     
    if(n<5){
        return resolve()
    } else{
        return reject()
    }
})

ans.then(function(){
    console.log("above")
})
.catch(function(){
    console.log("below")
})*/

//gf banao,gf ko ghumao, gf ko enjoy kervao, gf ko manipulate kero, gf ke saath sex kero

/*var a = new Promise((resolve, reject) => {
    return resolve("gf banao")
})

var b = a.then(function(data){
   console.log(data)
   return new Promise((resolve, reject) => {
    return resolve("gf ko ghumao")
   })
})

var c = b.then(function(data){
    console.log(data)
    return new Promise((resolve, reject) => {
        return resolve("gf ko enjoy kervao")
    })
})

var d = c.then(function(data){
    console.log(data)
    return new Promise((resolve, reject) => {
        return resolve("gf ko manipulate kero")
    })
})

var e = d.then(function(data){
    console.log(data)
    return new Promise((resolve, reject) => {
        return resolve("gf ke saath sex kero")
    })
})

e.then(function(data){
    console.log(data)
})*/
//koi bhi async code hai to aaap promises ka use karenge aur uska answer check kerne ke liye then use 
//karenge, us then ko nhi lagana pade uske liye hum async await func ka use kerenege

/*function abcd(){
    fetch(`https://randomuser.me/api/`)
    .then(function(raw){
        //readable format
        return raw.json()
    })
    .then(function(data){
        console.log(data)
    })
}
abcd()*/

/*async function abcd(){
    let  raw = await fetch(`https://randomuser.me/api/`)
    let ans = await raw.json();
    console.log(ans)
}
abcd()*/


//backend learn what matter(node js):-

//npx nodemon- nodemon is a refresh technique to refresh the index page of server we use this because we have
//to make continuously changes in our server so we use nodemon for refershing the pages.

//node vs express :- we use node package to make server called HTTP but is complicated to make server from HTTP 
//thats why we use express package of npm because express make things easier to make a server in convinient way.

//routing:- the process of making routes is called routing.

//npm i express - for the local
//npm i express -g - for globally

//when we install node then althought we get npm with node

/*const express = require('express')
const app = express()

//middelware-
app.use(function(req, res, next){
console.log("middelware is working")
    next();

});

//get homme pages- 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/profle/', function (req, res) {
    res.send('Hello zoya love you')
})

//dynamic route-
app.get('/profile/:username', function (req, res) {
    res.send(`Hello i love you ❤ ${req.params.username}`)
});

  
app.listen(2000)*/

//middleware- ek aisa func hota hai jo saare routes ke chalne se phele chalta hai koi route chale
//ya na chale phele middelware func chalega

/*app.use(function(req, res, next){

});*/ 
//app.use(); hamesha ek func maagnta hai

//routes parameters- to make any route dynamic you can use :colon at the palce where you want to make it
//dynamic, and to acces the value use req.params 

//e.g- 
//facebook.com/profile/:username

//templates engines- ejs is the html with advantages of calculation
//ejs setup-


//1.ejs install-
// npm i ejs
//2.configure ejs-
//app.set("views engines", "ejs");
//3.ek views folder banaye
//4.views folder ke under ejs file banaye
//5.send ki jega render kero
//render karte time make sure ki aap views folder ke under vaali ejs file naam lihkein,aur func mai
//.ejs ya /mention na kero only file ka naam lihke like index.ejs ("index") 

/*const express = require('express')
const app = express()

app.set("views engines", "ejs");

app.get('/', function (req, res) {
  res.render("index")
});

app.listen(2000)*/


//BACKEND THE ENDGAME(NODE.JS):-

//step to use express-generator-
  //onetime install express globally- npm i express-generator -g
  //to create new app anywhere:
    //open cmd type cd dekstop
    //create new app- express aapname --views=ejs
    //use to cmmd cd aapname
    //npm i
    //open it in vs code- code .

//mongodb-
  //code side
    //dbsetup
    //model
    //schema
 //mongodb side
    //db formation
    //collection
    //documentation
 
//step to install mongodb-
 //i mongodb
 //i mongoosejs- npm i mongoose
 //require and setup connection
 //make schema
   /*const  mongoose = require("mongoose")

   mongoose.connect("mongodb://127.0.0.1:27017/practisekero")

   const userschema = mongoose.schema({
     username: string,
     email: string,
     age: number,
     passworrd: string
   })

   module.exports = mongoose.model("users", userschema)*/
 //create model and export    

//session--
//npm i express-session
/*app.use(Session({
    resave: false,
    saveuninitialized: false,
    secret:"monooonn"
}));*/

/*var express = require("express")
var router = express.router();

router.get("/",function(req, res){
    req.Session.banned = true;
    res.render('index')
});

router.get("/",function(req, res){
   console.log(req.Session)
   res.send("ceheck kiya hai console dheko")
});

router.get("/chekban",function(req, res){
   if(req.Session.banned === true){
    res.send("you are banned")
   }else{
    res.send("not banned")
   }
    
 });
 
Router.get("/removeban", function(req, res){
 res.Session.destroy(function(err){
    console.log(err)
    res.send("ban removed")
 })
}) 

module.exports = router;*/

//create
 //req.session.koibhinaam = koibhivalue

//read
 //req.session.koibhinaam
 
//delete
 //req.session.destroy
 

//cookies parser-

/*var express = require("express")
var router = express.router();

router.get("/",function(req, res){
    res.cookie("age", 25)
    res.render('index')
});

router.get("/read",function(req, res){
   console.log(req.cookies.age)
    res.send('read')
});

router.get("/delete",function(req, res){
    res.clearcookies("age")
    res.send('clear hogyi')
});

module.exports = router;*/

//create
 //req.cookie("name", value)

//read
 //req.cookie.name
 
//delete
 //req.clearcookie("name")


//Backend node.js endgame-2:-

//flash message step i package:-
//imp of flash why we need:-flash message apko allow karta hai ki aap is route mai bane data ko 
//dusre route mai use kersako

//*you cannont use connect flash message without expression setup
//install connect flash package
//make sure you setup express-session
//make sure that you put connect flash in app.use func
//kisi bhi route mai apko flash create kerna hai
//kisi bhi dusre route per usse chalane ka try kijiye

/*const expressSession = require("express-session");
const flash = require("connect-flash");

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "jo bhi lihklo"
  }));
  
  app.use(flash());*/
  

/*router.get('/failed', function(req, res) {
  req.flash("age", 22)
  req.flash("name", "aman")
  res.send("bangaya!")
});

router.get('/check', function(req, res) {
  console.log(req.flash("age"), req.flash("name"));
  res.send("check kero be ke terminal per")
});*/


//intermediate mongo db-
//mongoose ko setup kero

//how can i perform a case-insensetive search in mongoose?
/*router.get('/find', async function(req, res){
  var regex = new RegExp("^Zoya$", "i");
  let user = await usermodel.find({username: regex});
  res.send(user);*/

//how do i find document where an array field contain all of a set of values?

/*  router.get('/tenet', async function(req, res){
  let same = await usermodel.find({categories: {$all: ["fitness"]}});
  res.send(same);
});*/

//how can i search for documents with a specific date range in mongoose?

/*router.get('/datedata', async function(req, res){
    var date1 = new Date('2023-11-13');
    var date2 =  new Date('2023-11-14');
    let print = await usermodel.find({datecreated: {$gte: date1, $lte: date2}});
    res.send(print);
  });*/
  
//how can  i filter documents based on the existence of field in mongoose?

/*router.get('/alll', async function(req, res){
    let moro = await usermodel.find({categories: {$exists: true}});
    res.send(moro);
  });*/
  
//how can i filter documents based on a specific filed's length in mongoose?

/*router.get('/specific', async function(req, res){
    let goku = await usermodel.find({
  
      $expr:{
        $and:[
          {$gte: [{$strLenCP: "$nickname"}, 0]},
          {$lte: [{$strLenCP: "$nickname"}, 12]}
        ]
      }
    });
    res.send(goku);
  });*/
  
//authentication and authorization-
//i these packages-
  //npm i passport passport-local passport-local-mongoose mongoose express-session
  
  //write app.js code firt in app.js file and write it after viwe eng and before logger
  
  //setup user.js then properly

  //in index.js try register first and then other code as well 