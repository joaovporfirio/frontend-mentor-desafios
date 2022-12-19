let number = document.querySelector('.number-notifications')
let markRead = document.querySelector('.mark-read')
let notification = document.querySelectorAll('.notification')
let container = document.querySelectorAll('.container-notification')




markRead.addEventListener('click', (e) => {
    for (let i = 0; i < container.length; i++) {

        notification[i].classList.remove('unread')
        container[i].style.backgroundColor = '#fff';

    }
})



