import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search for order..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 text-sm transition-all duration-75 bg-yellow-100 rounded-full placeholder:text-stone-900 w-28 sm:w-64 focus:outline-none sm:focus:w-72 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
      />
    </form>
  );
}

export default SearchOder;
