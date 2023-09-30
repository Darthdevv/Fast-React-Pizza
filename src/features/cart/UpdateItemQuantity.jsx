import Button from "../../ui/Button"
import { increaseItemQuantity } from "./cartSlice"
import { decreaseItemQuantity } from "./cartSlice"
import { useDispatch } from "react-redux"

function UpdateItemQuantity({pizzaId}) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 md:gap-3">
      <Button onClick={()=> dispatch(decreaseItemQuantity(pizzaId))} type='round'>-</Button>
      <Button onClick={()=> dispatch(increaseItemQuantity(pizzaId))} type='round'>+</Button>
    </div>
  )
}

export default UpdateItemQuantity