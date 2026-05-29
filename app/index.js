import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.title}>Arthur Amaral</Text>

        <Text style={styles.subtitle}>
          Desenvolvedor backend
        </Text>

        <Text style={styles.description}>
          Bem-vindo ao meu portfólio mobile desenvolvido com React Native e Expo.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Navegação</Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push('/sobre')}
        >
          <Text style={styles.cardTitle}>Sobre</Text>
          <Text style={styles.cardText}>
            Sobre mim
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push('/academico')}
        >
          <Text style={styles.cardTitle}>Experiência Acadêmica</Text>
          <Text style={styles.cardText}>
            Formação, cursos e estudos.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push('/profissional')}
        >
          <Text style={styles.cardTitle}>Experiência Profissional</Text>
          <Text style={styles.cardText}>
            Trabalhos, freelas e experiências.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push('/projetos')}
        >
          <Text style={styles.cardTitle}>Projetos</Text>
          <Text style={styles.cardText}>
            Aplicações e projetos desenvolvidos.
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push('/jogo')}
        >
          <Text style={styles.cardTitle}>jogo</Text>
          <Text style={styles.cardText}>
            jogo da forca.
          </Text>
        </TouchableOpacity>


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },

  hero: {
    paddingTop: 80,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  title: {
    color: '#fff',
    fontSize: 38,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#38bdf8',
    fontSize: 20,
    marginTop: 10,
  },

  description: {
    color: '#cbd5e1',
    fontSize: 16,
    marginTop: 16,
    lineHeight: 24,
  },

  section: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 18,
    marginBottom: 16,
  },

  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  cardText: {
    color: '#94a3b8',
    marginTop: 8,
    fontSize: 15,
  },
});