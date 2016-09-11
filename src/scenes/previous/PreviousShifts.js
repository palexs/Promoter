import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class PreviousShifts extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.enterPreviousShifts();
  }

  componentWillUnmount() {
    this.props.leavePreviousShifts();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text>
            currentView:
            {this.props.currentView.currentView}
          </Text>
        </View>
      </View>
    );
  }
}

PreviousShifts.propTypes = {
  navigator: React.PropTypes.object,
  navigate: React.PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 80,
    paddingLeft: 5,
    paddingRight: 5,
  }
});


export default PreviousShifts;
