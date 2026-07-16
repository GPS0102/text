import React from "react"

import "./TicketBooking.css"
export const TicketBooking = () => {
	const rows = 10
	const cols = 10
	const [bookedSeats, setBookedSeats] = React.useState([])
	const [selectedSeats, setSelectedSeats] = React.useState([])

	// generate grid columns ("auto" repeated `cols` times)
	const seatRowsTimeAuto = Array(cols).fill('auto').join(' ')

	// handle clicking a seat item
	const handleSeatClick = (seatKey) => {
		// if the seat is already booked, do nothing (disabled)
		if (bookedSeats.includes(seatKey)) return

		// toggle selection
		if (selectedSeats.includes(seatKey)) {
			setSelectedSeats(selectedSeats.filter(id => id !== seatKey))
		} else {
			setSelectedSeats([...selectedSeats, seatKey])
		}
	}

	// Handle "book seats"
	const handleBookSeats = () => {
		if (selectedSeats.length === 0) {
			alert("please select at least one seat.")
			return
		}
		// append current selection to booked seats
		setBookedSeats([...bookedSeats, ...selectedSeats])
		setSelectedSeats([])
	}

	// Clear only the current selection
	const handleClearSelection = () => {
		setSelectedSeats([])
	}

	// handle "reset bookings"
	const handleResetBookings = () => {
		setBookedSeats([])
		setSelectedSeats([])
	}

	return (
		<div className="mt-50 layout-column justify-content-center align-items-center">
			<div className="display-flex">
				<button data-testid="book-seats" onClick={handleBookSeats}>Book Seats</button>
				<button data-testid="clear-selection" className="danger" onClick={handleClearSelection}>Clear</button>
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: `${seatRowsTimeAuto}` }}>
				{Array(rows).fill(0).map((_, row) => (
					<div key={row} style={row === 4 ? { marginRight: '40px' } : null}>{
						Array(cols).fill(0).map((_, col) => {
							const seatKey = `${row}${col}`
							const booked = bookedSeats.includes(seatKey)
							const selected = selectedSeats.includes(seatKey)
							return (
								<div
									data-testid={`${row}${col}`}
									className={`seat ${booked ? 'booked' : selected ? 'selected' : ''}`}
									key={seatKey}
									onClick={() => handleSeatClick(seatKey)}
									role="button"
									aria-pressed={selected}
									aria-disabled={booked}
								>
									{`${String.fromCharCode(65 + col)}${row}`}
								</div>
							)
						})
					}</div>
				))}
			</div>
			<br />
			<button data-testid="reset" onClick={handleResetBookings}>Reset Bookings</button>
		</div>
	)
}
