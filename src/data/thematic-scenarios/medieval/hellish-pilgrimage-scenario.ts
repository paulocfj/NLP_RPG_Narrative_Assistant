import type { ThematicScenario } from '../../../types';

const HellishPilgrimageScenario: ThematicScenario = {
  id: 10,
  guideTheme: 'medieval',
  name: 'A Peregrinação Infernal (Nove Domínios de Hades e A Prova de Thanatos)',
  themeSuggestions: [
    {
      id: 1,
      suggestion: [
        'A aventura começa no **Claustro de São Judas**, onde o grupo encontra um selo arcano quebrado. Do selo, emerge **Thanatos** (na figura de um jovem pálido e cansado), que os informa sobre um roubo cósmico. A ação é uma **Investigação Oculta** para rastrear o ladrão mortal.',
        'O grupo está acampado em um **Cemitério Antigo** quando a neblina se adensa. Um dos PCs é levado por **Harpías Ceifadoras**, forçando o grupo a saltar para o portal recém-aberto em desespero. A ação é um **Resgate Imediato e Salto de Fé**.',
        'Eles são convocados à força ao **River Acheron** por um feitiço de Hades. O barqueiro, **Caronte**, recusa-se a levá-los, a menos que consigam a "Moeda de Ouro Genuína" de um morto-vivo. A ação é um **Dilema Social/Combate** para conseguir a passagem.',
        'O grupo testemunha o **Julgamento de Minos** (O Juiz das Almas) na entrada do Submundo. O Juiz falha em uma alma inocente, e Thanatos os incumbe de corrigir a injustiça e recuperar a chave da alma. A ação é uma **Missão de Justiça e Furtividade** no domínio do Limbo.',
      ],
    },
    {
      id: 2,
      suggestion: [
        'A jornada é motivada por **Amor e Redenção**. Um ente querido (ou o mentor do grupo) está condenado à Danação (pela Inveja ou Fraude), e o grupo busca o perdão de Hades.',
        'Eles agem por **Poder Divino**. O Deus do Olimpo (como Zeus ou Ares) os incumbe de roubar o **Cetro do Hades** para desestabilizar o Submundo, prometendo divindade em troca.',
        'O grupo é formado por **Inquisidores da Fé**, e sua missão é destruir a "Heresia" que se manifesta como um culto de mortais no Sétimo Domínio (Heresia). Eles agem por **Dever e Fanatismo**.',
        'Thanatos precisa de um **Guardião Mortal** para a "Chave da Barreira". A motivação é **Sobrevivência Cósmica**: se a chave cair em mãos erradas, a morte cessará de funcionar, e os mortos vagarão pela Terra.',
      ],
    },
    {
      id: 3,
      suggestion: [
        'Objetivo: **Recuperar a Chave da Barreira** que sela o Submundo (roubada por um mortal arrogante). Patrono: **Thanatos**, que atua como um guia cínico, aparecendo e desaparecendo, oferecendo conselhos crípticos em troca de cooperação.',
        'Objetivo: **Destruir o Trono de Minos**, pois o juiz se tornou corrompido. Patrono: Um **Oráculo Cego** (uma alma virtuosa presa no Limbo) que fornece a única rota através dos círculos.',
        'Objetivo: Selar a **Fissura Abissal** no Sexto Domínio (Violência), que está liberando Titãs para o mundo. Patrono: Um **Mago Necromante Renegado**, que fornece armas contra Hades, mas exige segredos em troca.',
        'Objetivo: Assassinar um **Semideus Renegado** (que cometeu o pior pecado: Traição) no Nono Domínio. Patrono: O próprio **Hades**, que oferece a imortalidade do grupo como recompensa.',
      ],
    },
    {
      id: 4,
      suggestion: [
        '**Hades (O Juiz Final)**: O senhor do Submundo. Ele raramente luta, preferindo observar e julgar os PCs, usando os ambientes dos Círculos contra eles.',
        '**Minos, A Aberração** (Antagonista recorrente): O Juiz das Almas. Uma figura monstruosa que persegue os PCs, testando sua moralidade e tentando condená-los ao Domínio apropriado.',
        '**O Semideus Ladrão (Hipólito)**: Um mortal que roubou a Chave da Barreira, preso no Nono Domínio (Traição). Ele é altamente tático e manipula as almas condenadas contra o grupo.',
        '**A Fúria Enyo**: Uma das Erínias (Fúrias) designada por Hades para garantir que a peregrinação termine em Danação, atuando como um "chefe" nos Domínios 3, 6 e 9.',
      ],
    },
    {
      id: 5,
      suggestion: [
        'O **Pântano de Estige** (Domínio da Gula): O grupo deve atravessar um pântano de lodo e almas insaciáveis, lutando contra criaturas que tentam devorar sua essência e moral. Requer testes de **Sobrevivência e Força**.',
        'O **Labirinto dos Avarentos** (Domínio da Ganância): Uma câmara de tesouros infinitos e armadilhas complexas (espinhos e gás venenoso). O grupo deve resistir à tentação do ouro para avançar. Requer testes de **Percepção e Sabedoria**.',
        'O **Campo de Batalha Eterno** (Domínio da Violência): Um combate tático e épico contra legiões de Cavaleiros Espectrais que cometeram violência contra o próximo, liderados por um Senhor da Guerra condenado. Requer testes de **Combate e Tática**.',
        'O **Coração Congelado** (Domínio da Traição - Clímax): O confronto final contra o Semideus Ladrão, que está preso no centro de um lago de gelo. O grupo deve usar o ambiente (geada e cristais) para causar dano, enquanto Thanatos observa o julgamento.',
      ],
    },
    {
      id: 6,
      suggestion: [
        'SUCESSO: A Chave é recuperada, e o grupo é levado de volta à Terra. Thanatos expressa gratidão, e um PC recebe a **Marca da Morte** (que o permite ver almas e espectros).',
        'SUCESSO PARCIAL (Neutro): O grupo recupera a Chave, mas Hades toma o Semideus Ladrão como novo guardião. O grupo retorna, mas um dos PCs é marcado por Minos e terá uma vida curta.',
        'FALHA: O grupo sucumbe à Danação, sendo forçado a cumprir o castigo de um dos Domínios. Um PC se torna um novo Barqueiro, o outro, um Tesoureiro Espectral.',
        'SUCESSO ÉPICO (Moral): O grupo descobre que a Chave da Barreira é uma farsa. Eles convencem Thanatos a **ajudar o Semideus Ladrão** em sua redenção, tornando-se aliados secretos do Submundo.',
      ],
    },
    {
      id: 7,
      suggestion: [
        {
          challenge:
            '[Social] Convencer **Caronte (O Barqueiro)** a aceitar um objeto de valor sentimental (e não dinheiro) como pagamento pela travessia do Acheron.',
          npc: 'Caronte (Neutro/Cínico)',
        },
        {
          challenge:
            '[Combate] Lutar contra um grupo de **Súcubos e Íncubos** (Domínio da Luxúria) que tentam seduzir e drenar a vontade dos PCs com ilusões.',
          npc: 'A Rainha Súcubo (Inimigo/Ilusão)',
        },
        {
          challenge:
            '[Enigma/Lógica] Decifrar as **Tabuletas da Heresia** que só podem ser lidas por alguém que não possui fé em Deuses, mas sim em si mesmo. Requer um teste de ego.',
          npc: 'O Mago Herético (Espectro/Neutro)',
        },
        {
          challenge:
            '[Moral/Social] Um Cavalheiro Fantasma (Domínio da Ira) se rende e pede que o grupo mate Minos em troca de informações vitais.',
          npc: 'Cavalheiro Irado (Antigo Aventureiro)',
        },
        {
          challenge:
            '[Combate] Enfrentar um **Elemental de Sangue** (Domínio da Violência) que se forma na lava e tenta afogar o grupo.',
          npc: 'Elemental de Sangue (Inimigo)',
        },
        {
          challenge:
            '[Exploração/Engenho] Atravessar a **Floresta dos Suicidas** (Domínio da Violência contra si), usando testes de Destreza e Furtividade para não perturbar os espíritos das árvores.',
          npc: 'As Árvores Falantes (Perigo do Ambiente)',
        },
      ],
    },
    {
      id: 8,
      suggestion: [
        'Regras de **Dívida da Alma**: Todo PC começa com uma Dívida de 0. Cada ato de violência desnecessária (contra Thanatos ou um inocente) adiciona +1. A Dívida final afeta o destino no final da aventura.',
        'Ignorar regras de **Sono e Comida**: A sobrevivência é puramente moral. A única necessidade é evitar o dano à alma (Dano Sombrio).',
        'Simplificar **Magia de Cura**: Magias de Luz e Cura Divina causam dano extra massivo contra criaturas do Submundo, mas a cura não funciona em Danos Sombrios.',
        'O foco é em **Habilidade e Julgamento**: O combate é rápido e tático, ignorando regras detalhadas de **munição e carga**. O mais importante é o teste de Sabedoria/Moralidade a cada Domínio.',
      ],
    },
    {
      id: 9,
      suggestion: [
        "Paladino Desgraçado (Humano): 'O Penitente. Busca redimir sua alma por um pecado de Ira. É o mais forte, mas tem desvantagem em testes no Domínio da Ira.'",
        "Clérigo Cínico (Anão): 'O Guardião da Fé. Acredita que Thanatos é a única verdade. É o curandeiro, mas questiona constantemente a moral do grupo.'",
        "Bardo Espectral (Elfo): 'O Mediador. Usa a música para acalmar as almas atormentadas e subornar Caronte. É o mais fraco em combate direto.'",
        "Ladino das Sombras (Tiefling): 'O Guia. Conhece os becos escuros do Submundo. É motivado pelo poder e tenta negociar com Hades.'",
        "Bruxo do Caos (Humano): 'O Corrompido. Usa magia negra e arcana, mas cada feitiço aumenta sua Dívida da Alma.'",
        "Guerreiro Ancestral (Meio-Orc): 'O Inocente. Nunca cometeu um pecado grave, servindo como a bússola moral do grupo. É o escudo principal.'",
      ],
    },
  ],
};

export { HellishPilgrimageScenario };
