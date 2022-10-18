import hondacrv from './hondacrv.jpg';
import nissanaltima from './nissanaltima.jpg';
import toyotarav4 from './toyotarav4.jpg';
import './App.css';

function Inventory(props) {
  return (
    <div id="inventory">
      <img src={props.img} alt={props.name + " " + props.model} id="carimg"></img>
      <p>Make: {props.name}</p>
      <p>Model: {props.model}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}

function App() {
  const numbers = [{ img: hondacrv, name: "Honda", model: "CRV", year: "2022", url:"https://www.caranddriver.com/honda/cr-v-2022"}, { img: nissanaltima, name: "Nissan", model: "Altima", year: "2020", url:"https://www.cars.com/research/nissan-altima-2020/" }, { img: toyotarav4, name: "Toyota", model: "RAV4", year: "2022", url:"https://www.edmunds.com/toyota/rav4/" }];
  const listItems = numbers.map((numbers) =>
    <a href={numbers.url} target="_blank">
      <Inventory img={numbers.img} name={numbers.name} model={numbers.model} year={numbers.year} />
    </a>
  );
  return (
    <div className="App">
      <header className="App-header">
        {listItems}
      </header>
    </div>
  );
}

export default App;
