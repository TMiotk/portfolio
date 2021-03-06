import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";

function App() {
  return (
    <>
      <Particles
      className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 300,
              },
            },

            shape: {
              type: "circle", // stars  v square
              stroke: {
                width: 22,
                color: "black",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
