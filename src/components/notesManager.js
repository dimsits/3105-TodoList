import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Modal, Button, ScrollView } from 'react-native';
import { FAB } from 'react-native-paper';
import ChecklistNote from './checklistNote';

const NotesManager = () => {
  const [notes, setNotes] = useState([]);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddNote = () => {
    if (newNoteTitle.trim()) {
      setNotes([...notes, { id: Date.now(), title: newNoteTitle }]);
      setNewNoteTitle('');
      setModalVisible(false);
    }
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Floating Add Note Button */}
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => {
          console.log("FAB Pressed");
          setModalVisible(true);
        }}
      />

      {/* Modal for New Note */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="New Note Title"
              value={newNoteTitle}
              onChangeText={setNewNoteTitle}
              style={styles.input}
            />
            <View style={styles.buttonContainer}>
              <Button
                title="Cancel"
                onPress={() => {
                  console.log("Cancel Pressed");
                  setModalVisible(false);
                }}
              />
              <Button
                title="Add Note"
                onPress={() => {
                  console.log("Add Note Pressed");
                  handleAddNote();
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* Displaying Notes */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
  },
  fab: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#6200ea',
    elevation: 8,
    zIndex: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  scrollContainer: {
    paddingBottom: 80,
  },
});
export default NotesManager;
