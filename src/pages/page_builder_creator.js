import { useHistory } from 'react-router-dom';
import {Title, Icons, Box, Field} from 'wmarks-components';
import {Styles} from 'wmarks-components';
import {Nav, Main, FieldWrapper, ButtonWrapper, Wrapper} from './Styles/page_builder_creator_style';
import home from '../Assets/home.png';
import back from '../Assets/back.png';
import { Button } from 'wmarks-components/dist/components';

function PageBuilderCreator(){
    const history = useHistory();

    return(
        <>
        <Styles/>
        <Nav backgroundColor = 'colorFirst' borderColor = 'colorSecond'>
          <Icons src={home} onClick = {() => history.push({pathname:'/automatizationCenter'})}/>
          <Title color= 'colorSecond' shadowColor = 'colorBlackFourth'> Page Builder Creator</Title>
          <Icons src={back} onClick = {() => history.goBack()}/>
        </Nav>
        <Main backgroundColor = 'colorThird' borderColor = 'colorFirst'>
            <Box backgroundColor='colorBlackFourth' shadowColor = 'colorSecond' borderRadius>
                <Field label='Name:'/>
                <Field label='Description:'/>
                <Title color='colorBlackFirst' shadowColor='colorBlackFourth' >Actions & Commands</Title>
                <hr />
                <Wrapper>
                <FieldWrapper>
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                </FieldWrapper>
                <ButtonWrapper>
                <Button small backgroundColor='colorFirst' blur shadowColor='colorBlackThird' borderRadius color='colorBlackFirst' borderColor='colorBlackFirst'>delete</Button>
                <Button small backgroundColor='colorFirst' blur shadowColor='colorBlackThird' borderRadius color='colorBlackFirst' borderColor='colorBlackFirst'>delete</Button>
                <Button small backgroundColor='colorFirst' blur shadowColor='colorBlackThird' borderRadius color='colorBlackFirst' borderColor='colorBlackFirst'>delete</Button>
                <Button small backgroundColor='colorFirst' blur shadowColor='colorBlackThird' borderRadius color='colorBlackFirst' borderColor='colorBlackFirst'>delete</Button>
                <Button small backgroundColor='colorFirst' blur shadowColor='colorBlackThird' borderRadius color='colorBlackFirst' borderColor='colorBlackFirst'>delete</Button>
                <Button small backgroundColor='colorFirst' blur shadowColor='colorBlackThird' borderRadius color='colorBlackFirst' borderColor='colorBlackFirst'>delete</Button>
                <Button small backgroundColor='colorFirst' blur shadowColor='colorBlackThird' borderRadius color='colorBlackFirst' borderColor='colorBlackFirst'>delete</Button>
                <Button small backgroundColor='colorFirst' blur shadowColor='colorBlackThird' borderRadius color='colorBlackFirst' borderColor='colorBlackFirst'>delete</Button>
                <Button small backgroundColor='colorFirst' blur shadowColor='colorBlackThird' borderRadius color='colorBlackFirst' borderColor='colorBlackFirst'>delete</Button>
                </ButtonWrapper>
                </Wrapper>
                <Button small backgroundColor='colorSecond' borderRadius onClick = {() => history.push({pathname:'/pageBuilderEditor'})}>Next</Button>
            </Box>
        </Main>
        </> 
    )
}

export default PageBuilderCreator