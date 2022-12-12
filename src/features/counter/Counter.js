
import { useSelector, useDispatch } from 'react-redux'
import {incByVal} from './CountSlice'
const Counter = () => {
    const count = useSelector((state)=>state.Counter.count)
    const dispatch = useDispatch()
  return (
    <>
    <h1>test</h1>
    <h1>{count}</h1>

    <button type='button' onClick={()=>{dispatch(incByVal(5))}}></button>
    </>
  )
}

export default Counter