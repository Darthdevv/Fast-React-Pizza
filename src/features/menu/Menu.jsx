
import { useLoaderData } from 'react-router-dom';
import {getMenu} from '../../services/apiRestaurant'

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <div>
      {menu.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <img src={item.imageUrl} alt="pizzaimg" />
          <div>{item.ingredients.map(ing => (
            <ul key={ing.index}>
              <li>{ing}</li>
            </ul>
          ))}</div>
  </div>
))}
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
