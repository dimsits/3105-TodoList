import React from 'react';
import { List, Checkbox, IconButton } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const Checklist = ({ item, onToggle, onDelete }) => {
  return (
    <View style={styles.itemContainer}>
      <List.Item
        title={item.text}
        titleStyle={styles.title} // Apply the custom title style
        left={() => (
          <Checkbox
            status={item.checked ? 'checked' : 'unchecked'}
            onPress={() => onToggle(item.id)}
            color="#FFFFFF" // Set the checkbox color to white
          />
        )}
        right={() => (
          <IconButton
            icon="delete"
            onPress={() => onDelete(item.id)}
            iconColor="#FFFFFF" // Set the icon color to white
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
  title: {
    color: '#FFFFFF', // Set the title color to white
  },
});

export default Checklist;
