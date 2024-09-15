import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ChecklistNotesManager from './src/components/notesManager';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ChecklistNotesManager />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});