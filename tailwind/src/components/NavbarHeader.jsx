
function NavbarHeader() {
  return (
    <div>
        <div className="navbar bg-[#f8b802] text-black  ">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
    <li><a>All CATEGORES</a></li>
      <li><a>TODAY DEALS</a></li>
          <li><a>ELECTRONICS</a></li>
          <li><a>CLOTHINGS</a></li>
          <li><a>COMPUTERS</a></li>
          <li><a>FURNTURES</a></li>
          <li><a>MOM & BABY</a></li>
          <li><a>BOOKS $ MORE</a></li>        <li>
            <a>Parent</a>
           
          </li>
        </ul>
      </div>
      {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
    </div>
    <div className="navbar-center  hidden lg:flex ">
      <ul className="menu menu-horizontal px-1">
      <li><a>All CATEGORES</a></li>
      <li><a>TODAY DEALS</a></li>
          <li><a>ELECTRONICS</a></li>
          <li><a>CLOTHINGS</a></li>
          <li><a>COMPUTERS</a></li>
          <li><a>FURNTURES</a></li>
          <li><a>MOM & BABY</a></li>
          <li><a>BOOKS $ MORE</a></li>      <li>
          
        </li>
      </ul>
    </div>
   
  </div></div>
  )
}

export default NavbarHeader