import { useState } from "react";

const Header = () => {
  const [showNavItem, setShowNavItem] = useState(false);
  return (
    <div style={{ height: "80px" }}>
      <div className=" bg-primary navbar navbar-expand-lg fixed-top">
        <div className=" container   ">
          {/* <div className=" d-flex justify-content-between w-100"> */}
          <img
            src="/lws/lws.png"
            alt="lws-logo"
            height="60"
            className=" navbar-brand"
          />
          <div
            className=" navbar-toggler"
            onClick={() => {
              setShowNavItem(!showNavItem);
            }}
          >
            {showNavItem}A
          </div>
          <div
            className={`navbar-collapse ${showNavItem ? "hide" : "collapse"} `}
          >
            <div className=" navbar-nav list-unstyled  center" height="70">
              <div className=" me-2">Home</div>
              <div>About</div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
    // <>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    //     <div className="container">
    //       <a className="navbar-brand" href="#">
    //         Navbar
    //       </a>
    //       <button
    //         className="navbar-toggler "
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#collapsibleNavId"
    //         aria-controls="collapsibleNavId"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       />
    //       <div className="collapse navbar-collapse" id="collapsibleNavId">
    //         <ul className="navbar-nav me-auto mt-2 mt-lg-0">
    //           <li className="nav-item active">
    //             <a className="nav-link" href="#">
    //               Home <span className="visually-hidden">(current)</span>
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">
    //               Link
    //             </a>
    //           </li>
    //           <li className="nav-item dropdown">
    //             <a
    //               className="nav-link dropdown-toggle"
    //               href="#"
    //               id="dropdownId"
    //               data-bs-toggle="dropdown"
    //               aria-haspopup="true"
    //               aria-expanded="false"
    //             >
    //               Dropdown
    //             </a>
    //             <div className="dropdown-menu" aria-labelledby="dropdownId">
    //               <a className="dropdown-item" href="#">
    //                 Action 1
    //               </a>
    //               <a className="dropdown-item" href="#">
    //                 Action 2
    //               </a>
    //             </div>
    //           </li>
    //         </ul>
    //         <form className="d-flex my-2 my-lg-0">
    //           <input
    //             className="form-control me-sm-2"
    //             type="text"
    //             placeholder="Search"
    //           />
    //           <button
    //             className="btn btn-outline-success my-2 my-sm-0"
    //             type="submit"
    //           >
    //             Search
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </nav>
    // </>
  );
};

export default Header;
