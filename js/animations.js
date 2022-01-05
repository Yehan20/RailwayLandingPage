const hamburger=document.querySelector('.toggle-bar');
const lineOne=hamburger.querySelector('.one');
const lineTwo=hamburger.querySelector('.two');
const lineThree=hamburger.querySelector('.three');

const toggleMenu = new TimelineMax({paused:true,reversed:true});

toggleMenu.to(lineTwo,0.1,{scaleX:0},0)
.to(lineOne,0.1,{transformOrigin:"48% 48%",y:8,ease:Power2.easeInOut},"slide") // line one needs to move to the bottom so we move it 8px
.to(lineThree,0.1,{transformOrigin:"48% 48%",y:-8,ease:Power2.easeInOut},"slide") // line three need to move to the top so we move is -8px
.to(hamburger,0.1,{rotation:360,ease:Power4.easeInOut})
.to(lineOne,0.1,{rotation:45,ease:Power2.easeInOut},"cross")
.to(lineThree,0.1,{rotation:-45,ease:Power2.easeInOut},"cross")


hamburger.addEventListener('click', ()=>{
    // this operator checks when we click that menu if it is  revserd we play it forwards or if its not reverse we do the foll
    //changes that are indicated in our Toggle menu
    hamburger.classList.toggle('js-x');
    toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
})
