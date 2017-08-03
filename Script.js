$(document).ready(function(){
    $("#hide").click(function(){
        $("#startpage").fadeOut(1000);
    });
});

var map = AmCharts.makeChart("chartdiv", {
  "type": "map",
  "dataProvider": {
    "map": "worldLow",
    "areas": [{
      "id": "US",
      "modalUrl": "Countries/USA.html",
      "selectable": true
    }, {
      "id": "FR",
      "modalUrl": "Countries/France.html",
      "selectable": true
    }, {
      "id": "CN",
      "modalUrl": "Countries/China.html",
      "selectable": true
    }, {
      "id": "RU",
      "modalUrl": "Countries/Russia.html",
      "selectable": true
    }, {
      "id": "IN",
      "modalUrl": "Countries/India.html",
      "selectable": true
    }, {
      "id": "AU",
      "modalUrl": "Countries/Australia.html",
      "selectable": true
    }
    , {
      "id": "BR",
      "modalUrl": "Countries/Brazil.html",
      "selectable": true
    }
    , {
      "id": "DE",
      "modalUrl": "Countries/Germany.html",
      "selectable": true
    }
    , {
      "id": "SP",
      "modalUrl": "Countries/Spain.html",
      "selectable": true
    }
    , {
      "id": "ZA",
      "modalUrl": "Countries/SouthAfrica.html",
      "selectable": true
    }, {
      "id": "IT",
      "modalUrl": "Countries/Italy.html",
      "selectable": true
    }, {
      "id": "NG",
      "modalUrl": "Countries/Nigeria.html",
      "selectable": true
    }, {
      "id": "IE",
      "modalUrl": "Countries/Ireland.html",
      "selectable": true
    }, {
      "id": "TR",
      "modalUrl": "Countries/Turkey.html",
      "selectable": true
    }, {
      "id": "SA",
      "modalUrl": "Countries/SaudiArabia.html",
      "selectable": true
    }, {
      "id": "IQ",
      "modalUrl": "Countries/Iraq.html",
      "selectable": true
    }, {
      "id": "ET",
      "modalUrl": "Countries/Ethiopia.html",
      "selectable": true
    }, {
      "id": "CA",
      "modalUrl": "Countries/Canada.html",
      "selectable": true
    }, {
      "id": "CO",
      "modalUrl": "Countries/Colombia.html",
      "selectable": true
    }, {
      "id": "CU",
      "modalUrl": "Countries/Cuba.html",
      "selectable": true
    }, {
      "id": "EC",
      "modalUrl": "Countries/Ecuador.html",
      "selectable": true
    }, {
      "id": "DO",
      "modalUrl": "Countries/DominicanRepublic.html",
      "selectable": true
    }, {
      "id": "AR",
      "modalUrl": "Countries/Argentina.html",
      "selectable": true
    }, {
      "id": "VE",
      "modalUrl": "Countries/Venezuela.html",
      "selectable": true
    }, {
      "id": "ES",
      "modalUrl": "Countries/Spain.html",
      "selectable": true
    }, {
      "id": "HN",
      "modalUrl": "Countries/Honduras.html",
      "selectable": true
    }]
  },
  "areasSettings": {
    "autoZoom" : true,
    "color" : "#85DBC4",
    "colorSolid" : "#84ADE9",
    "selectedColor" : "#517A7C",
    "outlineColor" : "#FFF",
    "rollOverColor" : "#517A7C",
    "rollOverOutlineColor" : "#FFF"
  },
  "listeners": [{
    "event": "clickMapObject",
    "method": function(event) {
      $.fancybox({
        "href": event.mapObject.modalUrl,
        "title": event.mapObject.title,
        "type": "iframe"
      });
    }
  }]
});
