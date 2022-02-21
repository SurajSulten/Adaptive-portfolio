var navList=document.querySelector(".nav_list");
var fas=document.querySelector('.fas');
var far=document.querySelector('.far');
fas.addEventListener('click',function(e){
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

const elements = document.querySelectorAll('.change-lang');

const i18Obj = {
    'en': {
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'winter': "winter"
    },
    'ru' : {
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      "winter": "зима"
    }
  }

  function changeLang (language){
    elements.forEach((elem) => {
        const elemId = elem.id;
        elem.textContent = i18Obj[language][elemId];
    })
  }
changeLang("ru")
