import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="app">Go To App</Link>
    </div>
  );
}

export default HomePage;
