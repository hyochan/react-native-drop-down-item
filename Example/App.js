/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import DropDownItem from 'react-native-drop-down-item';

const IC_ARR_DOWN = require('./icons/ic_arr_down.png');
const IC_ARR_UP = require('./icons/ic_arr_up.png');

type Props = {};
export default class App extends Component<Props> {
  state = {
    contents: [
      {
        title: 'Title 1',
        body: 'Hi. I love this component. What do you think?',
      },
      {
        title: 'See this one too',
        body: 'Yes. You can have more items.',
      },
      {
        title: 'Thrid thing',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ alignSelf: 'stretch' }}>
          {
            this.state.contents
              ? this.state.contents.map((param, i) => {
                return (
                  <DropDownItem
                    key={i}
                    style={styles.dropDownItem}
                    contentVisible={false}
                    invisibleImage={IC_ARR_DOWN}
                    visibleImage={IC_ARR_UP}
                    header={
                      <View style={styles.header}>
                        <Text style={{
                          fontSize: 16,
                          color: 'blue',
                        }}>{param.title}</Text>
                      </View>
                    }
                  >
                    <Text style={[
                      styles.txt,
                      {
                        fontSize: 20,
                      }
                    ]}>
                      {param.body}
                    </Text>
                  </DropDownItem>
                );
              })
              : null
          }
          <View style={{ height: 96 }}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 60,
  },
  header: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 12,
    color: 'rgb(74,74,74)',
    marginRight: 60,
    flexWrap: 'wrap',
  },
  txt: {
    fontSize: 14,
  },
});
