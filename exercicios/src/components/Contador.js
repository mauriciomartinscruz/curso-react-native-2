import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default class Contador extends Component {
  state = {
    number: 0,
  };

  constructor(props) {
    super(props);

    this.moreOne = this.moreOne.bind(this);
  }

  moreOne = () => {
    this.setState({number: this.state.number + 1});
  };

  clean = () => {
    this.setState({number: 0});
  };

  render() {
    return (
      <View>
        <Text style={{fontSize: 40}}>{this.state.number}</Text>
        <TouchableHighlight onPress={this.moreOne} onLongPress={this.clean}>
          <Text>Increment/Clear</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
