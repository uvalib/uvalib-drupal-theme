(function ($) {
	"use strict";

	var options = { weekday: "long", month: "long", day: "numeric" };
	var prnDt = " " + new Date().toLocaleDateString("en-us", options);
	$("#homehoursdate").html(prnDt);
})(jQuery);

/*{ 
  EVENTS STYLING FOR DATE
  <div>
    <span id="homehoursMon"></span><br>
    <span id="homehoursDay"></span><br> 
    <span id="homehoursWeekDay"></span>
</div>


(function ($) {
	"use strict";
	var optionswkday = { weekday: "short" };
	var optionsmonth = { month: "short" };
	var optionsday = { day: "numeric" };
	var prnDay = " " + new Date().toLocaleDateString("en-us", optionsday);
	var prnMon = " " + new Date().toLocaleDateString("en-us", optionsmonth);
	var prnWkDay = " " + new Date().toLocaleDateString("en-us", optionswkday);
	$("#homehoursDay").html(prnDay);
	$("#homehoursMon").html(prnMon);
	$("#homehoursWeekDay").html(prnWkDay);
})(jQuery); }*/
