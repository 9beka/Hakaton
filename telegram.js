
const form = document.querySelector('form')

const globalModal = () => {
   const message = document.querySelector('.message')
   const modalBackrop = document.querySelector('.modalBackrop')
   const modal = document.querySelector('.modal')
   const Msg = document.querySelector('.Msg')
   const modalContent = document.querySelector('.modalContent')
   const close = document.querySelector('.close')
   

   let timeout
   // let newshowMessage
   message.addEventListener('click', () => {
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
       Msg.innerHTML = ''
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
         Msg.innerHTML = `
         <h2>Thank You</h2>
          <p>FOR YOUR RESPONSE (@)</p>
          <p>OUR OPERATOR WILL ANSWER IMMIDI(@)</p>
     `
        //  timeout = setTimeout(listCycle, 4000)
    //  })
   }

   const Bot ={
      TOKEN : '6674413337:AAFbgiDF8VYMDWgtqlTpEJj7vHPVV3ufGO0', 
      ChadID : '-4034578978',
      
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