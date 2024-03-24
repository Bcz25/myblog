const modeToggle = document.getElementsByClassName('toggle')[0];
const blogHeader= document.getElementById('blog-header')

modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (blogHeader) {
        blogHeader.classList.toggle('dark-mode');
    }
});
