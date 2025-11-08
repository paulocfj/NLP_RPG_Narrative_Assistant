import type { ThematicScenario } from '../../../types';

const TheSingerOfTheVoidScenario: ThematicScenario = {
  id: 15,
  guideTheme: 'medieval',
  name: 'O Cantor do Vazio e a Guerra dos Picos',
  themeSuggestions: [
    {
      id: 1,
      suggestion: [
        'A aventura começa com os PCs como prisioneiros de guerra, levados para a execução, que é interrompida pela chegada de um **Devorador de Constelações** (a versão da ameaça dracónica). Eles escapam, descobrindo que são o **Cantor do Vazio**.',
        'Os PCs são **Marginais da Legião Cinder** (o equivalente aos Imperiais) que desertaram após testemunharem atrocidades contra os civis, forçando-os a lutar em duas frentes: contra a sua antiga Legião e contra a ameaça dos Devoradores.',
        "O grupo são caçadores de recompensas que, após o ataque do Devorador de Constelações, descobrem que podem usar os **Ecos da Criação** (o Thu'um/Gritos) absorvendo a essência dos monstros caídos.",
        'O grupo são **Eruditos do Monastério da Garganta do Céu** (os Greybeards/Barbas Cinzentas) que devem deixar o seu retiro após o retorno do **Rei do Vazio** (o Alduin) para encontrar o verdadeiro Cantor do Vazio.',
      ],
    },
    {
      id: 2,
      suggestion: [
        'A motivação é a **Caçada ao Rei do Vazio**: Descobrir o meio de banir ou destruir o Devorador de Constelações Alpha antes que ele devore o sol.',
        'A motivação é a **Paz de Gelidônia**: O grupo tenta negociar um armistício entre a Legião Cinder e os Clãs da Tempestade para que possam enfrentar a ameaça abissal unidos.',
        'A motivação é a **Descoberta do Legado**: Viajar pelo mundo em busca dos santuários antigos onde os Cantores do Vazio originais registaram os seus Cânticos Rúnicos mais poderosos.',
        'A motivação é a **Vingança Pessoal**: Um membro do grupo é o último sobrevivente de uma aldeia destruída pelo Rei do Vazio, e busca o poder para vingar o seu povo.',
      ],
    },
    {
      id: 3,
      suggestion: [
        'Objetivo: **Intervir na Guerra Civil** capturando o líder do Clã da Tempestade e forçando uma trégua para a batalha final contra os Devoradores.',
        'Objetivo: **Explorar a Cidade Subterrânea de Zandor** (o equivalente aos anões/Dwemer) para encontrar um artefato de batalha capaz de enfraquecer o Rei do Vazio, lutando contra os autómatos de vapor.',
        'Objetivo: **Aprender o Cântico Rúnico do Desarmamento** no Monastério da Garganta do Céu, o que exige um teste de **Resistência e Sabedoria** contra os ecos do passado.',
        'Objetivo: **Unir os Sete Jarls** (os governantes locais) de Gelidônia, provando-lhes que a ameaça é real, através de ações heroicas em cada um dos seus feudos.',
      ],
    },
    {
      id: 4,
      suggestion: [
        '**O Rei do Vazio (Antagonista Principal)**: Um Devorador de Constelações primordial que fala a língua rúnica e quer destruir o ciclo de vida.',
        '**A Baronesa da Legião Cinder**: Uma comandante astuta e implacável que só se preocupa com a Ordem e vê os Clãs da Tempestade como a maior ameaça.',
        '**O Líder dos Clãs da Tempestade**: Um rebelde carismático e teimoso que se recusa a curvar-se à Legião, a menos que esta se retire da sua terra.',
        '**Os Assassinos da Mão Negra (Antagonistas Ocultos)**: Uma seita de assassinos que vê o Cantor do Vazio como um alvo a eliminar para manter o equilíbrio político do reino.',
      ],
    },
    {
      id: 5,
      suggestion: [
        '[Exploração/Combate] **Explorar uma Antiga Crypta de Honra** (os túmulos de dragões/Nordic Ruins) para encontrar um Cântico Rúnico, lutando contra mortos-vivos (Draugr) e resolvendo quebra-cabeças de pilares.',
        '[Social/Diplomacia] **Resolver a Disputa da Propriedade** de um Jarl, decidindo entre a honra antiga e a lei da Legião Cinder, afetando a sua lealdade.',
        '[Viagem/Sobrevivência] **Atravessar uma Ventania de Neve**, onde os PCs devem usar a sua perícia de sobrevivência para encontrar abrigo e evitar a exaustão.',
        '[Combate Aéreo] **Lutar contra um Devorador de Constelações** que exige que o grupo se posicione em locais altos e ative artefatos arcanos para o forçar a aterrar.',
      ],
    },
    {
      id: 6,
      suggestion: [
        'SUCESSO ÉPICO: O Cantor do Vazio aprende o Cântico Rúnico Final, bane o Rei do Vazio e consegue negociar um acordo de paz duradouro entre a Legião Cinder e os Clãs da Tempestade, tornando-se o mediador supremo da terra.',
        'SUCESSO TRÁGICO: O Rei do Vazio é derrotado, mas a guerra civil intensifica-se sem a ameaça comum, e o Cantor do Vazio é forçado a abandonar a política para se isolar no Monastério.',
        'FALHA: O Cantor do Vazio não consegue aprender o Cântico Rúnico Final a tempo. O Rei do Vazio devora a essência do sol, e Gelidônia é mergulhada numa noite eterna de desespero e frio.',
        'SUCESSO PARCIAL: A Legião Cinder derrota os Clãs da Tempestade, mas o seu líder usa a derrota do Rei do Vazio para se declarar Imperador absoluto, e o Cantor do Vazio torna-se um fugitivo.',
      ],
    },
    {
      id: 7,
      suggestion: [
        {
          challenge:
            '[Moral/Social] Decidir se deve aceitar a oferta de **poder mágico proibido** de um Mago Arcano renegado para um Cântico Rúnico, sabendo que isso pode corromper o seu destino. Requer testes de **Força de Vontade e Convicção**.',
          npc: 'Mago Sombrio (Fonte de Poder)',
        },
        {
          challenge:
            '[Furtividade/Combate] Entrar na sede da **Ordem dos Lâminas Ocultas** (a Dark Brotherhood) para sabotar um assassinato planeado contra um aliado, enfrentando armadilhas e mestres das sombras.',
          npc: 'Mestre da Lâmina (Inimigo Furtivo)',
        },
        {
          challenge:
            '[Quebra-cabeça] Desvendar a sequência de um puzzle de runas rotativas na tumba de um Jarl antigo, que só pode ser resolvido com uma pista encontrada num livro raro.',
          npc: 'Guardião Espectral (Draugr Overlord)',
        },
        {
          challenge:
            '[Combate] Lutar contra um **Devorador de Constelações ferido** que aterra e usa o seu sopro de energia para criar muros de cristal de gelo no campo de batalha.',
          npc: 'Devorador de Constelações (Devorador de Gelo)',
        },
      ],
    },
    {
      id: 8,
      suggestion: [
        'O **Sistema de Cânticos Rúnicos**: O grupo deve encontrar palavras rúnicas espalhadas por Gelidônia para desbloquear novos Cânticos (como Fus Ro Dah), exigindo que absorvam a "alma" dos Devoradores.',
        'O **Caminho Duplo da Guerra**: Uma mecânica que força o grupo a escolher missões que favorecem a Legião Cinder (Ordem) ou os Clãs da Tempestade (Liberdade), afetando a sua reputação e recompensas.',
        '**A Árvore de Talentos do Cantor**: Uma progressão especial onde o Cantor do Vazio pode gastar pontos para aprender a dominar Cânticos de diferentes escolas (Fogo, Gelo, Ilusão, etc.).',
        '**Exploração de Masmorras (Dungeons)**: Cada masmorra é um labirinto único com puzzles ambientais, recompensando a exploração fora do caminho principal.',
      ],
    },
    {
      id: 9,
      suggestion: [
        "O Berseker dos Clãs (Guerreiro Pesado): 'Um guerreiro que usa armas de duas mãos, especializado em ataques pesados. Motivado pela liberdade dos Clãs da Tempestade.'",
        "O Mago do Gelo (Mago Elementar): 'Um feiticeiro especializado em magia de Gelo e Encantamento. Vindo da academia, mas agora um fugitivo. Motivado pela busca do conhecimento proibido.'",
        "O Ladrão da Cidade (Especialista em Furtividade): 'Um mestre da furtividade e arrombamento, que usa adagas e arcos leves. Membro de uma Guilda de Ladrões. Motivado pelo lucro e sobrevivência.'",
        "O Guerreiro Cinder (Lutador de Escudo e Espada): 'Um ex-soldado da Legião Cinder, mestre em táticas de escudo e linha de frente. Motivado pela restauração da ordem e honra.'",
        "O Bardo Errante (Suporte e Diplomacia): 'Um músico e contador de histórias que usa o carisma e a magia de suporte para ajudar os aliados. Motivado por registrar a lenda épica.'",
      ],
    },
  ],
};

export { TheSingerOfTheVoidScenario };
