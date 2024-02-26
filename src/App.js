import './App.css';
// import Button from './components/button/Button'; 
import Usestate from './hooks/Usestate';
// import Circle from './components/circle/Circle';
// import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <div className="App">
       {/* <Card/> */}
       {/* <Navbar/> */}
       {/* <Circle/> */}
       {/* <Button/> */}
       <Usestate/>
    </div>
  );
}

export default App;


// find second largest elements in the array

// const arr = [12,4,3,2,8,9,54,16,16,16]

// const uniq = [...new Set(arr)]

// const result = uniq.sort((a,b)=>{
//  return b-a
// })

// console.log(result[1])