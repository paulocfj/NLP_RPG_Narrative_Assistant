import type { ThematicScenario } from '../../../types';

const BurdenOfHubrisScenario: ThematicScenario = {
  id: 9,
  guideTheme: 'medieval',
  name: 'O Fardo da Híbris (Leviatã, Oráculo e Julgamento Moral)',
  themeSuggestions: [
    {
      id: 1,
      suggestion: [
        'A aventura começa no **Templo de Delfos**, onde a Pítia (Oráculo) entrega uma profecia críptica sobre a destruição da polis por um Leviatã, ligada ao orgulho de um herói do passado. A ação é uma **Corrida para Interpretação** antes que a profecia se cumpra.',
        'O grupo está em uma **Acrópole costeira** quando o Karkinos (Leviatã) surge do mar, destruindo a frota naval. A ação é um **Resgate e Defesa** imediato, onde os PCs devem ajudar os sobreviventes e repelir o primeiro ataque da criatura.',
        'O grupo encontra o **Filósofo Diógenes**, que os desafia publicamente sobre a natureza da virtude e do orgulho, entregando um objeto mágico que só funciona se os PCs agirem com humildade. A ação é um **Teste de Moralidade e Persuasão** contra o Filósofo.',
        'Eles são convocados por um **Deus Menor (como Poseidon ou Hades)**, que exige que o Leviatã seja morto, pois sua existência desequilibra o cosmos, prometendo poder em troca. A ação é um **Pacto Divino** perigoso com consequências desconhecidas.',
      ],
    },
    {
      id: 2,
      suggestion: [
        'O grupo age por **Honra e Restauração de Legado**, pois a Híbris que invocou o Leviatã foi cometida por um ancestral de um dos PCs, e apenas a caça pode redimir o nome da família.',
        'Eles são mercenários motivados pela **Carapaça de Ouro** do Karkinos, que vale uma fortuna. A salvação da polis é um bônus, mas a ganância é a principal força.',
        'O Karkinos capturou ou amaldiçoou um **ente querido** do grupo, e a caçada é por **amor e desespero** para reverter a maldição antes que ela se complete.',
        'O grupo busca provar sua **Virtude aos Deuses**, pois foram acusados de Híbris por um rival e precisam caçar o Leviatã para limpar seus nomes e evitar a ira divina.',
      ],
    },
    {
      id: 3,
      suggestion: [
        'Objetivo: **Matar o Karkinos** (Leviatã) para libertar a Polis da destruição. Patrono: O **Estratego (General) da Polis**, que oferece apoio militar, mas exige que a honra da caçada seja dele.',
        'Objetivo: **Selar o Karkinos** (Leviatã) em um Labirinto Mágico subaquático. Patrono: A **Pítia de Delfos**, que fornece informações oraculares, mas exige sacrifício e humildade.',
        'Objetivo: **Roubar a Pérola de Átropos** que está no coração do Leviatã, pois ela pode controlar o destino. Patrono: Um **Culto Proibido** (seguidores de Cronos) que busca ressuscitar a era dos Titãs.',
        'Objetivo: **Convencer o Karkinos** a parar seu ataque, descobrindo a fonte de sua dor/fúria. Patrono: Um **Sábio Exilado**, que oferece uma rota de paz, mas é considerado traidor.',
      ],
    },
    {
      id: 4,
      suggestion: [
        'O **Karkinos (Leviatã)**: Um caranguejo gigante do tamanho de uma ilha, com carapaça dourada e a habilidade de invocar ilusões de medo e culpa (ligadas à Híbris).',
        'O **Kraken Guardião**: Uma criatura de tentáculos que protege o Labirinto de Átropos, exigindo um teste de força e resistência antes da batalha final.',
        '**Átropos (A Moira)**: Uma das três Deusas do Destino (como antagonista). Ela vê a caçada como uma tentativa fútil de desafiar o Fado e coloca armadilhas morais no caminho dos heróis.',
        'O **Campeão Caído**: Um ex-herói da Polis (morto em batalha), ressuscitado como um espectro de orgulho e arrogância, que tenta roubar a glória da caçada.',
      ],
    },
    {
      id: 5,
      suggestion: [
        'O **Labirinto de Átropos**. Uma masmorra subaquática de **Puzzles de Lógica e Dilemas Morais**, onde os PCs devem enfrentar manifestações de seus próprios orgulhos para avançar.',
        'A **Batalha Naval**. Um confronto tático e épico no mar aberto, onde o grupo deve usar um navio especial (Quinquerreme Mágico) para caçar o Leviatã, evitando seus pinças e jatos de água.',
        'O **Coração da Híbris**. O confronto final dentro da carapaça do Karkinos. Uma luta de **três fases** onde o grupo enfrenta o Leviatã enquanto ele tenta os PCs com visões de glória e poder.',
        'O grupo é forçado a lutar em um **Plano Etéreo**, onde suas estatísticas de força não funcionam, e eles devem usar sua Inteligência e Sabedoria (e não a Híbris) para derrotar o inimigo.',
      ],
    },
    {
      id: 6,
      suggestion: [
        'SUCESSO: O Karkinos é morto (ou selado), e o PC que carregava o Fardo da Híbris é redimido, tornando-se um herói lendário. A Polis prospera em paz.',
        'SUCESSO PARCIAL (Neutro): O Karkinos é ferido e se retira, mas a Híbris não foi totalmente erradicada. A Pítia lança uma nova profecia sombria, e o General reivindica a glória para si.',
        'FALHA: O grupo sucumbe ao orgulho e falha na missão, permitindo que o Karkinos destrua a Polis. Eles se tornam **foragidos** e são amaldiçoados pelos Deuses, tendo que viver em exílio.',
        'SUCESSO ÉPICO (Moral): O grupo descobre que a Híbris real está na Polis. Eles decidem **proteger o Karkinos** (que era um mensageiro da natureza) e trabalhar para derrubar o General e a corrupção.',
      ],
    },
    {
      id: 7,
      suggestion: [
        {
          challenge:
            '[Social] Convencer o **Povo da Polis** a esvaziar a cidade antes do ataque final do Leviatã (teste de Carisma contra o General que nega o perigo).',
          npc: 'A multidão da Polis (Social/Vítima)',
        },
        {
          challenge:
            '[Combate] Lutar contra um grupo de **4-5 Tritões Hostis** que servem a Poseidon e protegem as rotas marítimas do Leviatã.',
          npc: 'Tritão Líder (Inimigo)',
        },
        {
          challenge:
            '[Enigma/Lógica] Resolver o **Enigma da Esfinge Submersa** (dentro do Labirinto), um teste sobre o conceito de Orgulho e Queda, com consequências físicas se falhar.',
          npc: 'A Esfinge (Neutro/Julgamento)',
        },
        {
          challenge:
            '[Moral/Social] Um rival (o **Campeão Caído**) se rende e oferece informações vitais em troca da glória da caçada (dilema de traição).',
          npc: 'Campeão Traidor (Neutro/Vilão)',
        },
        {
          challenge:
            '[Combate] Enfrentar uma **Medusa Aquática** que tenta petrificar o grupo antes que cheguem ao Kraken Guardião.',
          npc: 'Medusa (Inimigo)',
        },
        {
          challenge:
            '[Exploração/Engenho] Atravessar as **Correntes de Escila** (redemoinhos mágicos), usando testes de Força e Inteligência para controlar o navio.',
          npc: 'Escila (Perigo do Ambiente)',
        },
      ],
    },
    {
      id: 8,
      suggestion: [
        'Regras de **Híbris como Recurso**: Um PC pode declarar um ato de Híbris (orgulho excessivo) para ganhar Vantagem em um ataque ou teste, mas receberá Desvantagem no próximo teste de Sabedoria ou se tornará o alvo do Karkinos.',
        'Regras de **Natação/Respiração**: O grupo pode passar muito tempo submerso, mas deve fazer testes de Constituição ou receberá penalidades de Exaustão ao respirar na superfície.',
        'Foco em **Três Atributos**: Todos os testes devem ser focados em **Força, Inteligência e Carisma** (Coragem, Razão e Persuasão), ignorando Destreza e Sabedoria em certos encontros.',
        'Combate é **Tático e Ambiental**: O foco é em usar o ambiente (ânforas, estátuas, correntes) contra o Leviatã, ignorando regras detalhadas de **munição, carga e peso**.',
      ],
    },
    {
      id: 9,
      suggestion: [
        "Sacerdote de Apolo (Humano): 'O Orador. Busca guiar o grupo pela virtude, mas é atormentado por uma falha moral do passado. É o mais social do grupo.'",
        "Guerreiro Espartano (Humano): 'O Implacável. Focado em honra e combate, é o principal escudo do grupo. Tende a ser orgulhoso e desdenha da sutileza.'",
        "Sábio de Atenas (Meio-Elfo): 'O Intelectual. Usa lógica e conhecimento para resolver enigmas e interpretar a profecia. É cínico sobre as ações dos Deuses.'",
        "Ladrão Ágil (Tiefling): 'O Trapaceiro. Especializado em furtividade e manipulação, usa o disfarce e a lábia. É o mais motivado pela fortuna e o tesouro.'",
        "Mago Evocador (Humano): 'O Poderoso. Usa magia destrutiva, mas cada uso excessivo de poder mágico pode ser interpretado como um ato de Híbris.'",
        "Curandeiro Nômade (Anão): 'O Guardião. Focado em proteger a vida e curar os feridos, é o único que tem verdadeira humildade. É visto com desconfiança pelos espartanos.'",
      ],
    },
  ],
};

export { BurdenOfHubrisScenario };
