export const company = {
  name: "Innowave",
  email: "hello@innowave.dev",
  practice: "Izrada poslovnih web stranica",
};

export const inquiryKinds = [
  "Landing stranica",
  "Poslovna web stranica",
  "Web shop",
  "Redizajn postojeće stranice",
  "Nisam siguran / trebam savjet",
] as const;

export const nav = [
  { href: "#radovi", label: "Projekti" },
  { href: "#cijene", label: "Cijene" },
  { href: "#tim", label: "Mi" },
  { href: "#proces", label: "Proces" },
  { href: "#pitanja", label: "Pitanja" },
];

export const people = [
  {
    name: "Maida Čelar",
    role: "CEO",
    image: "/team/maida.jpg",
    href: "https://www.linkedin.com/in/maida-celar-393b8a240/",
  },
  {
    name: "Marko Čvrljak",
    role: "Web developer",
    image: "/team/marko.jpg",
    href: "https://www.linkedin.com/in/marko-%C4%8Dvrljak-794457154/",
  },
];

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://innowave.media";

export const projects = [
  {
    title: "Rent a Boat Grebaštica",
    href: "https://rentaboat-info.com/",
    image: "/portfolio/rentaboat.jpg",
    category: "Turizam i najam plovila",
    need: "Predstaviti flotu, smještaj i način javljanja na jednom mjestu.",
    delivered:
      "Web stranica za turističku uslugu koja na jednom mjestu predstavlja flotu, smještaj i mogućnosti rezervacije. Strukturiran sadržaj posjetiteljima olakšava pregled ponude i slanje upita.",
  },
  {
    title: "Rivina Jaruga",
    href: "https://rivinajaruga.com/",
    image: "/portfolio/rivina.jpg",
    category: "Komunalna ustanova",
    need: "Objaviti obavijesti, rasporede odvoza i javne usluge.",
    delivered:
      "Stranica komunalnog društva iz Skradina. Sadržaj je složen tako da se obavijesti i rasporedi mogu pronaći bez pretrage kroz cijeli tekst.",
  },
  {
    title: "AgriFood Croatia",
    href: "https://agrifoodcroatia.com/",
    image: "/portfolio/agrifood.jpg",
    category: "Poljoprivreda i inovacije",
    need: "Predstaviti hub, vijesti, projekte i partnere.",
    delivered:
      "Stranica inovacijskog huba za poljoprivredu i prehranu. Vijesti, projekti i partneri imaju svoje cjeline.",
  },
  {
    title: "Rent by Mario",
    href: "https://rentbymario.com/hr/naslovnica/",
    image: "/portfolio/mario.jpg",
    category: "Turizam i najam",
    need: "Pokazati ponudu brodica i apartmana gostima na hrvatskom.",
    delivered:
      "Stranica obiteljskog najma u Brodarici. Plovila, smještaj i rezervacija stoje na hrvatskoj naslovnici.",
  },
  {
    title: "Put rukopisa",
    href: "https://put-rukopisa.hr/",
    image: "/portfolio/put-rukopisa.jpg",
    category: "Web shop, knjige",
    need: "Prodati naslove serijala i primiti narudžbu.",
    delivered:
      "Web shop serijala Život. Naslovi, cijene i narudžba stoje na jednoj stranici.",
  },
  {
    title: "High Class Relocation",
    href: "https://highclass.hr/",
    image: "/portfolio/highclass.jpg",
    category: "Usluge preseljenja",
    need: "Objasniti preseljenje u Hrvatsku i kako krenuti s upitom.",
    delivered:
      "Stranica za preseljenje stranih zaposlenika. Usluge imigracije, smještaja i dolaska u Zagreb imaju jasne cjeline.",
  },
  {
    title: "Lučka uprava Šibenik",
    href: "https://portauthority-sibenik.hr/",
    image: "/portfolio/luka-sibenik.jpg",
    category: "Javna ustanova",
    need: "Objaviti obavijesti, koncesije i informacije o luci.",
    delivered:
      "Službena stranica lučke uprave. Obavijesti, koncesije, luka i projekti razdvojeni su po temama.",
  },
  {
    title: "TORRIS",
    href: "https://torrisbranding.hr/",
    image: "/portfolio/torris.jpg",
    category: "Branding agencija",
    need: "Predstaviti usluge agencije i način suradnje.",
    delivered:
      "Stranica branding agencije iz Zagreba. Strategija brenda, digital i savjetovanje navedeni su kao zasebne usluge.",
  },
  {
    title: "Safe Leap",
    href: "https://safe-leap.hr/",
    image: "/portfolio/safe-leap.jpg",
    category: "Edukacija i HR",
    need: "Pokazati programe za voditelje i HR te otvoriti upit.",
    delivered:
      "Stranica za edukaciju voditelja i timova. Programi su navedeni zasebno, s obrascem za upit.",
  },
  {
    title: "Ortodont Vukelja",
    href: "https://ortodont-karlovac.hr/",
    image: "/portfolio/ortodont.jpg",
    category: "Ordinacija",
    need: "Objasniti usluge ortodoncije, radno vrijeme i kako doći do ordinacije.",
    delivered:
      "Stranica specijalističke ordinacije u Karlovcu. Usluge za odrasle i djecu, radno vrijeme i kontakt stoje na naslovnici.",
  },
  {
    title: "IntegrityUP",
    href: "https://integrityup.eu/",
    image: "/portfolio/integrityup.jpg",
    category: "Edukacija, poslovna etika",
    need: "Predstaviti program usklađenosti na više jezika.",
    delivered:
      "Stranica programa poslovne etike. Edukacije za menadžere i timove dostupne su i na drugom jeziku.",
  },
];

