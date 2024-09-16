import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import Checklist from './checklist';

const ChecklistNote = ({ note, onDeleteNote }) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, { id: Date.now(), text: newItem, checked: false }]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
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
    <View style={styles.noteInput}>
      <TextInput
        placeholder="New To-Do"
        value={newItem}
        onChangeText={setNewItem}
        style={styles.input}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
    </View>

      <Button title="Delete Note" onPress={() => onDeleteNote(note.id)} />

      <View style={styles.buttonRow}>
        <Button title="Check All" onPress={() => handleMassToggle(true)} />
        <Button title="Uncheck All" onPress={() => handleMassToggle(false)} />
      </View>

      <TouchableOpacity
        style={styles.dropdownToggle}
        onPress={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        <Text style={styles.dropdownToggleText}>
          {isDropdownVisible ? 'Hide' : 'Show'}
        </Text>
      </TouchableOpacity>

      {isDropdownVisible && (
        <ScrollView>
          {items.map((item) => (
            <Checklist key={item.id} item={item} onToggle={handleToggleItem} onDelete={handleDeleteItem} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    marginBottom: 16,
    padding: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10, // Add borderRadius to curve the corners
    backgroundColor: '#000080', // Navy blue background color
  },
  noteInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    width: '95%',
    color:'#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FFFFFF',
  },
  input: {
    flex: 1,
    marginBottom: 8,
    borderBottomWidth: 1,
    padding: 8,
    color: '#ffffff',
  },
  button: {
    marginVertical: 8,
    borderRadius: 10,
  },
  addButton: {
    width: 50, // Fixed width for the button
    height: 40,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8, // Space between the input and the button
  },
  buttonRow: {
    flexDirection: 'row', // Aligns buttons horizontally
    justifyContent: 'space-between', // Adds space between buttons
    marginVertical: 8,
  },
  dropdownToggle: {
    marginVertical: 8,
    padding: 5,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  dropdownToggleText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});

export default ChecklistNote;