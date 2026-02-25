import React, { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TextInput,
  Text as RNText,
} from 'react-native';
import { Button, Card, Text } from '@rneui/themed';
import { ThemedView } from '@/components/themed-view';
import { useResponsive } from '@/hooks/use-responsive';

export default function ItemListScreen() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState<{ id: string; text: string }[]>([]);
  const [error, setError] = useState('');

  const { width, isLandscape } = useResponsive();

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
    <ThemedView style={[styles.container, { paddingHorizontal: width * 0.05 }]}>
      <View
        style={[
          styles.inputContainer,
          {
            flexDirection: isLandscape ? 'row' : 'column',
            alignItems: isLandscape ? 'center' : 'stretch',
          },
        ]}
      >
        <View style={[styles.inputWrapper, isLandscape && { flex: 1 }]}>
          <TextInput
            placeholder="Enter item"
            placeholderTextColor="#888"
            value={inputText}
            onChangeText={(text) => {
              setInputText(text);
              setError('');
            }}
            style={styles.textInput}
            underlineColorAndroid="transparent"
          />
          {!!error && <RNText style={styles.errorText}>{error}</RNText>}
        </View>
        <Button
          title="Add Item"
          onPress={addItem}
          type="solid"
          buttonStyle={styles.button}
          containerStyle={[
            styles.buttonContainer,
            { width: isLandscape ? 'auto' : '100%' },
          ]}
        />
      </View>

      <FlatList
        data={items}
        key={isLandscape ? 'h-grid' : 'v-list'}
        numColumns={isLandscape ? 2 : 1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            containerStyle={[
              styles.listItem,
              { width: isLandscape ? '46%' : 'auto' },
            ]}
          >
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
    paddingTop: 60,
  },
  inputContainer: {
    gap: 10,
    marginBottom: 10,
  },
  inputWrapper: {
    width: '100%',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#000',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 3,
  },
  button: {
    backgroundColor: '#f97316',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
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
    borderRadius: 8,
    marginVertical: 5,
  },
  itemText: {
    color: '#1f2937',
  },
});
