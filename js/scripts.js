if(checkGeoSupported()){
	//alert("welcome!");
	//取得位置
	//getPosition();
	//var startLat = document.getElementById('startLat').innerHTML;
	//var startLon = document.getElementById('startLon').innerHTML;
	
	//台北車站座標為起點
	var startLat = document.getElementById('tpstationLat').value;
	var startLon = document.getElementById('tpstationLon').value;

}else{
	alert("plz use other interface to use this app!");
	console.log('Geolocation is not supported for this Browser/OS version yet.');
}

function checkGeoSupported(){
	// check for Geolocation API support
	return navigator.geolocation;
}

function getPosition() {
  var startPos;
  var geoSuccess = function(position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
};