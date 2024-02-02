import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-icons";
import "./App.css";
import NavbarNetflix from "./components/navbarNetflix";
import Interazione from "./components/interazione";
import Generi22 from "./generi22";

function App() {
  return (
    <div className="App">
      <header>
        <NavbarNetflix />
      </header>
      <main>
        <Generi22 />
        {/* //! GRAZIE ALLE PROPS "TITOLO" E "ENDPOINT" POSSO SCEGLIERE A MIO PIACIMENTO DEGLI ARGOMENTI, IN QUESTO CASO I TITOLI DEI CAROSELLI E l'ENDPOINT DELLA FETCH, LA QUARE RICERCHERA' IL CONTENUTO DESIDERATO */}
        <Interazione titolo="Lupin" endpoint="Lupin" />{" "}
        {/* //? IN QUESTO CASO IL TITOLO SARA' LUPIN E VEDREMO IL CONTENUTO SOLO DI LUPIN */}
        <Interazione titolo="Japan Movies" endpoint="Rurouni" />
        <Interazione titolo="Korean Movies" endpoint="Korean" />
      </main>
    </div>
  );
}

export default App;
