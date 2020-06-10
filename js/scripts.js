// Business Logic:

function translate(input) {
  charArray = input.split("");
  if ((charArray.length === 1) && ((input === "a") || (input === "A") || (input === "i") || (input === "I") || (input === "o") || (input === "O"))) {
    return input + "way";
  } else if ((charArray.length > 1) && ((charArray[0] === "a") || (charArray[0] === "e") || (charArray[0] === "i") || (charArray[0] === "o") || (charArray[0] === "u"))) {
    return input + "way";
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