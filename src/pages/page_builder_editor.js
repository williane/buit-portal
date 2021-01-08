import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Title, Icons, Button, Box } from 'wmarks-components'
import {
  Nav,
  Main,
  TextWrapper,
  ButtonWrapper
} from './Styles/page_builder_editor_style'
import home from '../Assets/home.png'
import back from '../Assets/back.png'

function PageBuilderEditor() {
  const history = useHistory()
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
      <Nav backgroundColor="colorFirst" borderColor="colorSecond">
        <Icons
          src={home}
          onClick={() => history.push({ pathname: '/automatizationCenter' })}
        />
        <Title color="colorSecond" shadowColor="colorBlackFourth">
          {' '}
          Page Builder Editor
        </Title>
        <Icons src={back} onClick={() => history.goBack()} />
      </Nav>
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
