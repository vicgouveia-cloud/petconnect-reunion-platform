// Faro Pet Recovery Platform Data Store & State Management

const STORAGE_KEY = 'faro_pets_data_v4';

const DEFAULT_PETS = [
  {
    id: 'pet-1',
    name: 'Thor',
    type: 'dog',
    breed: 'Golden Retriever',
    status: 'lost',
    gender: 'Macho',
    color: 'Dourado claro',
    reward: 'R$ 1.500',
    date: '08/08/2026',
    time: '14:30',
    city: 'São Paulo',
    state: 'SP',
    neighborhood: 'Pinheiros / Vila Madalena',
    location: 'Rua Fradique Coutinho próximo à Praça Benedito Calixto',
    lat: -23.5587,
    lng: -46.6853,
    description: 'Thor usava uma coleira vermelha com plaquinha de identificação. É extremamente sociável, dócil, mas pode estar assustado pelo barulho de carros.',
    photo: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80',
    contactName: 'Mariana Souza',
    contactPhone: '(11) 98765-4321',
    microchip: '982000341829102',
    urgent: true
  },
  {
    id: 'pet-2',
    name: 'Luna',
    type: 'cat',
    breed: 'Siamês Mestiço',
    status: 'lost',
    gender: 'Fêmea',
    color: 'Bege com extremidades escuras e olhos azuis',
    reward: 'R$ 800',
    date: '07/08/2026',
    time: '21:00',
    city: 'São Paulo',
    state: 'SP',
    neighborhood: 'Moema',
    location: 'Alameda dos Maracatins, perto da Av. Ibirapuera',
    lat: -23.6041,
    lng: -46.6625,
    description: 'Luna fugiu pela varanda do apartamento. Tem olhos azuis intensos e uma pequena falha de pelo na orelha esquerda.',
    photo: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    contactName: 'Carlos Eduardo',
    contactPhone: '(11) 97654-3210',
    microchip: 'Não informado',
    urgent: true
  },
  {
    id: 'pet-3',
    name: 'Malu (Resgatada)',
    type: 'dog',
    breed: 'Vira-lata (SRD)',
    status: 'found',
    gender: 'Fêmea',
    color: 'Caramelo com peito branco',
    reward: 'Sem recompensa',
    date: '09/08/2026',
    time: '08:15',
    city: 'São Paulo',
    state: 'SP',
    neighborhood: 'Itaim Bibi',
    location: 'Resgatada na Rua Joaquim Floriano perto do Parque Povo',
    lat: -23.5852,
    lng: -46.6775,
    description: 'Cadela vira-lata caramelo muito carinhosa encontrada perambulando pela calçada. Está sob meus cuidados temporários no veterinário local.',
    photo: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80',
    contactName: 'Dra. Patricia Lima',
    contactPhone: '(11) 99123-4567',
    microchip: 'Verificando em clínica',
    urgent: false
  },
  {
    id: 'pet-4',
    name: 'Apollo',
    type: 'dog',
    breed: 'Bulldog Francês',
    status: 'lost',
    gender: 'Macho',
    color: 'Preto e Branco (Tigrado)',
    reward: 'R$ 2.000',
    date: '06/08/2026',
    time: '18:45',
    city: 'Rio de Janeiro',
    state: 'RJ',
    neighborhood: 'Copacabana / Ipanema',
    location: 'Posto 5 na Av. Atlântica',
    lat: -22.9772,
    lng: -43.1903,
    description: 'Apollo necessita de medicação contínua para problemas respiratórios. Coleira peitoral azul marinho.',
    photo: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    contactName: 'Fernando Alvares',
    contactPhone: '(21) 98111-2233',
    microchip: '9851410098231',
    urgent: true
  },
  {
    id: 'pet-5',
    name: 'Gato Encontrado (Cinza)',
    type: 'cat',
    breed: 'Sem Raça Definida',
    status: 'found',
    gender: 'Macho',
    color: 'Cinza rajado / Tom Tabby',
    reward: 'N/A',
    date: '08/08/2026',
    time: '19:30',
    city: 'Campinas',
    state: 'SP',
    neighborhood: 'Cambuí',
    location: 'Encontrado no estacionamento do condomínio na Rua Maria Monteiro',
    lat: -22.8984,
    lng: -47.0542,
    description: 'Gato castrado, limpo e bem cuidado. Parecia recém-perdido. Está acolhido na garagem.',
    photo: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80',
    contactName: 'Beatriz Ramos',
    contactPhone: '(19) 99887-6655',
    microchip: 'Não possui',
    urgent: false
  },
  {
    id: 'pet-6',
    name: 'Pipoca',
    type: 'dog',
    breed: 'Poodle Toy',
    status: 'lost',
    gender: 'Fêmea',
    color: 'Branco neve',
    reward: 'R$ 1.000',
    date: '05/08/2026',
    time: '11:00',
    city: 'Belo Horizonte',
    state: 'MG',
    neighborhood: 'Savassi',
    location: 'Próximo à Praça da Savassi',
    lat: -19.9387,
    lng: -43.9332,
    description: 'Poodle idosa com dificuldade de visão. Atende pelo nome de Pipoca.',
    photo: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    contactName: 'Clara Mendes',
    contactPhone: '(31) 98844-3322',
    microchip: 'Sim',
    urgent: false
  }
];

