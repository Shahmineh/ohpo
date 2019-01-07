import './MainNav.scss';
import Scrollchor from 'react-scrollchor';
// import logo from './images/logo.svg';
@withRouter @observer export default class MainNav extends Component {
  
  @observable isOpen = false;

  toggle(){
    this.isOpen = !this.isOpen;
  }

}
