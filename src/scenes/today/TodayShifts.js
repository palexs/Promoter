import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class TodayShifts extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.enterTodayShifts();
  }

  componentWillUnmount() {
    this.props.leaveTodayShifts();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Today Shifts view
        </Text>
      </View>
    );
  }
}

TodayShifts.propTypes = {
  navigator: React.PropTypes.object,
  navigate: React.PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default TodayShifts;
