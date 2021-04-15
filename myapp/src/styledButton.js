import styled from 'styled-components'


// Create a Title component that'll render an <h1> tag with some styles
const SButton = styled.button`
  font-size: 1.5em;
  background-color: yellow;
  color: palevioletred;
`;

function StyledButton() {
    return (
    <SButton>Click Me!</SButton>
    );
}
export default StyledButton;

