import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut? " opacity-70 grayscale" : ""}`} />
      <div className="flex flex-col grow pt-0.5">
        <p className=" font-medium">{name}</p>
        <p className=" font-sm capitalize italic text-stone-500">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm text-stone-500 font-medium uppercase">Sold out</p>}
        <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
