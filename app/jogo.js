import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Jogo() {

const palavras = [
  "react",
  "javascript",
  "computador",
  "programacao",
  "algoritmo",
  "variavel",
  "funcao",
  "frontend",
  "backend",
  "mobile",
  "internet",
  "teclado",
  "monitor",
  "processador",
  "memoria",
  "banco",
  "dados",
  "servidor",
  "api",
  "framework",
  "biblioteca",
  "typescript",
  "node",
  "expo",
  "android",
  "ios",
  "linux",
  "windows",
  "github",
  "git",
  "commit",
  "branch",
  "debug",
  "codigo",
  "software",
  "hardware",
  "rede",
  "seguranca",
  "criptografia",
  "hash",
  "array",
  "objeto",
  "string",
  "numero",
  "booleano",
  "loop",
  "condicao",
  "classe",
  "heranca",
  "interface",
  "projeto",
  "sistema",
  "aplicacao",
  "usuario",
  "senha",
  "login",
  "logout",
  "tela",
  "botao",
  "evento",
  "estado",
  "hook",
  "contexto",
  "render",
  "componente",
  "funil",
  "dados",
  "analise",
  "machine",
  "learning",
  "inteligencia",
  "artificial",
  "rede",
  "neuronal",
  "cloud",
  "nuvem",
  "docker",
  "container",
  "virtual",
  "machine",
  "algoritmos",
  "estrutura",
  "dados",
  "fila",
  "pilha",
  "lista",
  "grafo",
  "arvore",
  "busca",
  "ordenacao",
  "performance",
  "otimizacao",
  "cpu",
  "gpu",
  "pixel",
  "interface",
  "design"
];

  const [palavra, setPalavra] = useState("");
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);

  function gerarPalavra() {
    const aleatoria =
      palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(aleatoria);
  }

  useEffect(() => {
    gerarPalavra();
  }, []);

  function tentarLetra(letra) {
    if (
      letrasCorretas.includes(letra) ||
      letrasErradas.includes(letra)
    ) return;

    if (palavra.includes(letra)) {
      setLetrasCorretas([...letrasCorretas, letra]);
    } else {
      setLetrasErradas([...letrasErradas, letra]);
    }
  }

  function reiniciarJogo() {
    setLetrasCorretas([]);
    setLetrasErradas([]);
    gerarPalavra();
  }

  const venceu =
    palavra &&
    palavra.split("").every((l) => letrasCorretas.includes(l));

  const perdeu = letrasErradas.length >= 6;

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}> Jogo da Forca</Text>

      <Text style={styles.word}>
        {palavra.split("").map((letra, i) => (
          <Text key={i} style={styles.letter}>
            {letrasCorretas.includes(letra) || perdeu ? letra : "_"}{" "}
          </Text>
        ))}
      </Text>

      <Text style={styles.errors}>
        Erros: {letrasErradas.join(", ")}
      </Text>

      <View style={styles.keyboard}>
        {"abcdefghijklmnopqrstuvwxyz".split("").map((letra) => {

          const usado =
            letrasCorretas.includes(letra) ||
            letrasErradas.includes(letra);

          return (
            <TouchableOpacity
              key={letra}
              style={[
                styles.key,
                usado && styles.keyDisabled
              ]}
              onPress={() => tentarLetra(letra)}
              disabled={usado || venceu || perdeu}
            >
              <Text style={styles.keyText}>{letra}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {venceu && <Text style={styles.win}> Você venceu!</Text>}
      {perdeu && <Text style={styles.lose}> Você perdeu! Palavra: {palavra}</Text>}

      <TouchableOpacity
        style={styles.reset}
        onPress={reiniciarJogo}
      >
        <Text style={styles.resetText}> Reiniciar</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#0f172a',
    flexGrow: 1,
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  word: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 20,
    letterSpacing: 4,
  },

  letter: {
    color: '#fff',
    fontSize: 28,
  },

  errors: {
    color: '#f87171',
    marginBottom: 20,
    fontSize: 16,
  },

  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  key: {
    backgroundColor: '#1e293b',
    margin: 4,
    padding: 10,
    borderRadius: 8,
    width: 35,
    alignItems: 'center',
  },

  keyDisabled: {
    backgroundColor: '#334155',
  },

  keyText: {
    color: '#fff',
    fontSize: 14,
  },

  win: {
    color: '#4ade80',
    fontSize: 18,
    marginTop: 20,
  },

  lose: {
    color: '#f87171',
    fontSize: 18,
    marginTop: 20,
  },

  reset: {
    marginTop: 20,
    backgroundColor: '#38bdf8',
    padding: 12,
    borderRadius: 10,
  },

  resetText: {
    color: '#0f172a',
    fontWeight: 'bold',
  },
});