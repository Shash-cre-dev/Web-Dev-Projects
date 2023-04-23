
    const form = document.querySelector('#message-form')

    form.addEventListener('submit', function(e){
        e.preventDefault()

        const mssg = document.querySelector('#message')
        const feedback = document.querySelector('.feedback')
        const mssgContent = document.querySelector('.message-content')

        if(MessageChannel.value === ''){
            //classList is used to remove or add classes
            feedback.classList.add('.show')
            setTimeout(function(){
                feedback.classList.remove('show')
            }, 4000)
        }else{
            mssgContent.textContent = message.value
            mssg.value = ''
        }
    })