const html = document.getElementById('html'),
    moodBtn = document.querySelector('.moodBtn')

moodBtn.addEventListener('click', () => {
    html.classList.toggle('active')
})