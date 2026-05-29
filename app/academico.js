import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Academico() {
  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.title}>
        Experiência Acadêmica 🎓
      </Text>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Iniciação Científica / PIBIC
        </Text>

        <Text style={styles.date}>
          Submetido em 18 de Maio
        </Text>

        <Text style={styles.text}>
          Projeto de Iniciação Científica (PIBIC) submetido com foco no uso de
          dados personalizados para redução de viés algorítmico em redes neurais profundas.

          {'\n\n'}

          O estudo busca investigar como a personalização de dados pode influenciar
          a tomada de decisão de algoritmos, reduzindo distorções e promovendo
          maior equidade nos resultados.
        </Text>

      </View>




      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Curso de Ciencias da Computação
        </Text>

        <Text style={styles.date}>
          inicio: 2024, termino previsto: 2027
        </Text>

        <Text style={styles.text}>
          Curso de graduação em Ciências da Computação, com foco em desenvolvimento de software.

          {'\n\n'}

        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Curso de Ingles
        </Text>

        <Text style={styles.date}>
          inicio: 2026
        </Text>

        <Text style={styles.text}>
          Curso de inglês para aprimoramento de habilidades linguísticas,
          no senac, estando no nivel B1 intermediario

          {'\n\n'}

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

  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
  },

  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  date: {
    color: '#38bdf8',
    fontSize: 14,
    marginBottom: 12,
  },

  text: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 22,
  },
});