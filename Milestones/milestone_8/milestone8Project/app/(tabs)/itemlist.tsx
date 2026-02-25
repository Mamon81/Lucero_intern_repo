import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Button, Input, Card, Text } from '@rneui/themed';

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
        <Input
          placeholder="Enter item"
          placeholderTextColor="#888"
          value={inputText}
          onChangeText={(text) => {
            setInputText(text);
            setError('');
          }}
          containerStyle={styles.inputWrapper}
          inputContainerStyle={styles.inputInnerContainer}
          inputStyle={styles.input}
          errorMessage={error}
          errorStyle={styles.errorText}
        />
        <Button
          title="Add Item"
          onPress={addItem}
          type="solid"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
        />
      </View>

      <FlatList
        data={items}
        keyExtractor={(items) => items.id}
        renderItem={({ item }) => (
          <Card containerStyle={styles.listItem}>
            <Text style={styles.itemText}>{item.text}</Text>
          </Card>
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
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  inputWrapper: {
    flex: 1,
    paddingHorizontal: 0,
  },
  inputInnerContainer: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  input: {
    color: '#000',
  },
  buttonContainer: {
    marginTop: 3,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  button: {
    backgroundColor: '#f97316',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 0,
  },
  errorText: {
    fontStyle: 'italic',
    fontSize: 12,
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
    marginHorizontal: 0,
    borderRadius: 8,
  },
  itemText: {
    color: '#1f2937',
  },
});
