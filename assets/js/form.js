const modeToggle = document.getElementsByClassName('toggle')[0];
const landing = document.getElementsByClassName('landing') [0];
const card = document.getElementsByClassName('blog-card')[0];
const submit = document.getElementById('submit');
const darkModeEnabled = document.body.classList.contains('dark-mode');

modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (modeToggle) {
        modeToggle.classList.toggle('dark-mode');
    }
    if (landing) {
        landing.classList.toggle('dark-mode');
    }
    if (card) {
        card.classList.toggle('dark-mode');
    }
    if (submit) {
        submit.classList.toggle('dark-mode');
    }
});

localStorage.setItem('darkMode', darkModeEnabled);

document.addEventListener('DOMContentLoaded', function() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
    }
})

submit.addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    if (!username) {
        alert('Username cannot be blank')
        return;
    }
    if (!title) {
        alert('Title cannot be blank')
        return;
    }
    if (!content) {
        alert('Post cannot be blank')
        return;
    }

    const blogPost = {
        Username: username,
        Title: title,
        Post: content
    };

    savePostToLocalStorage(blogPost);
    window.location.href="https://bcz25.github.io/myblog/blog";
});

function savePostToLocalStorage(blogPost) {
    let post = JSON.parse(localStorage.getItem('post')) || [];
    post.push(blogPost);
    localStorage.setItem('post', JSON.stringify(post));
}
