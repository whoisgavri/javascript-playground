window.onload = () => {
    console.log('This is your first program executing!');
}
const para = document.querySelector('div');
para.addEventListener('click', updateName);
function updateName() {
 let name = prompt('Enter a new name');
 para.textContent = 'Dancer 1: ' + name;
}