const PASS_COUNTRY = [
  { label: 'Россия', code: 'RU' },
  { label: 'Австралия', code: 'AUS' },
  { label: 'Абхазия', code: 'ABH' },
  { label: 'Австрия', code: 'AUT' },
  { label: 'Азербайджан', code: 'AZE' },
  { label: 'Албания', code: 'ALB' },
  { label: 'Алжир', code: 'DZA' },
  { label: 'Ангилья', code: 'AIA' },
  { label: 'Ангола', code: 'AGO' },
  { label: 'Андорра', code: 'AND' },
  { label: 'Антарктика', code: 'ATA' },
  { label: 'Антигуа и Барбуда', code: 'ATG' },
  { label: 'Аргентина', code: 'ARG' },
  { label: 'Армения', code: 'ARM' },
  { label: 'Аруба', code: 'ABW' },
  { label: 'Афганистан', code: 'AFG' },
  { label: 'Багамские Острова', code: 'BHS' },
  { label: 'Бангладеш', code: 'BGD' },
  { label: 'Барбадос', code: 'BRB' },
  { label: 'Бахрейн', code: 'BHR' },
  { label: 'Белиз', code: 'BLZ' },
  { label: 'Белоруссия', code: 'BLR' },
  { label: 'Бельгия', code: 'BEL' },
  { label: 'Бенин', code: 'BEN' },
  { label: 'Бермудские острова', code: 'BMU' },
  { label: 'Болгария', code: 'BGR' },
  { label: 'Боливия', code: 'BOL' },
  { label: 'Бонайре, Саба и Синт-Эстатиус', code: 'BES' },
  { label: 'Босния и Герцеговина', code: 'BIH' },
  { label: 'Ботсвана', code: 'BWA' },
  { label: 'Бразилия', code: 'BRA' },
  { label: 'Британская Вирджиния', code: 'VGB' },
  { label: 'Британская территория в Индийском океане', code: 'IOT' },
  { label: 'Бруней', code: 'BRN' },
  { label: 'Буркина Фасо', code: 'BFA' },
  { label: 'Бурунди', code: 'BDI' },
  { label: 'Бутан', code: 'BTN' },
  { label: 'Вануату', code: 'VUT' },
  { label: 'Ватикан', code: 'VAT' },
  { label: 'Великобритания', code: 'GBR' },
  { label: 'Венгрия', code: 'HUN' },
  { label: 'Венесуэла', code: 'VEN' },
  { label: 'Вирджинские острова', code: 'VIR' },
  { label: 'Вознесения Остров', code: 'ASC' },
  { label: 'Вьетнам', code: 'VNM' },
  { label: 'Габон', code: 'GAB' },
  { label: 'Гаити', code: 'HTI' },
  { label: 'Гайана', code: 'GUY' },
  { label: 'Гамбия', code: 'GMB' },
  { label: 'Гана', code: 'GHA' },
  { label: 'Гваделупа', code: 'GLP' },
  { label: 'Гватемала', code: 'GTM' },
  { label: 'Гвинея', code: 'GIN' },
  { label: 'Гвинея-Бисау', code: 'GNB' },
  { label: 'Германия', code: 'DEU' },
  { label: 'Гернси остров', code: 'GGY' },
  { label: 'Гибралтар', code: 'GIB' },
  { label: 'Гондурас', code: 'HND' },
  { label: 'Гонконг', code: 'HKG' },
  { label: 'Гренада', code: 'GRD' },
  { label: 'Гренландия', code: 'GRL' },
  { label: 'Греция', code: 'GRC' },
  { label: 'Грузия', code: 'GEO' },
  { label: 'Гуам', code: 'GUM' },
  { label: 'Дания', code: 'DNK' },
  { label: 'Джибути', code: 'DJI' },
  { label: 'Доминика', code: 'DMA' },
  { label: 'Доминиканская Республика', code: 'DOM' },
  { label: 'Египет', code: 'EGY' },
  { label: 'Замбия', code: 'ZMB' },
  { label: 'Зимбабве', code: 'ZWE' },
  { label: 'Израиль', code: 'ISR' },
  { label: 'Индия', code: 'IND' },
  { label: 'Индонезия', code: 'IDN' },
  { label: 'Иордания', code: 'JOR' },
  { label: 'Ирак', code: 'IRQ' },
  { label: 'Иран', code: 'IRN' },
  { label: 'Ирландия', code: 'IRL' },
  { label: 'Исландия', code: 'ISL' },
  { label: 'Испания', code: 'ESP' },
  { label: 'Италия', code: 'ITA' },
  { label: 'Йемен', code: 'YEM' },
  { label: 'Кабо-Верде', code: 'CPV' },
  { label: 'Казахстан', code: 'KAZ' },
  { label: 'Каймановы острова', code: 'CYM' },
  { label: 'Камбоджа', code: 'KHM' },
  { label: 'Камерун', code: 'CMR' },
  { label: 'Канада', code: 'CAN' },
  { label: 'Катар', code: 'QAT' },
  { label: 'Кения', code: 'KEN' },
  { label: 'Кипр', code: 'CYP' },
  { label: 'Киргизия', code: 'KGZ' },
  { label: 'Кирибати', code: 'KIR' },
  { label: 'Китай', code: 'CHN' },
  { label: 'Кокосовые острова', code: 'CCK' },
  { label: 'Колумбия', code: 'COL' },
  { label: 'Коморские острова', code: 'COM' },
  { label: 'Конго-Киншаса', code: 'COD' },
  { label: 'Корейская Народно-Демократическая Республика', code: 'PRK' },
  { label: 'Корея Южная', code: 'KOR' },
  { label: 'Коста-Рика', code: 'CRI' },
  { label: 'Кот-д-Ивуар', code: 'CIV' },
  { label: 'Куба', code: 'CUB' },
  { label: 'Кувейт', code: 'KWT' },
  { label: 'Кюрасао', code: 'CUW' },
  { label: 'Лаос', code: 'LAO' },
  { label: 'Латвия', code: 'LVA' },
  { label: 'Лесото', code: 'LSO' },
  { label: 'Либерия', code: 'LBR' },
  { label: 'Ливан', code: 'LBN' },
  { label: 'Ливия', code: 'LBY' },
  { label: 'Литва', code: 'LTU' },
  { label: 'Лихтенштейн', code: 'LIE' },
  { label: 'Люксембург', code: 'LUX' },
  { label: 'Маврикий', code: 'MUS' },
  { label: 'Мавритания', code: 'MRT' },
  { label: 'Мадагаскар', code: 'MDG' },
  { label: 'Майотта', code: 'MYT' },
  { label: 'Макао', code: 'MAC' },
  { label: 'Македония', code: 'MKD' },
  { label: 'Малави', code: 'MWI' },
  { label: 'Малайзия', code: 'MYS' },
  { label: 'Мали', code: 'MLI' },
  { label: 'Мальдивские острова', code: 'MDV' },
  { label: 'Мальта', code: 'MLT' },
  { label: 'Марокко', code: 'MAR' },
  { label: 'Мартиника остров', code: 'MTQ' },
  { label: 'Маршалловы острова', code: 'MHL' },
  { label: 'Мексика', code: 'MEX' },
  { label: 'Микронезия', code: 'FSM' },
  { label: 'Мозамбик', code: 'MOZ' },
  { label: 'Молдавия', code: 'MDA' },
  { label: 'Монако', code: 'MCO' },
  { label: 'Монголия', code: 'MNG' },
  { label: 'Монтсеррат', code: 'MSR' },
  { label: 'Мьянма', code: 'MMR' },
  { label: 'Намибия', code: 'NAM' },
  { label: 'Науру', code: 'NRU' },
  { label: 'Непал', code: 'NPL' },
  { label: 'Нигер', code: 'NER' },
  { label: 'Нигерия', code: 'NGA' },
  { label: 'Нидерланды', code: 'NLD' },
  { label: 'Никарагуа', code: 'NIC' },
  { label: 'Ниуэ остров', code: 'NIU' },
  { label: 'Новая Зеландия', code: 'NZL' },
  { label: 'Новая Каледония', code: 'NCL' },
  { label: 'Норвегия', code: 'NOR' },
  { label: 'Норфолк (остров)', code: 'NFK' },
  { label: 'Объединенные Арабские Эмираты', code: 'ARE' },
  { label: 'Оман', code: 'OMN' },
  { label: 'Остров Святой Елены', code: 'SHN' },
  { label: 'Острова Кука', code: 'COK' },
  { label: 'Острова Мидуэй и Уэйк', code: 'UMI' },
  { label: 'Острова Самоа', code: 'WSM' },
  { label: 'Острова Самоа (США)', code: 'ASM' },
  { label: 'Острова Свалбард и Ян-Майена', code: 'SJM' },
  { label: 'Пакистан', code: 'PAK' },
  { label: 'Палау', code: 'PLW' },
  { label: 'Палестинские Территории', code: 'PSE' },
  { label: 'Панама', code: 'PAN' },
  { label: 'Папуа — Новая Гвинея', code: 'PNG' },
  { label: 'Парагвай', code: 'PRY' },
  { label: 'Перу', code: 'PER' },
  { label: 'Польская Народная Республика', code: 'POL' },
  { label: 'Португалия', code: 'PRT' },
  { label: 'Пуэрто-Рико', code: 'PRI' },
  { label: 'Республика Конго', code: 'COG' },
  { label: 'Реюньон', code: 'REU' },
  { label: 'Рождества остров', code: 'CXR' },
  { label: 'Россия', code: 'RUS' },
  { label: 'Руанда', code: 'RWA' },
  { label: 'Румыния', code: 'ROU' },
  { label: 'Сальвадор', code: 'SLV' },
  { label: 'Сан-Марино', code: 'SMR' },
  { label: 'Сан-Томе и Принсипи', code: 'STP' },
  { label: 'Саудовская Аравия', code: 'SAU' },
  { label: 'Свазиленд', code: 'SWZ' },
  { label: 'Северные Марианские острова', code: 'MNP' },
  { label: 'Сейшельские Острова', code: 'SYC' },
  { label: 'Сен-Бартелеми', code: 'BLM' },
  { label: 'Сен-Мартен', code: 'MAF' },
  { label: 'Сен-Пьер и Микелон', code: 'SPM' },
  { label: 'Сенегал', code: 'SEN' },
  { label: 'Сент-Винсент и Гренадины', code: 'VCT' },
  { label: 'Сент-Китс и Невис', code: 'KNA' },
  { label: 'Сент-Люсия', code: 'LCA' },
  { label: 'Сербия', code: 'SRB' },
  { label: 'Сингапур', code: 'SGP' },
  { label: 'Синт-Мартен', code: 'SXM' },
  { label: 'Сирийская Арабская Республика', code: 'SYR' },
  { label: 'Словакия', code: 'SVK' },
  { label: 'Словения', code: 'SVN' },
  { label: 'Соединенные Штаты Америки', code: 'USA' },
  { label: 'Соломоновы Острова', code: 'SLB' },
  { label: 'Сомали', code: 'SOM' },
  { label: 'Судан', code: 'SDN' },
  { label: 'Суринам', code: 'SUR' },
  { label: 'Сьерра-Леоне', code: 'SLE' },
  { label: 'Таджикистан', code: 'TJK' },
  { label: 'Таиланд', code: 'THA' },
  { label: 'Тайвань', code: 'TWN' },
  { label: 'Танзания', code: 'TZA' },
  { label: 'Тёркс и Кайкос Острова', code: 'TCA' },
  { label: 'Тимор-Лесте', code: 'TLS' },
  { label: 'Того', code: 'TGO' },
  { label: 'Токелау', code: 'TKL' },
  { label: 'Тонга', code: 'TON' },
  { label: 'Тринидад и Тобаго', code: 'TTO' },
  { label: 'Тувалу', code: 'TUV' },
  { label: 'Тунис', code: 'TUN' },
  { label: 'Туркменистан', code: 'TKM' },
  { label: 'Турция', code: 'TUR' },
  { label: 'Уганда', code: 'UGA' },
  { label: 'Узбекистан', code: 'UZB' },
  { label: 'Украина', code: 'UKR' },
  { label: 'Уоллис и Футуна острова', code: 'WLF' },
  { label: 'Уругвай', code: 'URY' },
  { label: 'Фарерские острова', code: 'FRO' },
  { label: 'Фиджи', code: 'FJI' },
  { label: 'Филиппины', code: 'PHL' },
  { label: 'Финляндия', code: 'FIN' },
  { label: 'Фолклендские острова', code: 'FLK' },
  { label: 'Франция', code: 'FRA' },
  { label: 'Французская Гвиана', code: 'GUF' },
  { label: 'Французская Полинезия', code: 'PYF' },
  { label: 'Французские Южные Территории', code: 'ATF' },
  { label: 'Херд и Макдональдовы Острова', code: 'HMD' },
  { label: 'Хорватия', code: 'HRV' },
  { label: 'Центральноафриканская Республика', code: 'CAF' },
  { label: 'Чад', code: 'TCD' },
  { label: 'Черногория', code: 'MNE' },
  { label: 'Чехия', code: 'CZE' },
  { label: 'Чили', code: 'CHL' },
  { label: 'Швейцария', code: 'CHE' },
  { label: 'Швеция', code: 'SWE' },
  { label: 'Шри-Ланка', code: 'LKA' },
  { label: 'Эквадор', code: 'ECU' },
  { label: 'Экваториальная Гвинея', code: 'GNQ' },
  { label: 'Эритрея', code: 'ERI' },
  { label: 'Эстония', code: 'EST' },
  { label: 'Эфиопия', code: 'ETH' },
  { label: 'Южная Джорджия и Южные Сандвичевы острова', code: 'SGS' },
  { label: 'Южная Осетия', code: 'OST' },
  { label: 'Южно-Африканская Республика', code: 'ZAF' },
  { label: 'Южный Судан', code: 'SSD' },
  { label: 'Ямайка', code: 'JAM' },
  { label: 'Япония', code: 'JPN' },
];

export default PASS_COUNTRY;
