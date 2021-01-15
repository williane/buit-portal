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

function PageBuilderEditor() {
  const location = useLocation()
  const [pageBuilder, setPageBuilder] = useState({
    name: '',
    description: '',
    commands: []
  })
  const [form, setForm] = useState(false)

  useEffect(() => {
    setPageBuilder({
      ...location.state
    })
  }, [location])

  function handleClick(event) {
    const button = document.getElementsByName('edit')
    button.forEach((b) => b.classList.remove('active'))
    event.target.classList.add('active')
    if (event.target.dataset.cmd.split('.')[1] === 'resource') {
      setForm(true)
    } else {
      setForm(false)
    }
  }

  return (
    <>
      <NavHeader />
      <Main backgroundColor="colorBlackFourth" borderColor="colorFirst">
        <TextWrapper>{form ? <TextBox form /> : <TextBox />}</TextWrapper>
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
