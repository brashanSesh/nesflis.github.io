function login(){
    let correo, contra;

    correo=document.getElementById("correo").value;
    contra=document.getElementById("contra").value;

    if (correo=="abcde@gmail.com" && contra=="123456789")
    {
        window.open("main.html");
    }
    else
    {
        alert("Correo o cotnraseña incorrectas");
    }
}