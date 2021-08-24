

var firebaseConfig = {
      apiKey: "AIzaSyASHbHc5qLfxwRP-4p01pzcL5HW4oUMAxg",
      authDomain: "classtest-28417.firebaseapp.com",
      projectId: "classtest-28417",
      storageBucket: "classtest-28417.appspot.com",
      messagingSenderId: "362058957132",
      appId: "1:362058957132:web:2fbd9122197075c439cfe9"
    };

    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send()
    {
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0     
     })
     document.getElementById("msg").value ="";    
  
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       //Start Code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id= "+Room_names+"onclick='redirectToRoomName(this.id)' >#"+"</div><hr>";
       document.getElementById("output").innerHTML += row;
       //End Code
      });});}
getData();
function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"      
});

localStorage.setItem("room_name", room_name );

window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";      
}

function logout(){
localStorage.removeItem("user_name");   
localStorage.removeItem("room_name");
window.location = "kwitter.html";     
}
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 