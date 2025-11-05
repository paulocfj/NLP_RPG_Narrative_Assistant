import type { ThematicScenario } from '../../../types';

const EpicJourneyScenario: ThematicScenario = {
  id: 2,
  guideTheme: 'medieval',
  name: 'A Missiva Perdida e o Anel de Ferro (Jornada Épica)',
  themeSuggestions: [
    {
      id: 1,
      suggestion: [
        'A aventura começa no posto avançado de fronteira dos **Homens das Montanhas**. O grupo recebe do velho Capitão Borin uma **Missiva Selada**, de importância vital. Antes que possam partir, o posto é atacado por uma patrulha de Orceks (criaturas grotescas) que tentam recuperar a Missiva. A ação é um combate defensivo imediato.',
      ],
    },
    {
      id: 2,
      suggestion: [
        'A Missiva contém o paradeiro do lendário **Anel de Ferro**, a única chave para selar o portal do Lorde das Sombras, Mor’goth. O grupo age para salvar o continente da Escuridão, motivado pela responsabilidade e pela promessa de se tornarem heróis lendários.',
      ],
    },
    {
      id: 3,
      suggestion: [
        'Objetivo: Entregar a Missiva ao **Conselho Branco**, na cidade isolada de Ellondor, no extremo Oeste. Patrono: O Sábio Borin, que não pode viajar, mas fornece suprimentos essenciais, um mapa incompleto e o aviso sobre os perigos na estrada.',
      ],
    },
    {
      id: 4,
      suggestion: [
        'O **Sombra de Mor’goth**: Uma criatura espectral, ex-líder militar corrompido, que lidera os Orceks e persegue o grupo implacavelmente, usando magia negra para criar ilusões e corromper aliados. Ele não pode ser destruído permanentemente, apenas afugentado.',
      ],
    },
    {
      id: 5,
      suggestion: [
        'A **Travessia das Minas Anãs Abandonadas**: O grupo deve se infiltrar nas ruínas escuras, navegando por um labirinto de túneis e enfrentando aranhas gigantes e antigos mortos-vivos (combate/exploração), para evitar a rota principal, que está bloqueada por um exército de Orceks.',
      ],
    },
    {
      id: 6,
      suggestion: [
        'SUCESSO: O grupo chega a Ellondor exausto e entrega a Missiva ao Conselho Branco, que imediatamente se prepara para a guerra. O grupo recebe honras, mas a jornada maior ainda está por vir. FALHA: A Missiva é capturada pela Sombra de Mor’goth, e o portal se abre, permitindo que a Escuridão engula a cidade, forçando o grupo a fugir ou morrer.',
      ],
    },
    {
      id: 7,
      suggestion: [
        {
          challenge:
            '[Social] Convencer os Elfos Silvestres a dar passagem por sua floresta sagrada, provando que o grupo não é uma ameaça.',
          npc: 'Princesa Elfa Lyra (Neutro/Aliado Potencial)',
        },
        {
          challenge:
            '[Combate] Um Troll da Montanha bloqueia a única ponte sobre um rio gelado.',
          npc: 'Troll Rabugento (Inimigo)',
        },
        {
          challenge:
            '[Enigma/Sobrevivência] O grupo precisa decifrar um mapa em uma língua antiga para encontrar um esconderijo de suprimentos em um clima rigoroso.',
          npc: 'Um Sábio Fantasma da Montanha (Neutro/Fantasma)',
        },
      ],
    },
    {
      id: 8,
      suggestion: [
        'Simplificar as regras de **viagem e tempo**. A jornada é contada em encontros críticos, ignorando dias de caminhada sem eventos. Focar em testes de Sabedoria/Sobrevivência apenas em momentos de escassez de recursos ou clima extremo.',
      ],
    },
    {
      id: 9,
      suggestion: [
        "Andarilho (Humano): 'Calmo e resiliente, é o guia e rastreador do grupo. Tende a resolver problemas com diplomacia e conhecimento da terra.'",
        "Guerreiro (Anão): 'Teimoso e leal, prefere o machado à conversa. Tem um medo secreto de aranha e túneis escuros.'",
        "Maga (Humana/Sábia): 'Estudiosa e poderosa, carrega um grimório valioso. É pessimista sobre o futuro, mas usa sua magia para proteção e informação.'",
      ],
    },
  ],
};

export { EpicJourneyScenario };
