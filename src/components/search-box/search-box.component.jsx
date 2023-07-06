import "./search-box.style.css";
// import { Component } from "react";
// class Component
// class SearchBox extends Component {
//   render() {
//     return (
//       <>
//         <input
//           className="search-box"
//           type="search"
//           placeholder="search monster"
//           onChange={this.props.onChangeHandler}
//         />
//       </>
//     );
//   }
// }

// functional component
const SearchBox = ({ onChangeHandler }) => {
  return (
    <>
      <input
        className="search-box"
        type="search"
        placeholder="search monster"
        onChange={onChangeHandler}
      />
    </>
  );
};

export default SearchBox;
