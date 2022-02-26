const reservedList = [
  {id:1, personName: "guo", phoneNumber: 1111, seatNumber: "2", time:"@@@2"},
];

class Navigator extends React.Component {
  render(){
    return (
      <nav>
        <ul>
          <li><button>HomePage</button></li>
          <li><button>Add Traveller</button></li>
          <li><button>Delete Traveller</button></li>
          <li><button>All Traveller</button></li>
          <li><button>Free seats</button></li>
        </ul>
      </nav>
    );
  };
}

class DisplayHomepage extends React.Component {
  render() {
    return (
      <div title="displayHomepage">
        <h1>Welcome to Ticket Reservation System!!</h1>
      </div>
    );
  }
}

class OneReservation extends React.Component {
  render(){
    const style = this.props.rowStyle;
    const reservation = this.props.reservation;
    return (
      <tr>
        <td style={style}>{reservation.id}</td>
        <td style={style}>{reservation.personName}</td>
        <td style={style}>{reservation.phoneNumber}</td>
        <td style={style}>{reservation.seatNumber}</td>
        <td style={style}>{reservation.time}</td>
      </tr>
    );
  }
}

class AllReservation extends React.Component {
  render() {
    const rowStyle = {border: "1px solid silver", padding: 4}
    const reservations = this.props.reservations.map(reservation => <OneReservation key={reservation.id} reservation={reservation}/>);

    return (
      <div id="allInformation">
        <h2>Reserved Information</h2>
        <table className={"informationTable"} id="informationTable" style={{borderCollapse: "collapse"}}>
          <thead>
           <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Seat Number</th>
            <th>Time Stamp</th>
           </tr>
          </thead>
          <tbody>
            {reservations}
          </tbody>
        </table>
      </div>
    );
  }
}

class AddTraveller extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.addTraveller;
    console.log(form);
    const reservation = {
      seatNumber: form.seatNumber.value, personName: form.personName.value, phoneNumber: form.phoneNumber.value, status: 'New',
    }
    console.log(reservation);
    this.props.createReservation(reservation);
    form.seatNumber.value = "";
    form.personName.value = "";
    form.phoneNumber.value = "";
  }

  render() {
    return (
      <form name="addTraveller" onSubmit={this.handleSubmit}>
        <p>Seat Number <input type="text" name="seatNumber" placeholder="seatNumber"/></p>
        <p>seat will be randomly choose</p>
        <p>Name <input type="text" name="personName" placeholder = "personName" /></p>
        <p>Phone Number <input type="text" name="phoneNumber" placeholder = "phoneNumber" /></p>
        <button>Submit</button>
      </form>
    );
  }
}

class WholeSystem extends React.Component {
  constructor() {
    super();
    this.state = { reservations: [] };
    this.createReservation = this.createReservation.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ reservations: reservedList });
    }, 500);
  }

  createReservation(reservation) {
    reservation.id = this.state.reservations.length + 1;
    reservation.time = new Date().toString();
    const newReservedList = this.state.reservations.slice();
    newReservedList.push(reservation);
    console.log(newReservedList);
    this.setState({ issues: newReservedList });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Ticket Reservation System</h1>
        <Navigator />
        <hr />
        <DisplayHomepage />
        <hr />
        <AllReservation reservations={this.state.reservations}/>
        <hr />
        <AddTraveller createReservation={this.createReservation}/>
      </React.Fragment>
    );
  }
}

const element = <WholeSystem />;

ReactDOM.render(element, document.getElementById('contents'));




//
// function selectSeat(props){
//   if(props.seatNumber < 0 || props.seatNumber > 25){
//     alert("The number of seats need to be between 1-25");
//     return
//   }
//   if(reservedSeatList.indexOf(id) > -1){
//     alert("This seat has been reserved!!");
//     return
//   }
//   if(selectedSeatList.size > 25){
//     alert("Selection number error");
//     return
//   }
//   if(selectedSeatList.indexOf(id) > -1){
//     releaseSeat(id);
//   }else{
//     selectedSeatList[selectedSeatList.length] = id;
//     document.getElementById(id).style.backgroundColor = "lightgreen";
//   }
// }
//
// function showSelection(id){
//   if(id == "homepage"){
//
//   }
// }
//
// class DeleteTraveller extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <AllReservation />
//         <hr></hr>
//         <button id="deleteInformation" type="button" onClick="deleteInformation()">Delete</button>
//       </React.Fragment>
//     );
//   };
// }
//
//
// class DisplayTraveller extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <allReservation />
//       </React.Fragment>
//     );
//   }
// }
//
// class DisplayFreeSeats extends React.Component {
//   render() {
//     return (
//       <div title="displayHomepage">
//         <h1>Welcome to Ticket Reservation System</h1>
//       </div>
//     );
//   }
// }
//
//
// const element_navigator = <Navigator />;
// const element_displayHomepage = <DisplayHomepage />;
// const element_addTraveller = <AddTraveller />;
// const element_deleteTraveller = <DeleteTraveller />;
// const element_displayTraveller = <DisplayTraveller />;
// const element_displayFreeSeats = <DisplayFreeSeats />;
//
// ReactDOM.render(element_navigator, document.getElementById('navigator'));
// ReactDOM.render(element_displayHomepage, document.getElementById('homepage'));
// ReactDOM.render(element_addTraveller, document.getElementById('addTraveller'));
// ReactDOM.render(element_deleteTraveller, document.getElementById('deleteTraveller'));
// ReactDOM.render(element_displayTraveller, document.getElementById('displayTraveller'));
// ReactDOM.render(element_displayFreeSeats, document.getElementById('displayFreeSeats'));
