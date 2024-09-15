import React from 'react';
import { List, Checkbox, Iconbutton, IconButton } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const Checklist = ({ item, onToggle, onDelete }) => {
  return (
    <View style={StyleSheet.itemContainer}>
        <List.Item
            title={item.text}
            left={() => (
                <Checkbox
                    status={item.checked ? 'checked' : 'unchecked'}
                    onPress={() => onToggle(item.id)}
                />
            )}
            right = {() => (
                <IconButton
                    icon="delete"
                    onPress={() => onDelete(item.id)}
                />
            )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default Checklist;