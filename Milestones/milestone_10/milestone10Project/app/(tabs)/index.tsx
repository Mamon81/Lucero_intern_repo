import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button, useTheme } from '@rneui/themed';
import { useTranslation } from 'react-i18next';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();

  const handleApiDemo = () => {
    router.push('./api-demo');
  };

  const handleGestureDemo = () => {
    router.push('./gesture-demo');
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.titleText}>
        {t('welcome')}
      </ThemedText>

      <Button
        title={t('apiCallDemo')}
        type="solid"
        onPress={handleApiDemo}
        buttonStyle={[
          styles.buttonStyle,
          {
            backgroundColor: theme.colors.primary,
            borderColor: theme.colors.primary,
            marginBottom: 16,
          },
        ]}
        titleStyle={[
          styles.buttonTitle,
          {
            color: 'white',
          },
        ]}
      />

      <Button
        title={t('gestureDemo')}
        type="solid"
        onPress={handleGestureDemo}
        buttonStyle={[
          styles.buttonStyle,
          {
            backgroundColor: theme.colors.primary,
            borderColor: theme.colors.primary,
            marginBottom: 40,
          },
        ]}
        titleStyle={[
          styles.buttonTitle,
          {
            color: 'white',
          },
        ]}
      />

      <ThemedText type="subtitle" style={styles.languageLabel}>
        {t('selectLanguage')}
      </ThemedText>

      <View style={styles.languageButtonContainer}>
        <Button
          title={t('english')}
          type={i18n.language === 'en' ? 'solid' : 'outline'}
          onPress={() => changeLanguage('en')}
          buttonStyle={[
            styles.languageButton,
            {
              backgroundColor:
                i18n.language === 'en' ? theme.colors.primary : 'transparent',
              borderColor: theme.colors.primary,
            },
          ]}
          titleStyle={{
            color: i18n.language === 'en' ? 'white' : theme.colors.primary,
            fontWeight: 'bold',
          }}
        />

        <Button
          title={t('spanish')}
          type={i18n.language === 'es' ? 'solid' : 'outline'}
          onPress={() => changeLanguage('es')}
          buttonStyle={[
            styles.languageButton,
            {
              backgroundColor:
                i18n.language === 'es' ? theme.colors.primary : 'transparent',
              borderColor: theme.colors.primary,
              marginLeft: 12,
            },
          ]}
          titleStyle={{
            color: i18n.language === 'es' ? 'white' : theme.colors.primary,
            fontWeight: 'bold',
          }}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titleText: {
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 40,
    paddingVertical: 4,
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginBottom: 40,
  },
  buttonStyle: {
    borderWidth: 2,
    paddingVertical: 14,
    borderRadius: 12,
    width: 220,
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  languageLabel: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
  },
  languageButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageButton: {
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
