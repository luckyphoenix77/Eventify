let eventName = document.getElementById("event");
let date = document.getElementById('date');
let location1 = document.getElementById('location');
function Event(){
  let parent = document.createElement('div');
  document.body.append(parent);
  let peru = document.createElement('h1');
  peru.innerHTML = eventName.value;
  console.log(peru)
  parent.append(peru);
  console.log(peru);
  let dat = document.createElement('p');
  dat.innerHTML = date.value;
  parent.append(dat);
  let loc = document.createElement('p');
  loc.innerHTML = location1.value;
  parent.append(loc);
}