// Event data
let events = [
  { name: 'Workshop on AI', date: '2024-10-30', description: 'An introductory workshop on Artificial Intelligence.', image: '' },
  { name: 'Music Fest', date: '2024-11-15', description: 'A grand celebration of music and performances.', image: '' }
];

// Function to display events
function displayEvents() {
  const eventList = document.getElementById('event-list');
  eventList.innerHTML = '';

  events.forEach((event, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<img src="${event.image}" alt="Event Image"> ${event.name} - ${event.date} 
      <button onclick="deleteEvent(${index})">Delete</button>`;
    li.onclick = () => viewEventDetails(index);
    eventList.appendChild(li);
  });
}

// Function to show the form to add a new event
function showAddEventForm() {
  document.getElementById('add-event-form').style.display = 'block';
}

// Function to hide the add event form
function hideAddEventForm() {
  document.getElementById('add-event-form').style.display = 'none';
}

// Function to add a new event
document.getElementById('eventForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const eventName = document.getElementById('eventName').value;
  const eventDate = document.getElementById('eventDate').value;
  const eventVenue = document.getElementById('eventVenue').value;  // Get venue input
  const eventDescription = document.getElementById('eventDescription').value;
  const eventImage = document.getElementById('eventImage').files[0];

  // Read the uploaded image file
  const reader = new FileReader();
  reader.onload = function(event) {
    const imageUrl = event.target.result;
    
    events.push({ 
      name: eventName, 
      date: eventDate, 
      time: eventTime,
      venue: eventVenue,  // Add venue to the event object
      description: eventDescription, 
      image: imageUrl 
    });
    displayEvents();
    hideAddEventForm();
  };
  reader.readAsDataURL(eventImage);
});

// Function to display events
function displayEvents() {
  const eventList = document.getElementById('event-list');
  eventList.innerHTML = '';

  events.forEach((event, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${event.image}" alt="Event Image"> 
      <strong>${event.name}</strong> - ${event.date} 
      <br>Venue: ${event.venue} <!-- Display venue -->
      <button onclick="deleteEvent(${index})">Delete</button>`;
    li.onclick = () => viewEventDetails(index);
    eventList.appendChild(li);
  });
}


// Function to delete an event
function deleteEvent(index) {
  events.splice(index, 1);
  displayEvents();
}

// Function to view event details
function viewEventDetails(index) {
  const event = events[index];

  document.getElementById('modalEventName').textContent = event.name;
  document.getElementById('modalEventDate').textContent = `Date: ${event.date}`;
  document.getElementById('modalEventDescription').textContent = event.description;
  document.getElementById('modalEventImage').src = event.image;

  document.getElementById('eventDetailsModal').style.display = 'block';
}

// Function to close event details
function closeEventDetails() {
  document.getElementById('eventDetailsModal').style.display = 'none';
}

// Function to register for an event
function registerForEvent() {
  window.open("eventregistration.html", "_blank");
}

// Display initial events
displayEvents();