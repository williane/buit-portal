import styled from 'styled-components';
import {Section, Icons} from 'wmarks-components';

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
    justify-content: space-between;
    height: 80vh;
    padding: 5rem 20rem 5rem 20rem;

    & h2{
        font-size: 1.3rem;
    }

`