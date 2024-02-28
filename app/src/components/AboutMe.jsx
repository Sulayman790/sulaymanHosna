function AboutMe() {
    const aboutStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    };
  
    const imgStyle = {
      borderRadius: '50%',
      width: '150px',
      height: '150px',
      objectFit: 'cover',
      marginBottom: '20px'
    };
  
    return (
      <section id="about" style={aboutStyle}>
        <h2>About Me</h2>
        <img src="path-to-your-image.jpg" alt="Your Name" style={imgStyle} />
        <p>Short bio or introduction about yourself.</p>
      </section>
    );
  }
  
  
  export default AboutMe;