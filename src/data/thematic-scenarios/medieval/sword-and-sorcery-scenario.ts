import type { ThematicScenario } from '../../../types';

const SwordAndSorceryScenario: ThematicScenario = {
  id: 3,
  guideTheme: 'medieval',
  name: 'O Culto do Olho de Zargos (Espada e Feitiçaria)',
  themeSuggestions: [
    {
      id: 1,
      suggestion: [
        'A aventura começa no **mercado negro da cidade-estado de Xarthos**, onde a lei é fraca. O grupo está negociando a venda de um tesouro recém-saqueado, quando um mercador é subitamente transformado em uma aberração escamosa. A ação é um combate brutal e imediato na multidão, seguido por uma fuga caótica da Guarda da Cidade.',
      ],
    },
    {
      id: 2,
      suggestion: [
        'Os PCs são mercenários e ladrões, atraídos para Xarthos pela promessa de riqueza e glória. Eles estão unidos pelo código de honra do submundo (ou por um débito mútuo) e precisam agir para provar sua força e restaurar sua reputação após um trabalho fracassado.',
      ],
    },
    {
      id: 3,
      suggestion: [
        "Objetivo: Invadir o templo secreto do Culto e roubar o artefato mágico 'Olho de Zargos', antes que o Culto o utilize para convocar seu deus. Patrono: A **Rainha Decadente Lyra**, que oferece perdão real por crimes passados e uma fortuna em jóias imperiais.",
      ],
    },
    {
      id: 4,
      suggestion: [
        'O **Sumo Sacerdote K’tharr**: Um humano que se transformou em uma criatura serpentina através de magia arcana. Ele é o líder do Culto, extremamente sádico e poderoso em Magia do Sangue. Ele tenta corromper o grupo oferecendo poder em vez de combate.',
      ],
    },
    {
      id: 5,
      suggestion: [
        'A **Infiltração no Templo Subterrâneo**. O grupo precisa navegar por um labirinto de armadilhas, guardas e rituais profanos. O confronto central é uma luta tática contra o Sumo Sacerdote e seus guardas de elite no Altar, enquanto a magia do culto distorce a realidade (ilusões/veneno).',
      ],
    },
    {
      id: 6,
      suggestion: [
        'SUCESSO: O Sacerdote é derrotado, o Olho de Zargos é roubado (ou destruído) e o grupo escapa com a recompensa, deixando Xarthos antes que a Guarda os capture.',
        'SUCESSO PARCIAL (Neutro): O Olho de Zargos é destruído, impedindo o ritual, mas o Sacerdote escapa com as jóias reais e a Rainha Decadente Lyra os trai, enviando a Guarda para caçá-los.',
        'FALHA: O Sacerdote completa a convocação, e o grupo deve lutar contra o monstro convocado (avatar de Zargos) ou morrer no processo.',
      ],
    },
    {
      id: 7,
      suggestion: [
        {
          challenge:
            '[Combate] O grupo é atacado nos telhados por assassinos da guilda rival, que também buscam o Olho de Zargos.',
          npc: 'Líder Assassino Sarlok (Inimigo)',
        },
        {
          challenge:
            '[Social] Subornar um guarda da cidade bêbado para obter a chave do portão ou a senha para o templo.',
          npc: 'Capitão da Guarda Torvin (Neutro/Corruptível)',
        },
        {
          challenge:
            '[Enigma/Lógica] Decifrar um enigma escrito em sangue em um pergaminho arcano para desativar a armadilha do tesouro.',
          npc: 'A Sombra do Sábio (Fantasma/Aliado temporário)',
        },
      ],
    },
    {
      id: 8,
      suggestion: [
        'Ignorar qualquer regra de "Moralidade" ou "Alinhamento" dos personagens. Focar apenas em suas ambições e no código de honra brutal. Simplificar regras de **magia complexa**; a magia do Culto é visual e perigosa (Dano direto), sem necessidade de decifrar feitiços.',
      ],
    },
    {
      id: 9,
      suggestion: [
        "Bárbaro (Gigante/Humano): 'Musculoso e impulsivo. Resolve tudo com força bruta e se recusa a recuar no combate.'",
        "Feiticeira (Humana): 'Sensual e traiçoeira, usa sua beleza para manipular e sua magia destrutiva para se proteger. É a mais gananciosa.'",
        "Ladrão (Pequeno/Halfling): 'Ágil e cínico. Especialista em arrombamentos, mas covarde em combate direto. Tenta sempre fugir com a parte do tesouro.'",
      ],
    },
  ],
};

export { SwordAndSorceryScenario };
