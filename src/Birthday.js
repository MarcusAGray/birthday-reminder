

export default function Birthday(props) {
  return (
    <div className="entry" key={props.id}>
        <img className="profile-img" src={props.img} alt="Birthday person"/>
        <div className="person-info">
          <h6 className="name">{props.name}</h6>
          <p className="age">{props.age} years</p>
        </div>
    </div>
  )
}