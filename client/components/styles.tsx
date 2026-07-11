import { ScrollView, StyleSheet, View } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#09090b' },
  container: { flex: 1 },
  scrollContainer: { flexGrow: 1, padding: 24 },

  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 48, marginTop: 16 },
  logoContainer: { backgroundColor: '#27272a', padding: 8, borderRadius: 12, marginRight: 12 },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#fafafa', letterSpacing: -0.5 },

  inputSection: { flex: 1, justifyContent: 'center', paddingBottom: 40 },
  heroText: { fontSize: 32, fontWeight: '800', color: '#fafafa', marginBottom: 12, letterSpacing: -1 },
  subText: { fontSize: 16, color: '#a1a1aa', marginBottom: 32, lineHeight: 24 },

  inputContainer: {
    backgroundColor: '#18181b',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#27272a',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 2,
  },
  inputContainerFocused: { borderColor: '#52525b' },
  input: {
    color: '#fafafa',
    padding: 20,
    height: 160,
    fontSize: 16,
    lineHeight: 24,
    textAlignVertical: 'top',
  },

  primaryButton: {
    backgroundColor: '#fafafa',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#fafafa',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  buttonDisabled: { opacity: 0.6 },
  buttonRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  loadingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  primaryButtonText: { color: '#09090b', fontWeight: '700', fontSize: 16, letterSpacing: -0.2 },
  loadingButtonText: { color: '#09090b', fontWeight: '600', fontSize: 16, marginLeft: 12 },
  buttonIcon: { marginLeft: 8 },

  errorContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#450a0a', padding: 16, borderRadius: 12, marginTop: 24 },
  errorText: { color: '#fca5a5', marginLeft: 10, fontSize: 14, flex: 1 },

  resultSection: { flex: 1, paddingTop: 16 },
  resultHeaderRow: { marginBottom: 32 },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#064e3b',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginTop: 12,
  },
  badgeText: { color: '#34d399', fontSize: 13, fontWeight: '600', marginLeft: 6 },

  card: {
    backgroundColor: '#18181b',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#27272a',
    overflow: 'hidden',
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  cardIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#27272a',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  cardTitle: { fontSize: 16, fontWeight: '700', color: '#fafafa', letterSpacing: -0.2 },
  cardDivider: { height: 1, backgroundColor: '#27272a', marginTop: 16, marginBottom: 16 },
  cardBody: { width: '100%' },

  secondaryButton: {
    flexDirection: 'row',
    backgroundColor: '#27272a',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 40,
  },
  secondaryButtonText: { color: '#fafafa', fontWeight: '600', fontSize: 16, marginLeft: 8 },
});

export const markdownStyles = StyleSheet.create({
  body: {
    color: '#d4d4d8',
    fontSize: 15,
    lineHeight: 24,
  },
  heading1: {
    color: '#fafafa',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 4,
    marginBottom: 12,
  },
  heading2: {
    color: '#fafafa',
    fontSize: 19,
    fontWeight: '700',
    marginTop: 18,
    marginBottom: 10,
  },
  heading3: {
    color: '#e4e4e7',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 14,
    marginBottom: 8,
  },
  paragraph: {
    marginTop: 0,
    marginBottom: 14,
    color: '#d4d4d8',
    fontSize: 15,
    lineHeight: 24,
  },
  strong: { color: '#fafafa', fontWeight: '700' },
  em: { color: '#e4e4e7', fontStyle: 'italic' },
  link: { color: '#60a5fa' },
  hr: {
    backgroundColor: '#27272a',
    height: 1,
    marginVertical: 16,
  },

  bullet_list: { marginBottom: 14 },
  ordered_list: { marginBottom: 14 },
  bullet_list_icon: {
    marginRight: 8,
    color: '#71717a',
  },
  ordered_list_icon: {
    marginRight: 8,
    color: '#71717a',
  },
  list_item: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bullet_list_content: {
    color: '#d4d4d8',
    fontSize: 15,
    lineHeight: 24,
    flex: 1,
  },
  ordered_list_content: {
    color: '#d4d4d8',
    fontSize: 15,
    lineHeight: 24,
    flex: 1,
  },

  code_inline: {
    backgroundColor: '#27272a',
    color: '#f4f4f5',
    borderRadius: 4,
    paddingHorizontal: 4,
  },
  code_block: {
    backgroundColor: '#0f0f11',
    color: '#e4e4e7',
    borderRadius: 10,
    padding: 12,
    fontSize: 13,
    marginBottom: 14,
  },
  fence: {
    backgroundColor: '#0f0f11',
    color: '#e4e4e7',
    borderRadius: 10,
    padding: 12,
    fontSize: 13,
    marginBottom: 14,
  },

  blockquote: {
    backgroundColor: '#1f1f23',
    borderLeftWidth: 3,
    borderLeftColor: '#52525b',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 14,
    borderRadius: 6,
  },

  table: {
    borderWidth: 1,
    borderColor: '#27272a',
    borderRadius: 8,
    marginBottom: 14,
  },
  thead: { backgroundColor: '#1f1f23' },
  th: {
    padding: 8,
    color: '#fafafa',
    fontWeight: '700',
    fontSize: 13,
  },
  td: {
    padding: 8,
    color: '#d4d4d8',
    fontSize: 13,
    borderColor: '#27272a',
  },
  tr: {
    borderBottomWidth: 1,
    borderColor: '#27272a',
  },
});

export const markdownRules = {
  table: (node: any, children: any) => (
    <ScrollView horizontal key={node.key} showsHorizontalScrollIndicator={false}>
      <View style={markdownStyles.table}>{children}</View>
    </ScrollView>
  ),
};
