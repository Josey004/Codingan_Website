let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
// let admin = document.getElementById('admin');
// let basic = document.getElementById('basic');
// let loginButton = document.getElementById('btn');
// let logoutButton = document.getElementById('logout');

// admin.style.display = "none";
// basic.style.display = "none";

function onLogin() {
    localStorage.setItem("email", emailInput.value);

    if(emailInput.value == "Gabriella@jose.com" && passwordInput.value == "gabijose") {
        alert('Haiiiiiii Sayaaaanggg');
        localStorage.setItem("role", "admin");
        // admin.style.display = "block";
        // basic.style.display = "none";
        window.location.href = "2.html";
    }else {
        alert('lu siapa!!!???');
        localStorage.setItem("role", "basic");
        window.location.href = "3.html";
        // admin.style.display = "none";
        // basic.style.display = "block";
    }
}
    // if(localStorage.getItem('email')) {
    //     // emailInput.style.display = "none";
    //     // passwordInput.style.display = "none";
    //     if(localStorage.getItem('role') == "admin") {
    //         // admin.style.display = "block";
    //         // basic.style.display = "none";
    //         window.location.href = "2.html";
    //     } else {
    //         // admin.style.display = "none";
    //         // basic.style.display = "block";
    //     }
    // }

    
    // let emailInput = document.getElementById('emailInput');
    // let passwordInput = document.getElementById('passwordInput');
    // // let admin = document.getElementById('admin');
    // // let basic = document.getElementById('basic');
    // // let loginButton = document.getElementById('btn');
    // // let logoutButton = document.getElementById('logout');

    // // admin.style.display = "none";
    // // basic.style.display = "none";

    // function onLogin() {
    //     localStorage.setItem("email", emailInput.value);
    //     localStorage.setItem("password", passwordInput.value);

    //     if (emailInput.value == "admin" && passwordInput.value == "admin") {
    //         localStorage.setItem("role", "admin");
    //         console.log("ini adlaah = " + emailInput);
    //         // admin.style.display = "block";
    //         // basic.style.display = "none";
    //         //window.location.href = "2.html";

    //     } else {
    //         localStorage.setItem("role", "basic");
    //         window.location.href = "3.html";
    //         // admin.style.display = "none";
    //         // basic.style.display = "block";
    //     }

    // }