import Button from "../../ui/Button"
import { increaseItemQuantity } from "./cartSlice"
import { decreaseItemQuantity } from "./cartSlice"
import { useDispatch } from "react-redux"

function UpdateItemQuantity({pizzaId, currentQuantity}) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button onClick={() => dispatch(decreaseItemQuantity(pizzaId))} type='round'>-</Button>
      <span className="text-sm font-medium">{ currentQuantity}</span>
      <Button onClick={()=> dispatch(increaseItemQuantity(pizzaId))} type='round'>+</Button>
    </div>
  )
}

export default UpdateItemQuantity