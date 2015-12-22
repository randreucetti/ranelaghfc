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
  var year = getUrlParameter('year');
  var sheet = tabletop.sheets(year);
  var html = '';
  $.each(sheet.all(), function(j, player) {
    if (j % 3 === 0) {
      html += '<div class="row">';
    }
    html += '<div class="col-sm-4">';
    html += '<figure class="profile"><img src="http://lorempixel.com/140/140" class="img-circle img-responsive"/><figcaption class="img-circle">12</figcaption></figure>';
    html += '</div>';
    if (j % 2 === 3) {
      html += '</div>';
    }
  });
  $('#roster').append(html);
}

function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}
