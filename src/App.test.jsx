import { vi } from "vitest";
import App from './App';
import { render, cleanup, fireEvent } from '@testing-library/react';



const renderApp = () => render(<App />);
const ROWS = 10, COLS = 10;
const TEST_IDS = {
	BOOK_SEATS: 'book-seats',
	CLEAR_SELECTION: 'reset',
	SEAT: 'seat',
	SELECTED_SEAT: 'selected-seat',
	DISABLED_SEAT: 'disabled-seat',
};
afterEach(() => {
	cleanup()
});

let app, getByTestId, queryByTestId;

beforeEach(() => {
	app = render(<App />)
	getByTestId = app.getByTestId;
	queryByTestId = app.queryByTestId;
})

it('Select seat on clicking once, deselct seat on clicking twice', () => {
	let seat = getByTestId('00');
	expect(seat).toBeInTheDocument();
	expect(seat.className).toBe('seat')
	fireEvent.click(seat);
	expect(seat.className).toBe('selected seat')
})

it('Checks for Alert when no seats are selected', () => {
	const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => undefined);
	let submitButton = getByTestId(TEST_IDS.BOOK_SEATS);
	fireEvent.click(submitButton);

	expect(alertMock).toHaveBeenCalledWith('Please select at least one seat');

})


it('Select a seat and book it', () => {
	let seat = getByTestId('01');
	expect(seat).toBeInTheDocument();
	expect(seat.className).toBe('seat')
	fireEvent.click(seat);
	expect(seat.className).toBe('selected seat')
	let bookButton = getByTestId(TEST_IDS.BOOK_SEATS);
	fireEvent.click(bookButton);
	expect(seat.className).toBe('disabled seat')
	fireEvent.click(seat);
	expect(seat.className).toBe('disabled seat')
})

it('Select multiple seats and book them', () => {
	const selectedSeats = ['00', '94', '36', '72', '83', '79'];
	for (let s in selectedSeats) {
		let seat = getByTestId(selectedSeats[s]);
		expect(seat).toBeInTheDocument();
		expect(seat.className).toBe('seat')
		fireEvent.click(seat);
		expect(seat.className).toBe('selected seat')
	}
	const submitButton = getByTestId(TEST_IDS.BOOK_SEATS);
	fireEvent.click(submitButton)
	for (let s in selectedSeats) {
		let seat = getByTestId(selectedSeats[s]);
		expect(seat.className).toBe('disabled seat')
	}
})

it('Check clearing of booked seats on clicking the clear button', () => {
	const selectedSeats = ['00', '94', '36', '72', '83', '79'];
	for (let s in selectedSeats) {
		let seat = getByTestId(selectedSeats[s]);
		expect(seat).toBeInTheDocument();
		expect(seat.className).toBe('seat')
		fireEvent.click(seat);
		expect(seat.className).toBe('selected seat')
	}
	const selectButton = getByTestId(TEST_IDS.BOOK_SEATS);
	fireEvent.click(selectButton)
	for (let s in selectedSeats) {
		let seat = getByTestId(selectedSeats[s]);
		expect(seat.className).toBe('disabled seat')
	}
	const clearButton = getByTestId(TEST_IDS.CLEAR_SELECTION);
	fireEvent.click(clearButton)
	for (let s in selectedSeats) {
		let seat = getByTestId(selectedSeats[s]);
		expect(seat.className).toBe('seat')
	}
})

it('Check Reset booking also resets selected seats', () => {
	const selectedSeats = ['00', '94', '36', '72', '83', '79'];
	for (let s in selectedSeats) {
		let seat = getByTestId(selectedSeats[s]);
		expect(seat).toBeInTheDocument();
		expect(seat.className).toBe('seat')
		fireEvent.click(seat);
		expect(seat.className).toBe('selected seat')
	}
	const resetButton = getByTestId(TEST_IDS.CLEAR_SELECTION);
	fireEvent.click(resetButton)
	for (let s in selectedSeats) {
		let seat = getByTestId(selectedSeats[s]);
		expect(seat.className).toBe('seat')
	}
})