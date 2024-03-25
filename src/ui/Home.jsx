import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="px-4 py-4 my-10 text-sm text-center sm:px-6 md:text-base">
      <h1 className="mb-8 text-xl font-semibold sm:space-x-6 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Complete your order
        </Button>
      )}
    </div>
  );
}

export default Home;
