(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(s){if(s.ep)return;s.ep=!0;const t=o(s);fetch(s.href,t)}})();const V="faro_pets_data_v4",_=[{id:"pet-1",name:"Thor",type:"dog",breed:"Golden Retriever",status:"lost",gender:"Macho",color:"Dourado claro",reward:"R$ 1.500",date:"08/08/2026",time:"14:30",city:"São Paulo",state:"SP",neighborhood:"Pinheiros / Vila Madalena",location:"Rua Fradique Coutinho próximo à Praça Benedito Calixto",lat:-23.5587,lng:-46.6853,description:"Thor usava uma coleira vermelha com plaquinha de identificação. É extremamente sociável, dócil, mas pode estar assustado pelo barulho de carros.",photo:"https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",contactName:"Mariana Souza",contactPhone:"(11) 98765-4321",microchip:"982000341829102",urgent:!0},{id:"pet-2",name:"Luna",type:"cat",breed:"Siamês Mestiço",status:"lost",gender:"Fêmea",color:"Bege com extremidades escuras e olhos azuis",reward:"R$ 800",date:"07/08/2026",time:"21:00",city:"São Paulo",state:"SP",neighborhood:"Moema",location:"Alameda dos Maracatins, perto da Av. Ibirapuera",lat:-23.6041,lng:-46.6625,description:"Luna fugiu pela varanda do apartamento. Tem olhos azuis intensos e uma pequena falha de pelo na orelha esquerda.",photo:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",contactName:"Carlos Eduardo",contactPhone:"(11) 97654-3210",microchip:"Não informado",urgent:!0},{id:"pet-3",name:"Malu (Resgatada)",type:"dog",breed:"Vira-lata (SRD)",status:"found",gender:"Fêmea",color:"Caramelo com peito branco",reward:"Sem recompensa",date:"09/08/2026",time:"08:15",city:"São Paulo",state:"SP",neighborhood:"Itaim Bibi",location:"Resgatada na Rua Joaquim Floriano perto do Parque Povo",lat:-23.5852,lng:-46.6775,description:"Cadela vira-lata caramelo muito carinhosa encontrada perambulando pela calçada. Está sob meus cuidados temporários no veterinário local.",photo:"https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",contactName:"Dra. Patricia Lima",contactPhone:"(11) 99123-4567",microchip:"Verificando em clínica",urgent:!1},{id:"pet-4",name:"Apollo",type:"dog",breed:"Bulldog Francês",status:"lost",gender:"Macho",color:"Preto e Branco (Tigrado)",reward:"R$ 2.000",date:"06/08/2026",time:"18:45",city:"Rio de Janeiro",state:"RJ",neighborhood:"Copacabana / Ipanema",location:"Posto 5 na Av. Atlântica",lat:-22.9772,lng:-43.1903,description:"Apollo necessita de medicação contínua para problemas respiratórios. Coleira peitoral azul marinho.",photo:"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",contactName:"Fernando Alvares",contactPhone:"(21) 98111-2233",microchip:"9851410098231",urgent:!0},{id:"pet-5",name:"Gato Encontrado (Cinza)",type:"cat",breed:"Sem Raça Definida",status:"found",gender:"Macho",color:"Cinza rajado / Tom Tabby",reward:"N/A",date:"08/08/2026",time:"19:30",city:"Campinas",state:"SP",neighborhood:"Cambuí",location:"Encontrado no estacionamento do condomínio na Rua Maria Monteiro",lat:-22.8984,lng:-47.0542,description:"Gato castrado, limpo e bem cuidado. Parecia recém-perdido. Está acolhido na garagem.",photo:"https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80",contactName:"Beatriz Ramos",contactPhone:"(19) 99887-6655",microchip:"Não possui",urgent:!1},{id:"pet-6",name:"Pipoca",type:"dog",breed:"Poodle Toy",status:"lost",gender:"Fêmea",color:"Branco neve",reward:"R$ 1.000",date:"05/08/2026",time:"11:00",city:"Belo Horizonte",state:"MG",neighborhood:"Savassi",location:"Próximo à Praça da Savassi",lat:-19.9387,lng:-43.9332,description:"Poodle idosa com dificuldade de visão. Atende pelo nome de Pipoca.",photo:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",contactName:"Clara Mendes",contactPhone:"(31) 98844-3322",microchip:"Sim",urgent:!1}],ee=[{id:"ong-sp-ps-1",name:"Pet Searchers - Central de Apoio & Busca",city:"Santo André",state:"SP",phone:"(11) 98000-8442",whatsapp:"5511980008442",instagram:"petsearchersoficial",address:"Praça Atlântica Valparaíso, Santo André - SP",lat:-23.662,lng:-46.541,shelteredCount:300,services:["Central de Buscas","Divulgação Estratégica","Suporte a Tutores"],website:"https://pet-searchers.com"},{id:"ong-sp-1",name:"Confraria dos Miados e Latidos",city:"São Paulo",state:"SP",phone:"(11) 4327-6330",whatsapp:"551143276330",instagram:"cmiadoselatidos",address:"Av. Jabaquara, 1200 - Mirandópolis, São Paulo - SP",lat:-23.605,lng:-46.638,shelteredCount:180,services:["Adoção Responsável","Leitura de Microchip","Feira de Reencontros"],website:"https://miadoselatidos.org.br"},{id:"ong-sp-2",name:"ONG Canto da Terra",city:"São Paulo",state:"SP",phone:"(11) 97055-3947",whatsapp:"5511970553947",instagram:"ongcantodaterra",address:"Rua Domingos de Morais, 2100 - Vila Mariana, São Paulo - SP",lat:-23.59,lng:-46.635,shelteredCount:120,services:["Resgate de Animais","Triagem de Perdidos","Acolhimento"],website:"https://cantodaterra.org.br"},{id:"ong-sp-3",name:"Instituto Caramelo",city:"São Paulo",state:"SP",phone:"(11) 3034-5678",whatsapp:"5511987654321",instagram:"institutocaramelo",address:"Av. Brigadeiro Faria Lima, 2200 - Pinheiros, São Paulo - SP",lat:-23.5705,lng:-46.6872,shelteredCount:350,services:["Hospital Veterinário Comunitário","Resgate","Reencontro"],website:"https://institutocaramelo.org"},{id:"ong-sp-4",name:"Ampara Animal",city:"São Paulo",state:"SP",phone:"(11) 3885-9988",whatsapp:"5511938859988",instagram:"amparanimal",address:"Av. Paulista, 1000 - Bela Vista, São Paulo - SP",lat:-23.5615,lng:-46.656,shelteredCount:520,services:["Rede Nacional de Proteção","Políticas Públicas","Castração"],website:"https://amparanimal.org.br"},{id:"ong-sp-5",name:"UIPA (União Internacional Protetora dos Animais)",city:"São Paulo",state:"SP",phone:"(11) 3228-1462",whatsapp:"5511932281462",instagram:"uipaoficial",address:"Av. Presidente Castelo Branco, 3200 - Canindé, São Paulo - SP",lat:-23.522,lng:-46.621,shelteredCount:480,services:["Hospital Veterinário Popular","Abrigo Histórico","Resgates"],website:"https://uipa.org.br"},{id:"ong-sp-6",name:"ONG Cão Sem Dono",city:"Santo André",state:"SP",phone:"(11) 97543-2100",whatsapp:"5511975432100",instagram:"caosemdonooficial",address:"Rua das Figueiras, 450 - Bairro Jardim, Santo André - SP",lat:-23.655,lng:-46.538,shelteredCount:420,services:["Resgate e Acolhimento","Clínica Comunitária","Feira de Adoção"],website:"https://caosemdono.org.br"},{id:"ong-sp-7",name:"AAAC (Associação Protetora de Animais de Campinas)",city:"Campinas",state:"SP",phone:"(19) 3251-1234",whatsapp:"5519998876655",instagram:"aaac.campinas",address:"Av. Barão de Itapura, 1500 - Guanabara, Campinas - SP",lat:-22.89,lng:-47.06,shelteredCount:260,services:["Acolhimento Temporário","Leitor de Microchip"],website:"https://aaac.org.br"},{id:"ong-sp-8",name:"Amigos Felinos (Especializada em Gatos)",city:"Santos",state:"SP",phone:"(13) 99712-3344",whatsapp:"5513997123344",instagram:"amigosfelinossantos",address:"Av. Ana Costa, 300 - Gonzaga, Santos - SP",lat:-23.955,lng:-46.33,shelteredCount:140,services:["Resgate Felino (CED)","Castração","Adoção Responsável"],website:"https://amigosfelinos.org.br"},{id:"ong-sp-9",name:"Rancho dos Gnomos (Santuário de Animais)",city:"Cotia",state:"SP",phone:"(11) 4614-2323",whatsapp:"5511946142323",instagram:"ranchodosgnomos",address:"Estrada do Caucaia, Cotia - SP",lat:-23.6,lng:-46.92,shelteredCount:310,services:["Santuário e Acolhimento de Alta Vulnerabilidade"],website:"https://ranchodosgnomos.org.br"},{id:"ong-sp-10",name:"Proteção Animal de Barueri",city:"Barueri",state:"SP",phone:"(11) 4199-1500",whatsapp:"5511941991500",instagram:"protecaoanimalbarueri",address:"Al. Araguaia, Alphaville, Barueri - SP",lat:-23.51,lng:-46.87,shelteredCount:190,services:["Acolhimento Municipal","Triagem de Microchip"],website:"https://barueri.sp.gov.br"},{id:"ong-sp-11",name:"Associação Protetora dos Animais de Sorocaba",city:"Sorocaba",state:"SP",phone:"(15) 3232-1122",whatsapp:"5515998877112",instagram:"spasorocaba",address:"Av. Afonso Vergueiro, Sorocaba - SP",lat:-23.5,lng:-47.45,shelteredCount:220,services:["Abrigo Regional","Feiras de Reencontro"],website:"https://spasorocaba.org.br"},{id:"ong-sp-12",name:"Focinhos Carentes de Ribeirão Preto",city:"Ribeirão Preto",state:"SP",phone:"(16) 99112-3344",whatsapp:"5516991123344",instagram:"focinhosrp",address:"Av. Nove de Julho, Ribeirão Preto - SP",lat:-21.17,lng:-47.81,shelteredCount:180,services:["Resgate e Castração","Doações e Feiras"],website:"https://focinhosrp.com.br"},{id:"ong-rj-1",name:"SUIPA (Sociedade União Internacional Protetora dos Animais)",city:"Rio de Janeiro",state:"RJ",phone:"(21) 3297-8775",whatsapp:"5521984586653",instagram:"suipa",address:"Av. Dom Hélder Câmara, 1801 - Benfica, Rio de Janeiro - RJ",lat:-22.8895,lng:-43.2452,shelteredCount:650,services:["Atendimento 24h","Acolhimento de Resgatados","Reencontro"],website:"https://suipa.org.br"},{id:"ong-rj-2",name:"ONG G.A.R.R.A",city:"Rio de Janeiro",state:"RJ",phone:"(21) 98024-1232",whatsapp:"5521980241232",instagram:"garrabicho",address:"Rua Visconde de Pirajá, 350 - Ipanema, Rio de Janeiro - RJ",lat:-22.984,lng:-43.2,shelteredCount:160,services:["Resgate de Animais Feridos","Encaminhamento Lar Temporário"],website:"https://onggarra.com"},{id:"ong-rj-3",name:"Paraíso dos Focinhos",city:"Niterói",state:"RJ",phone:"(21) 99876-4321",whatsapp:"5521998764321",instagram:"paraisodosfocinhos",address:"Estrada Francisco da Cruz Nunes, 2000 - Itaipu, Niterói - RJ",lat:-22.95,lng:-43.03,shelteredCount:290,services:["Reabilitação Intensiva","Adoção e Reagrupamento"],website:"https://paraisodosfocinhos.com.br"},{id:"ong-rj-4",name:"Toca dos Gatinhos RJ",city:"Rio de Janeiro",state:"RJ",phone:"(21) 98777-1122",whatsapp:"5521987771122",instagram:"tocadosgatinhosrj",address:"Bairro Botafogo, Rio de Janeiro - RJ",lat:-22.95,lng:-43.18,shelteredCount:110,services:["Abrigo para Felinos","Testes FIV/FELV","Adoções"],website:"https://tocadosgatinhosrj.org"},{id:"ong-rj-5",name:"Dog's Heaven Petrópolis",city:"Petrópolis",state:"RJ",phone:"(24) 99266-3355",whatsapp:"5524992663355",instagram:"dogsheavenpetropolis",address:"Estrada União e Indústria, Itaipava, Petrópolis - RJ",lat:-22.42,lng:-43.13,shelteredCount:300,services:["Resgate na Região Serrana","Reabilitação de Cães"],website:"https://dogsheaven.org.br"},{id:"ong-mg-1",name:"Projeto Casa Mia (Gatos)",city:"Belo Horizonte",state:"MG",phone:"(31) 99653-1454",whatsapp:"5531996531454",instagram:"casamiabh",address:"Rua Sergipe, 1200 - Savassi, Belo Horizonte - MG",lat:-19.932,lng:-43.935,shelteredCount:110,services:["Acolhimento de Gatos","Checagem de Microchip","Adoção"],website:"https://casamiabh.com.br"},{id:"ong-mg-2",name:"Associação Cãoviver",city:"Contagem",state:"MG",phone:"(31) 3392-1234",whatsapp:"5531988884433",instagram:"caoviver",address:"Av. João César de Oliveira, 3000 - Eldorado, Contagem - MG",lat:-19.932,lng:-44.05,shelteredCount:230,services:["Reabilitação de Cães","Checagem de Desaparecidos"],website:"https://caoviver.com.br"},{id:"ong-mg-3",name:"Rock Bicho BH",city:"Belo Horizonte",state:"MG",phone:"(31) 98711-2244",whatsapp:"5531987112244",instagram:"rockbichobh",address:"Bairro Anchieta, Belo Horizonte - MG",lat:-19.95,lng:-43.92,shelteredCount:175,services:["Resgate Urbano","Castração a Baixo Custo"],website:"https://rockbicho.org.br"},{id:"ong-mg-4",name:"APA Uberlândia (Associação de Proteção Animal)",city:"Uberlândia",state:"MG",phone:"(34) 99812-4411",whatsapp:"5534998124411",instagram:"apauberlandia",address:"Av. Rondon Pacheco, Uberlândia - MG",lat:-18.91,lng:-48.27,shelteredCount:210,services:["Acolhimento no Triângulo Mineiro","Castração"],website:"https://apauberlandia.org.br"},{id:"ong-rs-1",name:"USAV - Unidade de Saúde Animal de Porto Alegre",city:"Porto Alegre",state:"RS",phone:"(51) 3289-5400",whatsapp:"5551981144527",instagram:"usavportoalegre",address:"Estrada das Quirinas, 90 - Lomba do Pinheiro, Porto Alegre - RS",lat:-30.08,lng:-51.12,shelteredCount:500,services:["Centro de Resgate Municipal","Acolhimento pós-Enchentes"],website:"http://prefeitura.poa.br/usav"},{id:"ong-rs-2",name:"Rede de Abrigos Pet Searchers RS",city:"Porto Alegre",state:"RS",phone:"(51) 99882-1100",whatsapp:"5551998821100",instagram:"petsrs_abrigos",address:"Bairro Petrópolis, Porto Alegre - RS",lat:-30.035,lng:-51.18,shelteredCount:650,services:["Triagem Centralizada de Desaparecidos","Alerta Metropolitano"],website:"https://pet-searchers.com"},{id:"ong-rs-3",name:"SOS Animais Canoas",city:"Canoas",state:"RS",phone:"(51) 99711-2233",whatsapp:"5551997112233",instagram:"sosanimaiscanoas",address:"Av. Getúlio Vargas, Canoas - RS",lat:-29.91,lng:-51.18,shelteredCount:380,services:["Resgate e Reagrupamento Familiar","Lar Temporário"],website:"https://sosanimaiscanoas.org"},{id:"ong-rs-4",name:"SOAMA Caxias do Sul",city:"Caxias do Sul",state:"RS",phone:"(54) 99122-4455",whatsapp:"5554991224455",instagram:"soamacaxias",address:"Bairro Ana Rech, Caxias do Sul - RS",lat:-29.16,lng:-51.17,shelteredCount:450,services:["Abrigo de Cães e Gatos na Serra Gaúcha","Adoção"],website:"https://soama.org.br"},{id:"ong-rs-5",name:"Protetores de Pelotas",city:"Pelotas",state:"RS",phone:"(53) 99877-6611",whatsapp:"5553998776611",instagram:"protetorespelotas",address:"Bairro Laranjal, Pelotas - RS",lat:-31.76,lng:-52.34,shelteredCount:220,services:["Acolhimento no Sul do RS","Atendimento de Emergência"],website:"https://protetorespelotas.com.br"},{id:"ong-rs-6",name:"Amigos dos Animais de Viamão",city:"Viamão",state:"RS",phone:"(51) 99655-3322",whatsapp:"5551996553322",instagram:"amigosviamao",address:"Bairro Cecília, Viamão - RS",lat:-30.08,lng:-51.02,shelteredCount:280,services:["Santuário e Triagem de Perdidos"],website:"https://amigosviamao.org"},{id:"ong-ba-1",name:"União de Proteção Animal da Bahia (UPABA)",city:"Salvador",state:"BA",phone:"(71) 98877-6655",whatsapp:"5571988776655",instagram:"uniaodeprotecaoanimalsalvador",address:"Av. Sete de Setembro, 1500 - Vitória, Salvador - BA",lat:-12.98,lng:-38.52,shelteredCount:210,services:["Resgate Urbano","Acolhimento","Feiras de Reencontro"],website:"https://upaba.org.br"},{id:"ong-ba-2",name:"Lar Dona Zélia",city:"Salvador",state:"BA",phone:"(71) 99123-8899",whatsapp:"5571991238899",instagram:"ajudeolardonazelia",address:"Bairro Itapuã, Salvador - BA",lat:-12.93,lng:-38.35,shelteredCount:140,services:["Abrigo Comunitário","Triagem de Cães Perdidos"],website:"https://lardonazelia.com.br"},{id:"ong-ba-3",name:"Planeta dos Bichos Ilhéus",city:"Ilhéus",state:"BA",phone:"(73) 99911-2244",whatsapp:"5573999112244",instagram:"planetadosbichosilheus",address:"Av. Soares Lopes, Ilhéus - BA",lat:-14.79,lng:-39.03,shelteredCount:130,services:["Resgate Litoral Sul da Bahia","Adoção"],website:"https://planetadosbichos.org"},{id:"ong-pe-1",name:"ONG Severino Chaves (Vovó dos Animais)",city:"Recife",state:"PE",phone:"(81) 98694-0357",whatsapp:"5581986940357",instagram:"vovodosanimais",address:"Av. Boa Viagem, 2400 - Boa Viagem, Recife - PE",lat:-8.12,lng:-34.89,shelteredCount:195,services:["Resgate e Acolhimento","Mutirão de Castração"],website:"https://vovodosanimais.org.br"},{id:"ong-ce-1",name:"ONG Abrace (Proteção Animal Fortaleza)",city:"Fortaleza",state:"CE",phone:"(85) 99765-4321",whatsapp:"5585997654321",instagram:"ong.abrace",address:"Av. Beira Mar, 3100 - Meireles, Fortaleza - CE",lat:-3.725,lng:-38.49,shelteredCount:175,services:["Resgate de Cães e Gatos","Feiras de Adoção"],website:"https://abracefortaleza.org"},{id:"ong-ce-2",name:"Adote um Bigode",city:"Fortaleza",state:"CE",phone:"(85) 98811-2233",whatsapp:"5585988112233",instagram:"adoteumbigodece",address:"Bairro Aldeota, Fortaleza - CE",lat:-3.735,lng:-38.5,shelteredCount:90,services:["Especializada em Felinos","Checagem de Microchips"],website:"https://adoteumbigode.org"},{id:"ong-ce-3",name:"Abrigo São Lázaro",city:"Fortaleza",state:"CE",phone:"(85) 98722-1100",whatsapp:"5585987221100",instagram:"abrigosaolazaro",address:"Bairro Passaré, Fortaleza - CE",lat:-3.8,lng:-38.53,shelteredCount:400,services:["Maior Abrigo do Ceará","Triagem de Perdidos"],website:"https://abrigosaolazaro.org.br"},{id:"ong-go-1",name:"Grupo Miau Auau",city:"Goiânia",state:"GO",phone:"(62) 99127-4946",whatsapp:"5562991274946",instagram:"grupomiauauau",address:"Setor Bueno, Goiânia - GO",lat:-16.695,lng:-49.26,shelteredCount:160,services:["Resgate","Eventos de Adoção e Reagrupamento"],website:"https://miauauau.org.br"},{id:"ong-go-2",name:"ASPAAN (Associação Protetora e Amiga dos Animais)",city:"Goiânia",state:"GO",phone:"(62) 3201-1200",whatsapp:"5562988771122",instagram:"aspaangoiania",address:"Setor Oeste, Goiânia - GO",lat:-16.68,lng:-49.27,shelteredCount:220,services:["Abrigo de Cães","Cadastro de Animais Perdidos"],website:"https://aspaan.org.br"},{id:"ong-df-1",name:"Projeto Abrigo dos Animais DF",city:"Brasília",state:"DF",phone:"(61) 99876-1234",whatsapp:"5561998761234",instagram:"abrigodosanimaisdf",address:"Asa Norte - Brasília - DF",lat:-15.78,lng:-47.88,shelteredCount:240,services:["Atendimento Emergencial","Triagem de Microchip"],website:"https://abrigodf.org.br"},{id:"ong-df-2",name:"ProAnima Brasília",city:"Brasília",state:"DF",phone:"(61) 98111-9988",whatsapp:"5561981119988",instagram:"proanimadf",address:"Asa Sul - Brasília - DF",lat:-15.8,lng:-47.89,shelteredCount:180,services:["Políticas Públicas e Resgates","Reagrupamento"],website:"https://proanima.org.br"},{id:"ong-pr-1",name:"Grupo Força Animal",city:"Curitiba",state:"PR",phone:"(41) 99686-2884",whatsapp:"5541997779779",instagram:"grupoforcaanimal",address:"Atendimento Região de Curitiba - PR",lat:-25.4284,lng:-49.2733,shelteredCount:190,services:["Emergência 24h","Resgate de Animais","Reencontro"],website:"https://grupoforcaanimal.ong.br"},{id:"ong-pr-2",name:"SPAC - Sociedade Protetora dos Animais de Curitiba",city:"Curitiba",state:"PR",phone:"(41) 98802-5232",whatsapp:"5541988025232",instagram:"spac_curitiba",address:"Estrada Nova de Colombo, 5500 - Santa Cândida, Curitiba - PR",lat:-25.38,lng:-49.23,shelteredCount:300,services:["Hospital Veterinário Comunitário","Abrigo"],website:"https://spac.org.br"},{id:"ong-pr-3",name:"SOCPAM (Sociedade Protetora dos Animais de Maringá)",city:"Maringá",state:"PR",phone:"(44) 99811-2233",whatsapp:"5544998112233",instagram:"socpam.maringa",address:"Av. Brasil, Maringá - PR",lat:-23.42,lng:-51.93,shelteredCount:160,services:["Resgate no Norte do Paraná","Adoções"],website:"https://socpam.org.br"},{id:"ong-sc-1",name:"Dibea Florianópolis",city:"Florianópolis",state:"SC",phone:"(48) 3237-6890",whatsapp:"5548988332211",instagram:"dibeafloipa",address:"Rod. SC-401, 1500 - Itacorubi, Florianópolis - SC",lat:-27.575,lng:-48.51,shelteredCount:280,services:["Diretoria de Bem-Estar Animal","Adoções","Castração"],website:"https://dibeafloipa.sc.gov.br"},{id:"ong-sc-2",name:"Frada Joinville",city:"Joinville",state:"SC",phone:"(47) 99712-4411",whatsapp:"5547997124411",instagram:"fradajoinville",address:"Bairro América, Joinville - SC",lat:-26.3,lng:-48.84,shelteredCount:190,services:["Resgate Norte Catarinense","Feira de Reencontro"],website:"https://frada.org.br"},{id:"ong-es-1",name:"Patas e Focinhos Vitória",city:"Vitória",state:"ES",phone:"(27) 99881-7766",whatsapp:"5527998817766",instagram:"patasefocinhosvitoria",address:"Enseada do Suá, Vitória - ES",lat:-20.315,lng:-40.295,shelteredCount:130,services:["Resgate Marítimo e Urbano","Acolhimento"],website:"https://patasefocinhoses.org"},{id:"ong-am-1",name:"Anjos de Rua Manaus",city:"Manaus",state:"AM",phone:"(92) 99136-3600",whatsapp:"5592991363600",instagram:"anjosderuamanaus",address:"Bairro Adrianópolis, Manaus - AM",lat:-3.1,lng:-60.01,shelteredCount:150,services:["Resgate na Amazônia","Castração e Reencontro"],website:"https://anjosderuamanaus.org"},{id:"ong-pa-1",name:"SEPDA Belém - Proteção Animal",city:"Belém",state:"PA",phone:"(91) 99334-3367",whatsapp:"5591993343367",instagram:"sepdabelem",address:"Av. Nazaré, 800 - Nazaré, Belém - PA",lat:-1.45,lng:-48.48,shelteredCount:200,services:["Atendimento Municipal","Resgate e Zoonoses"],website:"https://sepda.belem.pa.gov.br"},{id:"ong-ma-1",name:"Amparo Animal São Luís",city:"São Luís",state:"MA",phone:"(98) 98722-3344",whatsapp:"5598987223344",instagram:"amparoanimalslz",address:"Bairro Renascença, São Luís - MA",lat:-2.51,lng:-44.28,shelteredCount:165,services:["Abrigo Temporário","Reencontros de Animais"],website:"https://amparoanimalslz.org"},{id:"ong-ap-1",name:"UPAC - União de Proteção Animal Costelinha",city:"Macapá",state:"AP",phone:"(96) 99122-3344",whatsapp:"5596991223344",instagram:"upacmacapa",address:"Bairro Trem, Macapá - AP",lat:.03,lng:-51.07,shelteredCount:140,services:["Resgate e Acolhimento no Amapá","Castração"],website:"https://upacamapa.org"},{id:"ong-ap-2",name:"Instituto Mapinguari",city:"Macapá",state:"AP",phone:"(96) 98811-2233",whatsapp:"5596988112233",instagram:"institutomapinguari",address:"Bairro Central, Macapá - AP",lat:.04,lng:-51.06,shelteredCount:95,services:["Defesa Animal e Resgate de Silvestres/Domésticos"],website:"https://institutomapinguari.org.br"},{id:"ong-al-1",name:"Grupo Pata Amada Maceió",city:"Maceió",state:"AL",phone:"(82) 99611-3322",whatsapp:"5582996113322",instagram:"pataamadamaceio",address:"Orla de Pajuçara, Maceió - AL",lat:-9.66,lng:-35.7,shelteredCount:165,services:["Resgate Praiano","Feiras de Reencontro"],website:"https://pataamada.org"},{id:"ong-al-2",name:"AHPAR - Proteção Animal Arapiraca",city:"Arapiraca",state:"AL",phone:"(82) 98822-4455",whatsapp:"5582988224455",instagram:"ahpararapiraca",address:"Centro, Arapiraca - AL",lat:-9.75,lng:-36.66,shelteredCount:120,services:["Abrigo Agreste Alagoano","Triagem de Perdidos"],website:"https://ahpar.org.br"},{id:"ong-rn-1",name:"ONG Ampara Mossoró",city:"Mossoró",state:"RN",phone:"(84) 99822-4433",whatsapp:"5584998224433",instagram:"amparamossoro",address:"Bairro Nova Betânia, Mossoró - RN",lat:-5.18,lng:-37.34,shelteredCount:135,services:["Resgate no Oeste Potiguar","Adoção"],website:"https://amparamossoro.org"},{id:"ong-ms-1",name:"Abrigo dos Bichos Campo Grande",city:"Campo Grande",state:"MS",phone:"(67) 99233-4455",whatsapp:"5567992334455",instagram:"abrigodosbichoscg",address:"Bairro Jardim dos Estados, Campo Grande - MS",lat:-20.46,lng:-54.6,shelteredCount:190,services:["Resgate no Pantanal e Capital","Feira de Adoção"],website:"https://abrigodosbichos.org.br"},{id:"ong-mt-1",name:"APA Cuiabá (Associação Protetora dos Animais)",city:"Cuiabá",state:"MT",phone:"(65) 99655-1122",whatsapp:"5565996551122",instagram:"apacuiaba",address:"Av. Historiador Rubens de Mendonça, Cuiabá - MT",lat:-15.59,lng:-56.09,shelteredCount:210,services:["Acolhimento Comunitário","Castração Popular"],website:"https://apacuiaba.org.br"},{id:"ong-pb-1",name:"Haras do Bem João Pessoa",city:"João Pessoa",state:"PB",phone:"(83) 98711-5566",whatsapp:"5583987115566",instagram:"harasdobemjp",address:"Bairro Tambaú, João Pessoa - PB",lat:-7.11,lng:-34.82,shelteredCount:135,services:["Resgate de Cães e Equinos","Reencontros"],website:"https://harasdobem.org"},{id:"ong-pi-1",name:"APIPA Teresina",city:"Teresina",state:"PI",phone:"(86) 99433-2211",whatsapp:"5586994332211",instagram:"apipateresina",address:"Av. Frei Serafim, Teresina - PI",lat:-5.08,lng:-42.8,shelteredCount:180,services:["Abrigo Central de Teresina","Castração"],website:"https://apipapiauí.org.br"},{id:"ong-se-1",name:"Adota Aracaju",city:"Aracaju",state:"SE",phone:"(79) 99877-3322",whatsapp:"5579998773322",instagram:"adotaaracaju",address:"Av. Beira Mar, Aracaju - SE",lat:-10.91,lng:-37.05,shelteredCount:110,services:["Acolhimento e Reagrupamento"],website:"https://adotaaracaju.org"},{id:"ong-to-1",name:"SOS Animais Palmas",city:"Palmas",state:"TO",phone:"(63) 99211-4455",whatsapp:"5563992114455",instagram:"sosanimaispalmas",address:"Plano Diretor Sul, Palmas - TO",lat:-10.24,lng:-48.33,shelteredCount:105,services:["Resgate no Tocantins","Triagem de Perda"],website:"https://sosanimaispalmas.org"}];class ae{constructor(){this.pets=[],this.ongs=ee,this.init()}init(){const o=localStorage.getItem(V);if(o)try{this.pets=JSON.parse(o)}catch{this.pets=_}else this.pets=_,this.save()}save(){localStorage.setItem(V,JSON.stringify(this.pets))}getPets(o={}){return this.pets.filter(a=>{if(o.status&&a.status!==o.status||o.type&&o.type!=="all"&&a.type!==o.type||o.city&&o.city!=="all"&&a.city.toLowerCase()!==o.city.toLowerCase())return!1;if(o.query){const s=o.query.toLowerCase();if(!(a.name.toLowerCase().includes(s)||a.breed.toLowerCase().includes(s)||a.neighborhood.toLowerCase().includes(s)||a.city.toLowerCase().includes(s)||a.description.toLowerCase().includes(s)))return!1}return!0})}getPetById(o){return this.pets.find(a=>a.id===o)}addPet(o){const a={id:"pet-"+Date.now(),date:new Date().toLocaleDateString("pt-BR"),time:new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),urgent:!0,...o};return this.pets.unshift(a),this.save(),a}getStates(){return[...new Set(this.ongs.map(o=>o.state))].sort()}getCitiesByState(o){return!o||o==="all"?[...new Set(this.ongs.map(a=>a.city))].sort():[...new Set(this.ongs.filter(a=>a.state===o).map(a=>a.city))].sort()}getOngs(o="all",a="all",s=""){return this.ongs.filter(t=>{if(o!=="all"&&t.state.toLowerCase()!==o.toLowerCase()||a!=="all"&&t.city.toLowerCase()!==a.toLowerCase())return!1;if(s.trim()!==""){const n=s.toLowerCase();if(!(t.name.toLowerCase().includes(n)||t.city.toLowerCase().includes(n)||t.state.toLowerCase().includes(n)||t.address.toLowerCase().includes(n)||t.instagram&&t.instagram.toLowerCase().includes(n)))return!1}return!0})}getStats(){const o=this.pets.filter(t=>t.status==="lost").length,a=this.pets.filter(t=>t.status==="found").length,s=2450+a;return{totalLost:o,totalFound:a,reunited:s}}}const C=new ae;function Z(e,o,a){var s;const t=C.getStats(),n=C.getPets({status:"lost"}).slice(0,4),m=C.getPets({status:"found"}).slice(0,3);e.innerHTML=`
    <!-- Hero Section -->
    <section class="relative w-full min-h-[75vh] flex items-center justify-center py-16 overflow-hidden bg-surface">
      <!-- Background Graphic Overlay -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1920&q=80" 
             alt="Happy dogs running" 
             class="w-full h-full object-cover opacity-20 mix-blend-luminosity filter blur-[1px]">
        <div class="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
      </div>

      <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Text CTA Column -->
        <div class="lg:col-span-7 flex flex-col gap-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/15 border border-primary-container/30 text-primary text-xs font-semibold w-max">
            <span class="material-symbols-outlined text-sm animate-pulse">radar</span>
            <span>Rede Inteligente de Reagrupamento Familiar</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface leading-[1.15]">
            Trazendo eles de volta para <span class="text-primary-container bg-gradient-to-r from-primary-container to-primary bg-clip-text text-transparent">casa</span>, juntos.
          </h1>

          <p class="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            O Faro é o ponto de encontro oficial em tempo real para quem perdeu ou encontrou um pet. Unimos mapas interativos, notificações comunitárias e parcerias com ONGs para não deixar nenhum animal sozinho.
          </p>

          <!-- Quick Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="#/cadastrar" class="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-bold text-base px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-primary-container/25 flex items-center justify-center gap-3 group active:scale-95">
              <span class="material-symbols-outlined group-hover:scale-110 transition-transform">search</span>
              <span>Perdi um Pet</span>
            </a>
            <a href="#/cadastrar?status=found" class="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-bold text-base px-8 py-4 rounded-full border border-outline-variant/60 transition-all shadow-lg flex items-center justify-center gap-3 group active:scale-95">
              <span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">add_location_alt</span>
              <span>Encontrei um Pet</span>
            </a>
          </div>

          <!-- Quick Live Stats -->
          <div class="grid grid-cols-3 gap-4 pt-6 border-t border-outline-variant/30 text-on-surface-variant max-w-lg">
            <div class="flex flex-col">
              <span class="text-2xl sm:text-3xl font-extrabold text-on-surface">${t.reunited}+</span>
              <span class="text-xs text-on-surface-variant font-medium">Reencontros Feitos</span>
            </div>
            <div class="w-px h-10 bg-outline-variant/30 self-center"></div>
            <div class="flex flex-col">
              <span class="text-2xl sm:text-3xl font-extrabold text-primary">${t.totalLost}</span>
              <span class="text-xs text-on-surface-variant font-medium">Em Busca Ativa</span>
            </div>
          </div>
        </div>

        <!-- Quick Interactive Search Card Column -->
        <div class="lg:col-span-5">
          <div class="bg-surface-container/95 border border-surface-container-highest rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-bold text-on-surface flex items-center gap-2">
                <span class="material-symbols-outlined text-primary">manage_search</span>
                <span>Busca Rápida de Pets</span>
              </h3>
              <span class="text-xs text-primary font-semibold">Em tempo real</span>
            </div>

            <form id="quick-search-form" class="space-y-4">
              <div>
                <label class="block text-xs font-semibold text-on-surface-variant mb-1.5">Status</label>
                <div class="grid grid-cols-2 gap-2 p-1 bg-surface-container-low rounded-xl border border-outline-variant/30">
                  <button type="button" id="qs-btn-lost" class="qs-type-btn py-2 text-xs font-bold rounded-lg bg-primary-container text-on-primary-container shadow-sm transition-all" data-value="lost">Procurando (Perdidos)</button>
                  <button type="button" id="qs-btn-found" class="qs-type-btn py-2 text-xs font-bold rounded-lg text-on-surface-variant hover:text-on-surface transition-all" data-value="found">Avistados (Localizados)</button>
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-on-surface-variant mb-1.5">Espécie</label>
                <select id="qs-type" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                  <option value="all">Todas as espécies (Cães, Gatos, Outros)</option>
                  <option value="dog">Cão</option>
                  <option value="cat">Gato</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold text-on-surface-variant mb-1.5">Cidade / Bairro</label>
                <div class="relative">
                  <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">location_on</span>
                  <input type="text" id="qs-location" placeholder="Ex: São Paulo, Pinheiros..." class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 pl-10 pr-3 text-sm text-on-surface focus:outline-none focus:border-primary placeholder:text-on-surface-variant/60">
                </div>
              </div>

              <button type="submit" class="w-full bg-primary hover:bg-primary/90 text-on-primary font-bold text-sm py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-lg">travel_explore</span>
                <span>Explorar no Mapa e Feed</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Emergency Hotline Ribbon -->
    <section class="bg-gradient-to-r from-error-container via-surface-container-high to-error-container py-4 border-y border-tertiary-container/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3 text-on-surface">
          <div class="w-9 h-9 rounded-full bg-error/20 flex items-center justify-center text-error animate-pulse flex-shrink-0">
            <span class="material-symbols-outlined">campaign</span>
          </div>
          <div>
            <h4 class="font-bold text-sm text-on-surface">Alerta Emergencial Ativo nas últimas 24h</h4>
            <p class="text-xs text-on-surface-variant">2 pets desaparecidos recentemente necessitam de medicação diária urgente.</p>
          </div>
        </div>
        <a href="#/mapa?status=lost" class="bg-error hover:bg-error/90 text-on-error font-bold text-xs px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5 flex-shrink-0">
          <span>Ver Casos Prioritários</span>
          <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
    </section>

    <!-- Urgent Lost Pets Section -->
    <section class="py-16 bg-background">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        <div class="flex items-end justify-between mb-8">
          <div>
            <span class="text-xs uppercase font-bold tracking-widest text-primary">Alertas Comunitários</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight mt-1">Pets Perdidos Recentemente</h2>
          </div>
          <a href="#/mapa?status=lost" class="hidden sm:flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            <span>Ver todos no mapa</span>
            <span class="material-symbols-outlined text-base">chevron_right</span>
          </a>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${n.map(i=>H(i)).join("")}
        </div>
      </div>
    </section>

    <!-- Interactive Map Banner Promo -->
    <section class="py-12 bg-surface-container-low border-y border-surface-container-highest">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-6 space-y-4">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/30 text-secondary text-xs font-semibold">
            <span class="material-symbols-outlined text-sm">map</span>
            <span>Geolocalização Precisa</span>
          </div>
          <h2 class="text-3xl font-bold text-on-surface">Veja os pontos de avistamento no Mapa em Tempo Real</h2>
          <p class="text-sm text-on-surface-variant leading-relaxed">
            Filtre por raio de distância, bairro ou cidade. Nosso sistema calcula automaticamente a zona aproximada de deslocamento do animal.
          </p>
          <a href="#/mapa" class="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-bold text-sm px-6 py-3 rounded-full hover:bg-primary-container/90 transition-all shadow-md">
            <span class="material-symbols-outlined">explore</span>
            <span>Abrir Mapa Interativo</span>
          </a>
        </div>
        <div class="lg:col-span-6">
          <div class="rounded-2xl overflow-hidden border border-outline-variant/40 shadow-2xl relative h-64 sm:h-80 bg-surface-container-high flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80" alt="Map preview" class="w-full h-full object-cover opacity-60">
            <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <a href="#/mapa" class="absolute bg-surface/90 backdrop-blur-md px-5 py-3 rounded-full border border-primary/40 font-bold text-xs text-primary flex items-center gap-2 hover:scale-105 transition-all shadow-xl">
              <span class="material-symbols-outlined animate-bounce">pin_drop</span>
              <span>Clique para abrir mapa ao vivo</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Found Pets Section -->
    <section class="py-16 bg-background">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        <div class="flex items-end justify-between mb-8">
          <div>
            <span class="text-xs uppercase font-bold tracking-widest text-secondary">Acolhimento Temporário</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight mt-1">Pets Avistados Aguardando Tutores</h2>
          </div>
          <a href="#/mapa?status=found" class="hidden sm:flex items-center gap-1 text-sm font-semibold text-secondary hover:underline">
            <span>Ver todos avistados</span>
            <span class="material-symbols-outlined text-base">chevron_right</span>
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          ${m.map(i=>H(i)).join("")}
        </div>
      </div>
    </section>
  `;let c="lost";const x=e.querySelector("#qs-btn-lost"),g=e.querySelector("#qs-btn-found");x==null||x.addEventListener("click",()=>{c="lost",x.className="qs-type-btn py-2 text-xs font-bold rounded-lg bg-primary-container text-on-primary-container shadow-sm transition-all",g.className="qs-type-btn py-2 text-xs font-bold rounded-lg text-on-surface-variant hover:text-on-surface transition-all"}),g==null||g.addEventListener("click",()=>{c="found",g.className="qs-type-btn py-2 text-xs font-bold rounded-lg bg-secondary-container text-on-secondary-container shadow-sm transition-all",x.className="qs-type-btn py-2 text-xs font-bold rounded-lg text-on-surface-variant hover:text-on-surface transition-all"}),(s=e.querySelector("#quick-search-form"))==null||s.addEventListener("submit",i=>{i.preventDefault();const l=e.querySelector("#qs-type").value,b=e.querySelector("#qs-location").value;window.location.hash=`#/mapa?status=${c}&type=${l}&q=${encodeURIComponent(b)}`}),e.querySelectorAll(".pet-card-clickable").forEach(i=>{i.addEventListener("click",()=>{const l=i.getAttribute("data-id");a(l)})})}function H(e){const o=e.status==="lost",a=o?"bg-primary-container text-on-primary-container":"bg-secondary-container text-on-secondary-container",s=o?"PERDIDO":"AVISTADO";return`
    <div data-id="${e.id}" class="pet-card-clickable group bg-surface-container border border-surface-container-highest rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer flex flex-col">
      <!-- Image & Badges -->
      <div class="relative h-48 sm:h-52 w-full overflow-hidden bg-surface-container-high">
        <img src="${e.photo}" alt="${e.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute top-3 left-3 flex gap-2">
          <span class="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${a} shadow-sm">
            ${s}
          </span>
          ${e.reward&&e.reward!=="Sem recompensa"&&e.reward!=="N/A"?`
            <span class="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-500/90 text-white shadow-sm flex items-center gap-1">
              <span class="material-symbols-outlined text-xs">payments</span> ${e.reward}
            </span>
          `:""}
        </div>
        <div class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] text-white font-medium">
          ${e.date}
        </div>
      </div>

      <!-- Content -->
      <div class="p-4 flex-grow flex flex-col justify-between space-y-3">
        <div>
          <div class="flex justify-between items-start mb-1">
            <h3 class="font-bold text-base text-on-surface group-hover:text-primary transition-colors">${e.name}</h3>
            <span class="text-xs text-on-surface-variant font-medium">${e.breed}</span>
          </div>

          <p class="text-xs text-on-surface-variant flex items-center gap-1 font-medium">
            <span class="material-symbols-outlined text-primary text-sm">location_on</span>
            <span>${e.neighborhood}, ${e.city}</span>
          </p>

          <p class="text-xs text-on-surface-variant/80 line-clamp-2 mt-2 leading-relaxed">
            ${e.description}
          </p>
        </div>

        <div class="pt-3 border-t border-outline-variant/20 flex justify-between items-center text-xs">
          <span class="text-on-surface-variant font-medium">Tutor: ${e.contactName}</span>
          <span class="text-primary font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
            Ver detalhes <span class="material-symbols-outlined text-sm">chevron_right</span>
          </span>
        </div>
      </div>
    </div>
  `}const L=window.L;function te(e,o,a){const s=new URLSearchParams(window.location.hash.split("?")[1]);let t=s.get("status")||"all",n=s.get("type")||"all";s.get("city");let m=s.get("q")||"",c="split";e.innerHTML=`
    <div class="py-6 bg-background flex-grow flex flex-col min-h-[calc(100vh-140px)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 w-full space-y-6 flex-grow flex flex-col">
        
        <!-- Header -->
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-surface-container border border-surface-container-highest p-6 rounded-3xl shadow-xl">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/15 text-primary text-xs font-bold mb-2">
              <span class="material-symbols-outlined text-sm">explore</span>
              <span>Central Unificada de Pets & Mapa em Tempo Real</span>
            </div>
            <h1 class="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              Pets Perdidos, Avistados & Mapa
            </h1>
            <p class="text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed max-w-2xl">
              Consulte alertas ativos, filtre por espécie, veja localizações no mapa interativo ou cadastre um animal em busca de reencontro.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <a href="#/cadastrar?status=lost" class="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow-md flex items-center gap-2 active:scale-95">
              <span class="material-symbols-outlined text-base">search</span>
              <span>Cadastrar Perdido</span>
            </a>
            <a href="#/cadastrar?status=found" class="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-full border border-outline-variant/60 transition-all shadow-md flex items-center gap-2 active:scale-95">
              <span class="material-symbols-outlined text-base text-primary">add_location_alt</span>
              <span>Cadastrar Avistado</span>
            </a>
          </div>
        </div>

        <!-- Filter Controls Bar -->
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-4 shadow-lg space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            <!-- Search bar -->
            <div class="md:col-span-4 relative">
              <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-base">search</span>
              <input type="text" id="unified-search" value="${m}" placeholder="Buscar por raça, cor, bairro ou cidade..." class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 pl-9 pr-3 text-xs text-on-surface focus:outline-none focus:border-primary">
            </div>

            <!-- Status selector -->
            <div class="md:col-span-3">
              <div class="grid grid-cols-3 gap-1 p-1 bg-surface-container-low rounded-xl border border-outline-variant/30 text-[11px] font-bold">
                <button class="status-btn py-1.5 rounded-lg text-center transition-all ${t==="all"?"bg-primary-container text-on-primary-container shadow-sm":"text-on-surface-variant hover:text-on-surface"}" data-status="all">Todos</button>
                <button class="status-btn py-1.5 rounded-lg text-center transition-all ${t==="lost"?"bg-primary-container text-on-primary-container shadow-sm":"text-on-surface-variant hover:text-on-surface"}" data-status="lost">Perdidos</button>
                <button class="status-btn py-1.5 rounded-lg text-center transition-all ${t==="found"?"bg-secondary-container text-on-secondary-container shadow-sm":"text-on-surface-variant hover:text-on-surface"}" data-status="found">Avistados</button>
              </div>
            </div>

            <!-- Species select -->
            <div class="md:col-span-2">
              <select id="unified-species" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 px-2.5 text-xs text-on-surface focus:outline-none focus:border-primary">
                <option value="all" ${n==="all"?"selected":""}>Todas Espécies</option>
                <option value="dog" ${n==="dog"?"selected":""}>Cães</option>
                <option value="cat" ${n==="cat"?"selected":""}>Gatos</option>
              </select>
            </div>

            <!-- View Mode Switcher -->
            <div class="md:col-span-3 flex justify-end gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30 text-xs font-semibold">
              <button id="view-split-btn" title="Modo Dividido (Mapa + Cards)" class="view-toggle-btn px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all ${c==="split"?"bg-surface-container-high text-primary shadow-sm font-bold":"text-on-surface-variant"}">
                <span class="material-symbols-outlined text-base">view_column</span>
                <span class="hidden sm:inline">Dividido</span>
              </button>
              <button id="view-map-btn" title="Apenas Mapa" class="view-toggle-btn px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all ${c==="map"?"bg-surface-container-high text-primary shadow-sm font-bold":"text-on-surface-variant"}">
                <span class="material-symbols-outlined text-base">map</span>
                <span class="hidden sm:inline">Mapa</span>
              </button>
              <button id="view-grid-btn" title="Apenas Cards" class="view-toggle-btn px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all ${c==="grid"?"bg-surface-container-high text-primary shadow-sm font-bold":"text-on-surface-variant"}">
                <span class="material-symbols-outlined text-base">grid_view</span>
                <span class="hidden sm:inline">Cards</span>
              </button>
            </div>

          </div>
        </div>

        <!-- Main Display Content (Map + Grid / Split) -->
        <div id="unified-content-area" class="flex-grow flex flex-col lg:flex-row gap-6 min-h-[500px]">
          
          <!-- Leaflet Map Container -->
          <div id="map-wrapper" class="w-full lg:w-1/2 h-[480px] lg:h-auto rounded-3xl overflow-hidden border border-surface-container-highest shadow-2xl relative">
            <div id="leaflet-unified-map" class="w-full h-full z-0"></div>
          </div>

          <!-- Feed Grid Container -->
          <div id="grid-wrapper" class="w-full lg:w-1/2 flex flex-col space-y-4 overflow-y-auto max-h-[700px] pr-1">
            <div class="flex items-center justify-between">
              <span id="pets-counter" class="text-xs font-extrabold text-primary uppercase tracking-wider"></span>
              <span class="text-[11px] text-on-surface-variant">Clique em um card para focar no mapa ou ver detalhes</span>
            </div>
            
            <div id="unified-pets-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Rendered dynamically -->
            </div>
          </div>

        </div>

      </div>
    </div>
  `;const x=e.querySelector("#leaflet-unified-map"),g=L.map(x).setView([-23.5587,-46.6853],12);L.tileLayer("https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"],attribution:"&copy; Google Maps"}).addTo(g);let i=L.layerGroup().addTo(g);function l(){const p=e.querySelector("#map-wrapper"),u=e.querySelector("#grid-wrapper");c==="split"?(p.className="w-full lg:w-1/2 h-[450px] lg:h-auto rounded-3xl overflow-hidden border border-surface-container-highest shadow-2xl relative",u.className="w-full lg:w-1/2 flex flex-col space-y-4 overflow-y-auto max-h-[700px] pr-1",p.style.display="block",u.style.display="flex"):c==="map"?(p.className="w-full h-[650px] rounded-3xl overflow-hidden border border-surface-container-highest shadow-2xl relative",u.style.display="none",p.style.display="block"):c==="grid"&&(u.className="w-full flex flex-col space-y-4",u.querySelector("#unified-pets-grid").className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",p.style.display="none",u.style.display="flex"),setTimeout(()=>{g.invalidateSize()},100)}function b(){i.clearLayers(),m=e.querySelector("#unified-search").value;const p={status:t==="all"?null:t,type:n,query:m},u=C.getPets(p),v=C.getOngs("all","all",m),h=e.querySelector("#pets-counter");h.textContent=`${u.length} Pets Alertas & ${v.length} ONGs Mapeadas`;const y=e.querySelector("#unified-pets-grid");u.length===0?y.innerHTML=`
        <div class="col-span-full py-12 text-center text-on-surface-variant space-y-2 bg-surface-container border border-surface-container-highest rounded-2xl p-6">
          <span class="material-symbols-outlined text-4xl text-outline">search_off</span>
          <p class="text-sm font-bold text-on-surface">Nenhum pet localizado para estes filtros.</p>
          <p class="text-xs">Tente buscar por outros termos ou mudar o status entre Perdidos e Avistados.</p>
        </div>
      `:y.innerHTML=u.map(r=>{const f=r.status==="lost";return`
          <div data-id="${r.id}" class="pet-unified-card group bg-surface-container border border-surface-container-highest hover:border-primary/60 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between">
            <div class="relative h-44 w-full overflow-hidden bg-surface-container-high">
              <img src="${r.photo}" alt="${r.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                <span class="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${f?"bg-primary-container text-on-primary-container":"bg-secondary-container text-on-secondary-container"} shadow-sm">
                  ${f?"PERDIDO":"AVISTADO"}
                </span>
                ${r.reward&&r.reward!=="Sem recompensa"&&r.reward!=="N/A"?`
                  <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500 text-white shadow-sm flex items-center gap-1">
                    <span class="material-symbols-outlined text-[12px]">payments</span> ${r.reward}
                  </span>
                `:""}
              </div>
              <div class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] text-white font-medium">
                ${r.date}
              </div>
            </div>

            <div class="p-4 flex-grow flex flex-col justify-between space-y-2.5">
              <div>
                <div class="flex justify-between items-start">
                  <h3 class="font-bold text-base text-on-surface group-hover:text-primary transition-colors">${r.name}</h3>
                  <span class="text-[11px] text-on-surface-variant font-medium bg-surface-container-high px-2 py-0.5 rounded-md border border-outline-variant/30">${r.breed}</span>
                </div>

                <p class="text-xs text-on-surface-variant flex items-center gap-1 font-medium mt-1">
                  <span class="material-symbols-outlined text-primary text-sm">location_on</span>
                  ${r.neighborhood}, ${r.city} (${r.state})
                </p>

                <p class="text-xs text-on-surface-variant/80 line-clamp-2 mt-1.5 leading-relaxed">
                  ${r.description}
                </p>
              </div>

              <div class="pt-2 border-t border-outline-variant/20 flex gap-2">
                <button class="btn-focus-map flex-1 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-bold text-[11px] py-1.5 rounded-lg border border-outline-variant/40 transition-all flex items-center justify-center gap-1" data-id="${r.id}" data-lat="${r.lat}" data-lng="${r.lng}">
                  <span class="material-symbols-outlined text-xs text-primary">pin_drop</span>
                  <span>Ver no Mapa</span>
                </button>
                <button class="btn-view-details flex-1 bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-bold text-[11px] py-1.5 rounded-lg transition-all flex items-center justify-center gap-1" data-id="${r.id}">
                  <span class="material-symbols-outlined text-xs">visibility</span>
                  <span>Ficha</span>
                </button>
              </div>
            </div>
          </div>
        `}).join("");const w={},A=[];u.forEach(r=>{const f=r.status==="lost",S=f?"#ff8833":"#c8c4db",q=L.divIcon({className:"custom-leaflet-pin",html:`
          <div style="background-color: ${S}; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2.5px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.5); cursor: pointer;">
            <span class="material-symbols-outlined" style="font-size: 20px; color: #13121b;">sound_detection_dog_barking</span>
          </div>
        `,iconSize:[34,34],iconAnchor:[17,17]}),P=L.marker([r.lat,r.lng],{icon:q}).addTo(i);A.push([r.lat,r.lng]),w[r.id]={marker:P,pet:r};const E=`
        <div class="p-1 space-y-2 max-w-xs font-sans text-white">
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${f?"bg-primary-container text-on-primary-container":"bg-secondary-container text-on-secondary-container"}">
              ${f?"Perdido (Última vez visto)":"Avistado (Localizado)"}
            </span>
            <span class="text-xs font-bold text-white">${r.name}</span>
          </div>
          <p class="text-xs text-gray-300"><strong>Endereço / Região:</strong> ${r.location||r.neighborhood+", "+r.city}</p>
          <p class="text-xs text-gray-300"><strong>Data:</strong> ${r.date} às ${r.time}</p>
          <button class="open-modal-from-map bg-primary hover:bg-primary/90 text-on-primary text-xs font-bold py-1.5 px-3 rounded-lg w-full mt-2" data-id="${r.id}">
            Ver detalhes no card
          </button>
        </div>
      `;P.bindPopup(E),P.on("click",()=>{g.setView([r.lat,r.lng],16,{animate:!0}),a(r.id)})});function R(r){const f=w[r];if(c==="grid"&&(c="split",d(),l()),f){g.setView([f.pet.lat,f.pet.lng],16,{animate:!0}),f.marker.openPopup();const S=e.querySelector("#map-wrapper");window.innerWidth<1024&&(S==null||S.scrollIntoView({behavior:"smooth",block:"nearest"}))}a(r)}y.querySelectorAll(".btn-focus-map, .btn-view-details, .pet-unified-card").forEach(r=>{r.addEventListener("click",f=>{const S=r.getAttribute("data-id");R(S)})}),g.on("popupopen",r=>{const f=r.popup._contentNode.querySelector(".open-modal-from-map");f&&f.addEventListener("click",()=>{a(f.getAttribute("data-id"))})}),A.length>0&&setTimeout(()=>{g.fitBounds(A,{padding:[40,40],maxZoom:13})},100)}e.querySelectorAll(".status-btn").forEach(p=>{p.addEventListener("click",()=>{t=p.getAttribute("data-status"),e.querySelectorAll(".status-btn").forEach(u=>{u.className="status-btn py-1.5 rounded-lg text-center transition-all text-on-surface-variant hover:text-on-surface"}),p.className=`status-btn py-1.5 rounded-lg text-center transition-all ${t==="found"?"bg-secondary-container text-on-secondary-container shadow-sm":"bg-primary-container text-on-primary-container shadow-sm"}`,b()})}),e.querySelector("#unified-species").addEventListener("change",p=>{n=p.target.value,b()}),e.querySelector("#unified-search").addEventListener("input",()=>{b()}),e.querySelector("#view-split-btn").addEventListener("click",()=>{c="split",d(),l()}),e.querySelector("#view-map-btn").addEventListener("click",()=>{c="map",d(),l()}),e.querySelector("#view-grid-btn").addEventListener("click",()=>{c="grid",d(),l()});function d(){e.querySelectorAll(".view-toggle-btn").forEach(p=>{p.className="view-toggle-btn px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all text-on-surface-variant"}),c==="split"?e.querySelector("#view-split-btn").className="view-toggle-btn px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all bg-surface-container-high text-primary shadow-sm font-bold":c==="map"?e.querySelector("#view-map-btn").className="view-toggle-btn px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all bg-surface-container-high text-primary shadow-sm font-bold":c==="grid"&&(e.querySelector("#view-grid-btn").className="view-toggle-btn px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all bg-surface-container-high text-primary shadow-sm font-bold")}l(),b()}function se(e,o){var a,s,t,n,m;const c=new URLSearchParams(window.location.hash.split("?")[1]).get("status")==="found"?"found":"lost";e.innerHTML=`
    <div class="py-12 bg-background flex-grow">
      <div class="max-w-6xl mx-auto px-4 sm:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-10">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary">Divulgação Imediata</span>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mt-1">Cadastrar Alerta de Pet</h1>
          <p class="text-sm text-on-surface-variant mt-2 leading-relaxed">
            Preencha os dados detalhados para acionar o alerta na comunidade e gerar o cartaz de buscas automático.
          </p>
        </div>

        <!-- Stepper Indicators -->
        <div class="flex items-center justify-between max-w-xl mx-auto mb-12 relative">
          <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-surface-container-highest -translate-y-1/2 z-0"></div>
          
          <div id="step-pill-1" class="step-pill z-10 flex flex-col items-center gap-1.5">
            <div class="w-10 h-10 rounded-full bg-primary-container text-on-primary-container font-extrabold text-sm flex items-center justify-center shadow-lg">1</div>
            <span class="text-xs font-bold text-primary">Informações do Pet</span>
          </div>

          <div id="step-pill-2" class="step-pill z-10 flex flex-col items-center gap-1.5 opacity-50">
            <div class="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant text-on-surface font-extrabold text-sm flex items-center justify-center">2</div>
            <span class="text-xs font-bold text-on-surface-variant">Local do Desaparecimento</span>
          </div>

          <div id="step-pill-3" class="step-pill z-10 flex flex-col items-center gap-1.5 opacity-50">
            <div class="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant text-on-surface font-extrabold text-sm flex items-center justify-center">3</div>
            <span class="text-xs font-bold text-on-surface-variant">Contato & Tutor</span>
          </div>
        </div>

        <!-- Main Form & Live Card Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Form Steps Column -->
          <div class="lg:col-span-7 bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 shadow-xl">
            <form id="register-pet-form" class="space-y-6">
              
              <!-- STEP 1: PET DETAILS -->
              <div id="form-step-1" class="form-step space-y-5">
                <h3 class="font-bold text-lg text-on-surface border-b border-outline-variant/20 pb-3 flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">pets</span>
                  <span>Passo 1: Tipo & Características</span>
                </h3>

                <!-- Status Selector -->
                <div>
                  <label class="block text-xs font-bold text-on-surface-variant mb-2">Qual é o motivo do cadastro?</label>
                  <div class="grid grid-cols-2 gap-3">
                    <label class="cursor-pointer">
                      <input type="radio" name="status" value="lost" ${c==="lost"?"checked":""} class="peer sr-only">
                      <div class="p-3 text-center rounded-xl border border-outline-variant peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary-container transition-all font-bold text-xs">
                        Perdi meu Pet
                      </div>
                    </label>
                    <label class="cursor-pointer">
                      <input type="radio" name="status" value="found" ${c==="found"?"checked":""} class="peer sr-only">
                      <div class="p-3 text-center rounded-xl border border-outline-variant peer-checked:bg-secondary-container peer-checked:text-on-secondary-container peer-checked:border-secondary-container transition-all font-bold text-xs">
                        Avistei um Pet
                      </div>
                    </label>
                  </div>
                </div>

                <!-- Name & Species -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-on-surface-variant mb-1">Nome do Pet (ou 'Desconhecido')</label>
                    <input type="text" id="input-name" required value="Mel" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-on-surface-variant mb-1">Espécie</label>
                    <select id="input-type" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                      <option value="dog">Cão</option>
                      <option value="cat">Gato</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>
                </div>

                <!-- Breed & Color -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-on-surface-variant mb-1">Raça</label>
                    <input type="text" id="input-breed" value="Shih-Tzu / SRD" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-on-surface-variant mb-1">Cor Predominante</label>
                    <input type="text" id="input-color" value="Branco e Marrom" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                  </div>
                </div>

                <!-- Photo URL -->
                <div>
                  <label class="block text-xs font-semibold text-on-surface-variant mb-1">Link de Foto do Pet (Ou imagem de exemplo)</label>
                  <input type="url" id="input-photo" value="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary placeholder:text-on-surface-variant/50">
                  <span class="text-[11px] text-on-surface-variant/70 mt-1 block">Insira o link direto de uma foto nítida.</span>
                </div>

                <!-- Description -->
                <div>
                  <label class="block text-xs font-semibold text-on-surface-variant mb-1">Descrição / Sinais Particulares</label>
                  <textarea id="input-description" rows="3" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">Usava laçinho vermelho, manca levemente da pata traseira direita. Responde dócil ao chamado.</textarea>
                </div>

                <div class="flex justify-end pt-4">
                  <button type="button" id="btn-next-1" class="bg-primary text-on-primary font-bold text-sm px-6 py-3 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2">
                    <span>Próximo Passo</span>
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>

              <!-- STEP 2: LOCATION -->
              <div id="form-step-2" class="form-step space-y-5 hidden">
                <h3 class="font-bold text-lg text-on-surface border-b border-outline-variant/20 pb-3 flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">location_on</span>
                  <span>Passo 2: Localização Visto pela Última Vez</span>
                </h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-on-surface-variant mb-1">Cidade</label>
                    <input type="text" id="input-city" value="São Paulo" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-on-surface-variant mb-1">Bairro</label>
                    <input type="text" id="input-neighborhood" value="Vila Mariana" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-on-surface-variant mb-1">Endereço / Referência Exata</label>
                  <input type="text" id="input-location" value="Rua Domingos de Morais, próximo à estação Santa Cruz" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                </div>

                <div>
                  <label class="block text-xs font-semibold text-on-surface-variant mb-1">Oferece Recompensa?</label>
                  <input type="text" id="input-reward" value="R$ 500" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary" placeholder="Ex: R$ 500 ou Sem recompensa">
                </div>

                <div class="flex justify-between pt-4">
                  <button type="button" id="btn-back-2" class="bg-surface-container-high text-on-surface font-bold text-sm px-6 py-3 rounded-full hover:bg-surface-variant transition-all">
                    Voltar
                  </button>
                  <button type="button" id="btn-next-2" class="bg-primary text-on-primary font-bold text-sm px-6 py-3 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2">
                    <span>Próximo Passo</span>
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>

              <!-- STEP 3: CONTACT & FINISH -->
              <div id="form-step-3" class="form-step space-y-5 hidden">
                <h3 class="font-bold text-lg text-on-surface border-b border-outline-variant/20 pb-3 flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">contact_phone</span>
                  <span>Passo 3: Seus Dados de Contato</span>
                </h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-on-surface-variant mb-1">Seu Nome Completo</label>
                    <input type="text" id="input-contact-name" value="Renata Vasconcelos" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-on-surface-variant mb-1">Telefone / WhatsApp</label>
                    <input type="text" id="input-contact-phone" value="(11) 99887-1122" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-on-surface-variant mb-1">Número do Microchip (opcional)</label>
                  <input type="text" id="input-microchip" value="Não informado" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                </div>

                <div class="p-4 rounded-2xl bg-primary-container/10 border border-primary-container/30 text-xs text-on-surface space-y-1">
                  <p class="font-bold text-primary flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-sm">verified</span>
                    Ao publicar este alerta:
                  </p>
                  <p class="text-on-surface-variant">Ele será incluído automaticamente no Mapa ao vivo, no Feed de Alertas e notificará a comunidade da região.</p>
                </div>

                <div class="flex justify-between pt-4">
                  <button type="button" id="btn-back-3" class="bg-surface-container-high text-on-surface font-bold text-sm px-6 py-3 rounded-full hover:bg-surface-variant transition-all">
                    Voltar
                  </button>
                  <button type="submit" class="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-sm px-8 py-3.5 rounded-full transition-all shadow-xl flex items-center gap-2">
                    <span class="material-symbols-outlined text-lg">send</span>
                    <span>Publicar Alerta Agora</span>
                  </button>
                </div>
              </div>

            </form>
          </div>

          <!-- Live Preview Card Column -->
          <div class="lg:col-span-5 space-y-4">
            <h4 class="font-bold text-xs uppercase tracking-widest text-on-surface-variant">Pré-visualização em Tempo Real</h4>
            
            <div id="preview-card" class="bg-surface-container border border-surface-container-highest rounded-2xl overflow-hidden shadow-2xl">
              <div class="relative h-60 w-full bg-surface-container-high">
                <img id="prev-img" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover">
                <div class="absolute top-3 left-3 flex gap-2">
                  <span id="prev-badge" class="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary-container text-on-primary-container shadow-md">
                    PERDIDO
                  </span>
                  <span id="prev-reward" class="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-500 text-white shadow-md">
                    R$ 500
                  </span>
                </div>
              </div>
              <div class="p-5 space-y-3">
                <div class="flex justify-between items-start">
                  <h3 id="prev-name" class="font-bold text-xl text-on-surface">Mel</h3>
                  <span id="prev-breed" class="text-xs text-on-surface-variant font-medium">Shih-Tzu / SRD</span>
                </div>
                <p id="prev-loc" class="text-xs text-on-surface-variant flex items-center gap-1 font-medium">
                  <span class="material-symbols-outlined text-primary text-sm">location_on</span>
                  Vila Mariana, São Paulo
                </p>
                <p id="prev-desc" class="text-xs text-on-surface-variant/80 line-clamp-3 leading-relaxed">
                  Usava laçinho vermelho, manca levemente da pata traseira direita. Responde dócil ao chamado.
                </p>
                <div class="pt-3 border-t border-outline-variant/20 flex justify-between items-center text-xs text-on-surface-variant">
                  <span>Tutor: <strong id="prev-contact">Renata Vasconcelos</strong></span>
                  <span id="prev-phone" class="text-primary font-bold">(11) 99887-1122</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  `;let x=1;const g=e.querySelector("#form-step-1"),i=e.querySelector("#form-step-2"),l=e.querySelector("#form-step-3"),b=e.querySelector("#step-pill-1"),d=e.querySelector("#step-pill-2"),p=e.querySelector("#step-pill-3");function u(){g.classList.add("hidden"),i.classList.add("hidden"),l.classList.add("hidden"),b.classList.add("opacity-50"),d.classList.add("opacity-50"),p.classList.add("opacity-50"),x===1?(g.classList.remove("hidden"),b.classList.remove("opacity-50")):x===2?(i.classList.remove("hidden"),d.classList.remove("opacity-50")):x===3&&(l.classList.remove("hidden"),p.classList.remove("opacity-50"))}(a=e.querySelector("#btn-next-1"))==null||a.addEventListener("click",()=>{x=2,u()}),(s=e.querySelector("#btn-next-2"))==null||s.addEventListener("click",()=>{x=3,u()}),(t=e.querySelector("#btn-back-2"))==null||t.addEventListener("click",()=>{x=1,u()}),(n=e.querySelector("#btn-back-3"))==null||n.addEventListener("click",()=>{x=2,u()});const v=()=>{var h,y,w,A,R,r,f,S,q,P;const E=((h=e.querySelector('input[name="status"]:checked'))==null?void 0:h.value)||"lost",B=((y=e.querySelector("#input-name"))==null?void 0:y.value)||"Nome do Pet",z=((w=e.querySelector("#input-breed"))==null?void 0:w.value)||"Raça",N=((A=e.querySelector("#input-photo"))==null?void 0:A.value)||"https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",G=((R=e.querySelector("#input-description"))==null?void 0:R.value)||"",O=((r=e.querySelector("#input-city"))==null?void 0:r.value)||"São Paulo",F=((f=e.querySelector("#input-neighborhood"))==null?void 0:f.value)||"Bairro",I=((S=e.querySelector("#input-reward"))==null?void 0:S.value)||"Sem recompensa",K=((q=e.querySelector("#input-contact-name"))==null?void 0:q.value)||"Seu Nome",Y=((P=e.querySelector("#input-contact-phone"))==null?void 0:P.value)||"",$=e.querySelector("#prev-badge");E==="lost"?($.textContent="PERDIDO",$.className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary-container text-on-primary-container shadow-md"):($.textContent="ENCONTRADO",$.className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container shadow-md"),e.querySelector("#prev-name").textContent=B,e.querySelector("#prev-breed").textContent=z,e.querySelector("#prev-img").src=N,e.querySelector("#prev-desc").textContent=G,e.querySelector("#prev-loc").innerHTML=`<span class="material-symbols-outlined text-primary text-sm">location_on</span> ${F}, ${O}`,e.querySelector("#prev-reward").textContent=I,e.querySelector("#prev-contact").textContent=K,e.querySelector("#prev-phone").textContent=Y};e.querySelectorAll("input, select, textarea").forEach(h=>{h.addEventListener("input",v),h.addEventListener("change",v)}),(m=e.querySelector("#register-pet-form"))==null||m.addEventListener("submit",h=>{var y;h.preventDefault();const w=((y=e.querySelector('input[name="status"]:checked'))==null?void 0:y.value)||"lost",A=e.querySelector("#input-name").value,R=e.querySelector("#input-type").value,r=e.querySelector("#input-breed").value,f=e.querySelector("#input-color").value,S=e.querySelector("#input-photo").value,q=e.querySelector("#input-description").value,P=e.querySelector("#input-city").value,E=e.querySelector("#input-neighborhood").value,B=e.querySelector("#input-location").value,z=e.querySelector("#input-reward").value,N=e.querySelector("#input-contact-name").value,G=e.querySelector("#input-contact-phone").value,O=e.querySelector("#input-microchip").value,F=-23.5505+(Math.random()-.5)*.1,I=-46.6333+(Math.random()-.5)*.1;C.addPet({name:A,type:R,breed:r,color:f,photo:S,description:q,city:P,state:"SP",neighborhood:E,location:B,reward:z,contactName:N,contactPhone:G,microchip:O,status:w,lat:F,lng:I}),o(`Alerta de ${A} cadastrado com sucesso!`,"success"),window.location.hash=w==="lost"?"#/pets-perdidos":"#/pets-encontrados"})}const M=window.L;function oe(e,o){const a=C.getStates();e.innerHTML=`
    <div class="py-10 bg-background flex-grow">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        
        <!-- Header -->
        <div class="max-w-3xl space-y-2">
          <span class="text-xs uppercase font-extrabold tracking-widest text-tertiary px-3 py-1 rounded-full bg-tertiary-container/20 border border-tertiary-container/40">
            Rede Institucional Nacional de Proteção Animal
          </span>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Diretório & Mapa de ONGs do Brasil
          </h1>
          <p class="text-sm text-on-surface-variant leading-relaxed">
            Consulte a localização e os canais diretos (WhatsApp, Instagram, Telefone) de abrigos, institutos e zoonoses por estado e cidade.
          </p>
        </div>

        <!-- Interactive Map Section -->
        <div class="bg-surface-container border border-surface-container-highest rounded-3xl overflow-hidden shadow-2xl space-y-0">
          <div class="p-4 bg-surface-container-high border-b border-surface-container-highest flex items-center justify-between">
            <h3 class="font-bold text-sm text-on-surface flex items-center gap-2">
              <span class="material-symbols-outlined text-tertiary">map</span>
              <span>Mapa Geográfico de ONGs e Abrigos</span>
            </h3>
            <span id="map-ong-count" class="text-xs font-bold text-tertiary bg-tertiary-container/20 px-2.5 py-1 rounded-full border border-tertiary-container/30">
              0 ONGs no mapa
            </span>
          </div>
          <div id="ong-leaflet-map" class="w-full h-80 sm:h-96 bg-surface-container-lowest z-0"></div>
        </div>

        <!-- Filter Bar -->
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-5 shadow-lg space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            
            <!-- Search bar -->
            <div class="sm:col-span-6 relative">
              <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-base">search</span>
              <input type="text" id="ong-search" placeholder="Buscar por nome da ONG, @instagram, bairro ou palavra-chave..." class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 pl-10 pr-3 text-sm text-on-surface focus:outline-none focus:border-primary">
            </div>

            <!-- State Select -->
            <div class="sm:col-span-3">
              <select id="ong-state-select" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                <option value="all">Todos os Estados</option>
                ${a.map(i=>`<option value="${i}">${i}</option>`).join("")}
              </select>
            </div>

            <!-- City Select -->
            <div class="sm:col-span-3">
              <select id="ong-city-select" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                <option value="all">Todas as Cidades</option>
              </select>
            </div>

          </div>
        </div>

        <!-- ONGs Grid Header -->
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-xl text-on-surface">Lista de Organizações Encontradas</h3>
          <span id="ong-grid-counter" class="text-xs text-on-surface-variant font-semibold"></span>
        </div>

        <!-- ONGs Grid -->
        <div id="ongs-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Rendered dynamically -->
        </div>

      </div>
    </div>
  `;let s="all",t="all",n="";const m=M.map(e.querySelector("#ong-leaflet-map")).setView([-14.235,-51.9253],4);M.tileLayer("https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"],attribution:"&copy; Google Maps"}).addTo(m);let c=M.layerGroup().addTo(m);function x(i=!1){const l=e.querySelector("#ong-city-select");if(l)if(s==="all")l.disabled=!0,l.innerHTML='<option value="all">Selecione um Estado primeiro...</option>',l.classList.add("opacity-60","cursor-not-allowed"),t="all";else{l.disabled=!1,l.classList.remove("opacity-60","cursor-not-allowed");const b=C.getCitiesByState(s);if(l.innerHTML='<option value="all">Todas as Cidades de '+s+"</option>"+b.map(d=>`<option value="${d}">${d}</option>`).join(""),t="all",i&&(l.focus(),typeof l.showPicker=="function"))try{l.showPicker()}catch{}}}function g(){c.clearLayers();const i=C.getOngs(s,t,n);e.querySelector("#ong-grid-counter").textContent=`${i.length} ONGs listadas`,e.querySelector("#map-ong-count").textContent=`${i.length} no mapa`;const l=e.querySelector("#ongs-grid");if(i.length===0){l.innerHTML=`
        <div class="col-span-full py-16 text-center text-on-surface-variant space-y-3">
          <span class="material-symbols-outlined text-4xl text-outline">domain_disabled</span>
          <p class="text-base font-bold text-on-surface">Nenhuma ONG encontrada para os filtros selecionados.</p>
          <p class="text-xs">Tente alterar o estado ou pesquisar por termos mais abrangentes.</p>
        </div>
      `;return}l.innerHTML=i.map(d=>re(d)).join("");const b=[];i.forEach(d=>{const p=M.divIcon({className:"custom-leaflet-ong-pin",html:`
          <div style="background-color: #ff8099; width: 34px; height: 34px; border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.5); cursor: pointer;">
            <span class="material-symbols-outlined" style="font-size: 20px; color: white;">domain</span>
          </div>
        `,iconSize:[34,34],iconAnchor:[17,17]}),u=M.marker([d.lat,d.lng],{icon:p}).addTo(c);b.push([d.lat,d.lng]);const v=`
        <div class="p-1 space-y-2 max-w-xs font-sans text-white">
          <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container">
            ${d.city} - ${d.state}
          </span>
          <h4 class="font-bold text-sm text-white mt-1">${d.name}</h4>
          <p class="text-xs text-gray-300">${d.address}</p>
          <div class="flex gap-2 pt-1">
            <a href="https://wa.me/${d.whatsapp}" target="_blank" class="bg-emerald-600 text-white text-[11px] font-bold py-1 px-2.5 rounded-md flex items-center gap-1">
              WhatsApp
            </a>
            ${d.instagram?`
              <a href="https://instagram.com/${d.instagram}" target="_blank" class="bg-pink-600 text-white text-[11px] font-bold py-1 px-2.5 rounded-md flex items-center gap-1">
                @${d.instagram}
              </a>
            `:""}
          </div>
        </div>
      `;u.bindPopup(v)}),b.length>0&&setTimeout(()=>{m.fitBounds(b,{padding:[40,40],maxZoom:13})},100)}e.querySelector("#ong-state-select").addEventListener("change",i=>{s=i.target.value,x(!0),g()}),e.querySelector("#ong-city-select").addEventListener("change",i=>{t=i.target.value,g()}),e.querySelector("#ong-search").addEventListener("input",i=>{n=i.target.value,g()}),x(),g()}function re(e){return`
    <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-4 hover:border-tertiary/40 transition-all">
      <div class="space-y-3">
        <div class="flex items-start justify-between">
          <div>
            <span class="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-tertiary-container/20 text-tertiary border border-tertiary-container/30">
              ${e.city} - ${e.state}
            </span>
            <h3 class="font-bold text-lg text-on-surface mt-2 leading-tight">${e.name}</h3>
          </div>
          <div class="text-right bg-surface-container-high px-2.5 py-1 rounded-xl border border-outline-variant/30 flex-shrink-0">
            <span class="text-base font-extrabold text-primary">${e.shelteredCount}</span>
            <span class="text-[9px] block text-on-surface-variant font-medium">Animais</span>
          </div>
        </div>

        <p class="text-xs text-on-surface-variant flex items-center gap-1.5 font-medium leading-normal">
          <span class="material-symbols-outlined text-primary text-sm flex-shrink-0">domain</span>
          <span>${e.address}</span>
        </p>

        <div>
          <span class="text-[11px] font-bold text-on-surface-variant block mb-1.5">Serviços & Recursos:</span>
          <div class="flex flex-wrap gap-1.5">
            ${e.services.map(o=>`
              <span class="text-[10px] bg-surface-container-high text-on-surface px-2.5 py-1 rounded-lg border border-outline-variant/30 font-medium">
                ${o}
              </span>
            `).join("")}
          </div>
        </div>
      </div>

      <!-- Action Contacts -->
      <div class="pt-4 border-t border-outline-variant/20 flex flex-col gap-2">
        <div class="flex gap-2">
          <a href="tel:${e.phone.replace(/\D/g,"")}" class="flex-1 bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold text-xs py-2 px-2 rounded-xl border border-outline-variant/40 flex items-center justify-center gap-1 transition-all">
            <span class="material-symbols-outlined text-sm">call</span>
            <span>${e.phone}</span>
          </a>
          <a href="https://wa.me/${e.whatsapp}?text=Olá!%20Encontrei%20a%20ONG%20no%20Faro%20e%20gostaria%20de%20ajuda." target="_blank" class="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2 px-2 rounded-xl flex items-center justify-center gap-1 transition-all shadow-sm">
            <span class="material-symbols-outlined text-sm">chat</span>
            <span>WhatsApp</span>
          </a>
        </div>
        
        <div class="flex gap-2">
          ${e.instagram?`
            <a href="https://instagram.com/${e.instagram}" target="_blank" class="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white font-bold text-xs py-2 px-2 rounded-xl flex items-center justify-center gap-1 transition-all shadow-sm">
              <span class="material-symbols-outlined text-sm">photo_camera</span>
              <span>@${e.instagram}</span>
            </a>
          `:""}
          ${e.website?`
            <a href="${e.website}" target="_blank" class="flex-1 bg-surface-container-high hover:bg-surface-variant text-primary font-bold text-xs py-2 px-2 rounded-xl border border-primary/30 flex items-center justify-center gap-1 transition-all">
              <span class="material-symbols-outlined text-sm">language</span>
              <span>Website</span>
            </a>
          `:""}
        </div>
      </div>
    </div>
  `}function ne(e,o){e.innerHTML=`
    <div class="py-12 bg-background flex-grow">
      <div class="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
        
        <!-- Main Header -->
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary-container/15 px-3 py-1 rounded-full border border-primary-container/30">
            Manual Oficial de Resgate & Comportamento Animal
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-on-surface tracking-tight mt-2">
            Guia Completo de Reencontro
          </h1>
          <p class="text-base text-on-surface-variant leading-relaxed">
            Plano tático baseado em psicologia comportamental e métodos científicos validados para a busca e resgate seguro de cães e gatos desaparecidos.
          </p>
        </div>

        <!-- Species Selector Tabs -->
        <div class="flex justify-center border-b border-surface-container-highest pb-4">
          <div class="inline-flex p-1 bg-surface-container rounded-2xl border border-outline-variant/40 shadow-inner">
            <button id="guide-tab-dogs" class="px-6 py-3 rounded-xl font-bold text-sm bg-primary-container text-on-primary-container shadow-md transition-all flex items-center gap-2.5">
              <span class="material-symbols-outlined text-xl">sound_detection_dog_barking</span>
              <span>Guia Completo para Cães</span>
            </button>
            <button id="guide-tab-cats" class="px-6 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2.5">
              <span class="material-symbols-outlined text-xl">cat</span>
              <span>Guia Completo para Gatos</span>
            </button>
            <button id="guide-tab-poster" class="px-6 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2.5">
              <span class="material-symbols-outlined text-xl">print</span>
              <span>Gerador de Cartaz de Busca</span>
            </button>
          </div>
        </div>

        <!-- Guide Content Area -->
        <div id="guide-content" class="space-y-8">
          <!-- Rendered dynamically -->
        </div>

      </div>
    </div>
  `;const a=`
    <div class="space-y-8 animate-fade-in">
      
      <!-- Quick Action Banner -->
      <div class="bg-gradient-to-r from-primary-container/20 via-surface-container-high to-surface-container border border-primary-container/40 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2">
          <div class="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider">
            <span class="material-symbols-outlined text-sm">schedule</span>
            <span>Ação nas primeiras 24 horas</span>
          </div>
          <h2 class="text-2xl font-extrabold text-on-surface">Varredura em Espiral (1 a 3 km)</h2>
          <p class="text-sm text-on-surface-variant max-w-2xl leading-relaxed">
            Cães costumam seguir linhas de cheiro ou buscar abrigo em locais conhecidos em um raio inicial de 1 a 3 km. Fique atento: cães assustados tendem a se esconder sob carros ou arbustos e podem não responder ao chamado logo de cara.
          </p>
        </div>
        <a href="#/cadastrar?status=lost" class="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all flex-shrink-0 flex items-center gap-2">
          <span class="material-symbols-outlined">add_circle</span>
          <span>Cadastrar Alerta Agora</span>
        </a>
      </div>

      <!-- Grid of Steps -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Step 1 -->
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">1</div>
            <h3 class="font-bold text-lg text-on-surface">Ação Imediata & Sinalização</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Caminhe em tom calmo:</strong> Chame o nome do cachorro em tom alegre e amigável. Gritar em desespero pode assustar um animal já desorientado.</li>
            <li><strong class="text-on-surface">Estímulos sonoros e olfativos:</strong> Leve brinquedos ruidosos (squeaky toys), saco de ração para chacoalhar e petiscos de odor forte.</li>
            <li><strong class="text-on-surface">Pessoas em circulação:</strong> Fale com porteiros, entregadores de aplicativo, garis e trabalhadores de obras na rua. Deixe seu WhatsApp.</li>
            <li><strong class="text-on-surface">Câmeras de segurança:</strong> Solicite imagens de portaria e comércios vizinhos para identificar em qual direção o cão dobrou a esquina.</li>
          </ul>
        </div>

        <!-- Step 2 -->
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">2</div>
            <h3 class="font-bold text-lg text-on-surface">Técnica dos "Caminhos de Cheiro"</h3>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Estratégia afetiva de atração olfativa recomendada por especialistas em resgate:
          </p>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li>Pegue peças de roupas usadas (camisetas suadas sem lavar) do tutor com quem o cão tem maior afinidade.</li>
            <li>Corte as roupas em tiras e arraste-as no chão fazendo caminhos radiais partindo dos pontos onde ele foi visto até a porta de sua casa.</li>
            <li>Deixe a cama do pet e um pote de água na entrada de casa. Evite colocar comida para não atrair animais de rua rivais.</li>
          </ul>
        </div>

        <!-- Step 3 -->
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">3</div>
            <h3 class="font-bold text-lg text-on-surface">Cartazes & Redes Sociais</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Cartazes de alto impacto:</strong> Afixe cartazes coloridos com foto nítida e telefone visível em pet shops, veterinárias, padarias e pontos de ônibus.</li>
            <li><strong class="text-on-surface">Dica visual:</strong> Use fitas fluorescentes ou bordas amarelas para destacar o cartaz na calçada.</li>
            <li><strong class="text-on-surface">Grupos de bairro:</strong> Compartilhe em grupos locais do Facebook, WhatsApp e redes do bairro.</li>
          </ul>
        </div>

        <!-- Step 4 -->
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-extrabold flex items-center justify-center text-lg shadow-md">4</div>
            <h3 class="font-bold text-lg text-on-surface">Zoonoses e ONGs Parceiras</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li>Visite presencialmente clínicas veterinárias 24 horas da região — cães resgatados feridos costumam ser deixados por terceiros.</li>
            <li>Consulte o <a href="#/ongs" class="text-primary underline">Diretório de ONGs do Faro</a> para checar se ele deu entrada em algum abrigo cadastrado.</li>
            <li>Notifique o Centro de Controle de Zoonoses municipal.</li>
          </ul>
        </div>

      </div>
    </div>
  `,s=`
    <div class="space-y-8 animate-fade-in">
      
      <!-- Quick Action Banner -->
      <div class="bg-gradient-to-r from-secondary-container/30 via-surface-container-high to-surface-container border border-secondary-container/40 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2">
          <div class="inline-flex items-center gap-1.5 text-secondary text-xs font-bold uppercase tracking-wider">
            <span class="material-symbols-outlined text-sm">visibility</span>
            <span>Comportamento Felino de Fuga</span>
          </div>
          <h2 class="text-2xl font-extrabold text-on-surface">90% dos Gatos Estão a Menos de 50 metros</h2>
          <p class="text-sm text-on-surface-variant max-w-2xl leading-relaxed">
            Gatos domésticos aterrorizados não correm para longe; eles entram em estado de "congelamento" e escondem-se em locais apertados no raio imediato de casa (jardins vizinhos, vãos de garagem, motores).
          </p>
        </div>
        <a href="#/cadastrar?status=lost" class="bg-secondary-container hover:bg-secondary-container/90 text-on-secondary-container font-extrabold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all flex-shrink-0 flex items-center gap-2">
          <span class="material-symbols-outlined">add_circle</span>
          <span>Cadastrar Gato Perdido</span>
        </a>
      </div>

      <!-- Interactive Sound Player Tool -->
      <div class="bg-surface-container border border-tertiary-container/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-tertiary">volume_up</span>
            <span>Gerador de Sons para Atrair Felinos</span>
          </h3>
          <span class="text-xs text-tertiary font-semibold">Reproduza durante a busca noturna</span>
        </div>
        <p class="text-xs text-on-surface-variant leading-relaxed">
          Tocar sons familiares de miados amigáveis de filhotes ou sachês mexendo estimula o gato a vocalizar ou sair do estado de choque.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <button id="play-sound-meow" class="bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold text-xs p-4 rounded-2xl border border-outline-variant/40 flex items-center justify-center gap-3 transition-all">
            <span class="material-symbols-outlined text-primary text-xl">play_circle</span>
            <span>Miado Calmo de Filhote</span>
          </button>
          <button id="play-sound-food" class="bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold text-xs p-4 rounded-2xl border border-outline-variant/40 flex items-center justify-center gap-3 transition-all">
            <span class="material-symbols-outlined text-primary text-xl">play_circle</span>
            <span>Som de Luta / Chocalho de Ração</span>
          </button>
          <button id="play-sound-purr" class="bg-surface-container-high hover:bg-surface-variant text-on-surface font-bold text-xs p-4 rounded-2xl border border-outline-variant/40 flex items-center justify-center gap-3 transition-all">
            <span class="material-symbols-outlined text-primary text-xl">play_circle</span>
            <span>Ronronar Suave</span>
          </button>
        </div>
      </div>

      <!-- Grid of Steps for Cats -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">1</div>
            <h3 class="font-bold text-lg text-on-surface">Varredura Interna & Garagens Vizinhas</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Dentro de casa:</strong> Verifique fundo de armários, parte traseira de geladeiras, dentro de sofás e sótãos antes de concluir a fuga.</li>
            <li><strong class="text-on-surface">Peça licença aos vizinhos:</strong> Peça para VOCÊ inspecionar os garagens, depósitos e quintais deles. Gatos assustados não saem ao chamado de estranhos.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">2</div>
            <h3 class="font-bold text-lg text-on-surface">Estação de Odor & Alimentação</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li><strong class="text-on-surface">Caixa de areia usada:</strong> Coloque a caixa de areia não limpa na varanda ou entrada. É a bússola olfativa mais eficiente para gatos.</li>
            <li><strong class="text-on-surface">Comida de aroma intenso:</strong> Aqueça ligeiramente um sachê de peixe/atum para potencializar o aroma no ar noturno.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">3</div>
            <h3 class="font-bold text-lg text-on-surface">Busca Noturna Silenciosa (02h às 05h)</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li>O barulho do tráfego diurno aavorora felinos. O momento certo para buscar é de madrugada, quando as ruas estão silenciosas.</li>
            <li>Use uma lanterna forte apontando rente ao chão e sob vãos. O reflexo prateado/esverdeado dos olhos do gato no escuro denunciará o esconderijo.</li>
          </ul>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-2xl p-6 space-y-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold flex items-center justify-center text-lg shadow-md">4</div>
            <h3 class="font-bold text-lg text-on-surface">Resgate Suave sem Pânico</h3>
          </div>
          <ul class="text-xs text-on-surface-variant space-y-2.5 list-disc list-inside leading-relaxed">
            <li>Quando avistá-lo, não corra para agarrá-lo. Ele pode surtar de pânico e fugir para mais longe.</li>
            <li>Sente-se no chão, evite contato visual direto prolongado e ofereça comida devagar até que ele reconheça sua voz e cheiro.</li>
          </ul>
        </div>

      </div>
    </div>
  `,t=`
    <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-fade-in">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-outline-variant/20 pb-4">
        <div>
          <h2 class="text-2xl font-bold text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">print</span>
            <span>Gerador de Cartaz de Busca Impresso</span>
          </h2>
          <p class="text-xs text-on-surface-variant mt-1">Gere um cartaz padronizado pronto para imprimir ou compartilhar em grupos de WhatsApp.</p>
        </div>
        <button id="btn-print-poster" class="bg-primary text-on-primary font-bold text-xs px-6 py-3 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md">
          <span class="material-symbols-outlined text-base">print</span>
          <span>Imprimir / Salvar PDF</span>
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Controls -->
        <div class="lg:col-span-5 space-y-4">
          <div>
            <label class="block text-xs font-bold text-on-surface-variant mb-1">Título do Cartaz</label>
            <input type="text" id="poster-title" value="PROCURA-SE" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 px-3 text-sm text-on-surface font-bold uppercase">
          </div>
          <div>
            <label class="block text-xs font-bold text-on-surface-variant mb-1">Nome do Pet</label>
            <input type="text" id="poster-name" value="Thor" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 px-3 text-sm text-on-surface font-bold">
          </div>
          <div>
            <label class="block text-xs font-bold text-on-surface-variant mb-1">Recompensa</label>
            <input type="text" id="poster-reward" value="RECOMPENSA: R$ 1.500" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 px-3 text-sm text-on-surface font-bold text-emerald-400">
          </div>
          <div>
            <label class="block text-xs font-bold text-on-surface-variant mb-1">Telefone Principal (Destaque)</label>
            <input type="text" id="poster-phone" value="(11) 98765-4321" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 px-3 text-sm text-on-surface font-bold">
          </div>
          <div>
            <label class="block text-xs font-bold text-on-surface-variant mb-1">Local & Bairro</label>
            <input type="text" id="poster-loc" value="Desaparecido em Pinheiros / Vila Madalena - SP" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 px-3 text-sm text-on-surface">
          </div>
          <div>
            <label class="block text-xs font-bold text-on-surface-variant mb-1">URL da Foto</label>
            <input type="url" id="poster-photo" value="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2 px-3 text-xs text-on-surface">
          </div>
        </div>

        <!-- Printable Live Preview Canvas -->
        <div class="lg:col-span-7 flex justify-center">
          <div id="printable-poster-area" class="w-full max-w-sm bg-yellow-400 text-black p-6 rounded-xl border-4 border-black shadow-2xl font-sans text-center space-y-4 select-none">
            <h1 id="p-render-title" class="text-3xl font-black uppercase tracking-tight bg-black text-yellow-400 py-2 rounded-md">PROCURA-SE</h1>
            <div class="h-56 w-full rounded-md border-2 border-black overflow-hidden bg-white">
              <img id="p-render-img" src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover">
            </div>
            <div>
              <h2 id="p-render-name" class="text-3xl font-black tracking-tight uppercase">THOR</h2>
              <p id="p-render-loc" class="text-xs font-bold leading-tight mt-1">Desaparecido em Pinheiros / Vila Madalena - SP</p>
            </div>
            <div id="p-render-reward" class="bg-red-600 text-white font-black text-sm py-1.5 px-3 rounded-md uppercase tracking-wide">
              RECOMPENSA: R$ 1.500
            </div>
            <div class="border-t-2 border-black pt-2">
              <span class="text-[10px] uppercase font-bold block">Ligue ou envie mensagem urgente:</span>
              <p id="p-render-phone" class="text-2xl font-black tracking-tight text-black mt-0.5">(11) 98765-4321</p>
            </div>
            <span class="text-[9px] font-semibold opacity-80 block">Cadastrado na Rede Faro • faro.com.br</span>
          </div>
        </div>

      </div>
    </div>
  `,n=e.querySelector("#guide-content");n.innerHTML=a;const m=e.querySelector("#guide-tab-dogs"),c=e.querySelector("#guide-tab-cats"),x=e.querySelector("#guide-tab-poster");m.addEventListener("click",()=>{m.className="px-6 py-3 rounded-xl font-bold text-sm bg-primary-container text-on-primary-container shadow-md transition-all flex items-center gap-2.5",c.className="px-6 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2.5",x.className="px-6 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2.5",n.innerHTML=a}),c.addEventListener("click",()=>{c.className="px-6 py-3 rounded-xl font-bold text-sm bg-secondary-container text-on-secondary-container shadow-md transition-all flex items-center gap-2.5",m.className="px-6 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2.5",x.className="px-6 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2.5",n.innerHTML=s,g()}),x.addEventListener("click",()=>{x.className="px-6 py-3 rounded-xl font-bold text-sm bg-tertiary-container text-on-tertiary-container shadow-md transition-all flex items-center gap-2.5",m.className="px-6 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2.5",c.className="px-6 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2.5",n.innerHTML=t,i()});function g(){var l,b,d;const p=u=>{o(`Tocando som atrativo felino: ${u}`,"info");try{const v=new(window.AudioContext||window.webkitAudioContext),h=v.createOscillator(),y=v.createGain();h.type="sine",h.frequency.setValueAtTime(u==="meow"?650:350,v.currentTime),h.frequency.exponentialRampToValueAtTime(u==="meow"?450:700,v.currentTime+.6),y.gain.setValueAtTime(.3,v.currentTime),y.gain.exponentialRampToValueAtTime(.01,v.currentTime+.6),h.connect(y),y.connect(v.destination),h.start(),h.stop(v.currentTime+.6)}catch{}};(l=e.querySelector("#play-sound-meow"))==null||l.addEventListener("click",()=>p("meow")),(b=e.querySelector("#play-sound-food"))==null||b.addEventListener("click",()=>p("food")),(d=e.querySelector("#play-sound-purr"))==null||d.addEventListener("click",()=>p("purr"))}function i(){var l;const b=e.querySelector("#poster-title"),d=e.querySelector("#poster-name"),p=e.querySelector("#poster-reward"),u=e.querySelector("#poster-phone"),v=e.querySelector("#poster-loc"),h=e.querySelector("#poster-photo"),y=()=>{e.querySelector("#p-render-title").textContent=b.value,e.querySelector("#p-render-name").textContent=d.value,e.querySelector("#p-render-reward").textContent=p.value,e.querySelector("#p-render-phone").textContent=u.value,e.querySelector("#p-render-loc").textContent=v.value,e.querySelector("#p-render-img").src=h.value};[b,d,p,u,v,h].forEach(w=>{w==null||w.addEventListener("input",y)}),(l=e.querySelector("#btn-print-poster"))==null||l.addEventListener("click",()=>{window.print()})}}function ie(e){const o=[{id:"art-1",title:"Caminhos de Cheiro: Uma Estratégia Afetiva para Reencontrar Seu Cachorro",category:"Táticas de Busca",date:"05 de Agosto de 2026",readTime:"4 min de leitura",image:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",summary:"Entenda como utilizar peças de vestuário usadas do tutor para criar rastros olfativos radiais que orientam o cão de volta à sua residência.",content:`
        <p>O olfato de um cão é aproximadamente 40 vezes mais potente do que o humano. Quando um cachorro se perde em um ambiente urbano barulhento, os estímulos visuais e auditivos causam sobrecarga sensorial, mas o cheiro familiar do seu tutor é um farol inconfundível.</p>
        <h4 class="font-bold text-base text-on-surface mt-4 mb-2">Passo a Passo da Estratégia:</h4>
        <ol class="list-decimal list-inside space-y-2 text-xs text-on-surface-variant leading-relaxed">
          <li><strong>Selecione a peça ideal:</strong> Use uma camiseta ou moletom usado durante um treino ou dia inteiro, sem lavar. O suor retém feromônios individuais marcantes.</li>
          <li><strong>Traçado em Estrela:</strong> Parta dos locais onde o animal foi visto pela última vez e caminhe vagarosamente em direção à sua casa, arrastando o tecido no pavimento da calçada.</li>
          <li><strong>Estação final:</strong> Deixe a roupa dobrada perto do portão com uma tigela de água limpa.</li>
        </ol>
      `},{id:"art-2",title:"Gatos Assustados: Entenda o Comportamento de Fobia Pós-Fuga",category:"Psicologia Felina",date:"02 de Agosto de 2026",readTime:"6 min de leitura",image:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",summary:"Diferente dos cães, felinos entram em estado de catatonia de medo. Saiba como identificar seus esconderijos em um raio de 50 metros.",content:`
        <p>Quando um gato doméstico escapa por uma porta ou janela, a resposta imediata do seu sistema nervoso é a paralisia e o isolamento. Ele procurará o local mais escuro, apertado e de difícil acesso na vizinhança imediata.</p>
        <h4 class="font-bold text-base text-on-surface mt-4 mb-2">Por que as buscas diurnas falham?</h4>
        <p class="text-xs text-on-surface-variant leading-relaxed mb-3">Durante o dia, o movimento de pedestres e barulho de motores faz com que o gato permaneça em silêncio absoluto, mesmo quando seu nome é chamado pelo tutor amado.</p>
        <p class="text-xs text-on-surface-variant leading-relaxed">A chave do reencontro felino é a <strong>Busca Noturna Silenciosa entre 02h e 04h da manhã</strong>, equipada com uma lanterna tática apontada para vãos baixos para captar o reflexo ocular.</p>
      `},{id:"art-3",title:"Como Fazer Cartazes Eficazes para Pets Desaparecidos e Onde Afixá-los",category:"Divulgação",date:"28 de Julho de 2026",readTime:"5 min de leitura",image:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",summary:"Cartazes poludos e ilegíveis são ignorados por motoristas. Veja as regras visuais para criar um aviso que converte avistamentos em ligações.",content:`
        <p>Um bom cartaz de busca precisa ser lido e compreendido em 3 segundos por um motorista a 40 km/h ou por um pedestre caminhando apressado.</p>
        <h4 class="font-bold text-base text-on-surface mt-4 mb-2">3 Regras de Ouro:</h4>
        <ul class="list-disc list-inside space-y-2 text-xs text-on-surface-variant leading-relaxed">
          <li><strong>Contraste Extremo:</strong> Fundo amarelo com letras pretas grandes (Wordmark "PROCURA-SE").</li>
          <li><strong>Foto Única Focalizada:</strong> Evite colagens. Use a melhor foto onde o rosto e porte do pet estejam nítidos.</li>
          <li><strong>Telefone Gigante:</strong> O número de contato deve ocupar pelo menos 25% da área total do cartaz.</li>
        </ul>
      `}];e.innerHTML=`
    <div class="py-12 bg-background flex-grow">
      <div class="max-w-6xl mx-auto px-4 sm:px-8 space-y-10">
        
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary px-3 py-1 rounded-full bg-primary-container/15 border border-primary-container/30">
            Faro Informativos & Artigos
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-on-surface tracking-tight mt-2">
            Base de Conhecimento em Resgate
          </h1>
          <p class="text-sm text-on-surface-variant leading-relaxed">
            Artigos técnicos, dicas comportamentais e orientações de utilidade pública para tutores e protetores de animais.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${o.map(a=>`
            <article class="bg-surface-container border border-surface-container-highest rounded-3xl overflow-hidden shadow-xl hover:border-primary/40 transition-all flex flex-col justify-between">
              <div>
                <div class="h-48 w-full overflow-hidden bg-surface-container-high relative">
                  <img src="${a.image}" alt="${a.title}" class="w-full h-full object-cover">
                  <span class="absolute top-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                    ${a.category}
                  </span>
                </div>

                <div class="p-6 space-y-3">
                  <div class="flex items-center justify-between text-[11px] text-on-surface-variant">
                    <span>${a.date}</span>
                    <span>${a.readTime}</span>
                  </div>

                  <h3 class="font-bold text-lg text-on-surface leading-snug">${a.title}</h3>
                  <p class="text-xs text-on-surface-variant leading-relaxed line-clamp-3">${a.summary}</p>
                </div>
              </div>

              <div class="p-6 pt-0">
                <button class="read-article-btn w-full bg-surface-container-high hover:bg-surface-variant text-primary font-bold text-xs py-3 rounded-xl border border-outline-variant/30 flex items-center justify-center gap-1.5 transition-all" data-id="${a.id}">
                  <span>Ler Artigo Completo</span>
                  <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </article>
          `).join("")}
        </div>

      </div>
    </div>
  `,e.querySelectorAll(".read-article-btn").forEach(a=>{a.addEventListener("click",()=>{const s=o.find(n=>n.id===a.getAttribute("data-id"));if(!s)return;const t=document.createElement("div");t.className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto",t.innerHTML=`
        <div class="bg-surface-container border border-surface-container-highest rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-4 relative my-8 shadow-2xl">
          <button id="close-art-modal" class="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface">
            <span class="material-symbols-outlined">close</span>
          </button>
          <span class="text-xs font-bold uppercase text-primary">${s.category} • ${s.readTime}</span>
          <h2 class="text-2xl font-extrabold text-on-surface">${s.title}</h2>
          <div class="text-sm text-on-surface leading-relaxed border-t border-outline-variant/20 pt-4">
            ${s.content}
          </div>
        </div>
      `,document.body.appendChild(t),t.querySelector("#close-art-modal").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})})})}function le(e,o){var a;e.innerHTML=`
    <div class="py-12 bg-background flex-grow">
      <div class="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        
        <div class="text-center max-w-2xl mx-auto">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary">Suporte & Comunidade</span>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mt-1">Fale Conosco</h1>
          <p class="text-sm text-on-surface-variant mt-2 leading-relaxed">
            Dúvidas sobre o funcionamento da rede Faro, parcerias com veterinárias ou relatos de uso? Envie sua mensagem.
          </p>
        </div>

        <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-10 shadow-xl">
          <form id="contact-form" class="space-y-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-on-surface-variant mb-1">Seu Nome</label>
                <input type="text" required placeholder="Ex: Ana Souza" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
              </div>
              <div>
                <label class="block text-xs font-semibold text-on-surface-variant mb-1">Seu E-mail</label>
                <input type="email" required placeholder="ana@exemplo.com" class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-on-surface-variant mb-1">Assunto</label>
              <select class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary">
                <option>Apoio na busca de pet perdido</option>
                <option>Cadastro de ONG / Clínica Veterinária</option>
                <option>Reportar erro no mapa</option>
                <option>Outros assuntos</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-on-surface-variant mb-1">Mensagem</label>
              <textarea rows="5" required placeholder="Escreva aqui os detalhes..." class="w-full bg-surface-container-high border border-outline-variant rounded-xl py-2.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary"></textarea>
            </div>

            <button type="submit" class="w-full bg-primary hover:bg-primary/90 text-on-primary font-bold text-sm py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-lg">send</span>
              <span>Enviar Mensagem</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  `,(a=e.querySelector("#contact-form"))==null||a.addEventListener("submit",s=>{s.preventDefault(),o("Mensagem enviada com sucesso! Nossa equipe responderá em breve.","success"),e.querySelector("#contact-form").reset()})}function de(e,o){var a;e.innerHTML=`
    <div class="py-10 bg-background flex-grow">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        <!-- Hero Section -->
        <div class="text-center max-w-2xl mx-auto space-y-4">
          <span class="text-xs uppercase font-extrabold tracking-widest text-primary px-3 py-1 rounded-full bg-primary-container/20 border border-primary-container/40">
            Rede Colaborativa de Proteção
          </span>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Como você quer ajudar hoje?
          </h1>
          <p class="text-sm text-on-surface-variant leading-relaxed">
            Seu apoio é fundamental. Cada ação aproxima um pet perdido de sua família. Escolha a melhor forma de fazer parte dessa rede de cuidado.
          </p>
        </div>

        <!-- Bento Grid Layout for Options -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- Option 1: PIX Donation -->
          <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center space-y-6 relative overflow-hidden group shadow-xl">
            <div class="w-20 h-20 rounded-full bg-primary-container/20 flex items-center justify-center relative z-10 text-primary border border-primary-container/30">
              <span class="material-symbols-outlined text-4xl">volunteer_activism</span>
            </div>
            <div class="space-y-2 relative z-10">
              <h2 class="text-2xl font-bold text-on-surface">Fazer uma doação via PIX</h2>
              <p class="text-xs text-on-surface-variant max-w-md leading-relaxed">
                Contribua para manter nossa plataforma funcionando gratuitamente e ajudar a financiar resgates de emergência em áreas de risco.
              </p>
            </div>
            
            <div class="w-full max-w-sm bg-surface-container-high rounded-2xl p-6 flex flex-col items-center space-y-4 relative z-10 border border-outline-variant/30 shadow-inner">
              <div class="w-44 h-44 bg-white p-3 rounded-xl shadow-md flex items-center justify-center">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=00020126580014BR.GOV.BCB.PIX0136faro-pet-recovery%40faro.org.br520400005303986540510.005802BR5922Faro%20Pet%20Recovery6009Sao%20Paulo62070503***6304E21A" alt="QR Code PIX Faro" class="w-full h-full object-contain">
              </div>
              <div class="w-full">
                <label class="block text-xs font-bold text-on-surface-variant mb-1 text-left">Chave PIX (E-mail CNPJ)</label>
                <div class="flex items-center gap-2">
                  <input id="pix-key-input" class="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl py-2 px-3 text-on-surface font-mono text-xs text-center focus:outline-none" readonly type="text" value="doacoes@faro-petrecovery.org.br">
                </div>
              </div>
              <button id="btn-copy-pix" class="w-full bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-xs py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all">
                <span class="material-symbols-outlined text-sm">content_copy</span>
                <span>Copiar Chave PIX</span>
              </button>
            </div>
          </div>

          <!-- Option 2: Boost Ad -->
          <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center space-y-6 relative overflow-hidden group shadow-xl">
            <div class="w-20 h-20 rounded-full bg-secondary-container/20 flex items-center justify-center relative z-10 text-secondary border border-secondary-container/30">
              <span class="material-symbols-outlined text-4xl">campaign</span>
            </div>
            <div class="space-y-2 relative z-10">
              <h2 class="text-2xl font-bold text-on-surface">Impulsionar um anúncio</h2>
              <p class="text-xs text-on-surface-variant max-w-md leading-relaxed">
                Aumente o alcance de um cartaz de pet perdido na sua região enviando alertas direcionados num raio de até 5km.
              </p>
            </div>

            <div class="w-full max-w-sm bg-surface-container-high rounded-2xl p-6 flex flex-col items-center space-y-4 relative z-10 border border-outline-variant/30 shadow-inner">
              <div class="relative w-full h-40 bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 flex items-center justify-center">
                <div class="absolute inset-0 bg-cover bg-center opacity-30" style="background-image: url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80')"></div>
                <div class="absolute w-12 h-12 bg-primary-container rounded-full opacity-30 animate-ping"></div>
                <div class="absolute w-4 h-4 bg-primary-container rounded-full border-2 border-white shadow-md z-10"></div>
                <div class="absolute bottom-2 left-2 right-2 bg-surface-container/90 backdrop-blur-md rounded-lg p-2 text-left flex items-center gap-2.5 shadow-sm border border-outline-variant/30">
                  <span class="material-symbols-outlined text-primary text-base">radar</span>
                  <div>
                    <p class="text-xs font-bold text-on-surface">Alcance Geográfico Raio 5km</p>
                    <p class="text-[10px] text-on-surface-variant">Disparo direto para celulares locais</p>
                  </div>
                </div>
              </div>

              <a href="#/pets-perdidos" class="w-full bg-secondary-container hover:bg-secondary-container/90 text-on-secondary-container font-extrabold text-xs py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all">
                <span class="material-symbols-outlined text-sm">rocket_launch</span>
                <span>Escolher Pet para Impulsionar</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Impact Explanation -->
        <div class="bg-surface-container border border-surface-container-highest rounded-3xl p-8 sm:p-12 text-center space-y-8 shadow-2xl">
          <h3 class="text-2xl font-bold text-on-surface">O impacto da sua ajuda comunitária</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="flex flex-col items-center space-y-3 p-4 bg-surface-container-high/40 rounded-2xl border border-outline-variant/20">
              <span class="material-symbols-outlined text-3xl text-primary">speed</span>
              <h4 class="font-bold text-base text-on-surface">Ação Rápida nas 24h</h4>
              <p class="text-xs text-on-surface-variant leading-relaxed">Recursos imediatos permitem buscas e alertas nas primeiras 24h cruciais.</p>
            </div>
            <div class="flex flex-col items-center space-y-3 p-4 bg-surface-container-high/40 rounded-2xl border border-outline-variant/20">
              <span class="material-symbols-outlined text-3xl text-primary">visibility</span>
              <h4 class="font-bold text-base text-on-surface">Maior Alcance Geográfico</h4>
              <p class="text-xs text-on-surface-variant leading-relaxed">Anúncios impulsionados chegam aos celulares das pessoas exatas da área do sumiço.</p>
            </div>
            <div class="flex flex-col items-center space-y-3 p-4 bg-surface-container-high/40 rounded-2xl border border-outline-variant/20">
              <span class="material-symbols-outlined text-3xl text-primary">favorite</span>
              <h4 class="font-bold text-base text-on-surface">Apoio Emocional aos Tutores</h4>
              <p class="text-xs text-on-surface-variant leading-relaxed">Sua contribuição sustenta a infraestrutura da rede de suporte ao tutor em crise.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,(a=e.querySelector("#btn-copy-pix"))==null||a.addEventListener("click",()=>{const s=e.querySelector("#pix-key-input");navigator.clipboard.writeText(s.value),o("Chave PIX copiada para a área de transferência!","success")})}const ce=document.getElementById("app"),pe=document.getElementById("toast-container"),T=document.getElementById("emergency-modal"),U=document.getElementById("btn-emergency"),J=document.getElementById("close-emergency-modal"),Q=document.getElementById("mobile-menu-toggle"),j=document.getElementById("mobile-menu"),W=document.getElementById("theme-toggle"),k=document.getElementById("theme-icon");function ue(){(localStorage.getItem("faro_theme")||"dark")==="dark"?(document.documentElement.classList.add("dark"),k&&(k.textContent="light_mode")):(document.documentElement.classList.remove("dark"),k&&(k.textContent="dark_mode"))}W==null||W.addEventListener("click",()=>{document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("faro_theme","light"),k&&(k.textContent="dark_mode"),D("Modo Claro ativado (Design System Quicksand/Inter)","info")):(document.documentElement.classList.add("dark"),localStorage.setItem("faro_theme","dark"),k&&(k.textContent="light_mode"),D("Modo Escuro ativado (Design System Dark Faro)","info"))});const me={"/":Z,"/mapa":te,"/cadastrar":se,"/pets-perdidos":(e,o,a)=>{window.location.hash="#/mapa?status=lost"},"/pets-encontrados":(e,o,a)=>{window.location.hash="#/mapa?status=found"},"/ongs":oe,"/guia":ne,"/ajudar":de,"/informativos":ie,"/fale-conosco":le};function X(){const e=(window.location.hash||"#/").split("?")[0].replace("#","")||"/";document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(a=>{a.getAttribute("data-route")===e?(a.classList.add("text-primary","font-bold"),a.classList.remove("text-on-surface-variant")):(a.classList.remove("text-primary","font-bold"),a.classList.add("text-on-surface-variant"))}),j==null||j.classList.add("hidden");const o=me[e]||Z;window.scrollTo({top:0,behavior:"smooth"}),o(ce,D,xe)}window.addEventListener("hashchange",X);window.addEventListener("DOMContentLoaded",()=>{ue(),X()});Q==null||Q.addEventListener("click",()=>{j==null||j.classList.toggle("hidden")});U==null||U.addEventListener("click",()=>{T==null||T.classList.remove("hidden")});J==null||J.addEventListener("click",()=>{T==null||T.classList.add("hidden")});function D(e,o="info"){const a=document.createElement("div"),s=o==="success"?"bg-emerald-600 text-white":"bg-surface-container-high border border-primary/40 text-on-surface";a.className=`toast-enter pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl ${s} text-xs font-bold max-w-sm`,a.innerHTML=`
    <span class="material-symbols-outlined text-base">${o==="success"?"check_circle":"info"}</span>
    <span>${e}</span>
  `,pe.appendChild(a),setTimeout(()=>{a.remove()},4e3)}function xe(e){var o;const a=C.getPetById(e);if(!a)return;document.querySelectorAll(".floating-pet-detail-card").forEach(m=>m.remove());const s=document.createElement("div");s.className="floating-pet-detail-card fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 max-w-lg w-[calc(100%-2rem)] sm:w-full max-h-[82vh] overflow-y-auto bg-surface-container/95 border border-surface-container-highest rounded-3xl shadow-2xl backdrop-blur-xl animate-fade-in p-5 space-y-4";const t=a.status==="lost",n=t?"bg-primary-container text-on-primary-container":"bg-secondary-container text-on-secondary-container";s.innerHTML=`
    <div class="flex justify-between items-center border-b border-surface-container-highest pb-3">
      <div class="flex items-center gap-2">
        <span class="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${n} shadow-sm">
          ${t?"PERDIDO":"AVISTADO"}
        </span>
        ${a.reward&&a.reward!=="Sem recompensa"&&a.reward!=="N/A"?`
          <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500 text-white shadow-sm flex items-center gap-1">
            <span class="material-symbols-outlined text-xs">payments</span> ${a.reward}
          </span>
        `:""}
      </div>
      <button id="close-pet-card" class="w-8 h-8 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-all">
        <span class="material-symbols-outlined text-base">close</span>
      </button>
    </div>

    <div class="flex gap-4 items-start">
      <img src="${a.photo}" alt="${a.name}" class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover flex-shrink-0 border border-outline-variant/30 shadow-md">
      <div class="space-y-1 flex-grow">
        <h2 class="text-xl font-extrabold text-on-surface leading-tight">${a.name}</h2>
        <p class="text-xs text-on-surface-variant font-medium">${a.breed} • ${a.gender} • ${a.color}</p>
        <div class="text-[11px] text-on-surface-variant flex items-center gap-1 pt-1">
          <span class="material-symbols-outlined text-primary text-xs">location_on</span>
          <span>${a.neighborhood}, ${a.city} (${a.state})</span>
        </div>
        <span class="inline-block text-[10px] text-on-surface-variant font-semibold bg-surface-container-high px-2 py-0.5 rounded-md mt-1 border border-outline-variant/30">
          Avistado em ${a.date} (${a.time})
        </span>
      </div>
    </div>

    <div class="space-y-1">
      <h4 class="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Descrição & Detalhes</h4>
      <p class="text-xs text-on-surface leading-relaxed bg-surface-container-low p-3 rounded-xl border border-outline-variant/20 max-h-28 overflow-y-auto">
        ${a.description}
      </p>
    </div>

    <div class="grid grid-cols-2 gap-2 text-[11px] bg-surface-container-high p-3 rounded-xl border border-outline-variant/30">
      <div><span class="text-on-surface-variant">Responsável:</span> <strong class="block text-on-surface text-xs mt-0.5">${a.contactName}</strong></div>
      <div><span class="text-on-surface-variant">Microchip:</span> <strong class="block text-on-surface text-xs mt-0.5">${a.microchip||"Não informado"}</strong></div>
    </div>

    <div class="pt-1 flex gap-2">
      <a href="tel:${a.contactPhone.replace(/\D/g,"")}" class="flex-1 bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all">
        <span class="material-symbols-outlined text-sm">call</span>
        <span>Ligar</span>
      </a>
      <a href="https://wa.me/55${a.contactPhone.replace(/\D/g,"")}?text=Olá%20${encodeURIComponent(a.contactName)},%20vi%20o%20alerta%20do%20pet%20${encodeURIComponent(a.name)}%20no%20Faro!" target="_blank" class="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all">
        <span class="material-symbols-outlined text-sm">chat</span>
        <span>WhatsApp</span>
      </a>
    </div>
  `,document.body.appendChild(s),(o=s.querySelector("#close-pet-card"))==null||o.addEventListener("click",()=>{s.remove()})}
