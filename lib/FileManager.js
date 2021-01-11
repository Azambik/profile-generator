const employeeCards = [];
let combineCards;
function createEmployee(data){
    for(let i = 0; i < data.length; i++){
        switch (data[i].title){
            case "Manager":
                employeeCards.push(`<div class="pl-0 pr-0 ml-2 mr-2 col card rounded border-dark">
                <div class="card-header border-dark bg-primary">
                  <h5>${data[i].name}</h5>
                  <h5><i class="fas fa-mug-hot"></i></i>Manager</h5>
                </div>
                <div class="card-body bg-light">
                  <blockquote class="blockquote mb-0">
                      <h6>ID:${data[i].idNumber}</h7>
                      <h6><a href = "mailto: ${data[i].eMail}">${data[i].eMail}<i class="fas fa-envelope-open"></i></a></h6>
                      <h6>${data[i].officeNumber}</h7>
                  </blockquote>
                </div>
              </div>`);
                break;
            case "Engineer":
                employeeCards.push(`<div class="pl-0 pr-0 ml-2 mr-2 col card rounded border-dark">
                <div class="card-header border-dark bg-primary">
                  <h5>${data[i].name}</h5>
                  <h5><i class="fas fa-glasses"></i></i></i>Engineer</h5>
                </div>
                <div class="card-body bg-light">
                  <blockquote class="blockquote mb-0">
                      <h6>ID:${data[i].idNumber}</h7>
                      <h6><a href = "mailto: ${data[i].eMail}">${data[i].eMail}<i class="fas fa-envelope-open"></i></a></h6>
                      <a href="https://github.com/${data[i].githubUserName}" target="_blank">github:${data[i].githubUserName}</a>
                  </blockquote>
                </div>
              </div>`);
                break;
            case "Intern":
                employeeCards.push(`<div class="pl-0 pr-0 ml-2 mr-2 col card rounded border-dark">
                <div class="card-header border-dark bg-primary">
                  <h5>${data[i].name}</h5>
                  <h5><i class="fas fa-user-graduate"></i></i>Intern</h5>
                </div>
                <div class="card-body bg-light">
                  <blockquote class="blockquote mb-0">
                      <h6>ID:${data[i].idNumber}</h7>
                      <h6><a href = "mailto: ${data[i].eMail}">${data[i].eMail}<i class="fas fa-envelope-open"></i></a></h6>
                      <h6>${data[i].schoolName}</h7>
                  </blockquote>
                </div>
              </div>`);
              break;
        }
}

for(let i = 0; i < employeeCards.length; i++){
combineCards = combineCards + employeeCards[i];
combineCards = combineCards.replace('undefined', "");
}
combineCards = combineCards.replace("`","")
combineCards = "`" + combineCards + "`";
return (combineCards);
}



function FileManager(data) {
 return `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
     <title>My Team</title>
 </head>
 <body>
     <div class="container mw-100">
         <div class="row-fluid bg-danger text-dark align-item-start font-weight-bold text-center mw-100">
             <div class="col-12">
             <h1>My Team<h1>
             </div>
         </div>
         <div class="row pt-5 ">
         ${createEmployee(data)}
         </div>
     </div>
     <script src="https://kit.fontawesome.com/b9a91771e3.js" crossorigin="anonymous"></script>
 </body>
 </html>`   
}

module.exports = FileManager;