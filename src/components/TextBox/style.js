import styled, { css } from 'styled-components'
import { Section, Button, TextArea, Box } from 'wmarks-components'

const hasForm = ({ form }) =>
  form &&
  css`
    & > :nth-child(2) {
      display: flex;
      height: 10rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    & ${Button} {
      margin-left: 1.5rem;
      width: 10rem;
    }

    & ${TextArea} {
      box-sizing: border-box;
      resize: none;
      border: none;
      width: 100%;
      height: 78%;
      padding: 2rem;
    }
  `
export const FieldWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 50%;
  padding: 1rem;

  & label {
    font-family: 'Fira Code', monospace;
    font-size: 2rem;
    align-items: flex-end;
    justify-content: flex-end;
    height: 3rem;
    margin-bottom: 0;
    padding: 0.5rem;

    & span {
      font-family: 'Fira Code', monospace;
      font-size: 1.5rem;
      height: 2rem;
      padding: 0.5rem;
    }

    & input {
      font-family: 'Fira Code', monospace;
      font-size: 1.5rem;
      height: 2rem;
      padding: 0.5rem;
      border: 1px solid;
    }
  }
`

export const SelectiondWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 20%;
  padding: 1rem;

  & > :nth-child(1) {
    margin-left: 1.8rem;
  }

  & label {
    font-family: 'Fira Code', monospace;
    font-size: 2rem;
    align-items: flex-end;
    justify-content: flex-end;
    height: 3rem;
    margin-bottom: 0;
    padding: 0.5rem;

    & span {
      font-family: 'Fira Code', monospace;
      font-size: 1.5rem;
      height: 2rem;
      padding: 0.5rem;
    }

    & select {
      font-family: 'Fira Code', monospace;
      font-size: 1.5rem;
      height: 3rem;
      padding: 0.5rem;
      border: 1px solid;
    }
  }
`

export const BoxText = styled(Box)`
  padding: 0;
  min-width: 73rem;

  & ${Section} {
    display: flex;
    gap: 0.2rem;
    justify-content: flex-start;
    height: 5rem;
    padding: 0.5rem;
  }

  & ${Section} > ${Button} {
    font-family: 'Fira Code', monospace;
    font-size: 1.5rem;
    padding: 0.5rem;
  }

  & ${TextArea} {
    box-sizing: border-box;
    resize: none;
    border: none;
    width: 100%;
    height: 92.5%;
    padding: 2rem;
  }

  ${hasForm};
`
