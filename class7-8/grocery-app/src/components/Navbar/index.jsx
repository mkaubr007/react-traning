import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        GroceryApp
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/about">
              About <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/contact">
              Contact <span class="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0"></form>
      </div>
    </nav>
  );
};
export default Navbar;
