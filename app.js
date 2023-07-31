// Take parameters for practice

const activeTime = document.querySelector('#active')
const breakTime = document.querySelector('#breakTime')
const sets = document.querySelector('#sets')
const pauseTime = document.querySelector('#pauseTime')
// const blocks
// const keepWorkingTime = 5 mins


//Total Time display
const totalHours = document.querySelector('#totalHours')
const totalMinutes = document.querySelector('#totalMinutes')

let activeTimeMins = activeTime.value;
let breakTimeMins = breakTime.value;
let setsVal = sets.value;


// Timer display
let displaySeconds = document.querySelector('#timer_seconds');
let displayMinutes = document.querySelector('#timer_minutes');
let play = document.querySelector('button')


// WORKING AREA: -event listeners. -update total time display -Figure out function to update it
// Display
activeTime.addEventListener('change', () => {
    displayMinutes.innerHTML = activeTime.value;
    displaySeconds.innerHTML = "00";
})

breakTime.addEventListener('change', () => {

})


 

function totalTime (activeTimeMins, breakTimeMins, setsVal) {
    totalTime = (activeTimeMins + breakTimeMins)*setsVal;
    totalHours.innerHTML = ""
}

// Start Timer
    const startBtn = document.querySelector('#startBtn')
    const pauseBtn = document.querySelector('#pauseBtn')

    startBtn.addEventListener('click', () => {
        console.log('clicked')
        startTimer();
        console.log(activeTime.value)
      
    })

    pauseBtn.addEventListener('click' , () => {
        alert("Pause")
        // How to pause???
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
               if (sec > 59){
                min ++;
                sec = 0;
                }               
                if (min < 10){
                    displayMinutes.textContent =  `0${min}`; 
                }
                else{
                    displayMinutes.innerHTML = min; 
                }
                console.log(min)
                if (sec < 10){
                    displaySeconds.innerHTML =  `0${sec}`; 
                }
                else{
                    displaySeconds.innerHTML = sec;
                }
                console.log(sec)
                            
               
            }
            else
            { 
                alert("Time is over")
                // Question if want to continue or if want to take the pause
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



