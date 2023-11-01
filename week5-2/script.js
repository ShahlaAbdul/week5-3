
// const obj={
//     name:"shahla",
//     age:19,
//     surname:"Abdullazade",
//     class:"azmf201",
//      callNameandCLass:()=>{console.log(this.name +"-"+ this.age)}   //arrow function
//     // callNameandCLass:function () {
//     //     console.log(this.name +"-"+ this.age);  //function
//     // }
// }
// obj.callNameandCLass()





// Object.keys(obj).forEach(x=>console.log(obj))
// console.log("--------------------------------------------------------------")
// Object.values(obj).forEach(x => console.log(obj));
// console.log("--------------------------------------------------------------")
// Object.entries(obj).forEach(x=>console.log(obj))

// --------------------------------------------------------------------------------------------
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// for (const x of Object.keys(obj) ) {
//     console.log(x);
    
// }







// const obj1={
//     name:"shehla",
//     surname :"abdullayeva",
//     age: 20,
//     class: "azmf201",
//     isMarried:"false",
//     callName(){
//         console.log(this.name+ " how are you " + this.age);


//     }

// }

// const obj2={
//     name:"shehla",
//     age: 20,
//     class: "azmf201",
//     isMarried:"false",
    
// }
// const obj3={
//     name:"mehemmed",
//     age: 20,
    
// }
// const obj4={
//     name:"zumrud",
//     age: 20,
    
// }

// obj1.callName.call(obj3)
// obj1.callName.apply(obj2,[1,2])


// const objnew= obj1.callName.bind(obj2)


// function Person(name,surname,age) {
//     this.name=name
//     this.surname=surname
//     this.age=age
//     this.getinfo=function(){
//         console.log(this.name+ "-");
//     }
    
// }
// function Animal(){
//     this.name=name
//     this.weight=weight
//     this.habitat=habitat
// }
//  const cat=new Animal("Tesla",2,"baku")
//  Array.prototype.myorEach=function(cb){
//     for (let i = 0; i < this.length; i++) {
//         cb(this[i])
//     }
//  }
// //  Array.prototype.myReverse=function(){
//     for (let i = 0; i < this.length/2; i++) {
//         const element = array[i];
        
//     }
//  }
// const array=[1,2,3,4,5,6,7,8]
// Array.prototype.shahla="salam"

// console.log(array.shahla);


// Array.prototype.myreverse= function(cb){
//     for (let i = 0; i < this.length; i++) {
//         cb(this[i])    
//     }
// }
// console.log(myreverse);

// function Car(name,year){
//     this.name=name
//     this.year=year
//     this.getInfo=function(){
//         console.log(this.name+ "-"+this.year);
//     }

// }
// const mustang=new Car("Mustang", 1998)

// class Car{
//     constructor(name,year){

//     this.name=name
//     this.year=year
//     this.getInfo=function(){
//         return this.name+ "-"+this.year
//     }
//     }
// }


// class Animal{
//     constructor(name,age,habitat){
//        this.name=name
//        this.age=age
//        this.habitat=habitat
       
//     }
//     getInfo(){
//         return this.name+ "-"+this.age+"-"+ this.habitat
//        }
// }

// const cat=new Animal("tesla", 3, "baku")
// console.log(cat.getInfo());


// ?-----------------mirasalmna----------------------

// class Animal{
//     constructor(name,age,habitat){
//        this.name=name
//        this.age=age
//        this.habitat=habitat
       
//     }
//     getInfo(){
//         return this.name+ "-"+this.age+"-"+ this.habitat
//        }
// }



// class Animal2 extends Animal{
//     constructor(name,age,habitat,something){
//         super(name,age,habitat)
//         this.something=something
//     }
//     getInfo(){
//         return this.name+ "-"+this.age+"-"+ this.habitat+this.something
//        }
    
// }
// const cat=new Animal("tesla", 3, "baku")
// console.log(cat.getInfo());


// class Hesablama{
//     constructor(eded1){
//         this.eded1=eded1  
//     }
//     plus(num){
//         this.eded1+=num
//         return this
//     }
//     minus(num){
//         this.eded1-=num
//         return this
//     }
//     multiply(num){
//         this.eded1*=num
//         return this
//     }
//     divide(num){
//         this.eded1=num
//         return this
//     }
   
// }
// const eded2=new Hesablama(50).plus(6).minus(30).multiply(3).divide(2)
// console.log(eded2);
// -------------------------------------------------------------------------------------------------

// class Book{
//     constructor(ad,yazar,year,price,endirimliQiymet){
//         this.ad=ad
//         this.yazar=yazar
//         this.year=year
//         this.price=price
//         this.endirimliQiymet=endirimliQiymet

//     }
//     qiymetiiste(endirimliQiymet){
//         this.endirimliQiymet=this.price-(this.price*endirimliQiymet)/100
//         return  this.price +"-hemiseki qiymet   "+ this.endirimliQiymet +"-endirimli qiymet"

//     }

// }
// const kitab=new Book("veronika olmeye qerar verir","Paulo Coelho", 1998,10)
// console.log(kitab);
// console.log(kitab.qiymetiiste(20));

// ---------------------------------------------------------------------------------------

// const arr=[1,2,3,4,5,6,7]
// let num=3
// const arr2=[]
// function myfunction(){
//     for (let i = 0; i < arr.length; i++) {
//         arr[i]=arr[i]*num
//         arr2.push(arr[i])
        
//     }
//     return arr2


// }
// console.log(myfunction())

const array=[1,2,3,4,5,6,7]

function myfunction(array,cb){
    const arr1=[]
     for (let i = 0; i < array.length; i++) { 
        arr1.push(cb(array[i]))
     }

     return arr1
  
}
const temp=myfunction(array,(x)=>x*2)
console.log(array)
console.log(temp);






