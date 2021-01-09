import { useHistory } from 'react-router-dom'
import { Title, Icons } from 'wmarks-components'
import Nav from './style'
import home from '../../Assets/home.png'
import back from '../../Assets/back.png'

function NavHeader() {
  const history = useHistory()
  return (
    <Nav backgroundColor="colorFirst" borderColor="colorSecond">
      <Icons
        src={home}
        onClick={() => history.push({ pathname: '/automatizationCenter' })}
      />
      <Title color="colorSecond" shadowColor="colorBlackFourth">
        {' '}
        Page Builder Creator
      </Title>
      <Icons src={back} onClick={() => history.goBack()} />
    </Nav>
  )
}

export default NavHeader
