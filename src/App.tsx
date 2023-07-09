import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {

  const {count} =useAppSelector((state)=>state.counter)
  const dispatch=useAppDispatch();

  return (
    <div className="mt-4">
      <div className="flex justify-center items-center gap-5">
        <button onClick={()=>dispatch(increment())} className="p-4 border rounded-md border-green-500 hover:bg-green-400">increment</button>
        <button onClick={()=>dispatch(incrementByAmount(5))} className="p-4 border rounded-md border-green-500 hover:bg-green-400">increment by value</button>
        <p>{count}</p>
        <button onClick={()=>dispatch(decrement())} className="p-4 border rounded-md border-red-500 hover:bg-red-400">decrement</button>
      </div>
    </div>
  )
}

export default App
