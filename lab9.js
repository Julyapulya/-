function clickMe(button) {
    if(button.innerHTML == 'Щелчок')
    button.innerHTML = 'Спасибо';
    else
    button.innerHTML = 'Щелчок';
}
function clickMe1(button) {
    if(button.innerHTML == 'Юлия')
    button.innerHTML = 'Алексеева';
    else
    button.innerHTML = 'Юлия';
}
function clickMe2(button) {
    if(button.innerHTML == 'Арюна')
    button.innerHTML = 'Шаглаева';
    else
    button.innerHTML = 'Арюна';
}
function clickMe3(button) {
    if(button.innerHTML == 'Нажми меня')
    button.innerHTML = 'Ещё раз нажми';
    else
    if(button.innerHTML == 'Ещё раз нажми')
    button.innerHTML = 'Ещё';
    else
    if(button.innerHTML == 'Ещё')
    button.innerHTML = 'Начать сначала';
    else
    if(button.innerHTML == 'Начать сначала')
    button.innerHTML = 'Нажми меня';
}
