var userId = 1;

var xhr = new XMLHttpRequest();

xhr.open('GET',  'https://jsonplaceholder.typicode.com/users/' + userId ,true);

xhr.onreadystatechange = function(){
  if(xhr.readyState === XMLHttpRequest.DONE){
    if(xhr.status ===200){
      console.log(xhr.responseText);
    }
    else{
      console.log('la requte a echoué avec le state : ' + xhr.status);
    }
  }
}
xhr.send();