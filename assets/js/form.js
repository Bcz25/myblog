const modeToggle = document.getElementsByClassName('toggle')[0];
const landing = document.getElementsByClassName('landing');
const card = document.getElementsByClassName('blog-card');
const submit = document.getElementsByClassName('submit')


modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    landing.classList.modeToggle('dark-mode');
    card.classList.modeToggle('dark-mode');
});