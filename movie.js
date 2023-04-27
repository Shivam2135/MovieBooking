// Initialize booking array
let bookings = [];

// Function to book a ticket
function bookTicket(event) {
  event.preventDefault();
  const form = event.target;
  const movie = form.elements.movie.value;
  const date = form.elements.date.value;
  const time = form.elements.time.value;
  const booking = { id: bookings.length + 1, movie, date, time };
  bookings.push(booking);
  const status = document.getElementById("booking-status");
  status.innerHTML = `Booking successful! Your booking ID is ${booking.id}.`;
  form.reset();
}

// Function to cancel a ticket
function cancelTicket(event) {
  event.preventDefault();
  const form = event.target;
  const bookingId = form.elements["booking-id"].value;
  const index = bookings.findIndex((booking) => booking.id == bookingId);
  if (index === -1) {
    const status = document.getElementById("cancellation-status");
    status.innerHTML = `Booking with ID ${bookingId} not found.`;
  } else {
    bookings.splice(index, 1);
    const status = document.getElementById("cancellation-status");
    status.innerHTML = `Booking with ID ${bookingId} has been cancelled.`;
    form.reset();
  }
}

// Add event listeners
const bookingForm = document.getElementById("booking-form");
bookingForm.addEventListener("submit", bookTicket);
const cancellationForm = document.getElementById("cancellation-form");
cancellationForm.addEventListener("submit", cancelTicket);

function validateBookingForm() {
    // Get the input values
    const movie = document.getElementById("movie").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
  
    // Check if any input field is empty
    if (movie === "" || date === "" || time === "") {
      alert("Please fill in all fields");
      return false;
    }
}