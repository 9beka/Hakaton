var swiper = new Swiper(".mySwiper", {
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });
 const accordion__wrap = document.querySelectorAll('.accordion__wrap')
const accordion__content = document.querySelectorAll('.accordion__content')

const showAccardion = () =>{
   accordion__wrap.forEach((el,index) =>{
      el.addEventListener('click', () => {
         accordion__wrap.forEach((_, innerINdex) =>{
            if(index===innerINdex) {
               accordion__wrap[index].classList.toggle('accordion__active')
            } else {
               accordion__wrap[innerINdex].classList.remove('accordion__active')
            }
         })
      })
   })
}
showAccardion()

const notClose = () =>{
   accordion__content.forEach(item => {
      item.addEventListener('click' , (e)=>{
         e.stopPropagation()
         console.log(item)
         
      })
   })
}
notClose()

