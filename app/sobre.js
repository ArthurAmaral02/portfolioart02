import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Sobre() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.profileSection}>
        <Image
          source={require('../assets/profile.jpg')} // <- TROQUE AQUI SUA FOTO
          style={styles.profileImage}
        />

        <Text style={styles.name}>
          Arthur Amaral de Souza
        </Text>

        <Text style={styles.role}>
          Desenvolvedor Back-end, entusiasta de machine learning e pesquisa academica.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Sobre mim</Text>

        <Text style={styles.text}>
          {/* ESCREVA AQUI SUA BIO */}
          Estudante de Ciência da Computação na Universidade Católica de Pernambuco, com grande interesse por tecnologia, desenvolvimento backend, Linux, redes de computadores, Inteligência Artificial e Machine Learning. Possuo afinidade com matemática, especialmente cálculo e álgebra linear, e busco constantemente expandir meus conhecimentos por meio de estudos e projetos. Sou comunicativo, colaborativo e gosto de trabalhar em equipe para resolver problemas e desenvolver soluções eficientes.

        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Objetivo</Text>

        <Text style={styles.text}>
          Busco uma oportunidade de estágio nas áreas de Machine Learning, Inteligência Artificial, infraestrutura e redes de computadores ou desenvolvimento backend, com o objetivo de adquirir experiência prática, aprimorar minhas habilidades técnicas e construir uma base sólida para atuar futuramente em pesquisa científica e inovação tecnológica.

        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Tecnologias</Text>

        <Text style={styles.text}>
          {/* ADICIONE SUAS TECNOLOGIAS */}
          • React Native{"\n"}
          • React.js{"\n"}
          • Node.js{"\n"}
          • JavaScript / TypeScript{"\n"}
          • MySQL / MongoDB{"\n"}
          • Git / GitHub{"\n"}
          • Python{"\n"}
          • C{"\n"}
          • Java{"\n"}
          • Ingles, nivel intermediário: B1
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Informações</Text>

        <Text style={styles.text}>
          Localização: Recife - PE{"\n"}
          Formação: Ciência da Computação{"\n"}
          Status: Disponível para oportunidades{"\n"}
          Email: amaralsouza0202@gmail.com
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
  },

  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 40,
  },

  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#38bdf8',
  },

  name: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },

  role: {
    color: '#38bdf8',
    fontSize: 16,
    marginTop: 6,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#1e293b',
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
  },

  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  text: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 22,
  },
});