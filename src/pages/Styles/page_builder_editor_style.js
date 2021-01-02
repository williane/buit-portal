import styled from 'styled-components';
import {Section, Icons, Button} from 'wmarks-components';

export const Nav = styled(Section)`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5rem;
    padding-right: 5rem;

    & > ${Icons}{
        height: 5rem;
        width: 5rem;
    }
`

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

    & ${Button}{
        font-family: 'Fira Code', monospace;
        font-size: 1.5rem;
        width: 100%;
        text-align: left;
        margin-bottom: 0.7rem;
    }
`