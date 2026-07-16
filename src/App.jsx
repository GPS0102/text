import './App.css';
import { AppHeader } from "./components/AppHeader";
import { TicketBooking } from './components/TicketBooking';
const title = "Ticket Booking";

const App = () => {
    return (
        <div className="App">
			<AppHeader title={title} />
			<TicketBooking />
        </div>
    );
}

export default App;
