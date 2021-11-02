
var host = "localhost";
var ping = 3000;
function ToPage(page){
	console.log(page);
	if(page == 'index') {location.replace(`http://${host}:${ping}`); return;}
	location.replace(`http://${host}:${ping}/page/${page}.html`);
}