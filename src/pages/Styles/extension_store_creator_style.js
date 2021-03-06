import styled from 'styled-components'
import { Section } from 'wmarks-components'

export const Main = styled(Section)`
  display: flex;
  min-height: 80vh;
  justify-content: center;

  & h2 {
    font-family: Delivery, Verdana, sans-serif;
    font-weight: bold;
    font-size: 2.5rem;
  }
`
