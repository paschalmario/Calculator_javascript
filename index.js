let number_btn = document.querySelectorAll(".num");
let screen = document.getElementById('input');
const del_btn = document.getElementById('del_button');
const clear_btn = document.getElementById('clear');
let operators = document.querySelectorAll(".operator");
let result = document.getElementById('result');

let screen_num = '';
let operator_num = '';

result.addEventListener("click", function(){
    let rel = eval(screen_num);
    screen_num = rel;
    document.getElementById("input").innerHTML = rel;
});

del_btn.addEventListener("click", function() {
    screen_num = screen_num.slice(0, screen_num.length - 1);
    console.log(screen_num);
    document.getElementById("input").innerHTML = screen_num;
})

clear_btn.addEventListener("click", function(){
    screen_num = "";
    document.getElementById("input").innerHTML = screen_num;
})

for (let i = 0; i < number_btn.length; i++){
    number_btn[i].addEventListener("click", function(){
        screen_num += number_btn[i].innerHTML;
        console.log(screen_num);
        document.getElementById("input").innerHTML = screen_num;
    });
}
for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", function(){
        screen_num = screen_num.trim();
        screen_num += operators[i].innerHTML;
        console.log(operator_num);
        document.getElementById("input").innerHTML = screen_num;
    });
}