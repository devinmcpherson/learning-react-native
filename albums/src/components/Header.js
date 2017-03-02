// Import libraries for making a component
import React from 'react';
import {
  Text,
  View
} from 'react-native';

// Make the component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#E74C3C',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingTop: 7.5,
    paddingBottom: 7.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },

  textStyle: {
    fontSize: 20,
    color: '#ECF0F1',
    fontFamily: 'Cochin'
  }
};

// Make the component available to other parts of the app
export default Header;
