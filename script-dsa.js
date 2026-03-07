// Array to store bookings
let bookings = [];

// BOOK ROOM
function bookRoom(){
  let name = document.getElementById("name").value;
  let room = document.getElementById("room").value;

  if(name=="" || room==""){
    alert("Enter all details");
    return;
  }

  // add booking object
  bookings.push({name:name,room:room});
  alert("Room booked successfully!");

  document.getElementById("name").value = "";
  document.getElementById("room").value = "";
  showBookings();
}

// SHOW BOOKINGS
function showBookings(){
  if(bookings.length==0){
    document.getElementById("output").innerHTML = "No bookings yet.";
    return;
  }

  let result="";
  for(let i=0;i<bookings.length;i++){
    result += (i+1) + ". " + bookings[i].name + " - " + bookings[i].room + "<br>";
  }

  document.getElementById("output").innerHTML=result;
}

// SORT BOOKINGS (Bubble Sort by Name)
function sortBookings(){
  for(let i=0;i<bookings.length;i++){
    for(let j=0;j<bookings.length-i-1;j++){
      if(bookings[j].name.toLowerCase() > bookings[j+1].name.toLowerCase()){
        let temp=bookings[j];
        bookings[j]=bookings[j+1];
        bookings[j+1]=temp;
      }
    }
  }
  showBookings();
}

// SEARCH BOOKING (Linear Search)
function searchBooking(){
  let key=document.getElementById("searchName").value.toLowerCase();
  let found=false;

  for(let i=0;i<bookings.length;i++){
    if(bookings[i].name.toLowerCase()==key){
      document.getElementById("output").innerHTML=
      "Booking Found: " + bookings[i].name + " - " + bookings[i].room;
      found=true;
      break;
    }
  }

  if(!found){
    document.getElementById("output").innerHTML="Booking Not Found";
  }
}