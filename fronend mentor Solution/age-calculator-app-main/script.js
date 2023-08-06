// Get input elements
const dateInput = document.getElementById("date");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

// Get output elements
const dateYear = document.getElementById("date-year");
const dateMonth = document.getElementById("date-month");
const dateDay = document.getElementById("date-day");

// Listen for submit button click
document.getElementById("submitButton").addEventListener("click", function (e) {
  e.preventDefault();

  //error text hidden
  const ErrorDay = (document.getElementById("errorday").textContent = " ");
  const ErrorMonth = (document.getElementById("errormonth").textContent = " ");
  const ErrorYear = (document.getElementById("erroryear").textContent = " ");

  // reset border text ref 97

  var borders = document.getElementsByClassName("dateborder");
  for (var i = 0; i < borders.length; i++) {
    borders[i].style.border = "1px solid rgb(0, 0, 0)";
    console.log(97);
  }

  // Get input values and converting them to integers or else they zero.
  const inputDay = parseInt(dateInput.value, 10) || 0;
  const inputMonth = parseInt(monthInput.value, 10) || 0;
  const inputYear = parseInt(yearInput.value, 10) || 0;
  /////////////////
  // Validate input
  // ...

  // // Calculate date difference
  // const currentDate = new Date();
  // const inputDate = new Date(

  //   currentDate.getFullYear() - inputYear,   /////Horrible code , waste my whole day.
  //   currentDate.getMonth() - inputMonth,
  //   currentDate.getDate() - inputDay
  // );
  /////////////////////////////////

  // Calculate date difference
  const currentDate = new Date();
  const inputDate = new Date(inputYear, inputMonth - 1, inputDay);

  //////////////////////////////
  // check if the input date is same as  current date , if yes then convert it to zero
  if (inputDate === currentDate) {
    dateYear = 0;
    dateMonth = 0;
    dateDay = 0;
  }
  //////////////////

  if (inputYear <= 999) {
    var errorYearElement = document.getElementById("erroryear");
    errorYearElement.style.display = "block";
    errorYearElement.textContent = "Invalid";
    borderred();
    return;
  }

  // class validation

  if (inputDay > 31) {
    var errorDayElement = document.getElementById("errorday");

    errorDayElement.style.display = "block";
    errorDayElement.textContent = "Invalid";
    borderred();
    return;
  }

  if (inputMonth > 12) {
    var errorMonthElement = document.getElementById("errormonth");
    errorMonthElement.style.display = "block";
    errorMonthElement.textContent = "Invalid";
    borderred();
    return;
  }

  ///////////////////////

  // class errortext id error####

  if (inputDate > currentDate) {
    var elements = document.getElementsByClassName("errortext");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.opacity = "1"; // Replace "0.5" with the desired opacity value
    }
    document.getElementById("errorday").textContent = "Use past ";
    document.getElementById("errormonth").textContent = "Use past";
    document.getElementById("erroryear").textContent = "Use past";
    borderred();
    return;
  }

  ////////////////////////////
  function borderred() {
    if (document.getElementById("erroryear").textContent !== undefined) {
      var borders = document.getElementsByClassName("dateborder");
      for (var i = 0; i < borders.length; i++) {
        borders[i].style.border = "1px solid rgb(255, 0, 0)";
      }
    }
  }

  ///////////////////////

  const diffInMs = currentDate - inputDate;

  const years = Math.floor(diffInMs / (365.25 * 24 * 60 * 60 * 1000));
  const months = Math.floor(
    (diffInMs % (365.25 * 24 * 60 * 60 * 1000)) /
      (30.436875 * 24 * 60 * 60 * 1000)
  );
  const days = Math.floor(
    (diffInMs % (30.436875 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );

  // Update output
  dateYear.textContent = years;
  dateMonth.textContent = months;
  dateDay.textContent = days;

  ////////

  ///////
});
