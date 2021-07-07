import "./App.css";
import { data } from "./data";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              amazona
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <div>
            <div className="row center">
              {data.products.map((card, index) => {
                const { name, image, price } = card;
                return <Card key={index} name={name} image={image} price={price} />;
              })}
            </div>
          </div>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </div>
  );
}

export default App;
