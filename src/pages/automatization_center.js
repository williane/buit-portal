import {Title, Icons, ActionMenu} from 'wmarks-components';
import {Styles} from 'wmarks-components';
import {Nav, Main} from './style';
import home from '../Assets/home.png';
import back from '../Assets/back.png';
import pageBuilder from '../Assets/pageBuilder.png';
import api from '../Assets/api.png';
import extension from '../Assets/extension.jpg';

function AutomatizationCenter() {
  return (
    <>
    <Styles/>
    <Nav backgroundColor = 'colorFirst' borderColor = 'colorSecond'>
      <Icons src={home}/>
      <Title color= 'colorSecond' shadowColor = 'colorBlackFourth'> Automatization Center</Title>
      <Icons src={back}/>
    </Nav>
    <Main  backgroundColor = 'colorThird' borderColor = 'colorFirst'>
      <ActionMenu  backgroundColor= 'colorBlackFourth' shadowColor= 'colorSecond' src= {pageBuilder}  lBackgroundColor= 'colorFirst'  color= 'colorBlackFirst'  lShadowColor= 'colorSecond'  borderColor= 'colorSecond'>
        Create Page Builder
      </ActionMenu>
      <ActionMenu backgroundColor= 'colorBlackFourth' shadowColor= 'colorSecond' src= {api}  lBackgroundColor= 'colorFirst'  color= 'colorBlackFirst'  lShadowColor= 'colorSecond'  borderColor= 'colorSecond'>
        Api Travel Sequence
      </ActionMenu>
      <ActionMenu backgroundColor= 'colorBlackFourth' shadowColor= 'colorSecond' src= {extension}  lBackgroundColor= 'colorFirst'  color= 'colorBlackFirst'  lShadowColor= 'colorSecond'  borderColor= 'colorSecond'>
        Extension Store
      </ActionMenu>      
    </Main>
    </>
  );
}

export default AutomatizationCenter;
