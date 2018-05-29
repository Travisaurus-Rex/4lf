import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export const SearchOrFilter = (props) => {
  return (
    <View style={styles.columnContainerBorder}>
      <Button
        iconRight={{name: 'settings'}}
        textStyle={{
          fontWeight: "500"
        }}
        buttonStyle={{
          width: 130,
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: '#fff',
        }}
        title="FILTERS"
        onPress={props.filters}
      />
      <Button
        iconRight={{name: 'search', color: '#23d69d'}}
        textStyle={{
          color: '#23d69d',
          fontWeight: "500"
        }}
        buttonStyle={{
          width: 130,
          backgroundColor: '#fff',
        }}
        title="SEARCH"
        onPress={props.search}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  columnContainerBorder: {
    borderTopWidth: 1,
    borderColor: '#fff',
    paddingTop: 24,
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between', 
  }
})