import { MaterialIcons } from '@expo/vector-icons';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type IdeaFormProps = {
    idea: string;
    isLoading: boolean;
    isFocused: boolean;
    error: string | null;
    onChangeIdea: (value: string) => void;
    onSubmit: () => void;
    onFocus: () => void;
    onBlur: () => void;
};

export function IdeaForm({
    idea,
    isLoading,
    isFocused,
    error,
    onChangeIdea,
    onSubmit,
    onFocus,
    onBlur,
}: IdeaFormProps) {
    return (
        <View style={styles.inputSection}>
            <Text style={styles.heroText}>What are we shipping today?</Text>
            <Text style={styles.subText}>
                Describe your app. Our agent will cut the bloat and architect your MVP.
            </Text>

            <View style={[styles.inputContainer, isFocused && styles.inputContainerFocused]}>
                <TextInput
                    style={styles.input}
                    placeholder="e.g., A mobile app that generates custom security proposals..."
                    placeholderTextColor="#52525b"
                    multiline
                    value={idea}
                    onChangeText={onChangeIdea}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    editable={!isLoading}
                />
            </View>

            <TouchableOpacity
                style={[styles.primaryButton, (!idea.trim() || isLoading) && styles.buttonDisabled]}
                onPress={onSubmit}
                disabled={isLoading || !idea.trim()}
                activeOpacity={0.8}
            >
                {isLoading ? (
                    <View style={styles.loadingRow}>
                        <ActivityIndicator color="#09090b" size="small" />
                        <Text style={styles.loadingButtonText}>Evaluating Scope...</Text>
                    </View>
                ) : (
                    <View style={styles.buttonRow}>
                        <Text style={styles.primaryButtonText}>Generate MVP Architecture</Text>
                        <MaterialIcons name="arrow-forward" size={20} color="#09090b" style={styles.buttonIcon} />
                    </View>
                )}
            </TouchableOpacity>

            {error && (
                <View style={styles.errorContainer}>
                    <MaterialIcons name="error-outline" size={20} color="#ef4444" />
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            )}
        </View>
    );
}
