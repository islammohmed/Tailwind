let mobileMenu = document.getElementById('mobile-menu')
let mobileButton = document.getElementById('mobileButton')

mobileButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})