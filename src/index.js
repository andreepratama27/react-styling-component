import { render } from 'react-dom'
import App from 'components/App'

const Main = () => (<App />)

render(
  <Main />,
  document.getElementById('app-container')
)