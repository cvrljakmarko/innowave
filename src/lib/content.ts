export const company = {
  name: "Innowave",
  email: "hello@innowave.dev",
  practice: "Izrada poslovnih web stranica",
};

export const nav = [
  { href: "#radovi", label: "Radovi" },
  { href: "#cijene", label: "Cijene" },
  { href: "#proces", label: "Proces" },
  { href: "#pitanja", label: "Pitanja" },
];

export const projects = [
  {
    title: "Rent a Boat Grebaštica",
    href: "https://rentaboat-info.com/",
    image: "/portfolio/rentaboat.jpg",
    description:
      "Najam i rezervacije. Brodice i apartmani u Grebaštici kraj Šibenika, flota i kontakt na jednoj stranici.",
  },
  {
    title: "Rivina Jaruga",
    href: "https://rivinajaruga.com/",
    image: "/portfolio/rivina.jpg",
    description:
      "Stranica ustanove. Komunalno društvo iz Skradina: obavijesti, rasporedi odvoza i javne usluge.",
  },
  {
    title: "AgriFood Croatia",
    href: "https://agrifoodcroatia.com/",
    image: "/portfolio/agrifood.jpg",
    description:
      "Prezentacija projekata. Inovacijski hub za poljoprivredu i prehranu: vijesti, projekti i partneri.",
  },
  {
    title: "Rent by Mario",
    href: "https://rentbymario.com/hr/naslovnica/",
    image: "/portfolio/mario.jpg",
    description:
      "Najam i rezervacije na hrvatskom. Obiteljski najam brodica i apartmana u Brodarici.",
  },
  {
    title: "Put rukopisa",
    href: "https://put-rukopisa.hr/",
    image: "/portfolio/put-rukopisa.jpg",
    description:
      "Web shop. Serijal knjiga Život: naslovi, cijene i narudžba na jednoj stranici.",
  },
  {
    title: "High Class Relocation",
    href: "https://highclass.hr/",
    image: "/portfolio/highclass.jpg",
    description:
      "Uslužna stranica. Preseljenje stranih zaposlenika: imigracija, smještaj i dolazak u Zagreb.",
  },
  {
    title: "Lučka uprava Šibenik",
    href: "https://portauthority-sibenik.hr/",
    image: "/portfolio/luka-sibenik.jpg",
    description:
      "Stranica ustanove. Lučka uprava: obavijesti, koncesije, luka i projekti.",
  },
  {
    title: "TORRIS",
    href: "https://torrisbranding.hr/",
    image: "/portfolio/torris.jpg",
    description:
      "Agencijska stranica. Branding boutique iz Zagreba: strategija brenda, digital i savjetovanje.",
  },
  {
    title: "Safe Leap",
    href: "https://safe-leap.hr/",
    image: "/portfolio/safe-leap.jpg",
    description:
      "Stranica za edukacije. Programi za voditelje, HR i razvoj timova.",
  },
  {
    title: "Ortodont Vukelja",
    href: "https://ortodont-karlovac.hr/",
    image: "/portfolio/ortodont.jpg",
    description:
      "Stranica ordinacije. Ortodoncija u Karlovcu: odrasli, djeca i radno vrijeme.",
  },
  {
    title: "IntegrityUP",
    href: "https://integrityup.eu/",
    image: "/portfolio/integrityup.jpg",
    description:
      "Edukacijski program na više jezika. Poslovna etika i usklađenost za menadžere i timove.",
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
    audience: "Jedna usluga ili kampanja, s jasnim pozivom na kontakt.",
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
    audience: "Uredna stranica: tko ste, što radite i kako vas se kontaktira.",
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
    audience: "Poslovna stranica koja svaku uslugu predstavi zasebno.",
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
    audience: "Više sadržaja, lokacije i stranica koja treba prodavati.",
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
    audience: "Mala trgovina: katalog, košarica i narudžba bez kartica.",
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
    detail: "Domena, hosting, SSL, backup i do 2 sata sitnih izmjena.",
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
    title: "Razgovor",
    body: "Prije odluke znate opseg, cijenu i rok. Iznos s cjenika ulazi u ponudu i tu ostaje.",
  },
  {
    index: "02",
    title: "Izrada",
    body: "Od vas treba kratak opis posla, popis usluga i fotografije. Tekstove slažemo mi. Nakon prve verzije imate dva kruga izmjena.",
  },
  {
    index: "03",
    title: "Objava",
    body: "Dorade stanu u ta dva kruga. Zatim stranica ide online. Iznos iz ponude se usred rada ne mijenja.",
  },
];

export const faqs = [
  {
    q: "Što je uključeno u paket?",
    a: "Izrada stranice, tekstovi i rad s fotografijama. Ako svojih fotografija nemate, koristimo licencirane. U svakom paketu su mobilni prikaz, kontakt forma, karta, SSL, privatnost, kolačići i dva kruga izmjena. Od vas treba kratak opis posla, popis usluga i slike koje želite pokazati.",
  },
  {
    q: "Je li PDV u cijeni?",
    a: "Iznos na kartici je iznos u ponudi i na računu. PDV na njega ne dodajemo.",
  },
  {
    q: "Kako se plaća?",
    a: "Kroz ponudu i račun, u dva dijela: polovica prije početka izrade, polovica prije objave. Točan iznos stoji u ponudi i ne mijenja se tijekom rada.",
  },
  {
    q: "Koliko traje izrada?",
    a: "Landing do 7 dana, Start do 10, Standard do 15, Premium do 30. Rok web shopa piše u ponudi. Ako opseg izađe iz paketa, rok je dulji i to piše prije početka.",
  },
  {
    q: "Radite li landing i web shop?",
    a: "Da. Landing je 690 € za jednu stranicu. Web shop kreće od 1.690 € za do 40 proizvoda, s košaricom, virmanom i pouzećem. Kartice kreću od 350 €, fiskalizacija ide po ponudi.",
  },
  {
    q: "Mogu li sam mijenjati tekstove?",
    a: "Sitne izmjene radimo mi. U godišnjem paketu su do 2 sata, inače 35 € po satu. Sustav u kojem sami mijenjate tekst nije dio osnovnog paketa.",
  },
  {
    q: "Tko je vlasnik domene i stranice?",
    a: "Vi. Domena, hosting i stranica ostaju vaši i ako godišnji paket ne uzmete. Izrada je ista u oba slučaja.",
  },
  {
    q: "Ima li troška nakon objave?",
    a: "Godišnji paket je 200 €: domena, hosting, SSL, backup i do 2 sata sitnih izmjena. Možete domenu i hosting držati sami.",
  },
  {
    q: "Što ako treba više od paketa?",
    a: "Dodatna podstranica je 80 €. Dodatni jezik je 200 € do 10 stranica, a na Premiumu prema opsegu. Sat izmjena je 35 €. Rezervacije kreću od 450 €, kartice od 350 €. Fiskalizacija ide po ponudi. Naknade kartičnog procesora nisu u cijeni izrade.",
  },
  {
    q: "Kad odgovarate na upit?",
    a: "Sljedeći radni dan. Poruka s obrasca otvara vaš program za e-poštu. Na ovoj stranici upit ne spremamo.",
  },
];
