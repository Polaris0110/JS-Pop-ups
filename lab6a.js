alert("Hi! Welcome to my webpage ");

var userResponse = confirm("Do you want to stay on this webpage? ");
if (userResponse) {
    alert("Wow, you have stayed ");
    
    var userName = prompt("enter your name :");
    
    if (userName) {
        alert("Hi, " + userName + "! Welcome to my webpage ");
    } else {
        alert("Whyyyy?? Don't you know your name? Welcome anyway! ");
    }
} else {
    alert("Bye! ");
}