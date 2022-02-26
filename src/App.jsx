var reservedList;
var reservedSeatList;
var selectedSeatList;
const reservedList = [
  {
    id:11111, personName:"guodan", phoneNumber:11111, seatNumber:12, timestamp:"",
  },
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
        <td style={style}>{reservation.id)}</td>
        <td style={style}>{reservation.personName}</td>
        <td style={style}>{reservation.phoneNumber}</td>
        <td style={style}>{reservation.seatNumber}</td>
        <td style={style}>{reservation.timestamp}</td>
      </tr>
    )
  }
}

class AllReservation extends React.Component {
  constructor() {
    super();
    this.state = { ReserveList: []};
  }

  componentDidMount(){
    this.loadData();
  }

  loadData(){
    setTimeout(() => {
      this.setState({ReservedList: reservedList})
    }, 500);
  }

  createReservation(reservation){
    reservation.id = this.state.ReserveList.length + 1;
    reservation.timestamp = new Date().toString();
    const newReservedList = this.state.ReserveList.slice();
    newReservedList.push(reservation);
    this.setState({ReservedList: newReservedList});
  }

  render() {
    const rowStyle = {border: "1px solid silver", padding: 4}
    const reservations = this.state.ReserveList.map(reservation => <OneReservation key={reservation.id} reservation={reservation}/>);
    return (
      <div id="allInformation" style="display: none;">
        <h2>Reserved Information</h2>
        <table id="informationTable" style={{borderCollapse: "collapse"}}>
          <thead>
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Seat Number</th>
            <th>Time Stamp</th>
            <th>Delete Operation</th>
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

class AddTraveller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.reserveSeat = this.reserveSeat.bind(this);
  }
  reserveSeat(event){
    var seatNumber = document.getElementById("seatNumber").value;
    var personName = document.getElementById("personName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

  }

  render() {
    return (
      <div id = "information">
        <h2>Please input the customer's information:</h2>

        <form>
          <p>Seat Number <input type="text" name="seatNumber" id = "seatNumber" /></p>
          <p>seat will be randomly choose</p>
          <p>Name <input type="text" name="personName" id = "personName" /></p>
          <p>Phone Number <input type="text" name="phoneNumber" id = "phoneNumber" /></p>
          <input type="submit" value="Submit" onClick={this.reserveSeat}/>
        </form>
      </div>
    );
  }
}

class DeleteTraveller extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AllReservation />
        <hr></hr>
        <button id="deleteInformation" type="button" onClick="deleteInformation()">Delete</button>
      </React.Fragment>
    );
  };
}


class DisplayTraveller extends React.Component {
  render() {
    return (
      <React.Fragment>
        <allReservation />
      </React.Fragment>
    );
  }
}

class DisplayFreeSeats extends React.Component {
  render() {
    return (
      <div title="displayHomepage">
        <h1>Welcome to Ticket Reservation System</h1>
      </div>
    );
  }
}


const element_navigator = <Navigator />;
const element_displayHomepage = <DisplayHomepage />;
const element_addTraveller = <AddTraveller />;
const element_deleteTraveller = <DeleteTraveller />;
const element_displayTraveller = <DisplayTraveller />;
const element_displayFreeSeats = <DisplayFreeSeats />;

ReactDOM.render(element_navigator, document.getElementById('navigator'));
ReactDOM.render(element_displayHomepage, document.getElementById('homepage'));
ReactDOM.render(element_addTraveller, document.getElementById('addTraveller'));
ReactDOM.render(element_deleteTraveller, document.getElementById('deleteTraveller'));
ReactDOM.render(element_displayTraveller, document.getElementById('displayTraveller'));
ReactDOM.render(element_displayFreeSeats, document.getElementById('displayFreeSeats'));
