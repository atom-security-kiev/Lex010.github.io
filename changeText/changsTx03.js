const mWork03 = document.getElementById('m_w03')
const text03 = document.getElementById('video')

mWork03.addEventListener('click',
function() {
    text03.classList.add('anim002')
});

text03.addEventListener('animationend', animEnd, false);
function animEnd() {
    text03.classList.remove('anim002');
}






