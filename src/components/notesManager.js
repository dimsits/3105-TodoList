import React, { useState } from 'react';
import { View, Button, ScrollView, StyleSheet, TextInput } from 'react-native';
import ChecklistNote from './checklistNote';

const NotesManager = () => {
  const [notes, setNotes] = useState([]);
  const [newNoteTitle, setNewNoteTitle] = useState('');

  const handleAddNote = () => {
    if (newNoteTitle.trim()) {
      setNotes([...notes, { id: Date.now(), title: newNoteTitle }]);
      setNewNoteTitle('');
    }
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New Note Title"
        value={newNoteTitle}
        onChangeText={setNewNoteTitle}
        style={styles.input}
      />
      <Button title="Add Note" onPress={handleAddNote} />

      <ScrollView>
        {notes.map((note) => (
          <ChecklistNote key={note.id} note={note} onDeleteNote={handleDeleteNote} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom: 5,
  },
  input: {
    marginBottom: 16,
    borderBottomWidth: 1,
    padding: 8,
  },
});

export default NotesManager;