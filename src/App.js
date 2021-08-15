import MainPage from "./Pages/MainPage";
import BookPage from "./Pages/BookPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="container">
          <Route exact path="/" children={<MainPage />} />
          <Route path="/book/:id" children={<BookPage />} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
