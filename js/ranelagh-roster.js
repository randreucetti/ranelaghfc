var SPREADSHEET_ID = "1cvKvSFPUZf7OKCounWl0IJJrFUUOuv8oLfraPjschLY";
var years;
var tabletop;
$(document).ready(function() {
  Tabletop.init({
    key: SPREADSHEET_ID,
    callback: setTabletopVars,
    simpleSheet: true
  });
});

function setTabletopVars(data, tabletop) {
  var years = tabletop.model_names.sort().reverse();
  for (var i = 0; i < years.length; i++) {
    $('#rosterDropdown').append('<li><a href="/roster/' + years[i] + '">' + years[i] + '</a></li>');
  }
}
