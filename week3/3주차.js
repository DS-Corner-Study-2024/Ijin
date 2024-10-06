// 퀴즈 1, 2
/*

문제 1. 
Date 객체를 활용하여 "2024. 9. 30. 오후 3 : 42 : 00" 을 출력하시오.

정답: */
const today = new Date(2024, 8, 30, 15, 42, 0);
console.log(today.toLocaleString());


/*문제 2.
const products = [
    { name: "연습장", price: 1000 },
    { name: "껌", price: 500 },
    { name: "샤프", price: 1500 },
    { name: "사탕", price: 800 },
    { name: "주사위", price: 1200 }
];
다음과 같이 상품의 이름과 가격이 주어졌다. 가격을 기준으로 오름차순으로 정렬하고, 정렬된 상품 이름과 가격을 출력하시오. 

ex) 
껌: 500
사탕: 800
연습장: 1000
주사위: 1200
샤프: 1500

정답: */
const products = [
    { name: "연습장", price: 1000 },
    { name: "껌", price: 500 },
    { name: "샤프", price: 1500 },
    { name: "사탕", price: 800 },
    { name: "주사위", price: 1200 }
];

products.sort((a, b) => a.price - b.price); 
products.forEach((product) => {
    console.log(`${product.name}: ${product.price}`);
});

/* 빈칸 문제

1. 객체는 구조 분해 할당할 때 데이터 저장 순이 아니라 (   ) 순으로 저장된다.
2. 스프레드(spread) 연산자와 rest 매개변수 모두 (   ) 기호로 표기된다.
3. (   ) 는 배열 맨 앞 요소를 제거하고, 제거한 요소를 반환하는 메서드이다.
4. (   ) 는 배열의 모든 요소에 순서대로 접근해 특정 동작을 수행하는 메서드로, 함수를 인수로 사용한다.
5. join은  배열 요소를 모두 연결해서 하나의 문자열로 반환하는 메서드이다. 이때 분리 기호로 사용하는 (    )를 인수로 전달하고 생략 시 (    )로 출력된다.
6. getMonth 메서드의 경우는 (    )부터 (   )까지 반환한다.
7. 프로미스 객체 생성 시 실행 함수는 두 개의 매개변수인 (    )와 (    )를 제공받는다. 첫 번째는 성공 시 호출되며, 두 번째는 실패 시 호출된다.

정답: 1. key / 2. ... / 3. shift / 4. forEach / 5. 구분자, 콤마 / 6. 0, 11 / 7. resolve, reject

*/


// 1-1. 배열의 구조 분해 할당
// 구조 분해 할당 코드 전
let number1 = [1, 2, 3];
let a = number1[0];
let b = number1[1];
let c = number1[2];
console.log(a, b, c);

// 구조 분해 할당 코드 후
let number2 = [1, 2, 3];
let [a2, b2, c2] = number2;
console.log(a, b, c);

// 1-2. 객체의 구조 분해 할당
let person = {
    name: "이덕우",
    age: 25
}
let {name, age} = person;
console.log(name, age);

// 1-3. 함수의 매개변수가 객체일 때 구조 분해 할당하기
/*function info({ name: n, age: a,}) {
    console.log(n, a);
}

let person = {
    name: "이덕우",
    age: 25,
};

info(person);*/

// 2-1 스프레드 연산자와 배열, 객체
/* 
(배열)
let A = [1, 2, 3];
let B = [...A, 4, 5, 6];

console.log(B);

(객체)
let objA = {
    a: 1,
    b: 2
};

let objB = {
    ...objA,
    c: 3,
    d: 4
};

console.log(objB); */

//2-2 스프레드 연산자와 함수
/*function func(a, b, c) {
    console.log(a, b, c);
}

let number = [1, 2, 3];
func(...number);*/

//2-3 rest 매개 변수
function func(one, ...three) {
    console.log(one);
    console.log(three);
}

func(1, 2, 3, 4);