import './Cases.scss';
import caseIkea from './img/ikea.jpg';
import caseBank from './img/bank.jpg';
import case1 from './img/case1.png';
import case2 from './img/case2.png';
import case3 from './img/case3.png';
import case4 from './img/case4.png';
import case5 from './img/case5.png';
import case6 from './img/case6.png';
import ReactTextCollapse from 'react-text-collapse';
const TEXT_COLLAPSE_OPTIONS = {
    collapse: false, // default state when component rendered
    collapseText: 'Läs mer', // text to show when collapsed
    expandText: 'Visa mindre', // text to show when expanded
    minHeight: 100, // component height when closed
    maxHeight: 200, // expanded to
    textStyle: { // pass the css for the collapseText and expandText here
      color: " #ba0000",
      fontSize: "18px",
      cursor: "pointer",  
    }
  }

export default class Cases extends Component {}