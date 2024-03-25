const modeToggle = document.getElementsByClassName('toggle')[0];
const blogHeader = document.getElementById('blog-header');
const back = document.getElementById('back');
const postList= document.getElementById('post-list');
const post = JSON.parse(localStorage.getItem('post')) || [];


post.forEach(function(blogPost) {
    const li = document.createElement('li');
    li.textContent = blogPost;
    postList.appendChild(li);
});


modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (blogHeader) {
        blogHeader.classList.toggle('dark-mode');
    }
    if (modeToggle) {
        modeToggle.classList.toggle('dark-mode');
    }
    if (back) {
        back.classList.toggle('dark-mode');
    }
});

back.addEventListener('click', function() {
    window.location.href="https://bcz25.github.io/myblog"
})

