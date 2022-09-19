
 document.getElementById('import').onclick = function() {
	var files = document.getElementById('selectFiles').files;
  console.log(files);
  if (files.length <= 0) {
    return false;
  }
  
  var fr = new FileReader();
  
  fr.onload = function(e) { 
  console.log(e);
    var res = JSON.parse(e.target.result);
    var formatted = JSON.stringify(res, null, 2);
		document.getElementById('res').value = formatted;
  }
  
  fr.readAsText(files.item(0));
};
 

