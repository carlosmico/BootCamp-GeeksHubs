fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(res => {
        let arrUsers = res.results;

        console.log(arrUsers);

        let html = "";

        arrUsers.forEach(user => {
            html += `
            <div class="userInfo">
                <img src="${user.picture.large}">
                <p>Name: ${user.name.first}</p>
                <p>Phone: ${user.phone}</p>
            </div>
            `;
        });

        console.log(html);

        document.querySelector(".usersList").innerHTML = html;
    });

// === Ejemplo de petición GET a GitHub ===

// fetch('https://api.github.com/users/carlosmico15')
//     .then(resp => resp.json())
//     .then(user => {
//         console.log(user);

//         let info = `
//         <img src="${user.avatar_url}" width="150px">
//         <p>Username: ${user.login}<p>          <p>Name: ${user.name}<p>
//         <p>My android projects: <a href="${user.blog}" rel="noreferrer noopener">Google Play</a></p>
//         <p>Visit my GitHub profile: <a href="${user.html_url}">Link</a></p>
//         `;

//         document.querySelector(".userInfo").innerHTML = info;
//     });

// fetch('https://api.github.com/users')
//     .then(resp => resp.json())
//     .then(resp => {
//         let users = "";

//         console.log(resp);

//         resp.forEach(user => {
//             users += `<p>${user.login}<p> <br> <img src="${user.avatar_url}" width="50px">`;
//         });

//         document.querySelector(".users").innerHTML = users;
//     });