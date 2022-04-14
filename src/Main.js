import React from "react"
import birthdays from './data'
import Birthday from './Birthday'

export default function Main() {
  
  
  function addBirthdays() {
    return birthdayArray.map(bday => 
      (
        <Birthday 
          key = {bday.id}
          img = {bday.image}
          name = {bday.name}
          age = {bday.age}
        />
      )
  )}

  function clearBirthdays() {
    setBirthdayArray([])
  }

  const [birthdayArray, setBirthdayArray] = React.useState(birthdays)
  

  return (
    <div className="main">
      
      <div className="birthday-heading">
        {birthdayArray.length == 0 && <h1>No birthdays today</h1>}
        {birthdayArray.length > 0 &&
          <h1>
              {birthdayArray.length} {birthdayArray.length == 1 ? "birthday" : "birthdays"} today
          </h1>
        }
      </div>
      {addBirthdays()}
      <button className="clear-btn" onClick={clearBirthdays}>Clear All</button>
    </div>
  )
}