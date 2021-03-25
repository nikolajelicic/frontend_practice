jQuery(document).ready(function(){
    $.ajax({
        url: 'countries.json',
        type: 'POST',
        dataType: 'JSON',
        success: function(data){
            //console.log(data)
            for(var i=0;i<data.length;i++){
                //console.log(data[i].country)
                $("#allCountry").append("<option value="+data[i].country+">"+data[i].country+"</option>")
            }
        }
    })

    $("#closeCountry").click(function(){
        $(".country").fadeOut()
    })

    $("#displayCountrys").click(function(){
        $(".country").fadeIn()
        $("html,body").animate({ scrollTop: 0 }, "slow")
    })
})
