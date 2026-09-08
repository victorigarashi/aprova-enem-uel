export type Level = 'Fácil' | 'Médio' | 'Desafio ENEM/UEL';
export type Question = {
  prompt: string;
  options: string[];
  answer: number;
  level: Level;
  explanation: string;
};
export type Topic = {
  id: string;
  subject: string;
  area: string;
  title: string;
  description: string;
  difficulty: string;
  focus: 'ENEM' | 'UEL' | 'ENEM + UEL';
  duration: number;
  videoId: string;
  explanation: string[];
  summary: string;
  concepts: string[];
  formulas: string[];
  example: string;
  enemTip: string;
  uelTip: string;
  commonMistakes: string[];
  quiz: Question[];
};

const levels: Level[] = [
  'Fácil',
  'Fácil',
  'Fácil',
  'Fácil',
  'Médio',
  'Médio',
  'Desafio ENEM/UEL',
];
const makeQuiz = (
  rows: Array<[string, string[], number, string]>,
): Question[] =>
  rows.map((r, i) => ({
    prompt: r[0],
    options: r[1],
    answer: r[2],
    explanation: r[3],
    level: levels[i],
  }));

export const topics: Topic[] = [
  {
    id: 'razao-proporcao',
    subject: 'Matemática',
    area: 'Matemática',
    title: 'Razão e proporção',
    description:
      'Compare grandezas, identifique relações e resolva problemas do cotidiano.',
    difficulty: 'Fácil',
    focus: 'ENEM + UEL',
    duration: 35,
    videoId: 'I-fPlExG5y4',
    explanation: [
      'Razão é uma comparação por divisão. Se uma sala tem 20 estudantes e 12 são meninas, a razão meninas:total é 12/20 = 3/5. Ela não diz apenas “quantos”, mas como uma quantidade se relaciona com outra.',
      'Duas razões formam uma proporção quando são equivalentes: a/b = c/d. Para descobrir um valor desconhecido, use a multiplicação cruzada: a·d = b·c. Antes de calcular, confira se as grandezas estão na mesma unidade.',
      'Grandezas diretamente proporcionais crescem ou diminuem juntas. Já nas inversamente proporcionais, quando uma dobra, a outra cai pela metade. Velocidade e tempo para percorrer a mesma distância são um exemplo clássico de relação inversa.',
    ],
    summary:
      'Razão compara duas grandezas; proporção expressa a igualdade entre razões. Identifique primeiro se a relação é direta ou inversa.',
    concepts: [
      'razão',
      'proporção',
      'regra de três',
      'escala',
      'grandezas diretas e inversas',
    ],
    formulas: [
      'a/b = c/d',
      'a · d = b · c',
      'escala = medida no desenho / medida real',
    ],
    example:
      'Uma receita para 4 pessoas usa 300 g de arroz. Para 10 pessoas: 300/4 = x/10 → 4x = 3.000 → x = 750 g.',
    enemTip:
      'Traduza tabelas, mapas e consumo em razões antes de montar a conta.',
    uelTip:
      'A UEL costuma combinar proporcionalidade com geometria, porcentagem e leitura de gráficos.',
    commonMistakes: [
      'Inverter apenas uma das razões',
      'Misturar unidades',
      'Aplicar relação direta quando ela é inversa',
    ],
    quiz: makeQuiz([
      [
        'A razão simplificada entre 12 e 18 é:',
        ['1/3', '2/3', '3/2', '6/18', '12/6'],
        1,
        'Dividindo ambos por 6, obtemos 2/3.',
      ],
      [
        'Se 3 cadernos custam R$ 24, 5 custam:',
        ['R$ 30', 'R$ 35', 'R$ 40', 'R$ 45', 'R$ 48'],
        2,
        'Cada caderno custa R$ 8; cinco custam R$ 40.',
      ],
      [
        'Em uma escala 1:100, 3 cm representam:',
        ['30 cm', '3 m', '30 m', '300 m', '1 m'],
        1,
        '3 × 100 = 300 cm = 3 m.',
      ],
      [
        'Duas grandezas são inversamente proporcionais quando:',
        [
          'crescem juntas',
          'sua soma é constante',
          'uma dobra e a outra cai à metade',
          'são iguais',
          'têm unidade diferente',
        ],
        2,
        'O produto entre valores correspondentes permanece constante.',
      ],
      [
        '6 máquinas fazem um lote em 10 h. 12 máquinas iguais fazem em:',
        ['2 h', '4 h', '5 h', '12 h', '20 h'],
        2,
        'Máquinas e tempo são inversos: 6×10 = 12×t, então t=5.',
      ],
      [
        'Uma mistura tem água e suco na razão 4:1. Em 15 L, há suco:',
        ['2 L', '3 L', '4 L', '5 L', '12 L'],
        1,
        'São 5 partes; cada parte vale 3 L, e o suco ocupa uma.',
      ],
      [
        'Um mapa 1:50.000 mostra uma trilha com 7,4 cm. A distância real é:',
        ['370 m', '740 m', '3,7 km', '7,4 km', '37 km'],
        2,
        '7,4×50.000 = 370.000 cm = 3,7 km.',
      ],
    ]),
  },
  {
    id: 'interpretacao-texto',
    subject: 'Português',
    area: 'Linguagens',
    title: 'Interpretação de texto',
    description:
      'Leia além da superfície e reconheça argumentos, implícitos e efeitos de sentido.',
    difficulty: 'Médio',
    focus: 'ENEM + UEL',
    duration: 40,
    videoId: 'VgMJPJ-8hDE',
    explanation: [
      'Interpretar não é adivinhar a intenção do autor. É construir uma resposta apoiada em marcas do texto: escolha de palavras, relações entre frases, gênero, contexto e finalidade.',
      'Informação explícita está escrita; inferência nasce da combinação de pistas. O tema é amplo, enquanto a tese é a posição defendida sobre esse tema. Conectivos como “porém”, “portanto” e “embora” revelam a relação lógica.',
      'Em textos multimodais, imagem, diagramação e linguagem verbal trabalham juntos. Ironia surge quando o sentido pretendido contrasta com o literal — contexto e tom são decisivos.',
    ],
    summary:
      'Volte ao texto, localize evidências e diferencie fato, opinião, tese e inferência.',
    concepts: [
      'tema',
      'tese',
      'inferência',
      'coesão',
      'ironia',
      'efeito de sentido',
    ],
    formulas: [],
    example:
      'Em “A cidade ganhou mais uma faixa exclusiva; pena que os ônibus continuam raros”, “pena” sinaliza crítica: a infraestrutura não resolveu o serviço insuficiente.',
    enemTip:
      'Leia primeiro o comando e elimine alternativas que extrapolam, reduzem ou contradizem o texto.',
    uelTip:
      'Observe com cuidado recursos estilísticos e a relação do fragmento com seu gênero e contexto.',
    commonMistakes: [
      'Responder pela opinião pessoal',
      'Confundir tema com tese',
      'Ignorar conectivos e ironia',
    ],
    quiz: makeQuiz([
      [
        'A tese de um texto argumentativo é:',
        [
          'o título',
          'a posição central defendida',
          'todo exemplo usado',
          'a fonte consultada',
          'o assunto amplo',
        ],
        1,
        'Tese é a ideia que o autor procura sustentar.',
      ],
      [
        '“Embora chovesse, saímos.” O conectivo indica:',
        ['causa', 'conclusão', 'concessão', 'finalidade', 'adição'],
        2,
        'Embora introduz uma ideia contrária que não impede a ação.',
      ],
      [
        'Uma inferência válida deve:',
        [
          'vir de opinião pessoal',
          'estar apoiada em pistas do texto',
          'repetir o título',
          'ignorar o contexto',
          'ser sempre explícita',
        ],
        1,
        'Inferir é concluir a partir de evidências textuais.',
      ],
      [
        'Ironia ocorre quando:',
        [
          'há erro gramatical',
          'o sentido pretendido contrasta com o literal',
          'o texto é longo',
          'há uma pergunta',
          'todas as palavras rimam',
        ],
        1,
        'O contraste produz crítica ou humor.',
      ],
      [
        'Em “O projeto é barato; portanto, viável”, há relação de:',
        ['oposição', 'explicação', 'conclusão', 'tempo', 'comparação'],
        2,
        '“Portanto” introduz uma conclusão.',
      ],
      [
        'Uma alternativa que amplia indevidamente o alcance do texto com “sempre” ou “todos” tende a:',
        [
          'resumir',
          'exemplificar',
          'extrapolar',
          'parafrasear',
          'contextualizar',
        ],
        2,
        'Generalizações absolutas podem ir além do que foi dito.',
      ],
      [
        'Um anúncio mostra uma torneira seca e diz “O futuro não vem em garrafa”. O efeito principal combina:',
        [
          'descrição neutra e humor',
          'imagem e metáfora para defender consumo responsável',
          'dado estatístico e ordem',
          'narração e suspense',
          'rima e regionalismo',
        ],
        1,
        'A leitura integrada associa escassez futura à necessidade de preservar água.',
      ],
    ]),
  },
  {
    id: 'citologia',
    subject: 'Biologia',
    area: 'Ciências da Natureza',
    title: 'Citologia: a célula',
    description:
      'Entenda a unidade básica da vida, suas estruturas e seus processos.',
    difficulty: 'Médio',
    focus: 'ENEM + UEL',
    duration: 38,
    videoId: 'URUJD5NEXC8',
    explanation: [
      'A célula é a menor unidade capaz de realizar as funções essenciais da vida. Procariontes não possuem núcleo delimitado; eucariontes guardam o DNA no núcleo e possuem organelas membranosas.',
      'A membrana plasmática é seletivamente permeável. Difusão ocorre a favor do gradiente e não gasta ATP; transporte ativo move substâncias contra o gradiente e exige energia. Osmose é o movimento de água através da membrana.',
      'Mitocôndrias liberam energia na respiração; ribossomos produzem proteínas; complexo golgiense modifica e envia substâncias; lisossomos fazem digestão intracelular. Cloroplastos realizam fotossíntese em células vegetais.',
    ],
    summary:
      'Estrutura e função caminham juntas: cada organela participa da manutenção celular.',
    concepts: [
      'procarionte',
      'eucarionte',
      'membrana',
      'organelas',
      'osmose',
      'metabolismo',
    ],
    formulas: [],
    example:
      'Uma célula animal em solução muito concentrada perde água por osmose e murcha, porque a água se desloca para o meio com maior concentração de solutos.',
    enemTip:
      'Associe organelas a situações como exercício, secreção, intoxicação e produção de alimentos.',
    uelTip:
      'Espere comparações detalhadas entre células e análise de experimentos com membranas.',
    commonMistakes: [
      'Dizer que vírus são células',
      'Confundir parede celular com membrana',
      'Afirmar que difusão gasta ATP',
    ],
    quiz: makeQuiz([
      [
        'A organela responsável pela síntese de proteínas é:',
        ['lisossomo', 'ribossomo', 'centríolo', 'vacúolo', 'núcleo'],
        1,
        'Ribossomos traduzem o RNA mensageiro em proteínas.',
      ],
      [
        'Procariontes diferem de eucariontes por não terem:',
        [
          'DNA',
          'membrana plasmática',
          'citoplasma',
          'núcleo delimitado',
          'ribossomos',
        ],
        3,
        'O DNA procariótico fica no nucleoide, sem carioteca.',
      ],
      [
        'Osmose é o movimento de:',
        ['proteína', 'ATP', 'água', 'DNA', 'oxigênio apenas'],
        2,
        'É o movimento de solvente através de membrana seletiva.',
      ],
      [
        'A respiração celular ocorre principalmente na:',
        ['mitocôndria', 'parede celular', 'carioteca', 'lisossomo', 'vesícula'],
        0,
        'Mitocôndrias produzem ATP pela respiração aeróbia.',
      ],
      [
        'Uma célula em meio hipertônico tende a:',
        [
          'ganhar água',
          'perder água',
          'duplicar DNA',
          'romper sempre',
          'parar a difusão',
        ],
        1,
        'A água sai em direção ao meio mais concentrado.',
      ],
      [
        'Células secretoras de enzimas apresentam muito:',
        [
          'retículo rugoso e Golgi',
          'cloroplasto e vacúolo',
          'centríolo apenas',
          'parede de quitina',
          'DNA circular',
        ],
        0,
        'Proteínas são produzidas no RER e processadas pelo Golgi.',
      ],
      [
        'Um veneno bloqueia a produção de ATP. O processo diretamente mais prejudicado é:',
        [
          'difusão simples',
          'osmose',
          'transporte ativo',
          'passagem de gases',
          'equilíbrio térmico',
        ],
        2,
        'Bombas de membrana contra o gradiente dependem de ATP.',
      ],
    ]),
  },
  {
    id: 'revolucao-francesa',
    subject: 'História',
    area: 'Ciências Humanas',
    title: 'Revolução Francesa',
    description:
      'Conecte crise do Antigo Regime, cidadania e transformações políticas.',
    difficulty: 'Médio',
    focus: 'ENEM + UEL',
    duration: 42,
    videoId: 'ppInSLfkRWo',
    explanation: [
      'A França do século XVIII era uma sociedade estamental: clero e nobreza tinham privilégios, enquanto o Terceiro Estado concentrava a maior parte dos impostos. Crise fiscal, fome e desigualdade tornaram esse arranjo insustentável.',
      'Em 1789, os Estados Gerais desencadearam a formação da Assembleia Nacional. A queda da Bastilha simbolizou a ruptura. A Declaração dos Direitos do Homem afirmou liberdade e igualdade jurídica, embora esses direitos ainda fossem limitados na prática.',
      'A revolução passou pela monarquia constitucional, pela república e pelo Terror jacobino, até o Diretório e a ascensão de Napoleão. Seus princípios ajudaram a desmontar privilégios feudais e inspiraram movimentos liberais.',
    ],
    summary:
      'A revolução destruiu pilares do Antigo Regime e difundiu cidadania, mas viveu conflitos e exclusões.',
    concepts: [
      'Antigo Regime',
      'estamentos',
      'Iluminismo',
      'Bastilha',
      'jacobinos',
      'cidadania',
    ],
    formulas: [],
    example:
      'A igualdade defendida em 1789 era jurídica: combater privilégios de nascimento não significou eliminar imediatamente desigualdades econômicas ou incluir todos politicamente.',
    enemTip:
      'Relacione documentos e imagens aos conceitos de cidadania e ruptura social.',
    uelTip:
      'Domine a cronologia das fases e as diferenças entre girondinos e jacobinos.',
    commonMistakes: [
      'Reduzir a causa ao Iluminismo',
      'Confundir igualdade jurídica e social',
      'Tratar a revolução como processo linear',
    ],
    quiz: makeQuiz([
      [
        'O Terceiro Estado reunia principalmente:',
        [
          'apenas nobres',
          'clero e rei',
          'burguesia, trabalhadores e camponeses',
          'exército estrangeiro',
          'somente comerciantes',
        ],
        2,
        'Era o grupo amplo sem privilégios estamentais.',
      ],
      [
        'A queda da Bastilha ocorreu em:',
        ['1776', '1789', '1799', '1815', '1848'],
        1,
        '14 de julho de 1789 tornou-se marco revolucionário.',
      ],
      [
        'O Iluminismo criticava sobretudo:',
        [
          'a razão',
          'o absolutismo e os privilégios',
          'a ciência',
          'o comércio',
          'a imprensa',
        ],
        1,
        'Defendia razão, direitos e limites ao poder.',
      ],
      [
        'O lema associado à Revolução é:',
        [
          'Paz e terra',
          'Ordem e progresso',
          'Liberdade, igualdade, fraternidade',
          'Deus, pátria, família',
          'Terra e pão',
        ],
        2,
        'O lema sintetiza seus ideais políticos.',
      ],
      [
        'Os jacobinos ficaram associados a:',
        [
          'defesa irrestrita da monarquia',
          'radicalização republicana',
          'retorno feudal',
          'domínio inglês',
          'fim da participação popular',
        ],
        1,
        'Com apoio popular, conduziram a fase radical.',
      ],
      [
        'A Declaração de 1789 contribuiu para:',
        [
          'restaurar privilégios',
          'afirmar igualdade jurídica',
          'abolir toda propriedade',
          'criar o socialismo',
          'repor o absolutismo',
        ],
        1,
        'Declarou direitos universais e igualdade perante a lei.',
      ],
      [
        'A exclusão política de mulheres apesar do discurso universal revela:',
        [
          'coerência integral',
          'tensão entre princípios e cidadania real',
          'retorno medieval',
          'fim do liberalismo',
          'ausência de mobilização feminina',
        ],
        1,
        'Os direitos proclamados não alcançaram todos da mesma forma.',
      ],
    ]),
  },
  {
    id: 'climatologia',
    subject: 'Geografia',
    area: 'Ciências Humanas',
    title: 'Climatologia',
    description:
      'Leia fenômenos atmosféricos e conecte clima, sociedade e território.',
    difficulty: 'Médio',
    focus: 'ENEM + UEL',
    duration: 36,
    videoId: 'rjMkX20xmGs',
    explanation: [
      'Tempo é o estado momentâneo da atmosfera; clima é o padrão observado por décadas. Elementos climáticos incluem temperatura, umidade e pressão. Latitude, altitude, relevo, massas de ar, vegetação e maritimidade são fatores que os modificam.',
      'O ar quente tende a subir e formar áreas de baixa pressão; o frio, mais denso, desce e favorece alta pressão. Ventos se deslocam de alta para baixa pressão. Frentes surgem no encontro de massas de ar e podem provocar chuva.',
      'Urbanização altera o balanço de energia: asfalto e concreto absorvem calor, pouca vegetação reduz evapotranspiração e edifícios dificultam a circulação, formando ilhas de calor. Mudanças climáticas intensificam riscos, mas não explicam isoladamente cada evento.',
    ],
    summary:
      'Clima resulta da interação de elementos atmosféricos com fatores geográficos em diferentes escalas.',
    concepts: [
      'tempo',
      'clima',
      'massas de ar',
      'pressão',
      'latitude',
      'ilha de calor',
    ],
    formulas: ['amplitude térmica = temperatura máxima − mínima'],
    example:
      'Duas cidades na mesma latitude podem ter temperaturas diferentes: a cidade mais alta tende a ser mais fria, pois a temperatura geralmente diminui com a altitude.',
    enemTip:
      'Analise mapas, climogramas e consequências sociais, não apenas definições.',
    uelTip:
      'Conheça a atuação das massas de ar no Paraná e os efeitos das frentes frias.',
    commonMistakes: [
      'Confundir tempo e clima',
      'Atribuir todo evento isolado à mudança climática',
      'Ignorar escala e localização',
    ],
    quiz: makeQuiz([
      [
        'Clima corresponde:',
        [
          'ao estado do céu agora',
          'ao padrão atmosférico de longo prazo',
          'apenas à chuva',
          'à previsão de amanhã',
          'à estação do ano',
        ],
        1,
        'Clima é definido por séries longas de observação.',
      ],
      [
        'Quanto maior a altitude, em geral:',
        [
          'maior a temperatura',
          'menor a temperatura',
          'menor a pressão sempre ao nível do mar',
          'maior a latitude',
          'mais longa a noite',
        ],
        1,
        'A temperatura tende a cair com a elevação.',
      ],
      [
        'Ventos se deslocam, em geral, de:',
        [
          'baixa para alta pressão',
          'alta para baixa pressão',
          'leste para oeste sempre',
          'oceanos para polos',
          'equador para cidades',
        ],
        1,
        'O gradiente de pressão movimenta o ar.',
      ],
      [
        'Ilhas de calor são favorecidas por:',
        [
          'muita arborização',
          'solo permeável',
          'concreto e pouca vegetação',
          'baixa densidade urbana',
          'áreas rurais',
        ],
        2,
        'Materiais urbanos acumulam calor e reduzem evapotranspiração.',
      ],
      [
        'Maritimidade tende a:',
        [
          'aumentar amplitude térmica',
          'reduzir amplitude térmica',
          'eliminar chuvas',
          'aumentar altitude',
          'impedir ventos',
        ],
        1,
        'A água aquece e esfria lentamente, moderando temperaturas.',
      ],
      [
        'Uma frente fria é:',
        [
          'um rio gelado',
          'o encontro de massas de ar',
          'uma corrente marítima apenas',
          'uma área sem pressão',
          'uma estação',
        ],
        1,
        'O encontro entre massas diferentes gera uma frente.',
      ],
      [
        'Uma cidade remove árvores e impermeabiliza o solo. O efeito combinado mais provável é:',
        [
          'menos calor e menos enchente',
          'mais evapotranspiração',
          'mais calor e escoamento superficial',
          'menor risco hídrico',
          'clima inalterado',
        ],
        2,
        'A perda de vegetação aquece e a impermeabilização aumenta o escoamento.',
      ],
    ]),
  },
  {
    id: 'cinematica',
    subject: 'Física',
    area: 'Ciências da Natureza',
    title: 'Cinemática',
    description: 'Descreva movimentos usando posição, velocidade e aceleração.',
    difficulty: 'Médio',
    focus: 'ENEM + UEL',
    duration: 40,
    videoId: '1XqG0kaJVHY',
    explanation: [
      'Cinemática descreve o movimento sem investigar suas causas. Posição depende do referencial: alguém sentado em um ônibus está em repouso em relação ao banco, mas em movimento em relação à rua.',
      'Velocidade média relaciona deslocamento e intervalo de tempo. No movimento uniforme, a velocidade é constante e o gráfico posição×tempo é uma reta. A inclinação dessa reta representa a velocidade.',
      'Aceleração mede a variação da velocidade. No movimento uniformemente variado, ela é constante. Sinais indicam orientação: velocidade e aceleração com sinais opostos significam redução do módulo da velocidade.',
    ],
    summary:
      'Defina referencial, unidades e sinais antes de aplicar as equações do movimento.',
    concepts: [
      'referencial',
      'deslocamento',
      'velocidade',
      'aceleração',
      'MU',
      'MUV',
    ],
    formulas: [
      'vₘ = Δs/Δt',
      's = s₀ + vt',
      'v = v₀ + at',
      's = s₀ + v₀t + at²/2',
    ],
    example:
      'Um carro percorre 150 km em 2,5 h. Sua velocidade média é 150/2,5 = 60 km/h. Isso não significa que manteve 60 km/h o tempo todo.',
    enemTip: 'Converta unidades e leia a inclinação ou área dos gráficos.',
    uelTip:
      'Treine equações horárias e interpretação conjunta de gráficos s×t e v×t.',
    commonMistakes: [
      'Confundir distância e deslocamento',
      'Esquecer a unidade',
      'Associar aceleração sempre a aumento de rapidez',
    ],
    quiz: makeQuiz([
      [
        'A unidade SI de velocidade é:',
        ['km', 'm/s', 'm/s²', 's/m', 'N'],
        1,
        'No SI, deslocamento é metro e tempo é segundo.',
      ],
      [
        'Um móvel percorre 100 m em 20 s. Sua velocidade média é:',
        ['2 m/s', '4 m/s', '5 m/s', '10 m/s', '20 m/s'],
        2,
        '100/20 = 5 m/s.',
      ],
      [
        'Repouso e movimento dependem do:',
        ['peso', 'referencial', 'volume', 'calor', 'material'],
        1,
        'A descrição muda conforme o referencial adotado.',
      ],
      [
        'Aceleração mede a variação da:',
        ['massa', 'posição apenas', 'velocidade', 'energia', 'força'],
        2,
        'a = Δv/Δt.',
      ],
      [
        '72 km/h equivalem a:',
        ['10 m/s', '15 m/s', '20 m/s', '25 m/s', '36 m/s'],
        2,
        'Divida por 3,6: 72/3,6 = 20.',
      ],
      [
        'No gráfico posição×tempo, a inclinação representa:',
        ['aceleração', 'força', 'velocidade', 'massa', 'energia'],
        2,
        'A razão Δs/Δt é a inclinação.',
      ],
      [
        'Um ônibus freia de 20 m/s a zero em 5 s. Sua aceleração média é:',
        ['−5 m/s²', '−4 m/s²', '0', '4 m/s²', '5 m/s²'],
        1,
        'a=(0−20)/5 = −4 m/s²; o sinal indica sentido oposto à velocidade.',
      ],
    ]),
  },
  {
    id: 'ligacoes-quimicas',
    subject: 'Química',
    area: 'Ciências da Natureza',
    title: 'Ligações químicas',
    description:
      'Relacione elétrons, estabilidade e propriedades dos materiais.',
    difficulty: 'Médio',
    focus: 'ENEM + UEL',
    duration: 38,
    videoId: '7Z9CrQ4dVuY',
    explanation: [
      'Átomos se ligam porque certos arranjos eletrônicos têm menor energia. A regra do octeto é um modelo útil, não uma lei sem exceções: muitos átomos tendem a completar oito elétrons na camada de valência.',
      'Na ligação iônica, há transferência de elétrons e atração entre íons, comum entre metal e ametal. Na covalente, ametais compartilham pares eletrônicos. Na metálica, cátions ficam organizados em uma rede envolvida por elétrons deslocalizados.',
      'A estrutura explica propriedades. Compostos iônicos costumam ter altos pontos de fusão e conduzem quando fundidos ou dissolvidos. Metais conduzem no estado sólido e são maleáveis. Substâncias moleculares variam conforme polaridade e forças intermoleculares.',
    ],
    summary:
      'O tipo de ligação e a organização das partículas determinam propriedades macroscópicas.',
    concepts: [
      'elétrons de valência',
      'octeto',
      'ligação iônica',
      'covalente',
      'metálica',
      'polaridade',
    ],
    formulas: [],
    example:
      'No NaCl, o sódio perde um elétron e vira Na⁺; o cloro ganha e vira Cl⁻. A atração entre cargas opostas forma o retículo iônico.',
    enemTip:
      'Use propriedades do material como pista para identificar a ligação.',
    uelTip:
      'Treine estruturas de Lewis, geometria e polaridade junto ao conteúdo.',
    commonMistakes: [
      'Tratar o octeto como regra absoluta',
      'Dizer que moléculas iônicas isoladas formam o sal',
      'Confundir ligação com força intermolecular',
    ],
    quiz: makeQuiz([
      [
        'Ligação iônica envolve principalmente:',
        [
          'compartilhamento igual',
          'transferência de elétrons',
          'prótons livres',
          'nêutrons móveis',
          'fusão nuclear',
        ],
        1,
        'Formam-se íons de cargas opostas.',
      ],
      [
        'A ligação em O₂ é:',
        ['iônica', 'metálica', 'covalente', 'nuclear', 'hidrogênio'],
        2,
        'Dois ametais compartilham elétrons.',
      ],
      [
        'Metais conduzem eletricidade por possuírem:',
        [
          'elétrons deslocalizados',
          'moléculas de água',
          'ânions fixos apenas',
          'prótons livres',
          'ligações de hidrogênio',
        ],
        0,
        'Os elétrons móveis transportam carga.',
      ],
      [
        'Na formação de NaCl, o sódio tende a:',
        [
          'ganhar elétron',
          'perder elétron',
          'ganhar próton',
          'compartilhar quatro pares',
          'permanecer neutro',
        ],
        1,
        'O sódio forma Na⁺ ao perder um elétron.',
      ],
      [
        'Um sólido que não conduz, mas conduz fundido, tende a ser:',
        [
          'metálico',
          'iônico',
          'gás nobre',
          'molecular apolar',
          'polímero sempre',
        ],
        1,
        'Fundido, seus íons ganham mobilidade.',
      ],
      [
        'A ligação covalente é mais comum entre:',
        [
          'dois ametais',
          'dois cátions',
          'metal e cátion',
          'gases nobres apenas',
          'metal e próton',
        ],
        0,
        'Ametais tendem a compartilhar elétrons.',
      ],
      [
        'Grafite e diamante são carbono, mas têm propriedades distintas porque:',
        [
          'possuem elementos diferentes',
          'suas estruturas e ligações se organizam de modo diferente',
          'um não tem elétrons',
          'ambos são iônicos',
          'a massa atômica muda',
        ],
        1,
        'Alotropia mostra como a organização microscópica altera propriedades.',
      ],
    ]),
  },
];

export const subjects = [
  'Português',
  'Literatura',
  'Redação',
  'Inglês',
  'Artes',
  'Matemática',
  'Biologia',
  'Física',
  'Química',
  'História',
  'Geografia',
  'Filosofia',
  'Sociologia',
];

export const studyPlan = Array.from({ length: 90 }, (_, i) => ({
  day: i + 1,
  label: `Dia ${i + 1}`,
  topicIds:
    i % 7 === 6
      ? []
      : [topics[i % topics.length].id, topics[(i + 3) % topics.length].id],
  kind:
    i % 7 === 5
      ? 'Revisão + simulado'
      : i % 7 === 6
        ? 'Descanso ou revisão leve'
        : 'Estudo guiado',
}));
