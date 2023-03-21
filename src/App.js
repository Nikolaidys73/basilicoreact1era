import React, { Component } from "react";
import "./App.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";



// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import CardUser from "./components/CardUser/CardUser";
import Button from "./components/Button/Button";
import imagenes from  "./components/fotos/imagenes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header
          title="Titulo"
          subTitle="Subtitulo"
        />
        <div className="UserSection">
          <CardUser
            name="Nicolas Basilico"
            date="Se unio en Enero 2021"
            description=""
            img="{ imagenes.img0 }"
            backgroundColor="black"
          />
          <CardUser
            name="-----"
            date="Se unió en Abril 2021"
            description="UX Designer"
            img=""
            backgroundColor="black"
          />
          <CardUser
            name="--------"
            date="Se unió en Julio 2021"
            description="Dev"
            img=""
            backgroundColor="black"
          />
          <CardUser img=""
          description="No data"
          backgroundColor="black">
            <AccountCircleIcon />
          </CardUser>
        </div>
        <Button>Esto sera un boton</Button>
        <Button>Esto sera otro boton</Button>
      </div>
    );
  }
}

export default App;
