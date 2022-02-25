import './style.css'
// import React from '@babel/preset-react'


var reservedList;
var reservedSeatList;
var selectedSeatList;

class navigator extends React.Component {
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

class reserveInformation{
  constructor(id, name, phone, seatNumber, time) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.seatNumber = seatNumber;
    this.timestamp = time;
  }
}

function selectSeat(props){
  if(props.seatNumber < 0 || props.seatNumber > 25){
    alert("The number of seats need to be between 1-25");
    return
  }
  if(reservedSeatList.indexOf(id) > -1){
    alert("This seat has been reserved!!");
    return
  }
  if(selectedSeatList.size > 25){
    alert("Selection number error");
    return
  }
  if(selectedSeatList.indexOf(id) > -1){
    releaseSeat(id);
  }else{
    selectedSeatList[selectedSeatList.length] = id;
    document.getElementById(id).style.backgroundColor = "lightgreen";
  }
}

function showSelection(id){
  if(id == "homepage"){

  }
}

class displayHomepage extends React.Component {

  reserveSeat(){

  }

  render() {
    return (
      <div id = "information">
        <h2>Please input the customer's information:</h2>
        <form onSubmit="return false;">
          Seat Number <input type="text" name="seatNumber" id = "seatNumber"></input>
          <p>seat will be randomly choose</p>
          Name <input type="text" name="personName" id = "personName"></input>
          <p></p>
          Phone Number <input type="text" name="phoneNumber" id = "phoneNumber"></input>
          <input type="submit" value="Submit" onClick="reserveSeat()"></input>
        </form>
      </div>
    );
  }
}

class addTraveller extends React.Component {
  render() {
    return (
      <div title="displayHomepage">
        <h1>Welcome to Ticket Reservation System</h1>
      </div>
    );
  }
}

class allReservation extends React.Component {
  render() {
    return (
      <div id="allInformation" style="display: none;">
        <h2>Reserved Information</h2>
        <table id="informationTable">
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Seat</th>
            <th>Time Stamp</th>
            <th>Delete Operation</th>
          </tr>
        </table>
      </div>
      );
  }
}


class deleteTraveller extends React.Component {
  render() {
    return (
      <React.Fragment>
        <allReservation />
        <hr></hr>
        <button id="deleteInformation" type="button" onClick="deleteInformation()">Delete</button>
      </React.Fragment>
    );
  };
}


class displayTraveller extends React.Component {
  render() {
    return (
      <React.Fragment>
        <allReservation />
      </React.Fragment>
    );
  }
}

class displayFreeSeats extends React.Component {
  render() {
    return (
      <div title="displayHomepage">
        <h1>Welcome to Ticket Reservation System</h1>
      </div>
    );
  }
}


const element = (
  <div title="Outer div">
    <h1>Hello World!</h1>
  </div>
)

const element_navigator = <navagator></navagator>;

ReactDOM.render(element, document.getElementById('contents'));
ReactDOM.render(element_navigator, document.getElementById('navigator'));
ReactDOM.render(displayHomepage, document.getElementById('homepage'));
ReactDOM.render(addTraveller, document.getElementById('addTraveller'));
ReactDOM.render(deleteTraveller, document.getElementById('deleteTraveller'));
ReactDOM.render(displayTraveller, document.getElementById('displayTraveller'));
ReactDOM.render(displayFreeSeats, document.getElementById('displayFreeSeats'));
