import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, ScrollView, Text } from 'react-native';
import Checklist from './checklist';

const ChecklistNote = ({ note, onDeleteNote }) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, { id: Date.now(), text: newItem, checked: false }]);
      setNewItem('');
    }
  };

  const handleToggleItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleMassToggle = (checkAll) => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, checked: checkAll }))
    );
  };

  return (
    <View style={styles.noteContainer}>
    <Text style={styles.title}>{note.title}</Text>
      <Button title="Delete Note" onPress={() => onDeleteNote(note.id)} />
      <TextInput
        placeholder="New To-Do"
        value={newItem}
        onChangeText={setNewItem}
        style={styles.input}
      />
      <Button title="Add to-do" onPress={handleAddItem} />

      <Button title="Check All" onPress={() => handleMassToggle(true)} />
      <Button title="Uncheck All" onPress={() => handleMassToggle(false)} />

      <ScrollView>
        {items.map((item) => (
          <Checklist key={item.id} item={item} onToggle={handleToggleItem} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    marginBottom: 16,
    padding: 16,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    marginBottom: 8,
    borderBottomWidth: 1,
    padding: 8,
  },
});

export default ChecklistNote;