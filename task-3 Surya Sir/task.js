function loadjson(file,callback) {
 var xhr = new XMLHttpRequest();
 xhr.overrideMimeType("application/json");
 xhr.open("GET",file,true);
 xhr.onreadystatechange=function(){
  if(xhr.readyState === 4 && xhr.status == "200"){
   callback(xhr.responseText);
  }
 };
 xhr.send(null);
}

loadjson("task.json",function(text){
 var data = JSON.parse(text); // serialised data
 console.log(data);
 basic1(data.details);
 basic2(data.details2);
})

var child1 = document.querySelector(".child1");
function basic1(det){

	var image = document.createElement("img");
	image.src="male.svg";
	child1.appendChild(image);

	var name = document.createElement("h4");
	name.textContent = det.name;
	child1.appendChild(name);

	var rollno = document.createElement("h4");
	rollno.textContent = det.rollno;
	child1.appendChild(rollno);

	var st=document.createElement("a");
	st.href ="https://jitendraneerukonda.github.io/Web-Design-using-Reactjs-for-sip/task-1%20Sai%20sir/resume.html";
	st.textContent=det.static;
	child1.appendChild(st);
}

var child2 = document.querySelector(".child2");
function basic2(info1){

	var image = document.createElement("img");
	image.src="male.svg";
	child2.appendChild(image);

	var name = document.createElement("h4");
	name.textContent = info1.name;
	child2.appendChild(name);

	var rollno = document.createElement("h4");
	rollno.textContent = info1.rollno;
	child2.appendChild(rollno);

	var st=document.createElement("a");
	st.href ="https://jitendraneerukonda.github.io/Web-Design-using-Reactjs-for-sip/project/project.html";
	st.textContent=info1.dynamic;
	child2.appendChild(st);

}
