export interface ServiceItem {
  /** Ceo URL segment, npr. "slep-vozila-beograd" */
  slug: string;
  /** Kratak naziv za linkove */
  name: string;
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  titleTop: string;
  titleAccent: string;
  heroSub: string;
  image: string;
  imageAlt: string;
  intro: [string, string];
  whenTitle: string;
  when: string[];
  howTitle: string;
  how: string;
  benefitsTitle: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string }[];
}

export const servicePath = (slug: string) => `/${slug}`;

export const services: ServiceItem[] = [
  {
    slug: "slep-vozila-beograd",
    name: "Šlep vozila",
    metaTitle: "Šlep Vozila Beograd 24/7 — Šlep Služba Strada 46",
    metaDesc:
      "Šlep vozila u Beogradu: putnički automobili, kombiji, terenci i motocikli. Utovar bez oštećenja karoserije, dolazak u proseku za 30 minuta. Pozovite 064/9-200-200.",
    eyebrow: "Dostupni 24 sata, 7 dana u nedelji",
    titleTop: "ŠLEP VOZILA",
    titleAccent: "BEOGRAD",
    heroSub:
      "Kvar, otkaz motora ili vozilo koje ne sme da se vozi? Utovaramo ga i bezbedno prevozimo gde god vam treba.",
    image: "/truck-1-1024x576.png",
    imageAlt: "Šlep vozila Beograd — kamion Strada 46",
    intro: [
      "Šlep je osnova našeg posla, ali ne radimo ga na isti način za svako vozilo. Auto sa pokvarenim menjačem, vozilo sa zakočenim točkovima i automobil nakon udesa traže različit pristup utovaru, i pre nego što bilo šta pomerimo, pogledamo u kom je stanju i kako ga najbezbednije podići.",
      "Šlepujemo putničke automobile svih marki, kombije, terence i motocikle. Koristimo platformu sa vitlom, pa vozilo ne vučemo po putu, već ga podižemo i prevozimo na kamionu, bez opterećenja pogonskog sklopa.",
    ],
    whenTitle: "Kada vam je potreban šlep",
    when: [
      "Motor se ugasio i ne želi da upali ni posle pokušaja sa kablovima",
      "Menjač, kvačilo ili pogon su otkazali i vozilo ne sme da se vozi",
      "Kočnice ili upravljač pokazuju kvar i vožnja je nebezbedna",
      "Upozorenja na instrument tabli traže da se auto odmah zaustavi",
      "Vozilo je ostalo bez ulja ili rashladne tečnosti",
      "Vozilo nije registrovano ili nema tehnički pregled, pa ne sme na put",
    ],
    howTitle: "Kako izgleda šlepovanje sa Stradom 46",
    how:
      "Pozovete nas na 064/9-200-200 i kažete gde se nalazite, koje je vozilo i šta se desilo. Procenimo da li je dovoljan jedan kamion ili je potrebna posebna oprema, pa vozač kreće odmah. Na licu mesta pregleda vozilo, utovari ga na platformu, učvrsti trakama i preveze na adresu koju odaberete. Šlepujemo i vozila koja nisu na neutralu, jer ih podižemo, a ne vučemo.",
    benefitsTitle: "Šta dobijate",
    benefits: [
      "Platforma sa vitlom, bez vuče po putu",
      "Šlepovanje vozila koja nisu na neutralu",
      "Cena na telefonu pre nego što vozač krene",
      "Putnička vozila, kombiji, terenci i motocikli",
      "Dostupnost 24/7, uključujući praznike",
      "Prevoz do servisa ili na adresu po vašem izboru",
    ],
    faqs: [
      {
        q: "Šta je razlika između šlepa na platformi i vuče?",
        a: "Na platformi je vozilo potpuno podignuto sa puta, pa nema trošenja menjača, kočnica ni guma. Vuča kablom ili šipkom je opcija za sasvim jednostavne situacije i može da ošteti pogonski sklop.",
      },
      {
        q: "Koliko košta šlep vozila u Beogradu?",
        a: "Cena zavisi od udaljenosti, tipa vozila i doba dana. Pozovite nas i dobićete konačnu cenu pre polaska, bez skrivenih troškova.",
      },
      {
        q: "Da li šlepujete motocikle i kombije?",
        a: "Da. Šlepujemo putnička vozila, kombije, terence i motocikle. Za veće ili neuobičajene gabarite pozovite nas da potvrdimo koji kamion šaljemo.",
      },
      {
        q: "Mogu li da šlepujete vozilo koje nije na neutralu?",
        a: "Da. Kako vozilo podižemo na platformu, nije bitno da li se točkovi okreću. Zbog toga šlepujemo i vozila sa zakočenim točkovima ili otkazalim menjačem.",
      },
    ],
    related: [
      { href: "/deblokada-izvlacenje-vozila-beograd", label: "Deblokada i izvlačenje vozila" },
      { href: "/odvoz-vozila-do-servisa-beograd", label: "Odvoz vozila do servisa" },
      { href: "/paljenje-akumulatora-beograd", label: "Paljenje vozila kablovima" },
    ],
  },
  {
    slug: "deblokada-izvlacenje-vozila-beograd",
    name: "Deblokada i izvlačenje",
    metaTitle: "Deblokada i Izvlačenje Vozila Beograd — Blato, Sneg, Kanal",
    metaDesc:
      "Izvlačenje vozila iz blata, snega, jarka i kanala u Beogradu. Vitlo i oprema za svaki teren, bez oštećenja karoserije. Dostupni 24/7 na 064/9-200-200.",
    eyebrow: "Izvlačimo i iz najtežih položaja",
    titleTop: "DEBLOKADA I IZVLAČENJE",
    titleAccent: "VOZILA",
    heroSub:
      "Zaglavljeni u blatu, snegu ili jarku? Izvlačimo vozilo vitlom i dovodimo ga na put, bez štete po karoseriju.",
    image: "/20240603_180854-1024x576.jpg",
    imageAlt: "Izvlačenje vozila iz blata Beograd — Strada 46",
    intro: [
      "Točkovi se vrte, a auto se ne pomera: najčešće se to desi na neasfaltiranim prilazima, kod novogradnji, na livadama, parkinzima posle kiše ili po snegu. Što više pokušavate da se oslobodite gasom, to se vozilo dublje ukopava, pa je pametno da prestanete i pozovete nas.",
      "Izvlačenje se razlikuje od običnog šlepa: tu je glavni alat vitlo i pravilno postavljene tačke zahvata. Cilj je da vozilo izvučemo bez trzaja, bez savijanja branika i bez štete po podvozje.",
    ],
    whenTitle: "Kada je potrebno izvlačenje",
    when: [
      "Točkovi su propali u blato i vozilo ne može da se pomeri",
      "Sneg ili poledica su zarobili auto na parkingu ili u dvorištu",
      "Vozilo je sletelo sa puta u jarak, kanal ili na bankinu",
      "Auto je zaglavljen na pesku, šljunku ili rastresitom terenu",
      "Vozilo je ostalo u nemogućem položaju posle proklizavanja",
      "Prilaz je preuzak ili strm za običan šlep",
    ],
    howTitle: "Kako izvlačimo vozilo",
    how:
      "Prvo procenimo kako je vozilo zaglavljeno i koja je najbolja tačka zahvata. Zatim postavimo vitlo sa odgovarajućim pojasevima i polako izvlačimo vozilo ka čvrstom tlu. Ako je potrebno, podižemo ga i prebacujemo na platformu. Kada je vozilo na putu, pregledamo da li je oštećeno i da li može samo da nastavi ili je potreban prevoz do servisa.",
    benefitsTitle: "Zašto naše izvlačenje",
    benefits: [
      "Vitlo i pojasevi koji štite branik i šasiju",
      "Rad i u kanalu, jarku i na nagibima",
      "Dolazak i po snegu, ledu i kiši",
      "Pregled vozila posle izvlačenja",
      "Prevoz do servisa ako je potreban",
      "Dostupnost 24/7",
    ],
    faqs: [
      {
        q: "Šta da radim dok čekam da stignete?",
        a: "Prestanite da dodajete gas, jer se tako vozilo samo dublje ukopava. Uključite pokazivače pravca, sklonite se sa kolovoza i pošaljite nam lokaciju ili opis okoline.",
      },
      {
        q: "Da li izvlačite i vozila iz jarka ili kanala?",
        a: "Da. Za takve situacije koristimo vitlo i pojaseve postavljene tako da vozilo izlazi kontrolisano, bez dodatnog oštećenja.",
      },
      {
        q: "Radite li i po snegu?",
        a: "Da, radimo tokom cele godine. Po snegu je dolazak sporiji zbog bezbednosti, ali vozilo kreće odmah po pozivu.",
      },
      {
        q: "Šta ako vozilo bude oštećeno tokom izvlačenja?",
        a: "Naša oprema je izabrana tako da se tačke zahvata ne oštećuju. Pre i posle izvlačenja pregledamo vozilo i o svemu vas obaveštavamo.",
      },
    ],
    related: [
      { href: "/slep-vozila-beograd", label: "Šlep vozila" },
      { href: "/slepovanje-posle-udesa-beograd", label: "Šlepovanje posle udesa" },
      { href: "/dostava-goriva-beograd", label: "Donošenje goriva" },
    ],
  },
  {
    slug: "prevoz-vozila-beograd",
    name: "Prevoz vozila na adresu",
    metaTitle: "Prevoz Vozila Beograd — Na Bilo Koju Adresu | Strada 46",
    metaDesc:
      "Prevoz vozila na bilo koju adresu u Beogradu i okolini: kupljen auto, vozilo bez registracije ili neispravan automobil. Jasna cena unapred. Pozovite 064/9-200-200.",
    eyebrow: "Od vrata do vrata",
    titleTop: "PREVOZ VOZILA",
    titleAccent: "NA ADRESU",
    heroSub:
      "Vozilo ne mora da bude pokvareno da bi vam trebao prevoz. Dovozimo ga tamo gde treba, bezbedno i na vreme.",
    image: "/20230828_193840-1-1024x576.jpg",
    imageAlt: "Prevoz vozila na adresu Beograd — Strada 46",
    intro: [
      "Prevoz vozila nije samo za kvar. Kupili ste polovan auto sa druge strane grada, selite se, ostavili ste vozilo kod prijatelja ili vam samo treba da automobil bude na drugoj adresi, a ne želite da ga vozite. U svim tim slučajevima šlep je jednostavnije i sigurnije rešenje.",
      "Prevozimo vozila u Beogradu, ali i van njega. Dogovorimo polazište, odredište i vreme, a mi se pobrinemo za utovar, vezivanje i istovar na željenoj adresi.",
    ],
    whenTitle: "Kada se prevoz vozila isplati",
    when: [
      "Kupili ste vozilo i ne želite da ga vozite bez registracije",
      "Vozilo je neregistrovano ili mu je istekla saobraćajna dozvola",
      "Selite se i auto treba da stigne na novu adresu",
      "Vozilo treba da ode iz garaže ili dvorišta na drugo mesto",
      "Automobil čeka na prevoz do prodavca, kupca ili komisiona",
      "Ne smete ili ne možete da vozite zbog bolesti ili povrede",
    ],
    howTitle: "Dogovor bez komplikacija",
    how:
      "Javite nam adresu preuzimanja, adresu isporuke i podatke o vozilu. Dobijate jasnu cenu pre polaska, a vreme dogovaramo prema vama. Na dan prevoza vozač utovara auto, obezbeđuje ga trakama i isporučuje ga na odredište, gde zajedno proveravate stanje.",
    benefitsTitle: "Šta je uključeno",
    benefits: [
      "Utovar, vezivanje i istovar vozila",
      "Prevoz i vozila koja ne mogu samostalno da se kreću",
      "Dogovoreno vreme polaska, ne samo hitni pozivi",
      "Cena pre polaska",
      "Prevoz van Beograda uz dogovor",
      "Pažljivo rukovanje, bez štete",
    ],
    faqs: [
      {
        q: "Mogu li da zakažem prevoz unapred?",
        a: "Naravno. Pozovite nas, recite datum i vreme, adresu preuzimanja i isporuke, pa ćemo se dogovoriti oko svega.",
      },
      {
        q: "Da li prevozite vozilo bez registracije?",
        a: "Da. Kako se vozilo prevozi na platformi, ne vozi se po putu, pa registracija nije prepreka za sam prevoz.",
      },
      {
        q: "Prevozite li van Beograda?",
        a: "Da, prevozimo i u druge gradove. Za duže relacije pogledajte našu posebnu stranicu ili nas pozovite za cenu.",
      },
      {
        q: "Šta ako vozilo ima neuobičajene gabarite?",
        a: "Javite nam model i dimenzije pri pozivu, pa ćemo proveriti da li imamo odgovarajuće vozilo.",
      },
    ],
    related: [
      { href: "/prevoz-vozila-na-duze-relacije", label: "Prevoz na duže relacije" },
      { href: "/odvoz-vozila-do-servisa-beograd", label: "Odvoz do servisa" },
      { href: "/slep-vozila-beograd", label: "Šlep vozila" },
    ],
  },
  {
    slug: "slepovanje-posle-udesa-beograd",
    name: "Prevoz nakon udesa",
    metaTitle: "Šlepovanje Posle Udesa Beograd — Brza Evakuacija Vozila",
    metaDesc:
      "Šlep posle saobraćajne nesreće u Beogradu: brzo sklanjamo vozilo sa mesta udesa i prevozimo ga na servis ili parking. Dostupni 24/7. Pozovite 064/9-200-200.",
    eyebrow: "Brza i diskretna evakuacija",
    titleTop: "ŠLEPOVANJE POSLE",
    titleAccent: "UDESA",
    heroSub:
      "Posle sudara vozilo treba što pre da se skloni sa puta. Mi to radimo brzo, smireno i bez dodatnog stresa za vas.",
    image: "/20240131_215533-1024x576.jpg",
    imageAlt: "Šlepovanje posle udesa Beograd — Strada 46",
    intro: [
      "Posle saobraćajne nesreće većina ljudi je uzbuđena i ne zna šta da radi sa oštećenim vozilom. Auto često ne može da se vozi, ometa saobraćaj i potrebno ga je što pre ukloniti, ali sve mora da se uradi sa pažnjom, jer je vozilo potencijalni dokaz za osiguranje.",
      "Mi znamo da je u tom trenutku najvažnije da se sve odvija mirno i bez nepotrebnih pitanja. Vozilo utovaramo pažljivo, da ne pogoršamo štetu, i prevozimo ga na adresu koju odaberete: servis, parking, kuću ili procenitelja.",
    ],
    whenTitle: "Kada nas zovete posle udesa",
    when: [
      "Vozilo je oštećeno i ne sme da se vozi",
      "Točak, osovina ili upravljač su oštećeni u sudaru",
      "Vozilo ometa saobraćaj i mora hitno da se ukloni",
      "Vozilo mora da stigne do servisa ili procenitelja štete",
      "Potreban je prevoz do garaže ili parkinga posle zapisnika",
      "Vozilo je završilo van puta, u jarku ili na bankini",
    ],
    howTitle: "Šta radimo na mestu udesa",
    how:
      "Pre svega bezbednost: ako je potrebno, postavljamo signalizaciju i sklanjamo vozilo sa kolovoza. Važno je da prvo završite sve što je vezano za policiju i razmenu podataka, a vozilo ne pomerajte dok ne dobijete uputstvo. Kada smo na licu mesta, vozilo utovaramo pažljivo, vodeći računa da se oštećenja ne povećaju, i prevozimo ga na adresu koju navedete.",
    benefitsTitle: "Zašto nas zovu posle udesa",
    benefits: [
      "Brz dolazak i uklanjanje vozila sa puta",
      "Pažljiv utovar koji ne pogoršava štetu",
      "Prevoz do servisa, parkinga ili procenitelja",
      "Diskretnost i smiren pristup",
      "Dostupnost 24/7, i noću i vikendom",
      "Jasna cena unapred",
    ],
    faqs: [
      {
        q: "Da li da pomerim vozilo pre nego što stignete?",
        a: "Ne pomerajte ga ako ima povređenih ili ako nije jasno šta zahteva policija. Bezbedno se sklonite sa kolovoza, pozovite hitne službe po potrebi, a nama javite lokaciju.",
      },
      {
        q: "Možete li da prevezete vozilo do procenitelja štete?",
        a: "Da. Vozilo prevozimo na bilo koju adresu: servis, procenitelj, parking ili vaša kuća.",
      },
      {
        q: "Šta ako vozilo ne može da se pokrene niti točkovi da se okreću?",
        a: "Nije problem. Vozilo podižemo na platformu, tako da ne zavisi od toga da li točkovi, menjač ili upravljač rade.",
      },
      {
        q: "Radite li noću posle nesreće?",
        a: "Da, radimo 24 sata dnevno, svakog dana, uključujući praznike.",
      },
    ],
    related: [
      { href: "/slep-vozila-beograd", label: "Šlep vozila" },
      { href: "/odvoz-vozila-do-servisa-beograd", label: "Odvoz do servisa" },
      { href: "/deblokada-izvlacenje-vozila-beograd", label: "Deblokada i izvlačenje" },
    ],
  },
  {
    slug: "odvoz-vozila-do-servisa-beograd",
    name: "Odvoz do servisa ili tehničkog",
    metaTitle: "Odvoz Vozila Do Servisa i Tehničkog Pregleda Beograd",
    metaDesc:
      "Šlep do auto-servisa, vulkanizera, tehničkog pregleda ili registracije u Beogradu. Brz i pouzdan odvoz vozila sa jasnom cenom. Pozovite 064/9-200-200.",
    eyebrow: "Do servisa bez rizika",
    titleTop: "ODVOZ VOZILA",
    titleAccent: "DO SERVISA",
    heroSub:
      "Kvar vas je zatekao, a ne znate kako da stignete do servisa? Odvozimo vozilo do mehaničara, vulkanizera ili tehničkog pregleda.",
    image: "/20240131_215459-1024x576.jpg",
    imageAlt: "Odvoz vozila do servisa Beograd — Strada 46",
    intro: [
      "Ne mora svaki kvar da se završi kao hitna situacija na putu. Ponekad već znate da auto neće proći tehnički, da kočnice popuštaju ili da vam treba pregled u servisu koji je na drugom kraju grada, ali ne smete da rizikujete vožnju. Tada je prevoz do servisa najjeftinije i najbezbednije rešenje.",
      "Odvozimo vozila do auto-servisa, vulkanizera, auto-električara, limara, kao i do stanice za tehnički pregled i registraciju. Ako ne znate koji servis da izaberete, rado ćemo vas uputiti na proverene majstore.",
    ],
    whenTitle: "Kada odvoz do servisa ima smisla",
    when: [
      "Znate da vozilo ne sme u saobraćaj, ali mora do servisa",
      "Istekla je registracija ili nije prošao tehnički pregled",
      "Kočnice, upravljač ili ovesanje pokazuju ozbiljan kvar",
      "Servis je daleko, a ne želite da rizikujete vožnju",
      "Treba vam vozilo do vulkanizera ili auto-električara",
      "Automobil se vraća iz servisa, a ne možete da ga vozite",
    ],
    howTitle: "Kako izgleda odvoz do servisa",
    how:
      "Kažete nam gde je vozilo i u koji servis ide. Dogovorimo vreme, a vozač dolazi, utovara vozilo i vozi ga direktno do vrata servisa. Ako je potrebno da sačekamo tehnički pregled ili da vozilo vratimo, i to se može dogovoriti unapred.",
    benefitsTitle: "Prednosti",
    benefits: [
      "Direktno do servisa ili stanice za tehnički pregled",
      "Bez rizika vožnje neispravnog vozila",
      "Povratni prevoz po dogovoru",
      "Savet o servisima u blizini",
      "Povoljna cena za kratke relacije u gradu",
      "Zakazivanje unapred ili hitno",
    ],
    faqs: [
      {
        q: "Da li možete da vozilo odvezete i do tehničkog pregleda?",
        a: "Da. Vozilo možemo da odvezemo do stanice za tehnički pregled i vratimo ga posle, po dogovoru.",
      },
      {
        q: "Mogu li da vam ostavim vozilo na servisu i da ga vratite posle popravke?",
        a: "Da, povratni prevoz se dogovara unapred, pa vozilo stiže kući kada servis završi posao.",
      },
      {
        q: "Da li preporučujete servise?",
        a: "Rado ćemo vas uputiti na majstore sa kojima smo radili. Pozovite i recite šta vam treba.",
      },
      {
        q: "Da li je kratak prevoz jeftiniji?",
        a: "Da, cena zavisi od udaljenosti, pa su kratke relacije u gradu povoljnije. Pozovite nas za tačnu cenu.",
      },
    ],
    related: [
      { href: "/slep-vozila-beograd", label: "Šlep vozila" },
      { href: "/prevoz-vozila-beograd", label: "Prevoz vozila na adresu" },
      { href: "/paljenje-akumulatora-beograd", label: "Paljenje vozila kablovima" },
    ],
  },
  {
    slug: "prevoz-vozila-na-duze-relacije",
    name: "Prevoz na duže relacije",
    metaTitle: "Prevoz Vozila Na Duže Relacije — Srbija i Region | Strada 46",
    metaDesc:
      "Prevoz vozila na duže relacije iz Beograda: drugi gradovi Srbije i region. Idealno za kupovinu polovnog automobila ili neispravno vozilo. Cena po dogovoru, 064/9-200-200.",
    eyebrow: "Beograd, Srbija, region",
    titleTop: "PREVOZ VOZILA",
    titleAccent: "NA DUŽE RELACIJE",
    heroSub:
      "Kupili ste auto u drugom gradu ili vam treba neispravno vozilo do udaljenog servisa? Dovozimo ga bezbedno, bez vožnje.",
    image: "/20241030_192609-1024x576.jpg",
    imageAlt: "Prevoz vozila na duže relacije — Strada 46",
    intro: [
      "Putovanje od više stotina kilometara u polovnom autu koje ste tek kupili je rizik: ne znate kakvo je stvarno stanje, a kvar usred puta bi vas koštao više od prevoza. Zato mnogi kupci polovnih vozila biraju da auto stigne na šlepu, a ne na sopstvenim točkovima.",
      "Pored kupovine, na duže relacije prevozimo i vozila koja su neispravna, vozila koja prelaze kod novog vlasnika ili se vraćaju sa letovanja i selidbe. Ruta, vreme i cena se dogovaraju unapred, pa nema iznenađenja.",
    ],
    whenTitle: "Kada se isplati prevoz na veću daljinu",
    when: [
      "Kupili ste polovan automobil u drugom gradu ili inostranstvu",
      "Vozilo je neispravno, a servis je daleko od vas",
      "Selite se i vozilo treba da stigne na novu adresu",
      "Prodajete vozilo i kupac je u drugom gradu",
      "Vozilo je ostalo van Beograda posle kvara na putu",
      "Ne želite da dodajete kilometre na brojač kupljenog vozila",
    ],
    howTitle: "Kako se dogovara duži prevoz",
    how:
      "Javite nam polazište, odredište i podatke o vozilu. Na osnovu rute dajemo cenu i okvirno vreme, a termin dogovaramo prema vama. Vozilo utovaramo, osiguravamo trakama i vozimo do odredišta, gde se zajedno proverava stanje.",
    benefitsTitle: "Šta dobijate",
    benefits: [
      "Cena i termin dogovoreni unapred",
      "Bez dodatnih kilometara na vozilu",
      "Prevoz do drugih gradova Srbije",
      "Prevoz u region uz dogovor",
      "Pažljivo osiguranje vozila trakama",
      "Obaveštavanje o napretku puta",
    ],
    faqs: [
      {
        q: "Koliko košta prevoz na duže relacije?",
        a: "Cena zavisi od udaljenosti i tipa vozila. Pozovite nas sa odredištem i dobićete ponudu pre dogovora.",
      },
      {
        q: "Da li prevozite i van Srbije?",
        a: "Za region se dogovaramo pojedinačno, zavisno od države i granica. Pozovite nas sa detaljima.",
      },
      {
        q: "Koliko traje prevoz?",
        a: "Zavisi od relacije. Pri dogovoru dobijate okvirno vreme polaska i dolaska.",
      },
      {
        q: "Da li mogu da pratim gde je vozilo?",
        a: "Možete nas pozvati u bilo kom trenutku, a vozač će vas obavestiti o napretku puta.",
      },
    ],
    related: [
      { href: "/prevoz-vozila-beograd", label: "Prevoz vozila na adresu" },
      { href: "/slep-vozila-beograd", label: "Šlep vozila" },
      { href: "/odvoz-vozila-do-servisa-beograd", label: "Odvoz do servisa" },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
