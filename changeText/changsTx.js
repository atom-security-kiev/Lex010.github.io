const mWork = document.getElementById('m_w')
const text04 = document.getElementById('text04')

mWork.addEventListener('click',
function() {
    text04.classList.add('anim002')
});

text04.addEventListener("animationend", animEnd, false);
function animEnd () {
 text04.classList.remove('anim002');   
}




/*mWork.onclick = function() {
    text04.style.animation = 'anim02 infinite 2s'

}*/