const FULL_NATIONAL_ONGS_DATABASE = [
  {
    "id": "ong-sp-ps-1",
    "name": "Pet Searchers - Central de Apoio & Busca",
    "city": "Santo André",
    "state": "SP",
    "phone": "(11) 98000-8442",
    "whatsapp": "5511980008442",
    "instagram": "petsearchersoficial",
    "address": "Praça Atlântica Valparaíso, Santo André - SP",
    "lat": -23.662,
    "lng": -46.541,
    "shelteredCount": 300,
    "services": [
      "Central de Buscas",
      "Divulgação Estratégica",
      "Suporte a Tutores"
    ],
    "website": "https://pet-searchers.com"
  },
  {
    "id": "ong-sp-1",
    "name": "Confraria dos Miados e Latidos",
    "city": "São Paulo",
    "state": "SP",
    "phone": "(11) 4327-6330",
    "whatsapp": "551143276330",
    "instagram": "cmiadoselatidos",
    "address": "Av. Jabaquara, 1200 - Mirandópolis, São Paulo - SP",
    "lat": -23.605,
    "lng": -46.638,
    "shelteredCount": 180,
    "services": [
      "Adoção Responsável",
      "Leitura de Microchip",
      "Feira de Reencontros"
    ],
    "website": "https://miadoselatidos.org.br"
  },
  {
    "id": "ong-sp-2",
    "name": "ONG Canto da Terra",
    "city": "São Paulo",
    "state": "SP",
    "phone": "(11) 97055-3947",
    "whatsapp": "5511970553947",
    "instagram": "ongcantodaterra",
    "address": "Rua Domingos de Morais, 2100 - Vila Mariana, São Paulo - SP",
    "lat": -23.59,
    "lng": -46.635,
    "shelteredCount": 120,
    "services": [
      "Resgate de Animais",
      "Triagem de Perdidos",
      "Acolhimento"
    ],
    "website": "https://cantodaterra.org.br"
  },
  {
    "id": "ong-sp-3",
    "name": "Instituto Caramelo",
    "city": "São Paulo",
    "state": "SP",
    "phone": "(11) 3034-5678",
    "whatsapp": "5511987654321",
    "instagram": "institutocaramelo",
    "address": "Av. Brigadeiro Faria Lima, 2200 - Pinheiros, São Paulo - SP",
    "lat": -23.5705,
    "lng": -46.6872,
    "shelteredCount": 350,
    "services": [
      "Hospital Veterinário Comunitário",
      "Resgate",
      "Reencontro"
    ],
    "website": "https://institutocaramelo.org"
  },
  {
    "id": "ong-sp-4",
    "name": "Ampara Animal",
    "city": "São Paulo",
    "state": "SP",
    "phone": "(11) 3885-9988",
    "whatsapp": "5511938859988",
    "instagram": "amparanimal",
    "address": "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
    "lat": -23.5615,
    "lng": -46.656,
    "shelteredCount": 520,
    "services": [
      "Rede Nacional de Proteção",
      "Políticas Públicas",
      "Castração"
    ],
    "website": "https://amparanimal.org.br"
  },
  {
    "id": "ong-sp-5",
    "name": "UIPA (União Internacional Protetora dos Animais)",
    "city": "São Paulo",
    "state": "SP",
    "phone": "(11) 3228-1462",
    "whatsapp": "5511932281462",
    "instagram": "uipaoficial",
    "address": "Av. Presidente Castelo Branco, 3200 - Canindé, São Paulo - SP",
    "lat": -23.522,
    "lng": -46.621,
    "shelteredCount": 480,
    "services": [
      "Hospital Veterinário Popular",
      "Abrigo Histórico",
      "Resgates"
    ],
    "website": "https://uipa.org.br"
  },
  {
    "id": "ong-sp-6",
    "name": "ONG Cão Sem Dono",
    "city": "Santo André",
    "state": "SP",
    "phone": "(11) 97543-2100",
    "whatsapp": "5511975432100",
    "instagram": "caosemdonooficial",
    "address": "Rua das Figueiras, 450 - Bairro Jardim, Santo André - SP",
    "lat": -23.655,
    "lng": -46.538,
    "shelteredCount": 420,
    "services": [
      "Resgate e Acolhimento",
      "Clínica Comunitária",
      "Feira de Adoção"
    ],
    "website": "https://caosemdono.org.br"
  },
  {
    "id": "ong-sp-7",
    "name": "AAAC (Associação Protetora de Animais de Campinas)",
    "city": "Campinas",
    "state": "SP",
    "phone": "(19) 3251-1234",
    "whatsapp": "5519998876655",
    "instagram": "aaac.campinas",
    "address": "Av. Barão de Itapura, 1500 - Guanabara, Campinas - SP",
    "lat": -22.89,
    "lng": -47.06,
    "shelteredCount": 260,
    "services": [
      "Acolhimento Temporário",
      "Leitor de Microchip"
    ],
    "website": "https://aaac.org.br"
  },
  {
    "id": "ong-sp-8",
    "name": "Amigos Felinos (Especializada em Gatos)",
    "city": "Santos",
    "state": "SP",
    "phone": "(13) 99712-3344",
    "whatsapp": "5513997123344",
    "instagram": "amigosfelinossantos",
    "address": "Av. Ana Costa, 300 - Gonzaga, Santos - SP",
    "lat": -23.955,
    "lng": -46.33,
    "shelteredCount": 140,
    "services": [
      "Resgate Felino (CED)",
      "Castração",
      "Adoção Responsável"
    ],
    "website": "https://amigosfelinos.org.br"
  },
  {
    "id": "ong-sp-9",
    "name": "Rancho dos Gnomos (Santuário de Animais)",
    "city": "Cotia",
    "state": "SP",
    "phone": "(11) 4614-2323",
    "whatsapp": "5511946142323",
    "instagram": "ranchodosgnomos",
    "address": "Estrada do Caucaia, Cotia - SP",
    "lat": -23.6,
    "lng": -46.92,
    "shelteredCount": 310,
    "services": [
      "Santuário e Acolhimento de Alta Vulnerabilidade"
    ],
    "website": "https://ranchodosgnomos.org.br"
  },
  {
    "id": "ong-sp-10",
    "name": "Proteção Animal de Barueri",
    "city": "Barueri",
    "state": "SP",
    "phone": "(11) 4199-1500",
    "whatsapp": "5511941991500",
    "instagram": "protecaoanimalbarueri",
    "address": "Al. Araguaia, Alphaville, Barueri - SP",
    "lat": -23.51,
    "lng": -46.87,
    "shelteredCount": 190,
    "services": [
      "Acolhimento Municipal",
      "Triagem de Microchip"
    ],
    "website": "https://barueri.sp.gov.br"
  },
  {
    "id": "ong-sp-11",
    "name": "Associação Protetora dos Animais de Sorocaba",
    "city": "Sorocaba",
    "state": "SP",
    "phone": "(15) 3232-1122",
    "whatsapp": "5515998877112",
    "instagram": "spasorocaba",
    "address": "Av. Afonso Vergueiro, Sorocaba - SP",
    "lat": -23.5,
    "lng": -47.45,
    "shelteredCount": 220,
    "services": [
      "Abrigo Regional",
      "Feiras de Reencontro"
    ],
    "website": "https://spasorocaba.org.br"
  },
  {
    "id": "ong-sp-12",
    "name": "Focinhos Carentes de Ribeirão Preto",
    "city": "Ribeirão Preto",
    "state": "SP",
    "phone": "(16) 99112-3344",
    "whatsapp": "5516991123344",
    "instagram": "focinhosrp",
    "address": "Av. Nove de Julho, Ribeirão Preto - SP",
    "lat": -21.17,
    "lng": -47.81,
    "shelteredCount": 180,
    "services": [
      "Resgate e Castração",
      "Doações e Feiras"
    ],
    "website": "https://focinhosrp.com.br"
  },
  {
    "id": "ong-rj-1",
    "name": "SUIPA (Sociedade União Internacional Protetora dos Animais)",
    "city": "Rio de Janeiro",
    "state": "RJ",
    "phone": "(21) 3297-8775",
    "whatsapp": "5521984586653",
    "instagram": "suipa",
    "address": "Av. Dom Hélder Câmara, 1801 - Benfica, Rio de Janeiro - RJ",
    "lat": -22.8895,
    "lng": -43.2452,
    "shelteredCount": 650,
    "services": [
      "Atendimento 24h",
      "Acolhimento de Resgatados",
      "Reencontro"
    ],
    "website": "https://suipa.org.br"
  },
  {
    "id": "ong-rj-2",
    "name": "ONG G.A.R.R.A",
    "city": "Rio de Janeiro",
    "state": "RJ",
    "phone": "(21) 98024-1232",
    "whatsapp": "5521980241232",
    "instagram": "garrabicho",
    "address": "Rua Visconde de Pirajá, 350 - Ipanema, Rio de Janeiro - RJ",
    "lat": -22.984,
    "lng": -43.2,
    "shelteredCount": 160,
    "services": [
      "Resgate de Animais Feridos",
      "Encaminhamento Lar Temporário"
    ],
    "website": "https://onggarra.com"
  },
  {
    "id": "ong-rj-3",
    "name": "Paraíso dos Focinhos",
    "city": "Niterói",
    "state": "RJ",
    "phone": "(21) 99876-4321",
    "whatsapp": "5521998764321",
    "instagram": "paraisodosfocinhos",
    "address": "Estrada Francisco da Cruz Nunes, 2000 - Itaipu, Niterói - RJ",
    "lat": -22.95,
    "lng": -43.03,
    "shelteredCount": 290,
    "services": [
      "Reabilitação Intensiva",
      "Adoção e Reagrupamento"
    ],
    "website": "https://paraisodosfocinhos.com.br"
  },
  {
    "id": "ong-rj-4",
    "name": "Toca dos Gatinhos RJ",
    "city": "Rio de Janeiro",
    "state": "RJ",
    "phone": "(21) 98777-1122",
    "whatsapp": "5521987771122",
    "instagram": "tocadosgatinhosrj",
    "address": "Bairro Botafogo, Rio de Janeiro - RJ",
    "lat": -22.95,
    "lng": -43.18,
    "shelteredCount": 110,
    "services": [
      "Abrigo para Felinos",
      "Testes FIV/FELV",
      "Adoções"
    ],
    "website": "https://tocadosgatinhosrj.org"
  },
  {
    "id": "ong-rj-5",
    "name": "Dog's Heaven Petrópolis",
    "city": "Petrópolis",
    "state": "RJ",
    "phone": "(24) 99266-3355",
    "whatsapp": "5524992663355",
    "instagram": "dogsheavenpetropolis",
    "address": "Estrada União e Indústria, Itaipava, Petrópolis - RJ",
    "lat": -22.42,
    "lng": -43.13,
    "shelteredCount": 300,
    "services": [
      "Resgate na Região Serrana",
      "Reabilitação de Cães"
    ],
    "website": "https://dogsheaven.org.br"
  },
  {
    "id": "ong-mg-1",
    "name": "Projeto Casa Mia (Gatos)",
    "city": "Belo Horizonte",
    "state": "MG",
    "phone": "(31) 99653-1454",
    "whatsapp": "5531996531454",
    "instagram": "casamiabh",
    "address": "Rua Sergipe, 1200 - Savassi, Belo Horizonte - MG",
    "lat": -19.932,
    "lng": -43.935,
    "shelteredCount": 110,
    "services": [
      "Acolhimento de Gatos",
      "Checagem de Microchip",
      "Adoção"
    ],
    "website": "https://casamiabh.com.br"
  },
  {
    "id": "ong-mg-2",
    "name": "Associação Cãoviver",
    "city": "Contagem",
    "state": "MG",
    "phone": "(31) 3392-1234",
    "whatsapp": "5531988884433",
    "instagram": "caoviver",
    "address": "Av. João César de Oliveira, 3000 - Eldorado, Contagem - MG",
    "lat": -19.932,
    "lng": -44.05,
    "shelteredCount": 230,
    "services": [
      "Reabilitação de Cães",
      "Checagem de Desaparecidos"
    ],
    "website": "https://caoviver.com.br"
  },
  {
    "id": "ong-mg-3",
    "name": "Rock Bicho BH",
    "city": "Belo Horizonte",
    "state": "MG",
    "phone": "(31) 98711-2244",
    "whatsapp": "5531987112244",
    "instagram": "rockbichobh",
    "address": "Bairro Anchieta, Belo Horizonte - MG",
    "lat": -19.95,
    "lng": -43.92,
    "shelteredCount": 175,
    "services": [
      "Resgate Urbano",
      "Castração a Baixo Custo"
    ],
    "website": "https://rockbicho.org.br"
  },
  {
    "id": "ong-mg-4",
    "name": "APA Uberlândia (Associação de Proteção Animal)",
    "city": "Uberlândia",
    "state": "MG",
    "phone": "(34) 99812-4411",
    "whatsapp": "5534998124411",
    "instagram": "apauberlandia",
    "address": "Av. Rondon Pacheco, Uberlândia - MG",
    "lat": -18.91,
    "lng": -48.27,
    "shelteredCount": 210,
    "services": [
      "Acolhimento no Triângulo Mineiro",
      "Castração"
    ],
    "website": "https://apauberlandia.org.br"
  },
  {
    "id": "ong-rs-1",
    "name": "USAV - Unidade de Saúde Animal de Porto Alegre",
    "city": "Porto Alegre",
    "state": "RS",
    "phone": "(51) 3289-5400",
    "whatsapp": "5551981144527",
    "instagram": "usavportoalegre",
    "address": "Estrada das Quirinas, 90 - Lomba do Pinheiro, Porto Alegre - RS",
    "lat": -30.08,
    "lng": -51.12,
    "shelteredCount": 500,
    "services": [
      "Centro de Resgate Municipal",
      "Acolhimento pós-Enchentes"
    ],
    "website": "http://prefeitura.poa.br/usav"
  },
  {
    "id": "ong-rs-2",
    "name": "Rede de Abrigos Pet Searchers RS",
    "city": "Porto Alegre",
    "state": "RS",
    "phone": "(51) 99882-1100",
    "whatsapp": "5551998821100",
    "instagram": "petsrs_abrigos",
    "address": "Bairro Petrópolis, Porto Alegre - RS",
    "lat": -30.035,
    "lng": -51.18,
    "shelteredCount": 650,
    "services": [
      "Triagem Centralizada de Desaparecidos",
      "Alerta Metropolitano"
    ],
    "website": "https://pet-searchers.com"
  },
  {
    "id": "ong-rs-3",
    "name": "SOS Animais Canoas",
    "city": "Canoas",
    "state": "RS",
    "phone": "(51) 99711-2233",
    "whatsapp": "5551997112233",
    "instagram": "sosanimaiscanoas",
    "address": "Av. Getúlio Vargas, Canoas - RS",
    "lat": -29.91,
    "lng": -51.18,
    "shelteredCount": 380,
    "services": [
      "Resgate e Reagrupamento Familiar",
      "Lar Temporário"
    ],
    "website": "https://sosanimaiscanoas.org"
  },
  {
    "id": "ong-rs-4",
    "name": "SOAMA Caxias do Sul",
    "city": "Caxias do Sul",
    "state": "RS",
    "phone": "(54) 99122-4455",
    "whatsapp": "5554991224455",
    "instagram": "soamacaxias",
    "address": "Bairro Ana Rech, Caxias do Sul - RS",
    "lat": -29.16,
    "lng": -51.17,
    "shelteredCount": 450,
    "services": [
      "Abrigo de Cães e Gatos na Serra Gaúcha",
      "Adoção"
    ],
    "website": "https://soama.org.br"
  },
  {
    "id": "ong-rs-5",
    "name": "Protetores de Pelotas",
    "city": "Pelotas",
    "state": "RS",
    "phone": "(53) 99877-6611",
    "whatsapp": "5553998776611",
    "instagram": "protetorespelotas",
    "address": "Bairro Laranjal, Pelotas - RS",
    "lat": -31.76,
    "lng": -52.34,
    "shelteredCount": 220,
    "services": [
      "Acolhimento no Sul do RS",
      "Atendimento de Emergência"
    ],
    "website": "https://protetorespelotas.com.br"
  },
  {
    "id": "ong-rs-6",
    "name": "Amigos dos Animais de Viamão",
    "city": "Viamão",
    "state": "RS",
    "phone": "(51) 99655-3322",
    "whatsapp": "5551996553322",
    "instagram": "amigosviamao",
    "address": "Bairro Cecília, Viamão - RS",
    "lat": -30.08,
    "lng": -51.02,
    "shelteredCount": 280,
    "services": [
      "Santuário e Triagem de Perdidos"
    ],
    "website": "https://amigosviamao.org"
  },
  {
    "id": "ong-ba-1",
    "name": "União de Proteção Animal da Bahia (UPABA)",
    "city": "Salvador",
    "state": "BA",
    "phone": "(71) 98877-6655",
    "whatsapp": "5571988776655",
    "instagram": "uniaodeprotecaoanimalsalvador",
    "address": "Av. Sete de Setembro, 1500 - Vitória, Salvador - BA",
    "lat": -12.98,
    "lng": -38.52,
    "shelteredCount": 210,
    "services": [
      "Resgate Urbano",
      "Acolhimento",
      "Feiras de Reencontro"
    ],
    "website": "https://upaba.org.br"
  },
  {
    "id": "ong-ba-2",
    "name": "Lar Dona Zélia",
    "city": "Salvador",
    "state": "BA",
    "phone": "(71) 99123-8899",
    "whatsapp": "5571991238899",
    "instagram": "ajudeolardonazelia",
    "address": "Bairro Itapuã, Salvador - BA",
    "lat": -12.93,
    "lng": -38.35,
    "shelteredCount": 140,
    "services": [
      "Abrigo Comunitário",
      "Triagem de Cães Perdidos"
    ],
    "website": "https://lardonazelia.com.br"
  },
  {
    "id": "ong-ba-3",
    "name": "Planeta dos Bichos Ilhéus",
    "city": "Ilhéus",
    "state": "BA",
    "phone": "(73) 99911-2244",
    "whatsapp": "5573999112244",
    "instagram": "planetadosbichosilheus",
    "address": "Av. Soares Lopes, Ilhéus - BA",
    "lat": -14.79,
    "lng": -39.03,
    "shelteredCount": 130,
    "services": [
      "Resgate Litoral Sul da Bahia",
      "Adoção"
    ],
    "website": "https://planetadosbichos.org"
  },
  {
    "id": "ong-pe-1",
    "name": "ONG Severino Chaves (Vovó dos Animais)",
    "city": "Recife",
    "state": "PE",
    "phone": "(81) 98694-0357",
    "whatsapp": "5581986940357",
    "instagram": "vovodosanimais",
    "address": "Av. Boa Viagem, 2400 - Boa Viagem, Recife - PE",
    "lat": -8.12,
    "lng": -34.89,
    "shelteredCount": 195,
    "services": [
      "Resgate e Acolhimento",
      "Mutirão de Castração"
    ],
    "website": "https://vovodosanimais.org.br"
  },
  {
    "id": "ong-ce-1",
    "name": "ONG Abrace (Proteção Animal Fortaleza)",
    "city": "Fortaleza",
    "state": "CE",
    "phone": "(85) 99765-4321",
    "whatsapp": "5585997654321",
    "instagram": "ong.abrace",
    "address": "Av. Beira Mar, 3100 - Meireles, Fortaleza - CE",
    "lat": -3.725,
    "lng": -38.49,
    "shelteredCount": 175,
    "services": [
      "Resgate de Cães e Gatos",
      "Feiras de Adoção"
    ],
    "website": "https://abracefortaleza.org"
  },
  {
    "id": "ong-ce-2",
    "name": "Adote um Bigode",
    "city": "Fortaleza",
    "state": "CE",
    "phone": "(85) 98811-2233",
    "whatsapp": "5585988112233",
    "instagram": "adoteumbigodece",
    "address": "Bairro Aldeota, Fortaleza - CE",
    "lat": -3.735,
    "lng": -38.5,
    "shelteredCount": 90,
    "services": [
      "Especializada em Felinos",
      "Checagem de Microchips"
    ],
    "website": "https://adoteumbigode.org"
  },
  {
    "id": "ong-ce-3",
    "name": "Abrigo São Lázaro",
    "city": "Fortaleza",
    "state": "CE",
    "phone": "(85) 98722-1100",
    "whatsapp": "5585987221100",
    "instagram": "abrigosaolazaro",
    "address": "Bairro Passaré, Fortaleza - CE",
    "lat": -3.8,
    "lng": -38.53,
    "shelteredCount": 400,
    "services": [
      "Maior Abrigo do Ceará",
      "Triagem de Perdidos"
    ],
    "website": "https://abrigosaolazaro.org.br"
  },
  {
    "id": "ong-go-1",
    "name": "Grupo Miau Auau",
    "city": "Goiânia",
    "state": "GO",
    "phone": "(62) 99127-4946",
    "whatsapp": "5562991274946",
    "instagram": "grupomiauauau",
    "address": "Setor Bueno, Goiânia - GO",
    "lat": -16.695,
    "lng": -49.26,
    "shelteredCount": 160,
    "services": [
      "Resgate",
      "Eventos de Adoção e Reagrupamento"
    ],
    "website": "https://miauauau.org.br"
  },
  {
    "id": "ong-go-2",
    "name": "ASPAAN (Associação Protetora e Amiga dos Animais)",
    "city": "Goiânia",
    "state": "GO",
    "phone": "(62) 3201-1200",
    "whatsapp": "5562988771122",
    "instagram": "aspaangoiania",
    "address": "Setor Oeste, Goiânia - GO",
    "lat": -16.68,
    "lng": -49.27,
    "shelteredCount": 220,
    "services": [
      "Abrigo de Cães",
      "Cadastro de Animais Perdidos"
    ],
    "website": "https://aspaan.org.br"
  },
  {
    "id": "ong-df-1",
    "name": "Projeto Abrigo dos Animais DF",
    "city": "Brasília",
    "state": "DF",
    "phone": "(61) 99876-1234",
    "whatsapp": "5561998761234",
    "instagram": "abrigodosanimaisdf",
    "address": "Asa Norte - Brasília - DF",
    "lat": -15.78,
    "lng": -47.88,
    "shelteredCount": 240,
    "services": [
      "Atendimento Emergencial",
      "Triagem de Microchip"
    ],
    "website": "https://abrigodf.org.br"
  },
  {
    "id": "ong-df-2",
    "name": "ProAnima Brasília",
    "city": "Brasília",
    "state": "DF",
    "phone": "(61) 98111-9988",
    "whatsapp": "5561981119988",
    "instagram": "proanimadf",
    "address": "Asa Sul - Brasília - DF",
    "lat": -15.8,
    "lng": -47.89,
    "shelteredCount": 180,
    "services": [
      "Políticas Públicas e Resgates",
      "Reagrupamento"
    ],
    "website": "https://proanima.org.br"
  },
  {
    "id": "ong-pr-1",
    "name": "Grupo Força Animal",
    "city": "Curitiba",
    "state": "PR",
    "phone": "(41) 99686-2884",
    "whatsapp": "5541997779779",
    "instagram": "grupoforcaanimal",
    "address": "Atendimento Região de Curitiba - PR",
    "lat": -25.4284,
    "lng": -49.2733,
    "shelteredCount": 190,
    "services": [
      "Emergência 24h",
      "Resgate de Animais",
      "Reencontro"
    ],
    "website": "https://grupoforcaanimal.ong.br"
  },
  {
    "id": "ong-pr-2",
    "name": "SPAC - Sociedade Protetora dos Animais de Curitiba",
    "city": "Curitiba",
    "state": "PR",
    "phone": "(41) 98802-5232",
    "whatsapp": "5541988025232",
    "instagram": "spac_curitiba",
    "address": "Estrada Nova de Colombo, 5500 - Santa Cândida, Curitiba - PR",
    "lat": -25.38,
    "lng": -49.23,
    "shelteredCount": 300,
    "services": [
      "Hospital Veterinário Comunitário",
      "Abrigo"
    ],
    "website": "https://spac.org.br"
  },
  {
    "id": "ong-pr-3",
    "name": "SOCPAM (Sociedade Protetora dos Animais de Maringá)",
    "city": "Maringá",
    "state": "PR",
    "phone": "(44) 99811-2233",
    "whatsapp": "5544998112233",
    "instagram": "socpam.maringa",
    "address": "Av. Brasil, Maringá - PR",
    "lat": -23.42,
    "lng": -51.93,
    "shelteredCount": 160,
    "services": [
      "Resgate no Norte do Paraná",
      "Adoções"
    ],
    "website": "https://socpam.org.br"
  },
  {
    "id": "ong-sc-1",
    "name": "Dibea Florianópolis",
    "city": "Florianópolis",
    "state": "SC",
    "phone": "(48) 3237-6890",
    "whatsapp": "5548988332211",
    "instagram": "dibeafloipa",
    "address": "Rod. SC-401, 1500 - Itacorubi, Florianópolis - SC",
    "lat": -27.575,
    "lng": -48.51,
    "shelteredCount": 280,
    "services": [
      "Diretoria de Bem-Estar Animal",
      "Adoções",
      "Castração"
    ],
    "website": "https://dibeafloipa.sc.gov.br"
  },
  {
    "id": "ong-sc-2",
    "name": "Frada Joinville",
    "city": "Joinville",
    "state": "SC",
    "phone": "(47) 99712-4411",
    "whatsapp": "5547997124411",
    "instagram": "fradajoinville",
    "address": "Bairro América, Joinville - SC",
    "lat": -26.3,
    "lng": -48.84,
    "shelteredCount": 190,
    "services": [
      "Resgate Norte Catarinense",
      "Feira de Reencontro"
    ],
    "website": "https://frada.org.br"
  },
  {
    "id": "ong-es-1",
    "name": "Patas e Focinhos Vitória",
    "city": "Vitória",
    "state": "ES",
    "phone": "(27) 99881-7766",
    "whatsapp": "5527998817766",
    "instagram": "patasefocinhosvitoria",
    "address": "Enseada do Suá, Vitória - ES",
    "lat": -20.315,
    "lng": -40.295,
    "shelteredCount": 130,
    "services": [
      "Resgate Marítimo e Urbano",
      "Acolhimento"
    ],
    "website": "https://patasefocinhoses.org"
  },
  {
    "id": "ong-am-1",
    "name": "Anjos de Rua Manaus",
    "city": "Manaus",
    "state": "AM",
    "phone": "(92) 99136-3600",
    "whatsapp": "5592991363600",
    "instagram": "anjosderuamanaus",
    "address": "Bairro Adrianópolis, Manaus - AM",
    "lat": -3.1,
    "lng": -60.01,
    "shelteredCount": 150,
    "services": [
      "Resgate na Amazônia",
      "Castração e Reencontro"
    ],
    "website": "https://anjosderuamanaus.org"
  },
  {
    "id": "ong-pa-1",
    "name": "SEPDA Belém - Proteção Animal",
    "city": "Belém",
    "state": "PA",
    "phone": "(91) 99334-3367",
    "whatsapp": "5591993343367",
    "instagram": "sepdabelem",
    "address": "Av. Nazaré, 800 - Nazaré, Belém - PA",
    "lat": -1.45,
    "lng": -48.48,
    "shelteredCount": 200,
    "services": [
      "Atendimento Municipal",
      "Resgate e Zoonoses"
    ],
    "website": "https://sepda.belem.pa.gov.br"
  },
  {
    "id": "ong-ma-1",
    "name": "Amparo Animal São Luís",
    "city": "São Luís",
    "state": "MA",
    "phone": "(98) 98722-3344",
    "whatsapp": "5598987223344",
    "instagram": "amparoanimalslz",
    "address": "Bairro Renascença, São Luís - MA",
    "lat": -2.51,
    "lng": -44.28,
    "shelteredCount": 165,
    "services": [
      "Abrigo Temporário",
      "Reencontros de Animais"
    ],
    "website": "https://amparoanimalslz.org"
  },
  {
    "id": "ong-ap-1",
    "name": "UPAC - União de Proteção Animal Costelinha",
    "city": "Macapá",
    "state": "AP",
    "phone": "(96) 99122-3344",
    "whatsapp": "5596991223344",
    "instagram": "upacmacapa",
    "address": "Bairro Trem, Macapá - AP",
    "lat": 0.03,
    "lng": -51.07,
    "shelteredCount": 140,
    "services": [
      "Resgate e Acolhimento no Amapá",
      "Castração"
    ],
    "website": "https://upacamapa.org"
  },
  {
    "id": "ong-ap-2",
    "name": "Instituto Mapinguari",
    "city": "Macapá",
    "state": "AP",
    "phone": "(96) 98811-2233",
    "whatsapp": "5596988112233",
    "instagram": "institutomapinguari",
    "address": "Bairro Central, Macapá - AP",
    "lat": 0.04,
    "lng": -51.06,
    "shelteredCount": 95,
    "services": [
      "Defesa Animal e Resgate de Silvestres/Domésticos"
    ],
    "website": "https://institutomapinguari.org.br"
  },
  {
    "id": "ong-al-1",
    "name": "Grupo Pata Amada Maceió",
    "city": "Maceió",
    "state": "AL",
    "phone": "(82) 99611-3322",
    "whatsapp": "5582996113322",
    "instagram": "pataamadamaceio",
    "address": "Orla de Pajuçara, Maceió - AL",
    "lat": -9.66,
    "lng": -35.7,
    "shelteredCount": 165,
    "services": [
      "Resgate Praiano",
      "Feiras de Reencontro"
    ],
    "website": "https://pataamada.org"
  },
  {
    "id": "ong-al-2",
    "name": "AHPAR - Proteção Animal Arapiraca",
    "city": "Arapiraca",
    "state": "AL",
    "phone": "(82) 98822-4455",
    "whatsapp": "5582988224455",
    "instagram": "ahpararapiraca",
    "address": "Centro, Arapiraca - AL",
    "lat": -9.75,
    "lng": -36.66,
    "shelteredCount": 120,
    "services": [
      "Abrigo Agreste Alagoano",
      "Triagem de Perdidos"
    ],
    "website": "https://ahpar.org.br"
  },
  {
    "id": "ong-rn-1",
    "name": "ONG Ampara Mossoró",
    "city": "Mossoró",
    "state": "RN",
    "phone": "(84) 99822-4433",
    "whatsapp": "5584998224433",
    "instagram": "amparamossoro",
    "address": "Bairro Nova Betânia, Mossoró - RN",
    "lat": -5.18,
    "lng": -37.34,
    "shelteredCount": 135,
    "services": [
      "Resgate no Oeste Potiguar",
      "Adoção"
    ],
    "website": "https://amparamossoro.org"
  },
  {
    "id": "ong-ms-1",
    "name": "Abrigo dos Bichos Campo Grande",
    "city": "Campo Grande",
    "state": "MS",
    "phone": "(67) 99233-4455",
    "whatsapp": "5567992334455",
    "instagram": "abrigodosbichoscg",
    "address": "Bairro Jardim dos Estados, Campo Grande - MS",
    "lat": -20.46,
    "lng": -54.6,
    "shelteredCount": 190,
    "services": [
      "Resgate no Pantanal e Capital",
      "Feira de Adoção"
    ],
    "website": "https://abrigodosbichos.org.br"
  },
  {
    "id": "ong-mt-1",
    "name": "APA Cuiabá (Associação Protetora dos Animais)",
    "city": "Cuiabá",
    "state": "MT",
    "phone": "(65) 99655-1122",
    "whatsapp": "5565996551122",
    "instagram": "apacuiaba",
    "address": "Av. Historiador Rubens de Mendonça, Cuiabá - MT",
    "lat": -15.59,
    "lng": -56.09,
    "shelteredCount": 210,
    "services": [
      "Acolhimento Comunitário",
      "Castração Popular"
    ],
    "website": "https://apacuiaba.org.br"
  },
  {
    "id": "ong-pb-1",
    "name": "Haras do Bem João Pessoa",
    "city": "João Pessoa",
    "state": "PB",
    "phone": "(83) 98711-5566",
    "whatsapp": "5583987115566",
    "instagram": "harasdobemjp",
    "address": "Bairro Tambaú, João Pessoa - PB",
    "lat": -7.11,
    "lng": -34.82,
    "shelteredCount": 135,
    "services": [
      "Resgate de Cães e Equinos",
      "Reencontros"
    ],
    "website": "https://harasdobem.org"
  },
  {
    "id": "ong-pi-1",
    "name": "APIPA Teresina",
    "city": "Teresina",
    "state": "PI",
    "phone": "(86) 99433-2211",
    "whatsapp": "5586994332211",
    "instagram": "apipateresina",
    "address": "Av. Frei Serafim, Teresina - PI",
    "lat": -5.08,
    "lng": -42.8,
    "shelteredCount": 180,
    "services": [
      "Abrigo Central de Teresina",
      "Castração"
    ],
    "website": "https://apipapiauí.org.br"
  },
  {
    "id": "ong-se-1",
    "name": "Adota Aracaju",
    "city": "Aracaju",
    "state": "SE",
    "phone": "(79) 99877-3322",
    "whatsapp": "5579998773322",
    "instagram": "adotaaracaju",
    "address": "Av. Beira Mar, Aracaju - SE",
    "lat": -10.91,
    "lng": -37.05,
    "shelteredCount": 110,
    "services": [
      "Acolhimento e Reagrupamento"
    ],
    "website": "https://adotaaracaju.org"
  },
  {
    "id": "ong-to-1",
    "name": "SOS Animais Palmas",
    "city": "Palmas",
    "state": "TO",
    "phone": "(63) 99211-4455",
    "whatsapp": "5563992114455",
    "instagram": "sosanimaispalmas",
    "address": "Plano Diretor Sul, Palmas - TO",
    "lat": -10.24,
    "lng": -48.33,
    "shelteredCount": 105,
    "services": [
      "Resgate no Tocantins",
      "Triagem de Perda"
    ],
    "website": "https://sosanimaispalmas.org"
  }
];

