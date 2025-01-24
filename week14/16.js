// 액션 생성 함수: 액션 객체를 만들어 주는 함수
function addTodo(data) {
    return {
        type: 'ADD_TODO',
    data
    };
    }
    
    const changeInput = text => ({ 
    type: 'CHANGE_INPUT',
    text
    });

/* 

- 리듀서 
const initialState = {
counter: 1
};
function reducer(state = initialState, action) {
switch (action.type) {
case INCREMENT:
    return {
        counter: state.counter + 1
    };
default:
    return state;
}
}

1.4 스토어: 한 개의 프로젝트는 하나의 스토어만 가능
-> 이 안에 현 애플리케이션 상태와 리듀서가 들어있음

1.5 디스패치: 스토어의 내장 함수 (액션 발생시킴)
1.6 구독: 스토어의 내장 함수 (리스너 함수가 업데이트 될때마다 호출)


16.2 리덕스
설치 명령어 : npm install -g parcel-bundler.

오류가 생긴다면 : 
1. npm uninstall -g parcel-bundler (삭제)
2. npm install -g yarn (yarn 글로벌 설치)

-> yarn init -y

버전 확인
yarn --version

parcel 실행
npx parcel index.html

*/