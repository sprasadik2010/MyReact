//import styled from 'styled-components'
import styled, { css } from 'styled-components'


// Create a Title component that'll render an <h1> tag with some styles
const SButton = styled.a`
/* This renders the buttons above... Edit me! */
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
background: skyblue;
color: white;
border: 2px solid white;

/* The GitHub button is a primary button
 * edit this to target it specifically! */
${props => props.primary && css`
  background: white;
  color: black;
`}
`

function StyledButton(msg) {
    return (
    <SButton 
    onClick={() => {/*alert(JSON.stringify(msg)); */alert(msg.msg);}}
    >
      Click Me!
      </SButton>
    );
}
export default StyledButton;

