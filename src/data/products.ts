export type Product = {
  name: string;
  slug: string;
};

export type ProductCategory = {
  slug: string;
  title: string;
  note: string;
  products: Product[];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function category(title: string, note: string, names: string[]): ProductCategory {
  return {
    slug: slugify(title),
    title,
    note,
    products: names.map((name) => ({ name, slug: slugify(name) })),
  };
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  category("Dégraissage chimique", "Dégraissants pour tous types de métaux.", [
    "Emulsol",
    "Cleaner A70",
    "Cleaner C80",
    "Cleaner/AL",
  ]),
  category("Dégraissage électrolytique", "Dégraissage renforcé par courant électrolytique.", [
    "Ecleaner A100",
    "Ecleaner C110",
    "Ecleaner/F",
    "TA-50",
  ]),
  category("Décapage", "Décapage et désoxydation à base acide.", [
    "IT-11",
    "IT-12",
    "Pickler",
  ]),
  category("Zinc acide", "Haute densité de courant, dépôt blanc brillant.", [
    "Zincal 500",
  ]),
  category("Zinc alcalin sans cyanure", "Résistance à la corrosion, haute brillance.", [
    "Alcazinc",
  ]),
  category("Zinc alcalin cyanuré", "Options haute, moyenne et basse teneur en cyanure.", [
    "Polyzinc",
  ]),
  category("Cadmium cyanuré", "Dépôt brillant et stable.", [
    "Cadyte",
  ]),
  category(
    "Passivations zinc",
    "Finitions bleue, incolore, verte olive et noire.",
    [
      "Convector C20",
      "Convector C10",
      "Bluepass 70",
      "Bluepass 70S",
      "Bluepass 30",
      "Bluepass 60",
      "Green 200",
      "Blackstar 100",
      "Finishing",
    ]
  ),
  category("Étain acide", "Finitions décoratives et électroniques.", [
    "Stalux 100",
    "Etalux 200",
  ]),
  category(
    "Cuivre",
    "Bains acides, pyrophosphates et cyanurés.",
    ["Cuprex 500", "Cuprite 200", "Copper 700", "Cobra 1000"]
  ),
  category("Laiton", "Placage laiton au cyanure.", ["Brass 777"]),
  category(
    "Nickel",
    "Finitions satinées, semi-brillantes, sulfamate et brillantes.",
    [
      "Nickel Velours",
      "Nickel Semi-Brillant",
      "Nickel Sulfamate",
      "Bright 1070",
      "Bright 1050",
      "Bright 2000",
    ]
  ),
  category(
    "Épurateurs & mouillants nickel",
    "Purification de bain et agents mouillants.",
    ["Purifit 33", "Epurat/R", "Wetter 100", "Wet-Air 150"]
  ),
  category(
    "Chrome",
    "Chrome décoratif et fonctionnel — trivalent, hexavalent et noir.",
    ["Trichrom", "Chrodura", "Chroblack", "Fogless"]
  ),
];

export const PRODUCT_COUNT = PRODUCT_CATEGORIES.reduce(
  (sum, cat) => sum + cat.products.length,
  0
);
