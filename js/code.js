var xml = new XMLHttpRequest();
try{
xml.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var person = JSON.parse(this.responseText);
        document.getElementById("p").innerHTML = person;
    }
}
}
catch(e){
    document.getElementById("p").innerHTML = e;
}
