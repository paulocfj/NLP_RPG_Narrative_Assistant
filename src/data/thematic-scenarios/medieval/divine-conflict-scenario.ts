import type { ThematicScenario } from '../../../types';

const DivineConflictScenario: ThematicScenario = {
  id: 6,
  guideTheme: 'medieval',
  name: 'A Tumba do Sacerdote Herege (Conflito Divino e Corrupção)',
  themeSuggestions: [
    {
      id: 1,
      suggestion: [
        'A aventura começa na **Biblioteca de Kordélia**, um local sagrado, que está sob ataque de **Espectros da Peste Rubra** (criaturas de corrupção). O grupo precisa lutar para selar a entrada para a biblioteca e pegar o mapa da tumba.',
        'O grupo acorda aprisionado em um **Cárcere de Inquisidores**, sendo interrogado sobre um mapa profano que foi encontrado em sua posse. A ação é uma fuga furtiva e imediata.',
        'O grupo se encontra no meio de uma **batalha campal** entre Paladinos de um deus da Justiça e Sacerdotes de um deus do Caos. Eles devem escolher um lado para sobreviver à primeira onda de combate.',
        'Eles encontram o navio *Quimera* preso em algas estranhas. Um **espírito marinho** exige um sacrifício (um item mágico precioso ou um tripulante) imediatamente para libertar o navio.',
      ],
    },
    {
      id: 2,
      suggestion: [
        'O grupo busca desesperadamente o artefato da tumba, pois um ente querido (ou um membro do grupo) foi infectado pela **Peste Rubra** e só ele pode fornecer a cura. Eles agem por **amor e desespero**.',
        'Eles fizeram um **juramento inquebrável** perante uma divindade (ou Patrono) de que completariam a missão. O não cumprimento resultará em maldição eterna (foco no dever religioso/moral).',
        'O grupo está em uma **corrida** contra um culto rival que busca o mesmo artefato para usá-lo em um ritual profano. O destino do reino está em jogo.',
        'Eles são mercenários contratados por uma organização clandestina, e sua única motivação é o **ouro e a promessa de poder** que o artefato oferece.',
      ],
    },
    {
      id: 3,
      suggestion: [
        'Objetivo: Recuperar o **Cálice da Ascensão**, um artefato que pode curar a Peste Rubra. Patrono: Um Anjo ferido (ou Paladino de alta patente) que promete a **benção de seu Deus** e grande honra.',
        'Objetivo: Destruir o **Tomo da Herege**, um livro que contém o conhecimento para criar a Peste Rubra. Patrono: Um **Inquisidor Cego**, que oferece recursos e o perdão por crimes passados do grupo.',
        'Objetivo: Libertar um Deus aprisionado na tumba antes que Ele enlouqueça. Patrono: Um **Cultista Dissidente** que oferece conhecimento proibido, mas exige a destruição da Tumba em troca.',
        'Objetivo: Roubar o artefato e vendê-lo ao maior lance no submundo. Patrono: A **Rainha das Ladrões**, que oferece rotas de fuga e uma fortuna em rubis.',
      ],
    },
    {
      id: 4,
      suggestion: [
        'O **Sacerdote Herege Malak**: Um clérigo caído obcecado por se tornar um avatar divino, manipulando a Peste Rubra para corromper a fé. Ele usa magias de dor e loucura.',
        'Um **Devorador de Almas**: Um demônio de alto nível que se alimenta da fé e dúvida. Ele tenta seduzir o grupo com ilusões, prometendo realizar seus maiores desejos.',
        'A **Legião de Espectros da Peste Rubra**: Uma força não-morta, liderada por um Cavaleiro da Praga, que ataca em massa e tenta infectar o grupo (antagonista de grupo, como a Tormenta).',
        'A **Sacerdotisa Fanática Lyara**: Ela tem a intenção de **destruir o mundo** para que um novo possa nascer. Ela é boa, mas tem métodos extremos, forçando um dilema moral sobre o grupo.',
      ],
    },
    {
      id: 5,
      suggestion: [
        'Confronto com o Herege Malak no **Altar Corrompido**, enquanto a Peste Rubra se espalha pela câmara. O grupo deve lutar sob pressão, lidando com lacaios e com a magia de área do Herege.',
        'O grupo é forçado a realizar um teste de fé, lutando contra um **Guardião Celestial Corrompido** que testa suas crenças. Se falharem no teste, perdem as habilidades divinas temporariamente.',
        'Batalha em uma câmara que **distorce as Leis da Magia/Física**. A magia falha e os combates de curta distância ficam caóticos, exigindo criatividade e testes de Sobrevivência.',
        'O grupo precisa resolver um **Enigma de Sacrifício Moral** para passar por uma porta selada por dois Deuses rivais. A solução requer que um PC abandone permanentemente um ideal ou traço de personalidade.',
      ],
    },
    {
      id: 6,
      suggestion: [
        'SUCESSO: O Sacerdote é derrotado, o Cálice recuperado e a Peste contida. O Patrono cumpre a promessa, e o grupo é reverenciado como herói.',
        'SUCESSO PARCIAL (Neutro): O Sacerdote é derrotado, mas o Cálice é **destruído** para evitar sua corrupção (perda da recompensa, mas vitória moral). O Patrono fica descontente.',
        'FALHA: O Sacerdote ascende e se torna um semideus, e o grupo deve **fugir** desesperadamente da Tumba, sabendo que o mundo está agora em perigo.',
        'SUCESSO ÉPICO (Moral): O grupo usa o Cálice para curar a Peste, mas descobre que o Patrono é corrupto. Eles decidem **esconder ou destruir o Cálice**, rejeitando a recompensa e se tornando foragidos.',
      ],
    },
    {
      id: 7,
      suggestion: [
        {
          challenge:
            '[Social] Convencer um Sábio Eremita (guardião da tumba) a revelar a senha que desativa as armadilhas de fogo, provando sua pureza de intenção.',
          npc: 'Sábio Eremita (Neutro)',
        },
        {
          challenge:
            '[Combate] Lutar contra um **Golem Elemental de Ferro e Terra** que só pode ser ferido com magia ou armas forjadas em ferro puro.',
          npc: 'Golem Guardião (Inimigo)',
        },
        {
          challenge:
            '[Enigma/Lógica] Decifrar as **visões de loucura** que o Patrono está enviando ao grupo para encontrar o caminho correto através do labirinto sem fim.',
          npc: 'A Voz da Loucura (Fantasma/Neutro)',
        },
        {
          challenge:
            '[Moral/Social] Dois cultos rivais (do bem e do mal) têm partes da chave. O grupo deve decidir qual deles é menos perigoso para obter o que precisa.',
          npc: 'Líder dos Puritanos (Ameaça/Neutro)',
        },
        {
          challenge:
            '[Combate] Enfrentar uma **Lich** que vive em uma cripta lateral e se alimenta de almas de heróis caídos.',
          npc: 'Lich Vazio (Inimigo)',
        },
        {
          challenge:
            '[Exploração/Engenho] Atravessar uma ponte quebrada sobre um rio de lava fervente, usando cordas, testes de força e magia.',
          npc: 'Criatura Sombria no Rio de Lava (Inimigo)',
        },
      ],
    },
    {
      id: 8,
      suggestion: [
        'Simplificar as regras de **Magia de Cura**: Todas as magias de cura são instantâneas e não exigem pontos de mana/magia. O foco é manter a luta viva, não o gerenciamento de recursos.',
        'Ignorar regras de **Alinhamento ou Fé**: Os PCs podem fazer escolhas morais sem medo de perder poderes, pois o foco é no dilema, não na punição do sistema.',
        'Ignorar regras de **Economia e Inventário**: O grupo tem suprimentos abundantes e não se preocupa com o custo das coisas. Armas e itens são ganhos em encontros, não comprados.',
        'Combate é **Cinemático**: O foco é na descrição épica da luta, ignorando regras detalhadas de **munição, carga e peso**. O PC atira flechas infinitas em momentos cruciais.',
      ],
    },
    {
      id: 9,
      suggestion: [
        "Paladino (Meio-Elfo): 'Em crise de fé, questionando a justiça de seu Deus. Forte em combate, mas hesita em dilemas morais.'",
        "Clérigo (Humano): 'Fanático e dogmático. Acredita que a missão justifica os meios e está sempre disposto a usar a força divina.'",
        "Bárbaro (Meio-Orc): 'Com ligação ancestral a um deus antigo do caos. Resolve problemas com força, mas tem acesso a magias de proteção inesperadas.'",
        "Mago (Tiefling): 'Busca conhecimento proibido a qualquer custo, vendendo informações e segredos para o submundo. Forte em Magia de Ilusão.'",
        "Ladino (Halfling): 'Membro de uma guilda de ladrões que tem contato com a Rainha das Ladrões. Ágil e usa furtividade para evitar o combate.'",
        "Guerreiro (Anão): 'Um ex-membro da Guarda Real. Focado em honra e lealdade, mas desconfia de magia e clérigos.'",
      ],
    },
  ],
};

export { DivineConflictScenario };
