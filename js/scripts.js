//Business logic:

function Ticket(movieName, time, age) {
  this.movieName = movieName;
  this.time = time;
  this.age = age;
}


//User interface logic:

$(document).ready(function() {

  $("form#movies").submit(function(event) {
    event.preventDefault();
debugger;
    var question1 = $("select#movieSelection").val();
    var question2 = $("select#movieTime").val();
    var question3 = $("select#movieAge").val();

    $("#showtime").text(question2);

    $("#results").show();

    var newTicket = new Ticket(question1, question2, question3);

    var moviePrice = 0;

    if (newTicket.time === "12:00PM") {
      moviePrice += 10
    } else if (newTicket.time === "7:00PM") {
      moviePrice += 15
    }

    if (newTicket.age === "yes") {
      moviePrice -=5
    }

    $("#showtimePrice").text(moviePrice);



    if (newTicket.movieName === "blackPanther") {
      $("#movieImageBlackPanther").show();
    } else if (newTicket.movieName === "thor") {
      $("#movieImageThor").show();
    } else if (newTicket.movieName === "inception") {
      $("#movieImageInception").show();
    }
  });
});
