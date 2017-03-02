import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';
import Button from './Button.js';

const AlbumDetail = ({ album }) => {
  const {
    title,
    artist,
    thumbnail_image,
    image } = album;
  const {
    headerTextArtistStyle,
    headerTextTitleStyle,
    headerContainerStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    imageStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
          source={{ uri: thumbnail_image }}
          style={thumbnailStyle}
          />
        </View>
        <View style={headerContainerStyle}>
          <Text style={headerTextTitleStyle}>{title}</Text>
          <Text style={headerTextArtistStyle}>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
        source={{ uri: image }}
        style={imageStyle}
        />
      </CardSection>

      <CardSection>
        <Button />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 10
  },

  headerTextArtistStyle: {
    color: '#000',
    fontFamily: 'Cochin'
  },

  headerTextTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    color: '#E74C3C'
  },

  thumbnailStyle: {
    height: 50,
    width: 50
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
