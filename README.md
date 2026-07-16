# React: 19

## Environment 

- React Version: 19
- Node Version: 22(LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/SLPDh9GL6sTlT8jVjPV8iQ/ezgif.com-gif-maker%20(1).gif)

## Functionality Requirements

The component must have the following functionalities:

- Initially, the className for every seat is 'seat'.
- When a user clicks on an unselected seat, it is selected and its className should be 'selected seat'.
- When a user clicks on a selected seat, it is deselected and its class name should revert to 'seat'.
- When a user clicks on the 'Book Seats' button:
- If no seats are selected, it should alert 'Please select at least one seat'.
- Selected seats should be added to a list of booked seats and their class should be 'disabled seat'.
- On clicking the 'Clear' button, all seats that are not booked should be unselected.
- On clicking the 'Reset Bookings' button, the application should go back to the initial state. i.e. All the selected and booked seats should get reset and the className for all seats should be 'seat'.


## Project Specifications

**Read Only Files**
- src/App.test.jsx
- src/App.jsx
- src/App.css
- src/components/TicketBooking.css

**Commands**
- run: 
```bash
bun start
```
- install: 
```bash
bun install
```
- test: 
```bash
bun run test
```
