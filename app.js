// var database = firebase.database();
// var USER_ID = window.location.search.match(/\?id=(.*)/)[1];
//
// $(document).ready(function() {
//   $('.title-splash').delay('1000').fadeIn('slow');
//   $('.gif-splash').delay('2000').fadeIn('slow');
//   $('.splash-content').delay('5000').fadeOut('slow');
//   $('.splash').delay('6000').fadeOut('slow');
//
//   getTasksFromDB();
//   $(".btnSumPoints").click(addTasksClick);
// });
//
// function addTasksClick(event) {
//   event.preventDefault();
//   var newTask = $("#points").val();
//   var taskFromDB = addTaskToDB(newTask);
// }
//
// function addTaskToDB(text) {
//   return database.ref("points/" + USER_ID).set({
//     sumPoints: text
//   });
// }
//
// function getTasksFromDB() {
//   debugger
//   database.ref("points/" + USER_ID).once('value')
//   .then(function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       var childKey = childSnapshot.key;
//       var childData = childSnapshot.val();
//       console.log(childData.sumPoints);
//     $(".retorno").(childData.sumPoints);
//     });
//   });
// }
// function returnItem(text, key) {
//   $(".retorno").text(text);
// }
//
//
// //barra de xp
// const levelOne = 30;
// const levelTwo = 50;
// const levelThree = 70;
// const levelFour = 100;
// function levelPoints (totalPoints){
//   var levelAtual = 0;
//   var changeLevel = $("#levelNivel");
//   if (totalPoints >= levelOne){
//     changeLevel.html("1");
//   }
// }

var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];
<<<<<<< HEAD

var points = 0; //valor do banco de dados
$(".total-points").text(points);
=======
>>>>>>> 9af0809fdcc1548045375e680e4c964c11d3ba7a

$(document).ready(function() {
  $('.title-splash').delay('1000').fadeIn('slow');
  $('.gif-splash').delay('2000').fadeIn('slow');
  $('.splash-content').delay('5000').fadeOut('slow');
  $('.splash').delay('6000').fadeOut('slow');

  getTasksFromDB();
  $(".btnSumPoints").click(addTasksClick);
});

function addTasksClick(event) {
  event.preventDefault();
  var newTask = $("#points").val();
  var taskFromDB = addTaskToDB(newTask);
  getTasksFromDB();
}

<<<<<<< HEAD
  // $(".includePoints").click(function(e))
  // e.preventDefault();

//barra de xp
// var totalPoints = 100;
// const levelOne = 30;
// const levelTwo = 50;
// const levelThree = 70;
// const levelFour = 100;
// function levelPoints (totalPoints){
//   var levelAtual = 0;
//   var changeLevel = $("#levelNivel");
//   if (totalPoints >= levelOne){
//     changeLevel.html("1");
//   }
// }
=======
function addTaskToDB(text) {
  return database.ref("points/" + USER_ID).set({
    sumPoints: text
  });
}

function getTasksFromDB() {
  database.ref("points/" + USER_ID).once('value')
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        $(".retorno").text(childData);
      });
    });
}


>>>>>>> 9af0809fdcc1548045375e680e4c964c11d3ba7a
  $(".btnSumPoints").click(addTasksClick);



  function addTasksClick(event) {
    event.preventDefault();

    var newTask = $("#points").val();
    var taskFromDB = addTaskToDB(newTask);

    createListItem(newTask, taskFromDB.key)
  }
  function addTaskToDB(text) {
    return database.ref("Pontuacao" + USER_ID).set({
      text: text
    });
  }
  function getTasksFromDB() {
    database.ref("pontuacao" + USER_ID).once('value')
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          createListItem(childData.text, childKey);
          console.log("salvo");
        });
      });
  };

//barra de xp
  const levelOne = 30;
  const levelTwo = 50;
  const levelThree = 70;
  const levelFour = 100;
  function levelPoints (totalPoints){
    var levelAtual = 0;
    var changeLevel = $("#levelNivel");
    if (totalPoints >= levelOne){
      changeLevel.html("1");
    }
  }

  $(".btn-category").click(function(e) {
  e.preventDefault();
  showTasks(this);
  })
  $(".total-points").text(points);
});

function showTasks(buttonCategory) {
  $(".category").text("");
  var category = buttonCategory.id;
  var array = defineArray(category);
  var divCategory = ".category-" + category;
  for (i in array) {
    createHtml(array[i], divCategory);
  }
}

function defineArray(localCategory) {
  if (localCategory === "home") {
    return allTasks.tasksHome;
  }
  if (localCategory === "work") {
    return allTasks.tasksWork;
  }
  if (localCategory === "fun") {
    return allTasks.tasksFun;
  }
}

function createHtml(eachTask, div) {
  console.log(eachTask)
  var divTasks = document.createElement("div");
  divTasks.className = "task";
  divTasks.innerHTML = eachTask + "<span class='pts'> - 10 pontos </span>";
  divTasks.addEventListener("click", countPoints);
  $(div).append(divTasks);
}


function countPoints() {
  var sum = points + 10; // points vai ser o valor do banco de dados
  console.log("a soma é: " + sum)
  //enviar valor pro banco de dados
  $(".total-points").text(points);
}

var allTasks = {
  tasksHome: ["Separei lixo reciclável","Desliguei a torneira ao escovar os dentes", "Fechei o chuveiro para me ensaboar","Desliguei as luzes ao sair do ambiente"],
  tasksWork: ["Separei lixo reciclável","Desliguei a torneira ao escovar os dentes", "Fechei o chuveiro para me ensaboar","Desliguei as luzes ao sair do ambiente"],
  tasksFun: ["Separei lixo reciclável","Desliguei a torneira ao escovar os dentes", "Fechei o chuveiro para me ensaboar","Desliguei as luzes ao sair do ambiente"]
}
