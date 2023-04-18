const mWork02 = document.getElementById('m_w02')
const text02 = document.getElementById('useful')

mWork02.addEventListener('click',
function() {
    text02.classList.add('anim002')
});

text02.addEventListener('animationend', animEnd, false);
function animEnd() {
    text02.classList.remove('anim002');
}






