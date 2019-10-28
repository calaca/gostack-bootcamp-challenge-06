import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

export default class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    loading: false,
  };

  render() {
    const { loading } = this.state;
    const { navigation } = this.props;
    const repository = navigation.getParam('repository');

    return (
      <>
        <WebView
          source={{ uri: repository.html_url }}
          style={{ flex: 1 }}
          renderLoading={loading}
          startInLoadingState
        />
      </>
    );
  }
}
