// =============================
// Greeting
// =============================
const greeting = document.getElementById("greeting");

let hour = new Date().getHours();

if (hour < 12) {
    greeting.innerHTML = "Good Morning ☀️";
}
else if (hour < 18) {
    greeting.innerHTML = "Good Afternoon 🌤️";
}
else {
    greeting.innerHTML = "Good Evening 🌙";
}

// =============================
// Current Date
// =============================
const todayDate = document.getElementById("todayDate");

todayDate.innerHTML = new Date().toDateString();

// =============================
// Live Clock
// =============================

function updateClock() {

    const clock = document.getElementById("clock");

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);

updateClock();

// =============================
// Quotes
// =============================

const quotes = [

"Success is the sum of small efforts.",

"Study now, shine later.",

"Never stop learning.",

"Dream big and work hard.",

"Believe in yourself."

];

document.getElementById("quote").innerHTML =
quotes[Math.floor(Math.random()*quotes.length)];


// =============================
// Dark Mode
// =============================

const themeBtn = document.getElementById("themeToggle");

themeBtn.onclick = function(){

document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark")
);

}

if(localStorage.getItem("theme")=="true"){

document.body.classList.add("dark");

}


// =============================
// Scroll Top Button
// =============================

const scrollBtn=document.getElementById("scrollTopBtn");

window.onscroll=function(){

if(window.scrollY>300){

scrollBtn.style.display="block";

}
else{

scrollBtn.style.display="none";

}

}

scrollBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// =============================
// Loader
// =============================

window.onload=function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

},1000);

}

// =============================
// TO DO LIST
// =============================

let tasks=JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks));

}

function showTasks(){

const container=document.getElementById("todoContainer");

container.innerHTML="";

if(tasks.length==0){

container.innerHTML="<p>No Tasks</p>";

}

tasks.forEach(function(task,index){

let div=document.createElement("div");

div.className="list-item";

div.innerHTML=`

<span style="text-decoration:${task.completed?"line-through":"none"}">

${task.text}

</span>

<div class="actions">

<button onclick="completeTask(${index})">✔</button>

<button onclick="deleteTask(${index})">🗑</button>

</div>

`;

container.appendChild(div);

});

updateProgress();

}

document.getElementById("addTask").onclick=function(){

const input=document.getElementById("taskInput");

if(input.value=="") return;

tasks.push({

text:input.value,

completed:false

});

input.value="";

saveTasks();

showTasks();

}

function completeTask(index){

tasks[index].completed=!tasks[index].completed;

saveTasks();

showTasks();

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();

showTasks();

}

// =============================
// TIMETABLE
// =============================

let timetable=JSON.parse(localStorage.getItem("table")) || [];

function saveTable(){

localStorage.setItem("table",JSON.stringify(timetable));

}

function showTable(){

const container=document.getElementById("timetableContainer");

container.innerHTML="";

if(timetable.length==0){

container.innerHTML="<p>No Timetable</p>";

}

timetable.forEach(function(item,index){

let div=document.createElement("div");

div.className="list-item";

div.innerHTML=`

<span>

${item.subject}

(${item.start} - ${item.end})

</span>

<button onclick="deleteTable(${index})">

🗑

</button>

`;

container.appendChild(div);

});

}

document.getElementById("addTimetable").onclick=function(){

let subject=document.getElementById("subject").value;

let start=document.getElementById("startTime").value;

let end=document.getElementById("endTime").value;

if(subject=="") return;

timetable.push({

subject:subject,

start:start,

end:end

});

document.getElementById("subject").value="";

saveTable();

showTable();

}

function deleteTable(index){

timetable.splice(index,1);

saveTable();

showTable();

}

// =============================
// NOTES
// =============================

let notes=JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes(){

localStorage.setItem("notes",JSON.stringify(notes));

}

function showNotes(){

const container=document.getElementById("notesContainer");

container.innerHTML="";

if(notes.length==0){

container.innerHTML="<p>No Notes</p>";

}

notes.forEach(function(note,index){

let div=document.createElement("div");

div.className="note-card";

div.innerHTML=`

<p>${note}</p>

<button onclick="deleteNote(${index})">

Delete

</button>

`;

container.appendChild(div);

});

}

document.getElementById("saveNote").onclick=function(){

let text=document.getElementById("noteText").value;

if(text=="") return;

notes.push(text);

document.getElementById("noteText").value="";

saveNotes();

showNotes();

}

function deleteNote(index){

notes.splice(index,1);

saveNotes();

showNotes();

}

// =============================
// SIMPLE CALENDAR
// =============================

const grid=document.getElementById("calendarGrid");

const monthYear=document.getElementById("monthYear");

let current=new Date();

function createCalendar(){

grid.innerHTML="";

let year=current.getFullYear();

let month=current.getMonth();

monthYear.innerHTML=current.toLocaleString("default",{

month:"long",

year:"numeric"

});

let first=new Date(year,month,1).getDay();

let days=new Date(year,month+1,0).getDate();

for(let i=0;i<first;i++){

let blank=document.createElement("div");

grid.appendChild(blank);

}

for(let i=1;i<=days;i++){

let day=document.createElement("div");

day.className="day";

day.innerHTML=i;

if(i==new Date().getDate() &&

month==new Date().getMonth() &&

year==new Date().getFullYear()){

day.classList.add("today");

}

grid.appendChild(day);

}

}

document.getElementById("prevMonth").onclick=function(){

current.setMonth(current.getMonth()-1);

createCalendar();

}

document.getElementById("nextMonth").onclick=function(){

current.setMonth(current.getMonth()+1);

createCalendar();

}

// =============================
// Progress
// =============================

function updateProgress(){

let total=tasks.length;

let completed=tasks.filter(t=>t.completed).length;

let pending=total-completed;

document.getElementById("totalTasks").innerHTML=total;

document.getElementById("completedTasks").innerHTML=completed;

document.getElementById("pendingTasks").innerHTML=pending;

document.getElementById("progressTotal").innerHTML=total;

document.getElementById("progressCompleted").innerHTML=completed;

document.getElementById("progressPending").innerHTML=pending;

let percent=0;

if(total>0){

percent=Math.round((completed/total)*100);

}

document.getElementById("progressPercent").innerHTML=percent+"%";

document.getElementById("progressFill").style.width=percent+"%";

}

// =============================
// Pomodoro Timer
// =============================

let seconds=1500;

let timer;

function displayTime(){

let m=Math.floor(seconds/60);

let s=seconds%60;

document.getElementById("timerDisplay").innerHTML=

String(m).padStart(2,"0")+":"+

String(s).padStart(2,"0");

}

displayTime();

document.getElementById("startTimer").onclick=function(){

clearInterval(timer);

timer=setInterval(function(){

if(seconds>0){

seconds--;

displayTime();

}else{

clearInterval(timer);

alert("Time's Up!");

}

},1000);

}

document.getElementById("pauseTimer").onclick=function(){

clearInterval(timer);

}

document.getElementById("resumeTimer").onclick=function(){

document.getElementById("startTimer").click();

}

document.getElementById("resetTimer").onclick=function(){

clearInterval(timer);

let custom=document.getElementById("customMinutes").value;

seconds=(custom?custom:25)*60;

displayTime();

}

// =============================
// Initial Load
// =============================

showTasks();

showTable();

showNotes();

createCalendar();

updateProgress();