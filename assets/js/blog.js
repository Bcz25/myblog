const modeToggle = document.getElementsByClassName('toggle')[0];
const blogHeader = document.getElementById('blog-header');
const back = document.getElementById('back');
const postContainer= document.getElementById('post-container');
const post = JSON.parse(localStorage.getItem('post')) || [];
const portfolio = document.getElementById('portfolio');
const darkModeEnabled = document.body.classList.contains('dark-mode');


function createPostCard(post) {

    const card = document.createElement('section');
    card.classList.add('post-card');
    const cardHeader = document.createElement('h2');
    cardHeader.textContent = post.Title;
    const cardContent = document.createElement('p');
    cardContent.textContent = post.Post;
    const cardFooter = document.createElement('footer');
    cardFooter.textContent = 'Posted by: ' + post.Username;

    card.appendChild(cardHeader);
    card.appendChild(cardContent);
    card.appendChild(cardFooter);

    return card;
} 

function displayPosts() {
    post.forEach(function(post) {
        const postCard = createPostCard(post);
        postContainer.appendChild(postCard);
    })
}

displayPosts();

localStorage.setItem('darkMode', darkModeEnabled);

document.addEventListener('DOMContentLoaded', function() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled === true) {
        document.body.classList.add('dark-mode');
    }
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
    if (portfolio) {
        portfolio.classList.toggle('dark-mode')
    }
});

back.addEventListener('click', function() {
    window.location.href="https://bcz25.github.io/myblog"
});

portfolio.addEventListener('click', function () {
    window.location.href="https://bcz25.github.io/Portfolio/"
});
