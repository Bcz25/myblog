const modeToggle = document.getElementsByClassName('toggle')[0];
const landing = document.getElementsByClassName('landing') [0];
const card = document.getElementsByClassName('blog-card')[0];
const submit = document.getElementById('submit')

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
        submit.classList.toggle('dark-mode')
    }
});

submit.addEventListener('click', function() {
    let username = document.getElementById('usersame').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
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
    let post = JSON.parse(localStorage.getItem('post'));
    post.push(blogPost);
    localStorage.setItem('post', JSON.stringify(post));
}
