import { Link, Outlet } from "react-router-dom";

const Cat = () => {
  return (
    <div>
      <h3>고양이 화면</h3>
      <Link to="1">고양이 디테일 1</Link>
      <Link to="2">고양이 디테일 2</Link>
      <Link to="3">고양이 디테일 3</Link>
      <Link to="4">고양이 디테일 4</Link>
      <Link to="5">고양이 디테일 5</Link>
      <Outlet />
    </div>
  );
};

export default Cat;
