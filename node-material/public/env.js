const testButtonFunction=()=>{
  alert('Thank you for clicking')
}

// connect to the socket

let socket = io();


socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
})

// console.log('test');
$(document).ready(function(){
  console.log('Ready')

  $('.sidenav').sidenav();
  //bind the button
  // $('#testButton').click(testButtonFunction)

  //test get call
  // $.get('/test?user_name="Fantastic User"',(result)=>{
  //   console.log(result)
  
  // Add function to output allprojects on cards - for HTML 
    function projectCard(project){
      return `
    <div class="col s6 m4">
      <div class="card">
        <div class="card-image">
          <img src="${project.img ? project.img : 'assets/Iceberg_7292.JPG'}">
          <span class="card-title">${project.title}</span>
        </div>
        <div class="card-content">
          <p>${project.info}</p>
        </div>
        <div class="card-action">
          <a href="#">${project.projectID}</a>
        </div>
      </div>
  </div>` ;
}
 

  // append all projects to project list
  $.get('/projects', (result) => {
    for (let p of result) {

    $('#projects-list').append(projectCard(p))

    }
    console.log(result)    
  
   } )

}) 

