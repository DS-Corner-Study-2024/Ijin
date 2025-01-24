// 리덕스 사용하여 리액트 애플리케이션 상태 관리

/*

prettier 적용하려면 디렉터리에 .prettierrc 파일 작성
{
"singleQuote": true,
"semi": true,
"useTabs": false,
"tabWidth": 2,
"trailingComma": "all",
"printWidth": 80
}


할 일 목록 컴포넌트 todo.js
import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
return (
    <div>
    <input type="checkbox" />
    <span>예제 텍스트</span>
    <button>삭제</button>
    </div>
);
};

const Todos = ({
  input, // 인풋에 입력되는 텍스트
  todos, // 할 일 목록이 들어 있는 객체
onChangeInput,
onInsert,
onToggle,
onRemove,
}) => {
const onSubmit = e => {
    e.preventDefault();
};
return (
    <div>
    <form onSubmit={onSubmit}>
        <input />
        <button type="submit">등록</button>
    </form>
    <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </div>
    </div>
);
};

export default Todos;



// 컨테이너 컴포넌트
-> 리덕스 스토어와 연동된 컴포넌트


// redux-actions 라이브러리 immer 라이브러리
-> 리덕스를 좀 더 편하게 사용하는 방법

// useStore Hooks 사용 -> 컴포넌트 내부에서 리덕스 스토어 객체 직접 사용 가능
const store = useStore();
store.dispatch({ type: 'SAMPLE_ACTION '});
store.getState();


*/
