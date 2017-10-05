window.onload = function() {
    var doctorId = sessionStorage.getItem('doctorId')
    if(!doctorId) {
        location.href = './page_user_login.html';
    }

    $('#logoutBtn').click(function() {
        // alert('hello');
        sessionStorage.removeItem('doctorId');
        location.href = './page_user_login.html';
    })
}
