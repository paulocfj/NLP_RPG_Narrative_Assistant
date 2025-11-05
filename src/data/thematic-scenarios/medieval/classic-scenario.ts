import type { ThematicScenario } from '../../../types';

const ClassicScenario: ThematicScenario = {
  id: 1,
  guideTheme: 'medieval',
  name: 'A Tumba do Barão Sangrento (Masmorra Clássica)',
  themeSuggestions: [
    {
      id: 1,
      suggestion: [
        'A aventura começa no meio de uma **tempestade violenta** na entrada de uma **masmorra de pedra em ruínas**. Os PCs acabaram de descer por uma passagem secreta e ouvem os gritos de um ritual de sacrifício vindo da câmara adjacente, liderado por Cultistas. A ação é uma invasão de alto risco.',
      ],
    },
    {
      id: 2,
      suggestion: [
        'O grupo é formado por aventureiros contratados por um Mestre de Guilda poderoso que os ameaçou: eles devem recuperar o artefato roubado ou o Mestre de Guilda **confiscará todas as suas propriedades e reputação**. Eles agem por sobrevivência financeira e reputação.',
      ],
    },
    {
      id: 3,
      suggestion: [
        "Objetivo: Recuperar o 'Coroa da Transmutação' (um artefato que concede poder licantrópico) antes que o Barão Sangrento conclua o ritual. Patrono: Um historiador de uma cidade vizinha, **Frei Abelard**, que oferece uma grande quantia em ouro e informações arcanas valiosas.",
      ],
    },
    {
      id: 4,
      suggestion: [
        'O **Barão Sangrento**: Um licantropo (homem-fera) ancestral que se esconde na masmorra e usa um culto de capangas fanáticos (Cultistas e Esqueletos) para protegê-lo. Ele é incrivelmente forte, mas vulnerável à prata e à luz solar.',
      ],
    },
    {
      id: 5,
      suggestion: [
        'A exploração do **Labirinto de Espelhos** no segundo nível da masmorra. O grupo deve enfrentar 3-4 encontros de combate seguidos contra Ghouls e armadilhas complexas, enquanto resolve um enigma de luzes e reflexos para abrir a porta da câmara final.',
      ],
    },
    {
      id: 6,
      suggestion: [
        'SUCESSO: O Barão é forçado a voltar à forma humana e é derrotado. O artefato é recuperado e entregue a Frei Abelard. FALHA: O grupo é derrotado e o Barão usa o artefato para se tornar um Licantropo Divino, fugindo da masmorra e amaldiçoando a região.',
      ],
    },
    {
      id: 7,
      suggestion: [
        {
          challenge:
            '[Combate] Um Golem de Ferro corrompido que guarda um corredor lateral cheio de pilhagem.',
          npc: 'Golem Guardião (Inimigo)',
        },
        {
          challenge:
            '[Social] Um Cultista desesperado que tenta se render em troca de informações sobre o Barão.',
          npc: 'Cultista Fugitivo (Neutro/Aliado Potencial)',
        },
        {
          challenge:
            '[Enigma/Exploração] Um sarcófago com um selo arcano que só pode ser aberto através de uma oferenda de um objeto de grande valor emocional de um dos PCs.',
          npc: 'A Voz do Antigo Rei (Neutro/Fantasma)',
        },
      ],
    },
    {
      id: 8,
      suggestion: [
        'Ignorar a complexa hierarquia religiosa e política do reino, focando apenas na missão. Simplificar todas as regras de **fome e exaustão** dentro da masmorra. O combate é o foco, não a sobrevivência lenta.',
      ],
    },
    {
      id: 9,
      suggestion: [
        "Paladino (Meio-Orc): 'Honrado, mas violento. Odeia a corrupção e insiste em duelos justos, mesmo em situações desfavoráveis.'",
        "Mago (Gnomo): 'Distraído e arrogante. Prefere usar magias extravagantes para resolver enigmas do que lutar corpo a corpo.'",
        "Ladina (Tiefling): 'Cínica e gananciosa. Sempre de olho no tesouro e na rota de fuga. Desconfia de figuras religiosas.'",
      ],
    },
  ],
};

export { ClassicScenario };
