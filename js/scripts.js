// Business Logic:

function translate(input) {
  const output = input;
  return output;
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