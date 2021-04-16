function getDayName(dateString) {
    let dayName;
    // Write your code here
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
    let date = new Date(dateString)
    let dayNum = date.getDay()
    
    for(let i = 0; i<days.length; i++){
        if(dayNum == i){
            dayName = days[i]
        }
        
    }
    
    return dayName;
}
