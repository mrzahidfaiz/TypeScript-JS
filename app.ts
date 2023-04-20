
let input1 = document.getElementById('input1')! as HTMLElement;
let input2 =document.getElementById('input2')! as HTMLElement;
let button =document.getElementById('button')!;




function add(num1 : number, num2 : number){
    return num1 + num2;
}


function display(){
    let first = +input1.value;
    let secound = +input2.value;
    console.log(add(first, secound))
}

button.addEventListener('click', display ) 

// Result is Concat in 1  + 2 = 12