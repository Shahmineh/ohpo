import './App.scss';
import imgLinkedIn from './images/linkedin-sign.png';
import imgMail from './images/mail-black-envelope-symbol.png';

@observer export default class App extends Component {

  @observable style = {opacity: 0};
  
  async start(){
    // Note: We don't use jQuery very much,
    // in fact only in the code below

    // avoid FOUC by waiting for styles to load
    // and then fade in the app
    while(this.style.opacity < 1){
      await sleep(60);
      let ok = $('body').css('font-family').length > 10;
      this.style.opacity += ok ? .1 : 0;
    }

    // no focusing of buttons when you click them
    $(document).on('click', 'button', function(){ $(this).blur(); })
  }

}