import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Projetos() {

  const projetos = [
    {
      nome: 'Labirinto',
      descricao: 'Jogo de labirinto com lógica de movimentação.',
      imagem: require('../assets/projetos/labirinto.png'),
      link: 'https://github.com/LucasMN0/Labirinto',
    },
    {
      nome: 'MOM Ateliê',
      descricao: 'Projeto de sistema para gerenciamento de ateliê.',
      imagem: require('../assets/projetos/mom_atelie.png'),
      link: 'https://github.com/ArthurAmaral02/MOM_atelie',
    },
    {
      nome: 'Stonks Viewer',
      descricao: 'Aplicação para visualização de ações e gráficos.',
      imagem: require('../assets/projetos/stonks.png'),
      link: 'https://github.com/LucasMN0/stonks-viewer',
    },
    {
      nome: 'Projeto Web Mobile',
      descricao: 'Sistema web/mobile com integração de funcionalidades.',
      imagem: require('../assets/projetos/webmobile.png'),
      link: 'https://github.com/LettyciaDev/PROJETO-WEB-MOBILE',
    },
  ];

  function abrirLink(url) {
    Linking.openURL(url);
  }

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Meus Projetos 🚀</Text>

      {projetos.map((item, index) => (
        <View key={index} style={styles.card}>

          <Image
            source={item.imagem}
            style={styles.image}
          />

          <Text style={styles.name}>{item.nome}</Text>
          <Text style={styles.desc}>{item.descricao}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => abrirLink(item.link)}
          >
            <Text style={styles.buttonText}>Ver no GitHub</Text>
          </TouchableOpacity>

        </View>
      ))}

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
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: '#0f172a', // fallback caso não tenha imagem ainda
  },

  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  desc: {
    color: '#cbd5e1',
    marginTop: 6,
    fontSize: 14,
    marginBottom: 12,
  },

  button: {
    backgroundColor: '#38bdf8',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#0f172a',
    fontWeight: 'bold',
  },
});