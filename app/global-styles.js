import { injectGlobal } from 'styled-components';
import '!!style-loader!css-loader!./assets/font-awesome/css/font-awesome.css';
import '!!style-loader!css-loader!./assets/bootstrap/css/bootstrap.css';
// import '!!style-loader!css-loader!./assets/css/main.css';
// import '!!style-loader!css-loader!./assets/css/skin.css';


/* eslint no-unused-expressions: 0 */
injectGlobal`
  .react-grid-Main{
height: 100%;
}

.react-grid-Container{
height: 100%;
}

.nav .active {
  border-bottom: 2px solid #ff3200;

}

.panel-horizontal{
  float: left;
  width:100%;
}
.panel-horizontal .panel{
 width:45%;
 margin: 5px;
}

`;


