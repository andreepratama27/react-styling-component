import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #f7f7f7;

  ${props => props.body && `
    width: 30%;
    margin: 4rem auto;
    border: 1px solid #dadada;
  `}

  ${props => props.input && `
    padding: 0 1.4rem 1.4rem 1.4rem;
  `}

  ${props => props.button && `
    display: flex;
    justify-content: center;
    padding: 0 0 2rem 0;
  `}
`

const Title = styled.div`
  color: #333; 
  font-family: sans-serif;
  font-size: 1.6rem;
  padding: 1.4rem;
  text-align: center;
`

const Input = styled.input`
  width: 100%;
  height: 2.4rem;
`

const Button = styled.button`
  background-color: cornflowerblue;
  border: 0;
  color: #fff;
  width: 14rem;
  height: 2rem;
`

const Login = () => (
  <Wrapper body>

    <Title>Login Page</Title>

    <Wrapper input>

      <Input />

    </Wrapper>

    <Wrapper input>

      <Input />

    </Wrapper>

    <Wrapper button>

      <Button>Login</Button>

    </Wrapper>


  </Wrapper>
)
export default Login