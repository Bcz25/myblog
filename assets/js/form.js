const modeToggle = document.getElementsByClassName('toggle')[0];
const title = document.getElementsByClassName('title');
const card = document.getElementsByClassName('blog-card');
const submit = document.getElementsByClassName('submit')


modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    title.classList.toggle('dark-mode');
    card.classList.toggle('dark-mode');
});
