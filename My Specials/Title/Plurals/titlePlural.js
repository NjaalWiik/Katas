const testTitle =
  'Coffee Drinker&#39;s Delight: Handy and Elegant All-Wood Combination Coffee Scoop and Bag Closer';
const testTitle2 =
  'Custom Customs Letter Necklace • VOTE NECKLACE • Personalized Name Jewelry • Spaced Letter Necklace by CaitlynMinimalist • NM54F30';

const titlePlural = title => {
  titleArray = title.split(' ').map(v => v.toLowerCase());

  const plurals = titleArray.filter(v => titleArray.includes(v + 's'));

  return plurals;
};

titlePlural(testTitle);
titlePlural(testTitle2);
