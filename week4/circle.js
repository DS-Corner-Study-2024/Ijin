const PI=3.141592;
function getArea(radius){
    return PI * radius * radius;
}
function getCircumference(radius){
    return 2*PI*radius;
}
//export{PI, getArea, getCircumference}; //모듈에서 모든 값을 한번에 내보내기
export default{
    PI,
    getArea,
    getCircumference,
}; //이 세 개 객체를 기본값으로 내보내기