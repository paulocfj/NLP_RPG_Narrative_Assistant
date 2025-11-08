import type { ThematicScenario } from '../../../types';

const TheLegacyOfTheSourceScenario: ThematicScenario = {
  id: 13,
  guideTheme: 'medieval',
  name: 'O Legado da Fonte: A Ordem Cinder e a Névoa do Vazio',
  themeSuggestions: [
    {
      id: 1,
      suggestion: [
        'A aventura começa com o grupo acorrentado na **Garganta de Ferro**, uma prisão flutuante da **Ordem Cinder** (o equivalente aos Magisters), a caminho de um campo de expurgo. O Navio é atacado pelos **Devoradores do Vazio** (Voidwoken), forçando uma fuga caótica.',
        'O grupo são mercenários contratados para investigar uma vila que desapareceu no interior da **Névoa do Vazio** – um miasma que atrai os Devoradores e corrompe a Fonte. Eles descobrem um artefato antigo que detém o poder da Divindade original.',
        'O grupo são membros infiltrados da Ordem Cinder, disfarçados de Magisters, cuja missão é libertar um lendário **Portador da Fonte** que está aprisionado no Templo da Cidade Alta, antes que a Ordem o "purifique".',
        'O grupo acede ao seu poder da Fonte numa ilha isolada e agora precisa de aprender a controlá-lo rapidamente, enquanto é caçado pelo **Caçador de Fontes Supremo** da Ordem, um ex-membro do seu círculo.',
      ],
    },
    {
      id: 2,
      suggestion: [
        'A jornada é motivada pela **Ascensão Pessoal**: Um ou mais PCs sentem o chamado para se tornarem o próximo Divino e precisam acumular o poder da Fonte.',
        'O grupo é motivado pela **Libertação**: Eles buscam destruir a Ordem Cinder para que o uso da Fonte seja livre novamente, independentemente das consequências do Vazio.',
        'A motivação é a **Proteção**: O grupo precisa proteger uma criança que é a reencarnação de um Deus-Antigo (o próximo *Godwoken*) de ser capturada ou corrompida pelo Vazio.',
        'Eles são motivados pela **Vingança**: O grupo quer retaliar a Ordem Cinder por ter extraído ou suprimido a Fonte de um ente querido, transformando-o num ser vazio.',
      ],
    },
    {
      id: 3,
      suggestion: [
        'Objetivo: **Infiltrar o Quartel-General da Ordem Cinder** para roubar os Manuscritos da Fonte e descobrir como a Fonte se manifesta antes que a Ordem apague todo o conhecimento.',
        'Objetivo: **Encontrar os Sete Santuários do Antigo Divino** para acender os altares e fundir a sua Fonte num ritual, desafiando a divindade atual.',
        'Objetivo: **Reunir as Cinco Raças** (humanos, elfos, anões, lagartos e mortos-vivos) sob uma bandeira comum antes que a Névoa do Vazio engula os seus reinos. Patrono: O **Conselheiro Élfico Dissidente**.',
        'Objetivo: **Caçar o Arquidevorador** – a criatura do Vazio que está a orquestrar os ataques. Patrono: O **Fantasma de um Mago** que foi vítima da purificação da Fonte.',
      ],
    },
    {
      id: 4,
      suggestion: [
        '**A Grã-Mestra da Ordem Cinder (Antagonista Principal)**: Uma clériga fanática que acredita que a Fonte é a raiz de todo o mal e deve ser erradicada, caçando o grupo sem tréguas. O equivalente ao *Magister Lord*.',
        '**O Devorador de Éter (Monstro Recorrente)**: Criaturas horríveis e disformes do Vazio que se materializam perto de fontes de Fonte descontrolada. Atraem-se pelo poder da Fonte dos PCs.',
        '**O Comandante Marcado (Inimigo Tático)**: Um antigo herói que foi capturado e teve a sua Fonte extraída pela Ordem Cinder, sendo reanimado como um Guardião Sem-Mente e amargurado.',
        '**A Filha da Névoa**: Uma figura misteriosa que vagueia pelas áreas afetadas pelo Vazio. Ela oferece ao grupo mais poder da Fonte em troca da sua lealdade à escuridão.',
      ],
    },
    {
      id: 5,
      suggestion: [
        'O **Mercado Negro do Porto Livre** (O Apoio Clandestino): Um local onde o grupo pode negociar a remoção temporária dos seus **Colares da Fonte** (que suprimem o poder mágico) e recrutar seguidores. Requer testes de **Negociação e Engano**.',
        'A **Câmara de Testes Elementais** (O Poder da Fonte): O grupo deve usar a magia da Fonte para manipular o ambiente, combinando elementos (molhado/veneno + eletricidade/fogo) para desativar armadilhas e abrir portas. Requer testes de **Inteligência e Interação Ambiental**.',
        'As **Catacumbas dos Ancestrais** (O Passado Escondido): Um calabouço onde o grupo encontra **Mortos-Vivos** (semelhante ao *DOS2*) que possuem habilidades únicas e memórias cruciais sobre o Divino original. Requer testes de **Exploração e Persuasão**.',
        'O **Cerco à Fortaleza Cinder**: Uma missão de assalto onde o grupo deve usar táticas furtivas, combate direto e manipulação ambiental (explodir barris de óleo, eletrificar água) para derrotar a guarnição.',
      ],
    },
    {
      id: 6,
      suggestion: [
        'SUCESSO ÉPICO: Um dos PCs se torna o **Novo Divino** e usa o seu poder para selar permanentemente a Névoa do Vazio, mas a Fonte é suprimida para a humanidade por um século para garantir a paz.',
        'SUCESSO MELANCÓLICO: A Fonte é libertada, mas o poder da **Névoa do Vazio** é demasiado grande. O grupo tem de fugir do mundo, deixando para trás os inocentes, para recomeçar noutro plano de existência.',
        'FALHA: O grupo é capturado. A Ordem Cinder realiza o **Ritual Final de Expurgamento**, drenando toda a Fonte do mundo. A magia desaparece, e a Ordem governa com mão de ferro tecnológica.',
        'SUCESSO PARCIAL: O Arquidevorador é derrotado, mas a Ordem Cinder permanece forte. O grupo deve se tornar **Guerrilheiros Fontes**, lutando nas sombras contra o regime opressor.',
      ],
    },
    {
      id: 7,
      suggestion: [
        {
          challenge:
            '[Moral/Social] Decidir se deve extrair a Fonte de um criminoso condenado à morte, libertando-o da vida, mas garantindo o seu próprio poder para um combate iminente. Requer testes de **Moralidade/Convicção**.',
          npc: 'O Monge Marcado (Vítima Potencial)',
        },
        {
          challenge:
            '[Combate] Lutar contra três **Soldados da Ordem Cinder** num deque de navio onde a chuva transformou o chão numa superfície eletrificável. Exige manipulação tática dos elementos. Requer testes de **Magia e Tática**.',
          npc: 'Líder do Esquadrão Cinder (Inimigo Tático)',
        },
        {
          challenge:
            '[Enigma/Engenho] Desbloquear a câmara de um **Guerreiro Lagarto** antigo que só responde a quem falar a verdade sobre o seu passado. Requer testes de **Persuasão e História**.',
          npc: 'Guerreiro Lagarto (Antigo Seguidor)',
        },
        {
          challenge:
            '[Furtividade/Percepção] Atravessar uma área patrulhada pelos **Expurgadores da Fonte**, que usam um dispositivo *Magitek* para sentir qualquer uso da Fonte no raio de 100 metros.',
          npc: 'Expurgador da Fonte (Inimigo de Furtividade)',
        },
      ],
    },
    {
      id: 8,
      suggestion: [
        'Regras do **Colar da Fonte**: Enquanto o grupo usa o colar, a sua magia é suprimida. Ao ser removido, o PC pode usar o poder da Fonte, mas atrai imediatamente a atenção de um **Devorador de Éter** nas proximidades.',
        'Uso da **Fonte Elemental**: O grupo deve gastar pontos de Fonte para lançar magias poderosas, mas deve fazê-lo em conjunto, combinando elementos para criar efeitos únicos (eletricidade + veneno, fogo + óleo, etc.).',
        'O **Sistema de Reputação**: As ações do grupo afetam a sua reputação junto da Ordem Cinder, dos Devoradores do Vazio, e dos Portadores da Fonte, desbloqueando novas opções de diálogo e missões.',
        '**Falas com o Falecido**: Um dos PCs pode ter a habilidade de falar com os mortos, permitindo-lhes obter informações, mas enfrentando os horrores da morte.',
      ],
    },
    {
      id: 9,
      suggestion: [
        "Portador da Fonte (Mago Elemental): 'O Mago focado na interação elemental e na Magia da Fonte. Deve gerir o risco de ser um alvo da Ordem. Motivador principal: Compreensão da Fonte.'",
        "Guerreiro de Armadura (Tanque): 'O combatente corpo a corpo que usa armadura pesada e habilidades de combate físico. Muitas vezes é um ex-Magister ou ex-Guarda. Motivador principal: Honra Perdida.'",
        "Wayfarer (Arqueiro Tático): 'O arqueiro com habilidades em feitiços de Terra e Veneno. Focado em posicionamento e armadilhas ambientais. Motivador principal: Sobrevivência.'",
        "Metamorfo (Mestre das Transformações): 'O usuário da Fonte que pode transformar-se em criaturas para combate ou furtividade. Inspirado na raça Lagarto. Motivador principal: Liberdade.'",
        "Clérigo Renegado (Suporte): 'O curandeiro que usa a Fonte para cura e bênçãos (Cura, Armadura Mágica), mas é caçado pela Ordem Cinder. Motivador principal: Dever.'",
      ],
    },
  ],
};

export { TheLegacyOfTheSourceScenario };
