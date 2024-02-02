// ! LEGGERE I COMMENTI PER CAPIRE IL CODICE
///RIGA 28: ENDPOINT E FETCH
///RIGA 40-54: LOGICA DEL CAROSELLO (AVANTI-INDIETRO) RIGA 140-159 L'INVISIBILITA' DELLE FRECCE
///RIGA 56: COLONNE RESPONSIVE, 1 MOBILE 6 DESKTOP
///
///
import React, { Component } from "react";
import "./interazione.css";

import { IconContext } from "react-icons";
import * as BootstrapIcons from "react-icons";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import "./carousel.css";
class interazione extends Component {
  state = {
    datiAPI: [],
    loading: true,
    error: null,
    activeIndex: 0,
    itemCount: 0,
  };
  componentDidMount() {
    //*RIGA 28: ENDPOINT E FETCH
    const { endpoint } = this.props;
    fetch(`https://www.omdbapi.com/?apikey=b87c2e68&s=${endpoint}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.Search);
        // Aggiorna lo stato con i dati ottenuti dalla fetch
        this.setState({ datiAPI: data.Search, loading: false });
      })
      .catch((error) => {
        console.error("Errore durante la fetch:", error);
        this.setState({ error, loading: false });
      });
  }

  //*RIGA 40-54: LOGICA DEL CAROSELLO (AVANTI-INDIETRO)
  handlePrev = () => {
    const { activeIndex } = this.state;
    if (activeIndex > 0) {
      this.setState({ activeIndex: activeIndex - 1 });
    }
  };

  handleNext = () => {
    const { activeIndex, datiAPI } = this.state;
    const itemsPerPage = this.getItemsPerPage();
    if (activeIndex + itemsPerPage < datiAPI.length) {
      this.setState({ activeIndex: activeIndex + 1 });
    }
  };

  //* COLONNE RESPONSIVE, 1 MOBILE 6 DESKTOP
  getItemsPerPage = () => {
    return window.innerWidth <= 768 ? 1 : 6;
  };

  render() {
    const { datiAPI, loading, error, activeIndex } = this.state;
    const itemsPerPage = this.getItemsPerPage();
    const { titolo } = this.props;

    return (
      <IconContext.Provider value={{ className: "icons" }}>
        <div className="container-fluid px-4">
          <article>
            {loading ? (
              <p>Caricamento in corso...</p>
            ) : error ? (
              <p>Si è verificato un errore: {error.message}</p>
            ) : (
              <div className="container-fluid  text-white mt-5">
                <div className="row mt-3">
                  <h5>{titolo}</h5>
                  <div className="col">
                    <div
                      id="carouselExampleIndicators1"
                      className="carousel slide"
                      data-bs-ride="carousel"
                      data-bs-interval="1000"
                    >
                      <div className="carousel-inner position-relative">
                        <div className="carousel-item active">
                          <div className="row g-0 ">
                            {datiAPI
                              .slice(activeIndex, activeIndex + itemsPerPage)
                              .map((data, i) => (
                                <div
                                  key={i}
                                  className={`col-2 me-0 ${
                                    itemsPerPage === 1 ? "col-12 mb-2" : ""
                                  }`}
                                >
                                  <img
                                    src={data.Poster}
                                    className="d-block w-100 h-100 card-zoom"
                                    style={{
                                      maxWidth: "100%",
                                      maxHeight: "100%",
                                      objectFit: "cover",
                                    }}
                                    alt={data.Title}
                                  />
                                </div>
                              ))}
                          </div>
                          <div className="row g-0">
                            {datiAPI
                              .slice(activeIndex, activeIndex + itemsPerPage)
                              .map((data, i) => (
                                <div
                                  key={i}
                                  className={`col-2 me-0 ${
                                    itemsPerPage === 1 ? "col-12 mb-2" : ""
                                  }`}
                                >
                                  <p
                                    className="mt-4 fw-bold fs-7"
                                    style={{ color: "#FF00FF" }}
                                  >
                                    {data.Title}: {data.Type.toUpperCase()}
                                  </p>
                                  <p style={{ color: "#FF00FF" }}>
                                    YEAR:{data.Year}
                                  </p>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>

                      <button
                        //* LA FRECCIA INIZIALMENTE E' INVISIBILE PERCHE' NON SI PUO' TORNARE INDIETRO (NON C'E NULLA)
                        className={`carousel-control-prev ${
                          activeIndex === 0 ? "invisible" : ""
                        }`}
                        type="button"
                        data-bs-target="#carouselExampleIndicators1"
                        data-bs-slide="prev"
                        onClick={this.handlePrev}
                        style={{
                          color: "rgb(255, 0, 255)",
                          fontSize: "40px",
                        }}
                      >
                        <span aria-hidden="true">
                          <GrCaretPrevious />
                        </span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        //*LA FRECCIA ALLA FINE SARA'INVISIBILE PERCHE' NON SI PUO' ANDARE AVANTI (NON C'E NULLA)
                        className={`carousel-control-next ms-auto ${
                          activeIndex + itemsPerPage >= datiAPI.length
                            ? "invisible"
                            : ""
                        }`}
                        type="button"
                        data-bs-target="#carouselExampleIndicators1"
                        data-bs-slide="next"
                        onClick={this.handleNext}
                        style={{
                          color: "#FF00FF",
                          fontSize: "40px",
                        }}
                      >
                        <span aria-hidden="true">
                          <GrCaretNext />
                        </span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </article>
        </div>
      </IconContext.Provider>
    );
  }
}
export default interazione;
