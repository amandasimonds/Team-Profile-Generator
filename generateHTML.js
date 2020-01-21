var generateHTML = {
    generateHTML: function(data) {
        return `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <title>Your Employee List</title>
            <style>
            .cardContainer {
                float: left;
                margin-top: 20px;
                align-content: center;
                padding: 0px 10px 0px 10px;
            }
            .card {
                width: 100%;
            }
            </style>
        </head>
        
        <body>
        `;
    },

    addManagerCard: function (data){
        return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${data.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${data.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">Office number: ${data.officenumber}</li>
            </ul>
        </div>
     </div>`
    },

    addEngineerCard: function (data){
        return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${data.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${data.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">Github: <a href="github.com/ ${data.github}">github.com/amandasimonds</a></li>
            </ul>
        </div>
     </div>`
    },

    addInternCard: function (data){
        return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${data.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${data.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">School: ${data.school}</li>
            </ul>
        </div>
     </div>`
    },

    buildPage: function (data){
        return ``
    }
}

function closeHTML() {
    return `
    </body>
    </html>
    `;
}

module.exports = generateHTML

