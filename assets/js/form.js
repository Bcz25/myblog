const modeToggle = document.getElementsByClassName('toggle')[0];
const landing = document.getElementsByClassName('landing');
const card = document.getElementsByClassName('blog-card');
const submit = document.getElementsByClassName('submit')


modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
   
    if (landing) {
        landing.classList.toggle('dark-mode');
    }
    if (card) {
    card.classList.toggle('dark-mode');
    }
});