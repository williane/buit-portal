import styled from 'styled-components'
import { Section, Icons, Title, Image } from 'wmarks-components'

export const IconsWrapper = styled.div`
  display: flex;
  gap: 2rem;
`

export const Nav = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  & ${Image} {
    width: 20rem;
    height: 5rem;
  }

  & ${Icons} {
    height: 4rem;
    width: 4rem;

    :not(:last-child) {
      height: 3.5rem;
      width: 3.5rem;
    }
  }

  & > ${Title} {
    font-family: Delivery, Verdana, sans-serif;
    font-weight: bold;
    font-size: 4rem;
    text-shadow: 0px 0.15rem 0px #fff;
    margin-right: 10rem;
    margin-bottom: 0;
  }
`
