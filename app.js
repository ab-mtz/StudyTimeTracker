// Take parameters for practice

const activeTime
const breakTime
const sets
const pauseTime
const blocks
const keepWorkingTime = 5 mins

let timerElement = document.getElementById('timer');


// When play button clicked  
    // Start Timer
        (function (){    
            let sec = 0;
            timer = setInterval(()=>{
                timerElement.innerHTML = '00:'+sec;
                sec++;
            }, 1000) // each 1 second
            })()
            
        // Manipulate element of timer show
        // Timer function (activeTime)
        // If activeTime >= 10min 
            // play sound remainder every 25% of time
        //When 1 min left => play sound 1 min
        // return

    //When time out => play alarm, show AlarmMenu
        // AlarmMenu: Opt1: Keep working    Opt2: Take brake
            // If keepWorking 
                //Save activeTime
                // 5 min
                // Timer function (keepWorkingTime)
            // Else 
                //save activeTime
                //set timer to breakTime



