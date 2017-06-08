import { render } from 'react-dom'
import App from 'components/App'
import Login from 'components/Login'

const Main = () => (<Login />)

render(
  <Main />,
  document.getElementById('app-container')
)