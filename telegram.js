const sometext = document.querySelector('.sometext')
const number = document.querySelector('.number')
const form = document.querySelector('form')


const globalModal = () => {
   const apply = document.querySelector('.apply')
   const modalBackrop = document.querySelector('.modalBackrop')
   const modal = document.querySelector('.modal')
   const message = document.querySelector('.message')
   const modalContent = document.querySelector('.modalContent')
   const close = document.querySelector('.close')
   

   let timeout
   let newshowMessage
   const spam  = () => setInterval(() => {
      modalBackrop.classList.add('modalBackropActive')
      modal.classList.add('modalActive')
   }, 20000);
   spam()
   apply.addEventListener('click', () => {
       modalBackrop.classList.add('modalBackropActive')
       modal.classList.add('modalActive')
   })

   const list = [
       {
           nodeItem: modalBackrop,
           class: 'modalBackropActive'
       },
       {
           nodeItem: modal,
           class: 'modalActive'
       },
       {
           nodeItem: modalContent,
           class: 'hideModalContent'
       }
   ]

   const listCycle = () => {
       clearTimeout(timeout)
       list.forEach(el => {
           el.nodeItem.classList.remove(el.class)
       })
       message.innerHTML = ''
   }

   const removeClasses = (item) => {
       item.addEventListener('click', () => {
           listCycle()
       })
   }

   const removeAllClasses = () => {
       removeClasses(modalBackrop)
       removeClasses(close)
   }
   removeAllClasses()



   modal.addEventListener('click', (e) => {
       console.dir(e)
       e.stopPropagation()
   })

    newshowMessage = ()=> {
    //   showMessage.addEventListener('click', () => {
         modalContent.classList.add('hideModalContent')
         message.innerHTML = `
         <h2>Thank You</h2>
          <p>FOR YOUR RESPONSE (@)</p>
          <p>OUR OPERATOR WILL ANSWER!</p>
     `
        //  timeout = setTimeout(listCycle, 4000)
    //  })
   }



   const Bot ={
    TOKEN : '6553280214:AAHoylTFb7uhfQAXOAEbFmYnFsLxNqzTDNE', 
    ChadID : '-4004467224',
    
 }
 
 form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!sometext.value && !number.value) return alert('One of input is empty')
    if (sometext.value && number.value) {
    const msg = `Message:  ${sometext.value}`
    const num = `number:  ${number.value}`
    fetch(`https://api.telegram.org/bot${Bot.TOKEN}/sendMessage?chat_id=${Bot.ChadID}&text=${msg} \n  ${num}`) 
          .then(res => res.json())
          .then(res => {
             if(res.ok){
                alert('Message success')
                newshowMessage()
             }  
             else {
                throw new Error(res.description)
            }
          })
          .catch(error => {
            alert(`Произошла ошибка при отправке сообщения: ${error}`)
          })
 }
 })
}
globalModal()

