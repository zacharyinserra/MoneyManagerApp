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

// Shows the inputs to add a subscription after all the other listed subscriptions
function showAddSub() {
    $('#addSub').insertAfter("#newSubList");
    $('#addSub').show();
}

// Shows the inputs to add an account after all the other listed subscriptions
function showAddAcc() {
    $('#addAcc').insertAfter("#newAccList");
    $('#addAcc').show();
}

// Adds user-input to a list in subscriptions
function addSubItems(newItems) {
    // Need to add check to make sure all inputs are filled out
    $('#subadubdub').append("<ul id='newSubList'></ul>");
    $('#newSubList').append("<li></li>");
    for (cnt = 0; cnt < newItems.length; cnt++) {
        $('#newSubList').append("<li>" + newItems[cnt] + "</li>");
    }
    $('#subTotals').insertAfter("#newSubList");
    $('#addSub').hide();
}

// Adds user-input to a list in accounts
function addAccItems(newItems) {
    // Need to add check to make sure all inputs are filled out
    $('#accountalicious').append("<ul id='newAccList'></ul>");
    $('#newAccList').append("<li></li>");
    for (cnt = 0; cnt < newItems.length; cnt++) {
        $('#newAccList').append("<li>" + newItems[cnt] + "</li>");
    }
    $('#accTotals').insertAfter("#newAccList");
    $('#addAcc').hide();
}