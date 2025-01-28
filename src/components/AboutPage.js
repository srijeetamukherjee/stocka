import React from 'react';
import gif from './About.gif';

const AboutPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Black Section (80%) */}
      <div
        style={{
          width: '60%',
          backgroundColor: '#222222',
          color: '#FFFFFF',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>MoneyMate</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
          MoneyMate is a cutting-edge financial platform designed to revolutionize the way individuals and businesses manage their investments. 
          Leveraging stock prediction powered by advanced machine learning algorithms and sentiment analysis, MoneyMate provides users with precise 
          insights and actionable recommendations for smart investment decisions.
          <br />
          <br />
          Its user-friendly website interface ensures seamless access to features like market analysis and personalized financial advice, making it a 
          trusted companion for both novice and seasoned investors. MoneyMate aims to empower users to maximize their financial potential efficiently and confidently.
        </p>
      </div>

      {/* White Section (20%) */}
      <div
        style={{
          width: '40%',
          backgroundColor: '#E4E4E4',justifyContent: 'center', flex: 1,display: 'flex',
        }}
      ><img
                src={gif}
                alt="AboutPage Animation"
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px',  }}
              /></div>
    </div>
  );
};

export default AboutPage;
