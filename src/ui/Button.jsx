import { Link } from "react-router-dom";

function Button({ disabled, type, to, children, onClick }) {
  const base =
    "inline-block text-sm font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    small: base + " px-4 py-5 md:px-5 sm:py-2 text-xs ",
    round: base + " px-2.5 py-1 md:px-3.5 sm:py-2 text-sm",
    secondary:
      "inline-block text-sm font-semibold border-2 border-stone-300 tracking-wide uppercase transition-colors duration-300  rounded-full text-stone-400 hover:bg-transparent-300 hover:text-stone-800  hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-5 md:py-3.5",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button className={styles[type]} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
