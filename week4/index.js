//버전 확인 node -v, npm -v
//console.log("index run")

//import{PI, getArea, getCircumference} from "./circle.js";
//console.log(PI, getArea(1), getCircumference(1)); //모듈에서 3개 값 불러오기
//import * as circle from "./circle.js";
//console.log(circle.PI, circle.getArea(1), circle.getCircumference(1)); 
//import circle from "./circle.js";
//console.log(circle.PI, circle.getArea(1), circle.getCircumference(1)); 

import lodash from "lodash";
const arr=[1,1,1,2,2,1,1,4,4,3,2];
const uniqueArr=lodash.uniqBy(arr); //uniqBy는 중복값을 제거하고 반환
console.log(uniqueArr);

//리액트 앱 끄기: 컨트롤C