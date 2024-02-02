import { Container } from "react-bootstrap";
import { BiGridAlt } from "react-icons/bi";
import { BiGrid } from "react-icons/bi";
import { IconContext } from "react-icons";
const generi22 = () => {
  return (
    <IconContext.Provider value={{ className: "icons", color: "#FF00FF" }}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between mt-2">
          <div className="d-flex">
            <h2 className="mb-4 text-white">TV Shows</h2>
            <div className="btn-group" role="group">
              <div className="dropdown ms-4 mt-1">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "#221f1f" }}
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
                      KDrama
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Thriller
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <BiGrid />
            <BiGridAlt />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default generi22;
