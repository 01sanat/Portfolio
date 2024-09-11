import React , {useState , useEffect} from 'react'

const Home = () => {
    
  const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    let time = date.toLocaleTimeString([], options);
    // Replace AM/PM with uppercase
    time = time.replace(/(am|pm)/i, (match) => match.toUpperCase());
    return time;
  };

  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

/// create gif and put in home Page , i love  writing SQL queries , optimising it , planning DB Designs , Sprint Plannings , 
// flows.
// love to collaborate and work as a team and achieving collaborative results.

  return (
    <div className="home-container">
      <div className="timer">
        {time}
      </div>
      <hr className='divider'/>
      <p>
        Currently <span> → Backend Developer @ Squareboat</span> 
        <br/>
        Previous <span> → Mylo</span>
        <br/>
        Delivering <span> → Smiles ☻ </span> 
      </p>
    </div>
  )
}

export default Home