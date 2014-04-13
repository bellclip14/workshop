$('#infoForm').submit(function() {
 
    var postTo = 'http://rcvapesters.com/record.php';
 
    $.post(postTo,({first_name: $('[name=first_name]').val(), last_name: $('[name=last_name]').val(), email: $('[name=email]').val()}),
    function(data) {
        alert(data);
        if(data != "") {
            // do something
        } else {
            // couldn't connect
        }
        },'json');
    return false;
 
});