import React from 'react';
import NavigationBar from 'react-native-navbar';
import { Alert, Image } from 'react-native';

const titleVal = {
    title: 'Note Pad',
}

const onRightClick = {
    title: '</>',
    handler: () => {Alert.alert('Devloper Information🔭','Syntax Error!!!')},
}


const NavBar = () => {
  return (
    <>
      <NavigationBar title={titleVal} rightButton={onRightClick} ></NavigationBar>
    </>
  );
};

export default NavBar;
