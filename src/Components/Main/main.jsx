import React from 'react';
import './main.css'


function Main(){
    return(
        
        <div className="main">
        <div className="picture row">
            <div className="col-sm">
               <h1></h1>
               <img className="img img-fluid" src="Img/selfportrait1.jpg" />
            </div>
            <div className="name col-sm-4">
                <h1>Christopher Ferrara</h1>
                <h3>Full Stack Developer</h3>
            </div>
        </div>
        <div className='row'>    
            <div className="about col-sm">
                  <h1 className="about-me">About Me</h1><br/>
                    <p className='tab'>     I am a full stack developer that loves programming. I have always loved computers, 
                        and have managed networks in the US Army. I love development because it feels as 
                        if the learning is limitless, and it allows me to exercise my passion for creativity. 
                        I am a quick learner and love learning and improving my skills, and programming allows 
                        me to do that every single day.
                        <br/><br/>
                       My life experiences have given me a drive, a passion, and a propensity for thought that 
                       has led me to be a top performer at everything I do. I excel quickly, because anything I do, 
                       is done with drive. When I was young, I had an artistic passion for everything that I did, but 
                       it wasn’t until I became a network administrator in the military that I received the discipline 
                       and logic to really create a positive flow and drive. From here, I began entrepreneurial 
                       endeavors that taxed my critical thinking, and taught me how to have humility in all that I do.
                       My problem solving abilities, combined with the humility to know when to ask for help make me an
                       excellent team mate.</p>
            </div>
        </div>
        </div>
    )
}
export default Main;