import { useEffect } from "react";
import { useHistory, useLocation  } from 'react-router-dom';
import {Title, Icons, Button, Box} from 'wmarks-components';
import {Styles} from 'wmarks-components';
import {Nav, Main, TextWrapper, ButtonWrapper} from './Styles/page_builder_editor_style';
import home from '../Assets/home.png';
import back from '../Assets/back.png';

function PageBuilderEditor(){
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       console.log(location.state); // result: 'some_value'
    }, [location]);

    return(
        <>
        <Styles/>
        <Nav backgroundColor = 'colorFirst' borderColor = 'colorSecond'>
        <Icons src={home} onClick = {() => history.push({pathname:'/automatizationCenter'})}/>
          <Title color= 'colorSecond' shadowColor = 'colorBlackFourth'> Page Builder Editor</Title>
          <Icons src={back} onClick = {() => history.goBack()}/>
        </Nav>
        <Main backgroundColor = 'colorBlackFourth' borderColor = 'colorFirst'>
            <TextWrapper>
                <Box backgroundColor= 'colorThird' borderColor = 'colorFirst' shadowColor= 'colorSecond'>

                </Box>
            </TextWrapper>
            <ButtonWrapper>
                <Button small shadowColor='colorSecond' color='colorBlackFirst' >
                dhlconfgBlckSts.resource
                </Button>
                <Button small shadowColor='colorSecond' color='colorBlackFirst' backgroundColor='colorThird'>
                dhlactListconfgBlckSts.list.action
                </Button>
                <Button small shadowColor='colorSecond' color='colorBlackFirst' >
                dhlactEditconfgBlckSts.edit.action
                </Button>
                <Button small shadowColor='colorSecond' color='colorBlackFirst' >
                dhlactAddconfgBlckSts.add.action
                </Button>
                <Button small shadowColor='colorSecond' color='colorBlackFirst' >
                dhlactDeleteconfgBlckSts.delete.action
                </Button>
                <Button small shadowColor='colorSecond' color='colorBlackFirst' >
                dhl_list_confgBlckSts.mcmd
                </Button>
                <Button small shadowColor='colorSecond' color='colorBlackFirst' >
                dhl_edit_confgBlckSts.mcmd
                </Button>
                <Button small shadowColor='colorSecond' color='colorBlackFirst' >
                dhl_add_confgBlckSts.mcmd
                </Button>
                <Button small shadowColor='colorSecond' color='colorBlackFirst' >
                dhl_delete_confgBlckSts.mcmd
                </Button>
            </ButtonWrapper>
        </Main>
        </> 
    )
}

export default PageBuilderEditor