/* myscript.js */

// 두수 사이의 합을 반환하시오.
function hap (a,b) {
    let tmp = 0;
    if (a>b){
        tmp = a;
        a = b;
        b = tmp;
    }
    let sum=0;
    for (let i = a; i<=b; i++){
        sum += i;
    }
    return sum;
}
      
    

// 두수 사이의 차이를 반환하시오.
function diff(a,b){
    return Math.abs(a-b);
}

// 윤년, 평년을 반환 하시오.
function leap(year) {
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ){
        return true;
    } else {
        return false;
    }
}