import birthdays from './data'
import Birthday from './Birthday'

export default function Main() {
  
  
  function addBirthdays() {
    return birthdays.map(bday => 
      (
        <Birthday 
          key = {bday.id}
          img = {bday.image}
          name = {bday.name}
          age = {bday.age}
        />
      )
    )}
  

  return (
    <div className="main">
      <h3>5 birthdays today</h3>
      {addBirthdays()}
      <button>Clear All</button>
    </div>
  )
}