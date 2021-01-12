import React, {useState} from "react";
import { randomNumber } from "../utils";

function Numbers() {
  const [nums, setNumArr] = useState([])
  const[filterBy, setFilterBy] = useState("All")

  let numbersToDisplay = nums;
  if (filterBy === "Even") {
    numbersToDisplay = nums.filter((num) => num % 2 === 0);
  } else if (filterBy === "Odd") {
    numbersToDisplay = nums.filter((num) => num % 2 !== 0);
  }
  

  function handleAddNumber() {
    const newNumber = randomNumber();
    
    
    const numArr = [...nums, newNumber]
    setNumArr(numArr)
  }

  function handleClick(num) {
    const newNumArr = nums.map(number => {
      if (number === num )
      {return number + 100
    }
      else {return number}
    })
    setNumArr(newNumArr)
  }
  

    const numElements = numbersToDisplay.map(num => {

    return (
      <li key={num} onClick={() => handleClick(num)}>{num}</li>
  
    )
  })

  console.log(numElements)

  function handleFilterChange(e) {
    setFilterBy(e.target.value)
    console.log(e)
  }




  return (
    <div>
      <button onClick={handleAddNumber}>Add Number</button>
      <ul>{numElements}</ul>

      <select name="filter" onChange={handleFilterChange}>
    <option value="All">All</option>
    <option value="Even">Even</option>
    <option value="Odd">Odd</option>
    </select>
    </div>

    
  );
}

export default Numbers;
