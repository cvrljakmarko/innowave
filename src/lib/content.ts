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
      "Najam brodica i apartmana u Grebaštici kraj Šibenika. Flota, smještaj i kontakt na jednoj stranici.",
  },
  {
    title: "Rivina Jaruga",
    href: "https://rivinajaruga.com/",
    image: "/portfolio/rivina.jpg",
    description:
      "Stranica komunalnog društva iz Skradina. Obavijesti, rasporedi odvoza i javne usluge.",
  },
  {
    title: "AgriFood Croatia",
    href: "https://agrifoodcroatia.com/",
    image: "/portfolio/agrifood.jpg",
    description:
      "Inovacijski hub za digitalnu transformaciju poljoprivrede i prehrane. Vijesti, projekti i partneri.",
  },
  {
    title: "Rent by Mario",
    href: "https://rentbymario.com/hr/naslovnica/",
    image: "/portfolio/mario.jpg",
    description:
      "Obiteljski najam brodica i apartmana u Brodarici. Ponuda plovila i rezervacija na hrvatskom.",
  },
  {
    title: "Put rukopisa",
    href: "https://put-rukopisa.hr/",
    image: "/portfolio/put-rukopisa.jpg",
    description:
      "Web shop serijala knjiga Život. Naslovi, cijene i narudžba na jednoj stranici.",
  },
  {
    title: "High Class Relocation",
    href: "https://highclass.hr/",
    image: "/portfolio/highclass.jpg",
    description:
      "Preseljenje stranih zaposlenika u Hrvatsku. Usluge imigracije, smještaja i dolaska u Zagreb.",
  },
  {
    title: "Lučka uprava Šibenik",
    href: "https://portauthority-sibenik.hr/",
    image: "/portfolio/luka-sibenik.jpg",
    description:
      "Službena stranica lučke uprave. Obavijesti, koncesije, luka i projekti.",
  },
  {
    title: "TORRIS",
    href: "https://torrisbranding.hr/",
    image: "/portfolio/torris.jpg",
    description:
      "Branding boutique agencija iz Zagreba. Strategija brenda, digital i savjetovanje.",
  },
  {
    title: "Safe Leap",
    href: "https://safe-leap.hr/",
    image: "/portfolio/safe-leap.jpg",
    description:
      "Edukacija voditelja i HR-a. Programi razvoja timova i liderstva.",
  },
  {
    title: "Ortodont Vukelja",
    href: "https://ortodont-karlovac.hr/",
    image: "/portfolio/ortodont.jpg",
    description:
      "Specijalistička ordinacija za ortodonciju u Karlovcu. Odrasli, djeca i radno vrijeme.",
  },
  {
    title: "IntegrityUP",
    href: "https://integrityup.eu/",
    image: "/portfolio/integrityup.jpg",
    description:
      "Program poslovne etike i usklađenosti. Edukacije za menadžere i timove.",
  },
];

export const packages = [
  {
    name: "Start",
    price: "1.200 €",
    label: "Osnovno",
    audience: "Uredna stranica: tko ste, što radite i kako vas se kontaktira.",
    time: "Do 10 dana",
    featured: false,
    points: [
      "Sadržaj na do 5 podstranica",
      "SEO za naziv i glavnu uslugu",
      "Pisanje tekstova i postavljanje fotografija",
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
      "Tekstovi i dorada fotografija",
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
      "SEO za usluge i lokacije",
      "Copywriting i obrada fotografija",
      "Objava unutar 30 dana",
    ],
  },
];

export const extras = [
  { name: "Dodatna podstranica", price: "100 €" },
  { name: "Dodatni jezik", price: "200 €" },
  { name: "Sat manjih izmjena", price: "20 €" },
  { name: "Domena, hosting i održavanje", price: "200 € / god" },
  { name: "Sustav rezervacija", price: "Po ponudi" },
  { name: "Plaćanje karticama", price: "Po ponudi" },
  { name: "Automatska fiskalizacija računa", price: "Po ponudi" },
];

export const steps = [
  {
    index: "01",
    title: "Razgovor",
    body: "Prije odluke znate opseg, cijenu i rok. Ništa ne kreće dok to nije jasno.",
  },
  {
    index: "02",
    title: "Izrada",
    body: "Od vas trebamo kratak opis, popis usluga i fotografije. Tekstove i stranicu slažemo mi.",
  },
  {
    index: "03",
    title: "Objava",
    body: "Prvu verziju doradimo prema komentarima, u okviru paketa. Zatim ide na Google.",
  },
];

export const faqs = [
  {
    q: "Što je uključeno u paket?",
    a: "Izrada stranice, tekstovi i rad s fotografijama. Ako svojih fotografija nemate, koristimo licencirane. Od vas treba kratak opis posla, popis usluga i slike koje želite pokazati.",
  },
  {
    q: "Kako se plaća?",
    a: "Kroz ponudu i račun, u dva dijela: polovica prije početka izrade, polovica prije objave. Cijena iz paketa je orijentir. Točan iznos stoji u ponudi i ne mijenja se tijekom rada.",
  },
  {
    q: "Koliko traje izrada?",
    a: "Start do 10 dana, Standard do 15, Premium do 30. Ako opseg izađe iz paketa, rok je dulji i to piše u ponudi prije početka.",
  },
  {
    q: "Ima li troška nakon objave?",
    a: "Domena, hosting i održavanje stoje 200 € godišnje, zajedno. Možete ih držati i sami. Kvaliteta izrade je ista u oba slučaja.",
  },
  {
    q: "Što ako treba više od paketa?",
    a: "Dodatna podstranica je 100 €, dodatni jezik 200 €, sat manjih izmjena 20 €. Rezervacije, kartično plaćanje i fiskalizacija idu po zasebnoj ponudi. Naknade kartičnog procesora nisu u cijeni izrade.",
  },
];
