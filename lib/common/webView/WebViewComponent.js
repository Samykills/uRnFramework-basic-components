import React, {Component} from 'react';
import {WebView,Alert} from 'react-native';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';


class WebViewComponent extends Component {
	render () {
    	return (
      		<WebView
      		 startInLoadingState={true}
        	source={{uri: this.props.uri}}
        	onLoadStart={this._LoadStart}
        	onLoadEnd={this._LoadEnd}
        	onLoad={this._Load}
        	onError={this._Error}/>
    	)
	}

	_Error() {
		console.log("ERROR!!!");
		Alert.alert("Error","Unable to load page");
		Actions.pop();
	}

	_LoadStart() {
		console.log("Loading STARTED!!!");
	}

	_LoadEnd() {
		console.log("Loading FINISHED!!!");
	}

	_Load() {
		console.log("LOADING!!!");
	}
}

WebViewComponent.propTypes = {
	uri: PropTypes.string
};

export default WebViewComponent;