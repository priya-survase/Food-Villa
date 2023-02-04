const Logo = () => {
  return (
    <a href="">
      <img
        className="img"
        alt="logo"
        src="https://i.pinimg.com/originals/3d/a0/00/3da000e71ddc31ec29da41266b182ade.jpg"
      />
    </a>
  );
};

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      {<Logo />}
      {<Navbar />}
    </div>
  );
};

export default HeaderComponent;
