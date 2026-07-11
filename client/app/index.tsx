import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { generateMVPScope, MVPResponse } from '../services/api';
import { Header, IdeaForm, ResetButton, ResultCard, styles } from '../components';

export default function Home() {
  const [idea, setIdea] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<MVPResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const submitToAgent = async () => {
    if (!idea.trim()) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await generateMVPScope(idea);
      setResult(response);
    } catch (err) {
      setError('Failed to reach the Velocity API. Ensure the backend is running.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIdea('');
    setResult(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Header />

          {!result ? (
            <IdeaForm
              idea={idea}
              isLoading={isLoading}
              isFocused={isFocused}
              error={error}
              onChangeIdea={setIdea}
              onSubmit={submitToAgent}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          ) : (
            <View style={styles.resultSection}>
              <View style={styles.resultHeaderRow}>
                <Text style={styles.heroText}>Architecture Ready</Text>
                <View style={styles.badge}>
                  <MaterialIcons name="auto-awesome" size={14} color="#10b981" />
                  <Text style={styles.badgeText}>
                    Optimized in {result.iterations_required} iteration(s)
                  </Text>
                </View>
              </View>

              <ResultCard
                iconName="format-list-bulleted"
                title="Core User Stories"
                content={result.user_stories}
              />

              <ResultCard
                iconName="layers"
                title="Recommended Stack"
                content={result.tech_stack}
              />

              <ResetButton onPress={resetForm} />
            </View>
          )}

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
