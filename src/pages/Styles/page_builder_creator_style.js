import styled from 'styled-components';
import {Section, Icons, Title, Box, Button} from 'wmarks-components';

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
    justify-content: center;
    min-height: 80vh;
    padding: 2rem 5rem 2rem 5rem;

    & > ${Box}{
        max-width: 100rem;
        padding-left: 3rem;
        padding-right: 3rem;
    }
    

    & h2{
        font-size: 1.3rem;
    }
    
    & span {
        font-size: 1.8rem;
        margin-bottom: 0px;
        }

    & > article > label{
        margin-bottom: 0px;  
        
        & input{
            font-family: 'Fira Code', monospace;
            font-size: 1.5rem;
        }
    }

    & ${Title}{
        font-size: 1.8rem;
        margin-top: 2.5rem;
        margin-bottom: 0.5rem;
        text-align: left;
        line-height: 2rem;
    }

    & hr{
        height: 0.3rem;
        background-color: var(--color-second);
        border: none;
        margin-bottom: 2.5rem;
    }

    & ${Button}{
        width: 100%;
    }

`
export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`

export const FieldWrapper = styled.div`
    width: 85%;
    margin-right: 2rem;

    & input{
        font-family: 'Fira Code', monospace;
        font-size: 1.5rem;
    }
`
export const ButtonWrapper = styled.div`
    width: 15%;

    & > ${Button}{
        font-size: 1.3rem;
        margin-bottom: 1.5rem;
        padding: 0.9rem;
    }
`