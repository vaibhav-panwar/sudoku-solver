

let ipArr = document.querySelectorAll("input");

for(let i=0;i<ipArr.length;i++){
    ipArr[i].addEventListener('keydown',(e)=>{
        const key = e.key;
        const n = Number(e.key);
        if( n>=0 && n<=9 && i<ipArr.length){
            e.preventDefault();
            ipArr[i].value = n;
            ipArr[i+1].focus()
        }
        else if (key === "ArrowRight"   && i<ipArr.length-1){
            e.preventDefault();
            ipArr[i + 1].focus()
        }
        else if (key === "ArrowDown" && i < ipArr.length - 9) {
            e.preventDefault();
            ipArr[i + 9].focus()
        }
        else if (key === "ArrowLeft" && i>0) {
            e.preventDefault();
            ipArr[i - 1].focus()
        }
        else if (key === "ArrowUp" && i>8) {
            e.preventDefault();
            ipArr[i - 9].focus()
        }
        else if (key === "Backspace" && ipArr[i].value === "" && i > 0) {
            e.preventDefault();
            ipArr[i - 1].focus()
        }
        else{
            e.preventDefault();
            ipArr[i].value = "";
        }
    });
}

document.getElementById("solve").addEventListener('click',sol);
document.getElementById("reset").addEventListener("click",reset);

function sol(){
let sudoku = [];
let a = 0;
let k = 9;
while(a<ipArr.length){
    let arr = [];
    while(a<k){
        arr.push(ipArr[a].value);
        a++;
    }
    sudoku.push(arr);
    k = k+9;
}

let res  = [];
fun(sudoku,0,0);
if(res.length ===0){
    alert("this problem can't be solved")
}

//fun function
    function fun(input, i, j) {

        if (i == input.length) {
            res.push(input)
            let k = 0;
            for (let a = 0; a < input.length; a++) {
                for (let b = 0; b < input.length; b++) {
                    ipArr[k].value = input[a][b];
            
                    k++;
                }
            }
            return
        }
        let ni = 0; let nj = 0;
        if (j == input.length - 1) {
            ni = i + 1;
            nj = 0;
        }
        else {
            ni = i;
            nj = j + 1;
        }

        if (input[i][j] != 0 && input[i][j] != "" ) {
            fun(input, ni, nj);
        }
        else {
            for (let k = 1; k <= 9; k++) {
                if (isitRight(input, i, j, k)) {
                    input[i][j] = k;
                    fun(input, ni, nj);
                    input[i][j] = 0;
                }
            }
        }
    }
} 

function isitRight(arr, i, j, k) {
    for (let g = 0; g < arr.length; g++) {
        if (arr[i][g] == k) {
            return false;
        }
        if (arr[g][j] == k) {
            return false;
        }
    }
    if (i < 3 && j < 3) {
        for (let a = 0; a < 3; a++) {
            for (let b = 0; b < 3; b++) {
                if (arr[a][b] == k) {
                    return false
                }
            }
        }
    }
    else if (i < 3 && j > 2 && j < 6) {
        for (let a = 0; a < 3; a++) {
            for (let b = 3; b < 6; b++) {
                if (arr[a][b] == k) {
                    return false
                }
            }
        }
    }
    else if (i < 3 && j > 5 && j < 9) {
        for (let a = 0; a < 3; a++) {
            for (let b = 6; b < 9; b++) {
                if (arr[a][b] == k) {
                    return false
                }
            }
        }
    }
    else if (i > 2 && i < 6 && j < 3) {
        for (let a = 3; a < 6; a++) {
            for (let b = 0; b < 3; b++) {
                if (arr[a][b] == k) {
                    return false
                }
            }
        }
    }
    else if (i > 2 && i < 6 && j > 2 && j < 6) {
        for (let a = 3; a < 6; a++) {
            for (let b = 3; b < 6; b++) {
                if (arr[a][b] == k) {
                    return false
                }
            }
        }
    }
    else if (i > 2 && i < 6 && j > 5 && j < 9) {
        for (let a = 3; a < 6; a++) {
            for (let b = 6; b < 9; b++) {
                if (arr[a][b] == k) {
                    return false
                }
            }
        }
    }
    else if (i > 5 && i < 9 && j < 3) {
        for (let a = 6; a < 9; a++) {
            for (let b = 0; b < 3; b++) {
                if (arr[a][b] == k) {
                    return false
                }
            }
        }
    }
    else if (i > 5 && i < 9 && j > 2 && j < 6) {
        for (let a = 6; a < 9; a++) {
            for (let b = 3; b < 6; b++) {
                if (arr[a][b] == k) {
                    return false
                }
            }
        }
    }
    else if (i > 5 && i < 9 && j > 5 && j < 9) {
        for (let a = 6; a < 9; a++) {
            for (let b = 6; b < 9; b++) {
                if (arr[a][b] == k) {
                    return false
                }
            }
        }
    }
    return true
}
function reset() {
    let inpArr = document.getElementsByClassName('num');
    console.log(inpArr);
    for (let i = 0; i < inpArr.length; i++) {
        inpArr[i].value = "";
    }
}