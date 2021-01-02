import styled from 'styled-components';
import {Section, Icons, Button, Title} from 'wmarks-components';

export const Nav = styled(Section)`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

    & > ${Icons}{
        height: 4rem;
        width: 4rem;

        :not(:last-child) {
            height: 3.5rem;
            width: 3.5rem;
        }
    }

    & > ${Title}{
        font-size: 2.5rem;
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
    padding-top: 1rem;

    & ${Button}{
        font-family: 'Fira Code', monospace;
        font-size: 1.5rem;
        width: 100%;
        text-align: left;
        margin-bottom: 0.7rem;
    }

    & .active{
            background-color: var(--color-third);
            outline: none;
            transform: scale(1.03);
        }
`