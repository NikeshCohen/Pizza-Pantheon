import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currQuantity = useSelector(getCurQuantityById(id));

  function handleAddToCart() {
    const newPizza = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newPizza));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic capitalize text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="flex items-center justify-between mt-auto">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {!soldOut ? (
            currQuantity > 0 ? (
              <div className="flex items-center gap-3 sm:gap-8">
                <UpdateItemQuantity id={id} quantity={currQuantity} />
                <DeleteItem id={id} />
              </div>
            ) : (
              <Button type="small" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            )
          ) : null}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
