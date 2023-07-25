// Take parameters for practice

const activeTime = document.querySelector('#active')
// const breakTime
// const sets
// const pauseTime
// const blocks
// const keepWorkingTime = 5 mins

let timerSeconds = document.querySelector('#timer_seconds');
let timerMinutes = document.querySelector('#timer_miutes');
let play = document.querySelector('button')

// When play button clicked  
    // Start Timer
    const startBtn = document.querySelector('#startBtn')
    startBtn.addEventListener('click', () => {
        console.log('clicked')
        startTimer();
        console.log(activeTime.value)
      
    })
        
    function startTimer(activeTime.value) {   
        let sec = 0;
        let min = 0;
        timer = setInterval(()=>{
            
                console.log("timer") 
            console.log(activeTime)
            if (min < activeTime)
            {
                console.log("timer") 
                timerMinutes.innerHTML = min; 
                console.log(min)
                if (sec < 60){
                    timerSeconds.innerHTML = sec;
                    sec++;
                    console.log(sec)
                }
                else
                {    
                    min ++;
                    sec = 0;
                }
            }
            else
            { 
                clearInterval(timer)
            }
        }, 1000) // each 1 second
        } 
            
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



