import { useHistory } from 'react-router-dom'
import { Title, Icons, Image } from 'wmarks-components'
import { Nav, IconsWrapper } from './style'
import home from '../../Assets/home.png'
import back from '../../Assets/back.png'
import dhl from '../../Assets/dhl-logo-min.png'

function NavHeader({ children }) {
  const history = useHistory()
  return (
    <Nav backgroundColor="colorFirst" borderColor="colorSecond">
      <Image src={dhl} />
      <Title color="colorSecond" shadowColor="colorThird">
        {children}
      </Title>
      <IconsWrapper>
        <Icons src={home} onClick={() => history.push({ pathname: '/' })} />
        <Icons src={back} onClick={() => history.goBack()} />
      </IconsWrapper>
    </Nav>
  )
}

export default NavHeader
