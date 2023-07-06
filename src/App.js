import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// class Component
// import { Component } from "react";
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users }));
//   }
//   onSearchHandler = (e) => {
//     this.setState({ searchField: e.target.value.toLowerCase() });
//   };
//   render() {
//     const newMonsters = this.state.monsters.filter((filterName) => {
//       return filterName.name.toLowerCase().includes(this.state.searchField);
//     });
//     return (
//       <div className="App">
//         <h1>Monster Rolodex</h1>
//         <SearchBox onChangeHandler={this.onSearchHandler} />
//         <CardList monsters={newMonsters} />
//       </div>
//     );
//   }
// }

// functional Component
const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);
  useEffect(() => {
    const getMonsters = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      setMonsters(data);
    };
    getMonsters();
  }, []);

  useEffect(() => {
    const newMonsters = monsters.filter((filterName) => {
      return filterName.name.toLowerCase().includes(searchField);
    });
    setFilterMonsters(newMonsters);
  }, [monsters, searchField]);

  const onSearchHandler = (e) => {
    setSearchField(e.target.value.toLowerCase());
  };
  return (
    <>
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox onChangeHandler={onSearchHandler} />
        <CardList monsters={filterMonsters} />
      </div>
    </>
  );
};

export default App;
