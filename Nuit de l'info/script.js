document.querySelector('#toggle').addEventListener('click', ()=>{
    document.getElementsByTagName('body')[0].classList.toggle('theme-light');
    document.querySelector('footer').classList.toggle('dark');
    let cards = document.querySelectorAll('.card');

    for (let i =0; i< cards.length; i++){
        cards[i].classList.toggle('card-light')
    }
})