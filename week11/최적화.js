import { useMemo } from "react";

const TodoList = ({ todo }) => {
    const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter(it => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
    }, [todo]);

    return (
    <div>
        <h4>Todo List</h4>
        <div>총 개수: {analyzeTodo.totalCount}</div>
        <div>완료된 할 일: {analyzeTodo.doneCount}</div>
        <div>미완료된 할 일: {analyzeTodo.notDoneCount}</div>
    </div>
    );
};

/*
import { useCallback, useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
    case "ADD_TODO":
        return [...state, action.payload];
    case "TOGGLE_TODO":
        return state.map(todo => 
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        );
    case "DELETE_TODO":
        return state.filter(todo => todo.id !== action.payload);
    default:
        return state;
    }
};

const App = () => {
    const [todo, dispatch] = useReducer(reducer, []);

    const addTodo = useCallback(content => {
    dispatch({ type: "ADD_TODO", payload: { id: Date.now(), content, isDone: false } });
    }, []);

    const toggleTodo = useCallback(id => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
    }, []);

    const deleteTodo = useCallback(id => {
    dispatch({ type: "DELETE_TODO", payload: id });
    }, []);

    return (
    <div>
        <Header />
        <TodoList todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
    );
};

export default App;


*/