const testTitle =
  'Coffee Drinker&#39;s Delight: Handy and Elegant All-Wood Combination Coffee Scoop and Bag Closer';
const testTitle2 =
  'Custom Letter Necklace • VOTE NECKLACE • Personalized Name Jewelry • Spaced Letter Necklace by CaitlynMinimalist • NM54F30';
const testTag = [
  'stocking stuffer',
  'hostess gift',
  'last-minute',
  'novelty',
  'unusual',
  'wooden',
  'birthday',
  'anniversary',
  'valentines day',
  'coffee',
  'functional',
  'practical',
  'WillisWoods'
];
const testTag2 = [
  'PERSONALIZED',
  'CUSTOM NAME',
  'INITIALS NECKLACE',
  'NAME JEWELRY',
  'PERSONALIZED JEWELRY',
  'NAME NECKLACE',
  'LETTER NECKLACE',
  'GIFTS FOR MOM',
  'CUSTOM NAME NECKLACE',
  'BABY NAME NECKLACE',
  'MOTHER NECKLACE',
  'CAITLYNMINIMALIST',
  'VOTE NECKLACE'
];

const titleTag = (title, tags) => {
  const relevantTags = [];
  let counter = 0;
  titleArray = title.split(' ').map(v => v.toLowerCase());
  const tagsArray = tags.map(v => v.toLowerCase());

  titleArray.map(element => {
    if (counter > 44) return false;
    relevantTags.push(element);
    counter += element.length;
  });

  const intersection = relevantTags.filter(element =>
    tagsArray.includes(element)
  );

  return intersection.length;
};

titleTag(testTitle, testTag);
titleTag(testTitle2, testTag2);
