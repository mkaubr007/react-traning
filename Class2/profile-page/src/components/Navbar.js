const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
    <a className="navbar-brand" href=" # ">EMIDS</a>
    <div className="ml-auto mr-1">
    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target=" # navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
        <ul className="navbar-nav text-right ">
          <li className="nav-item active">
                <a className="nav-link" href=" # "><b>Home</b></a>
            </li>
           <li className="nav-item active">
                <a className="nav-link" href=" # "><b>About</b></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href=" # ">Login</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href=" # ">Registration</a>
            </li>
        </ul>
    </div>
    </div>
   
</nav>
  );
};
export default Navbar;
