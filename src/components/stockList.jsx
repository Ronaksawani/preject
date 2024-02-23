const stockList = [
  {
    name: "JSW Energy Limited",
    symbol: "JSWENERGY",
  },
  {
    name: "Godrej Properties Limited",
    symbol: "GODREJPROP",
  },
  {
    name: "Jubilant Foodworks Limited",
    symbol: "JUBLFOOD",
  },
  {
    name: "D B REALTY LIMITED",
    symbol: "DBREALTY",
  },
  {
    name: "MAN INFRACONSTRUCTION LIMITED",
    symbol: "MANINFRA",
  },
  {
    name: "Persistent Systems Limited",
    symbol: "PERSISTENT",
  },
  {
    name: "SJVN LIMITED",
    symbol: "SJVN",
  },
  {
    name: "BAJAJ CONSUMER CARE LIMITED",
    symbol: "BAJAJCON",
  },
  {
    name: "Gujarat Pipavav Port Limited",
    symbol: "GPPL",
  },
  {
    name: "VA Tech Wabag Limited",
    symbol: "WABAG",
  },
  {
    name: "Ashoka Buildcon Limited",
    symbol: "ASHOKA",
  },
  {
    name: "JUPITER WAGONS LIMITED",
    symbol: "JWL",
  },
  {
    name: "OBEROI REALTY LIMITED",
    symbol: "OBEROIRLTY",
  },
  {
    name: "Prestige Estates Projects Limited",
    symbol: "PRESTIGE",
  },
  {
    name: "Coal India Limited",
    symbol: "COALINDIA",
  },
  {
    name: "GRAVITA INDIA LIMITED",
    symbol: "GRAVITA",
  },
  {
    name: "MOIL Limited",
    symbol: "MOIL",
  },
  {
    name: "Kirloskar Oil Engines Limited",
    symbol: "KIRLOSENG",
  },
  {
    name: "Texmaco Rail & Engineering Limited",
    symbol: "TEXRAIL",
  },
  {
    name: "Fineotex Chemical Limited",
    symbol: "FCL",
  },
  {
    name: "MUTHOOT FINANCE LIMITED",
    symbol: "MUTHOOTFIN",
  },
  {
    name: "L&T FINANCE HOLDINGS LIMITED",
    symbol: "L&TFH",
  },
  {
    name: "TD Power Systems Ltd",
    symbol: "TDPOWERSYS",
  },
  {
    name: "ALEMBIC PHARMACEUTICALS LIMITED",
    symbol: "APLLTD",
  },
  {
    name: "PG Electroplast Limited",
    symbol: "PGEL",
  },
  {
    name: "Triveni Turbine Limited",
    symbol: "TRITURBINE",
  },
  {
    name: "APL Apollo Tubes Limited",
    symbol: "APLAPOLLO",
  },
  {
    name: "RHI MAGNESITA INDIA LIMITED",
    symbol: "RHIM",
  },
  {
    name: "Multi Commodity Exchange of India Ltd",
    symbol: "MCX",
  },
  {
    name: "SCHNEIDER ELECTRIC INFRASTRUCTURE LIMITED",
    symbol: "SCHNEIDER",
  },
  {
    name: "NBCC (India) Limited",
    symbol: "NBCC",
  },
  {
    name: "RATTANINDIA ENTERPRISES LIMITED",
    symbol: "RTNINDIA",
  },
  {
    name: "JTL INDUSTRIES LIMITED",
    symbol: "JTLIND",
  },
  {
    name: "Cigniti Technologies Ltd",
    symbol: "CIGNITITEC",
  },
  {
    name: "CARE Ratings Limited",
    symbol: "CARERATING",
  },
  {
    name: "INDUS TOWERS LIMITED",
    symbol: "INDUSTOWER",
  },
  {
    name: "V-Mart Retail Limited",
    symbol: "VMART",
  },
  {
    name: "SBI Mutual Fund",
    symbol: "SBISENSEX",
  },
  {
    name: "Repco Home Finance Limited",
    symbol: "REPCOHOME",
  },
  {
    name: "Just Dial Limited",
    symbol: "JUSTDIAL",
  },
  {
    name: "ORIENT CEMENT LIMITED",
    symbol: "ORIENTCEM",
  },
  {
    name: "Aditya Birla Fashion and Retail Limited",
    symbol: "ABFRL",
  },
  {
    name: "INDIABULLS HOUSING FINANCE LIMITED",
    symbol: "IBULHSGFIN",
  },
  {
    name: "Nippon India Mutual Fund",
    symbol: "CPSEETF",
  },
  {
    name: "Wonderla Holidays Limited",
    symbol: "WONDERLA",
  },
  {
    name: "Sharda Cropchem Limited",
    symbol: "SHARDACROP",
  },
  {
    name: "Nippon India Mutual Fund",
    symbol: "SENSEXBEES",
  },

  {
    name: "Gail (India) Ltd.",
    symbol: "GAIL",
  },
  {
    name: "Vaibhav Global Ltd",
    symbol: "VAIBHAVGBL",
  },
  {
    name: "JK Paper Ltd.",
    symbol: "JKPAPER",
  },
  {
    name: "Saregama India Ltd.",
    symbol: "SAREGAMA",
  },
  {
    name: "ICICI Bank Ltd.",
    symbol: "ICICIBANK",
  },
  {
    name: "Cyient Limited",
    symbol: "CYIENT",
  },
  {
    name: "Engineers India Ltd.",
    symbol: "ENGINERSIN",
  },
  {
    name: "Gujarat Mineral Development Corpora",
    symbol: "GMDCLTD",
  },
  {
    name: "IndusInd Bank Ltd.",
    symbol: "INDUSINDBK",
  },
  {
    name: "Jammu and Kashmir Bank Ltd.",
    symbol: "J&KBANK",
  },
  {
    name: "City Union Bank Ltd",
    symbol: "CUB",
  },
  {
    name: "AXIS Bank Ltd.",
    symbol: "AXISBANK",
  },
  {
    name: "South Indian Bank Ltd.",
    symbol: "SOUTHBANK",
  },
  {
    name: "Sonata Software Ltd.",
    symbol: "SONATSOFTW",
  },
  {
    name: "National Aluminium Co. Ltd.,",
    symbol: "NATIONALUM",
  },
  {
    name: "Apar Industries Ltd",
    symbol: "APARINDS",
  },
  {
    name: "HCL Technologies Ltd",
    symbol: "HCLTECH",
  },
  {
    name: "Jindal Steel & Power Ltd",
    symbol: "JINDALSTEL",
  },
  {
    name: "Glenmark Pharmaceuticals ltd",
    symbol: "GLENMARK",
  },
  {
    name: "Wockhardt Ltd",
    symbol: "WOCKPHARMA",
  },
  {
    name: "Mahindra Lifespace Developers Ltd.",
    symbol: "MAHLIFE",
  },
  {
    name: "Zydus Lifesciences Limited",
    symbol: "ZYDUSLIFE",
  },
  {
    name: "Ajanta Pharma Ltd.",
    symbol: "AJANTPHARM",
  },
  {
    name: "TVS Motor Company Ltd.",
    symbol: "TVSMOTOR",
  },
  {
    name: "Subex  Ltd",
    symbol: "SUBEXLTD",
  },
  {
    name: "Transport Corporation of India Ltd",
    symbol: "TCI",
  },
  {
    name: "Triveni Engineering & Industries Ltd",
    symbol: "TRIVENI",
  },
  {
    name: "Tata Teleservices (Maharashtra) Ltd.",
    symbol: "TTML",
  },
  {
    name: "Sterlite Technologies Limited.",
    symbol: "STLTECH",
  },
  {
    name: "Indian Overseas Bank",
    symbol: "IOB",
  },
  {
    name: "BIRLASOFT LIMITED",
    symbol: "BSOFT",
  },
  {
    name: "Godrej Consumer Products Ltd.",
    symbol: "GODREJCP",
  },
  {
    name: "United Spirits Limited",
    symbol: "UNITDSPR",
  },
  {
    name: "OLECTRA GREENTECH LIMITED",
    symbol: "OLECTRA",
  },
  {
    name: "Cera Sanitaryware Ltd.",
    symbol: "CERA",
  },
  {
    name: "Bharti Airtel  Ltd.",
    symbol: "BHARTIARTL",
  },
  {
    name: "Punjab National Bank",
    symbol: "PNB",
  },
  {
    name: "Oracle Financial Services Software Limited",
    symbol: "OFSS",
  },
  {
    name: "Kama Holdings Limited",
    symbol: "KAMAHOLD",
  },
  {
    name: "Aptech Ltd.",
    symbol: "APTECHT",
  },
  {
    name: "Union Bank of India",
    symbol: "UNIONBANK",
  },
  {
    name: "United Breweries Ltd.",
    symbol: "UBL",
  },
  {
    name: "Granules India Ltd.",
    symbol: "GRANULES",
  },
  {
    name: "Canara Bank",
    symbol: "CANBK",
  },
  {
    name: "Divi's Laboratories Ltd.",
    symbol: "DIVISLAB",
  },
  {
    name: "Astra Microwave Products Ltd.",
    symbol: "ASTRAMICRO",
  },
  {
    name: "Radico Khaitan Ltd.",
    symbol: "RADICO",
  },
  {
    name: "Maruti Suzuki India  Ltd.",
    symbol: "MARUTI",
  },
  {
    name: "Navin Fluorine International Limited",
    symbol: "NAVINFLUOR",
  },
  {
    name: "UCO Bank",
    symbol: "UCOBANK",
  },
  {
    name: "Jindal Stainless Limited",
    symbol: "JSL",
  },
  {
    name: "Suprajit Engineering Ltd.",
    symbol: "SUPRAJIT",
  },
  {
    name: "Indraprashtha Gas Ltd.",
    symbol: "IGL",
  },
  {
    name: "PETRONET LNG LTD.",
    symbol: "PETRONET",
  },
  {
    name: "Biocon Ltd.",
    symbol: "BIOCON",
  },
  {
    name: "PTC India Ltd",
    symbol: "PTC",
  },
  {
    name: "Bank of maharashtra",
    symbol: "MAHABANK",
  },
  {
    name: "ramkrishna forgings Ltd.",
    symbol: "RKFORGE",
  },
  {
    name: "Datamatics Global Services Limited",
    symbol: "DATAMATICS",
  },
  {
    name: "STRIDES PHARMA SCIENCE LIMITED",
    symbol: "STAR",
  },
  {
    name: "Jaiprakash Associates Limited",
    symbol: "JPASSOCIAT",
  },
  {
    name: "UltraTech Cement Ltd",
    symbol: "ULTRACEMCO",
  },
  {
    name: "UNO Minda Limited",
    symbol: "UNOMINDA",
  },
  {
    name: "Tata Consultancy Services Ltd.",
    symbol: "TCS",
  },
  {
    name: "COFORGE LIMITED",
    symbol: "COFORGE",
  },
  {
    name: "Century Plyboards (India) Ltd.",
    symbol: "CENTURYPLY",
  },
  {
    name: "Welspun Enterprises Limited",
    symbol: "WELENT",
  },
  {
    name: "NTPC Limited",
    symbol: "NTPC",
  },
  {
    name: "JBM Auto Limited",
    symbol: "JBMA",
  },
  {
    name: "Dwarikesh Sugar Industries Ltd.",
    symbol: "DWARKESH",
  },
  {
    name: "Indoco Remedies Ltd.",
    symbol: "INDOCO",
  },
  {
    name: "Jaiprakash Power Ventures Limited",
    symbol: "JPPOWER",
  },
  {
    name: "Gokaldas Exports Ltd",
    symbol: "GOKEX",
  },
  {
    name: "IIFL FINANCE LIMITED",
    symbol: "IIFL",
  },
  {
    name: "Shoppers Stop Ltd",
    symbol: "SHOPERSTOP",
  },
  {
    name: "J.K. CEMENT LTD",
    symbol: "JKCEMENT",
  },
  {
    name: "Yes Bank Ltd.",
    symbol: "YESBANK",
  },
  {
    name: "Karnataka Bank Ltd.",
    symbol: "KTKBANK",
  },
  {
    name: "IDFC LIMITED",
    symbol: "IDFC",
  },
  {
    name: "SUZLON ENERGY LTD.",
    symbol: "SUZLON",
  },
  {
    name: "Shree Renuka Sugars Ltd.",
    symbol: "RENUKA",
  },
  {
    name: "AIA Engineering Ltd.",
    symbol: "AIAENG",
  },
  {
    name: "PVR INOX LIMITED",
    symbol: "PVRINOX",
  },
  {
    name: "Gujarat State Petronet Ltd.",
    symbol: "GSPL",
  },
  {
    name: "KEC International Ltd.",
    symbol: "KEC",
  },
  {
    name: "Mahindra & Mahindra Financial Services Limited",
    symbol: "M&MFIN",
  },
  {
    name: "Solar Industries India Limited",
    symbol: "SOLARINDS",
  },
  {
    name: "SUN TV NETWORK LIMITED",
    symbol: "SUNTV",
  },
  {
    name: "GODAWARI POWER AND ISPAT LTD.",
    symbol: "GPIL",
  },
  {
    name: "Allcargo Logistics Ltd",
    symbol: "ALLCARGO",
  },
  {
    name: "GMR AIRPORTS INFRASTRUCTURE LIMITED",
    symbol: "GMRINFRA",
  },
  {
    name: "Tech Mahindra Limited",
    symbol: "TECHM",
  },
  {
    name: "CIE Automotive India Limited",
    symbol: "CIEINDIA",
  },
  {
    name: "VOLTAMP TRANSFORMERS LIMITED",
    symbol: "VOLTAMP",
  },
  {
    name: "Action Construction Equipments Ltd.",
    symbol: "ACE",
  },
  {
    name: "DCB Bank Limited",
    symbol: "DCBBANK",
  },
  {
    name: "Info Edge(India) Ltd.",
    symbol: "NAUKRI",
  },
  {
    name: "TORRENT POWER LIMITED",
    symbol: "TORNTPOWER",
  },
  {
    name: "LT Foods Limited",
    symbol: "LTFOODS",
  },
  {
    name: "Sobha Limited",
    symbol: "SOBHA",
  },
  {
    name: "TANLA PLATFORMS LIMITED",
    symbol: "TANLA",
  },
  {
    name: "Lumax Auto Technologies Ltd.",
    symbol: "LUMAXTECH",
  },
  {
    name: "Redington Limited",
    symbol: "REDINGTON",
  },
  {
    name: "Firstsource Solutions Ltd.",
    symbol: "FSL",
  },
  {
    name: "Power Finance Corporation Ltd",
    symbol: "PFC",
  },
  {
    name: "Ahluwalia Contracts (India) Ltd",
    symbol: "AHLUCONT",
  },
  {
    name: "Indian Bank",
    symbol: "INDIANB",
  },
  {
    name: "VODAFONE IDEA LIMITED",
    symbol: "IDEA",
  },
  {
    name: "Page Industries Ltd.",
    symbol: "PAGEIND",
  },
  {
    name: "ASTRAL LIMITED",
    symbol: "ASTRAL",
  },
  {
    name: "Indiabulls Real Estate Limited",
    symbol: "IBREALEST",
  },
  {
    name: "Camlin Fine Sciences Ltd",
    symbol: "CAMLINFINE",
  },
  {
    name: "ICRA Limited",
    symbol: "ICRA",
  },
  {
    name: "Dish TV India Limited",
    symbol: "DISHTV",
  },
  {
    name: "Fortis Healthcare Ltd",
    symbol: "FORTIS",
  },
  {
    name: "Delta Corp Limited",
    symbol: "DELTACORP",
  },
  {
    name: "Time Technoplast Limited",
    symbol: "TIMETECHNO",
  },
  {
    name: "Hinduja Global Solutions Limited",
    symbol: "HGS",
  },
  {
    name: "DLF LIMITED",
    symbol: "DLF",
  },
  {
    name: "Central Bank of India",
    symbol: "CENTRALBK",
  },
  {
    name: "K.P.R. Mill Ltd.",
    symbol: "KPRMILL",
  },
  {
    name: "Motilal Oswal Financial Services Limited",
    symbol: "MOTILALOFS",
  },
  {
    name: "POWER GRID CORPORATION OF INDIA LIMITED",
    symbol: "POWERGRID",
  },
  {
    name: "Kaveri Seed Company Ltd",
    symbol: "KSCL",
  },
  {
    name: "PAISALO DIGITAL LIMITED",
    symbol: "PAISALO",
  },
  {
    name: "Religare Enterprises Ltd",
    symbol: "RELIGARE",
  },
  {
    name: "Adani Ports and Special Economic Zone Ltd",
    symbol: "ADANIPORTS",
  },
  {
    name: "Edelweiss Financial Services Ltd.",
    symbol: "EDELWEISS",
  },
  {
    name: "JYOTHY LABS LIMITED",
    symbol: "JYOTHYLAB",
  },
  {
    name: "eClerx Services Limited",
    symbol: "ECLERX",
  },
  {
    name: "Brigade Enterprises Limited",
    symbol: "BRIGADE",
  },
  {
    name: "J. Kumar Infraprojects Limited",
    symbol: "JKIL",
  },
  {
    name: "KNR Constructions Limited",
    symbol: "KNRCON",
  },
  {
    name: "IRB Infrastructure Developers Limited",
    symbol: "IRB",
  },
  {
    name: "V-Guard Industries Ltd.",
    symbol: "VGUARD",
  },
  {
    name: "REC LIMITED",
    symbol: "RECLTD",
  },
  {
    name: "Dhani Services Limited",
    symbol: "DHANI",
  },
  {
    name: "TITAGARH RAIL SYSTEMS LIMITED",
    symbol: "TITAGARH",
  },
  {
    name: "KIRI INDUSTRIES LIMITED",
    symbol: "KIRIINDUS",
  },
  {
    name: "Bajaj Auto Limited",
    symbol: "BAJAJ-AUTO",
  },
  {
    name: "Bajaj Finserv Limited",
    symbol: "BAJAJFINSV",
  },
  {
    name: "Kotak Mahindra Mutual Fund",
    symbol: "KTKSENSEX",
  },
  {
    name: "ZF Commercial Vehicle Control Systems India Limited",
    symbol: "ZFCVINDIA",
  },
  {
    name: "ISGEC Heavy Engineering Limited",
    symbol: "ISGEC",
  },
  {
    name: "Mold-Tek Packaging Limited",
    symbol: "MOLDTKPAC",
  },
  {
    name: "Mahindra Holidays & Resorts India Limited",
    symbol: "MHRIL",
  },
  {
    name: "NHPC Limited",
    symbol: "NHPC",
  },
  {
    name: "Globus Spirits Limited",
    symbol: "GLOBUSSPR",
  },
  {
    name: "Oil India Limited",
    symbol: "OIL",
  },
  {
    name: "RattanIndia Power Limited",
    symbol: "RTNPOWER",
  },
  {
    name: "Lloyds Metals and Energy Limited",
    symbol: "LLOYDSME",
  },
  {
    name: "Sequent Scientific Limited",
    symbol: "SEQUENT",
  },
  {
    name: "Avanti Feeds ltd.",
    symbol: "AVANTIFEED",
  },
  {
    name: "Adani Enterprises Ltd.",
    symbol: "ADANIENT",
  },
  {
    name: "NAVA LIMITED",
    symbol: "NAVA",
  },
  {
    name: "Shivalik Bimetal Controls Ltd.,",
    symbol: "SBCL",
  },
  {
    name: "Carborundum Universal Ltd.,",
    symbol: "CARBORUNIV",
  },
  {
    name: "MMTC Ltd.,",
    symbol: "MMTC",
  },
  {
    name: "Hindustan Copper Ltd.",
    symbol: "HINDCOPPER",
  },
  {
    name: "NLC India Limited",
    symbol: "NLCINDIA",
  },
  {
    name: "WELSPUN LIVING LIMITED",
    symbol: "WELSPUNLIV",
  },
  {
    name: "Ganesha Ecosphere Limited",
    symbol: "GANECOS",
  },
  {
    name: "Asahi India Glass Ltd.",
    symbol: "ASAHIINDIA",
  },
  {
    name: "Anant Raj Limited",
    symbol: "ANANTRAJ",
  },
  {
    name: "Usha Martin Ltd.",
    symbol: "USHAMART",
  },
  {
    name: "Honeywell Automation India Ltd.",
    symbol: "HONAUT",
  },
  {
    name: "HBL Power Systems Ltd.",
    symbol: "HBLPOWER",
  },
  {
    name: "Samvardhana Motherson International Limited",
    symbol: "MOTHERSON",
  },
  {
    name: "Havells India Limited",
    symbol: "HAVELLS",
  },
  {
    name: "Symphony Limited",
    symbol: "SYMPHONY",
  },
  {
    name: "TTK Prestige Ltd.",
    symbol: "TTKPRESTIG",
  },
  {
    name: "Rajratan Global Wire Ltd",
    symbol: "RAJRATAN",
  },
  {
    name: "KEI Industries Ltd.",
    symbol: "KEI",
  },
  {
    name: "Hindustan Foods Ltd.,",
    symbol: "HNDFDS",
  },
  {
    name: "CCL Products (India) Ltd.",
    symbol: "CCL",
  },
  {
    name: "Jamna Auto Industries Ltd.,",
    symbol: "JAMNAAUTO",
  },
  {
    name: "TVS Holdings Limited",
    symbol: "TVSHLTD",
  },
  {
    name: "Ratnamani Metals & Tubes Ltd",
    symbol: "RATNAMANI",
  },
  {
    name: "Vesuvius India Ltd.",
    symbol: "VESUVIUS",
  },
  {
    name: "Indo Count Industries Ltd",
    symbol: "ICIL",
  },
  {
    name: "Trident Ltd",
    symbol: "TRIDENT",
  },
  {
    name: "Elgi Equipments Ltd.,",
    symbol: "ELGIEQUIP",
  },
  {
    name: "Timken India Ltd",
    symbol: "TIMKEN",
  },
  {
    name: "Praj Industries Ltd.",
    symbol: "PRAJIND",
  },
  {
    name: "HLE GLASCOAT LIMITED",
    symbol: "HLEGLAS",
  },
  {
    name: "KALPATARU PROJECTS INTERNATIONAL LIMITED",
    symbol: "KPIL",
  },
  {
    name: "Safari Industries (India) Ltd.,",
    symbol: "SAFARI",
  },
  {
    name: "DCM Shriram Limited",
    symbol: "DCMSHRIRAM",
  },
  {
    name: "3M India Ltd.",
    symbol: "3MINDIA",
  },
  {
    name: "JM Financial Limited",
    symbol: "JMFINANCIL",
  },
  {
    name: "Reliance Industrial Infrastructure",
    symbol: "RIIL",
  },
  {
    name: "Linde India Limited",
    symbol: "LINDEINDIA",
  },
  {
    name: "Shipping Corporation Of India Ltd",
    symbol: "SCI",
  },
  {
    name: "ITI Limited (Indian Teleph.Ind.Ltd)",
    symbol: "ITI",
  },
  {
    name: "National Fertilizers Ltd.,",
    symbol: "NFL",
  },
  {
    name: "PI Industries Limited",
    symbol: "PIIND",
  },
  {
    name: "Mastek Limited",
    symbol: "MASTEK",
  },
  {
    name: "POONAWALLA FINCORP LIMITED",
    symbol: "POONAWALLA",
  },
  {
    name: "Polyplex Corporation Ltd.,",
    symbol: "POLYPLEX",
  },
  {
    name: "IOL Chemicals & Pharmaceuticals Ltd",
    symbol: "IOLCP",
  },
  {
    name: "Vinati Organics Ltd.,",
    symbol: "VINATIORGA",
  },
  {
    name: "Aarti Industries Ltd",
    symbol: "AARTIIND",
  },
  {
    name: "Gujarat Ambuja Exports Ltd.",
    symbol: "GAEL",
  },
  {
    name: "Rashtriya Chemicals & Fertilizers Limited",
    symbol: "RCF",
  },
  {
    name: "Aarti Drugs Limited",
    symbol: "AARTIDRUGS",
  },
  {
    name: "Marksans Pharma Ltd.",
    symbol: "MARKSANS",
  },
  {
    name: "Ipca Laboratories Ltd.",
    symbol: "IPCALAB",
  },
  {
    name: "Neuland Laboratories Limited.",
    symbol: "NEULANDLAB",
  },
  {
    name: "Sun Pharmaceutical Industries Ltd.",
    symbol: "SUNPHARMA",
  },
  {
    name: "Hikal Ltd.",
    symbol: "HIKAL",
  },
  {
    name: "Caplin Point Laboratories Ltd.",
    symbol: "CAPLIPOINT",
  },
  {
    name: "Aurobindo Pharma Ltd.",
    symbol: "AUROPHARMA",
  },
  {
    name: "Natco Pharma Ltd.",
    symbol: "NATCOPHARM",
  },
  {
    name: "Mphasis Limited",
    symbol: "MPHASIS",
  },
  {
    name: "NMDC Ltd",
    symbol: "NMDC",
  },
  {
    name: "Blue Dart Express Ltd.",
    symbol: "BLUEDART",
  },
  {
    name: "Confidence Petroleum India Limited",
    symbol: "CONFIPET",
  },
  {
    name: "La Opala RG Ltd.",
    symbol: "LAOPALA",
  },
  {
    name: "Stylam Industries Limited",
    symbol: "STYLAMIND",
  },
  {
    name: "Gujarat Alkalis & Chemicals Ltd.,",
    symbol: "GUJALKALI",
  },
  {
    name: "India Cements Ltd.,",
    symbol: "INDIACEM",
  },
  {
    name: "JK Tyre & Industries Ltd.",
    symbol: "JKTYRE",
  },
  {
    name: "JUBILANT PHARMOVA LIMITED",
    symbol: "JUBLPHARMA",
  },
  {
    name: "Sanghvi Movers Ltd.",
    symbol: "SANGHVIMOV",
  },
  {
    name: "PRIVI SPECIALITY CHEMICALS LIMITED",
    symbol: "PRIVISCL",
  },
  {
    name: "Genus Power Infrastructures Ltd",
    symbol: "GENUSPOWER",
  },
  {
    name: "Relaxo Footwears Ltd.",
    symbol: "RELAXO",
  },
  {
    name: "Shilpa Medicare Ltd.",
    symbol: "SHILPAMED",
  },
  {
    name: "KRBL Ltd.",
    symbol: "KRBL",
  },
  {
    name: "Indian Oil Corporation Ltd.",
    symbol: "IOC",
  },
  {
    name: "Balaji Amines Ltd.",
    symbol: "BALAMINES",
  },
  {
    name: "Patel Engineering Ltd",
    symbol: "PATELENG",
  },
  {
    name: "Emami Ltd",
    symbol: "EMAMILTD",
  },
  {
    name: "Manappuram Finance Limited",
    symbol: "MANAPPURAM",
  },
  {
    name: "Zydus Wellness Limited",
    symbol: "ZYDUSWELL",
  },
  {
    name: "Container Corporation Of India Ltd.",
    symbol: "CONCOR",
  },
  {
    name: "Choice International Ltd",
    symbol: "CHOICEIN",
  },
  {
    name: "Rajesh Exports Ltd.",
    symbol: "RAJESHEXPO",
  },
  {
    name: "Eveready Industries India Ltd.",
    symbol: "EVEREADY",
  },
  {
    name: "Hatsun Agro Products Ltd.",
    symbol: "HATSUN",
  },
  {
    name: "Jindal Worldwide Ltd.",
    symbol: "JINDWORLD",
  },
  {
    name: "Somany Ceramics Limited",
    symbol: "SOMANYCERA",
  },
  {
    name: "Capri Global Capital Limited",
    symbol: "CGCL",
  },
  {
    name: "FDC Ltd.",
    symbol: "FDC",
  },
  {
    name: "Marico Limited",
    symbol: "MARICO",
  },
  {
    name: "APOLLO PIPES LIMITED",
    symbol: "APOLLOPIPE",
  },
  {
    name: "Poly Medicure Ltd",
    symbol: "POLYMED",
  },
  {
    name: "Bank Of Baroda",
    symbol: "BANKBARODA",
  },
  {
    name: "Welspun Corp Limited",
    symbol: "WELCORP",
  },
  {
    name: "Bank of India",
    symbol: "BANKINDIA",
  },
  {
    name: "HeidelbergCement  India Limited",
    symbol: "HEIDELBERG",
  },
  {
    name: "NCC Limited",
    symbol: "NCC",
  },
  {
    name: "Vedanta Limited",
    symbol: "VEDL",
  },
  {
    name: "Grasim Industries Ltd",
    symbol: "GRASIM",
  },
  {
    name: "Piramal Enterprises Limited",
    symbol: "PEL",
  },
  {
    name: "NIIT Ltd.,",
    symbol: "NIITLTD",
  },
  {
    name: "Oil And Natural Gas Corporation Ltd",
    symbol: "ONGC",
  },
  {
    name: "Reliance Industries Ltd",
    symbol: "RELIANCE",
  },
  {
    name: "Raymond Limited",
    symbol: "RAYMOND",
  },
  {
    name: "Pidilite Industries Ltd.",
    symbol: "PIDILITIND",
  },
  {
    name: "Birla Corporation Ltd.",
    symbol: "BIRLACORPN",
  },
  {
    name: "PRISM JOHNSON LIMITED.",
    symbol: "PRSMJOHNSN",
  },
  {
    name: "Rain Industries Limited",
    symbol: "RAIN",
  },
  {
    name: "Rallis India Ltd",
    symbol: "RALLIS",
  },
  {
    name: "Patanjali Foods Limited",
    symbol: "PATANJALI",
  },
  {
    name: "Jindal Saw Ltd.",
    symbol: "JINDALSAW",
  },
  {
    name: "JK Lakshmi Cement Limited",
    symbol: "JKLAKSHMI",
  },
  {
    name: "Shree Cements Ltd.,",
    symbol: "SHREECEM",
  },
  {
    name: "Reliance Infrastructure Ltd",
    symbol: "RELINFRA",
  },
  {
    name: "Tata Power Co. Ltd",
    symbol: "TATAPOWER",
  },
  {
    name: "Sundram Fasteners Ltd.,",
    symbol: "SUNDRMFAST",
  },
  {
    name: "Sunflag Iron & Steel Co. Ltd.,",
    symbol: "SUNFLAG",
  },
  {
    name: "Supreme Petrochem Ltd.",
    symbol: "SPLPETRO",
  },
  {
    name: "Tata Elxsi Ltd",
    symbol: "TATAELXSI",
  },
  {
    name: "ACC Ltd",
    symbol: "ACC",
  },
  {
    name: "Thermax Ltd.",
    symbol: "THERMAX",
  },
  {
    name: "Thirumalai Chemicals Ltd.,",
    symbol: "TIRUMALCHM",
  },
  {
    name: "Torrent Pharmaceuticals Ltd.",
    symbol: "TORNTPHARM",
  },
  {
    name: "Ambuja Cements Ltd.",
    symbol: "AMBUJACEM",
  },
  {
    name: "Hindalco Industries Ltd.",
    symbol: "HINDALCO",
  },
  {
    name: "West Coast Paper Mills Limited",
    symbol: "WSTCSTPAPR",
  },
  {
    name: "Procter & Gamble Hygiene & Health Care Ltd.",
    symbol: "PGHH",
  },
  {
    name: "Federal Bank Ltd.",
    symbol: "FEDERALBNK",
  },
  {
    name: "TATA STEEL LIMITED",
    symbol: "TATASTEEL",
  },
  {
    name: "SKF India Ltd.",
    symbol: "SKFINDIA",
  },
  {
    name: "Ashok Leyland Ltd.,",
    symbol: "ASHOKLEY",
  },
  {
    name: "Cummins India Ltd.,",
    symbol: "CUMMINSIND",
  },
  {
    name: "Tata Communications Limited",
    symbol: "TATACOMM",
  },
  {
    name: "Abbott India Ltd.",
    symbol: "ABBOTINDIA",
  },
  {
    name: "Bajaj Holdings & Investment Limited",
    symbol: "BAJAJHLDNG",
  },
  {
    name: "Bharat Forge Ltd",
    symbol: "BHARATFORG",
  },
  {
    name: "Escorts Kubota Limited",
    symbol: "ESCORTS",
  },
  {
    name: "Larsen & Toubro Limited",
    symbol: "LT",
  },
  {
    name: "Mahindra & Mahindra Ltd.",
    symbol: "M&M",
  },
  {
    name: "Bosch Ltd",
    symbol: "BOSCHLTD",
  },
  {
    name: "Bharat Petroleum Corpn. Ltd.,",
    symbol: "BPCL",
  },
  {
    name: "Siemens Ltd.,",
    symbol: "SIEMENS",
  },
  {
    name: "Tata Motors Ltd.",
    symbol: "TATAMOTORS",
  },
  {
    name: "Voltas Ltd.,",
    symbol: "VOLTAS",
  },
  {
    name: "Great Eastern Shipping Co. Ltd.,",
    symbol: "GESHIP",
  },
  {
    name: "Deepak Fertilizers &Petrochemicals",
    symbol: "DEEPAKFERT",
  },
  {
    name: "GlaxoSmithkline Pharmaceuticals Ltd.",
    symbol: "GLAXO",
  },
  {
    name: "Gujarat Narmada Valley Fert.Co.Ltd",
    symbol: "GNFC",
  },
  {
    name: "Sanofi India Ltd",
    symbol: "SANOFI",
  },
  {
    name: "Pfizer Ltd.,",
    symbol: "PFIZER",
  },
  {
    name: "Gujarat State Fertilizers & Chem.Ltd",
    symbol: "GSFC",
  },
  {
    name: "Hindustan Unilever Ltd.,",
    symbol: "HINDUNILVR",
  },
  {
    name: "Akzo Nobel India Limited",
    symbol: "AKZOINDIA",
  },
  {
    name: "NOCIL Ltd",
    symbol: "NOCIL",
  },
  {
    name: "Tata Chemicals Ltd",
    symbol: "TATACHEM",
  },
  {
    name: "Nestle India Ltd.",
    symbol: "NESTLEIND",
  },
  {
    name: "TATA CONSUMER PRODUCTS LIMITED",
    symbol: "TATACONSUM",
  },
  {
    name: "Asian Paints Ltd.",
    symbol: "ASIANPAINT",
  },
  {
    name: "Britannia Industries Ltd.,",
    symbol: "BRITANNIA",
  },
  {
    name: "Colgate-Palmolive (India) Ltd.,",
    symbol: "COLPAL",
  },
  {
    name: "EIH Ltd",
    symbol: "EIHOTEL",
  },
  {
    name: "Indian Hotels Co. Ltd",
    symbol: "INDHOTEL",
  },
  {
    name: "Castrol India Ltd",
    symbol: "CASTROLIND",
  },
  {
    name: "ITC Ltd",
    symbol: "ITC",
  },
  {
    name: "Apollo Tyres Ltd",
    symbol: "APOLLOTYRE",
  },
  {
    name: "Ceat Ltd.,",
    symbol: "CEATLTD",
  },
  {
    name: "Finolex Industries Ltd.",
    symbol: "FINPIPE",
  },
  {
    name: "Tata Investment Corporation Ltd.,",
    symbol: "TATAINVEST",
  },
  {
    name: "Bombay Burmah Trading Corpn. Ltd.,",
    symbol: "BBTC",
  },
  {
    name: "Greaves Cotton Ltd.",
    symbol: "GREAVESCOT",
  },
  {
    name: "BOROSIL RENEWABLES LIMITED",
    symbol: "BORORENEW",
  },
  {
    name: "Balkrishna Industries Ltd.,",
    symbol: "BALKRISIND",
  },
  {
    name: "Kesoram Industries Ltd",
    symbol: "KESORAMIND",
  },
  {
    name: "Vardhman Textiles Limted",
    symbol: "VTL",
  },
  {
    name: "The Phoenix Mills Ltd.,",
    symbol: "PHOENIXLTD",
  },
  {
    name: "Swan Energy Ltd.",
    symbol: "SWANENERGY",
  },
  {
    name: "SRF Ltd.,",
    symbol: "SRF",
  },
  {
    name: "Bharat Bijlee Ltd.,",
    symbol: "BBL",
  },
  {
    name: "Zensar Technologies Ltd.",
    symbol: "ZENSARTECH",
  },
  {
    name: "CHOLAMANDALAM FINANCIAL HOLDINGS LIMITED",
    symbol: "CHOLAHLDNG",
  },
  {
    name: "Eicher Motors Ltd.",
    symbol: "EICHERMOT",
  },
  {
    name: "GMM Pfaudler Ltd.",
    symbol: "GMMPFAUDLR",
  },
  {
    name: "Kirloskar Pneumatic Co.Ltd.",
    symbol: "KIRLPNU",
  },
  {
    name: "Nesco Ltd",
    symbol: "NESCO",
  },
  {
    name: "WESTLIFE FOODWORLD LIMITED",
    symbol: "WESTLIFE",
  },
  {
    name: "Zee Entertainment Enterprises Ltd.",
    symbol: "ZEEL",
  },
  {
    name: "Elecon Engineering Co.Ltd.,",
    symbol: "ELECON",
  },
  {
    name: "Gabriel India Ltd.",
    symbol: "GABRIEL",
  },
  {
    name: "Schaeffler India Limited",
    symbol: "SCHAEFFLER",
  },
  {
    name: "Grindwell Norton Ltd.",
    symbol: "GRINDWELL",
  },
  {
    name: "Bayer CropScience Limited.",
    symbol: "BAYERCROP",
  },
  {
    name: "Coromandel International Limited",
    symbol: "COROMANDEL",
  },
  {
    name: "Deepak Nitrite Limited",
    symbol: "DEEPAKNTR",
  },
  {
    name: "PCBL LIMITED",
    symbol: "PCBL",
  },
  {
    name: "Sudarshan Chemical Indus. Ltd.,",
    symbol: "SUDARSCHEM",
  },
  {
    name: "Unichem Laboratories Ltd.,",
    symbol: "UNICHEMLAB",
  },
  {
    name: "Alkyl Amines Chemicals Ltd.,",
    symbol: "ALKYLAMINE",
  },
  {
    name: "AstraZeneca Pharma India Ltd.",
    symbol: "ASTRAZEN",
  },
  {
    name: "J.B. Chemicals & Pharmaceuticals Lt",
    symbol: "JBCHEPHARM",
  },
  {
    name: "Tilaknagar Industries Ltd",
    symbol: "TI",
  },
  {
    name: "Som Distilleries & Breweries Ltd.",
    symbol: "SDBL",
  },
  {
    name: "Wipro  Ltd.,",
    symbol: "WIPRO",
  },
  {
    name: "Gillette India Ltd.",
    symbol: "GILLETTE",
  },
  {
    name: "V.I.P. Industries Ltd.,",
    symbol: "VIPIND",
  },
  {
    name: "Apollo Hospitals Enterprises Ltd.,",
    symbol: "APOLLOHOSP",
  },
  {
    name: "TVS Srichakra Ltd.,",
    symbol: "TVSSRICHAK",
  },
  {
    name: "Berger Paints India Ltd",
    symbol: "BERGEPAINT",
  },
  {
    name: "Graphite India Ltd.",
    symbol: "GRAPHITE",
  },
  {
    name: "ITD Cementation India Ltd",
    symbol: "ITDCEM",
  },
  {
    name: "GARWARE TECHNICAL FIBRES LIMITED",
    symbol: "GARFIBRES",
  },
  {
    name: "HEG Ltd.",
    symbol: "HEG",
  },
  {
    name: "Supreme Industries Ltd.,",
    symbol: "SUPREMEIND",
  },
  {
    name: "VST Industries Ltd.,",
    symbol: "VSTIND",
  },
  {
    name: "Can Fin Homes Ltd.,",
    symbol: "CANFINHOME",
  },
  {
    name: "Shriram Finance Limited",
    symbol: "SHRIRAMFIN",
  },
  {
    name: "Cholamandalam Investment and Finance Company Ltd",
    symbol: "CHOLAFIN",
  },
  {
    name: "Vakrangee Limited",
    symbol: "VAKRANGEE",
  },
  {
    name: "UPL Limited",
    symbol: "UPL",
  },
  {
    name: "Sunteck Realty Ltd",
    symbol: "SUNTECK",
  },
  {
    name: "Jai Corp Limited",
    symbol: "JAICORPLTD",
  },
  {
    name: "ABB India Limited",
    symbol: "ABB",
  },
  {
    name: "Aegis Logistics Ltd.",
    symbol: "AEGISLOG",
  },
  {
    name: "Amara Raja Energy & Mobility Limited",
    symbol: "ARE&M",
  },
  {
    name: "Bombay Dyeing & Mfg. Co. Ltd.,",
    symbol: "BOMDYEING",
  },
  {
    name: "Atul Limited.,",
    symbol: "ATUL",
  },
  {
    name: "Bajaj Electricals Ltd.,",
    symbol: "BAJAJELEC",
  },
  {
    name: "Bajaj Hindusthan Sugar Limited",
    symbol: "BAJAJHIND",
  },
  {
    name: "Force Motors Limited",
    symbol: "FORCEMOT",
  },
  {
    name: "Bajaj Finance Limited",
    symbol: "BAJFINANCE",
  },
  {
    name: "Balrampur Chini Mills Ltd.",
    symbol: "BALRAMCHIN",
  },
  {
    name: "Century Textiles & Industries Ltd.,",
    symbol: "CENTURYTEX",
  },
  {
    name: "BASF India Ltd",
    symbol: "BASF",
  },
  {
    name: "Bata India Limited",
    symbol: "BATAINDIA",
  },
  {
    name: "BEML Ltd",
    symbol: "BEML",
  },
  {
    name: "Bharat Electronics Ltd.,",
    symbol: "BEL",
  },
  {
    name: "Blue Star Ltd",
    symbol: "BLUESTARCO",
  },
  {
    name: "CESC Limited,",
    symbol: "CESC",
  },
  {
    name: "Chambal Fertilisers & Chemicals Ltd",
    symbol: "CHAMBLFERT",
  },
  {
    name: "Exide Industries Ltd.,",
    symbol: "EXIDEIND",
  },
  {
    name: "Cipla Ltd.,",
    symbol: "CIPLA",
  },
  {
    name: "CRISIL Ltd.",
    symbol: "CRISIL",
  },
  {
    name: "CG Power and Industrial Solutions Limited",
    symbol: "CGPOWER",
  },
  {
    name: "Dabur India Ltd.",
    symbol: "DABUR",
  },
  {
    name: "Arvind Ltd.,",
    symbol: "ARVIND",
  },
  {
    name: "Bharat Heavy Electricals Ltd.,",
    symbol: "BHEL",
  },
  {
    name: "Hindustan Petroleum Corporation Ltd",
    symbol: "HINDPETRO",
  },
  {
    name: "IFCI Ltd.",
    symbol: "IFCI",
  },
  {
    name: "Mangalore Refinery & Petrochemicals",
    symbol: "MRPL",
  },
  {
    name: "Chennai Petroleum Corporation Ltd.",
    symbol: "CHENNPETRO",
  },
  {
    name: "State Bank Of India",
    symbol: "SBIN",
  },
  {
    name: "Steel Authority of India Ltd.",
    symbol: "SAIL",
  },
  {
    name: "Titan Company Limited",
    symbol: "TITAN",
  },
  {
    name: "IDBI Bank Ltd",
    symbol: "IDBI",
  },
  {
    name: "Dhampur Sugar Mills Ltd.",
    symbol: "DHAMPURSUG",
  },
  {
    name: "Dr. Reddy's Laboratories Ltd",
    symbol: "DRREDDY",
  },
  {
    name: "E.I.D. Parry (India) Ltd.",
    symbol: "EIDPARRY",
  },
  {
    name: "PROCTER & GAMBLE HEALTH LIMITED",
    symbol: "PGHL",
  },
  {
    name: "Electrosteel Castings Ltd.",
    symbol: "ELECTCAST",
  },
  {
    name: "Esab India Ltd.",
    symbol: "ESABINDIA",
  },
  {
    name: "EPL LIMITED",
    symbol: "EPL",
  },
  {
    name: "Finolex Cables Ltd.",
    symbol: "FINCABLES",
  },
  {
    name: "Uflex Limited",
    symbol: "UFLEX",
  },
  {
    name: "Godfrey Phillips India Ltd.",
    symbol: "GODFRYPHLP",
  },
  {
    name: "Godrej Industries Ltd.",
    symbol: "GODREJIND",
  },
  {
    name: "Kansai Nerolac Paints",
    symbol: "KANSAINER",
  },
  {
    name: "GHCL Ltd.",
    symbol: "GHCL",
  },
  {
    name: "HDFC Bank Ltd.",
    symbol: "HDFCBANK",
  },
  {
    name: "Hero MotoCorp Limited",
    symbol: "HEROMOTOCO",
  },
  {
    name: "HFCL LIMITED",
    symbol: "HFCL",
  },
  {
    name: "Hindustan Construction Co. Ltd.",
    symbol: "HCC",
  },
  {
    name: "Hindustan Oil Exploration Co. Ltd.",
    symbol: "HINDOILEXP",
  },
  {
    name: "AGI GREENPAC LIMITED",
    symbol: "AGI",
  },
  {
    name: "Hindustan Zinc Ltd.",
    symbol: "HINDZINC",
  },
  {
    name: "Infosys Ltd",
    symbol: "INFY",
  },
  {
    name: "Ingersoll-Rand (India) Ltd.",
    symbol: "INGERRAND",
  },
  {
    name: "Ion Exchange (India) Ltd",
    symbol: "IONEXCHANG",
  },
  {
    name: "Jain Irrigation Systems Ltd.,",
    symbol: "JISLJALEQS",
  },
  {
    name: "JSW Steel Limited",
    symbol: "JSWSTEEL",
  },
  {
    name: "Kajaria Ceramics Ltd",
    symbol: "KAJARIACER",
  },
  {
    name: "Whirlpool of India Ltd",
    symbol: "WHIRLPOOL",
  },
  {
    name: "Kirloskar Brothers Ltd.,",
    symbol: "KIRLOSBROS",
  },
  {
    name: "Kirloskar Ferrous Industries Ltd.",
    symbol: "KIRLFER",
  },
  {
    name: "Kotak Mahindra Bank Ltd.",
    symbol: "KOTAKBANK",
  },
  {
    name: "KSB LIMITED",
    symbol: "KSB",
  },
  {
    name: "L.g.Balkrishnan & Bros. Ltd.",
    symbol: "LGBBROSLTD",
  },
  {
    name: "Trent Ltd [Lakme Ltd]",
    symbol: "TRENT",
  },
  {
    name: "Lakshmi Machine Works Ltd.,",
    symbol: "LAXMIMACH",
  },
  {
    name: "Lic Housing Finance Ltd.",
    symbol: "LICHSGFIN",
  },
  {
    name: "Lupin Ltd",
    symbol: "LUPIN",
  },
  {
    name: "The Ramco Cements Limited",
    symbol: "RAMCOCEM",
  },
  {
    name: "Maharashtra Seamless Ltd.",
    symbol: "MAHSEAMLES",
  },
  {
    name: "Maharashtra Scooters Ltd.,",
    symbol: "MAHSCOOTER",
  },
  {
    name: "Max Financial Services Limited",
    symbol: "MFSL",
  },
  {
    name: "Morepen Laboratories Ltd.",
    symbol: "MOREPENLAB",
  },
  {
    name: "M.R.F. Ltd.,",
    symbol: "MRF",
  },
];

export default stockList;
