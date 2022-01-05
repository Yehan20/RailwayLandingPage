//all varaibls
const navbar= document.querySelector('.nav');
const toggleBtn=document.querySelector('.toggle-bar');
const lines=document.querySelectorAll('.line');
const featurs=document.querySelectorAll('.function');
const cards= document.querySelectorAll('.card__content');
const gif=document.querySelector('.gif')
const input=document.querySelector('.news__input');
const loader=document.querySelector('.loader');
const links =document.querySelectorAll('.list__link');
const darkMode=document.querySelector('#mode');
const sections = document.querySelectorAll('section')
const arrowUp = document.querySelector('.arrow__up');


//dark mode//
darkMode.addEventListener('click',(e)=>{
   e.preventDefault();
   if(darkMode.classList.contains('dark')){
      
      darkMode.classList.remove('dark')
      sections.forEach(section=>{
         section.style.backgroundColor='#fff';
         section.style.color='#132968';
         document.body.style.background='#fff'
         // let temp=document.querySelectorAll('.function')
         // temp.forEach(tem=>{
         //    tem.style.color='';

         // })
      })
      sections[3].style.background='#f1f2f7';
      document.querySelector('.book__text').style.color="#fff"
      document.querySelector('.book__now').style.backgroundColor=`#222`;
      let temp=document.querySelectorAll('.function')
      temp.forEach(tem=>{
         tem.style.color='#132968';

      })
   }
   else{
      darkMode.classList.add('dark')
      sections.forEach(section=>{
         section.style.backgroundColor='#000';
         section.style.color='#fff';
         document.body.style.backgroundColor='#000'
         let temp=document.querySelectorAll('.function')
         temp.forEach(tem=>{
            tem.style.color='#000';

         })
      })
      document.querySelector('.section__body').style.outline=`2px solid white`;

   }
   
})

// links click will remove the nav drop down 
links.forEach(link=>{
   link.addEventListener('click',(e)=>{
      
      navbar.classList.toggle('push');
      toggleMenu.reverse();
   })
})


// gif timer 
setTimeout(()=>{
   loader.style.display='none';
},3000);


// scroll properties

if(window.scrollY>20){
    document.querySelector('.header').style.background="#132968";
   
 }
 if(window.scrollY<20){
  document.querySelector('.header').style.background="transparent";
 }
 if(window.scrollY<200){
   gif.style.transform='scale(0.1,0.1)';
}
 


 if(window.scrollY>918 ){
    featurs[0].style.transform='translateX(0)';
    featurs[2].style.transform='translateX(0)';
    arrowUp.style.display='grid';
 }
 if(window.scrollY<918){
   featurs[0].style.transform='translateX(-100%)';
   featurs[2].style.transform='translateX(100%)';
   arrowUp.style.display='none';
 }


 
 if(window.scrollY>1600){
       
   cards.forEach(card=>{
                
             card.classList.remove('animate')
             card.style.opacity='1';
             

     })
  }





// toggle bar event listenets
toggleBtn.addEventListener('click',()=>{
    
        if(navbar.classList.contains('push')){
           navbar.classList.remove('push');
        }
        else{
         navbar.classList.add('push');
        }
})

//scrolling event listeners
window.addEventListener("scroll",(e)=>{



   if(window.scrollY>20){
      document.querySelector('.header').style.background="#132968";
     
   }
   if(window.scrollY<20){
    document.querySelector('.header').style.background="transparent";
   }

   if(window.scrollY>1500){
      input.style.outline='2px solid black';
      console.log(input);
   }
   

   if(window.scrollY>1600){   
    cards.forEach(card=>{
                 
              card.classList.add('animate');
              card.style.opacity='1';
              
 
      })
   }

    
     
   
   if(window.scrollY>918){
      featurs[0].style.transform='translateX(0)';
      featurs[2].style.transform='translateX(0)';
      arrowUp.style.display='grid';
   }
   
   if(window.scrollY<918){
      arrowUp.style.display='none';
   }
   
   if(window.scrollY>200){
      gif.style.transform='scale(1,1)';
   }

   
    
})


//card fliiping efect

cards.forEach(card=>{
    card.addEventListener('click',()=>{
        
        card.classList.toggle('turn');
    })
})