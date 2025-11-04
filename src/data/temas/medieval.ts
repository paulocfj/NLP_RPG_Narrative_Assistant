import type { OneShotGuide } from '../../types/one-shot-guide.type';

const MedievalTheme: OneShotGuide = [
  {
    id: 1,
    pillar: 'INTRO',
    mainFocus: 'Ação Imediata',
    question:
      '1. Cenário e Ação Inicial: Onde a aventura começa (Ambiente) e o que está acontecendo no momento em que a sessão inicia?',
    type: 'text_area',
    theme: 'medieval',
    suggestions: [
      'A aventura começa no pátio do castelo de Lorde Valerius. O grupo está sendo contratado pelo Patrono quando, subitamente, um grito ecoa da torre mais alta. Uma figura sombria e encapuzada salta da janela e desaparece na floresta, levando o Símbolo Real.',
    ],
  },
  {
    id: 2,
    pillar: 'INTRO',
    mainFocus: 'Ação Imediata',
    question:
      '2. Motivação Comum: Por que os PCs (Player Character) estão juntos neste lugar e por que precisam agir agora?',
    type: 'text_input',
    theme: 'medieval',
    suggestions: [
      'O grupo foi convocado por Lorde Valerius para uma missão de escolta, e o pagamento deles depende da segurança dos bens do Lorde. O roubo do Símbolo Real é uma ameaça direta à reputação e à estabilidade da região, o que exige ação imediata para provar sua competência.',
    ],
  },
  {
    id: 3,
    pillar: 'PICK ONE GOAL',
    mainFocus: 'Clareza de Objetivo',
    question:
      '3. O Objetivo e o Patrono: Qual é a única coisa que deve ser alcançada? Quem (Aliado Principal/Patrono) está pedindo/exigindo isso?',
    type: 'text_area',
    theme: 'medieval',
    suggestions: [
      "Objetivo: Recuperar o 'Símbolo do Leão' (um cetro ou amuleto) que garante a soberania de Lorde Valerius. Patrono: Lorde Valerius, que exige o item de volta antes do final do dia, sob pena de perder seu título.",
    ],
  },
  {
    id: 4,
    pillar: 'PICK ONE GOAL',
    mainFocus: 'Clareza de Objetivo',
    question:
      '4. O Antagonista: Quem ou o que é a força que impede esse objetivo?',
    type: 'text_input',
    theme: 'medieval',
    suggestions: [
      'O Cultista das Sombras: Um ex-servo ambicioso que planeja entregar o Símbolo a um Barão rival (o verdadeiro Mestre) para iniciar uma guerra civil.',
    ],
  },
  {
    id: 5,
    pillar: 'PACE',
    mainFocus: 'Ritmo e Tempo',
    question:
      '5. in (Meio): Qual é o grande confronto/cena que irá consumir a maior parte do tempo de jogo antes da resolução?',
    type: 'text_area',
    theme: 'medieval',
    suggestions: [
      'A exploração das Catacumbas Esquecidas, um labirinto sob o castelo que o Cultista usou como rota de fuga. O grupo deve enfrentar armadilhas, mortos-vivos (combate) e um enigma para abrir a porta secreta que leva ao esconderijo final (enigma).',
    ],
  },
  {
    id: 6,
    pillar: 'PACE',
    mainFocus: 'Ritmo e Tempo',
    question:
      '6. Fim de Jogo: O que acontece na hora do fim da sessão? (Descreva o SUCESSO e a FALHA).',
    type: 'text_area',
    theme: 'medieval',
    suggestions: [
      'SUCESSO: O Cultista é derrotado/capturado no último minuto, o Símbolo é devolvido a Lorde Valerius, e o grupo recebe a recompensa e a gratidão da Casa. FALHA: O Cultista escapa, entrega o Símbolo ao Barão rival e o grupo testemunha a convocação das tropas para invadir as terras de Valerius.',
    ],
  },
  {
    id: 7,
    pillar: 'STRUCTURE',
    mainFocus: 'Flexibilidade',
    question:
      '7. NPCs (Non Player Character) e Obstáculos Flexíveis: Lista 3 desafios/cenas (combate, social, enigma) que você pode inserir a qualquer momento. Qual NPC (Aliado/Neutro) está ligado a cada um?',
    type: 'object_list',
    theme: 'medieval',
    suggestions: [
      {
        challenge:
          'Social: Um fazendeiro suspeito precisa ser convencido a revelar a trilha usada pelo Cultista.',
        npc: 'Fazendeiro Baruk (Neutro)',
      },
      {
        challenge:
          'Combate: Um grupo de bandidos ataca na estrada, tentando roubar os poucos tesouros que o Cultista deixou para trás.',
        npc: 'Chefe Bandido Grognak (Inimigo)',
      },
      {
        challenge:
          'Enigma: Uma inscrição antiga em um monólito requer a tradução correta para revelar a fraqueza do Cultista.',
        npc: 'Frei Timóteo (Aliado, se for resgatado)',
      },
    ],
  },
  {
    id: 8,
    pillar: 'STREAMLINE',
    mainFocus: 'Simplificação',
    question:
      '8. Cortes: Qual cena, regra ou informação de lore complexa do Ambiente ou das Raças você irá ignorar ou simplificar para não atrasar a história?',
    type: 'text_area',
    theme: 'medieval',
    suggestions: [
      'Simplificar todas as regras de fadiga, fome e exaustão. Ignorar a hierarquia complexa da corte real, focando apenas na autoridade de Lorde Valerius. Transformar todos os testes de Percepção em um único teste de grupo para agilizar a investigação.',
    ],
  },
  {
    id: 9,
    pillar: 'STREAMLINE',
    mainFocus: 'Simplificação',
    question:
      '9. Preparação: Se usar Pregens, qual é a principal dica de interpretação/Raça (ou aparência) para cada um?',
    type: 'text_area',
    theme: 'medieval',
    suggestions: [
      "Cavaleiro (Humano): 'É o mais honrado, mas impulsivo – sempre tenta resolver as coisas com um duelo justo.' Mago (Elfo): 'É arrogante e prefere ficar a uma distância segura, desconfiando de qualquer um que não seja de sua raça.'",
    ],
  },
];

export { MedievalTheme };
