import { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { Text, Button, useTheme } from '@rneui/themed';
import { fetchHabits } from '@/services/api';
import { Habit } from '@/datatypes';
import { DataItem } from '@/components/data-item';
import { useRouter } from 'expo-router';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

export default function ApiDemoScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  const [habits, setHabits] = useState<Habit[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadHabits = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchHabits();
      setHabits(data);
    } catch {
      setError('Failed to load habits. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadHabits();
  }, []);

  const handleBack = () => {
    router.back();
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.titleText}>
        API Calls Demo
      </ThemedText>
      <View style={styles.contentContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={theme.colors.primary} />
        ) : error ? (
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: theme.colors.error, marginBottom: 10 }}>
              {error}
            </Text>
            <Button title="Retry" onPress={loadHabits} type="clear" />
          </View>
        ) : (
          <FlatList
            data={habits}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <DataItem habit={item} />}
            contentContainerStyle={styles.listContent}
            style={{ width: '100%' }}
          />
        )}
      </View>

      <View style={styles.backButtonContainer}>
        <Button
          title="Back"
          type="outline"
          onPress={handleBack}
          buttonStyle={[
            styles.buttonStyle,
            {
              borderColor: theme.colors.black,
              backgroundColor: theme.colors.white,
            },
          ]}
          titleStyle={[
            styles.buttonTitle,
            {
              color: theme.colors.black,
            },
          ]}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  titleText: {
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 40,
    paddingVertical: 4,
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginBottom: 5,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,
    paddingBottom: 100,
  },
  listContent: {
    padding: 20,
  },
  buttonStyle: {
    borderWidth: 2,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: 220,
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButtonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});
