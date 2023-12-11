$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();

        let error = 0;

        $(".arrow-icon").css("background-color", "hsl(259, 100%, 65%)");
        const currentDate = moment(new Date(), 'YYYY-MM-DD');

        var day  = $("#day").val();
        var month = $("#month").val();
        var year= $("#year").val();


        if(day<=31 && day > 0){
            $("#errorDay").fadeOut();
            $("#labelDay").css('color', 'hsl(0, 1%, 44%)');
            $("#day").css('border', '1px solid hsl(0, 0%, 86%)');
        }else if(day==""){
            $("#labelDay").css('color', 'red');
            $("#day").css('border', '1px solid red');
            $("#errorDay").html("This field is required").fadeIn();
            error++;   
        }
        else{
            $("#labelDay").css('color', 'red');
            $("#day").css('border', '1px solid red');
            $("#errorDay").html("Must be a valid day").fadeIn();
            error++;
        }

        if(month<=12 && month > 0){
            $("#errorMonth").fadeOut();
            $("#labelMonth").css('color', 'hsl(0, 1%, 44%)');
            $("#month").css('border', '1px solid hsl(0, 0%, 86%)');           
        }else if(month==""){
            $("#labelMonth").css('color', 'red');
            $("#month").css('border', '1px solid red');
            $("#errorMonth").html("This field is required").fadeIn();
            error++;   
        }else{
            $("#labelMonth").css('color', 'red');
            $("#month").css('border', '1px solid red');
            $("#errorMonth").html("Must be a valid month").fadeIn();
            error++;
        }

        if(moment().diff(year, 'years') && year > 0){
            $("#errorYear").fadeOut();
            $("#labelYear").css('color', 'hsl(0, 1%, 44%)');
            $("#year").css('border', '1px solid hsl(0, 0%, 86%)');     
        }else if(year==""){
            $("#labelYear").css('color', 'red');
            $("#year").css('border', '1px solid red');
            $("#errorYear").html("This field is required").fadeIn();    
            error++;       
        }else{
            $("#labelYear").css('color', 'red');
            $("#year").css('border', '1px solid red');
            $("#errorYear").html("Must be a valid month").fadeIn();
            error++;
        }

        if(error == 0){
            var date = month + '/' + day + '/' + year;
            var days = moment.duration(currentDate.diff(date));
            $("#content-years").fadeOut(function(){
                $(this).html(days.years());
            }).delay(100).fadeIn();
            $("#content-months").fadeOut(function(){
                $(this).html(days.months());
            }).delay(100).fadeIn();
            $("#content-days").fadeOut(function(){
                $(this).html(days.days());
            }).delay(100).fadeIn();
        }
    });
});