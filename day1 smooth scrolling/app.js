const smoothScrolling=(target,duration)=>{
    var target=document.querySelector(target);
    var targetPosition =target.getBoundingClientRect().top;
    var startPosition=window.pageYOffset;
    var distance =targetPosition-startPosition;
    var startTime=null;

    function animation(currentTime){
        if(startTime ===null){
            startTime =currentTime;
        }

    var timeElased=currentTime-startTime;
    var run=ease(timeElased,startPosition,distance,duration);
    window.scrollTo(0,run);
    if(timeElased<duration) {
        requestAnimationFrame(animation);
    }

    }

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t*t*t + 2) + b;
    };
        
    
       requestAnimationFrame(animation);  
    
    

    console.log(targetPosition);
    console.log(startPosition);
}

var section1=document.querySelector('.section1');
var section2=document.querySelector('.section2');

section1.addEventListener('click',function(){
    smoothScrolling(".section2",1000);
})

section2.addEventListener('click',function(){
    smoothScrolling(".section1",1000);
})