const included = [
  "Mobilni prikaz, kontakt forma, karta i SSL",
  "Privatnost i obavijest o kolačićima",
  "Tekst pišemo mi, iz vašeg kratkog opisa",
  "Dva kruga izmjena nakon prve verzije",
  "Domena i stranica ostaju vaši",
];

export const packages = [
  {
    name: "Landing",
    price: "690 €",
    label: "Jedna stranica",
    fit: "Za jednu uslugu, proizvod ili kampanju.",
    audience:
      "Jednostavna stranica koja jasno predstavlja vašu ponudu i vodi posjetitelje prema upitu, pozivu ili drugoj željenoj radnji.",
    time: "Do 7 dana",
    featured: false,
    points: [
      "Jedna stranica",
      "SEO postavke za naziv i tu uslugu",
      ...included,
      "Objava unutar 7 dana",
    ],
  },
  {
    name: "Start",
    price: "990 €",
    label: "Osnovno",
    fit: "Za obrt ili malu tvrtku kojoj treba profesionalna online prisutnost.",
    audience:
      "Predstavite svoje poslovanje, glavne usluge, kontakt i najvažnije informacije na preglednoj web stranici.",
    time: "Do 10 dana",
    featured: false,
    points: [
      "Sadržaj na do 5 podstranica",
      "SEO postavke za naziv i glavnu uslugu",
      "Postavljanje vaših fotografija",
      ...included,
      "Objava unutar 10 dana",
    ],
  },
  {
    name: "Standard",
    price: "1.500 €",
    label: "Najčešće",
    fit: "Za tvrtke koje nude više usluga i trebaju jasnu strukturu.",
    audience:
      "Svaka važna usluga dobiva prostor za detaljnije predstavljanje, uz preglednu navigaciju i sadržaj prilagođen potencijalnim klijentima.",
    time: "Do 15 dana",
    featured: true,
    points: [
      "Sadržaj na do 10 podstranica",
      "SEO postavke za svaku uslugu",
      "Dorada fotografija",
      "Google poslovni profil i Search Console",
      ...included,
      "Objava unutar 15 dana",
    ],
  },
  {
    name: "Premium",
    price: "2.500 €",
    label: "Širi nastup",
    fit: "Za poslovanja s većim brojem usluga, lokacija ili sadržaja.",
    audience:
      "Opsežnija web stranica za tvrtke koje trebaju više sadržajnih cjelina i detaljnije predstavljanje svoje ponude.",
    time: "Do 30 dana",
    featured: false,
    points: [
      "Sadržaj na do 20 podstranica",
      "SEO postavke za usluge i lokacije",
      "Copywriting i obrada fotografija",
      "Google poslovni profil i Search Console",
      ...included,
      "Objava unutar 30 dana",
    ],
  },
  {
    name: "Web shop",
    price: "od 1.690 €",
    label: "Trgovina",
    fit: "Za manje trgovine koje žele prodavati putem interneta.",
    audience:
      "Predstavite proizvode, organizirajte ponudu i omogućite kupcima da naruče proizvode putem vaše web trgovine.",
    time: "Rok u ponudi",
    featured: false,
    points: [
      "Do 40 proizvoda: naziv, cijena i fotografija",
      "Košarica, virman i plaćanje pouzećem",
      "SEO postavke za naziv trgovine i kategorije",
      "Kartično plaćanje i fiskalizacija idu zasebno",
      ...included,
    ],
  },
];

export const extras = [
  { name: "Dodatna podstranica", price: "80 €" },
  {
    name: "Dodatni jezik",
    price: "200 €",
    detail: "Do 10 stranica. Na Premiumu prema opsegu sadržaja.",
  },
  { name: "Sat manjih izmjena", price: "35 €" },
  {
    name: "Domena, hosting i održavanje",
    price: "200 € / god",
    detail: "Domena, hosting, SSL, sigurnosna kopija i do 2 sata sitnih izmjena.",
  },
  {
    name: "Sustav rezervacija",
    price: "od 450 €",
    detail: "Točan iznos stoji u ponudi.",
  },
  {
    name: "Plaćanje karticama",
    price: "od 350 €",
    detail: "Naknade kartičnog procesora nisu u cijeni izrade.",
  },
  { name: "Automatska fiskalizacija računa", price: "Po ponudi" },
];

