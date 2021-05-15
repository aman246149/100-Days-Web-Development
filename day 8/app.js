

const countdown=()=>{
    const countDate=new Date("May 17,2021 00:00:00").getTime();
    console.log(countDate)
    const now=new Date().getTime();
    const gap=countDate-now

    //jence we get data in millisec
    //1 sec=1000ms
    //1min=60sec*1000millsec and so on
    const second=1000;
    const minute=60*second;
    const hour=minute*60;
    const day=24*hour;

    //calculate time
    const accurateDay=Math.floor(gap/day)
    const accurateHour=Math.floor((gap%day)/hour);
    const accurateMinute=Math.floor((gap%hour)/minute)
    const accurateSecond=Math.floor((gap%minute)/second)

    const days=document.querySelector('.day')
    days.innerHTML=accurateDay
    const hours=document.querySelector('.hour')
    hours.innerHTML=accurateHour
    const minutes=document.querySelector('.minute')
    minutes.innerHTML=accurateMinute
    const secon=document.querySelector('.sec')
    secon.innerHTML=accurateSecond
}

setInterval(countdown,1000)