import styled from 'styled-components'
import { Section, Button } from 'wmarks-components'

export const Main = styled(Section)`
  display: flex;
  min-height: 80vh;
  height: 80vh;
  padding: 5rem 25rem 5rem 25rem;
`
export const TextWrapper = styled.div`
  height: 100%;
  width: 70%;
`
export const ButtonWrapper = styled.div`
  height: 100%;
  width: 30%;
  padding-top: 1rem;

  & ${Button} {
    font-family: 'Fira Code', monospace;
    font-size: 1.5rem;
    width: 100%;
    text-align: left;
    margin-bottom: 0.7rem;
  }

  & .active {
    background-color: var(--color-third);
    outline: none;
    transform: scale(1.03);
  }
`
