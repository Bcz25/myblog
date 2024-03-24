const modeToggle = document.getElementsByClassName('toggle')[0];
const landing = document.getElementsByClassName('landing') [0];
const card = document.getElementsByClassName('blog-card')[0];
const submit = document.getElementById('submit')
const username = document.getElementById('usersame');
const title = document.getElementById('title');
const content = document.getElementById('content');

modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
   
    if (landing) {
        landing.classList.toggle('dark-mode');
    }
    if (card) {
        card.classList.toggle('dark-mode');
    }
});

submit.addEventListener('click', function() {
    window.location.href="./myblog/blog.html"
})

username.addEventListener('input', function (){
    localStorage.setItem('username', this.value);
})

title.addEventListener('input', function (){
    localStorage.setItem('title', this.value);
})

content.addEventListener('input', function (){
    localStorage.setItem('content', this.value);
})

submit.addEventListener('click', function (){
    localStorage.getItem('username')
    localStorage.getItem('title');
    localStorage.getItem('content');
})
