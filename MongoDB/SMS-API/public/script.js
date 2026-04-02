const API = "http://localhost:3000/api/students";

// Add Students
function addStudent(){
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;

    if(!name || !age || !course){
        alert("Fill all fields");
        return;
    }

    fetch(API,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, age, course})
    })
    .then(res => res.json())
    .then(data => {
        alert("Student Added");
        getStudents();
    })
    .catch(err => {
        console.error(err);
        alert("Error adding student");
    });
}

// Get Students
function getStudents(){
    fetch(API)
    .then(res=>res.json())
    .then(data=>{
        const list = document.getElementById("students");
        list.innerHTML = "";
        data.forEach(student => {
            const li = document.createElement("li");
            li.innerHTML = `
            ${student.name} - ${student.age} - ${student.course}
            <button onclick="deleteStudent('${student._id}')">Delete</button>
            `;
            list.appendChild(li);
        });
    });
}

//Hide Students List
function toggleStudents(){
    const list = document.getElementById("students");
    const btn = document.getElementById("toggleBtn");

    if(list.style.display === "none" || list.style.display === ""){
        getStudents();
        list.style.display = "block";
        btn.innerText = "Hide Students List";
    } else {
        list.style.display = "none";
        btn.innerText = "Get Students List";
    }
}

// Delete Student
function deleteStudent(id){
    fetch(API + "/" + id,{
        method: "DELETE"
    })
    .then(res=>res.json())
    .then(()=>{
        getStudents();
    });
}

