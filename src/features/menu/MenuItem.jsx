import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from 'react-redux'
import {addItem} from '../cart/cartSlice'
import DeleteItem from "../cart/DeleteItem";
import { getCurrentQuantityById } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id ,name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  console.log(currentQuantity);

  function handleAddToCart () {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut? " opacity-70 grayscale" : ""}`} />
      <div className="flex flex-col grow pt-0.5">
        <p className=" font-medium">{name}</p>
        <p className=" font-sm capitalize italic text-stone-500">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm text-stone-500 font-medium uppercase">Sold out</p>}
          <DeleteItem pizzaId={id}/>
          {soldOut? null : <Button onClick={handleAddToCart} type="small">Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
