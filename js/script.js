// hamma studentlarni yig'ish uchun array
let allStudents = [];

let selectedIndex = -1;

function addStudent() {
   let studentName = document.getElementById("student-name").value;
   let studentSurname = document.getElementById("student-surname").value;
   let studentBirthday = document.getElementById("student-birthday").value;
   let studentStudy = document.getElementById("student-study").value;



    document.getElementById("student-name").value = "";
    document.getElementById("student-surname").value = "";
    document.getElementById("student-birthday").value = "";
    document.getElementById("student-study").value = "";



   // alert(studentName );
   // alert(studentSurname );
   // alert(studentBirthday);
   // alert(studentStudy );


   let newstudent = {
      name:studentName,
      surname:studentSurname,
      birthday:studentBirthday,
      study:studentStudy,
   };

   if (selectedIndex>=0){
      allStudents[selectedIndex] = newstudent;
      selectedIndex = -1;

   }else{
      allStudents.push(newstudent);

   }


    console.log(allStudents);

    drawTable();

}

function drawTable() {
   let natija = "";

   for (let i = 0; i < allStudents.length; i++) {
      natija += `
                    <tr>
                      <td>${i + 1}</td>
                      <td>${allStudents[i].name} ${allStudents[i].surname}</td>
<!--                      <td>${allStudents[i].surname}</td>-->
                      <td>${allStudents[i].birthday}</td>
                      <td>${allStudents[i].study}</td>
                      <td><button class="btn btn-primary" onclick="editStudent(${i})">Edit</button></td>
                      <td><button class="btn btn-danger" onclick="deletestudent(${i})">Delete</button></td>
                    </tr>
                 `
   }

   document.getElementById("result").innerHTML = natija;
}




// Delete uchun funksiya

function deletestudent(index) {
   allStudents.splice(index,1);
   drawTable();
}

// Edit uchun funksiya
function editStudent(index) {
   document.getElementById("student-name").value = allStudents[index].name;
   document.getElementById("student-surname").value = allStudents[index].surname;
   document.getElementById("student-birthday").value = allStudents[index].birthday;
   document.getElementById("student-study").value = allStudents[index].study;

   selectedIndex = index;
}






























































































































































