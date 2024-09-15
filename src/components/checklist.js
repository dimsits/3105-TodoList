import React from 'react';
import { List, Checkbox } from 'react-native-paper';

const Checklist = ({ item, onToggle }) => {
  return (
    <List.Item
      title={item.text}
      left={() => (
        <Checkbox
          status={item.checked ? 'checked' : 'unchecked'}
          onPress={() => onToggle(item.id)}
        />
      )}
    />
  );
};

export default Checklist;