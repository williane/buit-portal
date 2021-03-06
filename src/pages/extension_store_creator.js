import NavHeader from '../components/NavHeader'
import { Main } from './Styles/extension_store_creator_style'
import { Button } from 'wmarks-components'

function ExtensionStoreCreator() {
  return (
    <>
      <NavHeader>Extension Store Creator</NavHeader>
      <Main backgroundColor="colorThird" borderColor="colorFirst">
        <Button>Gerar nova extension</Button>
      </Main>
    </>
  )
}

export default ExtensionStoreCreator
