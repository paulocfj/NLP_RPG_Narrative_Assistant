import type { ThematicScenario } from '../../../types';

const NavalFantasyScenario: ThematicScenario = {
  id: 5,
  guideTheme: 'medieval',
  name: 'A Busca pelo Medalhão do Kraken (Alta Aventura Naval)',
  themeSuggestions: [
    {
      id: 1,
      suggestion: [
        'A aventura começa no cais do **Porto Quebra-Lanças**. O grupo está prestes a embarcar no lendário navio *Quimera* quando são atacados por sabotadores (assassinos mascarados) que tentam afundar a embarcação no porto. Os atacantes parecem procurar um **antigo mapa de navegação** no camarote do capitão. A ação é um combate e corrida contra o tempo para proteger o mapa, reparar o dano e partir.',
        'O grupo deve passar por um **rigoroso e perigoso teste** estabelecido pelo Patrono no próprio porto (ex: recuperar um totem de proteção da boca de uma criatura marinha) para provar que são dignos de comandar o navio *Quimera*.',
        'O Capitão/Líder da expedição está gravemente ferido, e a tripulação está em **motim**. Os PCs devem assumir o controle do navio à força, antes que a tripulação o roube ou o venda.',
        'Eles encontram o navio *Quimera* preso em algas estranhas. Um **espírito marinho** exige um sacrifício (um item mágico precioso ou um tripulante) imediatamente para libertar o navio.',
      ],
    },
    {
      id: 2,
      suggestion: [
        'O líder do grupo (ou o capitão do navio) foi amaldiçoado por um tirano e só o **Medalhão do Kraken** pode reverter a maldição. O grupo age pela **lealdade** ao líder e pela grande recompensa prometida pelo reino.',
        'Os PCs fazem parte de uma **antiga profecia**; eles precisam do Medalhão para cumprir o destino e evitar uma catástrofe global (pressão divina).',
        'O grupo está em uma **corrida** contra um navio rival de heróis famosos que também busca o Medalhão para vendê-lo ao maior preço, transformando a missão em uma competição marítima.',
        'Uma poderosa organização ou culto detém um **refém** (ou usa magia sombria) sobre um dos PCs. O Medalhão é a única moeda de troca ou a chave para se libertarem.',
      ],
    },
    {
      id: 3,
      suggestion: [
        'Objetivo: Encontrar e recuperar o **Medalhão do Kraken**, escondido na Ilha da Névoa Eterna. Patrono: O Almirante caído **Jasão Ardent** (um velho lobo-do-mar), que fornece o navio, a tripulação de apoio e a inteligência marítima.',
        'Objetivo: Chegar à **Cidade dos Sinos Submersos** para obter um fragmento de chave necessário para desbloquear a localização do Medalhão. Patrono: A **Oráculo Sybilia**, uma velha que fala em enigmas, mas dá direções precisas e amuletos mágicos.',
        'Objetivo: O Medalhão está fragmentado em **três peças** e espalhado por ilhas perigosas. Patrono: O **Herdeiro do Rei Midas**, que oferece um litoral inteiro ao grupo em troca.',
        'Objetivo: O Medalhão é apenas a chave, mas o objetivo real é trazer uma **planta mágica** da ilha para salvar o reino moribundo. Patrono: A **Dríade do Bosque Moribundo**, que se comunica via sonhos e direciona o grupo para o mar.',
      ],
    },
    {
      id: 4,
      suggestion: [
        'A **Sacerdotisa Marinha Ligeia**: Uma cultista que roubou o medalhão e usa magia aquática para manipular a vida marinha. Ela envia piratas e tempestades para interceptar o grupo.',
        'O **Barão Pirata Argos**: Um comandante de frota impiedoso e gênio tático que vê os PCs como pragas. Ele usa a superioridade naval e espionagem (foco na rivalidade de navios).',
        'A **Medusa das Profundezas**: Uma criatura lendária (como o Talos) que guarda o único caminho para a ilha, transformando navios e homens em coral.',
        'O **Traidor a Bordo**: Um NPC aparentemente leal da tripulação que está secretamente trabalhando para a Sacerdotisa, sabotando o navio e a missão (antagonista interno).',
      ],
    },
    {
      id: 5,
      suggestion: [
        'A **Passagem pelas Ilhas Melódicas e o Colosso Submerso**. Além das **Sereias de Ligeia** que tentam enfeitiçar a tripulação, o grupo deve passar por um gargalo traiçoeiro guardado pelos restos de um **Colosso de Bronze** submerso que se move sob o comando de Ligeia. O confronto é um teste de Vontade/Controle/Habilidade contra a manipulação mental das Sereias, seguido de um desafio tático de navegação e combate contra o Colosso.',
        'Navegar pelo **Maelstrom Eterno**, uma tempestade mágica que força a tripulação a realizar intensos testes de trabalho em equipe e sobrevivência para evitar ser engolida pelo vórtice.',
        'Enfrentar os **Guerreiros Nascidos do Dente** (simulando os homens semeados). O grupo deve lutar contra ondas de soldados animados em uma praia estreita, enquanto defende o navio e tenta encontrar a rota de fuga.',
        '**Infiltração no Forte dos Ladrões de Fogo**: O grupo deve invadir uma tribo de gigantes que controla a única passagem secreta. O confronto é um desafio furtivo e social para roubar um item ou usar o engano para passar despercebido.',
      ],
    },
    {
      id: 6,
      suggestion: [
        'SUCESSO: O Medalhão é recuperado, a Sacerdotisa é derrotada, e o líder do grupo é salvo. Eles retornam como lendas, com o navio *Quimera* intacto.',
        'SUCESSO PARCIAL (Neutro): O Medalhão é recuperado, mas o navio *Quimera* é destruído na fuga, e o Patrono morre, deixando o grupo com o Medalhão, mas sem recompensa prometida ou rota de volta segura.',
        'FALHA: A Sacerdotisa consegue usar o Medalhão para convocar um **Leviatã**, que afunda o navio e persegue os sobreviventes, transformando o líder em um monstro marinho.',
        'SUCESSO ÉPICO (Moral): O Medalhão é usado para derrotar Ligeia e o Leviatã, mas o grupo decide **não** devolvê-lo ao reino corrupto, escolhendo protegê-lo por conta própria (gancho para a próxima campanha).',
      ],
    },
    {
      id: 7,
      suggestion: [
        {
          challenge:
            '[Social] Negociar com o **Lorde Pirata Zefyr** para obter suprimentos em um porto neutro, evitando que ele descubra a importância da missão.',
          npc: 'Lord Pirata Zefyr (Neutro/Ameaça)',
        },
        {
          challenge:
            '[Combate] Enfrentar um **Kraken Jovem** que tenta arrastar a âncora do navio para o fundo do mar.',
          npc: 'Kraken Jovem (Inimigo)',
        },
        {
          challenge:
            '[Enigma/Sobrevivência] Decifrar o significado de nuvens estranhas para prever a tempestade a tempo e evitar a perda de carga vital.',
          npc: 'Navegador Estelar Fantasma (Neutro/Fantasma)',
        },
        {
          challenge:
            '[Exploração/Engenho] Encontrar o único caminho seguro através do **Estreito de Areias Movediças**, que muda de forma a cada maré, sem o mapa correto.',
          npc: 'O Eremita das Ilhas (Neutro/Sábio)',
        },
        {
          challenge:
            '[Combate] Enfrentar um bando de **Harpies** em uma ilha vulcânica que roubam suprimentos vitais (água e comida).',
          npc: 'Guerreiro Alado de Poseidon (Inimigo)',
        },
        {
          challenge:
            '[Social] Convencer um grupo de **Anões das Rochas** a consertar o casco do navio em troca de raros tesouros de superfície.',
          npc: 'Mestre Ferreiro Grok (Neutro)',
        },
        {
          challenge:
            '[Enigma] O grupo se perde em um **oceano de ilusões**. Precisa usar a bússola mágica, mas só o PC que tem o coração mais puro pode tocá-la e decifrar a rota.',
          npc: 'Guardião da Bússola (Fantasma)',
        },
      ],
    },
    {
      id: 8,
      suggestion: [
        'Simplificar todas as regras de **navegação e manutenção do navio**. O navio só precisa de reparos em encontros críticos. Ignorar o tédio da viagem, focando apenas nos eventos em terra e nos encontros marítimos.',
        'Simplificar **Magia e Divindades**. Divindades agem diretamente (milagres/maldições), sem a necessidade de regras complexas de fé ou rituais longos.',
        'Ignorar regras de **Economia e Custo**. Tesouros e suprimentos são abundantes; o foco é na ação e na missão, não no gerenciamento de moedas ou recursos mundanos.',
        'Ignorar regras de **linguagem e comunicação**. O grupo entende todos os NPCs importantes (Elfos, Sereias, Gigantes) automaticamente para manter o ritmo rápido.',
      ],
    },
    {
      id: 9,
      suggestion: [
        "Guerreiro (Humano): 'O Cíclope (Músculos). Focado em combate e força bruta, é o principal protetor do navio.'",
        "Arqueiro (Elfo Marítimo): 'O Atirador de Elite. Silencioso e rápido, especializado em lidar com ameaças distantes e inimigos voadores.'",
        "Curandeiro/Sábio (Tiefling): 'A Bruxa da Tripulação. Usa magia para cura e controle do tempo, mas é vista com desconfiança pela tripulação.'",
        "Sacerdote Corrompido (Humano): 'Hipócrita e manipulador. Usa a fé para convencer e tem um passado sombrio ligado à Sacerdotisa Ligeia.'",
        "Bárbaro (Meio-Orc): 'O Herói Trágico. Fortemente amaldiçoado, busca a morte em combate, mas nunca a encontra. Tem medo do mar aberto e só luta em terra.'",
        "Mago das Runas (Anão): 'Engenheiro excêntrico. Prefere resolver problemas com explosivos e invenções do que com magia de combate.'",
      ],
    },
  ],
};

export { NavalFantasyScenario };
