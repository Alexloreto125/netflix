import { Container } from "react-bootstrap";
import { BiGridAlt } from "react-icons/bi";
import { BiGrid } from "react-icons/bi";
import { IconContext } from "react-icons";
const generi22 = () => {
  return (
    <IconContext.Provider value={{ className: "icons", color: "#FF00FF" }}>
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center ">
          <div className="col">
            <form className="d-flex align-items-center text-white">
              <h1>TV Shows</h1>
              <div className="dropdown">
                <button
                  className="btn btn-dark border border-light dropdown-toggle ms-5"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ width: "155px " }}
                >
                  Genres
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Romantic
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      K-Drama
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Romantic K-Drama
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
          <div className="col">
            <BiGrid />
            <BiGridAlt />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default generi22;
