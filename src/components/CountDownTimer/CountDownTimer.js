import React, { useEffect } from 'react'
import './CountDownTimer.css';
import { useState } from 'react';


function calculateTimeLeft(targetDate){
    const differnce = new Date (targetDate) - new Date();
    let timeLeft = {};

    if (differnce > 0) {
        timeLeft = {
            days: String(Math.floor(differnce/(1000 * 60 * 60 * 24))).padStart(2, "0"),
            hours: String(Math.floor((differnce/(1000 * 60 * 60))% 24)).padStart(2, "0"),
            minutes: String(Math.floor((differnce/1000 / 60) % 60)).padStart(2, "0"),
            seconds: String(Math.floor((differnce/1000)% 60)).padStart(2, "0"),
        };
    }else {
        timeLeft = {
            days :"00",
            hours :"00",
            minutes :"00",
            seconds :"00",
        };
    }
    return timeLeft;
};

const CountDownTimer = ({targetDate}) => {
    const [timeLeft , setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTimeLeft(calculateTimeLeft(targetDate));
        },1000);
        return () => clearInterval(timer);
    }, [targetDate]);

  return (
    <div className='countdown-timer'>
        <div className='time-boxes'>
            <div className='time-segment'>
                <div className='digit-boxes'>
                    <div className='digit-box'>{timeLeft.days[0]}</div>
                    <div className='digit-box'>{timeLeft.days[1]}</div>
                </div>
                <div className='label'>Days</div>
            </div>
            <div className='time-segment'>
                <div className='digit-boxes'>
                    <div className='digit-box'>{timeLeft.hours[0]}</div>
                    <div className='digit-box'>{timeLeft.hours[1]}</div>
                </div>
                <div className='label'>Hours</div>
            </div>
            <div className='time-segment'>
                <div className='digit-boxes'>
                    <div className='digit-box'>{timeLeft.minutes[0]}</div>
                    <div className='digit-box'>{timeLeft.minutes[1]}</div>
                </div>
                <div className='label'>Mins</div>
            </div>
            <div className='time-segment'>
                <div className='digit-boxes'>
                    <div className='digit-box'>{timeLeft.seconds[0]}</div>
                    <div className='digit-box'>{timeLeft.seconds[1]}</div>
                </div>
                <div className='label'>Secs</div>
            </div>
        </div>
    </div>
  )
}

export default CountDownTimer
