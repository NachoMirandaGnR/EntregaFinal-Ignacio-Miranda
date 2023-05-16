import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer
        greeting={"Bienvenidos a la Tienda de Musica Mas Grande de Internet"}
      />
      <ItemCount
        initial={2}
        stock={5}
        onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}
      />
    </div>
  );
}

export default App;
