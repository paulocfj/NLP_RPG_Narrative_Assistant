import type { ThematicScenario } from '../../../types';

const DragonHuntScenario: ThematicScenario = {
  id: 8,
  guideTheme: 'medieval',
  name: 'O Covil do Dragão de Gelo (Caçada e Tesouro Épico)',
  themeSuggestions: [
    {
      id: 1,
      suggestion: [
        'A aventura começa na **vila congelada de Isengard**. O grupo chega para encontrar a maioria dos aldeões presos em blocos de gelo pela magia do Dragão. A ação é um **Resgate e Corrida contra o Tempo** para quebrar o gelo mágico e salvar os sobreviventes antes que a nevasca e os Kobolds lacaios do Dragão os atinjam.',
        'O grupo está em uma **reunião tensa** com o General da Guarda Real quando o Dragão sobrevoa a fortaleza, destruindo a torre mais alta. A ação é um **Combate Aéreo/Defensivo** imediato para repelir a ameaça e proteger o General.',
        'O grupo encontra o **Corpo Congelado de um Ex-Aventureiro** que falhou na missão. Com ele, está um mapa vital e uma carta de aviso. A ação é uma **Exploração e Sobrevivência** imediata, pois o grupo deve usar a bússola mágica antes que o frio o mate.',
        'Eles são emboscados por **Gigantes de Gelo** que buscam se aliar ao Dragão. O grupo precisa lutar em terreno montanhoso e tentar capturar um Gigante para obter informações sobre a rota para o covil.',
      ],
    },
    {
      id: 2,
      suggestion: [
        'O Dragão roubou a **Coroa do Rei Perdido**, um artefato necessário para legitimar o novo governante do reino. O grupo age por **dever cívico e política** para evitar uma guerra civil e provar sua lealdade à coroa.',
        'Um dos PCs (ou um ente querido) está sob uma **Maldição de Gelo** e a única cura é um ingrediente raro encontrado apenas no Covil do Dragão, exigindo uma corrida por **amor e desespero**.',
        'O grupo é formado por **Caçadores de Dragões** lendários, e esta é sua última missão antes da aposentadoria. Eles agem por **honra e reputação** para provar que ainda são os melhores.',
        'Eles são mercenários motivados pela **fortuna e tesouro** acumulados pelo Dragão. A salvação do reino é um bônus, mas o ouro é a principal motivação.',
      ],
    },
    {
      id: 3,
      suggestion: [
        'Objetivo: Matar o **Dragão de Gelo Velho (Freyja)** e recuperar a Coroa do Rei Perdido. Patrono: O **General Theron**, um militar implacável que fornece mapas detalhados da montanha, mas exige resultados rápidos e não tolera falhas.',
        'Objetivo: Encontrar o **Ovo do Dragão** (que pode ser a chave para negociar com a criatura) antes que o General Theron o destrua. Patrono: Um **Arcanista Secreto** da corte, que se opõe ao General e usa magia para se comunicar.',
        'Objetivo: Selar a **Fenda Glacial**, que está se expandindo devido à magia do Dragão. Patrono: Um **Eremita Anão** que vive na montanha e oferece a única rota de fuga secreta.',
        'Objetivo: Roubar o tesouro do Dragão e usá-lo para financiar uma revolução. Patrono: A **Líder dos Rebeldes**, que fornece armas e a promessa de poder no novo reino.',
      ],
    },
    {
      id: 4,
      suggestion: [
        'O **Dragão de Gelo Velho (Freyja)**: Um dragão ancestral, implacável e altamente tático. Ele usa a inteligência e o ambiente para sua vantagem, nunca lutando em desvantagem. Seus lacaios são Kobolds Fanáticos.',
        'O **Capitão da Guarda Traidor**: Um dos aliados mais próximos do General, que está secretamente trabalhando para o Dragão, fornecendo informações em troca de uma parte do tesouro.',
        'O **Gigante de Gelo Rei Thron**: Um Gigante que domina a montanha e vê o Dragão como seu rival. Ele é um antagonista secundário que pode se tornar um aliado temporário (ou inimigo, dependendo da abordagem).',
        'A **Sombra do Cavaleiro de Gelo**: Um Cavaleiro Paladino que foi morto pelo Dragão e ressuscitou como um morto-vivo elemental de gelo, guardando a entrada do Covil.',
      ],
    },
    {
      id: 5,
      suggestion: [
        'A **Ascensão ao Pico Congelado**. O grupo deve realizar uma série de testes de **Sobrevivência, Atletismo e Magia** para escalar a montanha e superar avalanches mágicas, geadas mortais e Kobolds que atiram flechas de gelo.',
        'O **Labirinto de Túneis de Gelo**. Uma exploração furtiva e perigosa, onde o grupo deve usar iluminação e engenho para evitar armadilhas de gelo (espinhos e desmoronamentos) e emboscadas de Gigantes de Gelo.',
        'Confronto final no **Covil do Tesouro**. Uma luta tática de três fases contra o Dragão em seu ninho: 1) Combate no ar (voo); 2) Luta em solo (ambiente estreito); 3) Destruição da Fonte de Gelo do Dragão (objetivo secundário).',
        'O grupo é forçado a lutar contra o Antagonista em um **Plano de Gelo Etéreo** criado pela magia do Dragão, onde suas armas não causam dano, e eles devem usar o ambiente (geadas/cristais) como arma.',
      ],
    },
    {
      id: 6,
      suggestion: [
        'SUCESSO: O Dragão é morto (ou expulso), a Coroa é recuperada, e o grupo é aclamado como herói do reino. O General Theron cumpre sua promessa.',
        'SUCESSO PARCIAL (Neutro): O Dragão escapa gravemente ferido, mas o grupo consegue recuperar a Coroa, evitando a guerra civil. O General Theron fica descontente e lança um novo desafio.',
        'FALHA: O Dragão mata o General Theron e toma a Coroa para si, tornando-se uma ameaça maior e uma figura política no reino, forçando o grupo a fugir ou se render.',
        'SUCESSO ÉPICO (Moral): O grupo descobre que o Dragão é o verdadeiro guardião da montanha e que o General Theron é o verdadeiro vilão. Eles decidem **se aliar ao Dragão**, tornando-se foragidos do reino.',
      ],
    },
    {
      id: 7,
      suggestion: [
        {
          challenge:
            '[Social] Convencer os **Anões Eremitas** (guardiões do atalho) a dar passagem, provando que o grupo não busca o ouro deles, mas a Coroa.',
          npc: 'Líder Anão Baruk (Neutro/Sábio)',
        },
        {
          challenge:
            '[Combate] Lutar contra um grupo de **4-5 Wyverns de Gelo** (parentes menores do Dragão) que protegem a passagem aérea para o pico.',
          npc: 'Wyvern Líder (Inimigo)',
        },
        {
          challenge:
            '[Enigma/Lógica] Decifrar o **Mapa Rúnico de Gelo** que só pode ser lido sob a luz da aurora boreal, em uma câmara escura.',
          npc: 'A Runa Falante (Fantasma/Neutro)',
        },
        {
          challenge:
            '[Moral/Social] Um Kobold Fanático se rende e oferece informações vitais, mas pede em troca a vida do PC mais forte (dilema de traição).',
          npc: 'Kobold Traidor (Neutro/Vítima)',
        },
        {
          challenge:
            '[Combate] Enfrentar um **Elemental de Gelo Gigante** que se forma na nevasca e tenta esmagar o grupo.',
          npc: 'Elemental de Gelo (Inimigo)',
        },
        {
          challenge:
            '[Exploração/Engenho] Atravessar um **Rio Subterrâneo Congelado** com rachaduras, usando pesos e testes de Destreza para não cair na água gelada.',
          npc: 'Monstro Subaquático de Gelo (Inimigo)',
        },
      ],
    },
    {
      id: 8,
      suggestion: [
        'Simplificar as regras de **Exaustão e Dano de Frio**: O frio só causa penalidades em testes após 3 encontros, não por hora. O foco é no combate, não na sobrevivência lenta.',
        'Ignorar regras de **Alinhamento e Moralidade**: Os PCs podem fazer escolhas brutais para sobreviver na montanha sem medo de perder habilidades divinas/mágicas.',
        'Simplificar **Magia de Combate**: Magias de Dano de Fogo e Calor causam dano extra massivo contra criaturas de Gelo e o Dragão, focando no ponto fraco, sem necessidade de regras complexas de resistências.',
        'Combate é **Rápido e Tático**: O foco é em usar o terreno (gelo/rochas) para vantagem, ignorando regras detalhadas de **munição, carga e peso**.',
      ],
    },
    {
      id: 9,
      suggestion: [
        "Bárbaro (Meio-Orc): 'O Inimigo do Dragão. Busca vingança pela destruição de sua aldeia. É o mais forte, mas também o mais imprudente.'",
        "Monge (Elfo): 'Rápido e Silencioso. Especializado em movimento e combate desarmado, ignorando as armaduras pesadas do Dragão. É o mais diplomático do grupo.'",
        "Bardo (Tiefling): 'O Trapaceiro. Usa música e lábia para subornar/iludir inimigos, mas também carrega uma poderosa arma musical mágica.'",
        "Mago (Humano): 'O Mestre do Fogo. Obcecado por destruir o frio, usa magias de fogo destrutivas. É cínico sobre o General Theron.'",
        "Clérigo (Anão): 'O Curandeiro Fiel. Usa a fé para curar e proteger o grupo, mas tem um código de honra que o impede de mentir.'",
        "Guerreiro (Humano): 'O Protetor. Focado em defesa e lealdade, é o principal escudo do grupo. Desconfia de Monge e Bardo.'",
      ],
    },
  ],
};

export { DragonHuntScenario };
