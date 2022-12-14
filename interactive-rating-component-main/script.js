// Tenho que mostrar a selecao do numero na section 2 
//Tenho que mostrar a section 2 quando clicar em submit



 function selectRating() {
    let numberChecked = document.querySelector('input[name="rating"]:checked')
    document.querySelector('.review-rating-text').innerText = `You selected  ${numberChecked.value} out of 5`
    console.log(numberChecked.value)
   
   
    
}

function toggleSection() {
    let section1 = document.querySelector('.section1')
    let section2 = document.querySelector('.section2')
    section1.classList.toggle('hidden')
    section2.classList.toggle('hidden')


}