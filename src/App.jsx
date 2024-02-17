import MovieList from "./components/movie/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { CartContext } from "./contexts";
import { useReducer, useState } from "react";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cartReducer, initialState } from "./reducers/cartReducer";

function App() {
  // const [cartData, setCartData] = useReducer([]);
  const [cartData, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <CartContext.Provider value={{ data: cartData, dispatch }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <ToastContainer transition={Slide} position="bottom-right" />
        <Footer />
      </CartContext.Provider>
    </>
  );
}

export default App;
