function calculateTime(hour, angle){
    var time;

    if( hour > 12){
        hour = hour -12;
    }

    if(angle == 0){
        if(hour < 13){
          var mint = hour*5;
      }else{
          var mint = (hour-12)*5;
      }
    }else{
        var mint = angle/6;
    }

    if((hour*5)+Math.round(mint) < 60){
        var f_mint = (hour*5)+Math.round(mint);
    }else{
        var f_mint = ((hour*5)+Math.round(mint))-60;
    }

    if(f_mint >= 55){
    f_mint += 5;
    }else if(f_mint >= 44){
    f_mint += 4
    }else if(f_mint >= 31){
    f_mint += 3
    }else if(f_mint >= 20){
    f_mint += 2
    }else if(f_mint >= 8){
    f_mint++
    }

    if(angle >= 180){
        time = hour + ' : ' + f_mint;
    }else{
        time = hour + ' : ' + f_mint;
    }

    console.log(time);
}
calculateTime(3, 179);