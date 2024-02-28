function Experiences() {
    const listStyle = {
      listStyleType: 'none',
      paddingLeft: '0'
    };
  
    const listItemStyle = {
      marginBottom: '10px'
    };
  
    return (
      <section id="experiences">
        <h2>Experiences</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>Experience 1</li>
          <li style={listItemStyle}>Experience 2</li>
          {/* Add more experiences here */}
        </ul>
      </section>
    );
  }
  
export default Experiences;