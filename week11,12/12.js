<DiaryStateContext.Provider value={data}>
        <div className="App">
        <DiaryEditor onCreate={onCreate} />
        <div>전체 일기 : {data.length}</div>
        <div>기분 좋은 일기 개수 : {goodCount}</div>
        <div>기분 나쁜 일기 개수: {badCount}</div>
        <div>기분 좋은 일기 비율 : {goodRatio}</div>
        <DiaryList onEdit={onEdit} onRemove={onRemove} />
        </div>
    </DiaryStateContext.Provider>

/*

const DiaryList = (onEdit, onRemove) => {
const diaryList = useContext(DiaryStateContext);

export const DiaryDispatchContext = React.createContext();

<DiaryStateContext.Provider value={data}>
    <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
        <DiaryEditor onCreate={onCreate} />
        <div>전체 일기 : {data.length}</div>
        <div>기분 좋은 일기 개수 : {goodCount}</div>
        <div>기분 나쁜 일기 개수: {badCount}</div>
        <div>기분 좋은 일기 비율 : {goodRatio}</div>
        <DiaryList onEdit={onEdit} onRemove={onRemove} />
        </div>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>

const { onCreate } = useContext(DiaryDispatchContext);
const { onRemove, onEdit } = useContext(DiaryDispatchContext);


export const DiaryDispatchContext = React.createContext();

function App() {
const memoizedDispatches = useMemo(()=>{
    return{onCreate,onDelete,onEdit}
    
    return (
    <DiaryStateContext.Provider value={data}>
    <DiaryDispatchContext.Provider value={memoizedDispatches} >

    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
);
},[])


const memoizedDispatches = useMemo(() => {
    return { onCreate, onEdit, onRemove };}, []);

*/