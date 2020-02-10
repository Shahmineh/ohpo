import './MainNav.scss';
import Scrollchor from 'react-scrollchor';
// import logo from './images/logo.svg';
import logo from "./images/ohpo-logo-rgb.png"
@withRouter @observer export default class MainNav extends Component {
  
  @observable isOpen = false;

  toggle(){
    this.isOpen = !this.isOpen;
  }

}
