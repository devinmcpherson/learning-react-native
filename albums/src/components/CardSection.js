import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.cardSectionStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  cardSectionStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#ECF0F1',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#2980B9',
    position: 'relative'
  }
};

export default CardSection;
