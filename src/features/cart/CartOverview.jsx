import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

function CartOverview() {
  const totalCartQuantity = useSelector(state => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0));

  const totalCartPrice = useSelector(state => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0));
  return (
    <div className=" flex items-center justify-between bg-stone-800 text-stone-200 px-4 py-4 sm:px-6 uppercase text-sm    md:text-base">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>${ totalCartPrice}</span>
      </p>
      <Link to='/cart'> Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
