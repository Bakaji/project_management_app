import Logo from "../../Assets/logo.png";
const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-2">
      <div className="container">
        <a href="#home" className="navbar-brand">
          <div className="d-flex">
            <img src={Logo} alt="logo" className="mr-2" />
            <div className="text-dark">Project Management</div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export { Header };
