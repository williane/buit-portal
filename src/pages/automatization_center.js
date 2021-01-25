import { useHistory } from 'react-router-dom'
import { ListActionMenu } from 'wmarks-components'
import NavHeader from '../components/NavHeader'
import { Main } from './Styles/automatization_center_style'
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
      <NavHeader>Automatization Center</NavHeader>
      <Main backgroundColor="colorThird" borderColor="colorFirst">
        <ListActionMenu actionMenus={actionMenus} />
      </Main>
    </>
  )
}

export default AutomatizationCenter
