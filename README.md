# react-native-drop-down-item
<p align="left">
  <a href="https://npmjs.org/package/react-native-drop-down-item"><img alt="npm version" src="http://img.shields.io/npm/v/react-native-drop-down-item.svg?style=flat-square"></a>
  <a href="https://npmjs.org/package/react-native-drop-down-item"><img alt="npm version" src="http://img.shields.io/npm/dm/react-native-drop-down-item.svg?style=flat-square"></a>
</p>
Simple drop down item component for react-native. This component supports drop down toggle with animation.<br/>
<img src="https://user-images.githubusercontent.com/27461460/47951961-a7a7e500-dfab-11e8-9189-86c0eddb6e12.gif"/>

## Changelogs
- **[1.0.2]**
  + Support readme.
- **[1.0.0]**
  + First time publish.

## Npm repo
https://www.npmjs.com/package/react-native-drop-down-item

## Git repo
https://github.com/dooboolab/react-native-drop-down-item

## Props
|    | necessary | types | default
|----|-----|-----|---------|
|contentVisible|  | boolean | `false` |
|header| ✓ | any | `<View/>` |
|backgroundColor|  | string | `transparent` |
|titleBackground|  | string | `transparent` |
|contentBackground|  | string | `transparent` |
|underlineColor|  | string | `transparent` |
|visibleImage|  | any | `undefined` |
|invisibleImage|  | any | `undefined` |

## Getting started
`$ npm install react-native-drop-down-item --save`

```javascript
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
                <View>
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
});
```
