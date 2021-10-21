import { useEffect } from "react";
import Preloader from "./components/Preloader";
import { getTodos } from "./functions";

function App() {
  useEffect(() => {
    const fetchData = async() => {
      getTodos().then(console.log)
    }
    fetchData()
  }, []);
  return (
    <div className="container">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input id="icon_prefix" type="text" className="validate" />
              <label htmlFor="icon_prefix">Title</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">description</i>
              <input id="description" type="tel" className="validate" />
              <label htmlFor="description">Content</label>
            </div>
          </div>
        </form>
        <Preloader/>
          <ul class="collection">
          <li class="collection-item">Alvin</li>
          <li class="collection-item">Alvin</li>
          <li class="collection-item">Alvin</li>
          <li class="collection-item">Alvin</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
