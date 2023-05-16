const labelEl = document.querySelector('.label');
const inputEl = document.querySelector('.input');
const circleEl = document.querySelector('.circle');
const bodyEl = document.querySelector('body');




//Для проверки
inputEl.checked = JSON.parse((localStorage.getItem('mode')));

//Это функция для смены фона 
function updateBody() {
    if(inputEl.checked) {
        bodyEl.style.backgroundColor = 'black'
    } else {
        bodyEl.style.backgroundColor = 'white';
    }
}

//Событие для смены фона
inputEl.addEventListener('click', (event) => {
    updateBody();
    updateLocalStorage();
});

//Для хранения чего то там в локальном хранилище 
function updateLocalStorage() {
    localStorage.setItem('mode',
    JSON.stringify(inputEl.checked)
    )
};

