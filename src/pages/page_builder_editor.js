import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavHeader from '../components/NavHeader'
import { Button, Box } from 'wmarks-components'
import {
  Main,
  TextWrapper,
  ButtonWrapper
} from './Styles/page_builder_editor_style'

function PageBuilderEditor() {
  const location = useLocation()
  const [pageBuilder, setPageBuilder] = useState({
    name: '',
    description: '',
    commands: []
  })

  useEffect(() => {
    setPageBuilder({
      ...location.state
    })
  }, [location])

  function handleClick(event) {
    const button = document.getElementsByName('edit')
    button.forEach((b) => b.classList.remove('active'))
    event.target.classList.add('active')
  }

  return (
    <>
      <NavHeader />
      <Main backgroundColor="colorBlackFourth" borderColor="colorFirst">
        <TextWrapper>
          <Box
            backgroundColor="colorThird"
            borderColor="colorFirst"
            shadowColor="colorSecond"
          ></Box>
        </TextWrapper>
        <ButtonWrapper>
          {pageBuilder &&
            pageBuilder.commands.map((cmd) => (
              <Button
                small
                shadowColor="colorSecond"
                color="colorBlackFirst"
                key={cmd}
                name="edit"
                onClick={handleClick}
              >
                {cmd}
              </Button>
            ))}
        </ButtonWrapper>
      </Main>
    </>
  )
}

export default PageBuilderEditor
