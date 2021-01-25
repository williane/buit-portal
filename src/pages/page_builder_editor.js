import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavHeader from '../components/NavHeader'
import TextBox from '../components/TextBox'
import { Button } from 'wmarks-components'
import {
  Main,
  TextWrapper,
  ButtonWrapper
} from './Styles/page_builder_editor_style'
import getCommand from '../commands'

function PageBuilderEditor() {
  const location = useLocation()
  const [pageBuilder, setPageBuilder] = useState({
    name: '',
    description: '',
    commands: []
  })
  const [forme, setForme] = useState(false)
  const [text, setText] = useState({})
  const [clicked, setClicked] = useState([])
  const [actualCmd, setActualCmd] = useState()
  const [secondReload, setSecondReload] = useState(false)
  const commandText = getCommand(pageBuilder)

  useEffect(() => {
    setPageBuilder({
      ...location.state
    })
    setSecondReload(true)
  }, [location])

  useEffect(() => {
    secondReload && activeButton()
    console.log('entrou no useEffect')
  }, [secondReload])

  useEffect(() => {
    const textarea = document.querySelector('textarea')
    textarea.value = actualCmd
  }, [actualCmd])

  function activeButton() {
    const button = document.getElementsByName('edit')
    console.log('entrou no activeButton')
    button.forEach((b) => {
      if (b.getAttribute('data-cmd').split('.')[1] === 'resource') {
        console.log('entrou no if do activeButton')
        return b.click()
      }
    })
  }

  function isForm(command) {
    if (command.split('.')[1] === 'resource') {
      setForme(true)
    } else {
      setForme(false)
    }
  }

  function isButtonActive(button, event) {
    button.forEach((b) => b.classList.remove('active'))
    event.target.classList.add('active')
  }

  function handleText(commandActive, command, textarea) {
    if (commandActive !== command) {
      setClicked([...clicked, command])
      setText({ ...text, [commandActive]: textarea.value })
    } else {
      setClicked([...clicked, command])
    }
  }

  function getCommandText(command) {
    if (
      command.split('.')[1] === 'resource' ||
      command.split('.')[1] === 'mcmd'
    ) {
      return commandText[command.split('.')[1]]
    } else {
      return commandText[command.split('.')[1] + '_' + command.split('.')[2]]
    }
  }

  function handleClick(event) {
    const button = document.getElementsByName('edit')
    const command = event.target.dataset.cmd
    const index = clicked.length - 1
    const commandActive = clicked[index]
    const textarea = document.querySelector('textarea')

    isButtonActive(button, event)
    isForm(command)
    handleText(commandActive, command, textarea)
    text[command]
      ? setActualCmd(text[command])
      : setActualCmd(getCommandText(command))
  }

  return (
    <>
      <NavHeader>Page Builder Editor</NavHeader>
      <Main backgroundColor="colorBlackFourth" borderColor="colorFirst">
        <TextWrapper>
          <TextBox form={forme} value={actualCmd} readOnly={forme} />
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
                data-cmd={cmd}
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
