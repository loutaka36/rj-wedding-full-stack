import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-top">
        <div className="home-top_text">Ryunoshin and Joyce</div>
        <div className="home-top_details">June 27, 2020</div>
        <div className="home-top_intro">
          Welcome to our wedding website!<br/>We are so excited to share our special day with you.
      </div>
      </div>
      <div className="home-photo">
        <div className="home-photo_pic"/>
      </div>
      <div className="home-story">
        <div className="home-story-title">Our Story</div>
        <p>
          We met in Cleveland, Ohio as students at Case Western Reserve University. Both of us were part of InterVarsity Christian Fellowship, which is where we got to know each other.<br/><br/>

          2014 - Joyce's first memory of Lou was at one of her first InterVarsity large groups, where Lou shared his testimony of converting to Christianity. Joyce admired Lou for his faith, and was star-struck immediately. However, she thought he was out of her league because he was a good-looking athlete, and she was a small couch potato freshman. So she just admired him from afar for the next few years and did not think too much about him since there was no hope anyway.<br/><br/>

          2016 - Lou started becoming interested in Joyce when he was a junior and Joyce was a sophomore. He had been driving students to monthly regional InterVarsity meetings, and he found Joyce to be a happy conversationalist in the car. Once, he even missed a highway exit because he was so distracted with talking to her.<br/><br/>

          2017 - When Lou became a senior, he knew time was running short. He spent quite some time talking to Joyce at InterVarsity events the first month of senior year. However, Joyce was quite oblivious and thought he was just being friendly because she had zero hope that Lou would be interested in her. Little did she know that Lou was observing her schedule and trying to "coincidentally" appear in places that she was.<br/><br/>

          One day, Lou "coincidentally" was walking in the same direction as Joyce. As they walked and talked, Lou stopped Joyce in the middle of the street and nervously and eloquently asked her to go on a date. Joyce replied, "uh, sure...?" The fangirl in Joyce had become very level-headed about relationships. However, after a few months of getting to know each other, Joyce realized that she had admired the right person all these years and became totally smitten, and Lou was convinced that he had found his better half.<br/><br/>

          Now Joyce is finishing her graduate program, and Lou is changing careers. We have many unknowns ahead, but we are excited to embark on our journey together.
        </p>
      </div>
    </div>
  );
}

export default Home;
