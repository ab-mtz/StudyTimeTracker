// Take parameters for practice

const activeTime = document.querySelector('#active')
// const breakTime
// const sets
// const pauseTime
// const blocks
// const keepWorkingTime = 5 mins

let timerSeconds = document.querySelector('#timer_seconds');
let timerMinutes = document.querySelector('#timer_minutes');
let play = document.querySelector('button')

// When play button clicked  
    // Start Timer
    const startBtn = document.querySelector('#startBtn')
    startBtn.addEventListener('click', () => {
        console.log('clicked')
        startTimer();
        console.log(activeTime.value)
      
    })
        
    const startTimer = function () {   
        let sec = 0;
        let min = 0;
        if(!activeTime.value)
        {
            alert("Fill the fields")
            return;
        }
        timer = setInterval(()=>{
            
                console.log("timer") 
            // console.log(activeTime)
           
            if (min < activeTime.value)
            {             
               sec++; 
                if (min < 10){
                    timerMinutes.textContent =  `0${min}`; 
                }
                else{
                    timerMinutes.innerHTML = min; 
                }
                console.log(min)
                if (sec < 10){
                    timerSeconds.innerHTML =  `0${sec}`; 
                }
                else{
                    timerSeconds.innerHTML = sec;
                }
                console.log(sec)
                            
                if (sec > 59){
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



