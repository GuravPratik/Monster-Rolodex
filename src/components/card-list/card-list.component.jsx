import "./card-list.css";

// class Component
// import { Component } from "react";
// class CardList extends Component {
//   // constructor(){
//   //     super();

//   // }

//   render() {
//     const { monsters } = this.props;
//     return (
//       <>
//         {monsters.length > 0 ? (
//           <div className="card-list">
//             {monsters.map((monster, idx) => {
//               return <h1 key={idx}>{monster.name}</h1>;
//             })}
//           </div>
//         ) : (
//           <h4>Not Found</h4>
//         )}
//       </>
//     );
//   }
// }

// functional component
const CardList = ({ monsters }) => {
  return (
    <>
      {monsters.length > 0 ? (
        <div className="card-list">
          {monsters.map((monster, idx) => {
            return <h1 key={idx}>{monster.name}</h1>;
          })}
        </div>
      ) : (
        <h4>Not Found</h4>
      )}
    </>
  );
};

export default CardList;
