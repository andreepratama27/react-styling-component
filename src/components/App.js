import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.success ? 'green' : 'cornflowerblue' };
  color: #fff;
  border: 0;
  width: 10rem;
  height: 4rem;
  margin-right: 2rem;
`

const App = () => (
  <div>
    <Button>Hello</Button>
    <Button success>Hello</Button>
  </div>
)

export default App