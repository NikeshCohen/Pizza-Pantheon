import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalQuantity) return;

  return (
    <footer className="flex items-center justify-between px-4 py-4 uppercase bg-stone-800 text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </footer>
  );
}

export default CartOverview;
