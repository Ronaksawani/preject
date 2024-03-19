const stockList = [
  {
    name: "Reliance Industries Limited",
    symbol: "RELIANCE",
  },
  {
    name: "Tata Consultancy Services Limited",
    symbol: "TCS",
  },
  {
    name: "HDFC Bank Limited",
    symbol: "HDFCBANK",
  },
  {
    name: "ICICI Bank Limited",
    symbol: "ICICIBANK",
  },
  {
    name: "Infosys Limited",
    symbol: "INFY",
  },
  {
    name: "Hindustan Unilever Limited",
    symbol: "HINDUNILVR",
  },
  {
    name: "Bharti Airtel Limited",
    symbol: "BHARTIARTL",
  },
  {
    name: "ITC Limited",
    symbol: "ITC",
  },
  {
    name: "State Bank of India",
    symbol: "SBIN",
  },
  {
    name: "Life Insurance Corporation Of India",
    symbol: "LICI",
  },
  {
    name: "Larsen & Toubro Limited",
    symbol: "LT",
  },
  {
    name: "Bajaj Finance Limited",
    symbol: "BAJFINANCE",
  },
  {
    name: "HCL Technologies Limited",
    symbol: "HCLTECH",
  },
  {
    name: "Kotak Mahindra Bank Limited",
    symbol: "KOTAKBANK",
  },
  {
    name: "Axis Bank Limited",
    symbol: "AXISBANK",
  },
  {
    name: "Asian Paints Limited",
    symbol: "ASIANPAINT",
  },
  {
    name: "Titan Company Limited",
    symbol: "TITAN",
  },
  {
    name: "Adani Enterprises Limited",
    symbol: "ADANIENT",
  },
  {
    name: "Maruti Suzuki India Limited",
    symbol: "MARUTI",
  },
  {
    name: "UltraTech Cement Limited",
    symbol: "ULTRACEMCO",
  },
  {
    name: "Sun Pharmaceutical Industries Limited",
    symbol: "SUNPHARMA",
  },
  {
    name: "NTPC Limited",
    symbol: "NTPC",
  },
  {
    name: "Bajaj Finserv Limited",
    symbol: "BAJAJFINSV",
  },
  {
    name: "Avenue Supermarts Limited",
    symbol: "DMART",
  },
  {
    name: "Tata Motors Limited",
    symbol: "TATAMOTORS",
  },
  {
    name: "Oil & Natural Gas Corporation Limited",
    symbol: "ONGC",
  },
  {
    name: "Nestle India Limited",
    symbol: "NESTLEIND",
  },
  {
    name: "Adani Green Energy Limited",
    symbol: "ADANIGREEN",
  },
  {
    name: "Wipro Limited",
    symbol: "WIPRO",
  },
  {
    name: "Coal India Limited",
    symbol: "COALINDIA",
  },
  {
    name: "Adani Ports and Special Economic Zone Limited",
    symbol: "ADANIPORTS",
  },
  {
    name: "Power Grid Corporation of India Limited",
    symbol: "POWERGRID",
  },
  {
    name: "JSW Steel Limited",
    symbol: "JSWSTEEL",
  },
  {
    name: "Mahindra & Mahindra Limited",
    symbol: "M&M",
  },
  {
    name: "Adani Power Limited",
    symbol: "ADANIPOWER",
  },
  {
    name: "Bajaj Auto Limited",
    symbol: "BAJAJ-AUTO",
  },
  {
    name: "Hindustan Aeronautics Limited",
    symbol: "HAL",
  },
  {
    name: "Mindtree Limited",
    symbol: "LTIM",
  },
  {
    name: "Indian Oil Corporation Limited",
    symbol: "IOC",
  },
  {
    name: "DLF Limited",
    symbol: "DLF",
  },
  {
    name: "Tata Steel Limited",
    symbol: "TATASTEEL",
  },
  {
    name: "Varun Beverages Limited",
    symbol: "VBL",
  },
  {
    name: "Jio Financial Services Limited",
    symbol: "JIOFIN",
  },
  {
    name: "SBI Life Insurance Company Limited",
    symbol: "SBILIFE",
  },
  {
    name: "Siemens Limited",
    symbol: "SIEMENS",
  },
  {
    name: "Grasim Industries Limited",
    symbol: "GRASIM",
  },
  {
    name: "HDFC Life Insurance Company Limited",
    symbol: "HDFCLIFE",
  },
  {
    name: "Hindalco Industries Limited",
    symbol: "HINDALCO",
  },
  {
    name: "Pidilite Industries Limited",
    symbol: "PIDILITIND",
  },
  {
    name: "Bharat Electronics Limited",
    symbol: "BEL",
  },
  {
    name: "Hindustan Zinc Limited",
    symbol: "HINDZINC",
  },
  {
    name: "Indian Railway Finance Corporation Limited",
    symbol: "IRFC",
  },
  {
    name: "Britannia Industries Limited",
    symbol: "BRITANNIA",
  },
  {
    name: "Power Finance Corporation Limited",
    symbol: "PFC",
  },
  {
    name: "IndusInd Bank Limited",
    symbol: "INDUSINDBK",
  },
  {
    name: "Tech Mahindra Limited",
    symbol: "TECHM",
  },
  {
    name: "Bank of Baroda",
    symbol: "BANKBARODA",
  },
  {
    name: "Adani Energy Solutions Limited",
    symbol: "ADANIENSOL",
  },
  {
    name: "Godrej Consumer Products Limited",
    symbol: "GODREJCP",
  },
  {
    name: "InterGlobe Aviation Limited",
    symbol: "INDIGO",
  },
  {
    name: "Eicher Motors Limited",
    symbol: "EICHERMOT",
  },
  {
    name: "REC Limited",
    symbol: "RECLTD",
  },
  {
    name: "Adani Total Gas Limited",
    symbol: "ATGL",
  },
  {
    name: "Trent Limited",
    symbol: "TRENT",
  },
  {
    name: "Zomato Limited",
    symbol: "ZOMATO",
  },
  {
    name: "GAIL (India) Limited",
    symbol: "GAIL",
  },
  {
    name: "Tata Power Company Limited",
    symbol: "TATAPOWER",
  },
  {
    name: "Cholamandalam Investment and Finance Company Limited",
    symbol: "CHOLAFIN",
  },
  {
    name: "Punjab National Bank",
    symbol: "PNB",
  },
  {
    name: "Divi's Laboratories Limited",
    symbol: "DIVISLAB",
  },
  {
    name: "Ambuja Cements Limited",
    symbol: "AMBUJACEM",
  },
  {
    name: "SHREE CEMENT LIMITED",
    symbol: "SHREECEM",
  },
  {
    name: "TATA CONSUMER PRODUCTS LIMITED",
    symbol: "TATACONSUM",
  },
  {
    name: "Cipla Limited",
    symbol: "CIPLA",
  },
  {
    name: "ABB India Limited",
    symbol: "ABB",
  },
  {
    name: "Dabur India Limited",
    symbol: "DABUR",
  },
  {
    name: "Macrotech Developers Limited",
    symbol: "LODHA",
  },
  {
    name: "Bharat Petroleum Corporation Limited",
    symbol: "BPCL",
  },
  {
    name: "Dr. Reddy's Laboratories Limited",
    symbol: "DRREDDY",
  },
  {
    name: "TVS Motor Company Limited",
    symbol: "TVSMOTOR",
  },
  {
    name: "Vedanta Limited",
    symbol: "VEDL",
  },
  {
    name: "Union Bank of India",
    symbol: "UNIONBANK",
  },
  {
    name: "Havells India Limited",
    symbol: "HAVELLS",
  },
  {
    name: "Bajaj Holdings & Investment Limited",
    symbol: "BAJAJHLDNG",
  },
  {
    name: "Hero MotoCorp Limited",
    symbol: "HEROMOTOCO",
  },
  {
    name: "Polycab India Limited",
    symbol: "POLYCAB",
  },
  {
    name: "Apollo Hospitals Enterprise Limited",
    symbol: "APOLLOHOSP",
  },
  {
    name: "Indian Overseas Bank",
    symbol: "IOB",
  },
  {
    name: "United Spirits Limited",
    symbol: "MCDOWELL-N",
  },
  {
    name: "Mankind Pharma Limited",
    symbol: "MANKIND",
  },
  {
    name: "Canara Bank",
    symbol: "CANBK",
  },
  {
    name: "Torrent Pharmaceuticals Limited",
    symbol: "TORNTPHARM",
  },
  {
    name: "Vodafone Idea Limited",
    symbol: "IDEA",
  },
  {
    name: "Shriram Finance Limited",
    symbol: "SHRIRAMFIN",
  },
  {
    name: "ICICI Prudential Life Insurance Company Limited",
    symbol: "ICICIPRULI",
  },
  {
    name: "Jindal Steel & Power Limited",
    symbol: "JINDALSTEL",
  },
  {
    name: "SRF Limited",
    symbol: "SRF",
  },
  {
    name: "IDBI Bank Limited",
    symbol: "IDBI",
  },
  {
    name: "SBI Cards and Payment Services Limited",
    symbol: "SBICARD",
  },
  {
    name: "Indian Railway Catering And Tourism Corporation Limited",
    symbol: "IRCTC",
  },
  {
    name: "Marico Limited",
    symbol: "MARICO",
  },
  {
    name: "Berger Paints (I) Limited",
    symbol: "BERGEPAINT",
  },
  {
    name: "ICICI Lombard General Insurance Company Limited",
    symbol: "ICICIGI",
  },
  {
    name: "Zydus Lifesciences Limited",
    symbol: "ZYDUSLIFE",
  },
  {
    name: "CG Power and Industrial Solutions Limited",
    symbol: "CGPOWER",
  },
  {
    name: "Samvardhana Motherson International Limited",
    symbol: "MOTHERSON",
  },
  {
    name: "Colgate Palmolive (India) Limited",
    symbol: "COLPAL",
  },
  {
    name: "Tube Investments of India Limited",
    symbol: "TIINDIA",
  },
  {
    name: "HDFC Asset Management Company Limited",
    symbol: "HDFCAMC",
  },
  {
    name: "Bharat Heavy Electricals Limited",
    symbol: "BHEL",
  },
  {
    name: "JSW Energy Limited",
    symbol: "JSWENERGY",
  },
  {
    name: "Max Healthcare Institute Limited",
    symbol: "MAXHEALTH",
  },
  {
    name: "Info Edge (India) Limited",
    symbol: "NAUKRI",
  },
  {
    name: "Bosch Limited",
    symbol: "BOSCHLTD",
  },
  {
    name: "NHPC Limited",
    symbol: "NHPC",
  },
  {
    name: "Aurobindo Pharma Limited",
    symbol: "AUROPHARMA",
  },
  {
    name: "IDFC First Bank Limited",
    symbol: "IDFCFIRSTB",
  },
  {
    name: "The Indian Hotels Company Limited",
    symbol: "INDHOTEL",
  },
  {
    name: "Alkem Laboratories Limited",
    symbol: "ALKEM",
  },
  {
    name: "Yes Bank Limited",
    symbol: "YESBANK",
  },
  {
    name: "NMDC Limited",
    symbol: "NMDC",
  },
  {
    name: "Solar Industries India Limited",
    symbol: "SOLARINDS",
  },
  {
    name: "Lupin Limited",
    symbol: "LUPIN",
  },
  {
    name: "Muthoot Finance Limited",
    symbol: "MUTHOOTFIN",
  },
  {
    name: "Supreme Industries Limited",
    symbol: "SUPREMEIND",
  },
  {
    name: "Bharat Forge Limited",
    symbol: "BHARATFORG",
  },
  {
    name: "Patanjali Foods Limited",
    symbol: "PATANJALI",
  },
  {
    name: "Persistent Systems Limited",
    symbol: "PERSISTENT",
  },
  {
    name: "Indian Bank",
    symbol: "INDIANB",
  },
  {
    name: "Hindustan Petroleum Corporation Limited",
    symbol: "HINDPETRO",
  },
  {
    name: "Procter & Gamble Hygiene and Health Care Limited",
    symbol: "PGHH",
  },
  {
    name: "Godrej Properties Limited",
    symbol: "GODREJPROP",
  },
  {
    name: "L&T Technology Services Limited",
    symbol: "LTTS",
  },
  {
    name: "MRF Limited",
    symbol: "MRF",
  },
  {
    name: "Tata Elxsi Limited",
    symbol: "TATAELXSI",
  },
  {
    name: "Cummins India Limited",
    symbol: "CUMMINSIND",
  },
  {
    name: "General Insurance Corporation of India",
    symbol: "GICRE",
  },
  {
    name: "Indus Towers Limited",
    symbol: "INDUSTOWER",
  },
  {
    name: "PI Industries Limited",
    symbol: "PIIND",
  },
  {
    name: "Ashok Leyland Limited",
    symbol: "ASHOKLEY",
  },
  {
    name: "AU Small Finance Bank Limited",
    symbol: "AUBANK",
  },
  {
    name: "Oberoi Realty Limited",
    symbol: "OBEROIRLTY",
  },
  {
    name: "Container Corporation of India Limited",
    symbol: "CONCOR",
  },
  {
    name: "Fertilizers and Chemicals Travancore Limited",
    symbol: "FACT",
  },
  {
    name: "Suzlon Energy Limited",
    symbol: "SUZLON",
  },
  {
    name: "MphasiS Limited",
    symbol: "MPHASIS",
  },
  {
    name: "Bank of India",
    symbol: "BANKINDIA",
  },
  {
    name: "Astral Limited",
    symbol: "ASTRAL",
  },
  {
    name: "Steel Authority of India Limited",
    symbol: "SAIL",
  },
  {
    name: "Tata Communications Limited",
    symbol: "TATACOMM",
  },
  {
    name: "Schaeffler India Limited",
    symbol: "SCHAEFFLER",
  },
  {
    name: "Balkrishna Industries Limited",
    symbol: "BALKRISIND",
  },
  {
    name: "FSN E-Commerce Ventures Limited",
    symbol: "NYKAA",
  },
  {
    name: "GMR Airports Infrastructure Limited",
    symbol: "GMRINFRA",
  },
  {
    name: "Linde India Limited",
    symbol: "LINDEINDIA",
  },
  {
    name: "Tata Technologies Limited",
    symbol: "TATATECH",
  },
  {
    name: "UCO Bank",
    symbol: "UCOBANK",
  },
  {
    name: "Prestige Estates Projects Limited",
    symbol: "PRESTIGE",
  },
  {
    name: "United Breweries Limited",
    symbol: "UBL",
  },
  {
    name: "Jindal Stainless Limited",
    symbol: "JSL",
  },
  {
    name: "Adani Wilmar Limited",
    symbol: "AWL",
  },
  {
    name: "Mazagon Dock Shipbuilders Limited",
    symbol: "MAZDOCK",
  },
  {
    name: "Torrent Power Limited",
    symbol: "TORNTPOWER",
  },
  {
    name: "UPL Limited",
    symbol: "UPL",
  },
  {
    name: "JSW Infrastructure Limited",
    symbol: "JSWINFRA",
  },
  {
    name: "Central Bank of India",
    symbol: "CENTRALBK",
  },
  {
    name: "Aditya Birla Capital Limited",
    symbol: "ABCAPITAL",
  },
  {
    name: "Page Industries Limited",
    symbol: "PAGEIND",
  },
  {
    name: "Dalmia Bharat Limited",
    symbol: "DALBHARAT",
  },
  {
    name: "APL Apollo Tubes Limited",
    symbol: "APLAPOLLO",
  },
  {
    name: "3M India Limited",
    symbol: "3MINDIA",
  },
  {
    name: "KPIT Technologies Limited",
    symbol: "KPITTECH",
  },
  {
    name: "L&T Finance Holdings Limited",
    symbol: "L&TFH",
  },
  {
    name: "Gujarat Fluorochemicals Limited",
    symbol: "FLUOROCHEM",
  },
  {
    name: "Oil India Limited",
    symbol: "OIL",
  },
  {
    name: "One 97 Communications Limited",
    symbol: "PAYTM",
  },
  {
    name: "The Phoenix Mills Limited",
    symbol: "PHOENIXLTD",
  },
  {
    name: "UNO Minda Limited",
    symbol: "UNOMINDA",
  },
  {
    name: "Dixon Technologies (India) Limited",
    symbol: "DIXON",
  },
  {
    name: "Sundaram Finance Limited",
    symbol: "SUNDARMFIN",
  },
  {
    name: "Bandhan Bank Limited",
    symbol: "BANDHANBNK",
  },
  {
    name: "Coforge Limited",
    symbol: "COFORGE",
  },
  {
    name: "The Federal Bank  Limited",
    symbol: "FEDERALBNK",
  },
  {
    name: "Rail Vikas Nigam Limited",
    symbol: "RVNL",
  },
  {
    name: "Sona BLW Precision Forgings Limited",
    symbol: "SONACOMS",
  },
  {
    name: "Jubilant Foodworks Limited",
    symbol: "JUBLFOOD",
  },
  {
    name: "Coromandel International Limited",
    symbol: "COROMANDEL",
  },
  {
    name: "Thermax Limited",
    symbol: "THERMAX",
  },
  {
    name: "Oracle Financial Services Software Limited",
    symbol: "OFSS",
  },
  {
    name: "Kalyan Jewellers India Limited",
    symbol: "KALYANKJIL",
  },
  {
    name: "PB Fintech Limited",
    symbol: "POLICYBZR",
  },
  {
    name: "SJVN Limited",
    symbol: "SJVN",
  },
  {
    name: "NLC India Limited",
    symbol: "NLCINDIA",
  },
  {
    name: "AIA Engineering Limited",
    symbol: "AIAENG",
  },
  {
    name: "Metro Brands Limited",
    symbol: "METROBRAND",
  },
  {
    name: "Mahindra & Mahindra Financial Services Limited",
    symbol: "M&MFIN",
  },
  {
    name: "Deepak Nitrite Limited",
    symbol: "DEEPAKNTR",
  },
  {
    name: "Poonawalla Fincorp Limited",
    symbol: "POONAWALLA",
  },
  {
    name: "Petronet LNG Limited",
    symbol: "PETRONET",
  },
  {
    name: "Escorts Kubota Limited",
    symbol: "ESCORTS",
  },
  {
    name: "Max Financial Services Limited",
    symbol: "MFSL",
  },
  {
    name: "Honeywell Automation India Limited",
    symbol: "HONAUT",
  },
  {
    name: "Voltas Limited",
    symbol: "VOLTAS",
  },
  {
    name: "GlaxoSmithKline Pharmaceuticals Limited",
    symbol: "GLAXO",
  },
  {
    name: "Bank of Maharashtra",
    symbol: "MAHABANK",
  },
  {
    name: "Gujarat Gas Limited",
    symbol: "GUJGASLTD",
  },
  {
    name: "CRISIL Limited",
    symbol: "CRISIL",
  },
  {
    name: "Gland Pharma Limited",
    symbol: "GLAND",
  },
  {
    name: "Fortis Healthcare Limited",
    symbol: "FORTIS",
  },
  {
    name: "Bharat Dynamics Limited",
    symbol: "BDL",
  },
  {
    name: "Star Health and Allied Insurance Company Limited",
    symbol: "STARHEALTH",
  },
  {
    name: "Vedant Fashions Limited",
    symbol: "MANYAVAR",
  },
  {
    name: "ZF Commercial Vehicle Control Systems India Limited",
    symbol: "ZFCVINDIA",
  },
  {
    name: "Lloyds Metals And Energy Limited",
    symbol: "LLOYDSME",
  },
  {
    name: "BSE Limited",
    symbol: "BSE",
  },
  {
    name: "Biocon Limited",
    symbol: "BIOCON",
  },
  {
    name: "LIC Housing Finance Limited",
    symbol: "LICHSGFIN",
  },
  {
    name: "KEI Industries Limited",
    symbol: "KEI",
  },
  {
    name: "Indraprastha Gas Limited",
    symbol: "IGL",
  },
  {
    name: "Angel One Limited",
    symbol: "ANGELONE",
  },
  {
    name: "JK Cement Limited",
    symbol: "JKCEMENT",
  },
  {
    name: "ITI Limited",
    symbol: "ITI",
  },
  {
    name: "Punjab & Sind Bank",
    symbol: "PSB",
  },
  {
    name: "Apollo Tyres Limited",
    symbol: "APOLLOTYRE",
  },
  {
    name: "Delhivery Limited",
    symbol: "DELHIVERY",
  },
  {
    name: "IPCA Laboratories Limited",
    symbol: "IPCALAB",
  },
  {
    name: "Syngene International Limited",
    symbol: "SYNGENE",
  },
  {
    name: "K.P.R. Mill Limited",
    symbol: "KPRMILL",
  },
  {
    name: "Tata Chemicals Limited",
    symbol: "TATACHEM",
  },
  {
    name: "Sun TV Network Limited",
    symbol: "SUNTV",
  },
  {
    name: "Nippon Life India Asset Management Limited",
    symbol: "NAM-INDIA",
  },
  {
    name: "Indian Renewable Energy Development Agency Limited",
    symbol: "IREDA",
  },
  {
    name: "Motherson Sumi Wiring India Limited",
    symbol: "MSUMI",
  },
  {
    name: "Endurance Technologies Limited",
    symbol: "ENDURANCE",
  },
  {
    name: "Exide Industries Limited",
    symbol: "EXIDEIND",
  },
  {
    name: "Kansai Nerolac Paints Limited",
    symbol: "KANSAINER",
  },
  {
    name: "Ajanta Pharma Limited",
    symbol: "AJANTPHARM",
  },
  {
    name: "Hindustan Copper Limited",
    symbol: "HINDCOPPER",
  },
  {
    name: "Zee Entertainment Enterprises Limited",
    symbol: "ZEEL",
  },
  {
    name: "Sundram Fasteners Limited",
    symbol: "SUNDRMFAST",
  },
  {
    name: "Grindwell Norton Limited",
    symbol: "GRINDWELL",
  },
  {
    name: "Global Health Limited",
    symbol: "MEDANTA",
  },
  {
    name: "360 ONE WAM LIMITED",
    symbol: "360ONE",
  },
  {
    name: "CREDITACCESS GRAMEEN LIMITED",
    symbol: "CREDITACC",
  },
  {
    name: "Cyient Limited",
    symbol: "CYIENT",
  },
  {
    name: "Hatsun Agro Product Limited",
    symbol: "HATSUN",
  },
  {
    name: "Housing & Urban Development Corporation Limited",
    symbol: "HUDCO",
  },
  {
    name: "JB Chemicals & Pharmaceuticals Limited",
    symbol: "JBCHEPHARM",
  },
  {
    name: "IRB Infrastructure Developers Limited",
    symbol: "IRB",
  },
  {
    name: "Godrej Industries Limited",
    symbol: "GODREJIND",
  },
  {
    name: "Emami Limited",
    symbol: "EMAMILTD",
  },
  {
    name: "Narayana Hrudayalaya Ltd.",
    symbol: "NH",
  },
  {
    name: "Timken India Limited",
    symbol: "TIMKEN",
  },
  {
    name: "Apar Industries Limited",
    symbol: "APARINDS",
  },
  {
    name: "National Aluminium Company Limited",
    symbol: "NATIONALUM",
  },
  {
    name: "The Ramco Cements Limited",
    symbol: "RAMCOCEM",
  },
  {
    name: "Glenmark Pharmaceuticals Limited",
    symbol: "GLENMARK",
  },
  {
    name: "Ratnamani Metals & Tubes Limited",
    symbol: "RATNAMANI",
  },
  {
    name: "Aarti Industries Limited",
    symbol: "AARTIIND",
  },
  {
    name: "Devyani International Limited",
    symbol: "DEVYANI",
  },
  {
    name: "Mangalore Refinery and Petrochemicals Limited",
    symbol: "MRPL",
  },
  {
    name: "ICICI Securities Limited",
    symbol: "ISEC",
  },
  {
    name: "Laurus Labs Limited",
    symbol: "LAURUSLABS",
  },
  {
    name: "IIFL Finance Limited",
    symbol: "IIFL",
  },
  {
    name: "SKF India Limited",
    symbol: "SKFINDIA",
  },
  {
    name: "Relaxo Footwears Limited",
    symbol: "RELAXO",
  },
  {
    name: "KIOCL Limited",
    symbol: "KIOCL",
  },
  {
    name: "Hitachi Energy India Limited",
    symbol: "POWERINDIA",
  },
  {
    name: "Radico Khaitan Limited",
    symbol: "RADICO",
  },
  {
    name: "Tata Investment Corporation Limited",
    symbol: "TATAINVEST",
  },
  {
    name: "Dr. Lal Path Labs Ltd.",
    symbol: "LALPATHLAB",
  },
  {
    name: "Five-Star Business Finance Limited",
    symbol: "FIVESTAR",
  },
  {
    name: "Aditya Birla Fashion and Retail Limited",
    symbol: "ABFRL",
  },
  {
    name: "Bata India Limited",
    symbol: "BATAINDIA",
  },
  {
    name: "Carborundum Universal Limited",
    symbol: "CARBORUNIV",
  },
  {
    name: "Gillette India Limited",
    symbol: "GILLETTE",
  },
  {
    name: "Atul Limited",
    symbol: "ATUL",
  },
  {
    name: "Piramal Enterprises Limited",
    symbol: "PEL",
  },
  {
    name: "Sonata Software Limited",
    symbol: "SONATSOFTW",
  },
  {
    name: "Kajaria Ceramics Limited",
    symbol: "KAJARIACER",
  },
  {
    name: "Brigade Enterprises Limited",
    symbol: "BRIGADE",
  },
  {
    name: "Aster DM Healthcare Limited",
    symbol: "ASTERDM",
  },
  {
    name: "PNB Housing Finance Limited",
    symbol: "PNBHOUSING",
  },
  {
    name: "IDFC Limited",
    symbol: "IDFC",
  },
  {
    name: "Sumitomo Chemical India Limited",
    symbol: "SUMICHEM",
  },
  {
    name: "Crompton Greaves Consumer Electricals Limited",
    symbol: "CROMPTON",
  },
  {
    name: "BIRLASOFT LIMITED",
    symbol: "BSOFT",
  },
  {
    name: "Cholamandalam Financial Holdings Limited",
    symbol: "CHOLAHLDNG",
  },
  {
    name: "Pfizer Limited",
    symbol: "PFIZER",
  },
  {
    name: "Blue Star Limited",
    symbol: "BLUESTARCO",
  },
  {
    name: "Navin Fluorine International Limited",
    symbol: "NAVINFLUOR",
  },
  {
    name: "Central Depository Services (India) Limited",
    symbol: "CDSL",
  },
  {
    name: "Sanofi India Limited",
    symbol: "SANOFI",
  },
  {
    name: "Trident Limited",
    symbol: "TRIDENT",
  },
  {
    name: "Motilal Oswal Financial Services Limited",
    symbol: "MOTILALOFS",
  },
  {
    name: "Suven Pharmaceuticals Limited",
    symbol: "SUVENPHAR",
  },
  {
    name: "Piramal Pharma Limited",
    symbol: "PPLPHARMA",
  },
  {
    name: "Affle (India) Limited",
    symbol: "AFFLE",
  },
  {
    name: "Vinati Organics Limited",
    symbol: "VINATIORGA",
  },
  {
    name: "Tata Teleservices (Maharashtra) Limited",
    symbol: "TTML",
  },
  {
    name: "CIE Automotive India Limited",
    symbol: "CIEINDIA",
  },
  {
    name: "Cochin Shipyard Limited",
    symbol: "COCHINSHIP",
  },
  {
    name: "Castrol India Limited",
    symbol: "CASTROLIND",
  },
  {
    name: "R R Kabel Limited",
    symbol: "RRKABEL",
  },
  {
    name: "Jyothy Labs Limited",
    symbol: "JYOTHYLAB",
  },
  {
    name: "CESC Limited",
    symbol: "CESC",
  },
  {
    name: "Blue Dart Express Limited",
    symbol: "BLUEDART",
  },
  {
    name: "Whirlpool of India Limited",
    symbol: "WHIRLPOOL",
  },
  {
    name: "JBM Auto Limited",
    symbol: "JBMA",
  },
  {
    name: "Gujarat State Petronet Limited",
    symbol: "GSPL",
  },
  {
    name: "Elgi Equipments Limited",
    symbol: "ELGIEQUIP",
  },
  {
    name: "Century Plyboards (India) Limited",
    symbol: "CENTURYPLY",
  },
  {
    name: "RBL Bank Limited",
    symbol: "RBLBANK",
  },
  {
    name: "Cello World Limited",
    symbol: "CELLO",
  },
  {
    name: "Kaynes Technology India Limited",
    symbol: "KAYNES",
  },
  {
    name: "RHI MAGNESITA INDIA LIMITED",
    symbol: "RHIM",
  },
  {
    name: "Clean Science and Technology Limited",
    symbol: "CLEAN",
  },
  {
    name: "Finolex Cables Limited",
    symbol: "FINCABLES",
  },
  {
    name: "Indiamart Intermesh Limited",
    symbol: "INDIAMART",
  },
  {
    name: "Inox Wind Limited",
    symbol: "INOXWIND",
  },
  {
    name: "PVR INOX Limited",
    symbol: "PVRINOX",
  },
  {
    name: "Ircon International Limited",
    symbol: "IRCON",
  },
  {
    name: "DCM Shriram Limited",
    symbol: "DCMSHRIRAM",
  },
  {
    name: "Shyam Metalics and Energy Limited",
    symbol: "SHYAMMETL",
  },
  {
    name: "Aptus Value Housing Finance India Limited",
    symbol: "APTUS",
  },
  {
    name: "Capri Global Capital Limited",
    symbol: "CGCL",
  },
  {
    name: "Krishna Institute of Medical Sciences Limited",
    symbol: "KIMS",
  },
  {
    name: "TVS Holdings Limited",
    symbol: "TVSHLTD",
  },
  {
    name: "EIH Limited",
    symbol: "EIHOTEL",
  },
  {
    name: "Chambal Fertilizers & Chemicals Limited",
    symbol: "CHAMBLFERT",
  },
  {
    name: "Concord Biotech Limited",
    symbol: "CONCORDBIO",
  },
  {
    name: "Fine Organic Industries Limited",
    symbol: "FINEORG",
  },
  {
    name: "KEC International Limited",
    symbol: "KEC",
  },
  {
    name: "NMDC Steel Limited",
    symbol: "NSLNISP",
  },
  {
    name: "Indian Energy Exchange Limited",
    symbol: "IEX",
  },
  {
    name: "Alembic Pharmaceuticals Limited",
    symbol: "APLLTD",
  },
  {
    name: "Tejas Networks Limited",
    symbol: "TEJASNET",
  },
  {
    name: "Natco Pharma Limited",
    symbol: "NATCOPHARM",
  },
  {
    name: "Tanla Platforms Limited",
    symbol: "TANLA",
  },
  {
    name: "NBCC (India) Limited",
    symbol: "NBCC",
  },
  {
    name: "Lakshmi Machine Works Limited",
    symbol: "LAXMIMACH",
  },
  {
    name: "Manappuram Finance Limited",
    symbol: "MANAPPURAM",
  },
  {
    name: "Welspun Corp Limited",
    symbol: "WELCORP",
  },
  {
    name: "Chalet Hotels Limited",
    symbol: "CHALET",
  },
  {
    name: "Poly Medicure Limited",
    symbol: "POLYMED",
  },
  {
    name: "Honasa Consumer Limited",
    symbol: "HONASA",
  },
  {
    name: "TITAGARH RAIL SYSTEMS LIMITED",
    symbol: "TITAGARH",
  },
  {
    name: "Welspun Living Limited",
    symbol: "WELSPUNLIV",
  },
  {
    name: "Asahi India Glass Limited",
    symbol: "ASAHIINDIA",
  },
  {
    name: "The Great Eastern Shipping Company Limited",
    symbol: "GESHIP",
  },
  {
    name: "Amara Raja Energy & Mobility Limited",
    symbol: "ARE&M",
  },
  {
    name: "Zensar Technologies Limited",
    symbol: "ZENSARTECH",
  },
  {
    name: "Redington Limited",
    symbol: "REDINGTON",
  },
  {
    name: "AstraZeneca Pharma India Limited",
    symbol: "ASTRAZEN",
  },
  {
    name: "Nuvoco Vistas Corporation Limited",
    symbol: "NUVOCO",
  },
  {
    name: "Bikaji Foods International Limited",
    symbol: "BIKAJI",
  },
  {
    name: "Century Textiles & Industries Limited",
    symbol: "CENTURYTEX",
  },
  {
    name: "Happiest Minds Technologies Limited",
    symbol: "HAPPSTMNDS",
  },
  {
    name: "Himadri Speciality Chemical Limited",
    symbol: "HSCL",
  },
  {
    name: "Karur Vysya Bank Limited",
    symbol: "KARURVYSYA",
  },
  {
    name: "The Jammu & Kashmir Bank Limited",
    symbol: "J&KBANK",
  },
  {
    name: "Aditya Birla Sun Life AMC Limited",
    symbol: "ABSLAMC",
  },
  {
    name: "Swan Energy Limited",
    symbol: "SWANENERGY",
  },
  {
    name: "Sheela Foam Limited",
    symbol: "SFL",
  },
  {
    name: "Triveni Turbine Limited",
    symbol: "TRITURBINE",
  },
  {
    name: "BASF India Limited",
    symbol: "BASF",
  },
  {
    name: "Jindal Saw Limited",
    symbol: "JINDALSAW",
  },
  {
    name: "BLS International Services Limited",
    symbol: "BLS",
  },
  {
    name: "Jupiter Wagons Limited",
    symbol: "JWL",
  },
  {
    name: "Ramkrishna Forgings Limited",
    symbol: "RKFORGE",
  },
  {
    name: "Finolex Industries Limited",
    symbol: "FINPIPE",
  },
  {
    name: "Computer Age Management Services Limited",
    symbol: "CAMS",
  },
  {
    name: "Alkyl Amines Chemicals Limited",
    symbol: "ALKYLAMINE",
  },
  {
    name: "Gujarat Mineral Development Corporation Limited",
    symbol: "GMDCLTD",
  },
  {
    name: "GE T&D India Limited",
    symbol: "GET&D",
  },
  {
    name: "Firstsource Solutions Limited",
    symbol: "FSL",
  },
  {
    name: "WESTLIFE FOODWORLD LIMITED",
    symbol: "WESTLIFE",
  },
  {
    name: "eClerx Services Limited",
    symbol: "ECLERX",
  },
  {
    name: "V-Guard Industries Limited",
    symbol: "VGUARD",
  },
  {
    name: "Nuvama Wealth Management Limited",
    symbol: "NUVAMA",
  },
  {
    name: "Maharashtra Seamless Limited",
    symbol: "MAHSEAMLES",
  },
  {
    name: "Eris Lifesciences Limited",
    symbol: "ERIS",
  },
  {
    name: "Aegis Logistics Limited",
    symbol: "AEGISCHEM",
  },
  {
    name: "Signatureglobal (India) Limited",
    symbol: "SIGNATURE",
  },
  {
    name: "Jai Balaji Industries Limited",
    symbol: "JAIBALAJI",
  },
  {
    name: "Aavas Financiers Limited",
    symbol: "AAVAS",
  },
  {
    name: "Shree Renuka Sugars Limited",
    symbol: "RENUKA",
  },
  {
    name: "HBL Power Systems Limited",
    symbol: "HBLPOWER",
  },
  {
    name: "RITES Limited",
    symbol: "RITES",
  },
  {
    name: "Ksb Limited",
    symbol: "KSB",
  },
  {
    name: "HFCL Limited",
    symbol: "HFCL",
  },
  {
    name: "Syrma SGS Technology Limited",
    symbol: "SYRMA",
  },
  {
    name: "Equitas Small Finance Bank Limited",
    symbol: "EQUITASBNK",
  },
  {
    name: "Akzo Nobel India Limited",
    symbol: "AKZOINDIA",
  },
  {
    name: "Mahanagar Gas Limited",
    symbol: "MGL",
  },
  {
    name: "BEML Limited",
    symbol: "BEML",
  },
  {
    name: "Aether Industries Limited",
    symbol: "AETHER",
  },
  {
    name: "Gujarat Narmada Valley Fertilizers and Chemicals Limited",
    symbol: "GNFC",
  },
  {
    name: "Kalpataru Projects International Limited",
    symbol: "KPIL",
  },
  {
    name: "Raymond Limited",
    symbol: "RAYMOND",
  },
  {
    name: "Intellect Design Arena Limited",
    symbol: "INTELLECT",
  },
  {
    name: "Craftsman Automation Limited",
    symbol: "CRAFTSMAN",
  },
  {
    name: "Bajaj Electricals Limited",
    symbol: "BAJAJELEC",
  },
  {
    name: "Anupam Rasayan India Limited",
    symbol: "ANURAS",
  },
  {
    name: "Vardhman Textiles Limited",
    symbol: "VTL",
  },
  {
    name: "Ujjivan Small Finance Bank Limited",
    symbol: "UJJIVANSFB",
  },
  {
    name: "Birla Corporation Limited",
    symbol: "BIRLACORPN",
  },
  {
    name: "G R Infraprojects Limited",
    symbol: "GRINFRA",
  },
  {
    name: "Olectra Greentech Limited",
    symbol: "OLECTRA",
  },
  {
    name: "City Union Bank Limited",
    symbol: "CUB",
  },
  {
    name: "UTI Asset Management Company Limited",
    symbol: "UTIAMC",
  },
  {
    name: "Bombay Burmah Trading Corporation Limited",
    symbol: "BBTC",
  },
  {
    name: "Godfrey Phillips India Limited",
    symbol: "GODFRYPHLP",
  },
  {
    name: "Newgen Software Technologies Limited",
    symbol: "NEWGEN",
  },
  {
    name: "Railtel Corporation Of India Limited",
    symbol: "RAILTEL",
  },
  {
    name: "Anand Rathi Wealth Limited",
    symbol: "ANANDRATHI",
  },
  {
    name: "Rajesh Exports Limited",
    symbol: "RAJESHEXPO",
  },
  {
    name: "Graphite India Limited",
    symbol: "GRAPHITE",
  },
  {
    name: "Godrej Agrovet Limited",
    symbol: "GODREJAGRO",
  },
  {
    name: "Zydus Wellness Limited",
    symbol: "ZYDUSWELL",
  },
  {
    name: "Godawari Power And Ispat limited",
    symbol: "GPIL",
  },
  {
    name: "Alok Industries Limited",
    symbol: "ALOKINDS",
  },
  {
    name: "Indiabulls Housing Finance Limited",
    symbol: "IBULHSGFIN",
  },
  {
    name: "JK Lakshmi Cement Limited",
    symbol: "JKLAKSHMI",
  },
  {
    name: "Amber Enterprises India Limited",
    symbol: "AMBER",
  },
  {
    name: "RattanIndia Enterprises Limited",
    symbol: "RTNINDIA",
  },
  {
    name: "Supreme Petrochem Limited",
    symbol: "SPLPETRO",
  },
  {
    name: "C.E. Info Systems Limited",
    symbol: "MAPMYINDIA",
  },
  {
    name: "NCC Limited",
    symbol: "NCC",
  },
  {
    name: "Data Patterns (India) Limited",
    symbol: "DATAPATTNS",
  },
  {
    name: "Elecon Engineering Company Limited",
    symbol: "ELECON",
  },
  {
    name: "Chennai Petroleum Corporation Limited",
    symbol: "CHENNPETRO",
  },
  {
    name: "Can Fin Homes Limited",
    symbol: "CANFINHOME",
  },
  {
    name: "Caplin Point Laboratories Limited",
    symbol: "CAPLIPOINT",
  },
  {
    name: "TTK Prestige Limited",
    symbol: "TTKPRESTIG",
  },
  {
    name: "Praj Industries Limited",
    symbol: "PRAJIND",
  },
  {
    name: "Cera Sanitaryware Limited",
    symbol: "CERA",
  },
  {
    name: "Sterling and Wilson Renewable Energy Limited",
    symbol: "SWSOLAR",
  },
  {
    name: "Shree Renuka Sugars Limited",
    symbol: "RENUKA",
  },
  {
    name: "ROUTE MOBILE LIMITED",
    symbol: "ROUTE",
  },
  {
    name: "Garden Reach Shipbuilders & Engineers Limited",
    symbol: "GRSE",
  },
  {
    name: "EID Parry India Limited",
    symbol: "EIDPARRY",
  },
  {
    name: "Action Construction Equipment Limited",
    symbol: "ACE",
  },
  {
    name: "Galaxy Surfactants Limited",
    symbol: "GALAXYSURF",
  },
  {
    name: "Ingersoll Rand (India) Limited",
    symbol: "INGERRAND",
  },
  {
    name: "Granules India Limited",
    symbol: "GRANULES",
  },
  {
    name: "CEAT Limited",
    symbol: "CEATLTD",
  },
  {
    name: "JK Tyre & Industries Limited",
    symbol: "JKTYRE",
  },
  {
    name: "Schneider Electric Infrastructure Limited",
    symbol: "SCHNEIDER",
  },
  {
    name: "Happy Forgings Limited",
    symbol: "HAPPYFORGE",
  },
  {
    name: "Engineers India Limited",
    symbol: "ENGINERSIN",
  },
  {
    name: "Gujarat State Fertilizers & Chemicals Limited",
    symbol: "GSFC",
  },
  {
    name: "Anant Raj Limited",
    symbol: "ANANTRAJ",
  },
  {
    name: "Jaiprakash Power Ventures Limited",
    symbol: "JPPOWER",
  },
  {
    name: "SBFC Finance Limited",
    symbol: "SBFC",
  },
  {
    name: "Kirloskar Oil Engines Limited",
    symbol: "KIRLOSENG",
  },
  {
    name: "Lemon Tree Hotels Limited",
    symbol: "LEMONTREE",
  },
  {
    name: "PCBL LIMITED",
    symbol: "PCBL",
  },
  {
    name: "JM Financial Limited",
    symbol: "JMFINANCIL",
  },
  {
    name: "Latent View Analytics Limited",
    symbol: "LATENTVIEW",
  },
  {
    name: "Sobha Limited",
    symbol: "SOBHA",
  },
  {
    name: "Sun Pharma Advanced Research Company Limited",
    symbol: "SPARC",
  },
  {
    name: "Safari Industries (India) Limited",
    symbol: "SAFARI",
  },
  {
    name: "Prism Johnson Limited",
    symbol: "PRSMJOHNSN",
  },
  {
    name: "Minda Corporation Limited",
    symbol: "MINDACORP",
  },
  {
    name: "Network18 Media & Investments Limited",
    symbol: "NETWORK18",
  },
  {
    name: "Esab India Limited",
    symbol: "ESABINDIA",
  },
  {
    name: "Sapphire Foods India Limited",
    symbol: "SAPPHIRE",
  },
  {
    name: "Usha Martin Limited",
    symbol: "USHAMART",
  },
  {
    name: "PNC Infratech Limited",
    symbol: "PNCINFRA",
  },
  {
    name: "MMTC Limited",
    symbol: "MMTC",
  },
  {
    name: "Medplus Health Services Limited",
    symbol: "MEDPLUS",
  },
  {
    name: "Sarda Energy & Minerals Limited",
    symbol: "SARDAEN",
  },
  {
    name: "Reliance Power Limited",
    symbol: "RPOWER",
  },
  {
    name: "Rashtriya Chemicals and Fertilizers Limited",
    symbol: "RCF",
  },
  {
    name: "TVS Supply Chain Solutions Limited",
    symbol: "TVSSCS",
  },
  {
    name: "Jubilant Pharmova Limited",
    symbol: "JUBLPHARMA",
  },
  {
    name: "TV18 Broadcast Limited",
    symbol: "TV18BRDCST",
  },
  {
    name: "Balaji Amines Limited",
    symbol: "BALAMINES",
  },
  {
    name: "Mastek Limited",
    symbol: "MASTEK",
  },
  {
    name: "Techno Electric & Engineering Company Limited",
    symbol: "TECHNOE",
  },
  {
    name: "Metropolis Healthcare Limited",
    symbol: "METROPOLIS",
  },
  {
    name: "KRBL Limited",
    symbol: "KRBL",
  },
  {
    name: "Deepak Fertilizers and Petrochemicals Corporation Limited",
    symbol: "DEEPAKFERT",
  },
  {
    name: "Rategain Travel Technologies Limited",
    symbol: "RATEGAIN",
  },
  {
    name: "CCL Products (India) Limited",
    symbol: "CCL",
  },
  {
    name: "Campus Activewear Limited",
    symbol: "CAMPUS",
  },
  {
    name: "VIP Industries Limited",
    symbol: "VIPIND",
  },
  {
    name: "Maharashtra Scooters Limited",
    symbol: "MAHSCOOTER",
  },
  {
    name: "Varroc Engineering Limited",
    symbol: "VARROC",
  },
  {
    name: "Surya Roshni Limited",
    symbol: "SURYAROSNI",
  },
  {
    name: "Mahindra Lifespace Developers Limited",
    symbol: "MAHLIFE",
  },
  {
    name: "Gujarat Ambuja Exports Limited",
    symbol: "GAEL",
  },
  {
    name: "Reliance Infrastructure Limited",
    symbol: "RELINFRA",
  },
  {
    name: "Balrampur Chini Mills Limited",
    symbol: "BALRAMCHIN",
  },
  {
    name: "ION Exchange (India) Limited",
    symbol: "IONEXCHANG",
  },
  {
    name: "Kfin Technologies Limited",
    symbol: "KFINTECH",
  },
  {
    name: "Home First Finance Company India Limited",
    symbol: "HOMEFIRST",
  },
  {
    name: "Procter & Gamble Health Limited",
    symbol: "PGHL",
  },
  {
    name: "Prince Pipes And Fittings Limited",
    symbol: "PRINCEPIPE",
  },
  {
    name: "Responsive Industries Limited",
    symbol: "RESPONIND",
  },
  {
    name: "PTC Industries Limited",
    symbol: "PTCIL",
  },
  {
    name: "The Karnataka Bank Limited",
    symbol: "KTKBANK",
  },
  {
    name: "Jubilant Ingrevia Limited",
    symbol: "JUBLINGREA",
  },
  {
    name: "Glenmark Life Sciences Limited",
    symbol: "GLS",
  },
  {
    name: "Man Infraconstruction Limited",
    symbol: "MANINFRA",
  },
  {
    name: "Spandana Sphoorty Financial Limited",
    symbol: "SPANDANA",
  },
  {
    name: "The India Cements Limited",
    symbol: "INDIACEM",
  },
  {
    name: "Archean Chemical Industries Limited",
    symbol: "ACI",
  },
  {
    name: "INOX India Limited",
    symbol: "INOXINDIA",
  },
  {
    name: "Laxmi Organic Industries Limited",
    symbol: "LXCHEM",
  },
  {
    name: "Tamilnad Mercantile Bank Limited",
    symbol: "TMB",
  },
  {
    name: "Chemplast Sanmar Limited",
    symbol: "CHEMPLASTS",
  },
  {
    name: "Allcargo Logistics Limited",
    symbol: "ALLCARGO",
  },
  {
    name: "Electronics Mart India Limited",
    symbol: "EMIL",
  },
  {
    name: "Sandur Manganese & Iron Ores Limited",
    symbol: "SANDUMA",
  },
  {
    name: "Mishra Dhatu Nigam Limited",
    symbol: "MIDHANI",
  },
  {
    name: "Quess Corp Limited",
    symbol: "QUESS",
  },
  {
    name: "Tega Industries Limited",
    symbol: "TEGA",
  },
  {
    name: "Mahindra Holidays & Resorts India Limited",
    symbol: "MHRIL",
  },
  {
    name: "Shoppers Stop Limited",
    symbol: "SHOPERSTOP",
  },
  {
    name: "DOMS Industries Limited",
    symbol: "DOMS",
  },
  {
    name: "Shipping Corporation Of India Limited",
    symbol: "SCI",
  },
  {
    name: "Gravita India Limited",
    symbol: "GRAVITA",
  },
  {
    name: "Triveni Engineering & Industries Limited",
    symbol: "TRIVENI",
  },
  {
    name: "Gujarat Pipavav Port Limited",
    symbol: "GPPL",
  },
  {
    name: "HEG Limited",
    symbol: "HEG",
  },
  {
    name: "Edelweiss Financial Services Limited",
    symbol: "EDELWEISS",
  },
  {
    name: "D B Realty Limited",
    symbol: "DBREALTY",
  },
  {
    name: "Marksans Pharma Limited",
    symbol: "MARKSANS",
  },
  {
    name: "Keystone Realtors Limited",
    symbol: "RUSTOMJEE",
  },
  {
    name: "Vesuvius India Limited",
    symbol: "VESUVIUS",
  },
  {
    name: "Star Cement Limited",
    symbol: "STARCEMENT",
  },
  {
    name: "PDS Limited",
    symbol: "PDSL",
  },
  {
    name: "CSB Bank Limited",
    symbol: "CSBBANK",
  },
  {
    name: "IFCI Limited",
    symbol: "IFCI",
  },
  {
    name: "GMM Pfaudler Limited",
    symbol: "GMMPFAUDLR",
  },
  {
    name: "Isgec Heavy Engineering Limited",
    symbol: "ISGEC",
  },
  {
    name: "KNR Constructions Limited",
    symbol: "KNRCON",
  },
  {
    name: "Easy Trip Planners Limited",
    symbol: "EASEMYTRIP",
  },
  {
    name: "Saregama India Limited",
    symbol: "SAREGAMA",
  },
  {
    name: "Jupiter Life Line Hospitals Limited",
    symbol: "JLHL",
  },
  {
    name: "Indigo Paints Limited",
    symbol: "INDIGOPNTS",
  },
  {
    name: "LT Foods Limited",
    symbol: "LTFOODS",
  },
  {
    name: "Kirloskar Brothers Limited",
    symbol: "KIRLOSBROS",
  },
  {
    name: "Religare Enterprises Limited",
    symbol: "RELIGARE",
  },
  {
    name: "Jai Corp Limited",
    symbol: "JAICORPLTD",
  },
  {
    name: "Vijaya Diagnostic Centre Limited",
    symbol: "VIJAYA",
  },
  {
    name: "JK Paper Limited",
    symbol: "JKPAPER",
  },
  {
    name: "Ujjivan Financial Services Limited",
    symbol: "UJJIVAN",
  },
  {
    name: "Rolex Rings Limited",
    symbol: "ROLEXRINGS",
  },
  {
    name: "Garware Technical Fibres Limited",
    symbol: "GARFIBRES",
  },
  {
    name: "Arvind Limited",
    symbol: "ARVIND",
  },
  {
    name: "Just Dial Limited",
    symbol: "JUSTDIAL",
  },
  {
    name: "Greenlam Industries Limited",
    symbol: "GREENLAM",
  },
  {
    name: "VRL Logistics Limited",
    symbol: "VRLLOG",
  },
  {
    name: "Mtar Technologies Limited",
    symbol: "MTARTECH",
  },
  {
    name: "Neuland Laboratories Limited",
    symbol: "NEULANDLAB",
  },
  {
    name: "Power Mech Projects Limited",
    symbol: "POWERMECH",
  },
  {
    name: "Go Fashion (India) Limited",
    symbol: "GOCOLORS",
  },
  {
    name: "Zen Technologies Limited",
    symbol: "ZENTEC",
  },
  {
    name: "Netweb Technologies India Limited",
    symbol: "NETWEB",
  },
  {
    name: "SIS LIMITED",
    symbol: "SIS",
  },
  {
    name: "Voltamp Transformers Limited",
    symbol: "VOLTAMP",
  },
  {
    name: "Electrosteel Castings Limited",
    symbol: "ELECTCAST",
  },
  {
    name: "Mrs. Bectors Food Specialities Limited",
    symbol: "BECTORFOOD",
  },
  {
    name: "Vaibhav Global Limited",
    symbol: "VAIBHAVGBL",
  },
  {
    name: "Texmaco Rail & Engineering Limited",
    symbol: "TEXRAIL",
  },
  {
    name: "Sunteck Realty Limited",
    symbol: "SUNTECK",
  },
  {
    name: "R Systems International Limited",
    symbol: "RSYSTEMS",
  },
  {
    name: "Redtape Limited",
    symbol: "REDTAPE",
  },
  {
    name: "Inox Wind Energy Limited",
    symbol: "IWEL",
  },
  {
    name: "FDC Limited",
    symbol: "FDC",
  },
  {
    name: "EPL Limited",
    symbol: "EPL",
  },
  {
    name: "Shriram Pistons & Rings Limited",
    symbol: "SHRIPISTON",
  },
  {
    name: "Transport Corporation of India Limited",
    symbol: "TCI",
  },
  {
    name: "Thomas Cook (India) Limited",
    symbol: "THOMASCOOK",
  },
  {
    name: "Blue Jet Healthcare Limited",
    symbol: "BLUEJET",
  },
  {
    name: "NAVA LIMITED",
    symbol: "NAVA",
  },
  {
    name: "Hindustan Foods Limited",
    symbol: "HNDFDS",
  },
  {
    name: "MOIL Limited",
    symbol: "MOIL",
  },
  {
    name: "Nesco Limited",
    symbol: "NESCO",
  },
  {
    name: "PG Electroplast Limited",
    symbol: "PGEL",
  },
  {
    name: "Symphony Limited",
    symbol: "SYMPHONY",
  },
  {
    name: "Wockhardt Limited",
    symbol: "WOCKPHARMA",
  },
  {
    name: "Indo Count Industries Limited",
    symbol: "ICIL",
  },
  {
    name: "Share India Securities Limited",
    symbol: "SHAREINDIA",
  },
  {
    name: "India Shelter Finance Corporation Limited",
    symbol: "INDIASHLTR",
  },
  {
    name: "Jindal Worldwide Limited",
    symbol: "JINDWORLD",
  },
  {
    name: "Tata Coffee Limited",
    symbol: "TATACOFFEE",
  },
  {
    name: "CMS Info Systems Limited",
    symbol: "CMSINFO",
  },
  {
    name: "Genus Power Infrastructures Limited",
    symbol: "GENUSPOWER",
  },
  {
    name: "Infibeam Avenues Limited",
    symbol: "INFIBEAM",
  },
  {
    name: "Strides Pharma Science Limited",
    symbol: "STAR",
  },
  {
    name: "NIIT Learning Systems Limited",
    symbol: "NIITMTS",
  },
  {
    name: "Utkarsh Small Finance Bank Limited",
    symbol: "UTKARSHBNK",
  },
  {
    name: "Technocraft Industries (India) Limited",
    symbol: "TIIL",
  },
  {
    name: "Fusion Micro Finance Limited",
    symbol: "FUSION",
  },
  {
    name: "BOROSIL RENEWABLES LIMITED",
    symbol: "BORORENEW",
  },
  {
    name: "ASK Automotive Limited",
    symbol: "ASKAUTOLTD",
  },
  {
    name: "Astra Microwave Products Limited",
    symbol: "ASTRAMICRO",
  },
  {
    name: "Avanti Feeds Limited",
    symbol: "AVANTIFEED",
  },
  {
    name: "JSW Holdings Limited",
    symbol: "JSWHL",
  },
  {
    name: "Gujarat Alkalies and Chemicals Limited",
    symbol: "GUJALKALI",
  },
  {
    name: "Sterlite Technologies Limited",
    symbol: "STLTECH",
  },
  {
    name: "Nazara Technologies Limited",
    symbol: "NAZARA",
  },
  {
    name: "Gabriel India Limited",
    symbol: "GABRIEL",
  },
  {
    name: "Suprajit Engineering Limited",
    symbol: "SUPRAJIT",
  },
  {
    name: "PTC India Limited",
    symbol: "PTC",
  },
  {
    name: "Dilip Buildcon Limited",
    symbol: "DBL",
  },
  {
    name: "The South Indian Bank Limited",
    symbol: "SOUTHBANK",
  },
  {
    name: "GHCL Limited",
    symbol: "GHCL",
  },
  {
    name: "Restaurant Brands Asia Limited",
    symbol: "RBA",
  },
  {
    name: "Paradeep Phosphates Limited",
    symbol: "PARADEEP",
  },
  {
    name: "H.G. Infra Engineering Limited",
    symbol: "HGINFRA",
  },
  {
    name: "ICRA Limited",
    symbol: "ICRA",
  },
  {
    name: "Ramky Infrastructure Limited",
    symbol: "RAMKY",
  },
  {
    name: "Kesoram Industries Limited",
    symbol: "KESORAMIND",
  },
  {
    name: "Sansera Engineering Limited",
    symbol: "SANSERA",
  },
  {
    name: "Arvind Fashions Limited",
    symbol: "ARVINDFASN",
  },
  {
    name: "Senco Gold Limited",
    symbol: "SENCO",
  },
  {
    name: "Aurionpro Solutions Limited",
    symbol: "AURIONPRO",
  },
  {
    name: "Teamlease Services Limited",
    symbol: "TEAMLEASE",
  },
  {
    name: "Cyient DLM Limited",
    symbol: "CYIENTDLM",
  },
  {
    name: "AGI Greenpac Limited",
    symbol: "AGI",
  },
  {
    name: "KPI Green Energy Limited",
    symbol: "KPIGREEN",
  },
  {
    name: "HeidelbergCement India Limited",
    symbol: "HEIDELBERG",
  },
  {
    name: "TCI Express Limited",
    symbol: "TCIEXP",
  },
  {
    name: "VST Industries Limited",
    symbol: "VSTIND",
  },
  {
    name: "Greenpanel Industries Limited",
    symbol: "GREENPANEL",
  },
  {
    name: "Dodla Dairy Limited",
    symbol: "DODLA",
  },
  {
    name: "Ahluwalia Contracts (India) Limited",
    symbol: "AHLUCONT",
  },
  {
    name: "Rain Industries Limited",
    symbol: "RAIN",
  },
  {
    name: "Gateway Distriparks Limited",
    symbol: "GATEWAY",
  },
  {
    name: "Orient Cement Limited",
    symbol: "ORIENTCEM",
  },
  {
    name: "Ethos Limited",
    symbol: "ETHOSLTD",
  },
  {
    name: "Healthcare Global Enterprises Limited",
    symbol: "HCG",
  },
  {
    name: "Fedbank Financial Services Limited",
    symbol: "FEDFINA",
  },
  {
    name: "Gokaldas Exports Limited",
    symbol: "GOKEX",
  },
  {
    name: "Prudent Corporate Advisory Services Limited",
    symbol: "PRUDENT",
  },
  {
    name: "ITD Cementation India Limited",
    symbol: "ITDCEM",
  },
  {
    name: "Black Box Limited",
    symbol: "BBOX",
  },
  {
    name: "Jaiprakash Associates Limited",
    symbol: "JPASSOCIAT",
  },
  {
    name: "Rallis India Limited",
    symbol: "RALLIS",
  },
  {
    name: "Orient Electric Limited",
    symbol: "ORIENTELEC",
  },
  {
    name: "RattanIndia Power Limited",
    symbol: "RTNPOWER",
  },
  {
    name: "Dhanuka Agritech Limited",
    symbol: "DHANUKA",
  },
  {
    name: "West Coast Paper Mills Limited",
    symbol: "WSTCSTPAPR",
  },
  {
    name: "Wonderla Holidays Limited",
    symbol: "WONDERLA",
  },
  {
    name: "D.B.Corp Limited",
    symbol: "DBCORP",
  },
  {
    name: "MAS Financial Services Limited",
    symbol: "MASFIN",
  },
  {
    name: "LLOYDS ENGINEERING WORKS LIMITED",
    symbol: "LLOYDSENGG",
  },
  {
    name: "Indiabulls Real Estate Limited",
    symbol: "IBREALEST",
  },
  {
    name: "Kewal Kiran Clothing Limited",
    symbol: "KKCL",
  },
  {
    name: "Mstc Limited",
    symbol: "MSTCLTD",
  },
  {
    name: "The Tinplate Company of India Limited",
    symbol: "TINPLATE",
  },
  {
    name: "Patel Engineering Limited",
    symbol: "PATELENG",
  },
  {
    name: "Tilaknagar Industries Limited",
    symbol: "TI",
  },
  {
    name: "Pricol Limited",
    symbol: "PRICOLLTD",
  },
  {
    name: "Shanthi Gears Limited",
    symbol: "SHANTIGEAR",
  },
  {
    name: "Hinduja Global Solutions Limited",
    symbol: "HGS",
  },
  {
    name: "Privi Speciality Chemicals Limited",
    symbol: "PRIVISCL",
  },
  {
    name: "Choice International Limited",
    symbol: "CHOICEIN",
  },
  {
    name: "Aarti Pharmalabs Limited",
    symbol: "AARTIPHARM",
  },
  {
    name: "Banco Products (I) Limited",
    symbol: "BANCOINDIA",
  },
  {
    name: "Max Estates Limited",
    symbol: "MAXESTATES",
  },
  {
    name: "NOCIL Limited",
    symbol: "NOCIL",
  },
  {
    name: "Jayaswal Neco Industries Limited",
    symbol: "JAYNECOIND",
  },
  {
    name: "Welspun Enterprises Limited",
    symbol: "WELENT",
  },
  {
    name: "Aarti Drugs Limited",
    symbol: "AARTIDRUGS",
  },
  {
    name: "IIFL Securities Limited",
    symbol: "IIFLSEC",
  },
  {
    name: "National Fertilizers Limited",
    symbol: "NFL",
  },
  {
    name: "Jamna Auto Industries Limited",
    symbol: "JAMNAAUTO",
  },
  {
    name: "Puravankara Limited",
    symbol: "PURVA",
  },
  {
    name: "Rossari Biotech Limited",
    symbol: "ROSSARI",
  },
  {
    name: "TIPS Industries Limited",
    symbol: "TIPSINDLTD",
  },
  {
    name: "J.Kumar Infraprojects Limited",
    symbol: "JKIL",
  },
  {
    name: "Hemisphere Properties India Limited",
    symbol: "HEMIPROP",
  },
  {
    name: "Gallantt Ispat Limited",
    symbol: "GALLANTT",
  },
  {
    name: "Hindustan Construction Company Limited",
    symbol: "HCC",
  },
  {
    name: "Muthoot Microfin Limited",
    symbol: "MUTHOOTMF",
  },
  {
    name: "Datamatics Global Services Limited",
    symbol: "DATAMATICS",
  },
  {
    name: "The Orissa Minerals Development Company Limited",
    symbol: "ORISSAMINE",
  },
  {
    name: "Jain Irrigation Systems Limited",
    symbol: "JISLJALEQS",
  },
  {
    name: "Sai Silks (Kalamandir) Limited",
    symbol: "KALAMANDIR",
  },
  {
    name: "Sula Vineyards Limited",
    symbol: "SULA",
  },
  {
    name: "HMA Agro Industries Limited",
    symbol: "HMAAGRO",
  },
  {
    name: "Advanced Enzyme Technologies Limited",
    symbol: "ADVENZYMES",
  },
  {
    name: "India Pesticides Limited",
    symbol: "IPL",
  },
  {
    name: "Sindhu Trade Links Limited",
    symbol: "SINDHUTRAD",
  },
  {
    name: "DCB Bank Limited",
    symbol: "DCBBANK",
  },
  {
    name: "Paisalo Digital Limited",
    symbol: "PAISALO",
  },
  {
    name: "Ami Organics Limited",
    symbol: "AMIORG",
  },
  {
    name: "La Opala RG Limited",
    symbol: "LAOPALA",
  },
  {
    name: "Thangamayil Jewellery Limited",
    symbol: "THANGAMAYL",
  },
  {
    name: "Azad Engineering Limited",
    symbol: "AZAD",
  },
  {
    name: "Sharda Cropchem Limited",
    symbol: "SHARDACROP",
  },
  {
    name: "Steel Strips Wheels Limited",
    symbol: "SSWL",
  },
  {
    name: "TD Power Systems Limited",
    symbol: "TDPOWERSYS",
  },
  {
    name: "JTL INDUSTRIES LIMITED",
    symbol: "JTLIND",
  },
  {
    name: "Epigral Limited",
    symbol: "EPIGRAL",
  },
  {
    name: "Time Technoplast Limited",
    symbol: "TIMETECHNO",
  },
  {
    name: "TARC Limited",
    symbol: "TARC",
  },
  {
    name: "Fineotex Chemical Limited",
    symbol: "FCL",
  },
  {
    name: "V-Mart Retail Limited",
    symbol: "VMART",
  },
  {
    name: "Rajratan Global Wire Limited",
    symbol: "RAJRATAN",
  },
  {
    name: "LG Balakrishnan & Bros Limited",
    symbol: "LGBBROSLTD",
  },
  {
    name: "Nucleus Software Exports Limited",
    symbol: "NUCLEUS",
  },
  {
    name: "Lux Industries Limited",
    symbol: "LUXIND",
  },
  {
    name: "Ashoka Buildcon Limited",
    symbol: "ASHOKA",
  },
  {
    name: "Delta Corp Limited",
    symbol: "DELTACORP",
  },
  {
    name: "Brightcom Group Limited",
    symbol: "BCG",
  },
  {
    name: "Neogen Chemicals Limited",
    symbol: "NEOGEN",
  },
  {
    name: "VA Tech Wabag Limited",
    symbol: "WABAG",
  },
  {
    name: "Kirloskar Pneumatic Company Limited",
    symbol: "KIRLPNU",
  },
  {
    name: "Sharda Motor Industries Limited",
    symbol: "SHARDAMOTR",
  },
  {
    name: "Jtekt India Limited",
    symbol: "JTEKTINDIA",
  },
  {
    name: "India Tourism Development Corporation Limited",
    symbol: "ITDC",
  },
  {
    name: "Borosil Limited",
    symbol: "BOROLTD",
  },
  {
    name: "Ashapura Minechem Limited",
    symbol: "ASHAPURMIN",
  },
  {
    name: "IFB Industries Limited",
    symbol: "IFBIND",
  },
  {
    name: "Sudarshan Chemical Industries Limited",
    symbol: "SUDARSCHEM",
  },
  {
    name: "Sunflag Iron And Steel Company Limited",
    symbol: "SUNFLAG",
  },
  {
    name: "Hathway Cable & Datacom Limited",
    symbol: "HATHWAY",
  },
  {
    name: "Hikal Limited",
    symbol: "HIKAL",
  },
  {
    name: "Tatva Chintan Pharma Chem Limited",
    symbol: "TATVA",
  },
  {
    name: "Balmer Lawrie & Company Limited",
    symbol: "BALMLAWRIE",
  },
  {
    name: "Bharat Rasayan Limited",
    symbol: "BHARATRAS",
  },
  {
    name: "Kolte - Patil Developers Limited",
    symbol: "KOLTEPATIL",
  },
  {
    name: "HLE Glascoat Limited",
    symbol: "HLEGLAS",
  },
  {
    name: "Hindware Home Innovation Limited",
    symbol: "HINDWAREAP",
  },
  {
    name: "Flair Writing Industries Limited",
    symbol: "FLAIR",
  },
  {
    name: "Indoco Remedies Limited",
    symbol: "INDOCO",
  },
  {
    name: "Samhi Hotels Limited",
    symbol: "SAMHI",
  },
  {
    name: "Avalon Technologies Limited",
    symbol: "AVALON",
  },
  {
    name: "Orchid Pharma Limited",
    symbol: "ORCHPHARMA",
  },
  {
    name: "Harsha Engineers International Limited",
    symbol: "HARSHA",
  },
  {
    name: "KDDL Limited",
    symbol: "KDDL",
  },
  {
    name: "Bajaj Hindusthan Sugar Limited",
    symbol: "BAJAJHIND",
  },
  {
    name: "Sanghvi Movers Limited",
    symbol: "SANGHVIMOV",
  },
  {
    name: "ESAF Small Finance Bank Limited",
    symbol: "ESAFSFB",
  },
  {
    name: "Subros Limited",
    symbol: "SUBROS",
  },
  {
    name: "Pilani Investment and Industries Corporation Limited",
    symbol: "PILANIINVS",
  },
  {
    name: "Gulf Oil Lubricants India Limited",
    symbol: "GULFOILLUB",
  },
  {
    name: "Greaves Cotton Limited",
    symbol: "GREAVESCOT",
  },
  {
    name: "eMudhra Limited",
    symbol: "EMUDHRA",
  },
  {
    name: "Ideaforge Technology Limited",
    symbol: "IDEAFORGE",
  },
  {
    name: "Kirloskar Industries Limited",
    symbol: "KIRLOSIND",
  },
  {
    name: "UFLEX Limited",
    symbol: "UFLEX",
  },
  {
    name: "Ganesh Housing Corporation Limited",
    symbol: "GANESHHOUC",
  },
  {
    name: "Dynamatic Technologies Limited",
    symbol: "DYNAMATECH",
  },
  {
    name: "Maithan Alloys Limited",
    symbol: "MAITHANALL",
  },
  {
    name: "TVS Srichakra Limited",
    symbol: "TVSSRICHAK",
  },
  {
    name: "Landmark Cars Limited",
    symbol: "LANDMARK",
  },
  {
    name: "Kaveri Seed Company Limited",
    symbol: "KSCL",
  },
  {
    name: "Navneet Education Limited",
    symbol: "NAVNETEDUL",
  },
  {
    name: "Tasty Bite Eatables Limited",
    symbol: "TASTYBITE",
  },
  {
    name: "Thyrocare Technologies Limited",
    symbol: "THYROCARE",
  },
  {
    name: "Saksoft Limited",
    symbol: "SAKSOFT",
  },
  {
    name: "Tata Metaliks Limited",
    symbol: "TATAMETALI",
  },
  {
    name: "GMR Power and Urban Infra Limited",
    symbol: "GMRP&UI",
  },
  {
    name: "Dish TV India Limited",
    symbol: "DISHTV",
  },
  {
    name: "Cartrade Tech Limited",
    symbol: "CARTRADE",
  },
  {
    name: "Dalmia Bharat Sugar and Industries Limited",
    symbol: "DALMIASUG",
  },
  {
    name: "Nilkamal Limited",
    symbol: "NILKAMAL",
  },
  {
    name: "Sagar Cements Limited",
    symbol: "SAGCEM",
  },
  {
    name: "DCX Systems Limited",
    symbol: "DCXINDIA",
  },
  {
    name: "Polyplex Corporation Limited",
    symbol: "POLYPLEX",
  },
  {
    name: "Transformers And Rectifiers (India) Limited",
    symbol: "TRIL",
  },
  {
    name: "Sanghi Industries Limited",
    symbol: "SANGHIIND",
  },
  {
    name: "Shalby Limited",
    symbol: "SHALBY",
  },
  {
    name: "V.S.T Tillers Tractors Limited",
    symbol: "VSTTILLERS",
  },
  {
    name: "Garware Hi-Tech Films Limited",
    symbol: "GRWRHITECH",
  },
  {
    name: "NRB Bearing Limited",
    symbol: "NRBBEARING",
  },
  {
    name: "Sundaram Finance Holdings Limited",
    symbol: "SUNDARMHLD",
  },
  {
    name: "Automotive Axles Limited",
    symbol: "AUTOAXLES",
  },
  {
    name: "Yatharth Hospital & Trauma Care Services Limited",
    symbol: "YATHARTH",
  },
  {
    name: "Bannari Amman Sugars Limited",
    symbol: "BANARISUG",
  },
  {
    name: "Gensol Engineering Limited",
    symbol: "GENSOL",
  },
  {
    name: "Bombay Dyeing & Mfg Company Limited",
    symbol: "BOMDYEING",
  },
  {
    name: "Prime Focus Limited",
    symbol: "PFOCUS",
  },
  {
    name: "Gufic Biosciences Limited",
    symbol: "GUFICBIO",
  },
  {
    name: "Shivalik Bimetal Controls Limited",
    symbol: "SBCL",
  },
  {
    name: "Bajaj Consumer Care Limited",
    symbol: "BAJAJCON",
  },
  {
    name: "Innova Captab Limited",
    symbol: "INNOVACAP",
  },
  {
    name: "Inox Green Energy Services Limited",
    symbol: "INOXGREEN",
  },
  {
    name: "Sundaram Clayton Limited",
    symbol: "SUNCLAY",
  },
  {
    name: "Somany Ceramics Limited",
    symbol: "SOMANYCERA",
  },
  {
    name: "Mold-Tek Packaging Limited",
    symbol: "MOLDTKPAC",
  },
  {
    name: "Johnson Controls - Hitachi Air Conditioning India Limited",
    symbol: "JCHAC",
  },
  {
    name: "Divgi Torqtransfer Systems Limited",
    symbol: "DIVGIITTS",
  },
  {
    name: "Prakash Industries Limited",
    symbol: "PRAKASH",
  },
  {
    name: "Apollo Micro Systems Limited",
    symbol: "APOLLO",
  },
  {
    name: "Sandhar Technologies Limited",
    symbol: "SANDHAR",
  },
  {
    name: "Greenply Industries Limited",
    symbol: "GREENPLY",
  },
  {
    name: "Swaraj Engines Limited",
    symbol: "SWARAJENG",
  },
  {
    name: "Wendt (India) Limited",
    symbol: "WENDT",
  },
  {
    name: "Stylam Industries Limited",
    symbol: "STYLAMIND",
  },
  {
    name: "Cigniti Technologies Limited",
    symbol: "CIGNITITEC",
  },
  {
    name: "MPS Limited",
    symbol: "MPSLTD",
  },
  {
    name: "IFGL Refractories Limited",
    symbol: "IFGLEXPOR",
  },
  {
    name: "Kingfa Science & Technology (India) Limited",
    symbol: "KINGFA",
  },
  {
    name: "Shilpa Medicare Limited",
    symbol: "SHILPAMED",
  },
  {
    name: "Dreamfolks Services Limited",
    symbol: "DREAMFOLKS",
  },
  {
    name: "SEPC Limited",
    symbol: "SEPC",
  },
  {
    name: "Imagicaaworld Entertainment Limited",
    symbol: "IMAGICAA",
  },
  {
    name: "Unichem Laboratories Limited",
    symbol: "UNICHEMLAB",
  },
  {
    name: "Mukand Limited",
    symbol: "MUKANDLTD",
  },
  {
    name: "Venus Pipes & Tubes Limited",
    symbol: "VENUSPIPES",
  },
  {
    name: "Sequent Scientific Limited",
    symbol: "SEQUENT",
  },
  {
    name: "CARE Ratings Limited",
    symbol: "CARERATING",
  },
  {
    name: "Pearl Global Industries Limited",
    symbol: "PGIL",
  },
  {
    name: "Heritage Foods Limited",
    symbol: "HERITGFOOD",
  },
  {
    name: "Bombay Super Hybrid Seeds Limited",
    symbol: "BSHSL",
  },
  {
    name: "Tarsons Products Limited",
    symbol: "TARSONS",
  },
  {
    name: "Paras Defence and Space Technologies Limited",
    symbol: "PARAS",
  },
  {
    name: "Mahindra Logistics Limited",
    symbol: "MAHLOG",
  },
  {
    name: "Jindal Poly Films Limited",
    symbol: "JINDALPOLY",
  },
  {
    name: "Fiem Industries Limited",
    symbol: "FIEMIND",
  },
  {
    name: "PSP Projects Limited",
    symbol: "PSPPROJECT",
  },
  {
    name: "ISMT Limited",
    symbol: "ISMTLTD",
  },
  {
    name: "Venky's (India) Limited",
    symbol: "VENKEYS",
  },
  {
    name: "Bharat Bijlee Limited",
    symbol: "BBL",
  },
  {
    name: "Parag Milk Foods Limited",
    symbol: "PARAGMILK",
  },
  {
    name: "Den Networks Limited",
    symbol: "DEN",
  },
  {
    name: "Zaggle Prepaid Ocean Services Limited",
    symbol: "ZAGGLE",
  },
  {
    name: "IOL Chemicals and Pharmaceuticals Limited",
    symbol: "IOLCP",
  },
  {
    name: "Ashiana Housing Limited",
    symbol: "ASHIANA",
  },
  {
    name: "PTC India Financial Services Limited",
    symbol: "PFS",
  },
  {
    name: "The Anup Engineering Limited",
    symbol: "ANUP",
  },
  {
    name: "Indian Metals & Ferro Alloys Limited",
    symbol: "IMFA",
  },
  {
    name: "Apollo Pipes Limited",
    symbol: "APOLLOPIPE",
  },
  {
    name: "Vishnu Prakash R Punglia Limited",
    symbol: "VPRPL",
  },
  {
    name: "Dishman Carbogen Amcis Limited",
    symbol: "DCAL",
  },
  {
    name: "Gandhar Oil Refinery (India) Limited",
    symbol: "GANDHAR",
  },
  {
    name: "Goodluck India Limited",
    symbol: "GOODLUCK",
  },
  {
    name: "Optiemus Infracom Limited",
    symbol: "OPTIEMUS",
  },
  {
    name: "Seamec Limited",
    symbol: "SEAMECLTD",
  },
  {
    name: "Satin Creditcare Network Limited",
    symbol: "SATIN",
  },
  {
    name: "Apcotex Industries Limited",
    symbol: "APCOTEXIND",
  },
  {
    name: "Gujarat Industries Power Company Limited",
    symbol: "GIPCL",
  },
  {
    name: "Lumax Auto Technologies Limited",
    symbol: "LUMAXTECH",
  },
  {
    name: "Dollar Industries Limited",
    symbol: "DOLLAR",
  },
  {
    name: "Barbeque Nation Hospitality Limited",
    symbol: "BARBEQUE",
  },
  {
    name: "Uniparts India Limited",
    symbol: "UNIPARTS",
  },
  {
    name: "Vindhya Telelinks Limited",
    symbol: "VINDHYATEL",
  },
  {
    name: "Madhya Bharat Agro Products Limited",
    symbol: "MBAPL",
  },
  {
    name: "GOCL Corporation Limited",
    symbol: "GOCLCORP",
  },
  {
    name: "Prataap Snacks Limited",
    symbol: "DIAMONDYD",
  },
  {
    name: "Confidence Petroleum India Limited",
    symbol: "CONFIPET",
  },
  {
    name: "Styrenix Performance Materials Limited",
    symbol: "STYRENIX",
  },
  {
    name: "Supriya Lifescience Limited",
    symbol: "SUPRIYA",
  },
  {
    name: "Eveready Industries India Limited",
    symbol: "EVEREADY",
  },
  {
    name: "Globus Spirits Limited",
    symbol: "GLOBUSSPR",
  },
  {
    name: "Bhansali Engineering Polymers Limited",
    symbol: "BEPL",
  },
  {
    name: "Ugro Capital Limited",
    symbol: "UGROCAP",
  },
  {
    name: "Morepen Laboratories Limited",
    symbol: "MOREPENLAB",
  },
  {
    name: "Mayur Uniquoters Ltd",
    symbol: "MAYURUNIQ",
  },
  {
    name: "HMT Limited",
    symbol: "HMT",
  },
  {
    name: "Mufin Green Finance Limited",
    symbol: "MUFIN",
  },
  {
    name: "Tide Water Oil Company (India) Limited",
    symbol: "TIDEWATER",
  },
  {
    name: "IKIO Lighting Limited",
    symbol: "IKIO",
  },
  {
    name: "Repco Home Finance Limited",
    symbol: "REPCOHOME",
  },
  {
    name: "AXISCADES Technologies Limited",
    symbol: "AXISCADES",
  },
  {
    name: "Foseco India Limited",
    symbol: "FOSECOIND",
  },
  {
    name: "Artemis Medicare Services Limited",
    symbol: "ARTEMISMED",
  },
  {
    name: "Savita Oil Technologies Limited",
    symbol: "SOTL",
  },
  {
    name: "ANDHRA PAPER LIMITED",
    symbol: "ANDHRAPAP",
  },
  {
    name: "Siyaram Silk Mills Limited",
    symbol: "SIYSIL",
  },
  {
    name: "Honda India Power Products Limited",
    symbol: "HONDAPOWER",
  },
  {
    name: "Hindustan Oil Exploration Company Limited",
    symbol: "HINDOILEXP",
  },
  {
    name: "India Glycols Limited",
    symbol: "INDIAGLYCO",
  },
  {
    name: "TCNS Clothing Co. Limited",
    symbol: "TCNSBRANDS",
  },
  {
    name: "Precision Camshafts Limited",
    symbol: "PRECAM",
  },
  {
    name: "EMS Limited",
    symbol: "EMSLIMITED",
  },
  {
    name: "Skipper Limited",
    symbol: "SKIPPER",
  },
  {
    name: "Dhani Services Limited",
    symbol: "DHANI",
  },
  {
    name: "MM Forgings Limited",
    symbol: "MMFL",
  },
  {
    name: "Vishnu Chemicals Limited",
    symbol: "VISHNU",
  },
  {
    name: "Alembic Limited",
    symbol: "ALEMBICLTD",
  },
  {
    name: "Lumax Industries Limited",
    symbol: "LUMAXIND",
  },
  {
    name: "Krsnaa Diagnostics Limited",
    symbol: "KRSNAA",
  },
  {
    name: "Camlin Fine Sciences Limited",
    symbol: "CAMLINFINE",
  },
  {
    name: "Yatra Online Limited",
    symbol: "YATRA",
  },
  {
    name: "Manorama Industries Limited",
    symbol: "MANORAMA",
  },
  {
    name: "Pitti Engineering Limited",
    symbol: "PITTIENG",
  },
  {
    name: "Thirumalai Chemicals Limited",
    symbol: "TIRUMALCHM",
  },
  {
    name: "Updater Services Limited",
    symbol: "UDS",
  },
  {
    name: "Sirca Paints India Limited",
    symbol: "SIRCA",
  },
  {
    name: "Seshasayee Paper and Boards Limited",
    symbol: "SESHAPAPER",
  },
  {
    name: "BF Utilities Limited",
    symbol: "BFUTILITIE",
  },
  {
    name: "Rishabh Instruments Limited",
    symbol: "RISHABH",
  },
  {
    name: "IRM Energy Limited",
    symbol: "IRMENERGY",
  },
  {
    name: "RPG Life Sciences Limited",
    symbol: "RPGLIFE",
  },
  {
    name: "CARYSIL LIMITED",
    symbol: "CARYSIL",
  },
  {
    name: "Som Distilleries & Breweries Limited",
    symbol: "SDBL",
  },
  {
    name: "ADF Foods Limited",
    symbol: "ADFFOODS",
  },
  {
    name: "Oriental Hotels Limited",
    symbol: "ORIENTHOT",
  },
  {
    name: "Filatex India Limited",
    symbol: "FILATEX",
  },
  {
    name: "PC Jeweller Limited",
    symbol: "PCJEWELLER",
  },
  {
    name: "63 moons technologies limited",
    symbol: "63MOONS",
  },
  {
    name: "Fino Payments Bank Limited",
    symbol: "FINOPB",
  },
  {
    name: "Everest Industries Limited",
    symbol: "EVERESTIND",
  },
  {
    name: "RPSG VENTURES LIMITED",
    symbol: "RPSGVENT",
  },
  {
    name: "Huhtamaki India Limited",
    symbol: "HUHTAMAKI",
  },
  {
    name: "Precision Wires India Limited",
    symbol: "PRECWIRE",
  },
  {
    name: "GTPL Hathway Limited",
    symbol: "GTPL",
  },
  {
    name: "Astec LifeSciences Limited",
    symbol: "ASTEC",
  },
  {
    name: "Xpro India Limited",
    symbol: "XPROINDIA",
  },
  {
    name: "Sadhana Nitrochem Limited",
    symbol: "SADHNANIQ",
  },
  {
    name: "Ganesha Ecosphere Limited",
    symbol: "GANECOS",
  },
  {
    name: "Orient Green Power Company Limited",
    symbol: "GREENPOWER",
  },
  {
    name: "Jindal Drilling And Industries Limited",
    symbol: "JINDRILL",
  },
  {
    name: "Rupa & Company Limited",
    symbol: "RUPA",
  },
  {
    name: "Sangam (India) Limited",
    symbol: "SANGAMIND",
  },
  {
    name: "Arman Financial Services Limited",
    symbol: "ARMANFIN",
  },
  {
    name: "Agro Tech Foods Limited",
    symbol: "ATFL",
  },
  {
    name: "HIL Limited",
    symbol: "HIL",
  },
  {
    name: "Mahanagar Telephone Nigam Limited",
    symbol: "MTNL",
  },
  {
    name: "Kalyani Steels Limited",
    symbol: "KSL",
  },
  {
    name: "Accelya Solutions India Limited",
    symbol: "ACCELYA",
  },
  {
    name: "Sasken Technologies Limited",
    symbol: "SASKEN",
  },
  {
    name: "Bharat Wire Ropes Limited",
    symbol: "BHARATWIRE",
  },
  {
    name: "Shriram Properties Limited",
    symbol: "SHRIRAMPPS",
  },
  {
    name: "IndoStar Capital Finance Limited",
    symbol: "INDOSTAR",
  },
  {
    name: "Salasar Techno Engineering Limited",
    symbol: "SALASAR",
  },
  {
    name: "Vidhi Specialty Food Ingredients Limited",
    symbol: "VIDHIING",
  },
  {
    name: "Tamil Nadu Newsprint & Papers Limited",
    symbol: "TNPL",
  },
  {
    name: "Paramount Communications Limited",
    symbol: "PARACABLES",
  },
  {
    name: "Kiri Industries Limited",
    symbol: "KIRIINDUS",
  },
  {
    name: "TCPL Packaging Limited",
    symbol: "TCPLPACK",
  },
  {
    name: "Ador Welding Limited",
    symbol: "ADORWELD",
  },
  {
    name: "Mangalam Cement Limited",
    symbol: "MANGLMCEM",
  },
  {
    name: "Jagran Prakashan Limited",
    symbol: "JAGRAN",
  },
  {
    name: "Reliance Industrial Infrastructure Limited",
    symbol: "RIIL",
  },
  {
    name: "Spectrum Electrical Industries Limited",
    symbol: "SPECTRUM",
  },
  {
    name: "Expleo Solutions Limited",
    symbol: "EXPLEOSOL",
  },
  {
    name: "BF Investment Limited",
    symbol: "BFINVEST",
  },
  {
    name: "S. P. Apparels Limited",
    symbol: "SHK",
  },
  {
    name: "Panama Petrochem Limited",
    symbol: "PANAMAPET",
  },
  {
    name: "Vakrangee Limited",
    symbol: "VAKRANGEE",
  },
  {
    name: "Federal-Mogul Goetze (India) Limited.",
    symbol: "FMGOETZE",
  },
  {
    name: "Apollo Pipes Limited",
    symbol: "APOLLOPIPE",
  },
  {
    name: "TTK Healthcare Limited",
    symbol: "TTKHLTCARE",
  },
  {
    name: "Insecticides (India) Limited",
    symbol: "INSECTICID",
  },
  {
    name: "Veranda Learning Solutions Limited",
    symbol: "VERANDA",
  },
  {
    name: "Thejo Engineering Limited",
    symbol: "THEJO",
  },
  {
    name: "KCP Limited",
    symbol: "KCP",
  },
  {
    name: "Meghmani Organics Limited",
    symbol: "MOL",
  },
  {
    name: "Cantabil Retail India Limited",
    symbol: "CANTABIL",
  },
  {
    name: "Themis Medicare Limited",
    symbol: "THEMISMED",
  },
  {
    name: "Marathon Nextgen Realty Limited",
    symbol: "MARATHON",
  },
  {
    name: "Arvind SmartSpaces Limited",
    symbol: "ARVSMART",
  },
  {
    name: "Quick Heal Technologies Limited",
    symbol: "QUICKHEAL",
  },
  {
    name: "S.J.S. Enterprises Limited",
    symbol: "SJS",
  },
  {
    name: "SML Isuzu Limited",
    symbol: "SMLISUZU",
  },
  {
    name: "Subex Limited",
    symbol: "SUBEXLTD",
  },
  {
    name: "DPSC Limited",
    symbol: "DPSCLTD",
  },
  {
    name: "Ramco Industries Limited",
    symbol: "RAMCOIND",
  },
  {
    name: "Jash Engineering Limited",
    symbol: "JASH",
  },
  {
    name: "Shakti Pumps (India) Limited",
    symbol: "SHAKTIPUMP",
  },
  {
    name: "Credo Brands Marketing Limited",
    symbol: "MUFTI",
  },
  {
    name: "Geojit Financial Services Limited",
    symbol: "GEOJITFSL",
  },
  {
    name: "Butterfly Gandhimathi Appliances Limited",
    symbol: "BUTTERFLY",
  },
  {
    name: "Yasho Industries Limited",
    symbol: "YASHO",
  },
  {
    name: "Talbros Automotive Components Limited",
    symbol: "TALBROAUTO",
  },
  {
    name: "Capacit'e Infraprojects Limited",
    symbol: "CAPACITE",
  },
  {
    name: "Rane Holdings Limited",
    symbol: "RANEHOLDIN",
  },
  {
    name: "Gokul Agro Resources Limited",
    symbol: "GOKULAGRO",
  },
  {
    name: "Goldiam International Limited",
    symbol: "GOLDIAM",
  },
  {
    name: "Vadilal Industries Limited",
    symbol: "VADILALIND",
  },
  {
    name: "Nitin Spinners Limited",
    symbol: "NITINSPIN",
  },
  {
    name: "NELCO Limited",
    symbol: "NELCO",
  },
  {
    name: "Vardhman Special Steels Limited",
    symbol: "VSSL",
  },
  {
    name: "HLV LIMITED",
    symbol: "HLVLTD",
  },
  {
    name: "Rama Steel Tubes Limited",
    symbol: "RAMASTEEL",
  },
  {
    name: "Rossell India Limited",
    symbol: "ROSSELLIND",
  },
  {
    name: "Pix Transmissions Limited",
    symbol: "PIXTRANS",
  },
  {
    name: "Suven Life Sciences Limited",
    symbol: "SUVEN",
  },
  {
    name: "5Paisa Capital Limited",
    symbol: "5PAISA",
  },
  {
    name: "Unitech Limited",
    symbol: "UNITECH",
  },
  {
    name: "PNB Gilts Limited",
    symbol: "PNBGILTS",
  },
  {
    name: "Centum Electronics Limited",
    symbol: "CENTUM",
  },
  {
    name: "Amrutanjan Health Care Limited",
    symbol: "AMRUTANJAN",
  },
  {
    name: "Hariom Pipe Industries Limited",
    symbol: "HARIOMPIPE",
  },
  {
    name: "Man Industries (India) Limited",
    symbol: "MANINDS",
  },
  {
    name: "Bcl Industries Limited",
    symbol: "BCLIND",
  },
  {
    name: "Premier Explosives Limited",
    symbol: "PREMEXPLN",
  },
  {
    name: "Wheels India Limited",
    symbol: "WHEELS",
  },
  {
    name: "New Delhi Television Limited",
    symbol: "NDTV",
  },
  {
    name: "Dhampur Sugar Mills Limited",
    symbol: "DHAMPURSUG",
  },
  {
    name: "Pennar Industries Limited",
    symbol: "PENIND",
  },
  {
    name: "DCW Limited",
    symbol: "DCW",
  },
  {
    name: "Dredging Corporation of India Limited",
    symbol: "DREDGECORP",
  },
  {
    name: "Nalwa Sons Investments Limited",
    symbol: "NSIL",
  },
  {
    name: "Spacenet Enterprises India Limited",
    symbol: "SPCENET",
  },
  {
    name: "GTL Infrastructure Limited",
    symbol: "GTLINFRA",
  },
  {
    name: "Suryoday Small Finance Bank Limited",
    symbol: "SURYODAY",
  },
  {
    name: "Universal Cables Limited",
    symbol: "UNIVCABLES",
  },
  {
    name: "Sical Logistics Limited",
    symbol: "SICALLOG",
  },
  {
    name: "Himatsingka Seide Limited",
    symbol: "HIMATSEIDE",
  },
  {
    name: "Fairchem Organics Limited",
    symbol: "FAIRCHEMOR",
  },
  {
    name: "Deep Industries Limited",
    symbol: "DEEPINDS",
  },
  {
    name: "Igarashi Motors India Limited",
    symbol: "IGARASHI",
  },
  {
    name: "Shankara Building Products Limited",
    symbol: "SHANKARA",
  },
  {
    name: "Servotech Power Systems Limited",
    symbol: "SERVOTECH",
  },
  {
    name: "Punjab Chemicals & Crop Protection Limited",
    symbol: "PUNJABCHEM",
  },
  {
    name: "Allcargo Gati Limited",
    symbol: "ACLGATI",
  },
  {
    name: "Control Print Limited",
    symbol: "CONTROLPR",
  },
  {
    name: "COSMO FIRST LIMITED",
    symbol: "COSMOFIRST",
  },
  {
    name: "HPL Electric & Power Limited",
    symbol: "HPL",
  },
  {
    name: "Bhagiradha Chemicals & Industries Limited",
    symbol: "BHAGCHEM",
  },
  {
    name: "Abans Holdings Limited",
    symbol: "AHL",
  },
  {
    name: "Heranba Industries Limited",
    symbol: "HERANBA",
  },
  {
    name: "Atul Auto Limited",
    symbol: "ATULAUTO",
  },
  {
    name: "GVK Power & Infrastructure Limited",
    symbol: "GVKPIL",
  },
  {
    name: "Indraprastha Medical Corporation Limited",
    symbol: "INDRAMEDCO",
  },
  {
    name: "Sigachi Industries Limited",
    symbol: "SIGACHI",
  },
  {
    name: "Network People Services Technologies Limited",
    symbol: "NPST",
  },
  {
    name: "Hi-Tech Pipes Limited",
    symbol: "HITECH",
  },
  {
    name: "Southern Petrochemicals Industries Corporation  Limited",
    symbol: "SPIC",
  },
  {
    name: "Ajmera Realty & Infra India Limited",
    symbol: "AJMERA",
  },
  {
    name: "Manoj Vaibhav Gems N Jewellers Limited",
    symbol: "MVGJL",
  },
  {
    name: "Vascon Engineers Limited",
    symbol: "VASCONEQ",
  },
  {
    name: "Genesys International Corporation Limited",
    symbol: "GENESYS",
  },
  {
    name: "Uttam Sugar Mills Limited",
    symbol: "UTTAMSUGAR",
  },
  {
    name: "NIIT Limited",
    symbol: "NIITLTD",
  },
  {
    name: "Shaily Engineering Plastics Limited",
    symbol: "SHAILY",
  },
  {
    name: "Navkar Corporation Limited",
    symbol: "NAVKARCORP",
  },
  {
    name: "GE Power India Limited",
    symbol: "GEPIL",
  },
  {
    name: "Bajel Projects Limited",
    symbol: "BAJEL",
  },
  {
    name: "S. P. Apparels Limited",
    symbol: "SPAL",
  },
  {
    name: "Aptech Limited",
    symbol: "APTECHT",
  },
  {
    name: "The Andhra Sugars Limited",
    symbol: "ANDHRSUGAR",
  },
  {
    name: "Kuantum Papers Limited",
    symbol: "KUANTUM",
  },
  {
    name: "Krishana Phoschem Limited",
    symbol: "KRISHANA",
  },
  {
    name: "Kitex Garments Limited",
    symbol: "KITEX",
  },
  {
    name: "Cupid Limited",
    symbol: "CUPID",
  },
  {
    name: "Pokarna Limited",
    symbol: "POKARNA",
  },
  {
    name: "Kabra Extrusion Technik Limited",
    symbol: "KABRAEXTRU",
  },
  {
    name: "Stove Kraft Limited",
    symbol: "STOVEKRAFT",
  },
  {
    name: "D. P. Abhushan Limited",
    symbol: "DPABHUSHAN",
  },
  {
    name: "Monarch Networth Capital Limited",
    symbol: "MONARCH",
  },
  {
    name: "Jeena Sikho Lifecare Limited",
    symbol: "JSLL",
  },
  {
    name: "OM INFRA LIMITED",
    symbol: "OMINFRAL",
  },
];

export default stockList;
