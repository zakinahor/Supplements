export interface ProductVariant {
  id: number;
  title: string;
  price: number;
  compare_at_price: number | null;
  sku: string | null;
  available: boolean;
  option1: string | null;
  option2: string | null;
  option3: string | null;
  weight_grams: number;
}

export interface ProductOption {
  name: string;
  position: number;
  values: string[];
}

export interface Product {
  id: number;
  title: string;
  handle: string;
  product_type: string;
  vendor: string;
  tags: string[];
  body_html: string;
  clean_description: string;
  options: ProductOption[];
  variants: ProductVariant[];
  images: string[];
  featured_image: string | null;
  min_price: number;
  max_price: number;
  subtitle?: string;
  features?: string[];
  badge?: string;
  rating?: number;
  reviews_count?: number;
}

export interface CollectionItem {
  id: number;
  title: string;
  handle: string;
  products_count: number;
  description: string;
}

export interface UrlItem {
  url: string;
  category: string;
  title: string;
  purpose: string;
  lastmod?: string;
}

export const PRODUCTS: Product[] = [
  {
    "id": 10126833451288,
    "title": "Essentials Stack",
    "handle": "essentials-stack",
    "product_type": "Supplements",
    "vendor": "Premium Supps",
    "tags": [
      "ad-style-tag"
    ],
    "body_html": "<h2>Pre-workout, protein and creatine in one bundle</h2><p>The Essentials Stack combines three practical training products: Warrior High-Stimulant Pre-Workout, Protein Water and 250g of Micronised Creatine Monohydrate.</p><h3>What is included</h3><ul>\n<li>\n<a href=\"/products/warrior-pre-workout\"><strong>Warrior High-Stimulant Pre-Workout</strong></a> \u2014 choose Pineapple, Grape, Mango, Apple or Watermelon</li>\n<li>\n<a href=\"/products/protein-water\"><strong>Protein Water, 990g</strong></a> \u2014 30 serves with 27g protein per serve from hydrolysed beef collagen; choose Passion Fruit, Pineapple or Mango</li>\n<li>\n<a href=\"/products/creatine-monohydrate\"><strong>Micronised Creatine Monohydrate, 250g</strong></a> \u2014 unflavoured 200-mesh creatine powder</li>\n</ul><h3>A straightforward training routine</h3><p>Use each product separately according to its own label. Protein Water offers a fruit-flavoured protein option, creatine fits a consistent daily routine, and Warrior is the high-caffeine pre-workout component.</p><h3>Important use information</h3><p>Warrior contains 400mg caffeine per full serve. Do not combine it with other caffeine or stimulant products. Assess tolerance and seek professional advice before use if you take medication, have a health condition, or are pregnant or breastfeeding.</p>",
    "clean_description": "Pre-workout, protein and creatine in one bundle The Essentials Stack combines three practical training products: Warrior High-Stimulant Pre-Workout, Protein Water and 250g of Micronised Creatine Monohydrate. What is included Warrior High-Stimulant Pre-Workout \u2014 choose Pineapple, Grape, Mango, Apple or Watermelon Protein Water, 990g \u2014 30 serves with 27g protein per serve from hydrolysed beef collagen; choose Passion Fruit, Pineapple or Mango Micronised Creatine Monohydrate, 250g \u2014 unflavoured 200-mesh creatine powder A straightforward training routine Use each product separately according to its own label. Protein Water offers a fruit-flavoured protein option, creatine fits a consistent daily routine, and Warrior is the high-caffeine pre-workout component. Important use information Warrior contains 400mg caffeine per full serve. Do not combine it with other caffeine or stimulant products. Assess tolerance and seek professional advice before use if you take medication, have a health condition, or are pregnant or breastfeeding.",
    "options": [
      {
        "name": "Warrior High-Stimulant Pre-workout (Flavour)",
        "position": 1,
        "values": [
          "Pineapple",
          "Grape",
          "Mango",
          "Apple",
          "Watermelon"
        ]
      },
      {
        "name": "Protein Water (Flavour)",
        "position": 2,
        "values": [
          "Passion Fruit",
          "Pineapple",
          "Mango"
        ]
      }
    ],
    "variants": [
      {
        "id": 51753444147480,
        "title": "Pineapple / Passion Fruit",
        "price": 79.0,
        "compare_at_price": 149.85,
        "sku": null,
        "available": false,
        "option1": "Pineapple",
        "option2": "Passion Fruit",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753444180248,
        "title": "Pineapple / Pineapple",
        "price": 79.0,
        "compare_at_price": 149.85,
        "sku": null,
        "available": false,
        "option1": "Pineapple",
        "option2": "Pineapple",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753444213016,
        "title": "Pineapple / Mango",
        "price": 79.0,
        "compare_at_price": 149.85,
        "sku": null,
        "available": false,
        "option1": "Pineapple",
        "option2": "Mango",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753444245784,
        "title": "Grape / Passion Fruit",
        "price": 79.0,
        "compare_at_price": 149.85,
        "sku": null,
        "available": false,
        "option1": "Grape",
        "option2": "Passion Fruit",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753444278552,
        "title": "Grape / Pineapple",
        "price": 79.0,
        "compare_at_price": 149.85,
        "sku": null,
        "available": false,
        "option1": "Grape",
        "option2": "Pineapple",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753444311320,
        "title": "Grape / Mango",
        "price": 79.0,
        "compare_at_price": 149.85,
        "sku": null,
        "available": false,
        "option1": "Grape",
        "option2": "Mango",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753444344088,
        "title": "Mango / Passion Fruit",
        "price": 79.0,
        "compare_at_price": 149.85,
        "sku": null,
        "available": false,
        "option1": "Mango",
        "option2": "Passion Fruit",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753444376856,
        "title": "Mango / Pineapple",
        "price": 79.0,
        "compare_at_price": 149.85,
        "sku": null,
        "available": false,
        "option1": "Mango",
        "option2": "Pineapple",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753444409624,
        "title": "Mango / Mango",
        "price": 79.0,
        "compare_at_price": 149.85,
        "sku": null,
        "available": false,
        "option1": "Mango",
        "option2": "Mango",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753444442392,
        "title": "Apple / Passion Fruit",
        "price": 79.0,
        "compare_at_price": 149.85,
        "sku": null,
        "available": false,
        "option1": "Apple",
        "option2": "Passion Fruit",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753444475160,
        "title": "Apple / Pineapple",
        "price": 79.0,
        "compare_at_price": 149.85,
        "sku": null,
        "available": false,
        "option1": "Apple",
        "option2": "Pineapple",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753444507928,
        "title": "Apple / Mango",
        "price": 79.0,
        "compare_at_price": 149.85,
        "sku": null,
        "available": false,
        "option1": "Apple",
        "option2": "Mango",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753444540696,
        "title": "Watermelon / Passion Fruit",
        "price": 79.0,
        "compare_at_price": 149.85,
        "sku": null,
        "available": false,
        "option1": "Watermelon",
        "option2": "Passion Fruit",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753444573464,
        "title": "Watermelon / Pineapple",
        "price": 79.0,
        "compare_at_price": 149.85,
        "sku": null,
        "available": false,
        "option1": "Watermelon",
        "option2": "Pineapple",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753444606232,
        "title": "Watermelon / Mango",
        "price": 79.0,
        "compare_at_price": 149.85,
        "sku": null,
        "available": false,
        "option1": "Watermelon",
        "option2": "Mango",
        "option3": null,
        "weight_grams": 0
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Essentials_STACK_Warrior_Pineapple.jpg?v=1773645246",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Essentials_STACK_Pineapple_Pineapple.jpg?v=1773645246",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Essentials_STACK_Mango_Pineapple.jpg?v=1773645246",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Essentials_STACK_Pineapple_Watermelone.jpg?v=1773645246",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Essentials_STACK_Mango_Watermelone.jpg?v=1773645246",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Essentials_STACK_Warrior_Grape.jpg?v=1773053536",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Essentials_STACK_Pineapple_Grape.jpg?v=1773053515",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Essentials_STACK_Mango_Grape.jpg?v=1773053442",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Essentials_STACK_Warrior_Mango.jpg?v=1773053352",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Essentials_STACK_Pineapple_Mango.jpg?v=1773053316",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Essentials_STACK_Mango_Mango.jpg?v=1773053288",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Essentials_STACK_Warrior_Apple.jpg?v=1773053166",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Essentials_STACK_Pineapple_Apple.jpg?v=1773053190",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Essentials_STACK_Mango_Apple.jpg?v=1773053216",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Essentials_STACK_Warrior_Watermelone.jpg?v=1773645178"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Essentials_STACK_Warrior_Pineapple.jpg?v=1773645246",
    "min_price": 79.0,
    "max_price": 79.0,
    "subtitle": "Australian Manufactured Pure Essentials Stack with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Bundle & Save",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 10126901903640,
    "title": "Anabolic Stack",
    "handle": "anabolic-stack",
    "product_type": "Supplements",
    "vendor": "Premium Supps",
    "tags": [
      "ad-style-tag"
    ],
    "body_html": "<h2>Four products for day or night training</h2><p>The Anabolic Stack combines a high-stimulant pre-workout, a caffeine-free pre-workout, 1kg of micronised creatine monohydrate and liquid Vitamin D in one bundle.</p><h3>What is included</h3><ul>\n<li>\n<a href=\"/products/warrior-pre-workout\"><strong>Warrior High-Stimulant Pre-Workout</strong></a> \u2014 choose Pineapple, Grape, Mango, Apple or Watermelon</li>\n<li>\n<a href=\"/products/night-warrior-stimulant-free-pre-workout\"><strong>Night Warrior Caffeine-Free Pre-Workout</strong></a> \u2014 choose Grape, Mango, Watermelon or Unflavoured</li>\n<li>\n<a href=\"/products/creatine-monohydrate\"><strong>Micronised Creatine Monohydrate, 1kg</strong></a> \u2014 unflavoured 200-mesh powder</li>\n<li>\n<a href=\"/products/vitamin-d\"><strong>Liquid Vitamin D, 30ml</strong></a> \u2014 Vitamin D3 in an MCT oil base, providing 400 IU per drop</li>\n</ul><h3>Choose the pre-workout that suits the session</h3><p>Use Warrior when a high-caffeine formula suits your training, or Night Warrior when you want a caffeine-free option. Use every product separately and follow its own label directions.</p><h3>Important use information</h3><p>Warrior contains 400mg caffeine per full serve. Do not combine it with other caffeine or stimulant products. Assess tolerance and seek professional advice before use if you take medication, have a health condition, or are pregnant or breastfeeding.</p>",
    "clean_description": "Four products for day or night training The Anabolic Stack combines a high-stimulant pre-workout, a caffeine-free pre-workout, 1kg of micronised creatine monohydrate and liquid Vitamin D in one bundle. What is included Warrior High-Stimulant Pre-Workout \u2014 choose Pineapple, Grape, Mango, Apple or Watermelon Night Warrior Caffeine-Free Pre-Workout \u2014 choose Grape, Mango, Watermelon or Unflavoured Micronised Creatine Monohydrate, 1kg \u2014 unflavoured 200-mesh powder Liquid Vitamin D, 30ml \u2014 Vitamin D3 in an MCT oil base, providing 400 IU per drop Choose the pre-workout that suits the session Use Warrior when a high-caffeine formula suits your training, or Night Warrior when you want a caffeine-free option. Use every product separately and follow its own label directions. Important use information Warrior contains 400mg caffeine per full serve. Do not combine it with other caffeine or stimulant products. Assess tolerance and seek professional advice before use if you take medication, have a health condition, or are pregnant or breastfeeding.",
    "options": [
      {
        "name": "Night warrior Caffeine-free Pre-workout (Flavour)",
        "position": 1,
        "values": [
          "Grape",
          "Mango",
          "Watermelon",
          "Unflavoured"
        ]
      },
      {
        "name": "Warrior High-Stimulant Pre-workout (Flavour)",
        "position": 2,
        "values": [
          "Pineapple",
          "Grape",
          "Mango",
          "Apple",
          "Watermelon"
        ]
      }
    ],
    "variants": [
      {
        "id": 51753590718744,
        "title": "Grape / Pineapple",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": true,
        "option1": "Grape",
        "option2": "Pineapple",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753590751512,
        "title": "Grape / Grape",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": true,
        "option1": "Grape",
        "option2": "Grape",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753590784280,
        "title": "Grape / Mango",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": true,
        "option1": "Grape",
        "option2": "Mango",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753590817048,
        "title": "Grape / Apple",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": true,
        "option1": "Grape",
        "option2": "Apple",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753590849816,
        "title": "Grape / Watermelon",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": false,
        "option1": "Grape",
        "option2": "Watermelon",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753590882584,
        "title": "Mango / Pineapple",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": true,
        "option1": "Mango",
        "option2": "Pineapple",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753590915352,
        "title": "Mango / Grape",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": true,
        "option1": "Mango",
        "option2": "Grape",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753590948120,
        "title": "Mango / Mango",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": true,
        "option1": "Mango",
        "option2": "Mango",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753590980888,
        "title": "Mango / Apple",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": true,
        "option1": "Mango",
        "option2": "Apple",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753591013656,
        "title": "Mango / Watermelon",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": false,
        "option1": "Mango",
        "option2": "Watermelon",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753591046424,
        "title": "Watermelon / Pineapple",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": true,
        "option1": "Watermelon",
        "option2": "Pineapple",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753591079192,
        "title": "Watermelon / Grape",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": true,
        "option1": "Watermelon",
        "option2": "Grape",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753591111960,
        "title": "Watermelon / Mango",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": true,
        "option1": "Watermelon",
        "option2": "Mango",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753591144728,
        "title": "Watermelon / Apple",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": true,
        "option1": "Watermelon",
        "option2": "Apple",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753591177496,
        "title": "Watermelon / Watermelon",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": false,
        "option1": "Watermelon",
        "option2": "Watermelon",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753591210264,
        "title": "Unflavoured / Pineapple",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": true,
        "option1": "Unflavoured",
        "option2": "Pineapple",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753591243032,
        "title": "Unflavoured / Grape",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": true,
        "option1": "Unflavoured",
        "option2": "Grape",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753591275800,
        "title": "Unflavoured / Mango",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": true,
        "option1": "Unflavoured",
        "option2": "Mango",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753591308568,
        "title": "Unflavoured / Apple",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": true,
        "option1": "Unflavoured",
        "option2": "Apple",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753591341336,
        "title": "Unflavoured / Watermelon",
        "price": 99.95,
        "compare_at_price": 204.8,
        "sku": null,
        "available": false,
        "option1": "Unflavoured",
        "option2": "Watermelon",
        "option3": null,
        "weight_grams": 0
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-W_Graps_W_Pineapple.jpg?v=1773310998",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-Warrior_Grape.jpg?v=1773310996",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-W_Graps_W_Mango.jpg?v=1773310998",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-W_Graps_W_Apple.jpg?v=1773310998",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-W_Unflavo_W_Watermelon.jpg?v=1773310997",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-WarriorGrape.jpg?v=1773310998",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-W_Mango_W_Apple.jpg?v=1773310998",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-WarriorApple.jpg?v=1773310998",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-WarriorManago.jpg?v=1773310998",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-WarriorPineapple.jpg?v=1773310998",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-Warrior_Watermelon.jpg?v=1773310998",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-Warrior_Mango.jpg?v=1773310998",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-W_Mango_W_Watermelon.jpg?v=1773310998",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-W_Mango_W_Pineapple.jpg?v=1773310998",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-W_Graps_W_Grape.jpg?v=1773310998",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-WarriorGrape_1.jpg?v=1773310998",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-W_Mango_W_Grape.jpg?v=1773310997",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-WarriorWattermelon.jpg?v=1773310998",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-W_Mango_W_Mango.jpg?v=1773310997",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-W_Unflavo_W_Apple.jpg?v=1773310999",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-W_Graps_W_Watermelon.jpg?v=1773310995",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-W_Unflavo_W_Grape.jpg?v=1773310997",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-W_Unflavo_W_Mango.jpg?v=1773310997",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-Warrior_Unflovoured.jpg?v=1773310997",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-W_Unflavo_W_Pineapple.jpg?v=1773310994"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ANABOLIC-STACK_Bundle-_N-W_Graps_W_Pineapple.jpg?v=1773310998",
    "min_price": 99.95,
    "max_price": 99.95,
    "subtitle": "Australian Manufactured Pure Anabolic Stack with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Bundle & Save",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 10126906523928,
    "title": "Vitality Stack",
    "handle": "vitality-stack",
    "product_type": "Supplements",
    "vendor": "Premium Supps",
    "tags": [],
    "body_html": "<h2>Five clearly specified products in one bundle</h2><p>The Vitality Stack combines Electrolytes, 1kg of micronised creatine monohydrate, liquid Vitamin D, Shilajit resin and Methylene Blue 1% solution. Each product should be considered separately and used only according to its own label and warnings.</p><h3>What is included</h3><ul>\n<li>\n<a href=\"/products/electrolytes\"><strong>Electrolytes, 315g</strong></a> \u2014 choose Lychee, Pineapple or Blackcurrant</li>\n<li>\n<a href=\"/products/creatine-monohydrate\"><strong>Micronised Creatine Monohydrate, 1kg</strong></a> \u2014 unflavoured 200-mesh powder</li>\n<li>\n<a href=\"/products/vitamin-d\"><strong>Liquid Vitamin D, 30ml</strong></a> \u2014 Vitamin D3 in an MCT oil base, providing 400 IU per drop</li>\n<li>\n<a href=\"/products/shilajit-resin\"><strong>Shilajit Resin, 20g</strong></a> \u2014 approximately 50 serves</li>\n<li>\n<a href=\"/products/methylene-blue-10mg-ml\"><strong>Methylene Blue, 30ml</strong></a> \u2014 a 1% solution labelled at 10mg/ml</li>\n</ul><h3>Important safety information</h3><p>Methylene Blue is not a standard dietary supplement. Do not use oral Methylene Blue unless advised or prescribed by a healthcare professional. It may interact with medicines that affect serotonin, should not be used during pregnancy, and may cause red blood cell damage in people with G6PD deficiency.</p><p>Read every individual product page and label before purchasing or using this bundle.</p>",
    "clean_description": "Five clearly specified products in one bundle The Vitality Stack combines Electrolytes, 1kg of micronised creatine monohydrate, liquid Vitamin D, Shilajit resin and Methylene Blue 1% solution. Each product should be considered separately and used only according to its own label and warnings. What is included Electrolytes, 315g \u2014 choose Lychee, Pineapple or Blackcurrant Micronised Creatine Monohydrate, 1kg \u2014 unflavoured 200-mesh powder Liquid Vitamin D, 30ml \u2014 Vitamin D3 in an MCT oil base, providing 400 IU per drop Shilajit Resin, 20g \u2014 approximately 50 serves Methylene Blue, 30ml \u2014 a 1% solution labelled at 10mg/ml Important safety information Methylene Blue is not a standard dietary supplement. Do not use oral Methylene Blue unless advised or prescribed by a healthcare professional. It may interact with medicines that affect serotonin, should not be used during pregnancy, and may cause red blood cell damage in people with G6PD deficiency. Read every individual product page and label before purchasing or using this bundle.",
    "options": [
      {
        "name": "Electrolytes (Flavor)",
        "position": 1,
        "values": [
          "Lychee",
          "Pineapple",
          "Blackcurrant"
        ]
      }
    ],
    "variants": [
      {
        "id": 51753596027160,
        "title": "Lychee",
        "price": 179.95,
        "compare_at_price": 299.75,
        "sku": null,
        "available": true,
        "option1": "Lychee",
        "option2": null,
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753596125464,
        "title": "Pineapple",
        "price": 179.95,
        "compare_at_price": 299.75,
        "sku": null,
        "available": true,
        "option1": "Pineapple",
        "option2": null,
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753596223768,
        "title": "Blackcurrant",
        "price": 179.95,
        "compare_at_price": 299.75,
        "sku": null,
        "available": true,
        "option1": "Blackcurrant",
        "option2": null,
        "option3": null,
        "weight_grams": 0
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Vitality_STACK_Bundle_Lychee.jpg?v=1773054494",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Vitality_STACK_Bundle.jpg?v=1773054494",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Vitality_STACK_Bundle_Pineapple.jpg?v=1773054494",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Vitality_STACK_Bundle_Blackcurrant.jpg?v=1773054494"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Vitality_STACK_Bundle_Lychee.jpg?v=1773054494",
    "min_price": 179.95,
    "max_price": 179.95,
    "subtitle": "Australian Manufactured Pure Vitality Stack with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Bundle & Save",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 10126899151128,
    "title": "Hydration Stack",
    "handle": "hydration-stack",
    "product_type": "Supplements",
    "vendor": "Premium Supps",
    "tags": [
      "ad-style-tag"
    ],
    "body_html": "<h2>Electrolytes, protein and creatine in one bundle</h2><p>The Hydration Stack combines three complementary products for training, hot conditions and active days: Premium Supps Electrolytes, Protein Water and 500g of Micronised Creatine Monohydrate.</p><h3>What is included</h3><ul>\n<li>\n<a href=\"/products/electrolytes\"><strong>Electrolytes, 315g</strong></a> \u2014 30 serves with sodium, potassium and magnesium citrates plus taurine and other amino acids; choose Lychee, Pineapple or Blackcurrant</li>\n<li>\n<a href=\"/products/protein-water\"><strong>Protein Water, 990g</strong></a> \u2014 30 serves with 27g protein per serve from hydrolysed beef collagen; choose Passion Fruit, Pineapple or Mango</li>\n<li>\n<a href=\"/products/creatine-monohydrate\"><strong>Micronised Creatine Monohydrate, 500g</strong></a> \u2014 unflavoured 200-mesh creatine powder</li>\n</ul><h3>How to use</h3><p>Prepare and consume each product separately according to its own label. Fluid and electrolyte needs vary with climate, sweat rate, exercise intensity and individual circumstances.</p>",
    "clean_description": "Electrolytes, protein and creatine in one bundle The Hydration Stack combines three complementary products for training, hot conditions and active days: Premium Supps Electrolytes, Protein Water and 500g of Micronised Creatine Monohydrate. What is included Electrolytes, 315g \u2014 30 serves with sodium, potassium and magnesium citrates plus taurine and other amino acids; choose Lychee, Pineapple or Blackcurrant Protein Water, 990g \u2014 30 serves with 27g protein per serve from hydrolysed beef collagen; choose Passion Fruit, Pineapple or Mango Micronised Creatine Monohydrate, 500g \u2014 unflavoured 200-mesh creatine powder How to use Prepare and consume each product separately according to its own label. Fluid and electrolyte needs vary with climate, sweat rate, exercise intensity and individual circumstances.",
    "options": [
      {
        "name": "Electrolytes (Flavor)",
        "position": 1,
        "values": [
          "Lychee",
          "Pineapple",
          "Blackcurrant"
        ]
      },
      {
        "name": "Protein Water (Flavour)",
        "position": 2,
        "values": [
          "Passion Fruit",
          "Pineapple",
          "Mango"
        ]
      }
    ],
    "variants": [
      {
        "id": 51753585541400,
        "title": "Lychee / Passion Fruit",
        "price": 79.95,
        "compare_at_price": 161.85,
        "sku": null,
        "available": false,
        "option1": "Lychee",
        "option2": "Passion Fruit",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753585574168,
        "title": "Lychee / Pineapple",
        "price": 79.95,
        "compare_at_price": 161.85,
        "sku": null,
        "available": false,
        "option1": "Lychee",
        "option2": "Pineapple",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753585606936,
        "title": "Lychee / Mango",
        "price": 79.95,
        "compare_at_price": 161.85,
        "sku": null,
        "available": false,
        "option1": "Lychee",
        "option2": "Mango",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753585639704,
        "title": "Pineapple / Passion Fruit",
        "price": 79.95,
        "compare_at_price": 161.85,
        "sku": null,
        "available": false,
        "option1": "Pineapple",
        "option2": "Passion Fruit",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753585672472,
        "title": "Pineapple / Pineapple",
        "price": 79.95,
        "compare_at_price": 161.85,
        "sku": null,
        "available": false,
        "option1": "Pineapple",
        "option2": "Pineapple",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753585705240,
        "title": "Pineapple / Mango",
        "price": 79.95,
        "compare_at_price": 161.85,
        "sku": null,
        "available": false,
        "option1": "Pineapple",
        "option2": "Mango",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753585738008,
        "title": "Blackcurrant / Passion Fruit",
        "price": 79.95,
        "compare_at_price": 161.85,
        "sku": null,
        "available": false,
        "option1": "Blackcurrant",
        "option2": "Passion Fruit",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753585770776,
        "title": "Blackcurrant / Pineapple",
        "price": 79.95,
        "compare_at_price": 161.85,
        "sku": null,
        "available": false,
        "option1": "Blackcurrant",
        "option2": "Pineapple",
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753585803544,
        "title": "Blackcurrant / Mango",
        "price": 79.95,
        "compare_at_price": 161.85,
        "sku": null,
        "available": false,
        "option1": "Blackcurrant",
        "option2": "Mango",
        "option3": null,
        "weight_grams": 0
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Hydration_STACK_Bundle_Passionfruit.jpg?v=1773054219",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Hydration_STACK_Bundle_Pineapple.jpg?v=1773054263",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Hydration_STACK_Bundle_Mango.jpg?v=1773054235"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Hydration_STACK_Bundle_Passionfruit.jpg?v=1773054219",
    "min_price": 79.95,
    "max_price": 79.95,
    "subtitle": "Australian Manufactured Pure Hydration Stack with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Bundle & Save",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 10126893154584,
    "title": "Precision Mind Stack",
    "handle": "precision-mind-stack",
    "product_type": "Supplements",
    "vendor": "Premium Supps",
    "tags": [],
    "body_html": "<h2>Three clearly specified products in one bundle</h2><p>The Precision Mind Stack contains Methylene Blue 1% solution, liquid Vitamin D and 250g of micronised creatine monohydrate. Each product should be considered separately and used only according to its own label and warnings.</p><h3>What is included</h3><ul>\n<li>\n<a href=\"/products/methylene-blue-10mg-ml\"><strong>Methylene Blue, 30ml</strong></a> \u2014 a 1% solution labelled at 10mg/ml</li>\n<li>\n<a href=\"/products/vitamin-d\"><strong>Liquid Vitamin D, 30ml</strong></a> \u2014 Vitamin D3 in an MCT oil base, providing 400 IU per drop</li>\n<li>\n<a href=\"/products/creatine-monohydrate\"><strong>Micronised Creatine Monohydrate, 250g</strong></a> \u2014 unflavoured 200-mesh creatine powder</li>\n</ul><h3>Important safety information</h3><p>Methylene Blue is not a standard dietary supplement. Do not use oral Methylene Blue unless advised or prescribed by a healthcare professional. It may interact with medicines that affect serotonin, should not be used during pregnancy, and may cause red blood cell damage in people with G6PD deficiency.</p><p>Read every individual product page and label before purchasing or using this bundle.</p>",
    "clean_description": "Three clearly specified products in one bundle The Precision Mind Stack contains Methylene Blue 1% solution, liquid Vitamin D and 250g of micronised creatine monohydrate. Each product should be considered separately and used only according to its own label and warnings. What is included Methylene Blue, 30ml \u2014 a 1% solution labelled at 10mg/ml Liquid Vitamin D, 30ml \u2014 Vitamin D3 in an MCT oil base, providing 400 IU per drop Micronised Creatine Monohydrate, 250g \u2014 unflavoured 200-mesh creatine powder Important safety information Methylene Blue is not a standard dietary supplement. Do not use oral Methylene Blue unless advised or prescribed by a healthcare professional. It may interact with medicines that affect serotonin, should not be used during pregnancy, and may cause red blood cell damage in people with G6PD deficiency. Read every individual product page and label before purchasing or using this bundle.",
    "options": [
      {
        "name": "Title",
        "position": 1,
        "values": [
          "Default Title"
        ]
      }
    ],
    "variants": [
      {
        "id": 51753578234136,
        "title": "Default Title",
        "price": 51.94,
        "compare_at_price": 129.85,
        "sku": null,
        "available": true,
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "weight_grams": 0
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/PrescisionMind_STACK_Bundle_2nd.jpg?v=1773054164",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/PrescisionMind_STACK_Bundle.jpg?v=1773054164"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/PrescisionMind_STACK_Bundle_2nd.jpg?v=1773054164",
    "min_price": 51.94,
    "max_price": 51.94,
    "subtitle": "Australian Manufactured Pure Precision Mind Stack with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Bundle & Save",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 10126784725272,
    "title": "Performance Stack",
    "handle": "performance-stack",
    "product_type": "Pre-Workout",
    "vendor": "Premium Supps",
    "tags": [
      "Pre-Workout",
      "Preworkout",
      "Stack",
      "Bundle",
      "Creatine"
    ],
    "body_html": "<h2>Warrior King, creatine and Shilajit in one bundle</h2><p>The Performance Stack combines Premium Supps' highest-caffeine pre-workout with 1kg of micronised creatine monohydrate and a 20g jar of Shilajit resin.</p><h3>What is included</h3><ul>\n<li>\n<a href=\"/products/warrior-king-ultra-high-stim-pre-workout\"><strong>Warrior King Ultra High-Stim Pre-Workout</strong></a> \u2014 choose Blackcurrant, Passion Fruit or Lemonade; a full two-scoop serve contains 500mg caffeine</li>\n<li>\n<a href=\"/products/creatine-monohydrate\"><strong>Micronised Creatine Monohydrate, 1kg</strong></a> \u2014 unflavoured 200-mesh creatine powder</li>\n<li>\n<a href=\"/products/shilajit-resin\"><strong>Shilajit Resin, 20g</strong></a> \u2014 approximately 50 serves of sun-dried resin sourced from Gilgit-Baltistan</li>\n</ul><h3>Important use information</h3><p>Warrior King is intended only for experienced stimulant users. A full serve contains 500mg caffeine. Follow every product label, do not combine Warrior King with other caffeine or stimulant products, and seek professional advice before use if you take medication, have a health condition, or are pregnant or breastfeeding.</p>",
    "clean_description": "Warrior King, creatine and Shilajit in one bundle The Performance Stack combines Premium Supps' highest-caffeine pre-workout with 1kg of micronised creatine monohydrate and a 20g jar of Shilajit resin. What is included Warrior King Ultra High-Stim Pre-Workout \u2014 choose Blackcurrant, Passion Fruit or Lemonade; a full two-scoop serve contains 500mg caffeine Micronised Creatine Monohydrate, 1kg \u2014 unflavoured 200-mesh creatine powder Shilajit Resin, 20g \u2014 approximately 50 serves of sun-dried resin sourced from Gilgit-Baltistan Important use information Warrior King is intended only for experienced stimulant users. A full serve contains 500mg caffeine. Follow every product label, do not combine Warrior King with other caffeine or stimulant products, and seek professional advice before use if you take medication, have a health condition, or are pregnant or breastfeeding.",
    "options": [
      {
        "name": "Warrior KING Ultra High-Stim Pre-workout (Flavor)",
        "position": 1,
        "values": [
          "Blackcurrant",
          "Passion Fruit",
          "Lemonade"
        ]
      }
    ],
    "variants": [
      {
        "id": 51753335324952,
        "title": "Blackcurrant",
        "price": 99.95,
        "compare_at_price": 219.85,
        "sku": null,
        "available": true,
        "option1": "Blackcurrant",
        "option2": null,
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753335357720,
        "title": "Passion Fruit",
        "price": 99.95,
        "compare_at_price": 219.85,
        "sku": null,
        "available": true,
        "option1": "Passion Fruit",
        "option2": null,
        "option3": null,
        "weight_grams": 0
      },
      {
        "id": 51753335390488,
        "title": "Lemonade",
        "price": 99.95,
        "compare_at_price": 219.85,
        "sku": null,
        "available": true,
        "option1": "Lemonade",
        "option2": null,
        "option3": null,
        "weight_grams": 0
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Performance_STACK_Bundle_Blackcurrant.jpg?v=1773052882",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Performance_STACK_Bundle_Passionfruit.jpg?v=1773052882",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Performance_STACK_Bundle_Lemonade.jpg?v=1773398790"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Performance_STACK_Bundle_Blackcurrant.jpg?v=1773052882",
    "min_price": 99.95,
    "max_price": 99.95,
    "subtitle": "Australian Manufactured Pure Performance Stack with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Bundle & Save",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 10108949987608,
    "title": "MCT Oil",
    "handle": "mct-oil",
    "product_type": "Supplements",
    "vendor": "Premium Supps",
    "tags": [
      "rivo-included-product"
    ],
    "body_html": "<h2>Coconut-derived C8 and C10 MCT oil</h2><p>Premium Supps MCT Oil is an unflavoured blend of medium-chain triglycerides supplied in a large 1-litre bottle. It is easy to add to coffee, shakes, smoothies and suitable meals.</p><h3>Product details</h3><ul>\n<li>1-litre bottle</li>\n<li>C8 and C10 MCT blend</li>\n<li>Coconut derived</li>\n<li>Unflavoured liquid</li>\n<li>Suitable for regular food and drink use according to the label</li>\n</ul><h3>How to use</h3><p>Add the label-directed amount to your preferred food or drink. If you are new to MCT oil, begin with a smaller amount and increase only as tolerated. Follow the storage directions on the bottle.</p>",
    "clean_description": "Coconut-derived C8 and C10 MCT oil Premium Supps MCT Oil is an unflavoured blend of medium-chain triglycerides supplied in a large 1-litre bottle. It is easy to add to coffee, shakes, smoothies and suitable meals. Product details 1-litre bottle C8 and C10 MCT blend Coconut derived Unflavoured liquid Suitable for regular food and drink use according to the label How to use Add the label-directed amount to your preferred food or drink. If you are new to MCT oil, begin with a smaller amount and increase only as tolerated. Follow the storage directions on the bottle.",
    "options": [
      {
        "name": "Title",
        "position": 1,
        "values": [
          "Default Title"
        ]
      }
    ],
    "variants": [
      {
        "id": 51720047395096,
        "title": "Default Title",
        "price": 41.3,
        "compare_at_price": 59.0,
        "sku": "PSMCTO1",
        "available": true,
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "weight_grams": 0
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/MCT_Oil_1000ML_7bd073f4-7c69-4fa1-a664-25bd454a1c5d.jpg?v=1772102539",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/MCT_Oil_1000ML_2nd.jpg?v=1772102805",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/MCT_Oil_1000ML_2nda.jpg?v=1772102805",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/MCT_Oil_1000ML_3rd.jpg?v=1772102437"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/MCT_Oil_1000ML_7bd073f4-7c69-4fa1-a664-25bd454a1c5d.jpg?v=1772102539",
    "min_price": 41.3,
    "max_price": 41.3,
    "subtitle": "Australian Manufactured Pure MCT Oil with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Australian Made",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 10112791576856,
    "title": "Micronised Creatine Monohydrate Sachets \u2013 30 \u00d7 5g",
    "handle": "creatine-monohydrate-sachet-box",
    "product_type": "Creatine",
    "vendor": "Premium Supps",
    "tags": [
      "rivo-included-product"
    ],
    "body_html": "<h2>Single-serve creatine without a tub or scoop</h2><p>Each box contains 30 individually sealed sachets of unflavoured micronised creatine monohydrate. Every sachet contains 5g, making the format convenient for gym bags, work and travel.</p><h3>Product details</h3><ul>\n<li>30 sachets per box</li>\n<li>5g creatine monohydrate per sachet</li>\n<li>150g total powder</li>\n<li>Unflavoured</li>\n<li>Individually sealed portions</li>\n<li>No measuring scoop required</li>\n</ul><h3>How to use</h3><p>Empty one sachet into water or another suitable drink and mix well, following the directions on the box. Travel and airline rules vary, so check the requirements for your carrier and destination before packing supplements.</p>",
    "clean_description": "Single-serve creatine without a tub or scoop Each box contains 30 individually sealed sachets of unflavoured micronised creatine monohydrate. Every sachet contains 5g, making the format convenient for gym bags, work and travel. Product details 30 sachets per box 5g creatine monohydrate per sachet 150g total powder Unflavoured Individually sealed portions No measuring scoop required How to use Empty one sachet into water or another suitable drink and mix well, following the directions on the box. Travel and airline rules vary, so check the requirements for your carrier and destination before packing supplements.",
    "options": [
      {
        "name": "Title",
        "position": 1,
        "values": [
          "Default Title"
        ]
      }
    ],
    "variants": [
      {
        "id": 51727125643544,
        "title": "Default Title",
        "price": 27.97,
        "compare_at_price": 39.95,
        "sku": "PSCREMS",
        "available": true,
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "weight_grams": 230
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/CreatineMonoShachet_250G_5g.jpg?v=1772103047",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/CreatineMonoShachet_250G_5g_3rd.jpg?v=1772103047",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/CreatineMonoShachet_Box_5g_3rd.jpg?v=1772690337",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/CreatineMonoShachet_250G_5g_6th.jpg?v=1772690337",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/CreatineMonoShachet_Box_5g_4th.jpg?v=1772690337"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/CreatineMonoShachet_250G_5g.jpg?v=1772103047",
    "min_price": 27.97,
    "max_price": 27.97,
    "subtitle": "Australian Manufactured Pure Micronised Creatine Monohydrate Sachets \u2013 30 \u00d7 5g with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Australian Made",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 10057714729240,
    "title": "Warrior KING Ultra High-Stim Pre-workout",
    "handle": "warrior-king-ultra-high-stim-pre-workout",
    "product_type": "Pre-Workout",
    "vendor": "Premium Supps",
    "tags": [
      "Pre-Workout",
      "Preworkout",
      "High-Stim",
      "flavour-product",
      "rivo-included-product"
    ],
    "body_html": "<h2>Ultra high-stimulant pre-workout for experienced users</h2><p>Warrior King is Premium Supps' highest-caffeine pre-workout. A full two-scoop serve contains 500mg caffeine alongside a fully disclosed pump, focus, creatine and electrolyte formula.</p><h3>Stimulant and focus ingredients per full serve</h3><ul>\n<li>Caffeine Anhydrous \u2014 500mg</li>\n<li>Juglans Regia \u2014 500mg</li>\n<li>Synephrine \u2014 30mg</li>\n<li>L-Tyrosine \u2014 3,000mg</li>\n<li>Alpha GPC 50% \u2014 1,200mg</li>\n<li>L-Theanine \u2014 100mg</li>\n</ul><h3>Pump and training ingredients per full serve</h3><ul>\n<li>L-Citrulline \u2014 10,000mg</li>\n<li>Arginine Nitrate \u2014 1,000mg</li>\n<li>Beta Alanine \u2014 4,000mg</li>\n<li>Betaine Anhydrous \u2014 4,000mg</li>\n<li>Creatine Monohydrate \u2014 3,000mg</li>\n</ul><h3>Additional ingredients per full serve</h3><ul>\n<li>L-Carnitine L-Tartrate \u2014 500mg</li>\n<li>Acetyl-L-Carnitine \u2014 500mg</li>\n<li>Taurine \u2014 2,000mg</li>\n<li>Ornithine \u2014 2,000mg</li>\n<li>HMB \u2014 1,500mg</li>\n<li>Malic Acid \u2014 900mg</li>\n<li>Sodium Citrate \u2014 500mg</li>\n<li>Potassium Citrate \u2014 500mg</li>\n<li>Magnesium Citrate \u2014 200mg</li>\n<li>Vitamin B1 \u2014 25mg</li>\n<li>Vitamin B3 \u2014 25mg</li>\n<li>Vitamin B5 \u2014 25mg</li>\n<li>Vitamin B6 \u2014 25mg</li>\n<li>Vitamin B12 as methylcobalamin \u2014 1,000mcg</li>\n</ul><h3>Flavours</h3><p>Choose Passion Fruit, Blackcurrant or Lemonade, subject to availability.</p><h3>Important use information</h3><p>A full serve contains 500mg caffeine and is intended only for experienced stimulant users. Follow the label, assess tolerance and do not exceed the stated serve. Do not combine with other caffeine or stimulant products. Not suitable for children, people who are pregnant or breastfeeding, or anyone sensitive to caffeine. Seek professional advice before use if you take medication or have a health condition.</p>",
    "clean_description": "Ultra high-stimulant pre-workout for experienced users Warrior King is Premium Supps' highest-caffeine pre-workout. A full two-scoop serve contains 500mg caffeine alongside a fully disclosed pump, focus, creatine and electrolyte formula. Stimulant and focus ingredients per full serve Caffeine Anhydrous \u2014 500mg Juglans Regia \u2014 500mg Synephrine \u2014 30mg L-Tyrosine \u2014 3,000mg Alpha GPC 50% \u2014 1,200mg L-Theanine \u2014 100mg Pump and training ingredients per full serve L-Citrulline \u2014 10,000mg Arginine Nitrate \u2014 1,000mg Beta Alanine \u2014 4,000mg Betaine Anhydrous \u2014 4,000mg Creatine Monohydrate \u2014 3,000mg Additional ingredients per full serve L-Carnitine L-Tartrate \u2014 500mg Acetyl-L-Carnitine \u2014 500mg Taurine \u2014 2,000mg Ornithine \u2014 2,000mg HMB \u2014 1,500mg Malic Acid \u2014 900mg Sodium Citrate \u2014 500mg Potassium Citrate \u2014 500mg Magnesium Citrate \u2014 200mg Vitamin B1 \u2014 25mg Vitamin B3 \u2014 25mg Vitamin B5 \u2014 25mg Vitamin B6 \u2014 25mg Vitamin B12 as methylcobalamin \u2014 1,000mcg Flavours Choose Passion Fruit, Blackcurrant or Lemonade, subject to availability. Important use information A full serve contains 500mg caffeine and is intended only for experienced stimulant users. Follow the label, assess tolerance and do not exceed the stated serve. Do not combine with other caffeine or stimulant products. Not suitable for children, people who are pregnant or breastfeeding, or anyone sensitive to caffeine. Seek professional advice before use if you take medication or have a health condition.",
    "options": [
      {
        "name": "Flavor",
        "position": 1,
        "values": [
          "Passion Fruit",
          "Blackcurrant",
          "Lemonade"
        ]
      }
    ],
    "variants": [
      {
        "id": 51613229777176,
        "title": "Passion Fruit",
        "price": 55.97,
        "compare_at_price": 79.95,
        "sku": null,
        "available": true,
        "option1": "Passion Fruit",
        "option2": null,
        "option3": null,
        "weight_grams": 985
      },
      {
        "id": 51613229744408,
        "title": "Blackcurrant",
        "price": 55.97,
        "compare_at_price": 79.95,
        "sku": null,
        "available": true,
        "option1": "Blackcurrant",
        "option2": null,
        "option3": null,
        "weight_grams": 985
      },
      {
        "id": 51613229809944,
        "title": "Lemonade",
        "price": 55.97,
        "compare_at_price": 79.95,
        "sku": null,
        "available": true,
        "option1": "Lemonade",
        "option2": null,
        "option3": null,
        "weight_grams": 985
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/0036c2ce-1379-4f8d-a8e1-af415371a33a_8068597f-2063-4ee6-9357-8dd3ec634431.png?v=1779077285",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/8c34009d-a932-4453-8416-8a12a7bea23a.png?v=1779078112",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/31f4c547-3569-4245-b88a-eabe1e727f53_2.png?v=1779077175",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/WarriorKing_Generc_50S_1st.jpg?v=1769752547",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/WarriorKing_Generc_50S_2nd.jpg?v=1769752547",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/6b247116-3c22-4edd-a53e-5a83d53b39a8_37cddf88-abb8-405b-b149-b4bc4962a144.png?v=1779077236"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/0036c2ce-1379-4f8d-a8e1-af415371a33a_8068597f-2063-4ee6-9357-8dd3ec634431.png?v=1779077285",
    "min_price": 55.97,
    "max_price": 55.97,
    "subtitle": "Australian Manufactured Pure Warrior KING Ultra High-Stim Pre-workout with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Australian Made",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 10044733358360,
    "title": "Vitamin D",
    "handle": "vitamin-d",
    "product_type": "Supplements",
    "vendor": "Premium Supps",
    "tags": [
      "rivo-included-product"
    ],
    "body_html": "<h2>Liquid Vitamin D3 in an MCT oil base</h2><p>Premium Supps Vitamin D provides Vitamin D3 in a simple liquid format. Each drop supplies 400 IU, allowing the labelled daily amount to be measured without tablets or capsules.</p><h3>Product details</h3><ul>\n<li>30ml bottle</li>\n<li>400 IU Vitamin D3 per drop</li>\n<li>MCT oil carrier</li>\n<li>Approximately 1,320 drops per bottle</li>\n<li>No tablet or capsule required</li>\n</ul><h3>How to use</h3><p>The current label directs two drops daily with food, providing 800 IU. Do not exceed the label directions. Consider Vitamin D obtained from other supplements and seek professional advice if you have a health condition, take medication, are pregnant or breastfeeding, or have been advised to monitor your Vitamin D level.</p>",
    "clean_description": "Liquid Vitamin D3 in an MCT oil base Premium Supps Vitamin D provides Vitamin D3 in a simple liquid format. Each drop supplies 400 IU, allowing the labelled daily amount to be measured without tablets or capsules. Product details 30ml bottle 400 IU Vitamin D3 per drop MCT oil carrier Approximately 1,320 drops per bottle No tablet or capsule required How to use The current label directs two drops daily with food, providing 800 IU. Do not exceed the label directions. Consider Vitamin D obtained from other supplements and seek professional advice if you have a health condition, take medication, are pregnant or breastfeeding, or have been advised to monitor your Vitamin D level.",
    "options": [
      {
        "name": "Title",
        "position": 1,
        "values": [
          "Default Title"
        ]
      }
    ],
    "variants": [
      {
        "id": 51584888537368,
        "title": "Default Title",
        "price": 31.47,
        "compare_at_price": 44.95,
        "sku": null,
        "available": true,
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "weight_grams": 0
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Vitamin-D_30ml.png?v=1779707348",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Vitamin-D_30ML_3rd.jpg?v=1772688197",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Vitamin-D_30ML_4th.jpg?v=1772688197"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Vitamin-D_30ml.png?v=1779707348",
    "min_price": 31.47,
    "max_price": 31.47,
    "subtitle": "Australian Manufactured Pure Vitamin D with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Australian Made",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 10044731719960,
    "title": "Electrolytes",
    "handle": "electrolytes",
    "product_type": "Supplements",
    "vendor": "Premium Supps",
    "tags": [
      "flavour-product",
      "rivo-included-product"
    ],
    "body_html": "<h2>Electrolyte and amino acid drink powder</h2><p>Premium Supps Electrolytes combines sodium, potassium and magnesium citrates with taurine and other amino acids in a 30-serve flavoured powder for training, hot conditions and active days.</p><h3>Formula per 10.5g serve</h3><ul>\n<li>Taurine \u2014 2,000mg</li>\n<li>L-Citrulline \u2014 1,000mg</li>\n<li>Arginine Nitrate \u2014 1,000mg</li>\n<li>Agmatine Sulfate \u2014 1,000mg</li>\n<li>L-Tyrosine \u2014 1,000mg</li>\n<li>Acetyl-L-Carnitine \u2014 500mg</li>\n<li>Magnesium Citrate \u2014 300mg</li>\n<li>Potassium Citrate \u2014 300mg</li>\n<li>Sodium Citrate \u2014 300mg</li>\n<li>L-Ornithine \u2014 300mg</li>\n<li>Pink Himalayan Salt \u2014 50mg</li>\n</ul><p>The nutrition panel lists 100mg sodium per serve.</p><h3>Product details</h3><ul>\n<li>315g tub</li>\n<li>30 serves</li>\n<li>Available in Pineapple, Lychee and Blackcurrant</li>\n</ul><h3>How to use</h3><p>Mix one label-directed serve with 500\u20131,000ml of water. Fluid and electrolyte needs vary with climate, sweat rate, exercise intensity and individual circumstances.</p>",
    "clean_description": "Electrolyte and amino acid drink powder Premium Supps Electrolytes combines sodium, potassium and magnesium citrates with taurine and other amino acids in a 30-serve flavoured powder for training, hot conditions and active days. Formula per 10.5g serve Taurine \u2014 2,000mg L-Citrulline \u2014 1,000mg Arginine Nitrate \u2014 1,000mg Agmatine Sulfate \u2014 1,000mg L-Tyrosine \u2014 1,000mg Acetyl-L-Carnitine \u2014 500mg Magnesium Citrate \u2014 300mg Potassium Citrate \u2014 300mg Sodium Citrate \u2014 300mg L-Ornithine \u2014 300mg Pink Himalayan Salt \u2014 50mg The nutrition panel lists 100mg sodium per serve. Product details 315g tub 30 serves Available in Pineapple, Lychee and Blackcurrant How to use Mix one label-directed serve with 500\u20131,000ml of water. Fluid and electrolyte needs vary with climate, sweat rate, exercise intensity and individual circumstances.",
    "options": [
      {
        "name": "Flavor",
        "position": 1,
        "values": [
          "Pineapple",
          "Lychee",
          "Blackcurrant"
        ]
      }
    ],
    "variants": [
      {
        "id": 51593528770840,
        "title": "Pineapple",
        "price": 38.47,
        "compare_at_price": 54.95,
        "sku": null,
        "available": true,
        "option1": "Pineapple",
        "option2": null,
        "option3": null,
        "weight_grams": 365
      },
      {
        "id": 51593528738072,
        "title": "Lychee",
        "price": 38.47,
        "compare_at_price": 54.95,
        "sku": null,
        "available": true,
        "option1": "Lychee",
        "option2": null,
        "option3": null,
        "weight_grams": 365
      },
      {
        "id": 51593528803608,
        "title": "Blackcurrant",
        "price": 38.47,
        "compare_at_price": 54.95,
        "sku": null,
        "available": true,
        "option1": "Blackcurrant",
        "option2": null,
        "option3": null,
        "weight_grams": 365
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Electrolytes_Pineapple_990g1.png?v=1779707561",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/688d4394-7e1d-4569-af66-b4c664c417da.png?v=1779097833",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Warrior_Generc_50S_5th.jpg?v=1769240253",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Warrior_Generc_50S_4th.jpg?v=1769240253",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Warrior_Generc_50S_6th.jpg?v=1769240253",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Electrolytes_Lychee_990g.png?v=1779707650",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Electrolytes_Blackcurrant_990g.png?v=1779707714"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Electrolytes_Pineapple_990g1.png?v=1779707561",
    "min_price": 38.47,
    "max_price": 38.47,
    "subtitle": "Australian Manufactured Pure Electrolytes with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Australian Made",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 8589777109272,
    "title": "Acetyl-L-Carnitine HCL",
    "handle": "alcar-hcl-acetyl-l-carnitine-hcl",
    "product_type": "Amino Acid Supplement",
    "vendor": "Premium Supps",
    "tags": [
      "ALCAR",
      "ALCAR HCl",
      "Amino Acids",
      "Antioxidants",
      "Brain Health",
      "Capsules",
      "Energy",
      "Energy Supplements",
      "Form_Capsule",
      "Form_Powder",
      "Muscle Building",
      "Powder",
      "Preworkout",
      "Senior Health",
      "Sports Nutrition",
      "Up to 35% Off"
    ],
    "body_html": "<h2>Pure Acetyl L-Carnitine HCL powder</h2><p>Premium Supps Acetyl L-Carnitine HCL (ALCAR) is an unflavoured, single-ingredient powder for customers who prefer to measure and combine their own supplements.</p><h3>Product details</h3><ul>\n<li>Available in 250g, 500g and 1kg sizes</li>\n<li>Acetyl L-Carnitine HCL powder</li>\n<li>Unflavoured</li>\n<li>No proprietary blend</li>\n<li>Published ingredient testing available on our <a href=\"/pages/laboratory-tests\">Laboratory Tests page</a>\n</li>\n</ul><h3>How to use</h3><p>Follow the directions on the product label. Consult a healthcare professional before use if you take medication, have a health condition, or are pregnant or breastfeeding.</p>",
    "clean_description": "Pure Acetyl L-Carnitine HCL powder Premium Supps Acetyl L-Carnitine HCL (ALCAR) is an unflavoured, single-ingredient powder for customers who prefer to measure and combine their own supplements. Product details Available in 250g, 500g and 1kg sizes Acetyl L-Carnitine HCL powder Unflavoured No proprietary blend Published ingredient testing available on our Laboratory Tests page How to use Follow the directions on the product label. Consult a healthcare professional before use if you take medication, have a health condition, or are pregnant or breastfeeding.",
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "1 Kilogram",
          "500 Grams",
          "250 Grams"
        ]
      }
    ],
    "variants": [
      {
        "id": 46541635191064,
        "title": "1 Kilogram",
        "price": 62.96,
        "compare_at_price": 89.95,
        "sku": "PSALCAR1KG",
        "available": true,
        "option1": "1 Kilogram",
        "option2": null,
        "option3": null,
        "weight_grams": 1015
      },
      {
        "id": 46541635158296,
        "title": "500 Grams",
        "price": 32.86,
        "compare_at_price": 46.95,
        "sku": "PSALCAR500",
        "available": true,
        "option1": "500 Grams",
        "option2": null,
        "option3": null,
        "weight_grams": 525
      },
      {
        "id": 47365448761624,
        "title": "250 Grams",
        "price": 23.06,
        "compare_at_price": 32.95,
        "sku": "PSALCAR250",
        "available": true,
        "option1": "250 Grams",
        "option2": null,
        "option3": null,
        "weight_grams": 270
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Acetyl_1KG_1000S.jpg?v=1766487562",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Acetyl_1KG_1000S_3rd.jpg?v=1766487562",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Acetyl_Lcarnitine_Testimonial.jpg?v=1766487562",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Acetyl_1KG_1000S_5th.jpg?v=1766487528",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Acetyl_1KG_1000S_6th.jpg?v=1766487528",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Acetyl_L-Carnitine_Flavours_Stacked.jpg?v=1766487562",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Acetyl_500G_500S.jpg?v=1766487562",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Acetyl_500G_500S_3rd.jpg?v=1766487562",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Acetyl_Lcarnitine_Testimonial_1.jpg?v=1766487562",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Acetyl_500G_500S_5th.jpg?v=1766487562",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Acetyl_500G_500S_6th.jpg?v=1766487562",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Acetyl_250G_250S.jpg?v=1759919781",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Acetyl_250G_250S_3rd.jpg?v=1761022532",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Acetyl_Lcarnitine_Testimonial_2.jpg?v=1766487528",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Acetyl_250G_250S_5th.jpg?v=1766487562",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Acetyl_250G_250S_6th.jpg?v=1766487562"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Acetyl_1KG_1000S.jpg?v=1766487562",
    "min_price": 23.06,
    "max_price": 62.96,
    "subtitle": "Australian Manufactured Pure Acetyl-L-Carnitine HCL with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Australian Made",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 9826843984152,
    "title": "Creatine Gummies \u2013 Batch CG1 Clearance",
    "handle": "creatine-gummies",
    "product_type": "Supplements",
    "vendor": "Premium Supps",
    "tags": [
      "rivo-included-product"
    ],
    "body_html": "<h2>First-batch clearance: read the independent results</h2><p>This clearance listing applies to Premium Supps Creatine Gummies Batch CG1. The manufacturer did not follow the intended formula and flavour instructions. Independent testing confirmed that the gummies contain creatine, but below the intended 2.5g amount per gummy.</p><h3>Creatine found per gummy</h3><ul>\n<li>Peach: 1.26g</li>\n<li>Watermelon: 1.35g</li>\n<li>Pineapple: 1.41g</li>\n<li>Grape: 1.45g</li>\n</ul><p>The price has been reduced to reflect these verified results. Current flavour availability and pricing are shown in the selector above.</p><h3>Important purchase information</h3><ul>\n<li>Clearance stock from Batch CG1</li>\n<li>Do not treat one gummy as a 2.5g creatine serve</li>\n<li>Flavour and texture may vary by flavour</li>\n<li>Clearance terms apply while stock lasts</li>\n</ul><p>Follow the product label and account for the tested creatine amount of the selected flavour.</p>",
    "clean_description": "First-batch clearance: read the independent results This clearance listing applies to Premium Supps Creatine Gummies Batch CG1. The manufacturer did not follow the intended formula and flavour instructions. Independent testing confirmed that the gummies contain creatine, but below the intended 2.5g amount per gummy. Creatine found per gummy Peach: 1.26g Watermelon: 1.35g Pineapple: 1.41g Grape: 1.45g The price has been reduced to reflect these verified results. Current flavour availability and pricing are shown in the selector above. Important purchase information Clearance stock from Batch CG1 Do not treat one gummy as a 2.5g creatine serve Flavour and texture may vary by flavour Clearance terms apply while stock lasts Follow the product label and account for the tested creatine amount of the selected flavour.",
    "options": [
      {
        "name": "Flavor",
        "position": 1,
        "values": [
          "Peach",
          "Watermelon",
          "Pineapple",
          "Grape"
        ]
      }
    ],
    "variants": [
      {
        "id": 50499482157336,
        "title": "Peach",
        "price": 10.0,
        "compare_at_price": 39.95,
        "sku": "PSCREGP",
        "available": false,
        "option1": "Peach",
        "option2": null,
        "option3": null,
        "weight_grams": 450
      },
      {
        "id": 50499482190104,
        "title": "Watermelon",
        "price": 19.95,
        "compare_at_price": 39.95,
        "sku": "PSCREGW",
        "available": false,
        "option1": "Watermelon",
        "option2": null,
        "option3": null,
        "weight_grams": 450
      },
      {
        "id": 50499482222872,
        "title": "Pineapple",
        "price": 19.95,
        "compare_at_price": 39.95,
        "sku": "PSCREGPI",
        "available": false,
        "option1": "Pineapple",
        "option2": null,
        "option3": null,
        "weight_grams": 450
      },
      {
        "id": 50499482255640,
        "title": "Grape",
        "price": 19.95,
        "compare_at_price": 39.95,
        "sku": "PSCREGG",
        "available": true,
        "option1": "Grape",
        "option2": null,
        "option3": null,
        "weight_grams": 450
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/IMG-20250724-WA0021.jpg?v=1759302653",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/IMG-20250724-WA0022.jpg?v=1759302653",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/IMG-20250724-WA0023.jpg?v=1759302653",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/IMG-20250724-WA0024.jpg?v=1759302653"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/IMG-20250724-WA0021.jpg?v=1759302653",
    "min_price": 10.0,
    "max_price": 19.95,
    "subtitle": "Australian Manufactured Pure Creatine Gummies \u2013 Batch CG1 Clearance with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Australian Made",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 9692183298328,
    "title": "Shilajit",
    "handle": "shilajit-resin",
    "product_type": "Supplements",
    "vendor": "Premium Supps",
    "tags": [
      "50 Serves",
      "rivo-included-product",
      "Up to 35% Off"
    ],
    "body_html": "<h2>Sun-dried Shilajit resin from Gilgit-Baltistan</h2><p>Premium Supps Shilajit is supplied as a concentrated resin sourced from the mountains of Gilgit-Baltistan. It contains no added flavouring or fillers.</p><h3>Product details</h3><ul>\n<li>20g jar</li>\n<li>Approximately 50 serves</li>\n<li>Approximately 400mg per serve</li>\n<li>Sun-dried resin</li>\n<li>Contains naturally occurring fulvic, humic and trace mineral compounds</li>\n<li>No added fillers or flavourings</li>\n</ul><p>Natural resin can vary slightly in colour, texture and consistency.</p><h3>How to use</h3><p>Follow the directions on the jar. The current label recommends mixing the measured serve into warm water, tea or a shake. New users should begin with the smallest label-directed amount to assess tolerance.</p><p>Consult a healthcare professional before use if you take medication, have a health condition, or are pregnant or breastfeeding.</p>",
    "clean_description": "Sun-dried Shilajit resin from Gilgit-Baltistan Premium Supps Shilajit is supplied as a concentrated resin sourced from the mountains of Gilgit-Baltistan. It contains no added flavouring or fillers. Product details 20g jar Approximately 50 serves Approximately 400mg per serve Sun-dried resin Contains naturally occurring fulvic, humic and trace mineral compounds No added fillers or flavourings Natural resin can vary slightly in colour, texture and consistency. How to use Follow the directions on the jar. The current label recommends mixing the measured serve into warm water, tea or a shake. New users should begin with the smallest label-directed amount to assess tolerance. Consult a healthcare professional before use if you take medication, have a health condition, or are pregnant or breastfeeding.",
    "options": [
      {
        "name": "Title",
        "position": 1,
        "values": [
          "Default Title"
        ]
      }
    ],
    "variants": [
      {
        "id": 49903794880792,
        "title": "Default Title",
        "price": 62.97,
        "compare_at_price": 89.95,
        "sku": "PSSHILAJIT",
        "available": true,
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "weight_grams": 100
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Shilajit_20g.png?v=1779708088",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ChatGPT_Image_May_18_2026_01_55_07_PM_3.png?v=1779078349",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ChatGPT_Image_May_18_2026_01_55_07_PM_2.png?v=1779078359",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ChatGPT_Image_May_18_2026_01_55_07_PM_1.png?v=1779078350",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Shilajit_50S_6th.jpg?v=1768900779",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Shilajit_50S_5th.jpg?v=1768900779",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/WhatsApp_Image_2025-08-29_at_16.56.59_e156d001.jpg?v=1768900753",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/WhatsApp_Image_2025-08-29_at_16.56.59_83bf0c88.jpg?v=1768900753",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/IMG-20250307-WA0044.jpg?v=1768900753",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/WhatsApp_Image_2025-08-29_at_16.56.59_b5db6ed6.jpg?v=1768900753"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Shilajit_20g.png?v=1779708088",
    "min_price": 62.97,
    "max_price": 62.97,
    "subtitle": "100% Pure Himalayan Gold Grade Shilajit with >85% Fulvic Acid",
    "features": [
      "Energy & Vitality",
      "84+ Trace Minerals",
      "Testosterone & Immunity Support"
    ],
    "badge": "Pure Himalayan",
    "rating": 5.0,
    "reviews_count": 87
  },
  {
    "id": 9785901089048,
    "title": "Protein Water 990g",
    "handle": "protein-water",
    "product_type": "Supplements",
    "vendor": "Premium Supps",
    "tags": [
      "flavour-product",
      "rivo-included-product",
      "Up to 35% Off"
    ],
    "body_html": "<h2>Fruit-flavoured protein drink powder</h2><p>Premium Supps Protein Water is a light alternative to a traditional milky protein shake. Each serve provides 27g of protein from hydrolysed beef collagen and mixes with cold water into a fruit-flavoured drink.</p><h3>Product details</h3><ul>\n<li>990g tub</li>\n<li>30 serves</li>\n<li>27g protein per serve</li>\n<li>Protein source: hydrolysed beef collagen</li>\n<li>Available in Passion Fruit, Pineapple and Mango</li>\n</ul><h3>Ingredients</h3><p>Hydrolysed beef collagen, flavouring, citric acid, malic acid, silicon dioxide, sucralose, acesulfame potassium, thaumatin and colouring. Check the product label for the complete current ingredient and nutrition information.</p><h3>How to use</h3><p>Mix one label-directed serve with 300\u2013400ml of cold water and shake well. Suitable after training or whenever a convenient protein drink fits your daily intake.</p><p>Also available in the <a href=\"/products/essentials-stack\">Essentials Stack</a> and <a href=\"/products/hydration-stack\">Hydration Stack</a>.</p>",
    "clean_description": "Fruit-flavoured protein drink powder Premium Supps Protein Water is a light alternative to a traditional milky protein shake. Each serve provides 27g of protein from hydrolysed beef collagen and mixes with cold water into a fruit-flavoured drink. Product details 990g tub 30 serves 27g protein per serve Protein source: hydrolysed beef collagen Available in Passion Fruit, Pineapple and Mango Ingredients Hydrolysed beef collagen, flavouring, citric acid, malic acid, silicon dioxide, sucralose, acesulfame potassium, thaumatin and colouring. Check the product label for the complete current ingredient and nutrition information. How to use Mix one label-directed serve with 300\u2013400ml of cold water and shake well. Suitable after training or whenever a convenient protein drink fits your daily intake. Also available in the Essentials Stack and Hydration Stack .",
    "options": [
      {
        "name": "Flavour",
        "position": 1,
        "values": [
          "Passion Fruit",
          "Pineapple",
          "Mango"
        ]
      }
    ],
    "variants": [
      {
        "id": 50378754687256,
        "title": "Passion Fruit",
        "price": 48.97,
        "compare_at_price": 69.95,
        "sku": "PSPWPA",
        "available": false,
        "option1": "Passion Fruit",
        "option2": null,
        "option3": null,
        "weight_grams": 1030
      },
      {
        "id": 50378754720024,
        "title": "Pineapple",
        "price": 48.97,
        "compare_at_price": 69.95,
        "sku": "PSPWPI",
        "available": false,
        "option1": "Pineapple",
        "option2": null,
        "option3": null,
        "weight_grams": 1030
      },
      {
        "id": 50378754752792,
        "title": "Mango",
        "price": 48.97,
        "compare_at_price": 69.95,
        "sku": "PSPWPM",
        "available": false,
        "option1": "Mango",
        "option2": null,
        "option3": null,
        "weight_grams": 1030
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ProteinWater_Passionfruit_990g.png?v=1779707943",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/a7390683-4faa-4bab-9b17-5a43a94b97a0.png?v=1779055003",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/375484a2-172f-4e11-ab07-75ef94c4bca0.png?v=1779055003",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Protein_Mango_6th.jpg?v=1766483858",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/fd729a0f-8af4-4bcf-a32f-39c69f651768_d64f5f58-a31d-4520-8bc9-0dd20b2ba2f7.png?v=1779054872",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ProteinWater_Mango_990g.png?v=1779707943",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/image_5_4565602e-fb0b-4d18-9547-d8bc0cb5d8c7.png?v=1779054886"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/ProteinWater_Passionfruit_990g.png?v=1779707943",
    "min_price": 48.97,
    "max_price": 48.97,
    "subtitle": "Ultra-Refreshing Hydrolysed Whey Collagen Isolate Drink",
    "features": [
      "Zero Sugar / Zero Fat",
      "Light & Thirst-Quenching",
      "Rapid Absorption"
    ],
    "badge": "Trending",
    "rating": 4.8,
    "reviews_count": 53
  },
  {
    "id": 9574049710360,
    "title": "Methylene Blue 30ml 10mg/ml (1% solution)",
    "handle": "methylene-blue-10mg-ml",
    "product_type": "Supplements",
    "vendor": "Premium Supps",
    "tags": [
      "rivo-included-product"
    ],
    "body_html": "<h2>Methylene Blue 1% solution</h2><p>Premium Supps Methylene Blue is supplied in a 30ml vial at a labelled concentration of 10mg/ml. The formula contains Methylene Blue, 0.9% benzyl alcohol and sterilised water.</p><h3>Product specifications</h3><ul>\n<li>30ml vial</li>\n<li>1% solution</li>\n<li>10mg/ml labelled concentration</li>\n<li>0.9% benzyl alcohol</li>\n<li>Clearly stated formulation and concentration</li>\n</ul><p>Available laboratory documentation can be viewed on our <a href=\"/pages/laboratory-tests\">Laboratory Tests page</a>.</p><h3>Important safety information</h3><p>Methylene Blue is not a standard dietary supplement. Do not use oral Methylene Blue unless advised or prescribed by a healthcare professional. It may interact with medicines that affect serotonin, should not be used during pregnancy, and may cause red blood cell damage in people with G6PD deficiency.</p><p>This page does not provide directions for oral, injectable or therapeutic use. Seek qualified medical advice before considering this product.</p>",
    "clean_description": "Methylene Blue 1% solution Premium Supps Methylene Blue is supplied in a 30ml vial at a labelled concentration of 10mg/ml. The formula contains Methylene Blue, 0.9% benzyl alcohol and sterilised water. Product specifications 30ml vial 1% solution 10mg/ml labelled concentration 0.9% benzyl alcohol Clearly stated formulation and concentration Available laboratory documentation can be viewed on our Laboratory Tests page . Important safety information Methylene Blue is not a standard dietary supplement. Do not use oral Methylene Blue unless advised or prescribed by a healthcare professional. It may interact with medicines that affect serotonin, should not be used during pregnancy, and may cause red blood cell damage in people with G6PD deficiency. This page does not provide directions for oral, injectable or therapeutic use. Seek qualified medical advice before considering this product.",
    "options": [
      {
        "name": "Title",
        "position": 1,
        "values": [
          "Default Title"
        ]
      }
    ],
    "variants": [
      {
        "id": 49400193745176,
        "title": "Default Title",
        "price": 41.97,
        "compare_at_price": 59.95,
        "sku": "PSMBLUE",
        "available": true,
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "weight_grams": 90
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/MethyleneBlue_30ml.png?v=1779708218",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/MethyleneBlue_30ml_2nd.png?v=1780561306",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/MethyleneBlue_30ml_3rd.png?v=1780561306",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/MethyleneBlue_30ml_4th.png?v=1780561306",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/methylene-blue-30ml-10mgml-428204.jpg?v=1776766421"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/MethyleneBlue_30ml.png?v=1779708218",
    "min_price": 41.97,
    "max_price": 41.97,
    "subtitle": "Australian Manufactured Pure Methylene Blue 30ml 10mg/ml (1% solution) with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Australian Made",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 9423231648024,
    "title": "Taurine",
    "handle": "taurine",
    "product_type": "Supplements",
    "vendor": "Premium Supps",
    "tags": [
      "rivo-included-product",
      "Up to 35% Off"
    ],
    "body_html": "<h2>Pure taurine powder</h2><p>Premium Supps Taurine is an unflavoured, single-ingredient powder for customers who prefer to build or adjust their own supplement routine.</p><h3>Product details</h3><ul>\n<li>Available in 250g, 500g and 1kg sizes</li>\n<li>Single-ingredient taurine powder</li>\n<li>Unflavoured</li>\n<li>No proprietary blend</li>\n<li>Published ingredient testing on the <a href=\"/pages/laboratory-tests\">Laboratory Tests page</a>\n</li>\n</ul><h3>Storage note</h3><p>Taurine powder can clump when exposed to moisture. Clumping does not necessarily mean the powder is unsuitable, but it may need to be broken up before measuring. Keep the container tightly sealed in a cool, dry place away from direct sunlight.</p><h3>How to use</h3><p>Follow the serving and preparation directions on the product label. Consult a healthcare professional before use if you take medication, have a health condition, or are pregnant or breastfeeding.</p>",
    "clean_description": "Pure taurine powder Premium Supps Taurine is an unflavoured, single-ingredient powder for customers who prefer to build or adjust their own supplement routine. Product details Available in 250g, 500g and 1kg sizes Single-ingredient taurine powder Unflavoured No proprietary blend Published ingredient testing on the Laboratory Tests page Storage note Taurine powder can clump when exposed to moisture. Clumping does not necessarily mean the powder is unsuitable, but it may need to be broken up before measuring. Keep the container tightly sealed in a cool, dry place away from direct sunlight. How to use Follow the serving and preparation directions on the product label. Consult a healthcare professional before use if you take medication, have a health condition, or are pregnant or breastfeeding.",
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "1000g",
          "500g",
          "250g"
        ]
      }
    ],
    "variants": [
      {
        "id": 48938320298264,
        "title": "1000g",
        "price": 34.97,
        "compare_at_price": 49.95,
        "sku": "PSTAUR1000",
        "available": true,
        "option1": "1000g",
        "option2": null,
        "option3": null,
        "weight_grams": 1050
      },
      {
        "id": 48938320265496,
        "title": "500g",
        "price": 20.97,
        "compare_at_price": 29.95,
        "sku": "PSTAUR500",
        "available": false,
        "option1": "500g",
        "option2": null,
        "option3": null,
        "weight_grams": 520
      },
      {
        "id": 48938320232728,
        "title": "250g",
        "price": 13.97,
        "compare_at_price": 19.95,
        "sku": "PSTAUR250",
        "available": false,
        "option1": "250g",
        "option2": null,
        "option3": null,
        "weight_grams": 270
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Taurine_1KG_400S.jpg?v=1766484381",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Taurine_1KG_400S_3rd.jpg?v=1766484381",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Taurine_Testimonial_1KG.jpg?v=1766484381",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Taurine_1KG_400S_6th.jpg?v=1766484381",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Taurine_1KG_400S_5th.jpg?v=1766484381",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Taurine_500G_200S.jpg?v=1766484381",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Taurine_500G_200S_3rd.jpg?v=1766484381",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Taurine_Testimonial.jpg?v=1766484381",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Taurine_500G_200S_ebb0fab7-757e-40c4-b8c7-5570925245e3.jpg?v=1766484381",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Taurine_500G_200S_6th.jpg?v=1766484381",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Taurine_250G_100S.jpg?v=1758995717",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Taurine_250G_100S_3rd.jpg?v=1760981804",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Taurine_Testimonial_250.jpg?v=1766484381",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Taurine_250G_100S_5th.jpg?v=1766484381",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Taurine_250G_100S_6th.jpg?v=1766484381"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Taurine_1KG_400S.jpg?v=1766484381",
    "min_price": 13.97,
    "max_price": 34.97,
    "subtitle": "Australian Manufactured Pure Taurine with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Australian Made",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 9409786741016,
    "title": "Creatine HCL 150g",
    "handle": "creatine-hcl-150g",
    "product_type": "Supplements",
    "vendor": "Premium Supps",
    "tags": [
      "rivo-included-product",
      "Up to 35% Off"
    ],
    "body_html": "<h2>Single-ingredient Creatine HCL powder</h2><p>Premium Supps Creatine HCL is an unflavoured creatine hydrochloride powder supplied in a compact 150g pack. It is intended for customers who prefer Creatine HCL rather than creatine monohydrate.</p><h3>Product details</h3><ul>\n<li>150g net weight</li>\n<li>Creatine hydrochloride</li>\n<li>Unflavoured powder</li>\n<li>No proprietary blend</li>\n<li>Easy to combine with water or another suitable drink</li>\n</ul><h3>How to use</h3><p>Follow the serving and preparation directions on the product label. Consult a healthcare professional before use if you take medication, have a health condition, or are pregnant or breastfeeding.</p>",
    "clean_description": "Single-ingredient Creatine HCL powder Premium Supps Creatine HCL is an unflavoured creatine hydrochloride powder supplied in a compact 150g pack. It is intended for customers who prefer Creatine HCL rather than creatine monohydrate. Product details 150g net weight Creatine hydrochloride Unflavoured powder No proprietary blend Easy to combine with water or another suitable drink How to use Follow the serving and preparation directions on the product label. Consult a healthcare professional before use if you take medication, have a health condition, or are pregnant or breastfeeding.",
    "options": [
      {
        "name": "size",
        "position": 1,
        "values": [
          "150g"
        ]
      }
    ],
    "variants": [
      {
        "id": 50807425990936,
        "title": "150g",
        "price": 34.97,
        "compare_at_price": 49.95,
        "sku": "CREHCL150",
        "available": true,
        "option1": "150g",
        "option2": null,
        "option3": null,
        "weight_grams": 175
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/CreatineHCL_150G_100S.jpg?v=1758996199",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/CreatineHCL_150G_100S_3rd.jpg?v=1761284737",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/CreatineHCL_Testimonial.jpg?v=1762193669",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/CreatineHCL_150G_100S_5th_6efcae11-0f8f-4618-a915-bcded3bd6549.jpg?v=1766484515",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/CreatineHCL_150G_100S_5th.jpg?v=1766484515"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/CreatineHCL_150G_100S.jpg?v=1758996199",
    "min_price": 34.97,
    "max_price": 34.97,
    "subtitle": "Ultra-Concentrated Micro-Dosing Without Bloating or Water Retention",
    "features": [
      "No Loading Phase Required",
      "Superior Solubility",
      "Gentle on Stomach"
    ],
    "badge": "Pure HCL",
    "rating": 4.8,
    "reviews_count": 38
  },
  {
    "id": 8853091123480,
    "title": "Night Warrior Caffeine-Free Pre-Workout",
    "handle": "night-warrior-stimulant-free-pre-workout",
    "product_type": "Pre-Workout",
    "vendor": "Premium Supps",
    "tags": [
      "Pre-Workout",
      "Preworkout",
      "Stim-Free",
      "Pump",
      "flavour-product",
      "rivo-included-product",
      "Up to 35% Off"
    ],
    "body_html": "<h2>Caffeine-free pre-workout for late-day training</h2><p>Night Warrior is a fully disclosed caffeine-free pre-workout for customers who train later in the day or prefer to avoid caffeine. It combines citrulline, beta alanine, betaine, taurine and focus ingredients in a two-scoop serve.</p><h3>Active ingredients per full serve</h3><ul>\n<li>L-Citrulline \u2014 10g</li>\n<li>Beta Alanine \u2014 4g</li>\n<li>Betaine Anhydrous \u2014 2.5g</li>\n<li>L-Tyrosine \u2014 2g</li>\n<li>Taurine \u2014 2g</li>\n<li>Agmatine Sulfate \u2014 1g</li>\n<li>Alpha GPC 50% \u2014 600mg</li>\n<li>Acetyl-L-Carnitine \u2014 500mg</li>\n<li>Ornithine HCL \u2014 500mg</li>\n<li>Himalayan Pink Salt \u2014 200mg</li>\n<li>Huperzine A \u2014 100mcg</li>\n</ul><h3>Flavours</h3><p>Choose Grape, Mango, Watermelon or Unflavoured, subject to availability.</p><h3>How to use</h3><p>Follow the serving directions on the label and assess your tolerance before using a full serve. Caffeine-free does not mean suitable for everyone; this formula contains multiple active ingredients. Consult a healthcare professional before use if you take medication, have a health condition, or are pregnant or breastfeeding.</p>",
    "clean_description": "Caffeine-free pre-workout for late-day training Night Warrior is a fully disclosed caffeine-free pre-workout for customers who train later in the day or prefer to avoid caffeine. It combines citrulline, beta alanine, betaine, taurine and focus ingredients in a two-scoop serve. Active ingredients per full serve L-Citrulline \u2014 10g Beta Alanine \u2014 4g Betaine Anhydrous \u2014 2.5g L-Tyrosine \u2014 2g Taurine \u2014 2g Agmatine Sulfate \u2014 1g Alpha GPC 50% \u2014 600mg Acetyl-L-Carnitine \u2014 500mg Ornithine HCL \u2014 500mg Himalayan Pink Salt \u2014 200mg Huperzine A \u2014 100mcg Flavours Choose Grape, Mango, Watermelon or Unflavoured, subject to availability. How to use Follow the serving directions on the label and assess your tolerance before using a full serve. Caffeine-free does not mean suitable for everyone; this formula contains multiple active ingredients. Consult a healthcare professional before use if you take medication, have a health condition, or are pregnant or breastfeeding.",
    "options": [
      {
        "name": "Flavour",
        "position": 1,
        "values": [
          "Watermelon",
          "Grape",
          "Mango",
          "Unflavoured"
        ]
      }
    ],
    "variants": [
      {
        "id": 49324445139224,
        "title": "Watermelon",
        "price": 41.97,
        "compare_at_price": 59.95,
        "sku": "PSNWW",
        "available": true,
        "option1": "Watermelon",
        "option2": null,
        "option3": null,
        "weight_grams": 700
      },
      {
        "id": 47317786132760,
        "title": "Grape",
        "price": 41.97,
        "compare_at_price": 59.95,
        "sku": "PSNWG",
        "available": true,
        "option1": "Grape",
        "option2": null,
        "option3": null,
        "weight_grams": 700
      },
      {
        "id": 47703289594136,
        "title": "Mango",
        "price": 41.97,
        "compare_at_price": 59.95,
        "sku": "PSNWM",
        "available": true,
        "option1": "Mango",
        "option2": null,
        "option3": null,
        "weight_grams": 700
      },
      {
        "id": 49480748531992,
        "title": "Unflavoured",
        "price": 41.97,
        "compare_at_price": 59.95,
        "sku": "PSNWUF",
        "available": true,
        "option1": "Unflavoured",
        "option2": null,
        "option3": null,
        "weight_grams": 700
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/NightWarrior_Watermelon_500g.png?v=1780561094",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/NightWarrior_Grapes_500g.png?v=1779708335",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/NightWarrior_5th.png?v=1780561035",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/NightWarrior_6th.png?v=1780561035",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/NightWarrior_7th.png?v=1780561035",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/NightWarrior_Grape_50S_5th_caf54b19-50a5-478b-8cbb-a7de0684a99b.jpg?v=1766484994",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/NightWarrior_Mango_500g.png?v=1780561094",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/NightWarrior_Unflavoured_500g.png?v=1780561094",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/rn-image_picker_lib_temp_5238d21b-ff7c-4bc4-93ee-ae82c9ceab07.png?v=1789371390"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/NightWarrior_Watermelon_500g.png?v=1780561094",
    "min_price": 41.97,
    "max_price": 41.97,
    "subtitle": "Late-Night Heavy Sessions Without Ruining Your Sleep Cycle",
    "features": [
      "100% Stimulant-Free",
      "Nitric Oxide Surge",
      "Electrolyte Infused"
    ],
    "badge": "Stim Free",
    "rating": 4.9,
    "reviews_count": 64
  },
  {
    "id": 8843671109912,
    "title": "Bacteriostatic Water",
    "handle": "bacteriostatic-water-30ml",
    "product_type": "Supplements",
    "vendor": "Premium Supps",
    "tags": [
      "Bacteriostatic water",
      "rivo-included-product",
      "Up to 35% Off",
      "Water"
    ],
    "body_html": "<h2>Bacteriostatic water with 0.9% benzyl alcohol</h2><p>Premium Supps Bacteriostatic Water is an Australian-manufactured preserved water solution supplied in 10ml and 30ml vials. It contains 0.9% benzyl alcohol.</p><h3>Product details</h3><ul>\n<li>Available in 10ml and 30ml vials</li>\n<li>Preserved with 0.9% benzyl alcohol</li>\n<li>Manufactured by Premium Supps in Australia</li>\n<li>Published third-party reports cover benzyl alcohol concentration, pH, microbial enumeration and endotoxin testing</li>\n</ul><p><a href=\"/pages/laboratory-tests\">View the available laboratory reports</a>.</p><h3>Handling and storage</h3><p>Keep the vial sealed until required and follow the storage and handling directions on the label. Do not use a vial if its seal is damaged or the solution appears cloudy, discoloured or contains visible particles.</p><h3>Important information</h3><p>This page does not provide directions for reconstitution, injection or medical use. Use only for lawful, label-permitted purposes and obtain qualified professional guidance where appropriate.</p>",
    "clean_description": "Bacteriostatic water with 0.9% benzyl alcohol Premium Supps Bacteriostatic Water is an Australian-manufactured preserved water solution supplied in 10ml and 30ml vials. It contains 0.9% benzyl alcohol. Product details Available in 10ml and 30ml vials Preserved with 0.9% benzyl alcohol Manufactured by Premium Supps in Australia Published third-party reports cover benzyl alcohol concentration, pH, microbial enumeration and endotoxin testing View the available laboratory reports . Handling and storage Keep the vial sealed until required and follow the storage and handling directions on the label. Do not use a vial if its seal is damaged or the solution appears cloudy, discoloured or contains visible particles. Important information This page does not provide directions for reconstitution, injection or medical use. Use only for lawful, label-permitted purposes and obtain qualified professional guidance where appropriate.",
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "30 ml",
          "10 ml"
        ]
      }
    ],
    "variants": [
      {
        "id": 49519477063960,
        "title": "30 ml",
        "price": 25.87,
        "compare_at_price": 36.95,
        "sku": "PSBAC30",
        "available": true,
        "option1": "30 ml",
        "option2": null,
        "option3": null,
        "weight_grams": 80
      },
      {
        "id": 49519477031192,
        "title": "10 ml",
        "price": 18.17,
        "compare_at_price": 25.95,
        "sku": "PSBAC10",
        "available": true,
        "option1": "10 ml",
        "option2": null,
        "option3": null,
        "weight_grams": 25
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Bacteriostatic-WaterB.png?v=1780560867",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Bacteriostatic-Water_8a732934-48b0-4534-8fce-ebf8e09f9d4d.png?v=1780556559",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Bacteriostatic-WaterA.png?v=1780560942",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Bacteriostatic-WaterC.png?v=1780560942",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Bacteriostatic-WaterD.png?v=1780560942"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Bacteriostatic-WaterB.png?v=1780560867",
    "min_price": 18.17,
    "max_price": 25.87,
    "subtitle": "Sterile 0.9% Benzyl Alcohol Preparation for Multi-Dose Reconstitution",
    "features": [
      "0.9% Benzyl Alcohol",
      "USP Standard Grade",
      "Laboratory Tested"
    ],
    "badge": "Medical Grade",
    "rating": 4.9,
    "reviews_count": 112
  },
  {
    "id": 8589965590808,
    "title": "Liquid Glycerol 500ml",
    "handle": "liquid-glycerol-500ml-1-25g-ml",
    "product_type": "Pre-Workout",
    "vendor": "Premium Supps",
    "tags": [
      "Pre-Workout",
      "Preworkout",
      "Pump",
      "Hyper-Hydration",
      "Cell Volumizer",
      "rivo-included-product",
      "Up to 35% Off"
    ],
    "body_html": "<h2>Liquid glycerol in a measured 500ml format</h2><p>Premium Supps Liquid Glycerol provides glycerol in a smooth liquid format for customers who prefer it to dry glycerol powders. The labelled concentration is 1.25g per ml.</p><h3>Product details</h3><ul>\n<li>500ml bottle</li>\n<li>1.25g/ml labelled concentration</li>\n<li>Liquid format for straightforward measuring and mixing</li>\n<li>Suitable for combining with water or a training drink according to the label</li>\n</ul><h3>How to use</h3><p>Follow the serving and fluid directions on the product label. Glycerol should be used with adequate water. Individual fluid needs vary with body size, climate, sweat rate and exercise duration.</p><p>Consult a healthcare professional before use if you take medication, have a health condition, or are pregnant or breastfeeding.</p>",
    "clean_description": "Liquid glycerol in a measured 500ml format Premium Supps Liquid Glycerol provides glycerol in a smooth liquid format for customers who prefer it to dry glycerol powders. The labelled concentration is 1.25g per ml. Product details 500ml bottle 1.25g/ml labelled concentration Liquid format for straightforward measuring and mixing Suitable for combining with water or a training drink according to the label How to use Follow the serving and fluid directions on the product label. Glycerol should be used with adequate water. Individual fluid needs vary with body size, climate, sweat rate and exercise duration. Consult a healthcare professional before use if you take medication, have a health condition, or are pregnant or breastfeeding.",
    "options": [
      {
        "name": "Title",
        "position": 1,
        "values": [
          "Default Title"
        ]
      }
    ],
    "variants": [
      {
        "id": 47409793827096,
        "title": "Default Title",
        "price": 25.73,
        "compare_at_price": 36.75,
        "sku": "PSGLY",
        "available": true,
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "weight_grams": 750
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/LiquidGlycerol_500ML.jpg?v=1762278971",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/LiquidGlycerol_500ML_2nd.jpg?v=1762278971",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/LiquidGlycerol_500ML_3rd.jpg?v=1762278971"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/LiquidGlycerol_500ML.jpg?v=1762278971",
    "min_price": 25.73,
    "max_price": 25.73,
    "subtitle": "Hyper-Hydration Cell Volumizer For Skin-Splitting Muscle Fullness",
    "features": [
      "Intracellular Water Retention",
      "Extreme Vascularity",
      "Non-Stimulant Pump"
    ],
    "badge": "Heavy Pump",
    "rating": 4.7,
    "reviews_count": 45
  },
  {
    "id": 8589894615320,
    "title": "Warrior High-Stimulant Pre-workout",
    "handle": "warrior-pre-workout",
    "product_type": "Pre-Workout",
    "vendor": "Premium Supps",
    "tags": [
      "Pre-Workout",
      "Preworkout",
      "High-Stim",
      "flavour-product",
      "Up to 35% Off"
    ],
    "body_html": "<h2>Fully disclosed high-stimulant pre-workout</h2><p>Warrior combines caffeine with citrulline, beta alanine, betaine, taurine and focus ingredients in a clearly labelled pre-workout formula.</p><h3>Active ingredients per full serve</h3><ul>\n<li>L-Citrulline \u2014 6g</li>\n<li>Beta Alanine \u2014 4g</li>\n<li>Betaine Anhydrous \u2014 2.5g</li>\n<li>Taurine \u2014 1g</li>\n<li>L-Tyrosine \u2014 1g</li>\n<li>Caffeine \u2014 400mg</li>\n<li>L-Theanine \u2014 200mg</li>\n<li>Synephrine \u2014 30mg</li>\n<li>Pink Himalayan Salt \u2014 100mg</li>\n</ul><h3>Flavours</h3><p>Choose Grape, Pineapple, Mango, Apple, Watermelon or Blackcurrant, subject to availability.</p><p>Available ingredient reports can be viewed on our <a href=\"/pages/laboratory-tests\">Laboratory Tests page</a>.</p><h3>Important use information</h3><p>A full serve contains 400mg caffeine. Follow the label and assess your tolerance before using a full serve. Do not combine with other caffeine or stimulant products. Not suitable for children, people who are pregnant or breastfeeding, or anyone sensitive to caffeine. Seek professional advice before use if you take medication or have a health condition.</p>",
    "clean_description": "Fully disclosed high-stimulant pre-workout Warrior combines caffeine with citrulline, beta alanine, betaine, taurine and focus ingredients in a clearly labelled pre-workout formula. Active ingredients per full serve L-Citrulline \u2014 6g Beta Alanine \u2014 4g Betaine Anhydrous \u2014 2.5g Taurine \u2014 1g L-Tyrosine \u2014 1g Caffeine \u2014 400mg L-Theanine \u2014 200mg Synephrine \u2014 30mg Pink Himalayan Salt \u2014 100mg Flavours Choose Grape, Pineapple, Mango, Apple, Watermelon or Blackcurrant, subject to availability. Available ingredient reports can be viewed on our Laboratory Tests page . Important use information A full serve contains 400mg caffeine. Follow the label and assess your tolerance before using a full serve. Do not combine with other caffeine or stimulant products. Not suitable for children, people who are pregnant or breastfeeding, or anyone sensitive to caffeine. Seek professional advice before use if you take medication or have a health condition.",
    "options": [
      {
        "name": "Flavour",
        "position": 1,
        "values": [
          "Grape",
          "Pineapple",
          "Mango",
          "Apple",
          "Watermelon",
          "Blackcurrant"
        ]
      }
    ],
    "variants": [
      {
        "id": 46541856538904,
        "title": "Grape",
        "price": 41.97,
        "compare_at_price": 59.95,
        "sku": "PSWARG",
        "available": true,
        "option1": "Grape",
        "option2": null,
        "option3": null,
        "weight_grams": 510
      },
      {
        "id": 49884231434520,
        "title": "Pineapple",
        "price": 41.97,
        "compare_at_price": 59.95,
        "sku": "PSWARP",
        "available": true,
        "option1": "Pineapple",
        "option2": null,
        "option3": null,
        "weight_grams": 510
      },
      {
        "id": 46541856473368,
        "title": "Mango",
        "price": 41.97,
        "compare_at_price": 59.95,
        "sku": "PSWARM",
        "available": true,
        "option1": "Mango",
        "option2": null,
        "option3": null,
        "weight_grams": 510
      },
      {
        "id": 46541856506136,
        "title": "Apple",
        "price": 41.97,
        "compare_at_price": 59.95,
        "sku": "PSWARA",
        "available": true,
        "option1": "Apple",
        "option2": null,
        "option3": null,
        "weight_grams": 510
      },
      {
        "id": 49323713593624,
        "title": "Watermelon",
        "price": 41.97,
        "compare_at_price": 59.95,
        "sku": "PSWARW",
        "available": false,
        "option1": "Watermelon",
        "option2": null,
        "option3": null,
        "weight_grams": 510
      },
      {
        "id": 52015096922392,
        "title": "Blackcurrant",
        "price": 41.97,
        "compare_at_price": 59.95,
        "sku": "PSWARB",
        "available": false,
        "option1": "Blackcurrant",
        "option2": null,
        "option3": null,
        "weight_grams": 510
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Warrior_Grape.png?v=1780554891",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Warrior_Pineapple_500g_1.png?v=1779708424",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Warrior_5th-Slide.png?v=1780554782",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Warrior_Pineapple_50S_5th_1a645c14-8f7f-463f-b592-4c6099bca904.jpg?v=1768886706",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Warrior_6th-Slide.png?v=1780554788",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Warrior_Pineapple_50S_6th.jpg?v=1768888670",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Warrior_Flavours_Stacked.jpg?v=1768888670",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Warrior_Mango_90851243-1c40-4c36-895a-d5314f8418e8.png?v=1780554891",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Warrior_Apple.png?v=1780554891",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Warrior_Watermelon.png?v=1780557357",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Warrior_Blackcurrent_e37544f9-8fd1-4fbb-ad40-ad78683a4f90.png?v=1780557357"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Warrior_Grape.png?v=1780554891",
    "min_price": 41.97,
    "max_price": 41.97,
    "subtitle": "High Stimulant Performance Matrix For Relentless Energy & Focus",
    "features": [
      "Intense Energy Boost",
      "Massive Muscle Pumps",
      "Laser Sharp Focus"
    ],
    "badge": "High Stim",
    "rating": 4.8,
    "reviews_count": 98
  },
  {
    "id": 8589815251224,
    "title": "Beta Alanine",
    "handle": "beta-alanine",
    "product_type": "Amino Acid Supplement",
    "vendor": "Premium Supps",
    "tags": [
      "Amino Acids",
      "Best Seller",
      "beta alanine",
      "Brain Health",
      "Capsules",
      "Form_Capsule",
      "Form_Powder",
      "Keto Diet",
      "powder",
      "Preworkout",
      "Pre-Workout",
      "Senior Health",
      "Sports Nutrition",
      "Top Seller",
      "Up to 35% Off"
    ],
    "body_html": "<h2>Pure beta alanine powder</h2><p>Premium Supps Beta Alanine is an unflavoured, single-ingredient powder for customers who want a flexible addition to a pre-workout or daily training routine.</p><h3>Product details</h3><ul>\n<li>Available in 250g, 500g and 1kg sizes</li>\n<li>Single-ingredient beta alanine powder</li>\n<li>Unflavoured</li>\n<li>No proprietary blend</li>\n<li>Published ingredient testing on the <a href=\"/pages/laboratory-tests\">Laboratory Tests page</a>\n</li>\n</ul><h3>How to use</h3><p>Follow the directions on the product label. Beta alanine can cause temporary skin tingling in some users. Consult a healthcare professional before use if you take medication, have a health condition, or are pregnant or breastfeeding.</p>",
    "clean_description": "Pure beta alanine powder Premium Supps Beta Alanine is an unflavoured, single-ingredient powder for customers who want a flexible addition to a pre-workout or daily training routine. Product details Available in 250g, 500g and 1kg sizes Single-ingredient beta alanine powder Unflavoured No proprietary blend Published ingredient testing on the Laboratory Tests page How to use Follow the directions on the product label. Beta alanine can cause temporary skin tingling in some users. Consult a healthcare professional before use if you take medication, have a health condition, or are pregnant or breastfeeding.",
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "1 Kilogram",
          "500 Grams",
          "250 Grams"
        ]
      }
    ],
    "variants": [
      {
        "id": 46541693059352,
        "title": "1 Kilogram",
        "price": 34.97,
        "compare_at_price": 49.95,
        "sku": "PSBA1000",
        "available": false,
        "option1": "1 Kilogram",
        "option2": null,
        "option3": null,
        "weight_grams": 460396
      },
      {
        "id": 46541693026584,
        "title": "500 Grams",
        "price": 20.97,
        "compare_at_price": 29.95,
        "sku": "PSBA500",
        "available": false,
        "option1": "500 Grams",
        "option2": null,
        "option3": null,
        "weight_grams": 525
      },
      {
        "id": 46541692993816,
        "title": "250 Grams",
        "price": 15.37,
        "compare_at_price": 21.95,
        "sku": "PSBA250",
        "available": false,
        "option1": "250 Grams",
        "option2": null,
        "option3": null,
        "weight_grams": 0
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/BetaAlanine_1KG_200S.jpg?v=1766487190",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/BetaAlanine_1KG_200S_3rd.jpg?v=1766487190",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/BetaAlanine_Testimonial_d82c132c-25c2-4313-b32d-9e917c077461.jpg?v=1766487190",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/BetaAlanine_1KG_200S_5th_ebac8613-f71f-4cc2-9455-21a8a4592d87.jpg?v=1766487190",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/BetaAlanine_1KG_200S_5th.jpg?v=1766487190",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/BetaAlanine_Flavours_Stacked.jpg?v=1766487190",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/BetaAlanine_500G_100S.jpg?v=1766487190",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/BetaAlanine_500G_100S_3rd.jpg?v=1766487190",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/BetaAlanine_Testimonial.jpg?v=1766487190",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/BetaAlanine_500G_100S_5th.jpg?v=1766487190",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/BetaAlanine_500G_100S_6th.jpg?v=1766487190",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/BetaAlanine_250G_50S.jpg?v=1758998425",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/BetaAlanine_250G_50S_3rd.jpg?v=1761022235",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/BetaAlanine_Testimonial_2259ac8f-d759-45f0-8b82-5dd9ce9422e6.jpg?v=1762281720",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/BetaAlanine_250G_50S_5th.jpg?v=1766487190",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/BetaAlanine_250G_50S_6th.jpg?v=1766487190"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/BetaAlanine_1KG_200S.jpg?v=1766487190",
    "min_price": 15.37,
    "max_price": 34.97,
    "subtitle": "Australian Manufactured Pure Beta Alanine with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Australian Made",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 8589785104664,
    "title": "L-Carnitine",
    "handle": "l-carnitine-30ml-600mg-ml",
    "product_type": "Supplements",
    "vendor": "Premium Supps",
    "tags": [
      "Up to 35% Off"
    ],
    "body_html": "<h2>Liquid L-Carnitine 600mg/ml</h2><p>Premium Supps Liquid L-Carnitine is a high-concentration liquid product supplied in a 30ml vial. The current formula provides 600mg of L-Carnitine per ml.</p><h3>Product details</h3><ul>\n<li>30ml vial</li>\n<li>600mg/ml concentration</li>\n<li>Clearly stated concentration for accurate product identification</li>\n<li>Manufactured in Australia</li>\n</ul><h3>Important information</h3><p>This page does not provide dosage methods, administration instructions or medical advice. Use only for lawful, label-permitted purposes and obtain qualified professional guidance where appropriate. Do not use a vial if its seal is damaged or the liquid appears abnormal.</p>",
    "clean_description": "Liquid L-Carnitine 600mg/ml Premium Supps Liquid L-Carnitine is a high-concentration liquid product supplied in a 30ml vial. The current formula provides 600mg of L-Carnitine per ml. Product details 30ml vial 600mg/ml concentration Clearly stated concentration for accurate product identification Manufactured in Australia Important information This page does not provide dosage methods, administration instructions or medical advice. Use only for lawful, label-permitted purposes and obtain qualified professional guidance where appropriate. Do not use a vial if its seal is damaged or the liquid appears abnormal.",
    "options": [
      {
        "name": "L-Carnitine 30ml ",
        "position": 1,
        "values": [
          "600mg/ml"
        ]
      }
    ],
    "variants": [
      {
        "id": 49323862819096,
        "title": "600mg/ml",
        "price": 48.97,
        "compare_at_price": 69.95,
        "sku": "PSLCAR600",
        "available": true,
        "option1": "600mg/ml",
        "option2": null,
        "option3": null,
        "weight_grams": 86
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/0c181cb0-03b2-4e2c-a5b7-f82b8f2d6e7b.png?v=1779931468",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/L-Carnitine_3rd.png?v=1780554563",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/L-Carnitine_4th.png?v=1780554563",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/L-Carnitine_5th.png?v=1780554563",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/fa0d5fb6-0b60-4d1d-8fa3-290bcc0a43a3_709809c8-fbb3-46d7-8c13-cd77beff8bd6.png?v=1779077743"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/0c181cb0-03b2-4e2c-a5b7-f82b8f2d6e7b.png?v=1779931468",
    "min_price": 48.97,
    "max_price": 48.97,
    "subtitle": "Australian Manufactured Pure L-Carnitine with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Australian Made",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 8589781008664,
    "title": "L-Glutamine",
    "handle": "l-glutamine",
    "product_type": "Amino Acid Supplement",
    "vendor": "Premium Supps",
    "tags": [
      "Amino Acids",
      "Best Seller",
      "Capsules",
      "Digestion",
      "Energy",
      "Form_Capsule",
      "Form_Powder",
      "Immune Support",
      "Muscle Building",
      "Powder",
      "Preworkout",
      "Sports Nutrition",
      "Top Seller",
      "Up to 35% Off",
      "Weight Loss"
    ],
    "body_html": "<h2>Pure L-glutamine powder</h2><p>Premium Supps L-Glutamine is an unflavoured, single-ingredient amino acid powder for customers who prefer a simple product they can measure and mix into their existing routine.</p><h3>Product details</h3><ul>\n<li>Available in 250g, 500g and 1kg sizes</li>\n<li>Single-ingredient L-glutamine powder</li>\n<li>Unflavoured</li>\n<li>No proprietary blend</li>\n<li>Easy to mix with water or another suitable drink</li>\n</ul><h3>How to use</h3><p>Follow the serving and preparation directions on the product label. Consult a healthcare professional before use if you take medication, have a health condition, or are pregnant or breastfeeding.</p>",
    "clean_description": "Pure L-glutamine powder Premium Supps L-Glutamine is an unflavoured, single-ingredient amino acid powder for customers who prefer a simple product they can measure and mix into their existing routine. Product details Available in 250g, 500g and 1kg sizes Single-ingredient L-glutamine powder Unflavoured No proprietary blend Easy to mix with water or another suitable drink How to use Follow the serving and preparation directions on the product label. Consult a healthcare professional before use if you take medication, have a health condition, or are pregnant or breastfeeding.",
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "1 Kilogram",
          "500 Grams",
          "250 Grams"
        ]
      }
    ],
    "variants": [
      {
        "id": 46541641875736,
        "title": "1 Kilogram",
        "price": 34.95,
        "compare_at_price": 49.95,
        "sku": "PSGLUT1KG",
        "available": false,
        "option1": "1 Kilogram",
        "option2": null,
        "option3": null,
        "weight_grams": 998
      },
      {
        "id": 46541641842968,
        "title": "500 Grams",
        "price": 27.96,
        "compare_at_price": 39.95,
        "sku": "PSGLUT500",
        "available": true,
        "option1": "500 Grams",
        "option2": null,
        "option3": null,
        "weight_grams": 1
      },
      {
        "id": 46541641810200,
        "title": "250 Grams",
        "price": 17.47,
        "compare_at_price": 24.95,
        "sku": "PSGLUT250",
        "available": true,
        "option1": "250 Grams",
        "option2": null,
        "option3": null,
        "weight_grams": 1
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Glutamine_1KG_200S.jpg?v=1766486591",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Glutamine_1KG_200S_3rd.jpg?v=1766486591",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Glutamine_Testimonial_1Kg.jpg?v=1766486591",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Glutamine_1KG_200S_5th.jpg?v=1766486591",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Glutamine_1KG_200S_6th.jpg?v=1766486591",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Flutamine_Flavours_Stacked.jpg?v=1766486591",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Glutamine_500G_100S.jpg?v=1766486591",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Glutamine_500G_100S_3rd.jpg?v=1766486591",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Glutamine_Testimonial.jpg?v=1766486591",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Glutamine_500G_100S_5th.jpg?v=1766486591",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Glutamine_500G_100S_6th.jpg?v=1766486591",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Glutamine_250G_50S.jpg?v=1758998273",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Glutamine_250G_50S_3rd.jpg?v=1760982201",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Glutamine_Testimonial_250g.jpg?v=1766486591"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Glutamine_1KG_200S.jpg?v=1766486591",
    "min_price": 17.47,
    "max_price": 34.95,
    "subtitle": "Australian Manufactured Pure L-Glutamine with Zero Fillers",
    "features": [
      "Third-Party Lab Tested",
      "Direct Manufacturer Value",
      "Pure Pharmaceutical Grade"
    ],
    "badge": "Australian Made",
    "rating": 4.8,
    "reviews_count": 25
  },
  {
    "id": 8560679158040,
    "title": "Micronised Creatine Monohydrate",
    "handle": "creatine-monohydrate",
    "product_type": "Creatine",
    "vendor": "Premium Supps",
    "tags": [],
    "body_html": "<p><strong>Pre-order update:</strong> Current orders are scheduled to ship by Wednesday 9 September 2026.</p><h2>Pure micronised creatine monohydrate</h2><p>Premium Supps Creatine Monohydrate is an unflavoured, single-ingredient powder micronised to 200 mesh for fine mixing. Choose from 250g, 500g and 1kg sizes.</p><h3>Product details</h3><ul>\n<li>100% creatine monohydrate</li>\n<li>Micronised to 200 mesh</li>\n<li>Unflavoured</li>\n<li>No added fillers or proprietary blend</li>\n<li>Available in 250g, 500g and 1kg sizes</li>\n</ul><h3>Third-party testing</h3><p>A published third-party report is available for a sampled batch. Laboratory results relate to the sample and batch identified in the report rather than every unit sold.</p><p><a href=\"/pages/laboratory-tests\">View available laboratory reports</a>.</p><h3>How to use</h3><p>Follow the serving and preparation directions on the product label. Creatine can be mixed with water or another suitable drink and used consistently on training and non-training days.</p>",
    "clean_description": "Pre-order update: Current orders are scheduled to ship by Wednesday 9 September 2026. Pure micronised creatine monohydrate Premium Supps Creatine Monohydrate is an unflavoured, single-ingredient powder micronised to 200 mesh for fine mixing. Choose from 250g, 500g and 1kg sizes. Product details 100% creatine monohydrate Micronised to 200 mesh Unflavoured No added fillers or proprietary blend Available in 250g, 500g and 1kg sizes Third-party testing A published third-party report is available for a sampled batch. Laboratory results relate to the sample and batch identified in the report rather than every unit sold. View available laboratory reports . How to use Follow the serving and preparation directions on the product label. Creatine can be mixed with water or another suitable drink and used consistently on training and non-training days.",
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "1000g",
          "500g",
          "250g"
        ]
      }
    ],
    "variants": [
      {
        "id": 46364549579032,
        "title": "1000g",
        "price": 34.97,
        "compare_at_price": 49.95,
        "sku": "PSCREM1000",
        "available": true,
        "option1": "1000g",
        "option2": null,
        "option3": null,
        "weight_grams": 1100
      },
      {
        "id": 46364547940632,
        "title": "500g",
        "price": 25.87,
        "compare_at_price": 36.95,
        "sku": "PSCREM500",
        "available": true,
        "option1": "500g",
        "option2": null,
        "option3": null,
        "weight_grams": 530
      },
      {
        "id": 46542043906328,
        "title": "250g",
        "price": 17.47,
        "compare_at_price": 24.95,
        "sku": "PSCREM250",
        "available": true,
        "option1": "250g",
        "option2": null,
        "option3": null,
        "weight_grams": 280
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Creatine_1000g.png?v=1780554121",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Creatine_500g.png?v=1780554122",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Creatine_250g.png?v=1779708879",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Creatine_4th.png?v=1780554036",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Creatine_5th.png?v=1780554040",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Creatine_6th.png?v=1780554043",
      "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Creatine_7th.png?v=1780554047"
    ],
    "featured_image": "https://cdn.shopify.com/s/files/1/0811/8701/2888/files/Creatine_1000g.png?v=1780554121",
    "min_price": 17.47,
    "max_price": 34.97,
    "subtitle": "No Fillers. No Grit. Just Muscle-Building Power.",
    "features": [
      "Increases Muscle Strength",
      "Boosts Muscle Growth",
      "Improves Exercise Performance"
    ],
    "badge": "Best Seller",
    "rating": 4.9,
    "reviews_count": 142
  }
];

export const COLLECTIONS: CollectionItem[] = [
  {
    "id": 520571945240,
    "title": "All Products",
    "handle": "all-products",
    "products_count": 26,
    "description": "Browse our premium range of All Products"
  },
  {
    "id": 464506388760,
    "title": "Best Sellers",
    "handle": "best-seller",
    "products_count": 20,
    "description": "Browse our premium range of Best Sellers"
  },
  {
    "id": 517382799640,
    "title": "Creatine",
    "handle": "creatine",
    "products_count": 5,
    "description": "Browse our premium range of Creatine"
  },
  {
    "id": 464506421528,
    "title": "Featured Collection",
    "handle": "featured-collection",
    "products_count": 5,
    "description": "Browse our premium range of Featured Collection"
  },
  {
    "id": 520758395160,
    "title": "FREEGIFT Qualifying Items",
    "handle": "freegift-qualifying-items",
    "products_count": 72,
    "description": "Browse our premium range of FREEGIFT Qualifying Items"
  },
  {
    "id": 484280533272,
    "title": "Health",
    "handle": "health",
    "products_count": 3,
    "description": "Browse our premium range of Health"
  },
  {
    "id": 484280467736,
    "title": "High Performance Range",
    "handle": "high-performance-range",
    "products_count": 6,
    "description": "Browse our premium range of High Performance Range"
  },
  {
    "id": 456910569752,
    "title": "Home page",
    "handle": "frontpage",
    "products_count": 6,
    "description": "Browse our premium range of Home page"
  },
  {
    "id": 498606997784,
    "title": "Laboratory Tests",
    "handle": "laboratory-tests",
    "products_count": 0,
    "description": "Browse our premium range of Laboratory Tests"
  },
  {
    "id": 483297984792,
    "title": "Pre workouts",
    "handle": "pre-workouts",
    "products_count": 4,
    "description": "Browse our premium range of Pre workouts"
  },
  {
    "id": 480530399512,
    "title": "Raw compounds",
    "handle": "raw-compounds",
    "products_count": 2,
    "description": "Browse our premium range of Raw compounds"
  },
  {
    "id": 516271407384,
    "title": "RIVO - Products for 15% Off Referrals Discount",
    "handle": "rivo-products-for-15-off-referrals-discount",
    "products_count": 14,
    "description": "Browse our premium range of RIVO - Products for 15% Off Referrals Discount"
  },
  {
    "id": 486221152536,
    "title": "Stacks",
    "handle": "stacks",
    "products_count": 6,
    "description": "Browse our premium range of Stacks"
  },
  {
    "id": 495645065496,
    "title": "Subscriptions",
    "handle": "subscriptions",
    "products_count": 14,
    "description": "Browse our premium range of Subscriptions"
  },
  {
    "id": 484280500504,
    "title": "Weight loss",
    "handle": "weight-loss",
    "products_count": 3,
    "description": "Browse our premium range of Weight loss"
  }
];

export const URL_INVENTORY: UrlItem[] = [
  {
    "url": "https://premiumsupps.net/agents.md",
    "category": "AI & LLM Directives",
    "title": "AI Crawler Metadata",
    "purpose": "Agentic discovery guidelines and site manifest for AI crawlers",
    "lastmod": ""
  },
  {
    "url": "https://premiumsupps.net/",
    "category": "Homepage",
    "title": "Storefront Home",
    "purpose": "Primary landing page with brand ethos, featured bestsellers, and trust badges",
    "lastmod": ""
  },
  {
    "url": "https://premiumsupps.net/products/creatine-monohydrate",
    "category": "Product Page",
    "title": "Creatine Monohydrate",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/alcar-hcl-acetyl-l-carnitine-hcl",
    "category": "Product Page",
    "title": "Alcar Hcl Acetyl L Carnitine Hcl",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/l-glutamine",
    "category": "Product Page",
    "title": "L Glutamine",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/l-carnitine-30ml-600mg-ml",
    "category": "Product Page",
    "title": "L Carnitine 30Ml 600Mg Ml",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/beta-alanine",
    "category": "Product Page",
    "title": "Beta Alanine",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/warrior-pre-workout",
    "category": "Product Page",
    "title": "Warrior Pre Workout",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/liquid-glycerol-500ml-1-25g-ml",
    "category": "Product Page",
    "title": "Liquid Glycerol 500Ml 1 25G Ml",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/bacteriostatic-water-30ml",
    "category": "Product Page",
    "title": "Bacteriostatic Water 30Ml",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/night-warrior-stimulant-free-pre-workout",
    "category": "Product Page",
    "title": "Night Warrior Stimulant Free Pre Workout",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/creatine-hcl-150g",
    "category": "Product Page",
    "title": "Creatine Hcl 150G",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/taurine",
    "category": "Product Page",
    "title": "Taurine",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/methylene-blue-10mg-ml",
    "category": "Product Page",
    "title": "Methylene Blue 10Mg Ml",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/shilajit-resin",
    "category": "Product Page",
    "title": "Shilajit Resin",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/protein-water",
    "category": "Product Page",
    "title": "Protein Water",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/creatine-gummies",
    "category": "Product Page",
    "title": "Creatine Gummies",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/electrolytes",
    "category": "Product Page",
    "title": "Electrolytes",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/vitamin-d",
    "category": "Product Page",
    "title": "Vitamin D",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/warrior-king-ultra-high-stim-pre-workout",
    "category": "Product Page",
    "title": "Warrior King Ultra High Stim Pre Workout",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/mct-oil",
    "category": "Product Page",
    "title": "Mct Oil",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/creatine-monohydrate-sachet-box",
    "category": "Product Page",
    "title": "Creatine Monohydrate Sachet Box",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/performance-stack",
    "category": "Product Page",
    "title": "Performance Stack",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/essentials-stack",
    "category": "Product Page",
    "title": "Essentials Stack",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/precision-mind-stack",
    "category": "Product Page",
    "title": "Precision Mind Stack",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/hydration-stack",
    "category": "Product Page",
    "title": "Hydration Stack",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/anabolic-stack",
    "category": "Product Page",
    "title": "Anabolic Stack",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/products/vitality-stack",
    "category": "Product Page",
    "title": "Vitality Stack",
    "purpose": "Individual Product Detail Page (PDP) with variant selector, tier pricing, and COA",
    "lastmod": "2026-09-18T00:27:38+09:30"
  },
  {
    "url": "https://premiumsupps.net/pages/refund-policy",
    "category": "Returns & Refunds",
    "title": "Refund Policy",
    "purpose": "30-day money-back guarantee terms, eligibility, and return label dispatch",
    "lastmod": "2025-06-16T20:02:35+09:30"
  },
  {
    "url": "https://premiumsupps.net/pages/privacy-policy",
    "category": "Privacy Policy",
    "title": "Privacy Policy",
    "purpose": "Data privacy, cookie compliance, customer information security, and GDPR/APP rules",
    "lastmod": "2025-06-16T20:01:08+09:30"
  },
  {
    "url": "https://premiumsupps.net/pages/term-of-service",
    "category": "Terms of Service",
    "title": "Terms of Service",
    "purpose": "Store legal agreement, billing conditions, liability disclaimers, and dispute terms",
    "lastmod": "2025-06-16T20:03:00+09:30"
  },
  {
    "url": "https://premiumsupps.net/pages/collab",
    "category": "Affiliate & Creator",
    "title": "Creator Collaboration & Affiliates",
    "purpose": "Athlete sponsorship, creator influencer commission, and promo code distribution",
    "lastmod": "2025-03-10T16:10:19+10:30"
  },
  {
    "url": "https://premiumsupps.net/pages/about-us",
    "category": "About",
    "title": "About Us",
    "purpose": "Company mission, Australian manufacturing philosophy, and value model",
    "lastmod": "2026-06-29T15:11:16+09:30"
  },
  {
    "url": "https://premiumsupps.net/pages/contact-us",
    "category": "Contact",
    "title": "Contact Support",
    "purpose": "Customer support gateway and 48-hour response ticketing channel",
    "lastmod": "2025-06-16T19:57:54+09:30"
  },
  {
    "url": "https://premiumsupps.net/pages/faqs",
    "category": "FAQ",
    "title": "Frequently Asked Questions",
    "purpose": "Customer service knowledgebase covering same-day dispatch, tracking, and usage",
    "lastmod": "2025-12-15T08:47:07+10:30"
  },
  {
    "url": "https://premiumsupps.net/pages/laboratory-tests",
    "category": "Lab Tests / Transparency",
    "title": "Laboratory Tests & COAs",
    "purpose": "Third-party purity and heavy metal test certificates for all active compounds",
    "lastmod": "2025-04-27T22:50:52+09:30"
  },
  {
    "url": "https://premiumsupps.net/pages/affiliate-program",
    "category": "Affiliate & Creator",
    "title": "Creator Collaboration & Affiliates",
    "purpose": "Athlete sponsorship, creator influencer commission, and promo code distribution",
    "lastmod": "2025-10-13T18:41:56+10:30"
  },
  {
    "url": "https://premiumsupps.net/pages/subscription-page",
    "category": "Informational / Utility",
    "title": "Subscription Page",
    "purpose": "Special promotion, referral discount, or customer loyalty landing",
    "lastmod": "2026-04-08T14:08:12+09:30"
  },
  {
    "url": "https://premiumsupps.net/pages/refer-a-friend",
    "category": "Informational / Utility",
    "title": "Refer A Friend",
    "purpose": "Special promotion, referral discount, or customer loyalty landing",
    "lastmod": "2026-05-23T04:59:35+09:30"
  },
  {
    "url": "https://premiumsupps.net/pages/reviews",
    "category": "Informational / Utility",
    "title": "Reviews",
    "purpose": "Special promotion, referral discount, or customer loyalty landing",
    "lastmod": "2026-06-01T21:56:45+09:30"
  },
  {
    "url": "https://premiumsupps.net/pages/wholesale-signup",
    "category": "Wholesale / B2B",
    "title": "Wholesale Sign-Up",
    "purpose": "Commercial gyms, retail supplement distributors, and bulk gym order registration",
    "lastmod": "2026-07-25T05:08:47+09:30"
  },
  {
    "url": "https://premiumsupps.net/pages/apply-for-wholesale",
    "category": "Wholesale / B2B",
    "title": "Wholesale Sign-Up",
    "purpose": "Commercial gyms, retail supplement distributors, and bulk gym order registration",
    "lastmod": "2026-07-25T04:00:48+09:30"
  },
  {
    "url": "https://premiumsupps.net/collections/frontpage",
    "category": "Collection / Category",
    "title": "Frontpage",
    "purpose": "Curated category catalog listing with grid filtering, sorting, and quick-add",
    "lastmod": "2026-09-17T20:42:40+09:30"
  },
  {
    "url": "https://premiumsupps.net/collections/best-seller",
    "category": "Collection / Category",
    "title": "Best Seller",
    "purpose": "Curated category catalog listing with grid filtering, sorting, and quick-add",
    "lastmod": "2026-09-17T20:42:40+09:30"
  },
  {
    "url": "https://premiumsupps.net/collections/featured-collection",
    "category": "Collection / Category",
    "title": "Featured Collection",
    "purpose": "Curated category catalog listing with grid filtering, sorting, and quick-add",
    "lastmod": "2026-09-17T20:42:40+09:30"
  },
  {
    "url": "https://premiumsupps.net/collections/raw-compounds",
    "category": "Collection / Category",
    "title": "Raw Compounds",
    "purpose": "Curated category catalog listing with grid filtering, sorting, and quick-add",
    "lastmod": "2026-07-09T17:59:37+09:30"
  },
  {
    "url": "https://premiumsupps.net/collections/pre-workouts",
    "category": "Collection / Category",
    "title": "Pre Workouts",
    "purpose": "Curated category catalog listing with grid filtering, sorting, and quick-add",
    "lastmod": "2026-09-17T20:42:40+09:30"
  },
  {
    "url": "https://premiumsupps.net/collections/high-performance-range",
    "category": "Collection / Category",
    "title": "High Performance Range",
    "purpose": "Curated category catalog listing with grid filtering, sorting, and quick-add",
    "lastmod": "2026-09-17T20:42:40+09:30"
  },
  {
    "url": "https://premiumsupps.net/collections/weight-loss",
    "category": "Collection / Category",
    "title": "Weight Loss",
    "purpose": "Curated category catalog listing with grid filtering, sorting, and quick-add",
    "lastmod": "2026-09-17T20:42:40+09:30"
  },
  {
    "url": "https://premiumsupps.net/collections/health",
    "category": "Collection / Category",
    "title": "Health",
    "purpose": "Curated category catalog listing with grid filtering, sorting, and quick-add",
    "lastmod": "2026-09-17T20:42:40+09:30"
  },
  {
    "url": "https://premiumsupps.net/collections/stacks",
    "category": "Collection / Category",
    "title": "Stacks",
    "purpose": "Curated category catalog listing with grid filtering, sorting, and quick-add",
    "lastmod": "2026-08-25T20:30:32+09:30"
  },
  {
    "url": "https://premiumsupps.net/collections/subscriptions",
    "category": "Collection / Category",
    "title": "Subscriptions",
    "purpose": "Curated category catalog listing with grid filtering, sorting, and quick-add",
    "lastmod": "2026-09-17T20:42:40+09:30"
  },
  {
    "url": "https://premiumsupps.net/collections/laboratory-tests",
    "category": "Collection / Category",
    "title": "Laboratory Tests",
    "purpose": "Curated category catalog listing with grid filtering, sorting, and quick-add",
    "lastmod": "2026-07-01T19:13:03+09:30"
  },
  {
    "url": "https://premiumsupps.net/collections/rivo-products-for-15-off-referrals-discount",
    "category": "Collection / Category",
    "title": "Rivo Products For 15 Off Referrals Discount",
    "purpose": "Curated category catalog listing with grid filtering, sorting, and quick-add",
    "lastmod": "2026-09-17T20:42:40+09:30"
  },
  {
    "url": "https://premiumsupps.net/collections/creatine",
    "category": "Collection / Category",
    "title": "Creatine",
    "purpose": "Curated category catalog listing with grid filtering, sorting, and quick-add",
    "lastmod": "2026-09-17T20:42:40+09:30"
  },
  {
    "url": "https://premiumsupps.net/collections/all-products",
    "category": "Collection / Category",
    "title": "All Products",
    "purpose": "Curated category catalog listing with grid filtering, sorting, and quick-add",
    "lastmod": "2026-09-17T20:42:40+09:30"
  },
  {
    "url": "https://premiumsupps.net/collections/freegift-qualifying-items",
    "category": "Collection / Category",
    "title": "Freegift Qualifying Items",
    "purpose": "Curated category catalog listing with grid filtering, sorting, and quick-add",
    "lastmod": "2026-09-17T20:42:40+09:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news",
    "category": "Blog / Content",
    "title": "News",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2026-09-16T09:00:02+09:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/testing",
    "category": "Blog / Content",
    "title": "Testing",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2025-03-23T11:38:50+10:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/the-benefits-of-taking-creatine",
    "category": "Blog / Content",
    "title": "The Benefits Of Taking Creatine",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2025-03-26T05:12:32+10:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/boost-your-workout-without-stimulants",
    "category": "Blog / Content",
    "title": "Boost Your Workout Without Stimulants",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2025-03-26T05:12:17+10:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/why-you-should-take-a-caffeine-free-pre-workout",
    "category": "Blog / Content",
    "title": "Why You Should Take A Caffeine Free Pre Workout",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2025-03-26T05:12:08+10:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/exploring-the-benefits-of-liquid-glycerol-supplements",
    "category": "Blog / Content",
    "title": "Exploring The Benefits Of Liquid Glycerol Supplements",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2025-03-26T05:11:57+10:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/warrior-pre-workout-vs-total-war-pre-workout",
    "category": "Blog / Content",
    "title": "Warrior Pre Workout Vs Total War Pre Workout",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2025-03-26T15:40:20+10:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/protein-water-vs-protein-shakes",
    "category": "Blog / Content",
    "title": "Protein Water Vs Protein Shakes",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2026-08-21T09:00:02+09:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/caffeine-l-theanine-pre-workout",
    "category": "Blog / Content",
    "title": "Caffeine L Theanine Pre Workout",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2026-08-23T09:00:04+09:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/why-does-pre-workout-make-you-tingle",
    "category": "Blog / Content",
    "title": "Why Does Pre Workout Make You Tingle",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2026-08-24T09:00:03+09:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/when-to-take-pre-workout",
    "category": "Blog / Content",
    "title": "When To Take Pre Workout",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2026-08-30T09:00:03+09:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/bacteriostatic-water-vs-sterile-water",
    "category": "Blog / Content",
    "title": "Bacteriostatic Water Vs Sterile Water",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2026-08-28T09:00:03+09:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/citrulline-malate-vs-l-citrulline",
    "category": "Blog / Content",
    "title": "Citrulline Malate Vs L Citrulline",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2026-08-31T09:00:01+09:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/creatine-monohydrate-guide-australia",
    "category": "Blog / Content",
    "title": "Creatine Monohydrate Guide Australia",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2026-09-04T09:00:02+09:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/australian-made-supplements-why-direct-manufacturer-matters",
    "category": "Blog / Content",
    "title": "Australian Made Supplements Why Direct Manufacturer Matters",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2026-09-06T09:00:05+09:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/creatine-hcl-vs-monohydrate",
    "category": "Blog / Content",
    "title": "Creatine Hcl Vs Monohydrate",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2026-09-07T09:00:05+09:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/creatine-myths",
    "category": "Blog / Content",
    "title": "Creatine Myths",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2026-09-11T09:00:03+09:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/buying-bacteriostatic-water-australia-checklist",
    "category": "Blog / Content",
    "title": "Buying Bacteriostatic Water Australia Checklist",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2026-09-13T09:00:03+09:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/what-third-party-lab-tested-means",
    "category": "Blog / Content",
    "title": "What Third Party Lab Tested Means",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2026-09-14T09:00:04+09:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/where-to-buy-bacteriostatic-water-australia",
    "category": "Blog / Content",
    "title": "Where To Buy Bacteriostatic Water Australia",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2026-09-02T09:00:04+09:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/when-to-take-creatine",
    "category": "Blog / Content",
    "title": "When To Take Creatine",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2026-09-09T09:00:02+09:30"
  },
  {
    "url": "https://premiumsupps.net/blogs/news/bacteriostatic-water-vs-saline",
    "category": "Blog / Content",
    "title": "Bacteriostatic Water Vs Saline",
    "purpose": "Educational supplement science guide, ingredient comparisons, and dosing protocols",
    "lastmod": "2026-09-16T09:00:02+09:30"
  }
];
