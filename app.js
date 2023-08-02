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

//Event Listeners

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

    let time = 1;

    startBtn.addEventListener('click', (time) => {
        console.log('clicked')
        startTimer(time);
      
    })

    pauseBtn.addEventListener('click', () => {
        console.log("Pause")
        pauseTimer(time);
    })
        
   
    let interval = null;
    let sec = 0;

    // Update timer   
    function timer () { //setInterval(() => {
        
        console.log("timer") 
        //Countdown
        if (time >= 0)
        {             
            sec--;
            if (sec === 0){
                time --;
                sec = 60;
            }               
                            
            //Display
            if (time < 10){
                displayMinutes.textContent =  `0${time}`; 
            }
            else{
                displayMinutes.innerHTML = time; 
            }
            console.log(time)
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
            // Question if want to continue or if want to take the pause Calling a Function
            clearInterval(timer)
        }
    //}, 1000) // each 1 second}
    }

    function startTimer (time) {   
        // console.log("Time inside start Timer:", time)
        min--;
        sec = 59;
        if (interval) {
            return
        }
        interval = setInterval(timer, 1000);
    } 

    function pauseTimer () {
        clearInterval();
        interval = null;
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



//BAck up code

    // const startBtn = document.querySelector('#startBtn')
    // const pauseBtn = document.querySelector('#pauseBtn')

    // startBtn.addEventListener('click', () => {
    //     console.log('clicked')
    //     startTimer(activeTime.value);
    //     console.log(activeTime.value)
      
    // })

    // pauseBtn.addEventListener('click', () => {
    //     alert("Pause")
    // })
        
    
    
    // function startTimer (time) {   
               
    //     let min = time;
    //     let sec = 60;
    //     console.log(min) 
    //     min--;
    //     // TIMER
    //     timer = setInterval(()=>{
            
    //         console.log("timer") 

    //         if (min >= 0)
    //         {             
    //            sec--;
    //            if (sec === 0){
    //                 min --;
    //                 sec = 60;
    //             }               
                                
    //             //Display
    //             if (min < 10){
    //                 displayMinutes.textContent =  `0${min}`; 
    //             }
    //             else{
    //                 displayMinutes.innerHTML = min; 
    //             }
    //             console.log(min)
    //             if (sec < 10){
    //                 displaySeconds.innerHTML =  `0${sec}`; 
    //             }
    //             else{
    //                 displaySeconds.innerHTML = sec;
    //             }
    //             console.log(sec)
    //         }
    //         else
    //         { 
    //             alert("Time is over")
    //             // Question if want to continue or if want to take the pause
    //             clearInterval(timer)
    //         }
    //     }, 1000) // each 1 second
    //     } 