function alert_name() {
  //create name varible
  var name = "Anahi";
  alert("My name is " + name)
  console.log("")
}

function change_image() {
  var image = document.getElementById('dog_pic');
  image.src = "Ladybird.jpg";

}

function increase_size() {
  var image= document.getElementById('dog_pic');
  image.style.width = "800px"
}
