import type { ThematicScenario } from '../../../types';

const TheScarOfTheEtherScenario: ThematicScenario = {
  id: 14,
  guideTheme: 'medieval',
  name: 'A Cicatriz do Éter: Os Guardiões do Sino e o Despertar da Praga',
  themeSuggestions: [
    {
      id: 1,
      suggestion: [
        'A aventura começa durante o seu **Ritual da Vigília**, o momento em que se tornam **Guardiões do Sino**. O ritual é interrompido por um ataque maciço dos **Abissais** (a versão da *DAO* para *Darkspawn*), forçando o grupo a fugir com o seu mentor, o Comandante Sênior.',
        'O grupo é incumbido de levar uma mensagem de alerta através de terras devastadas, mas o seu mentor é traído e morto. Eles devem assumir a liderança dos Guardiões e provar que a **Praga Sombria** é real para o cético Rei.',
        'Os PCs são ex-membros da **Ordem de Aço** (o equivalente aos Templários) que foram banidos e agora encontram redenção ao se unirem aos Guardiões do Sino, tendo que lutar contra a sua antiga Ordem para libertar **Magos Arcanos** aprisionados.',
        'O grupo são **Marginais da Superfície** (anões exilados) que descobrem uma rota de invasão subterrânea dos Abissais e, para salvar o seu povo, devem convencer os nobres da superfície a ajudá-los.',
      ],
    },
    {
      id: 2,
      suggestion: [
        'A motivação é a **União dos Reinos**: O grupo busca alianças com Elfos, Anões e Magos para formar um exército capaz de enfrentar o **Soberano da Ruína** (o equivalente ao *Archdemon*).',
        'O grupo é motivado pela **Redenção da Ordem**: Eles precisam provar que os Guardiões do Sino não são uma seita moribunda, mas sim a única esperança de salvação, restaurando a reputação da Ordem.',
        'A motivação é a **Caça ao Traidor**: Eles procuram o nobre que orquestrou a falha inicial da defesa do reino e agora está a conspirar para deixar os Abissais vencerem, a fim de tomar o trono.',
        'Eles são motivados pelo **Mistério da Cicatriz**: O grupo quer descobrir a origem da Praga Sombria e a verdade por trás da maldição que aflige os Abissais e os Guardiões do Sino.',
      ],
    },
    {
      id: 3,
      suggestion: [
        'Objetivo: **Intervir na Cidadela Arcana** onde o **Conclave Arcano** (os Magos) está sob cerco pela Ordem de Aço, decidindo se deve apoiar os Magos ou os Guardiões deles.',
        'Objetivo: **Atravessar o Reino Subterrâneo** para convencer os **Clãs das Montanhas de Ferro** (os Anões) a enviarem guerreiros de elite para a batalha da superfície, resolvendo o seu conflito interno de sucessão.',
        'Objetivo: **Provar o valor** dos Guardiões do Sino ao Rei de **Valória**, enfrentando um Abissal em público, expondo a ameaça e evitando uma execução.',
        'Objetivo: **Encontrar a Coroa de Espinhos**, um artefato que pode selar temporariamente a **Cicatriz do Éter**, o portal que os Abissais usam para entrar no mundo.',
      ],
    },
    {
      id: 4,
      suggestion: [
        '**O Soberano da Ruína (Antagonista Principal)**: Um ser abissal com asas, que comanda a Praga Sombria através de um Canto telepático. É o foco final do grupo.',
        '**O Alto Inquisidor da Ordem de Aço**: O líder fanático que vê os Magos Arcanos como uma ameaça maior do que os Abissais. Um obstáculo político constante.',
        '**O Comandante da Muralha (Aliado Político)**: Um general veterano, cético em relação à magia, mas leal ao reino, que precisa de ser convencido com provas e não com palavras.',
        '**A Rainha Élfica Exilada**: Uma líder sábia dos Elfos da floresta que só ajudará o reino se o grupo a ajudar a recuperar um artefato sagrado roubado pelos humanos.',
      ],
    },
    {
      id: 5,
      suggestion: [
        'O **Círculo Arcana (Conflito Moral)**: O grupo deve decidir se deve ajudar os Magos a se libertarem ou se deve forçá-los a entrar no exército. Requer testes de **Persuasão e Liderança**.',
        'O **Desfiladeiro Anão (Exploração/Combate)**: Navegar por túneis antigos infestados de Abissais, usando o ambiente para criar desmoronamentos e armadilhas. Requer testes de **Tática e Sobrevivência**.',
        'O **Santuário Élfico (Desafio Social)**: O grupo deve participar num ritual tribal élfico para ganhar a confiança do clã. Requer testes de **História e Diplomacia**.',
        'A **Confrontação na Capital**: Um evento social e político onde o grupo deve usar toda a sua reputação e provas para convencer o **Conselho de Valória** a declarar guerra à Praga Sombria.',
      ],
    },
    {
      id: 6,
      suggestion: [
        'SUCESSO ÉPICO: O grupo derrota o Soberano da Ruína e, em vez de morrerem no sacrifício final (o ritual de Guardião), descobrem uma forma de quebrar a maldição dos Abissais e lideram Valória para uma era de ouro.',
        'SUCESSO MELANCÓLICO: A Praga Sombria é contida, mas à custa do sacrifício de um dos PCs, que realiza o Ritual da Vigília final, salvando o mundo, mas deixando o grupo incompleto e cheio de cicatrizes.',
        'FALHA: O grupo não consegue unir as facções. O Soberano da Ruína vence o cerco final e os Abissais inundam o continente, forçando os sobreviventes a fugir para o mar.',
        'SUCESSO PARCIAL: O Soberano é derrotado, mas o Alto Inquisidor assume o poder em Valória, estabelecendo um regime teocrático que oprime Magos e Elfos. A luta pela liberdade continua.',
      ],
    },
    {
      id: 7,
      suggestion: [
        {
          challenge:
            '[Moral/Social] Decidir se deve aliar-se a um grupo de bandidos que conhece bem o território ou entregá-los à justiça para manter a lei e a ordem. Requer testes de **Moralidade/Convicção**.',
          npc: 'Líder dos Bandidos (Aliado Potencial)',
        },
        {
          challenge:
            '[Combate] Lutar contra uma **Bestialidade** (o equivalente aos *Ogre* de DAO), que exige que o grupo use táticas de interrupção e posicionamento para evitar ataques de área.',
          npc: 'Bestialidade Sombria (Inimigo Pesado)',
        },
        {
          challenge:
            '[Enigma/Engenho] Traduzir a língua antiga dos Clãs das Montanhas para descobrir uma fraqueza dos Abissais, mas a tradução está incompleta. Requer testes de **Conhecimento e Inteligência**.',
          npc: 'Erudito Anão (Fonte de Informação)',
        },
        {
          challenge:
            '[Furtividade/Percepção] Infiltrar-se na fortaleza de um nobre traidor para roubar provas, evitando os seus guardas pessoais e as armadilhas mágicas.',
          npc: 'Barão Desleal (O Alvo)',
        },
      ],
    },
    {
      id: 8,
      suggestion: [
        '**A Maldição do Sino**: Cada vez que um Guardião do Sino usa uma habilidade extrema, ele sofre uma pequena perda de sanidade (como a mácula dos Guardiões Cinzentos).',
        'O **Sistema de Influência**: As ações do grupo aumentam ou diminuem a sua influência sobre as três facções principais (Valória, Elfos e Anões), alterando as opções de diálogo.',
        '**Escolhas de Diálogo Críticas**: Diálogos com opções de moralidade clara (Ceder ao preconceito vs. Lutar pela justiça) que afetam permanentemente a personalidade do PC.',
        '**O Sacrifício do Ritual**: A regra de que apenas um Guardião do Sino pode sobreviver ao confronto com o Soberano da Ruína, criando um drama iminente sobre quem fará o sacrifício final.',
      ],
    },
    {
      id: 9,
      suggestion: [
        "O Mago Arcano (Lutador do Conclave): 'Um Mago que fugiu da tutela da Ordem de Aço, especializado em Magia Elemental. Motivador principal: Autonomia e Liberdade da Magia.'",
        "O Duelista (Guerreiro de Valória): 'Um nobre ou plebeu que favorece a esgrima leve e a agilidade. Focado em dano preciso e táticas de flanco. Motivador principal: Lealdade ao Reino.'",
        "O Explorador Élfico (Arqueiro Tático): 'Um Elfo da floresta, mestre em arco e flecha e na sobrevivência. Desconfiado dos humanos. Motivador principal: Sobrevivência do seu Povo.'",
        "O Defensor (Anão das Montanhas): 'Um anão com alta resistência e especialização em armadura pesada e escudos. Motivado pela honra do Clã. Motivador principal: Honra Perdida.'",
        "O Ex-Inquisidor (Clérigo de Combate): 'Um ex-membro da Ordem de Aço que questiona a doutrina. Usa magia de cura e combate. Motivador principal: Redenção Pessoal.'",
      ],
    },
  ],
};

export { TheScarOfTheEtherScenario };
