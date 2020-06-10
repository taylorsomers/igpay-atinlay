// Business Logic:

function translate(input) {
  charArray = input.split("");
  if ((charArray.length === 1) && ((input === "a") || (input === "A") || (input === "i") || (input === "I") || (input === "o") || (input === "O"))) {
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