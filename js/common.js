const calc = () => {
    const screen = document.querySelector('.screen');
    const buttons= document.querySelectorAll('.btn');
    const clear = document.querySelector('.btn_clear');
    const equal = document.querySelector('.btn_equal');
    let total = 0; 

    buttons.forEach((item,idx) => {
        item.addEventListener('click', (e) => {
            let value = e.target.dataset.num;
            screen.value += value; 
        })
    })

    equal.addEventListener('click',(e) => {
        if( screen.value !== '') {
            screen.value = new Function(`return ${screen.value}`)();
        } else {
            screen.value= 'Please Enter'
        }
      
    })

    clear.addEventListener('click' , (e) => {
        screen.value = "0";
    })
}


calc();


