function openLogin(){
    $('#login').show();
}

function closeLogin() {
    $('#login').hide();
}

function pgSignUp() {
    window.location.href = "../html/signup.html";
}

function pgIndex() {
    window.location.href = "../html/index.html";
}

function pgOverview() {
    window.location.href = "../html/overview.html"
}

function showAddSub() {
    $('#addSub').show();
}

function addListItems(newItems) {
    $('#subadubdub').append("<ul id='newList'></ul>");
    for (cnt = 0; cnt < newItems.length; cnt++) {
        $('#newList').append("<li>" + newItems[cnt] + "</li>");
    }
}