export const steps = [
  {
    index: "01",
    title: "Razgovor i ponuda",
    body: "Recite nam nešto o svom poslovanju, ciljevima i tome što vam treba. Predlažemo paket i šaljemo ponudu s opsegom, cijenom i rokom. Iznos iz ponude se usred rada ne mijenja.",
  },
  {
    index: "02",
    title: "Dizajn i izrada",
    body: "Od vas treba kratak opis posla, popis usluga i fotografije. Tekstove pišemo mi. Izgled i sadržaj slažemo u dogovorenom opsegu.",
  },
  {
    index: "03",
    title: "Testiranje i objava",
    body: "Nakon prve verzije imate dva kruga izmjena. Prije objave provjeravamo dogovorene dijelove: prikaz, kontakt i osnovne elemente. Zatim je stranica dostupna vašim klijentima.",
  },
];

export const deliverables = [
  {
    title: "Izgled uz vašu ponudu",
    body: "Izgled i struktura stranice usklađeni su s vašim poslovanjem, ponudom i onim što posjetitelj na njoj traži.",
  },
  {
    title: "Mobilna prilagodba",
    body: "Stranica je prilagođena mobitelima, tabletima i računalima, tako da se sadržaj može pregledati na uobičajenim veličinama ekrana.",
  },
  {
    title: "Jasna struktura sadržaja",
    body: "Usluge, proizvodi i kontakt složeni su tako da posjetitelj dođe do informacije bez obilaska cijele stranice.",
  },
  {
    title: "SEO postavke iz paketa",
    body: "Uključeno je samo ono što piše na odabranom paketu: postavke za naziv, uslugu, lokaciju ili kategoriju. To nije istraživanje ključnih riječi, stalno pisanje sadržaja ni jamstvo pozicije na Googleu.",
  },
  {
    title: "Kontakt i upiti",
    body: "U svakom paketu su kontakt forma i karta. Posjetitelj može poslati upit ili vas pronaći, bez dodatnog alata.",
  },
  {
    title: "Dorade prije objave",
    body: "Nakon prve verzije imate dva kruga izmjena. Prije objave provjeravamo dogovorene dijelove: prikaz, kontakt i osnovne elemente stranice.",
  },
];

export const faqs = [
  {
    q: "Koliko košta izrada web stranice?",
    a: "Landing je 690 €, Start 990 €, Standard 1.500 €, Premium 2.500 €, a web shop kreće od 1.690 €. Iznos na kartici je iznos u ponudi i na računu. PDV na njega ne dodajemo. Ako projekt traži nešto izvan paketa, to piše u ponudi prije početka.",
  },
  {
    q: "Koliko traje izrada web stranice?",
    a: "Landing do 7 dana, Start do 10, Standard do 15, Premium do 30. Rok web shopa piše u ponudi. Rok kreće kad imamo opis, popis usluga i fotografije. Ako opseg izađe iz paketa, dulji rok piše prije početka.",
  },
  {
    q: "Trebam li već imati tekstove i fotografije?",
    a: "Tekstove pišemo mi, iz vašeg kratkog opisa posla i popisa usluga. Fotografije šaljete vi. Ako ih nemate, koristimo licencirane. To je u cijeni paketa.",
  },
  {
    q: "Hoću li moći samostalno uređivati web stranicu?",
    a: "Ne u osnovnom paketu. Sitne izmjene radimo mi: do 2 sata u godišnjem paketu, inače 35 € po satu. Ako vam treba sustav da sami mijenjate tekst, slike ili proizvode, to definiramo u ponudi prije početka. Nije uključeno dok nije napisano.",
  },
  {
    q: "Je li web stranica prilagođena mobitelima?",
    a: "Da. Mobilni prikaz je u svakom paketu. Prije objave gledamo prikaz na uobičajenim širinama ekrana, u sklopu dogovorenog opsega.",
  },
  {
    q: "Je li SEO uključen u cijenu?",
    a: "Uključene su SEO postavke navedene na paketu. To nije kontinuirana optimizacija, istraživanje ključnih riječi ni redovito pisanje novih tekstova. Ne obećavamo poziciju na Googleu.",
  },
  {
    q: "Jesu li hosting i domena uključeni?",
    a: "Nisu u cijeni izrade. Možete ih držati sami. Godišnji paket je 200 €: domena, hosting, SSL, sigurnosna kopija i do 2 sata sitnih izmjena. Domena i stranica ostaju vaši u oba slučaja.",
  },
  {
    q: "Kako se plaća?",
    a: "Kroz ponudu i račun, u dva dijela: polovica prije početka izrade, polovica prije objave. Iznos iz ponude se tijekom rada ne mijenja.",
  },
  {
    q: "Što ako mi kasnije zatrebaju dodatne funkcionalnosti?",
    a: "Dodatna podstranica je 80 €. Dodatni jezik je 200 € do 10 stranica, a na Premiumu prema opsegu. Sat izmjena je 35 €. Rezervacije kreću od 450 €, kartice od 350 €. Fiskalizacija ide po ponudi. Naknade kartičnog procesora nisu u cijeni izrade. Opseg i rok pišu u ponudi prije izvedbe.",
  },
  {
    q: "Hoću li biti vlasnik svoje web stranice?",
    a: "Da. Domena, hosting i izrađena stranica ostaju vaši, i ako godišnji paket ne uzmete.",
  },
];
