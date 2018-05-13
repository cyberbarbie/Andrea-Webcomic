firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location.replace('adminPage');
    } else {
        window.location.replace('login');
    }
});

function signIn(){
    var userEmail = document.getElementById("emailField").value;
    var userPwd = document.getElementById("pwdField").value;
    
    firebase.auth().signInWithEmailAndPassword(userEmail, userPwd).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong Password');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });

        /* alert(userEmail + " " + userPwd); */
}
