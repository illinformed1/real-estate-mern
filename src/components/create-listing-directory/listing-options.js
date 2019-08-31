import philippines from "philippines";

export const propertyType = [
  {
    key: "House",
    text: "House",
    value: "House"
  },
  {
    key: "Appartment",
    text: "Appartment",
    value: "Appartment"
  },
  {
    key: "Condo",
    text: "Condo",
    value: "Condo"
  },
  {
    key: "Comercial",
    text: "Comercial",
    value: "Comercial"
  }
];

export const beds = [
  {
    key: "Studio",
    text: "Studio",
    value: "Studio"
  },
  {
    key: "1",
    text: "1",
    value: "1"
  },
  {
    key: "2",
    text: "2",
    value: "2"
  },
  {
    key: "3",
    text: "3",
    value: "3"
  },
  {
    key: "4",
    text: "4",
    value: "4"
  },
  {
    key: "5",
    text: "5",
    value: "5"
  },
  {
    key: "6",
    text: "6",
    value: "6"
  }
];

export const features = [
  {
    key: "air-conditioning",
    text: "air conditioning",
    value: "air conditioning"
  },
  {
    key: "Built-in wardrobes",
    text: "Built-in wardrobes  ",
    value: "Built-in wardrobes"
  },
  { key: "Dishwasher", text: "Dishwasher", value: "Dishwasher" },
  { key: "Gym", text: "Gym", value: "Gym" },
  { key: "Alarm system", text: "Alarm system", value: "Alarm system" },
  { key: "Balcony", text: "Balcony", value: "Balcony" },
  { key: "Broadband", text: "Broadband", value: "Broadband" },
  { key: "Courtyard", text: "Courtyard", value: "Courtyard" },
  { key: "Deck", text: "Deck", value: "Deck" },
  { key: "Indoor spa", text: "Indoor spa", value: "Indoor spa" },
  { key: "Tennis court", text: "Tennis court", value: "Tennis court" },
  { key: "Floorboards", text: "Floorboards", value: "Floorboards" },
  { key: "Carpets", text: "Carpets", value: "Carpets" },
  { key: "Ensuite", text: "Ensuite", value: "Ensuite" },
  { key: "Maid's Room", text: "Maid's Room", value: "Maid's Room" },
  { key: "Ensuite", text: "Ensuite", value: "Ensuite" }
];

let cityOptions = philippines.cities.map((city, index) => {
  return { key: index, value: index, text: city.name, province: city.province };
});

let provinceOptions = philippines.provinces.map((province, index) => {
  return { key: province.key, value: index, text: province.name };
});

export { cityOptions, provinceOptions };
