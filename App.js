import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NotesManager from './src/components/notesManager';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NotesManager />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000033",
  },
});
