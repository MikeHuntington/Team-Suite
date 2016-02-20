'use strict';

import React, {
  View,
  Text,
  StyleSheet,
  ListView,
  Component
} from 'react-native';

class EventList extends Component {

  constructor() {
    super();

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {dataSource: ds.cloneWithRows(['row 1', 'row 2'])};
  }

  render() {
    return(
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    )
  }

  renderRow(rowData) {
    return(
      <View style={styles.cellRow}>
        <View style={styles.dateContainer}>
          <View style={styles.dateBox}>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <Text>{rowData}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listView: {
    flex:1
  },
  cellRow: {
    flexDirection:'row',
    alignSelf:'stretch',
    height:200,
    backgroundColor:'#EEE'
  },
  dateContainer: {
    backgroundColor:'#DDD',
    width:100,
    padding:10
  },
  dateBox: {
    backgroundColor:'#FFF',
    alignSelf:'stretch',
    height:100
  },
  detailContainer: {
    flex:1,
    backgroundColor:'#EFF0EC'
  }
});

module.exports = EventList;
