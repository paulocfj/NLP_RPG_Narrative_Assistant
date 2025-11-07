import type { ThematicScenario } from '../../../types';

const BloodOfDevotionScenario: ThematicScenario = {
  id: 7,
  guideTheme: 'medieval',
  name: 'O Sangue da Devoração (Fanatismo e Corrupção da Realidade)',
  themeSuggestions: [
    {
      id: 1,
      suggestion: [
        'A aventura começa no posto avançado de **Valek**, na Fronteira da Tormenta, que está sob ataque. O grupo deve lutar contra uma onda de **Lefeu** (criaturas da corrupção) para selar a fenda dimensional, antes que o posto caia.',
        'O grupo acorda no meio de uma **chuva rubra e mágica** (a própria Tormenta), onde a realidade se distorce. Eles devem realizar testes de Vontade e Sobrevivência para encontrar abrigo antes de enlouquecerem ou serem contaminados.',
        'O grupo é convocado por um **Inquisidor Fanático** para uma missão, mas o local de encontro é invadido por um culto de hereges (que se opõem à Inquisição). A ação é um combate com alvos móveis e dilemas morais imediatos.',
        'Eles encontram um **antigo navio aéreo élfico** que caiu em um pântano corrompido. O grupo precisa lutar contra Golens de Lama e Espectros para recuperar o motor arcano e usá-lo como rota de fuga.',
      ],
    },
    {
      id: 2,
      suggestion: [
        'O grupo busca desesperadamente um artefato que possa **repelir ou curar** a contaminação da Tormenta, pois um ente querido foi tocado pela praga. Eles agem por **amor e urgência**.',
        'Os PCs foram **acusados de heresia** pela Inquisição e devem completar a missão impossível para provar sua fé e inocência, ou serão caçados por Paladinos.',
        'O grupo está em uma **corrida** contra um exército de Lefeu que busca um artefato profano para amplificar a corrupção da Tormenta. Eles são a última esperança do reino.',
        'Eles são mercenários contratados por uma **organização clandestina**, e sua única motivação é o **ouro e o poder** que o artefato oferece, sem se importar com as consequências morais.',
      ],
    },
    {
      id: 3,
      suggestion: [
        'Objetivo: Recuperar a **Jóia da Razão**, um artefato que protege contra a loucura da Tormenta, escondida em uma antiga torre. Patrono: Um Sábio Arcanista que é procurado pela Inquisição, mas que oferece conhecimento vital.',
        'Objetivo: **Assassinar** um sumo sacerdote corrompido antes que ele complete o ritual de invocação de um Deus Menor. Patrono: Um agente secreto da **Igreja de Allihanna** (Deusa da Natureza), que opera nas sombras.',
        'Objetivo: Desativar uma **Torre de Magia Proibida** que atrai a Tormenta. Patrono: Um Troll/Goblinóide (inimigo improvável) que vive na região afetada e tem medo do avanço da praga.',
        'Objetivo: Explorar uma **área de Contaminação Profunda** para encontrar o corpo de um herói que falhou. Patrono: O General da Última Linha de Defesa, que oferece recursos militares e perdão por crimes.',
      ],
    },
    {
      id: 4,
      suggestion: [
        'O **Lorde da Praga Lefou**: Uma criatura híbrida, nascida da Tormenta, que lidera os Lefeu e espalha a corrupção ativamente. Ele usa o sofrimento como arma.',
        'O **Inquisidor Fanático Sirus**: Um Paladino implacável que usa métodos brutais para "purificar" a fé. Ele vê o grupo como hereges a serem testados, forçando dilemas morais constantes.',
        'A **Cultista Traidora de Aharan**: Uma ex-aliada do grupo que se rendeu a um deus sombrio para obter poder e agora os caça com magia negra e ilusões.',
        'Um **Dragão-Rei Corrompido**: Uma criatura lendária que foi enfraquecida e perdeu a sanidade, agindo por capricho e destruição, e que guarda a rota para o objetivo.',
      ],
    },
    {
      id: 5,
      suggestion: [
        'Combate no **Coração da Corrupção**, onde a gravidade, a realidade e as leis da magia são distorcidas pela Tormenta. O grupo deve lutar sob pressão, lidando com lacaios e com a instabilidade do ambiente.',
        'O grupo é forçado a realizar um teste de fé, lutando contra um **Guardião Celestial Corrompido** que testa suas crenças. Se falharem no teste, perdem as habilidades divinas temporariamente (exigindo que confiem uns nos outros, e não nos Deuses).',
        'Luta contra o Antagonista em um plano astral (sonho/visão), onde o grupo deve usar a **força de sua fé/vontade** para feri-lo, sem poder usar ataques físicos ou armas mundanas.',
        'Defesa desesperada de um **santuário sagrado** enquanto a Tempestade Rubra avança. A cada rodada, o campo de combate diminui devido à contaminação, forçando o grupo a tomar decisões táticas rápidas.',
      ],
    },
    {
      id: 6,
      suggestion: [
        'SUCESSO: O artefato é recuperado, o Antagonista é derrotado e a fronteira é estabilizada. O Patrono cumpre a promessa, e o grupo é reverenciado como herói.',
        'SUCESSO PARCIAL (Neutro): O grupo falha em obter o artefato, mas consegue **salvar um NPC importante** e fugir com informações vitais sobre a fraqueza da Tormenta, sacrificando a recompensa.',
        'FALHA: A Tormenta avança, e um PC (ou um NPC aliado) é **permanentemente corrompido** (vira Lefou), forçando o grupo a fugir ou a enfrentar um antigo amigo.',
        'SUCESSO ÉPICO (Moral): O grupo obtém o artefato, mas descobre que usá-lo exige um **sacrifício horrível** (a vida de 100 inocentes). Eles decidem **destruir o artefato**, tornando-se inimigos do Patrono, mas mantendo a moral.',
      ],
    },
    {
      id: 7,
      suggestion: [
        {
          challenge:
            '[Moral/Social] Um PC deve tomar uma decisão que viola diretamente um juramento sagrado (ex: mentir para um sacerdote), mas salva a vida de um inocente Lefou.',
          npc: 'Prisioneiro Inocente (Vítima)',
        },
        {
          challenge:
            '[Combate] Lutar contra um grupo de **Trolls (ou Gigantes)** que se recusam a abandonar a área corrompida e veem o grupo como invasores.',
          npc: 'Líder Troll Furioso (Inimigo)',
        },
        {
          challenge:
            '[Enigma/Lógica] Decifrar um enigma de um **Arcanista Moribundo** (que se comunica telepaticamente) para desativar um portal instável antes que ele exploda.',
          npc: 'Arcanista do Caos (Neutro/Fantasma)',
        },
        {
          challenge:
            '[Social] Convencer uma **Comunidade Fanática** (seguidores do Inquisidor Sirus) de que a Inquisição é a verdadeira ameaça e que devem se unir ao grupo.',
          npc: 'Líder dos Puritanos (Ameaça/Neutro)',
        },
        {
          challenge:
            '[Combate] Enfrentar uma **Lich** que vive em uma cripta lateral e se alimenta de almas de heróis caídos, bloqueando a passagem.',
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
        'Ignorar regras de **Alinhamento ou Fé**: Os PCs podem fazer escolhas morais sem medo de perder poderes, pois o foco é no dilema e na narrativa, não na punição do sistema.',
        'Ignorar regras de **Economia e Inventário**: O grupo tem suprimentos abundantes. O foco é na ação, e armas e itens são ganhos em encontros, não comprados.',
        'Combate é **Rápido e Brutal**: O foco é no dano massivo, ignorando regras detalhadas de **fadiga, munição e peso**. O PC que acerta um golpe crítico causa dano que mata instantaneamente lacaios menores.',
      ],
    },
    {
      id: 9,
      suggestion: [
        "Inquisidor (Paladino): 'Fanático e implacável. Usa o combate para testar a fé. Está disposto a sacrificar inocentes em nome de sua missão.'",
        "Arcanista (Mago/Elfo): 'Usa Magia Proibida (magia de sangue ou profana) e é procurado. Forte em Magia de Ilusão, mas fisicamente fraco.'",
        "Bárbaro (Meio-Orc): 'Vive na fronteira, odeia a Tormenta e tem um código de honra brutal. Resolve problemas com força, mas tem acesso a magias de proteção ancestrais.'",
        "Clérigo (Qareen): 'Com um passado ligado a deuses da Sorte/Vingança. É cínico sobre a guerra e usa sua fé apenas para proteger o grupo.'",
        "Ladino (Humano): 'Membro de uma guilda de ladrões. É o mais cínico e ganancioso. Usa furtividade para evitar o combate, mas é um aliado leal sob pressão.'",
        "Guerreiro (Anão): 'Um ex-membro da Guarda Real. Focado em honra e lealdade, mas desconfia de magia e deuses.'",
      ],
    },
  ],
};

export { BloodOfDevotionScenario };
