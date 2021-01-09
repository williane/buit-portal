import styled from 'styled-components'
import { Section, Icons, Title } from 'wmarks-components'

const Nav = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  & > ${Icons} {
    height: 4rem;
    width: 4rem;

    :not(:last-child) {
      height: 3.5rem;
      width: 3.5rem;
    }
  }

  & > ${Title} {
    font-size: 2.5rem;
  }
`
export default Nav
