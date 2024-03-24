const toggle = document.getElementsByClassName('toggle');
const submit = document.getElementsByClassName('submit')


toggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode')
    
    const elementsToToggle = document.getElementsByClassName('dark-mode');
        for (let i = 0; i < elementsToToggle.length; i++) {
    elementsToToggle[i].classList.toggle('.dark-mode');
  }
});
