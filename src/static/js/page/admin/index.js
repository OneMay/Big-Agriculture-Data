$(function() {
    var $loginBox = $('#loginBox');
    var $registerBox = $('#registerBox');
    //注册
    $registerBox.find('.btn-success').on('click', function() {
        $.ajax({
            type: 'post',
            url: '/api/user/register',
            data: {
                username: $registerBox.find('[name="username"]').val(),
                password: $registerBox.find('[name="password"]').val()
            },
            dataType: 'json',
            success: function(data) {
                //console.log(data);
                $registerBox.find('.message').html(data.message);
                if (!data.code) {
                    setTimeout(function() {
                        $registerBox.find('.btn-default').click();
                        $('[data-target="#signinModal"]').click();
                    }, 1000)
                }
            }
        });
    });

    //登陆
    $loginBox.find('.btn-success').on('click', function() {
        $.ajax({
            type: 'post',
            url: '/api/user/login',
            data: {
                username: $loginBox.find('[name="username"]').val(),
                password: $loginBox.find('[name="password"]').val()
            },
            dataType: 'json',
            success: function(data) {
                $loginBox.find('.message').html(data.message);
                if (!data.code) {
                    setTimeout(function() {
                        $loginBox.find('.btn-default').click();
                        $('.username').html('欢迎您，' + data.userInfo.username);
                    }, 1000)
                }
            }
        })
    });
})