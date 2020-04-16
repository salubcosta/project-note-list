import {createAppContainer, createSwitchNavigator} from "react-navigation";

import Main from './pages/Main';
import Note from './pages/Note';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      Note,
    },{
    initialRouteName: 'Main',
    backBehavior: 'history'
  }
  )
);

export default Routes;  