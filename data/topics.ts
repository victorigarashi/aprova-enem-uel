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

const coreTopic = (
  data: Omit<Topic, 'videoId' | 'formulas' | 'commonMistakes' | 'quiz'> & {
    formulas?: string[];
    questions: Array<[string, string[], number, string]>;
  },
): Topic => ({
  ...data,
  videoId: '',
  formulas: data.formulas ?? [],
  commonMistakes: [
    'Decorar sem relacionar o conceito ao contexto',
    'Ignorar palavras-chave do enunciado',
    'Não conferir a alternativa com os dados apresentados',
  ],
  quiz: makeQuiz(data.questions),
});

topics.push(
  coreTopic({
    id: 'funcoes-graficos', subject: 'Matemática', area: 'Matemática', title: 'Funções e leitura de gráficos',
    description: 'Interprete variações, taxas, raízes e modelos lineares ou quadráticos.', difficulty: 'Médio', focus: 'ENEM + UEL', duration: 45,
    explanation: ['Uma função associa cada valor do domínio a um único valor de saída. Em gráficos, o eixo horizontal representa a variável independente e o vertical, a dependente.', 'Na função afim, a taxa de variação é constante. Na quadrática, concavidade, raízes e vértice ajudam a identificar máximos, mínimos e mudanças de sinal.'],
    summary: 'Leia primeiro os eixos e as unidades; depois identifique crescimento, interceptos e taxa de variação.',
    concepts: ['função afim', 'função quadrática', 'gráficos', 'raízes', 'taxa de variação'], formulas: ['f(x)=ax+b', 'xᵥ=−b/2a', 'Δ=b²−4ac'],
    example: 'Se uma corrida custa R$ 6 mais R$ 2 por km, C(x)=2x+6 e 10 km custam R$ 26.',
    enemTip: 'Gráficos contextualizados com consumo, população e custos aparecem com frequência.', uelTip: 'Treine domínio, imagem, composição e análise algébrica do gráfico.',
    questions: [['Em f(x)=3x+2, a taxa de variação é:', ['2','3','5','x','−3'], 1, 'O coeficiente de x é a taxa de variação.'], ['A raiz de f(x)=2x−8 é:', ['−4','0','2','4','8'], 3, '2x−8=0, então x=4.'], ['Uma parábola com a>0 tem concavidade:', ['para cima','para baixo','lateral','nula','indefinida'], 0, 'O sinal positivo de a abre a parábola para cima.']],
  }),
  coreTopic({
    id: 'estatistica-probabilidade', subject: 'Matemática', area: 'Matemática', title: 'Estatística e probabilidade',
    description: 'Analise médias, dispersão, tabelas e chances em situações reais.', difficulty: 'Médio', focus: 'ENEM + UEL', duration: 42,
    explanation: ['Média, mediana e moda resumem conjuntos de dados de modos diferentes. A mediana é resistente a valores extremos.', 'Probabilidade compara casos favoráveis com casos possíveis em experimentos equiprováveis; gráficos exigem atenção à escala e à fonte.'],
    summary: 'Escolha a medida adequada ao conjunto e confira se os eventos são independentes.', concepts: ['média', 'mediana', 'moda', 'probabilidade', 'gráficos'], formulas: ['P(A)=casos favoráveis/casos possíveis'],
    example: 'Nos valores 2, 3, 3, 4 e 18, a mediana é 3, enquanto a média é 6.', enemTip: 'Interprete tabelas antes de calcular e desconfie de eixos truncados.', uelTip: 'Combine contagem, probabilidade condicional e análise de dados.',
    questions: [['A mediana de 1, 3, 5, 9, 20 é:', ['3','5','7','9','20'], 1, 'O valor central ordenado é 5.'], ['Em um dado justo, P(número par) é:', ['1/6','1/3','1/2','2/3','1'], 2, 'Há 3 resultados pares entre 6.'], ['A medida mais afetada por extremos é:', ['moda','mediana','média','amplitude zero','frequência'], 2, 'Valores extremos puxam a média.']],
  }),
  coreTopic({
    id: 'ecologia', subject: 'Biologia', area: 'Ciências da Natureza', title: 'Ecologia e ciclos biogeoquímicos',
    description: 'Compreenda cadeias alimentares, relações ecológicas e impactos ambientais.', difficulty: 'Médio', focus: 'ENEM + UEL', duration: 45,
    explanation: ['A energia flui pelos níveis tróficos e diminui a cada transferência, enquanto a matéria circula nos ciclos da água, carbono e nitrogênio.', 'Desequilíbrios como eutrofização, fragmentação de habitats e mudanças climáticas alteram populações e serviços ecossistêmicos.'],
    summary: 'Energia flui; matéria circula. Relacione ações humanas às consequências ecológicas.', concepts: ['cadeia alimentar', 'pirâmides ecológicas', 'ciclos', 'sucessão', 'impactos ambientais'],
    example: 'O excesso de nutrientes em lagos aumenta algas e pode reduzir o oxigênio dissolvido.', enemTip: 'Procure relações de causa e consequência em problemas socioambientais.', uelTip: 'Domine conceitos, ciclos e leitura de experimentos ecológicos.',
    questions: [['Produtores ocupam o:', ['último nível','primeiro nível trófico','grupo decompositor','nível sem energia','topo sempre'], 1, 'Eles incorporam energia ao ecossistema.'], ['Na cadeia, a energia:', ['é reciclada integralmente','aumenta','diminui entre níveis','não se transforma','vem dos consumidores'], 2, 'Parte é dissipada como calor.'], ['Eutrofização costuma começar com excesso de:', ['oxigênio','nutrientes','predadores','sal apenas','luz artificial'], 1, 'Nitrogênio e fósforo favorecem florações.']],
  }),
  coreTopic({
    id: 'genetica', subject: 'Biologia', area: 'Ciências da Natureza', title: 'Genética e biotecnologia',
    description: 'Relacione hereditariedade, DNA, probabilidade e aplicações biotecnológicas.', difficulty: 'Desafio', focus: 'ENEM + UEL', duration: 48,
    explanation: ['Genes são trechos de DNA; alelos são versões de um gene. Meiose e fecundação explicam segregação e variabilidade.', 'Biotecnologia usa processos biológicos em diagnóstico, produção de fármacos, melhoramento e edição genética, exigindo análise ética.'],
    summary: 'Use cruzamentos como modelos probabilísticos e diferencie genótipo de fenótipo.', concepts: ['DNA', 'genes', 'leis de Mendel', 'heredograma', 'biotecnologia'],
    example: 'No cruzamento Aa × Aa, a chance de aa é 1/4.', enemTip: 'Associe genética a saúde, agricultura e ética.', uelTip: 'Treine heredogramas, meiose e resolução discursiva de cruzamentos.',
    questions: [['Alelos são:', ['células','versões de um gene','proteínas apenas','cromossomos inteiros','organelas'], 1, 'Alelos ocupam o mesmo lócus em homólogos.'], ['Aa é um genótipo:', ['homozigoto','haploide','heterozigoto','letal sempre','sem alelos'], 2, 'Os dois alelos são diferentes.'], ['Na meiose, ocorre:', ['formação de gametas','duplicação sem divisão','clonagem natural sempre','produção de ATP apenas','tradução'], 0, 'A meiose reduz a ploidia e gera gametas.']],
  }),
  coreTopic({
    id: 'energia-termodinamica', subject: 'Física', area: 'Ciências da Natureza', title: 'Energia e termodinâmica',
    description: 'Resolva transformações de energia, calor, trabalho e rendimento.', difficulty: 'Médio', focus: 'ENEM + UEL', duration: 44,
    explanation: ['Energia pode mudar de forma, mas se conserva em sistemas isolados. Potência mede a rapidez da transformação energética.', 'Calor é energia em trânsito por diferença de temperatura; equilíbrio térmico ocorre quando essa transferência líquida cessa.'],
    summary: 'Identifique sistema, transferências, perdas e unidades antes de escolher a equação.', concepts: ['energia', 'trabalho', 'potência', 'calorimetria', 'rendimento'], formulas: ['P=E/Δt', 'Q=mcΔT', 'η=Eútil/Etotal'],
    example: 'Um aparelho de 1.000 W usa 1 kWh em uma hora.', enemTip: 'Eficiência energética e consumo doméstico são contextos centrais.', uelTip: 'Treine diagramas, sinais e transformações gasosas.',
    questions: [['Potência mede:', ['energia total','energia por tempo','massa por volume','força por área','temperatura'], 1, 'P=E/Δt.'], ['Calor flui espontaneamente do corpo:', ['frio ao quente','quente ao frio','menos massivo ao mais massivo','menor ao maior','sem direção'], 1, 'A diferença de temperatura dirige a transferência.'], ['Rendimento real costuma ser:', ['maior que 100%','igual a 200%','menor ou igual a 100%','sempre zero','sem unidade e infinito'], 2, 'Parte da energia geralmente se dissipa.']],
  }),
  coreTopic({
    id: 'estequiometria', subject: 'Química', area: 'Ciências da Natureza', title: 'Estequiometria e soluções',
    description: 'Balanceie reações e relacione mol, massa, volume e concentração.', difficulty: 'Desafio', focus: 'ENEM + UEL', duration: 50,
    explanation: ['Coeficientes de uma equação balanceada expressam proporções em mol e obedecem à conservação dos átomos.', 'Concentração relaciona quantidade de soluto e volume de solução; em diluições, a quantidade de soluto é conservada.'],
    summary: 'Balanceie primeiro, converta para mol e só então use a proporção da reação.', concepts: ['mol', 'massa molar', 'balanceamento', 'concentração', 'diluição'], formulas: ['n=m/M', 'C=m/V', 'C₁V₁=C₂V₂'],
    example: 'Dois mol de H₂ reagem com um mol de O₂ para formar dois mol de H₂O.', enemTip: 'Observe pureza, rendimento e unidades em processos industriais.', uelTip: 'Treine reagente limitante e cálculos encadeados.',
    questions: [['Um mol contém aproximadamente:', ['6×10²³ entidades','100 entidades','1 kg sempre','22,4 g sempre','zero átomo'], 0, 'É a constante de Avogadro.'], ['Antes da proporção estequiométrica, deve-se:', ['somar massas molares','balancear a equação','diluir sempre','aquecer','mudar produtos'], 1, 'Os coeficientes fornecem a razão molar.'], ['Na diluição, conserva-se a quantidade de:', ['solvente','soluto','volume','temperatura','pressão'], 1, 'Adicionar solvente não altera o soluto.']],
  }),
  coreTopic({
    id: 'brasil-republica', subject: 'História', area: 'Ciências Humanas', title: 'Brasil República e cidadania',
    description: 'Analise República, Era Vargas, ditadura e redemocratização.', difficulty: 'Médio', focus: 'ENEM + UEL', duration: 46,
    explanation: ['A República brasileira envolve disputas por poder, trabalho, direitos e participação política, com continuidades e rupturas desde 1889.', 'Industrialização, urbanização, movimentos sociais, autoritarismos e redemocratização devem ser relacionados às fontes e ao contexto.'],
    summary: 'Evite decorar datas isoladas: conecte grupos sociais, projetos políticos e consequências.', concepts: ['Primeira República', 'Era Vargas', 'ditadura militar', 'redemocratização', 'cidadania'],
    example: 'A Constituição de 1988 ampliou direitos e simbolizou a reconstrução democrática.', enemTip: 'Compare documentos, charges e diferentes vozes sociais.', uelTip: 'A UEL enfatiza interpretação de fontes, memória, permanências e rupturas.',
    questions: [['A Constituição de 1988 ficou conhecida como:', ['Imperial','Cidadã','Estado Novo','Moderadora','Colonial'], 1, 'O apelido destaca a ampliação de direitos.'], ['O Estado Novo foi um período:', ['democrático pleno','autoritário','colonial','medieval','sem industrialização'], 1, 'Vargas governou ditatorialmente entre 1937 e 1945.'], ['Analisar uma charge histórica exige considerar:', ['só o desenho','contexto e linguagem','apenas a data','a opinião do aluno','somente o autor'], 1, 'Fonte, contexto e intenção constroem o sentido.']],
  }),
  coreTopic({
    id: 'urbanizacao-globalizacao', subject: 'Geografia', area: 'Ciências Humanas', title: 'Urbanização, redes e globalização',
    description: 'Entenda cidades, fluxos, desigualdades e organização do espaço.', difficulty: 'Médio', focus: 'ENEM + UEL', duration: 43,
    explanation: ['Urbanização é o aumento da população urbana e envolve metropolização, segregação socioespacial e demandas por infraestrutura.', 'A globalização intensifica fluxos de capital, mercadorias, informação e pessoas, mas seus benefícios e riscos são distribuídos de modo desigual.'],
    summary: 'Relacione escalas local e global, território, redes e desigualdade.', concepts: ['urbanização', 'metrópole', 'migração', 'globalização', 'geopolítica'],
    example: 'Longos deslocamentos periferia-centro revelam separação entre moradia e emprego.', enemTip: 'Mapas, gráficos populacionais e problemas urbanos exigem leitura integrada.', uelTip: 'Dê atenção ao Paraná, redes urbanas e formação territorial brasileira.',
    questions: [['Segregação socioespacial é:', ['divisão desigual do espaço urbano','fim das cidades','migração internacional apenas','igualdade de infraestrutura','crescimento rural'], 0, 'Grupos têm acesso desigual à cidade.'], ['Globalização intensifica:', ['isolamento total','fluxos e redes','fim dos Estados','igualdade automática','apenas agricultura'], 1, 'Redes conectam lugares em diferentes escalas.'], ['Conurbação ocorre quando:', ['áreas urbanas vizinhas se unem','uma cidade perde população','surge um rio','o campo cresce','fronteiras fecham'], 0, 'As manchas urbanas tornam-se contínuas.']],
  }),
  coreTopic({
    id: 'etica-politica', subject: 'Filosofia', area: 'Ciências Humanas', title: 'Ética, política e conhecimento',
    description: 'Compare argumentos filosóficos sobre verdade, justiça e vida coletiva.', difficulty: 'Médio', focus: 'ENEM + UEL', duration: 40,
    explanation: ['Ética investiga critérios para agir; filosofia política discute poder, justiça, liberdade e legitimidade.', 'Teorias do conhecimento perguntam como justificamos crenças e distinguimos opinião, evidência e argumento.'],
    summary: 'Identifique o problema, a tese e as razões do autor antes de comparar ideias.', concepts: ['ética', 'política', 'epistemologia', 'argumentação', 'justiça'],
    example: 'Um argumento é válido pela relação entre premissas e conclusão, não apenas porque concordamos com ele.', enemTip: 'Leia conceitos em situações contemporâneas e compare posições.', uelTip: 'Atenção ao texto filosófico, vocabulário e reconstrução do argumento.',
    questions: [['Ética estuda principalmente:', ['reações químicas','critérios da ação humana','placas tectônicas','células','equações'], 1, 'Ela problematiza valores, deveres e escolhas.'], ['Uma conclusão deve ser sustentada por:', ['premissas','cores','datas apenas','autoridade sem razão','silêncio'], 0, 'Premissas oferecem razões para a conclusão.'], ['Epistemologia investiga:', ['conhecimento','clima','metabolismo','som','relevo'], 0, 'É a área filosófica do conhecimento.']],
  }),
  coreTopic({
    id: 'cultura-desigualdade', subject: 'Sociologia', area: 'Ciências Humanas', title: 'Cultura, trabalho e desigualdade',
    description: 'Analise socialização, identidades, instituições e relações de poder.', difficulty: 'Médio', focus: 'ENEM + UEL', duration: 40,
    explanation: ['Cultura é aprendida e compartilhada; socialização transmite valores, normas e formas de interpretar o mundo.', 'Desigualdades de classe, raça e gênero são históricas e se relacionam ao trabalho, às instituições e à distribuição de recursos.'],
    summary: 'Evite explicações naturais para fenômenos sociais: investigue processos históricos e relações de poder.', concepts: ['cultura', 'socialização', 'trabalho', 'desigualdade', 'movimentos sociais'],
    example: 'A escola socializa conhecimentos e normas, mas também pode reproduzir ou enfrentar desigualdades.', enemTip: 'Relacione conceitos a dados e conflitos sociais atuais.', uelTip: 'Treine respostas que definam o conceito e o apliquem ao caso apresentado.',
    questions: [['Socialização é o processo de:', ['aprender normas e valores','produzir energia','formar rochas','dividir células','medir calor'], 0, 'Na convivência, aprendemos padrões culturais.'], ['Desigualdade social é:', ['puramente natural','histórica e institucional','sempre individual','inexistente','só econômica'], 1, 'Instituições e relações históricas distribuem oportunidades.'], ['Movimentos sociais costumam:', ['organizar demandas coletivas','impedir toda mudança','existir só no Estado','negar identidades','eliminar conflitos'], 0, 'Eles articulam atores em torno de reivindicações.']],
  }),
  coreTopic({
    id: 'literatura-brasileira', subject: 'Literatura', area: 'Linguagens', title: 'Literatura brasileira e leitura de obras',
    description: 'Leia forma, contexto, narrador e linguagem sem reduzir a obra a uma escola literária.', difficulty: 'Médio', focus: 'ENEM + UEL', duration: 45,
    explanation: ['A análise literária observa quem narra, como o tempo é organizado, quais imagens se repetem e como a forma produz sentidos.', 'Contexto histórico ajuda, mas não substitui a leitura do texto. Intertextualidade aproxima obras, gêneros e épocas.'],
    summary: 'Sustente a interpretação em elementos da obra e conecte forma, tema e contexto.', concepts: ['narrador', 'eu lírico', 'figuras de linguagem', 'intertextualidade', 'escolas literárias'],
    example: 'Um narrador-personagem conhece apenas parte dos fatos; sua visão pode ser limitada ou interessada.', enemTip: 'Compare textos literários com artes, canções e questões sociais.', uelTip: 'Leia integralmente as obras indicadas no manual da edição e acompanhe atualizações oficiais.',
    questions: [['Eu lírico é:', ['o autor real sempre','a voz do poema','o leitor','o editor','o título'], 1, 'É a instância que fala no poema.'], ['Intertextualidade é a relação entre:', ['textos e discursos','números apenas','átomos','mapas sem linguagem','tempos verbais só'], 0, 'Um texto pode retomar ou transformar outro.'], ['Narrador não é necessariamente:', ['uma voz textual','o autor real','quem conta','parte da estrutura','um ponto de vista'], 1, 'Autor e narrador são instâncias diferentes.']],
  }),
  coreTopic({
    id: 'redacao-argumentativa', subject: 'Redação', area: 'Linguagens', title: 'Redação: tese e projeto de texto',
    description: 'Planeje argumentos, repertório e proposta de intervenção coerente.', difficulty: 'Médio', focus: 'ENEM + UEL', duration: 50,
    explanation: ['Uma dissertação argumentativa precisa de tese clara, argumentos organizados e progressão entre parágrafos.', 'No ENEM, a proposta de intervenção deve respeitar os direitos humanos e detalhar agente, ação, meio, finalidade e, quando pertinente, um complemento.'],
    summary: 'Planeje antes de escrever: recorte o tema, formule a tese e dê uma função a cada parágrafo.', concepts: ['tese', 'argumento', 'coesão', 'repertório', 'intervenção'],
    example: 'Repertório produtivo é explicado e ligado ao argumento; citar uma obra sem conexão não fortalece a tese.', enemTip: 'Revise as cinco competências e detalhe uma intervenção viável.', uelTip: 'Observe o gênero solicitado: a UEL pode propor formatos diferentes conforme o manual.',
    questions: [['A tese é:', ['a posição central','qualquer citação','o título obrigatório','um dado solto','a conclusão copiada'], 0, 'Ela orienta toda a argumentação.'], ['Repertório produtivo deve:', ['ser decorado','relacionar-se ao argumento','substituir a tese','aparecer sem explicação','ser fictício'], 1, 'A conexão com o raciocínio dá função ao repertório.'], ['Na intervenção do ENEM, é importante indicar:', ['agente e ação','apenas uma crítica','só o tema','uma pergunta','nenhuma finalidade'], 0, 'Detalhamento torna a proposta concreta.']],
  }),
  coreTopic({
    id: 'ingles-leitura', subject: 'Inglês', area: 'Linguagens', title: 'Inglês: leitura e estratégias',
    description: 'Use contexto, cognatos e estrutura textual para compreender textos autênticos.', difficulty: 'Médio', focus: 'ENEM + UEL', duration: 35,
    explanation: ['Leitura em língua estrangeira não exige traduzir tudo. Título, gênero, imagens e palavras recorrentes antecipam o tema.', 'Cognatos ajudam, mas falsos cognatos exigem contexto. Conectores mostram contraste, causa, consequência e conclusão.'],
    summary: 'Leia globalmente, localize a informação pedida e confirme o sentido pelo contexto.', concepts: ['skimming', 'scanning', 'cognatos', 'conectores', 'inferência'],
    example: '“Actually” geralmente significa “na verdade”, e não “atualmente”.', enemTip: 'Foque finalidade, ponto de vista e efeito de linguagem.', uelTip: 'Treine textos de gêneros variados e vocabulário em contexto.',
    questions: [['Scanning é usado para:', ['localizar informação específica','traduzir tudo','decorar verbos','reescrever o texto','ignorar títulos'], 0, 'A leitura rápida busca um dado pontual.'], ['“However” indica:', ['adição','contraste','tempo','lugar','exemplo'], 1, 'Equivale a “porém/contudo”.'], ['Um falso cognato:', ['tem forma parecida e sentido diferente','é sempre verbo','não existe','é um número','é sinônimo perfeito'], 0, 'A semelhança gráfica pode enganar.']],
  }),
  coreTopic({
    id: 'artes-modernismo', subject: 'Artes', area: 'Linguagens', title: 'Artes, modernismo e cultura visual',
    description: 'Interprete obras, movimentos, linguagens e relações entre arte e sociedade.', difficulty: 'Médio', focus: 'ENEM + UEL', duration: 38,
    explanation: ['A leitura de uma obra considera materiais, composição, contexto, circulação e possíveis sentidos, sem procurar uma única resposta automática.', 'O modernismo brasileiro questionou modelos acadêmicos e debateu identidade, experimentação e cultura nacional.'],
    summary: 'Observe primeiro a obra; depois relacione seus elementos ao contexto e à proposta estética.', concepts: ['artes visuais', 'modernismo', 'vanguardas', 'cultura popular', 'patrimônio'],
    example: 'A Semana de 1922 tornou-se marco simbólico de debates modernistas no Brasil.', enemTip: 'Integre imagem, texto e contexto sociocultural.', uelTip: 'Considere artes visuais, música, teatro, dança e patrimônio no programa.',
    questions: [['A Semana de Arte Moderna ocorreu em:', ['1822','1889','1922','1964','2000'], 2, 'O evento aconteceu em fevereiro de 1922.'], ['Ler uma obra visual envolve:', ['só identificar o autor','forma e contexto','apenas preço','decorar dimensões','ignorar materiais'], 1, 'Elementos visuais e contexto participam do sentido.'], ['Patrimônio imaterial inclui:', ['apenas prédios','saberes e celebrações','somente pinturas','minérios','planetas'], 1, 'Práticas e conhecimentos também constituem patrimônio.']],
  }),
);

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
