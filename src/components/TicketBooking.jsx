import React from "react"

import "./TicketBooking.css"
export const TicketBooking = () => {
	const rows = 10
	const cols = 10
	const [boookedSeats, setBookedSeats] = React.useState([])
	const [selectedSeats, setSelectedSeats] = React.useState([])

	let seatRowsTimeAuto = ""
	for (let i = 0; i <= cols; i++) {
		seatRowsTimeAuto += 'auto '
	}
	return (
		<div className="mt-50 layout-column justify-content-center align-items-center">
			<div className="display-flex">
			<button data-testid="book-seats">Book Seats</button>
				<button data-testid="clear-selection" className="danger">Clear</button>
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: `${seatRowsTimeAuto}` }}>
				{Array(rows).fill(0).map((_, row) => (
					<div key={row} style={row === 4 ? { marginRight: '40px' } : null}>{
						Array(cols).fill(0).map((_, col) =>
							<div data-testid={`${row}${col}`} className="seat" key={`${row}${col}`}>{`${String.fromCharCode(65 + col)}${row}`}</div>
						)
					}</div>
				))}
			</div>
			<br />
			<button data-testid="reset">Reset Bookings</button>
		</div>
	)
}