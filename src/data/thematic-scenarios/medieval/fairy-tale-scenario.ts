import type { ThematicScenario } from '../../../types';

const FairyTaleScenario: ThematicScenario = {
  id: 4,
  guideTheme: 'medieval',
  name: 'O Castelo de Vidro e a Maldição da Bruxa (Contos Sombrios)',
  themeSuggestions: [
    {
      id: 1,
      suggestion: [
        'A aventura começa no meio da **Floresta Negra**, onde uma neve espessa cai em pleno verão, indicando magia perversa. Os PCs encontram uma cabana feita de pão de mel, onde um PC é subitamente capturado por um braço esquelético de uma Bruxa, forçando os outros a agir imediatamente para um resgate.',
      ],
    },
    {
      id: 2,
      suggestion: [
        'O mentor (ou um parente próximo) dos PCs foi transformado em um objeto inanimado (como uma estátua de açúcar) pela Bruxa da Floresta Negra. Eles agem por **amor e urgência**, pois a maldição se tornará permanente à meia-noite do terceiro dia.',
      ],
    },
    {
      id: 3,
      suggestion: [
        "Objetivo: Chegar ao **Castelo de Vidro** no centro da Floresta e queimar o 'Coração Congelado' da Bruxa para quebrar a maldição. Patrono: Um **Gato de Botas** esperto e falante, que oferece um mapa mágico em troca de um favor futuro de grande valor moral.",
      ],
    },
    {
      id: 4,
      suggestion: [
        'A **Bruxa da Floresta Negra**: Uma feiticeira anciã que se alimenta do desespero e transforma criaturas e pessoas em objetos preciosos. Ela usa rimas e feitiços simples, mas poderosos. Seus lacaios são **Goblins servis** e **Corvos Amaldiçoados**.',
      ],
    },
    {
      id: 5,
      suggestion: [
        'A **Travessia do Rio dos Lamentos**. O grupo precisa convencer o **Barqueiro Melancólico** a atravessá-los. Ele só aceita uma oferenda que represente um sacrifício de grande **virtude** ou **esperança** (não ouro), enquanto são atacados por bandos de Corvos Amaldiçoados.',
      ],
    },
    {
      id: 6,
      suggestion: [
        'SUCESSO: O Coração Congelado é destruído, a maldição é quebrada e a Floresta volta ao normal. O Barqueiro se acalma, e os PCs partem em paz.',
        'SUCESSO PARCIAL (Neutro): A maldição é quebrada, mas o Patrono (Gato de Botas) se revela um Trapaceiro e rouba a recompensa mágica destinada à Rainha, deixando o grupo sem recompensas.',
        'FALHA: O grupo falha em queimar o Coração. A Bruxa os transforma em estátuas de doces e usa o mentor dos PCs como seu novo lacaio.',
      ],
    },
    {
      id: 7,
      suggestion: [
        {
          challenge:
            '[Social] Convencer um Príncipe amaldiçoado (em forma de Sapo) a dar a chave para o portão do Castelo de Vidro.',
          npc: 'Príncipe Sapo (Neutro/Aliado Potencial)',
        },
        {
          challenge:
            '[Combate] Enfrentar **Três Goblins** que tentam roubar os sapatos mágicos de um PC que permitem andar sobre a neve.',
          npc: 'Líder Goblin Zick (Inimigo)',
        },
        {
          challenge:
            '[Enigma/Lógica] Desvendar a rima de uma **Árvore Falante** para obter o atalho que evita a armadilha de areia movediça.',
          npc: 'A Rima da Sábia (Fantasma/Neutro)',
        },
      ],
    },
    {
      id: 8,
      suggestion: [
        'Ignorar qualquer regra complexa de **viagem e clima** (ex: exaustão pelo frio ou moral). Simplificar a magia: os feitiços da Bruxa são instantâneos, baseados em rimas de contos, sem necessidade de decifrar arcanos.',
      ],
    },
    {
      id: 9,
      suggestion: [
        "Caçador (Forte, humano): 'Melancólico e silencioso, busca vingança pela perda de um ente querido. Prefere o arco à conversa.'",
        "Padeira (Jovem, humana): 'Ingênua, mas resiliente. Conhece ervas e sempre tenta alimentar estranhos, mas é alvo fácil de manipulação.'",
        "Soldado Deserdado (Cínico, anão): 'Usa uma armadura enferrujada. Sua motivação é puramente a redenção, sem se importar com ouro ou glória.'",
      ],
    },
  ],
};

export { FairyTaleScenario };
