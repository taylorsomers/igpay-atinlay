// Business Logic:

function translate(input) {
  if ((input === "a") || (input === "A") || (input === "e") || (input === "E") || (input === "i") || (input === "I") || (input === "o") || (input === "O") || (input === "u") || (input === "U")) {
    return "1";
  } else {
    return input;
  }
}

// End Business Logic

// UI Logic

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    const toTranslate = $("#user-input").val();
    const pigLatin = translate(toTranslate);

    $("#results").text(pigLatin);
  });
});

// End UI Logic