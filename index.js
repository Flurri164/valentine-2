const btnYes = document.querySelector('.yes')
const btnNo = document.querySelector('.no')
btnYes.onclick = () => window.location = 'index_two.html'
function moveButton() {
    let x = Math.random() * (window.innerWidth - btnNo.offsetWidth) - 130;
    let y = Math.random() * (window.innerHeight - btnNo.offsetHeight) - 97;
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
}
btnNo.addEventListener('click', moveButton)