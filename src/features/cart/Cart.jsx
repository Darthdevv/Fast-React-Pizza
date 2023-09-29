import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { getCart } from './cartSlice';
import { getName } from '../user/userSlice';

function Cart() {
  const username = useSelector(getName);
  const cart = useSelector(getCart);

  return (
    <div className='px-4 py-3'>
      <LinkButton  to="/menu">&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {username }</h2>

      <ul className=' mt-3 divide-y divide-slate-200 border-b '>
        {cart.map(item => (
          <CartItem item={item} key={item.key}/>
        ))}
      </ul>

      <div className='mt-6 space-x-2'>
        <Button type="primary" to="/order/new">Order pizzas</Button>
        <Button type='secondary'>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
