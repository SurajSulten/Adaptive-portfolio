var navList = document.querySelector(".nav_list");
var fas = document.querySelector('.fas');
var far = document.querySelector('.far');
fas.addEventListener('click', function(e) {
    navList.style.cssText=`
    display:block;
    transition-property: height;
    transition-duration: 2s;
    `;
    far.style.display='block';
    console.log(navList)
})
far.addEventListener("click",function(e){
    navList.style.display='none';
    far.style.display='none';
})
const portfolioBtn = document.querySelector('.portfolio_btn')
const portfolioImages = document.querySelectorAll('portfolio_img')
portfolioBtn.addEventListener('click', () => {
  portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`)
})
// const elements = document.querySelectorAll('.change-lang');

// const i18Obj = {
//     'en': {
//       'skill-text-1': 'High-quality photos in the studio and on the nature',
//       'winter': "winter"
//     },
//     'ru' : {
//       'skill-text-1': 'Высококачественные фото в студии и на природе',
//       "winter": "зима"
//     }
//   }

//   function changeLang (language){
//     elements.forEach((elem) => {
//         const elemId = elem.id;
//         elem.textContent = i18Obj[language][elemId];
//     })
//   }
// changeLang("ru")



// let a=null;
// console.log(a);
// let i = 0; let c = 0; 
// const str = 'Rolling Scopes School';
//  while (i < str.length) 
//  { if (str[i] === 'o') { c++; } i++; } 
//  console.log(c);
 
//  console.log(typeof(12),typeof(1/0),typeof(a),typeof(12342353246536576574668),typeof("alo"),typeof(NaN))
//  for (let i = 0; i <= 4; i++) {console.log(++i);}
// //  console.log('9' * '5')
//  const a = ''; const b = 9; const c = null;
//  let i = !!(!a || !b && !c);
//  console.log(i)
// let f = 0 || 1 && 2 || 3;
// console.log(typeof typeof (function(){})());
// function foo() {
//   return {bar: 1};
// }
// console.log(typeof foo().bar)
// console.log(message)
// var message = 'hello'

// "use strict"
// const details = {
//   message: "hello",
// }
// function getMessage() {
//   return this.message;
// }

// for(let i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i)
//   }, 1000)
// }
// function foo(a, b) {
//   return a * b;
// }
// const bar = foo.bind(null, 2); 
// console.log(bar(2));



// for(var i=0;i<10;i++){

// }
// console.log(i);



// function get(){
//   return this;
// }
// console.log(get());




//  var name='John';
// function pr(){
//   console.log(name);
// }
// setTimeout(()=>{
//   let name="peter";
//   pr();
// },1000)

// const foo=bar();
// const num=2;

// function bar(){return num;}
// foo()

function foo() {console.log(this);}
foo.call(null)