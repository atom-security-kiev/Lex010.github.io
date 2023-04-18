const mWork01 = document.getElementById('m_w01')
const text01 = document.getElementById('start')

mWork01.addEventListener('click',
function() {
    text01.classList.add('anim002')
});

text01.addEventListener('animationend', animEnd, false);
function animEnd() {
    text01.classList.remove('anim002');
}






