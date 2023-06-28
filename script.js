let screen = document.querySelector('.screen input');
screen.value = '0';
let buttons = document.querySelectorAll('.button');
let result;
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.dataset.value == 'AC'){
            screen.value = '0';
        }
        else if(e.target.dataset.value == 'X'){
            screen.value = screen.value.slice(0, -1);
        }
        else if(e.target.dataset.value == '%'){
            screen.value /= 100;
        }
        else if(e.target.dataset.value == '='){
            screen.value = eval(screen.value);
            result = screen.value;
        }
        else{
            if(result !== undefined){
                screen.value = '0';
                result = undefined;
            }
            if(screen.value === '0'){
                screen.value = e.target.dataset.value;
            }
            else{
                screen.value += e.target.dataset.value;
            }
        }
    })
})

