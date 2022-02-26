var reservedList = [];
const allSeats = 25;
class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickHomePage = this.handleClickHomePage.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickAll = this.handleClickAll.bind(this);
    this.handleClickFree = this.handleClickFree.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);

  }

  handleClickHomePage(e) {
    this.props.handleClick("homepage");
  }

  handleClickAdd(e) {
    this.props.handleClick("add");
  }

  handleClickAll(e) {
    this.props.handleClick("all");
  }

  handleClickFree(e) {
    this.props.handleClick("free");
  }

  handleClickDelete(e) {
    this.props.handleClick("delete");
  }

  render(){
    return (
      <nav>
        <ul>
          <li><button className="mainButton" onClick={this.handleClickHomePage}>HomePage</button></li>
          <li><button className="mainButton" onClick={this.handleClickAdd}>Add Traveller</button></li>
          <li><button className="mainButton" onClick={this.handleClickDelete}>Delete Traveller</button></li>
          <li><button className="mainButton" onClick={this.handleClickAll}>All Traveller</button></li>
          <li><button className="mainButton" onClick={this.handleClickFree}>Free seats</button></li>
        </ul>
      </nav>
    );
  };
}

class DisplayHomepage extends React.Component {
  render() {
    return (
      this.props.state.showHomePage?(
        <div title="displayHomepage">
          <h1>Welcome to Ticket Reservation System!!</h1>
        </div>
      ):null
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

class DisplayTraveller extends React.Component {
  render() {
    const rowStyle = {border: "1px solid silver", padding: 4}
    const reservations = this.props.reservations.map(reservation => <OneReservation  rowStyle={rowStyle} key={reservation.id} reservation={reservation}/>);

    return (
      this.props.state.showAll?(
        <table className={"informationTable"} id="informationTable">
          <thead>
          <tr>
            <th className="fontsize">Serial Number</th>
            <th className="fontsize">Name</th>
            <th className="fontsize">Phone</th>
            <th className="fontsize">Seat Number</th>
            <th className="fontsize">Time Stamp</th>
          </tr>
          </thead>
          <tbody>
          {reservations}
          </tbody>
        </table>
        ):null
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
    if(form.seatNumber.value > this.props.state.remainSeat){
      alert("There aren't enough seats, please choose again");
      return;
    }
    const reservation = {
      seatNumber: form.seatNumber.value, personName: form.personName.value, phoneNumber: form.phoneNumber.value,
    }
    this.props.createReservation(reservation);
    form.seatNumber.value = ""; form.personName.value = ""; form.phoneNumber.value = "";
  }

  render() {
    return (
      this.props.state.showAdd?(
        <form name="addTraveller" onSubmit={this.handleSubmit}>
          <p className= "fontsize">Seat Number: <input type="text" name="seatNumber" placeholder="seat number" required min="1" max="25"/></p>
          <h4>Tips: seat will be randomly choose</h4>
          <p className= "fontsize">Name: <input type="text" name="personName" placeholder = "person name" required/></p>
          <p className= "fontsize">Phone Number: <input type="text" name="phoneNumber" placeholder = "phone number" required/></p>
          <button className="mainButton">Submit</button>
        </form>
      ):null
    );
  }
}

class DeleteTraveller extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const form = document.forms.deleteTraveller;
    this.props.deleteReservation(form.id.value);
    form.id.value = "";
  }

  render() {
    return (
      this.props.state.showDelete?(
        <form name="deleteTraveller" onSubmit={this.handleDelete}>
          <p>Serial Number: <input type="text" name="id" placeholder="Serial Number" required/></p>
          <button className="mainButton">Submit</button>
        </form>
      ):null
    );
  }
}

class DisplayFreeSeats extends React.Component {
  render() {
    return (
      this.props.state.showFreeSeat?(
        <div>
          <h1>There are {this.props.state.remainSeat} seats left in the system.</h1>
          <h2>All The Available Seats:</h2>
          <p><i>Grey seats are available, red seats are reserved.</i></p>
          <table border={1} bgcolor="#6495ed">
            <tr>
              <td className="seat" id="1" style={{backgroundColor: this.props.state.remainSeat>24 ?"grey":"red"}}></td>
              <td className="seat" id="2" style={{backgroundColor: this.props.state.remainSeat>23 ?"grey":"red"}}></td>
              <td className="seat" id="3" style={{backgroundColor: this.props.state.remainSeat>22 ?"grey":"red"}}></td>
              <td className="seat" id="4" style={{backgroundColor: this.props.state.remainSeat>21 ?"grey":"red"}}></td>
              <td className="seat" id="5" style={{backgroundColor: this.props.state.remainSeat>20 ?"grey":"red"}}></td>
            </tr>
            <tr>
              <td className="seat" id="6" style={{backgroundColor: this.props.state.remainSeat>19 ?"grey":"red"}}></td>
              <td className="seat" id="7" style={{backgroundColor: this.props.state.remainSeat>18 ?"grey":"red"}}></td>
              <td className="seat" id="8" style={{backgroundColor: this.props.state.remainSeat>17 ?"grey":"red"}}></td>
              <td className="seat" id="9" style={{backgroundColor: this.props.state.remainSeat>16 ?"grey":"red"}}></td>
              <td className="seat" id="10" style={{backgroundColor: this.props.state.remainSeat>15 ?"grey":"red"}}></td>
            </tr>
            <tr>
              <td className="seat" id="11" style={{backgroundColor: this.props.state.remainSeat>14 ?"grey":"red"}}></td>
              <td className="seat" id="12" style={{backgroundColor: this.props.state.remainSeat>13 ?"grey":"red"}}></td>
              <td className="seat" id="13" style={{backgroundColor: this.props.state.remainSeat>12 ?"grey":"red"}}></td>
              <td className="seat" id="14" style={{backgroundColor: this.props.state.remainSeat>11 ?"grey":"red"}}></td>
              <td className="seat" id="15" style={{backgroundColor: this.props.state.remainSeat>10 ?"grey":"red"}}></td>
            </tr>
            <tr>
              <td className="seat" id="16" style={{backgroundColor: this.props.state.remainSeat>9 ?"grey":"red"}}></td>
              <td className="seat" id="17" style={{backgroundColor: this.props.state.remainSeat>8 ?"grey":"red"}}></td>
              <td className="seat" id="18" style={{backgroundColor: this.props.state.remainSeat>7 ?"grey":"red"}}></td>
              <td className="seat" id="19" style={{backgroundColor: this.props.state.remainSeat>6 ?"grey":"red"}}></td>
              <td className="seat" id="20" style={{backgroundColor: this.props.state.remainSeat>5 ?"grey":"red"}}></td>
            </tr>
            <tr>
              <td className="seat" id="21" style={{backgroundColor: this.props.state.remainSeat>4 ?"grey":"red"}}></td>
              <td className="seat" id="22" style={{backgroundColor: this.props.state.remainSeat>3 ?"grey":"red"}}></td>
              <td className="seat" id="23" style={{backgroundColor: this.props.state.remainSeat>2 ?"grey":"red"}}></td>
              <td className="seat" id="24" style={{backgroundColor: this.props.state.remainSeat>1 ?"grey":"red"}}></td>
              <td className="seat" id="25" style={{backgroundColor: this.props.state.remainSeat>0 ?"grey":"red"}}></td>
            </tr>
          </table>
        </div>
      ):null
    );
  }
}

class WholeSystem extends React.Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      showHomePage: true,
      showAdd:false,
      showDelete: false,
      showAll:false,
      showFreeSeat:false,
      remainSeat: 25
    };
    this.createReservation = this.createReservation.bind(this);
    this.deleteReservation = this.deleteReservation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({
        reservations: reservedList,
      });
    }, 500);
  }

  createReservation(reservation) {
    reservation.id = Math.random().toString(10).substr(10);
    reservation.time = new Date().toString();
    const newReservedList = this.state.reservations.slice();
    newReservedList.push(reservation);
    reservedList = newReservedList;
    const newRemainSeat = this.state.remainSeat - reservation.seatNumber;
    this.setState({
      reservations: newReservedList,
      remainSeat: newRemainSeat
    });
    alert("Your Reservation is successful!!");
  }

  deleteReservation(id) {
    var find = 0;
    for(var i = 0; i < this.state.reservations.length; i++){
      if(this.state.reservations[i].id == id){
        const newReservedList = this.state.reservations.slice();
        newReservedList.splice(i, 1);
        console.log(this.state.reservations[i].seatNumber);
        console.log(this.state.remainSeat);
        const newRemainSeat = parseInt(this.state.remainSeat) + parseInt(this.state.reservations[i].seatNumber);
        this.setState({
          reservations: newReservedList,
          remainSeat: newRemainSeat
        });
        find = 1;
        break;
      }
    }
    if(find == 0){
      alert("There is no such reservation, please select again.");
      return
    }
    alert("The traveller has been removed.");

  }

  handleClick(item){
    if(item == "homepage"){
      this.setState({
        showHomePage: true,
        showAdd:false,
        showDelete: false,
        showAll:false,
        showFreeSeat:false
      })
    }else if(item == "add"){
      this.setState({
        showHomePage: true,
        showAdd:true,
        showDelete: false,
        showAll:false,
        showFreeSeat:false
      })
    }else if(item == "all"){
      this.setState({
        showHomePage: true,
        showAdd:false,
        showDelete: false,
        showAll:true,
        showFreeSeat:false
      })
    }else if(item == "free"){
      this.setState({
        showHomePage: true,
        showAdd:false,
        showDelete: false,
        showAll:false,
        showFreeSeat:true
      })
    }else if(item == "delete"){
      this.setState({
        showHomePage: true,
        showAdd:false,
        showDelete: true,
        showAll:false,
        showFreeSeat:false
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navigator handleClick={this.handleClick}/>
        <DisplayHomepage state = {this.state}/>
        <AddTraveller state = {this.state} createReservation={this.createReservation}/>
        <DeleteTraveller state = {this.state} deleteReservation={this.deleteReservation}/>
        <DisplayTraveller state = {this.state} reservations={this.state.reservations}/>
        <DisplayFreeSeats state = {this.state}/>
      </React.Fragment>
    );
  }
}

const element = <WholeSystem />;
ReactDOM.render(element, document.getElementById('contents'));



