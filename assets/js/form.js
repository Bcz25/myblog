const modeToggle = document.getElementsByClassName('toggle')[0];
const landing = document.getElementsByClassName('landing') [0];
const card = document.getElementsByClassName('blog-card')[0];
const submit = document.getElementById('submit')


modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
   
    if (landing) {
        landing.classList.toggle('dark-mode');
    }
    if (card) {
        card.classList.toggle('dark-mode');
    }
});

