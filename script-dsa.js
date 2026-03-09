let bookings = []; // CO3: JS Arrays & Objects

// BOOK ROOM
function bookRoom(){
  let name = document.getElementById("name").value; // CO4: DOM manipulation
  let room = document.getElementById("room").value;

  if(name=="" || room==""){ // CO3: JS conditions
    alert("Enter all details");
    return;
  }

  // CO3: Objects in JS
  bookings.push({name:name,room:room}); 
  alert("Room booked successfully!"); // CO4: DOM & Events

  // Clear form fields (CO4: DOM manipulation)
  document.getElementById("name").value = "";
  document.getElementById("room").value = "";
  showBookings(); // Update UI dynamically (CO4)
}

// SHOW BOOKINGS
function showBookings(){
  if(bookings.length==0){
    document.getElementById("output").innerHTML = "No bookings yet."; // CO4
    return;
  }

  let result="";
  for(let i=0;i<bookings.length;i++){ // CO3: Loops
    result += (i+1) + ". " + bookings[i].name + " - " + bookings[i].room + "<br>";
  }

  document.getElementById("output").innerHTML=result; // CO4
}

// SORT BOOKINGS (Bubble Sort by Name)
function sortBookings(){
  for(let i=0;i<bookings.length;i++){ // CO3: Loops
    for(let j=0;j<bookings.length-i-1;j++){
      if(bookings[j].name.toLowerCase() > bookings[j+1].name.toLowerCase()){ // CO3: JS Strings & Comparison
        let temp=bookings[j];
        bookings[j]=bookings[j+1];
        bookings[j+1]=temp;
      }
    }
  }
  showBookings(); // CO4: Update DOM
}

// SEARCH BOOKING (Linear Search)
function searchBooking(){
  let key=document.getElementById("searchName").value.toLowerCase(); // CO4: User input
  let found=false;

  for(let i=0;i<bookings.length;i++){ // CO3: Loops
    if(bookings[i].name.toLowerCase()==key){ // CO3: String methods
      document.getElementById("output").innerHTML=
      "Booking Found: " + bookings[i].name + " - " + bookings[i].room; // CO4
      found=true;
      break;
    }
  }

  if(!found){
    document.getElementById("output").innerHTML="Booking Not Found"; // CO4
  }
} 
