import logo from "../assets/lws-logo-en.svg";

const NavBar = () => {
  return (
    <nav className="py-6">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        {/* Logo  */}
        <a href="/">
          <img className="h-[40px]" src={logo} alt="Lws" />
        </a>
        {/* Logo Ends  */}
        <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#">
          Get Admission
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
