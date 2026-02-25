import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  View,
  Text,
} from 'react-native';

import { ThemedView } from '@/components/themed-view';

export default function ItemListScreen() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState<{ id: string; text: string }[]>([]);
  const [error, setError] = useState('');

  const addItem = () => {
    if (inputText.trim() === '') {
      setError('Please enter text before adding');
    } else {
      const newItem = { id: Date.now().toString(), text: inputText };
      setItems([...items, newItem]);
      setInputText('');
      setError('');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter item"
          placeholderTextColor="#888"
          value={inputText}
          onChangeText={(text) => {
            setInputText(text);
            setError('');
          }}
        />
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
      </View>

      {error ? (
        <Text style={[styles.errorText, { fontStyle: 'italic' }]}>{error}</Text>
      ) : null}

      <FlatList
        data={items}
        keyExtractor={(items) => items.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#000',
  },
  button: {
    backgroundColor: '#f97316',
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  listItem: {
    padding: 15,
    backgroundColor: '#f3f4f6',
    borderLeftWidth: 4,
    borderLeftColor: '#f97316',
    marginBottom: 10,
    elevation: 2,
  },
  itemText: {
    color: '#1f2937',
  },
});
