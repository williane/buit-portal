import { useHistory } from 'react-router-dom'
import { Title, Icons, ListActionMenu } from 'wmarks-components'
import { Nav, Main } from './Styles/automatization_center_style'
import home from '../Assets/home.png'
import back from '../Assets/back.png'
import pageBuilder from '../Assets/pageBuilder.png'
import api from '../Assets/api.png'
import extension from '../Assets/extension.jpg'

function AutomatizationCenter() {
  const history = useHistory()
  const actionMenus = [
    {
      backgroundColor: 'colorBlackThird',
      shadowColor: 'colorSecond',
      src: pageBuilder,
      lBackgroundColor: 'colorFirst',
      color: 'colorBlackFirst',
      lShadowColor: 'colorSecond',
      borderColor: 'colorSecond',
      children: 'Create Page Builder',
      sizeHeight: '25',
      sizeWidth: '28',
      onClick: () => history.push('/pageBuilderCreator')
    },
    {
      backgroundColor: 'colorBlackThird',
      shadowColor: 'colorSecond',
      src: api,
      lBackgroundColor: 'colorFirst',
      color: 'colorBlackFirst',
      lShadowColor: 'colorSecond',
      borderColor: 'colorSecond',
      children: 'Api Travel Sequence',
      sizeHeight: '25',
      sizeWidth: '28'
    },
    {
      backgroundColor: 'colorBlackThird',
      shadowColor: 'colorSecond',
      src: extension,
      lBackgroundColor: 'colorFirst',
      color: 'colorBlackFirst',
      lShadowColor: 'colorSecond',
      borderColor: 'colorSecond',
      children: 'Extension Store',
      sizeHeight: '25',
      sizeWidth: '28'
    }
  ]

  return (
    <>
      <Nav backgroundColor="colorFirst" borderColor="colorSecond">
        <Icons src={home} />
        <Title color="colorSecond" shadowColor="colorBlackFourth">
          {' '}
          Automatization Center
        </Title>
        <Icons src={back} />
      </Nav>
      <Main backgroundColor="colorThird" borderColor="colorFirst">
        <ListActionMenu actionMenus={actionMenus} />
      </Main>
    </>
  )
}

export default AutomatizationCenter