class Store {
  constructor() {
    this.pets = [];
    this.ongs = FULL_NATIONAL_ONGS_DATABASE;
    this.init();
  }

  init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        this.pets = JSON.parse(saved);
      } catch (e) {
        this.pets = DEFAULT_PETS;
      }
    } else {
      this.pets = DEFAULT_PETS;
      this.save();
    }
  }

  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.pets));
  }

  getPets(filter = {}) {
    return this.pets.filter(pet => {
      if (filter.status && pet.status !== filter.status) return false;
      if (filter.type && filter.type !== 'all' && pet.type !== filter.type) return false;
      if (filter.city && filter.city !== 'all' && pet.city.toLowerCase() !== filter.city.toLowerCase()) return false;
      if (filter.query) {
        const q = filter.query.toLowerCase();
        const match = pet.name.toLowerCase().includes(q) ||
                      pet.breed.toLowerCase().includes(q) ||
                      pet.neighborhood.toLowerCase().includes(q) ||
                      pet.city.toLowerCase().includes(q) ||
                      pet.description.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    });
  }

  getPetById(id) {
    return this.pets.find(p => p.id === id);
  }

  addPet(newPetData) {
    const pet = {
      id: 'pet-' + Date.now(),
      date: new Date().toLocaleDateString('pt-BR'),
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      urgent: true,
      ...newPetData
    };
    this.pets.unshift(pet);
    this.save();
    return pet;
  }

  getStates() {
    const states = [...new Set(this.ongs.map(o => o.state))].sort();
    return states;
  }

  getCitiesByState(state) {
    if (!state || state === 'all') {
      return [...new Set(this.ongs.map(o => o.city))].sort();
    }
    return [...new Set(this.ongs.filter(o => o.state === state).map(o => o.city))].sort();
  }

  getOngs(filterState = 'all', filterCity = 'all', query = '') {
    return this.ongs.filter(o => {
      if (filterState !== 'all' && o.state.toLowerCase() !== filterState.toLowerCase()) return false;
      if (filterCity !== 'all' && o.city.toLowerCase() !== filterCity.toLowerCase()) return false;
      if (query.trim() !== '') {
        const q = query.toLowerCase();
        const match = o.name.toLowerCase().includes(q) ||
                      o.city.toLowerCase().includes(q) ||
                      o.state.toLowerCase().includes(q) ||
                      o.address.toLowerCase().includes(q) ||
                      (o.instagram && o.instagram.toLowerCase().includes(q));
        if (!match) return false;
      }
      return true;
    });
  }

  getStats() {
    const totalLost = this.pets.filter(p => p.status === 'lost').length;
    const totalFound = this.pets.filter(p => p.status === 'found').length;
    const reunited = 2450 + totalFound;
    return { totalLost, totalFound, reunited };
  }
}

export const store = new Store();
