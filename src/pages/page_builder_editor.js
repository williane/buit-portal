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
import { saveAs } from 'file-saver'

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
  const [propierties, setPropierties] = useState([])
  const [save, setSave] = useState(false)
  const commandText = (cmd) => getCommand(pageBuilder, cmd, propierties)

  useEffect(() => {
    setPageBuilder({
      ...location.state
    })
  }, [location])

  useEffect(() => {
    pageBuilder.name && activeButton()
  }, [pageBuilder])

  useEffect(() => {
    const textarea = document.querySelector('textarea')
    textarea.value = actualCmd
  }, [actualCmd])

  useEffect(() => {
    const index = clicked.length - 1
    const command = clicked[index]
    if (command) {
      if (
        command.split('.')[1] === 'resource' ||
        command.split('.')[2] === 'action'
      ) {
        setActualCmd(getCommandText(command))
      }
    }
  }, [propierties, clicked])

  useEffect(() => {
    const index = clicked.length - 1
    const command = clicked[index]
    if (command && save) {
      let blob = new Blob([text[command]], {
        type: 'text/plain;charset=utf-8'
      })

      saveAs(blob, command.replace(/[.]\w*[.]/g, '.'))
    }
    setSave(false)
  }, [text, save])

  function activeButton() {
    const button = document.getElementsByName('edit')
    button.forEach((b) => {
      if (b.getAttribute('data-cmd').split('.')[1] === 'resource') {
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
      return commandText(command)[command.split('.')[1]].replace(
        new RegExp(['>,'], 'g'),
        '>'
      )
    } else {
      return commandText(command)[
        command.split('.')[1] + '_' + command.split('.')[2]
      ].replace(new RegExp(['>,'], 'g'), '>')
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

  function handleIncludeClick() {
    const name = document.querySelectorAll('input')[0]
    const description = document.querySelectorAll('input')[1]
    const pk = document.querySelectorAll('select')[0]
    const type = document.querySelectorAll('select')[1]

    setPropierties([
      ...propierties,
      {
        name: name.value,
        description: description.value,
        pk: pk.value,
        type: type.value
      }
    ])

    name.value = null
    description.value = null

    name.focus()
  }

  function handleSave() {
    const index = clicked.length - 1
    const command = clicked[index]
    const textarea = document.querySelector('textarea')

    setText({ ...text, [command]: textarea.value })
    setSave(true)
  }

  return (
    <>
      <NavHeader>Page Builder Editor</NavHeader>
      <Main backgroundColor="colorBlackFourth" borderColor="colorFirst">
        <TextWrapper>
          <TextBox
            form={forme}
            value={actualCmd}
            readOnly={forme}
            includeOnClinck={handleIncludeClick}
            saveOnClick={handleSave}
          />
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
