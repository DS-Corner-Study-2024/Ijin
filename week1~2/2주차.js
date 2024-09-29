// 호이스팅 / 스코프/ 인수/ 매개변수 / ()/[]/ 원시자료형/ 객체 자료형 / 0 / object.keys

function greet(name) {
    const nm = `안녕 내 닉네임은 ${name}이야`;
    console.log(nm); 
    return name;}
greet("이진");

let unit = [50000, 10000, 5000, 1000, 500, 100]; 
function changeCalculate (money) { 
    for(let i=0; i<unit.length; i++){ 
        let num = Math.floor(money/unit[i]);
                                            
        console.log(unit[i]+"X"+num);``
        money = money - (unit[i]*num); 
    }
}
changeCalculate(12300);