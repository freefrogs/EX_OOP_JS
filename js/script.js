$(function () {
  var url = 'https://restcountries.eu/rest/v2/name/';
  var countriesList = $('#countries');

  $('#search').click(searchCountries);

  function searchCountries() {
    var countryName = $('#country-name').val();

    if(!countryName.length) countryName = 'Poland';

    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
  }

  function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
      var code = item.alpha3Code.toLowerCase();
      var flag = 'https://restcountries.eu/data/' + code + '.svg';

      $('<li>').addClass(code).css('background', 'rgba(255,255,255,0.5)').appendTo(countriesList);
      var className = '.'+ code;
      $('<img>').attr('src', flag).appendTo(className);
      $('<h3>').text(item.name).appendTo(className);
      $('<p>').text('Background information:').addClass('info').appendTo(className);
      $('<p>').text('Capital: ' + item.capital).addClass('data').appendTo(className);
      $('<p>').text('Land area: ' + item.area + ' sq. km').addClass('data').appendTo(className);
      $('<p>').text('Population: ' + item.population).addClass('data').appendTo(className);
      $('<p>').text('Language(s): ' + item.languages[0].name).addClass('data').appendTo(className);
      $('<p>').text('Currency: ' + item.currencies[0].name + ', symbol: ' + item.currencies[0].symbol).addClass('data').appendTo(className);
      $('<p>').text('Borders: ' + item.borders).addClass('data').appendTo(className);
    });
  }
});