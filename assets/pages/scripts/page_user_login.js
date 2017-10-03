jQuery(document).ready(function() {
    var loginMethod = function() {

        var loginCheck = function() {
            $('#loginBtn').click(function() {
                var alertMessage = "";
                var username = $('input[name="username"]').val();
                var password = $('input[name="password"]').val();

                var emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                var phoneReg = /^1[34578]\d{9}$/;

                if (username == '') {
                    alertMessage = "用户名不能为空";
                    showAlert(alertMessage);
                    return;
                } else if (!emailReg.test(username) && !phoneReg.test(username)) {
                    alertMessage = "用户名格式填写错误";
                    showAlert(alertMessage);
                    return;
                } else if (password == '') {
                    alertMessage = "密码不能为空";
                    showAlert(alertMessage);
                    return;
                } else {
                    $('#loginBtn').attr('disabled', true);
                    $.ajax({
                        url: 'http://116.62.148.24/User/checkLogin',
                        // url: 'http://192.168.10.248:8080/User/checkLogin',
                        type: 'POST',
                        dataType: 'JSON',
                        data: {
                            'emailOrPhone': username,
                            'password': password
                        },
                        success: function(data) {
                            // data = JSON.parse(data);
                            console.log(data);
                            if (data.status == 'false') {
                                showAlert(data.message);
                                $('#loginBtn').removeAttr('disabled');
                            } else {
                                sessionStorage.setItem('doctorId', data.data);
                                location.href = "./index.html";
                            }
                        },
                        error: function(err) {
                            showAlert("登录出错，请稍后再试");
                            $('#loginBtn').removeAttr('disabled');
                        }
                    })
                }

                function showAlert(message) {
                    $('.alert span').text(message);
                    $('.alert').show();
                }

                // console.log(username, password);
            })
        };

        return {
            init: function() {
                loginCheck();
            }
        }
    }();

    loginMethod.init();
})
