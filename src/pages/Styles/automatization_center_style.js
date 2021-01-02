import styled from 'styled-components';
import {Section, Icons, Title} from 'wmarks-components';

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
    flex-wrap:wrap;
    justify-content: space-around;
    min-height: 80vh;
    padding: 5rem 25rem 5rem 25rem;
    

    @media(max-width: 1336px) {
        padding: 5rem 10rem 5rem 10rem;  
    }

    @media(max-width: 1110px) {
        padding: 5rem 5rem 5rem 5rem;  
    }

    @media(max-width: 1020px) {
        padding: 5rem 3rem 5rem 3rem;  
    }

    @media(max-width:900px) {
        padding: 5rem 1rem 5rem 1rem;  
    }

    @media(max-width: 680px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 5rem 3rem 5rem 3rem;  
    }

    & h2{
        font-size: 1.3rem;
    }

`