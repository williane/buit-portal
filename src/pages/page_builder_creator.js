import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { Title, Icons, Box, Field, Button } from 'wmarks-components'
import {
  Nav,
  Main,
  FieldWrapper,
  ButtonWrapper,
  Wrapper
} from './Styles/page_builder_creator_style'
import home from '../Assets/home.png'
import back from '../Assets/back.png'

function PageBuilderCreator() {
  const history = useHistory()
  const [pageBuilder, setPageBuilder] = useState({
    name: '',
    description: '',
    commands: []
  })

  function handleInputName(event) {
    if (!event.target.value) {
      return setPageBuilder({
        name: '',
        description: '',
        commands: []
      })
    }
    setPageBuilder({
      name: event.target.value,
      commands: [
        `dhl${event.target.value}.resource`,
        `dhlactList${event.target.value}.list.action`,
        `dhlactEdit${event.target.value}.edit.action`,
        `dhlactAdd${event.target.value}.add.action`,
        `dhlactDelete${event.target.value}.delete.action`,
        `dhl_list_${event.target.value}.mcmd`,
        `dhl_edit_${event.target.value}.mcmd`,
        `dhl_add_${event.target.value}.mcmd`,
        `dhl_delete_${event.target.value}.mcmd`
      ]
    })
  }

  function handleInputDesc(event) {
    setPageBuilder({
      ...pageBuilder,
      description: event.target.value
    })
  }

  function handleNext(event) {
    event.preventDefault()
    if (!pageBuilder.description) {
      return alert('Field name and description are required!')
    }

    if (pageBuilder.commands[0]) {
      return history.push({
        pathname: '/pageBuilderEditor',
        state: pageBuilder
      })
    }
  }

  function handleDelete(event) {
    // eslint-disable-next-line
    const commands = pageBuilder.commands.filter(
      (cmd) => cmd != event.target.id
    )
    setPageBuilder({
      name: pageBuilder.name,
      description: pageBuilder.description,
      commands: commands
    })
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
          Page Builder Creator
        </Title>
        <Icons src={back} onClick={() => history.goBack()} />
      </Nav>
      <Main backgroundColor="colorThird" borderColor="colorFirst">
        <Box
          backgroundColor="colorBlackFourth"
          shadowColor="colorSecond"
          borderRadius
        >
          <Field label="Name:" onChange={handleInputName} required />
          <Field label="Description:" onChange={handleInputDesc} required />
          <Title color="colorBlackFirst" shadowColor="colorBlackFourth">
            Actions & Commands
          </Title>
          <hr />
          <Wrapper>
            <FieldWrapper>
              {pageBuilder &&
                pageBuilder.commands.map((cmd) => (
                  <Field key={'input_' + cmd} value={cmd} readOnly name={cmd} />
                ))}
            </FieldWrapper>
            <ButtonWrapper>
              {pageBuilder &&
                pageBuilder.commands.map((cmd) => (
                  <Button
                    small
                    backgroundColor="colorFirst"
                    blur
                    shadowColor="colorBlackThird"
                    borderRadius
                    color="colorBlackFirst"
                    borderColor="colorBlackFirst"
                    key={'button_' + cmd}
                    id={cmd}
                    onClick={handleDelete}
                  >
                    delete
                  </Button>
                ))}
            </ButtonWrapper>
          </Wrapper>
          <Button
            small
            backgroundColor="colorSecond"
            borderRadius
            onClick={handleNext}
          >
            Next
          </Button>
        </Box>
      </Main>
    </>
  )
}

export default PageBuilderCreator
