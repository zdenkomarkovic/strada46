import type { Area } from "./areas-types";

export const areasA: Area[] = [
  {
    slug: "kumodraz",
    name: "Kumodraž",
    loc: "u Kumodražu",
    eta: "10 minuta",
    image: "/truck-1-1024x576.png",
    heroSub:
      "Kumodraž nam je kuća. Naši kamioni noću stoje ovde, pa kada pozovete, polazimo praktično iz vašeg komšiluka.",
    intro: [
      "Strada 46 je iz Kumodraža i to se oseti u vremenu dolaska. Dok drugi šlep službe kreću sa suprotnog kraja grada i čekaju u gužvi, naše vozilo za Kumodraž ide ulicama koje vozači poznaju napamet, uključujući i one gde navigacija greši ili vodi kroz slepe ulice.",
      "Bilo da vam je auto ostao pred kućom, na parkingu kod prodavnice ili na putu ka Jajincima, pozovite nas i recite približnu lokaciju. U Kumodražu najčešće stižemo pre nego što stignete da ispišete poruku porodici.",
    ],
    sitTitle: "Najčešće situacije u Kumodražu",
    situations: [
      "Auto koji se ne pali ispred kuće posle noći na hladnoći",
      "Vozilo zaglavljeno na neasfaltiranoj prilaznoj stazi ili u blatu",
      "Kvar na uzbrdici gde auto ne može sigurno da stoji",
      "Pražnjenje akumulatora kod vozila koja se retko voze",
      "Probušena guma na ulicama bez trotoara i osvetljenja",
      "Dostava goriva kada ostanete bez benzina na izlazu iz naselja",
    ],
    roadsTitle: "Poznajemo svaku ulicu Kumodraža",
    roads:
      "Kumodraž je izdužen uz Kumodrašku ulicu, a sa strane se račvaju užim putevima ka kućama i voćnjacima. Naši vozači znaju koji su prilazi dovoljno široki za kamion, a gde je potrebno da vozilo izvučemo vitlom na glavni put. Zato ne morate da pogađate nazive ulica: dovoljno je da kažete kod čega stojite, a mi ćemo vas naći.",
    faqs: [
      {
        q: "Da li je Kumodraž vaša glavna baza?",
        a: "Da, Strada 46 je iz Kumodraža, pa je to naša najbrža zona pokrivanja. Za većinu poziva iz Kumodraža vozilo stiže za oko 10 minuta.",
      },
      {
        q: "Možete li da izvučete auto sa prilaznog puta ili iz blata?",
        a: "Možemo. Za vozila zaglavljena van asfalta koristimo vitlo i odgovarajuću opremu, pa se auto izvlači bez oštećenja branika i podvozja.",
      },
      {
        q: "Šta ako ne znam tačnu adresu na kojoj stojim?",
        a: "Nije problem. Opišite nam okolinu ili nam pošaljite lokaciju preko mape na telefonu. Za Kumodraž nam je to najčešće dovoljno da vas odmah locirate.",
      },
    ],
    near: ["vozdovac", "banjica", "rakovica"],
  },
  {
    slug: "vozdovac",
    name: "Voždovac",
    loc: "na Voždovcu",
    eta: "10–15 minuta",
    image: "/20240131_215459-1024x576.jpg",
    heroSub:
      "Gust saobraćaj i stalno puna parkirališta zahtevaju vozača koji zna kako da priđe vozilu. Mi znamo Voždovac.",
    intro: [
      "Voždovac je jedna od najgušćih opština južnog Beograda: veliki broj stanova, svakodnevna kolona na bulevarima i parkiranje u dvorištima zgrada. Kada auto stane u takvom okruženju, brzina reakcije je važnija nego bilo gde drugde, jer vozilo koje blokira prolaz brzo postaje problem i za komšije.",
      "Naša ekipa dolazi iz susednog Kumodraža i na Voždovac stiže za desetak minuta. Imamo iskustva sa uskim prolazima između zgrada, garažama sa niskim plafonom i pločnicima na kojima se sve vozi preko ivičnjaka.",
    ],
    sitTitle: "Šta nas najčešće zovu na Voždovcu",
    situations: [
      "Blokiran automobil u dvorištu zgrade koji sprečava izlazak komšijama",
      "Vozilo zaglavljeno u podzemnoj garaži sa niskim plafonom",
      "Kvar u špicu na Bulevaru oslobođenja ili Vojvode Stepe",
      "Prazan akumulator posle noći ispred stambene zgrade",
      "Pauk i blokada točka na mestu gde ne možete odmah da pređete na drugu stranu",
      "Pomoć vozačima koji ostanu usred raskrsnice na semaforu",
    ],
    roadsTitle: "Bulevari, raskrsnice i garaže Voždovca",
    roads:
      "Najkritičnija mesta su Bulevar oslobođenja i Bulevar Vojvode Stepe, gde svaka blokirana traka odmah pravi kolonu. Za takve kvarove dolazimo sa signalizacijom, a vozilo sklanjamo što pre, da ne zadržavamo ostale. Manje ulice oko Voždovačke crkve i parka su uske, pa tamo koristimo manje vozilo kada situacija to zahteva.",
    faqs: [
      {
        q: "Koliko brzo stižete na Voždovac?",
        a: "U proseku za 10 do 15 minuta, zavisno od saobraćaja. Voždovac nam je odmah pored baze u Kumodražu.",
      },
      {
        q: "Možete li da izvučete vozilo iz garaže sa niskim plafonom?",
        a: "Da. Za garaže i uske prolaze koristimo opremu koja ne zahteva podizanje kamiona i vozilo izvlačimo sporo i bezbedno, bez rizika po auto.",
      },
      {
        q: "Šta ako me kvar zatekne usred raskrsnice?",
        a: "Pozovite nas odmah i uključite sva četiri pokazivača pravca. Dolazimo sa signalizacijom i uklanjamo vozilo sa raskrsnice u najkraćem roku.",
      },
    ],
    near: ["autokomanda", "banjica", "kumodraz"],
  },
  {
    slug: "banjica",
    name: "Banjica",
    loc: "na Banjici",
    eta: "10–15 minuta",
    image: "/20240131_215533-1024x576.jpg",
    heroSub:
      "Od Banjičkog venca do bolnice: kada auto stane među blokovima, dolazimo pre nego što vam komšije počnu da trube.",
    intro: [
      "Banjica je naselje gde se parkira gde god ima mesta, a mesta nikad nema dovoljno. Tu se najčešće događa da auto ostane zaglavljen između dva parkirana vozila, da ga neko zakrči ili da se odjednom ne upali baš kada ste pošli na posao.",
      "Na Banjicu stižemo za 10 do 15 minuta. Poznajemo kako se ulazi u dvorišta između zgrada, gde se prolazi kamionom, a gde je potrebno da vozilo prethodno ručno pomerimo i pripremimo za utovar.",
    ],
    sitTitle: "Tipični pozivi sa Banjice",
    situations: [
      "Automobil zaglavljen između dva parkirana vozila bez prostora za izlazak",
      "Nepokretan auto kod ulaza u Institut ili pred bolnicom, gde ne sme da se čeka",
      "Akumulator koji je popustio posle dužeg stajanja pod zgradom",
      "Kvar na uzbrdici ka Banjičkom vencu",
      "Pomoć vozačima koji su stali u okolini stadiona posle utakmice",
      "Šlepovanje do servisa na Banjici ili u susednom Voždovcu",
    ],
    roadsTitle: "Kako radimo među banjičkim zgradama",
    roads:
      "Gusto raspoređene zgrade i unutrašnja dvorišta traže pažljivo manevrisanje. Kada kamion ne može da priđe, koristimo pomoćna kolica za premeštanje točkova, tako da vozilo možemo da izvučemo iz stešnjenog parking mesta bez dodirivanja susednih automobila. Posebno vodimo računa o ulazima u bolnicu i oko stadiona, gde ne smemo dugo da zadržavamo saobraćaj.",
    faqs: [
      {
        q: "Može li da se izvuče auto kada su ga blokirala dva susedna vozila?",
        a: "Može. Koristimo kolica za točkove kojima vozilo bočno pomeramo iz tesnog parking mesta, bez oštećenja susednih automobila.",
      },
      {
        q: "Da li dolazite i posle utakmica ili većih događaja?",
        a: "Da, radimo bez prestanka. Posle događaja saobraćaj je gust, pa je dobro da nas pozovete što ranije i pošaljete tačnu lokaciju.",
      },
      {
        q: "Koliko košta šlep sa Banjice do servisa?",
        a: "Cena zavisi od udaljenosti i vremena. Pozovite nas i dobićete jasnu cenu pre polaska, bez skrivenih troškova.",
      },
    ],
    near: ["vozdovac", "braca-jerkovic", "kumodraz"],
  },
  {
    slug: "rakovica",
    name: "Rakovica",
    loc: "u Rakovici",
    eta: "15–20 minuta",
    image: "/20230828_193840-1-1024x576.jpg",
    heroSub:
      "Od Patrijarha Dimitrija do Ibarske magistrale: šlep, deblokada i pomoć na putu u celoj opštini Rakovica.",
    intro: [
      "Rakovica je opština sa dva lica: gust stambeni deo oko Patrijarha Dimitrija i prometni putni pravci prema jugu, uključujući Ibarsku magistralu. Zato se pozivi iz Rakovice jako razlikuju: od zaglavljenog automobila u blokovima do kvara na putu gde svaka sekunda računa zbog brzine saobraćaja.",
      "Iz Kumodraža do Rakovice stižemo za 15 do 20 minuta. Imamo vozila za sve tipove intervencija: platformu za nisko podignuta vozila, vitlo za izvlačenje i sve što je potrebno za brzo startovanje auta.",
    ],
    sitTitle: "Najčešće intervencije u Rakovici",
    situations: [
      "Kvar na Ibarskoj magistrali ili na prilazu naselju, gde se brzo vozi",
      "Vozilo koje je stalo ispred Manastira Rakovica ili na uskim prilazima",
      "Prazan akumulator kod automobila parkiranih u blokovima uz Patrijarha Dimitrija",
      "Deblokada vozila posle zatvaranja vrata sa ključevima unutra",
      "Šlepovanje do vulkanizera ili servisa u industrijskoj zoni",
      "Dostava goriva za vozila koja stanu na ulazu u grad",
    ],
    roadsTitle: "Magistrala, blokovi i uski prilazi",
    roads:
      "Najopasnije su situacije na Ibarskoj magistrali i obilaznim putevima, gde je zaustavljanje bez signalizacije rizik. Tamo dolazimo sa reflektujućim konusima i osiguravamo vozilo pre utovara. U naseljima oko Patrijarha Dimitrija i na Kneževcu nailazimo na uske ulice i gust parking, a tu nam iskustvo vozača donosi najviše prednosti.",
    faqs: [
      {
        q: "Da li dolazite i na Ibarsku magistralu?",
        a: "Da. Za kvarove na magistrali dolazimo sa signalizacijom i vozilo uklanjamo sa kolovoza što pre, da ne ugrožavamo sebe ni ostale vozače.",
      },
      {
        q: "Možete li da otvorite auto ako sam ostavio ključeve unutra?",
        a: "Možemo. Deblokadu vozila radimo specijalnim alatom, bez oštećenja brave, vrata ili prozora.",
      },
      {
        q: "Šlepujete li i teža vozila ili kombije u Rakovici?",
        a: "Šlepujemo putnička vozila i kombije. Za specifična vozila pozovite nas da potvrdimo koji kamion šaljemo.",
      },
    ],
    near: ["miljakovac", "resnik", "kumodraz"],
  },
  {
    slug: "kaludjerica",
    name: "Kaluđerica",
    loc: "u Kaluđerici",
    eta: "20–25 minuta",
    image: "/20241030_192609-1024x576.jpg",
    heroSub:
      "Jedno od najvećih naselja Beograda sa jedva dovoljno parking mesta. Dolazimo kad god pozovete, i danju i noću.",
    intro: [
      "Kaluđerica je veliko naselje na istočnom obodu grada, gde mnogi vozači svakodnevno putuju do posla u centar. Zbog toga auto mora da radi svako jutro, a kada u šest ujutru ne upali, prvo što vam treba je neko ko može brzo da dođe. Mi smo taj neko.",
      "Na Kaluđericu stižemo za 20 do 25 minuta. Iako je naselje dalje od naše baze, vozila su uvek spremna, pa nema čekanja na odluku: kažete lokaciju, vozač kreće.",
    ],
    sitTitle: "Za šta nas zovu iz Kaluđerice",
    situations: [
      "Jutarnji kvarovi pred polazak na posao, najčešće akumulator ili starter",
      "Vozilo koje je ostalo na pristupnim putevima ka gradu",
      "Zaglavljen automobil na neuređenom parkingu posle kiše",
      "Blokirani prilazi kućama u delovima sa privatnim stanovanjem",
      "Šlep do servisa u Voždovcu ili Zvezdari kada je kvar ozbiljniji",
      "Kućna dostava goriva pre putovanja ili posle nepredviđenog gašenja motora",
    ],
    roadsTitle: "Dobar odnos sa Kaluđericom",
    roads:
      "Naselje se širi i menja, pa pojedini delovi imaju ulice koje nisu na svim navigacijama. Zato vas molimo da nam pošaljete lokaciju preko telefona ili opišete tačno kod čega stojite. Imamo iskustva sa neasfaltiranim delovima i sa gustim blokovima, a vozilo vam uvek vraćamo na siguran položaj pre nastavka puta.",
    faqs: [
      {
        q: "Da li dolazite na Kaluđericu i noću?",
        a: "Da, radimo 24 sata dnevno, svakog dana, uključujući noći, vikende i praznike.",
      },
      {
        q: "Imate li dodatnu naknadu za dalje delove naselja?",
        a: "Cenu određujemo po lokaciji i tipu usluge. Kada nas pozovete, dobićete konačnu cenu pre dolaska vozača.",
      },
      {
        q: "Šta ako me kvar zatekne u ranu zoru pred posao?",
        a: "Pozovite nas odmah. Ako je u pitanju akumulator, često možemo da vas pokrenemo na licu mesta za nekoliko minuta i tako uštedimo odlazak u servis.",
      },
    ],
    near: ["vozdovac", "medakovic", "konjarnik"],
  },
  {
    slug: "braca-jerkovic",
    name: "Braće Jerković",
    loc: "u naselju Braće Jerković",
    eta: "15–20 minuta",
    image: "/20240603_180854-1024x576.jpg",
    heroSub:
      "Naselje između Banjice, Konjarnika i Medakovića. Šlep i deblokada svih vozila, bez čekanja.",
    intro: [
      "Braće Jerković je gusto naseljen deo opštine Voždovac, okružen većim saobraćajnicama i susednim naseljima. Mnogi stanari automobile ostavljaju u dvorištima i na ulicama uz zgrade, što znači da svaki kvar traži malo više pažnje pri pristupu.",
      "Iz naše baze do Braće Jerković stižemo za 15 do 20 minuta. Prilikom dolaska odmah procenjujemo da li auto može da se pokrene na licu mesta ili je potrebno šlepovanje do servisa.",
    ],
    sitTitle: "Šta se najčešće dešava u Braće Jerković",
    situations: [
      "Auto koji se ne pali pod zgradom posle nekoliko dana mirovanja",
      "Vozilo zaglavljeno između parkiranih automobila u uskim ulicama",
      "Kvar na prilazima većim saobraćajnicama koji ne sme da stoji na kolovozu",
      "Zaključani ključevi u vozilu ispred prodavnice ili pijace",
      "Kvar posle vožnje do auto-otpada ili vulkanizera u okolini",
      "Šlepovanje do servisa i pri višesatnom čekanju na pomoć drugih službi",
    ],
    roadsTitle: "Prilazi i parkirališta",
    roads:
      "Glavni izazov u ovom delu grada je gust parking. Kada je ulica preuska za kamion, vozilo postavljamo na kolica i izvlačimo ga na mesto gde možemo da ga bezbedno utovarimo. Pošto je naselje okruženo prometnim ulicama, vodimo računa i o tome da vozilo što pre uklonimo sa kolovoza.",
    faqs: [
      {
        q: "Koliko traje dolazak na Braće Jerković?",
        a: "U proseku 15 do 20 minuta, zavisno od saobraćaja i doba dana.",
      },
      {
        q: "Da li otvarate zaključana vozila?",
        a: "Da. Deblokadu radimo stručno i bez oštećenja, a najčešće traje svega nekoliko minuta.",
      },
      {
        q: "Mogu li da zakažem šlep unapred?",
        a: "Naravno. Ako unapred znate da vam treba prevoz vozila, pozovite nas i dogovorićemo vreme i cenu.",
      },
    ],
    near: ["banjica", "konjarnik", "medakovic"],
  },
  {
    slug: "medakovic",
    name: "Medaković",
    loc: "na Medakoviću",
    eta: "20–25 minuta",
    image: "/20240131_215459-1024x576.jpg",
    heroSub:
      "Medaković 1, 2 i 3, i svi okolni blokovi. Šlep služba koja zna kako se prilazi vozilu u gustom naselju.",
    intro: [
      "Medaković je podeljen na tri celine i okružen još gušće naseljenim delovima. Vozila su parkirana u nizovima uz zgrade i svaki prilaz traži pažnju. U takvom okruženju dobro je imati šlep službu koja ne pravi dodatni zastoj i koja će sve završiti brzo.",
      "Na Medaković dolazimo za 20 do 25 minuta od poziva. Vozači su obučeni za rad u uskim prostorima, a oprema nam omogućava da vozilo bezbedno utovarimo i kada ne možemo da priđemo sa prednje strane.",
    ],
    sitTitle: "Najčešći pozivi sa Medakovića",
    situations: [
      "Vozilo koje se ne pali u garaži ispod zgrade",
      "Auto koje je blokirano drugim parkiranim vozilima",
      "Prazan akumulator posle hladne noći na otvorenom parkingu",
      "Kvar na prolazu kroz naselje, ispred škole ili vrtića",
      "Probušena guma bez rezervnog točka kod vozila u kvaru",
      "Šlep do servisa kada se vozilo ne može popraviti na licu mesta",
    ],
    roadsTitle: "Rad u gustim blokovima Medakovića",
    roads:
      "Raspored zgrada, unutrašnji putevi i često uski prolazi između njih traže vozača koji zna da manevriše. Zato svaki dolazak počinje procenom: da li postoji dovoljno prostora za kamion ili ćemo koristiti kolica i pomoćnu opremu. Kada intervencija traje, postavljamo signalizaciju da obezbedimo prolaz ostalim vozilima.",
    faqs: [
      {
        q: "Radite li i na sve tri celine Medakovića (1, 2 i 3)?",
        a: "Da, pokrivamo Medaković 1, 2 i 3, kao i susedna naselja.",
      },
      {
        q: "Mogu li da zovem noću?",
        a: "Možete. Dostupni smo svakog dana, 24 sata, i noću dolazimo bez doplate za čekanje.",
      },
      {
        q: "Da li palite vozilo na licu mesta?",
        a: "Da. Ako je problem samo u akumulatoru, često ga pokrećemo pomoćnim kablovima i vozilo je spremno za vožnju za par minuta.",
      },
    ],
    near: ["konjarnik", "braca-jerkovic", "kaludjerica"],
  },
  {
    slug: "konjarnik",
    name: "Konjarnik",
    loc: "na Konjarniku",
    eta: "20–25 minuta",
    image: "/20230828_193840-1-1024x576.jpg",
    heroSub:
      "Brz šlep i deblokada na Konjarniku. Tu smo kada vaš auto stane bez najave.",
    intro: [
      "Konjarnik je naselje sa mešavinom zgrada i porodičnih kuća, a promet se odvija uskim ulicama koje se često sužavaju zbog parkiranih vozila. Kada se auto pokvari na takvom mestu, bitno je da šlep dođe sa pravom opremom i bez preteranog manevrisanja.",
      "Iz Kumodraža do Konjarnika stižemo za 20 do 25 minuta. Prilikom poziva samo nam recite gde stojite i šta se desilo, a mi ćemo odmah znati koje vozilo da pošaljemo.",
    ],
    sitTitle: "Kada nas zovu sa Konjarnika",
    situations: [
      "Kvar vozila na uskoj ulici koja ne dozvoljava obilazak",
      "Akumulator koji je ispražnjen posle dužeg mirovanja automobila",
      "Auto koje ne može da izađe iz dvorišta zbog drugog vozila",
      "Zaključani ključevi u vozilu pred tržnicom ili prodavnicom",
      "Pomoć vozačima koji stanu na prilazu naselju",
      "Odvoz neispravnog vozila do servisa ili na adresu po vašem izboru",
    ],
    roadsTitle: "Šta nam je važno na Konjarniku",
    roads:
      "U delovima sa kućama ulice su kraće, ali i uže, pa često ne možemo da priđemo sa kamionom do samog vozila. Tada koristimo vitlo i kolica, a kamion ostavljamo na mestu gde ne remeti saobraćaj. Ako ste zaglavljeni u blokovima, brinemo da vaš automobil ne dodirne susedna vozila.",
    faqs: [
      {
        q: "Koliko košta intervencija na Konjarniku?",
        a: "Zavisi od vrste usluge i udaljenosti. Pozovite nas na 064/9-200-200 i dobićete cenu pre polaska.",
      },
      {
        q: "Možete li da dođete do vozila u uskoj ulici?",
        a: "Da. Imamo vitlo i kolica za situacije u kojima kamion ne može da priđe do samog vozila.",
      },
      {
        q: "Šta ako ne znam tačno gde sam?",
        a: "Pošaljite nam lokaciju preko mape na telefonu ili opišite okolinu. Za Konjarnik nam je to dovoljno da vas brzo pronađemo.",
      },
    ],
    near: ["medakovic", "braca-jerkovic", "zvezdara"],
  },
  {
    slug: "zarkovo",
    name: "Žarkovo",
    loc: "u Žarkovu",
    eta: "20–25 minuta",
    image: "/20240131_215533-1024x576.jpg",
    heroSub:
      "Od Žarkova do Straževice i Banovog brda. Šlep, deblokada i pomoć na putu u zapadnom delu grada.",
    intro: [
      "Žarkovo je naselje sa raznovrsnim reljefom, strmim ulicama i nagibima koji prave razliku kada vozilo odjednom ostane bez snage ili bez kočnica. U takvim uslovima pogrešno postavljen kamion može da napravi dodatni problem, pa je iskustvo vozača veoma važno.",
      "Žarkovo pokrivamo za 20 do 25 minuta. Vozila koja šaljemo imaju vitlo za izvlačenje sa nagiba i dovoljno snage za bezbedno spuštanje nepokretnog automobila niz strmu ulicu.",
    ],
    sitTitle: "Najčešće intervencije u Žarkovu",
    situations: [
      "Auto koje je ostalo bez pogona na strmoj ulici i klizi unazad",
      "Zimsko zaglavljivanje pri slabijem prianjanju na nizbrdici",
      "Prazan akumulator kod vozila na privatnim placevima",
      "Kvar na prilazu ka Straževici ili Banovom brdu",
      "Vozilo zaglavljeno u blatu posle jačih kiša",
      "Deblokada vozila kada su ključevi ostali unutra",
    ],
    roadsTitle: "Uzbrdice, nizbrdice i uske ulice",
    roads:
      "Naša vozila su opremljena tako da bezbedno izvlače automobile sa nagiba, uz dodatno osiguranje točkova pre utovara. Kada je put preuzak ili neasfaltiran, koristimo vitlo i izvlačimo vozilo na čvrsti kolovoz. U zimskim uslovima za Žarkovo najpre procenjujemo prohodnost, pa kreće najbolje opremljeno vozilo.",
    faqs: [
      {
        q: "Možete li da izvučete auto sa strme ulice?",
        a: "Da. Koristimo vitlo i dodatno obezbeđujemo vozilo pre utovara, tako da se na nagibu ništa ne pomera.",
      },
      {
        q: "Radite li zimi kada je klizavo?",
        a: "Da. Radimo cele godine, pa i po snegu i poledici, uz prilagođen način vožnje i dodatnu opremu.",
      },
      {
        q: "Koliko traje dolazak do Žarkova?",
        a: "U proseku 20 do 25 minuta, a po lošem vremenu malo duže zbog bezbednosti.",
      },
    ],
    near: ["kosutnjak", "dedinje", "rakovica"],
  },
  {
    slug: "lesce",
    name: "Lešće",
    loc: "u Lešću",
    eta: "25–30 minuta",
    image: "/20241030_192609-1024x576.jpg",
    heroSub:
      "Pomoć na putu i u Lešću i okolini. Izvlačimo zapeta vozila i prevozimo ih gde god vam treba.",
    intro: [
      "Lešće je mirnije naselje u istočnom delu grada, gde se kvarovi ne događaju često, ali kada se dese, pomoć dolazi sporije nego u centru. Zato je dobro imati broj službe koja će doći bez pregovaranja i bez nepotrebnih pitanja.",
      "Na Lešće stižemo za 25 do 30 minuta. Naš vozač će vas pozvati čim krene, pa tačno znate kada ga očekivati.",
    ],
    sitTitle: "Za šta nas pozivaju iz Lešća",
    situations: [
      "Kvar na pristupnim putevima do naselja gde je mali saobraćaj, ali i malo pomoći",
      "Vozilo zaglavljeno na neuređenom parkingu ili u blatu",
      "Prazan akumulator posle dugog stajanja auta",
      "Pomoć kada ostanete bez goriva daleko od najbliže pumpe",
      "Šlep do servisa u Zvezdari ili Voždovcu",
      "Prevoz vozila sa kvarom do željene adrese u gradu",
    ],
    roadsTitle: "Udaljenija lokacija, ista usluga",
    roads:
      "Iako je Lešće dalje od naše baze, vozila su spremna i polaze bez odlaganja. Saznaćete okvirno vreme dolaska pri samom pozivu. Cena je jasna unapred, bez iznenađenja, i važi isto bilo da vas zovemo noću ili tokom dana.",
    faqs: [
      {
        q: "Zašto je dolazak u Lešće duži nego na Voždovac?",
        a: "Lešće je dalje od naše baze u Kumodražu, pa je vreme dolaska nešto duže. Ali vozač kreće odmah po pozivu.",
      },
      {
        q: "Da li dovozite gorivo kada ostanem bez njega?",
        a: "Da, imamo uslugu dostave goriva. Pozovite nas i dovešćemo benzin ili dizel direktno do vas.",
      },
      {
        q: "Mogu li da pozovem noću?",
        a: "Možete. Radimo 24/7, bez obzira na doba dana ili praznik.",
      },
    ],
    near: ["zvezdara", "konjarnik", "kaludjerica"],
  },
  {
    slug: "dedinje",
    name: "Dedinje",
    loc: "na Dedinju",
    eta: "20–25 minuta",
    image: "/truck-1-1024x576.png",
    heroSub:
      "Diskretan i pažljiv šlep za vozila u elitnom delu grada. Svaki auto tretiramo kao da je naš.",
    intro: [
      "Na Dedinju su vozila često vrednija, a prilazi vilama uski i ograđeni. Zato je ovde posebno važan oprezan šlep, bez grebanja ili nepotrebnog trzanja. Za nas je svaki automobil jednako važan, ali znamo da pojedine mušterije traže posebnu pažnju.",
      "Dedinje pokrivamo za 20 do 25 minuta. Koristimo platforme sa niskim nagibom i zaštitu za točkove, pa čak i vozila sa niskim branikom možemo bezbedno da utovarimo.",
    ],
    sitTitle: "Šta radimo na Dedinju",
    situations: [
      "Šlep vozila sa niskim branikom koje ne sme da se vuče",
      "Prazan akumulator kod luksuznih vozila sa osetljivom elektronikom",
      "Kvar na ulicama sa malo saobraćaja ali i malo prostora za parkiranje",
      "Pomoć vozaču koji je zaglavljen kod ulaza u vilu ili garažu",
      "Diskretan prevoz vozila do servisa ili ovlašćenog dilera",
      "Deblokada vozila bez tragova na bravi ili vratima",
    ],
    roadsTitle: "Pažnja prema svakom vozilu",
    roads:
      "Pored Kraljevskog dvora, Bulevara mira i Užičke ulice, ulice su široke, ali prilazi privatnim placevima često su strmi i zakrivljeni. Za osetljivija vozila koristimo platformu, tako da točkovi ne dodiruju asfalt tokom prevoza. Vozilo vam isporučujemo tačno na adresu koju odaberete.",
    faqs: [
      {
        q: "Da li koristite platformu za skupocena vozila?",
        a: "Da. Za vozila koja ne smeju da se vuku koristimo platformu, tako da je auto potpuno podignut i zaštićen tokom prevoza.",
      },
      {
        q: "Možete li da prevezete vozilo do ovlašćenog servisa?",
        a: "Da, vozilo vozimo do bilo kog servisa, dilera ili adrese koju navedete.",
      },
      {
        q: "Čuvate li privatnost mušterija?",
        a: "Naravno. Diskretnost nam je važna, posebno kada je u pitanju vozilo ili adresa kod koje ne želite nepotrebnu pažnju.",
      },
    ],
    near: ["kosutnjak", "zarkovo", "autokomanda"],
  },
];
