const testData = `This eye-catching, hand-crafted gadget fulfills 2 functions and is a coffee-drinker&#39;s delight: 1) it&#39;s a 1- or 2-cup** coffee scoop, and 2) it keeps the coffee bag closed between brewings. Beside that, it&#39;s quite nice to look at, having been made by laminating a piece of fine maple hardwood between two pieces of another fine and distinctive hardwood called redheart. Redheart grows in southern Mexico and in Paraguay and Brazil, and has a beautiful bright red color with gray/black streakings of grain. Redheart and maple are NOT LISTED in the CITES Appendices or on the IUCN Red List of Threatened Species.\n\nEach scoop has been sanded to velvety smoothness, covered with two coats of lacquer and waxed. It looks so nice, a person might be tempted to leave the coffee bag on the counter where folks can see the bag closer  in action...\n\nThis item makes a perfect gift for Mother&#39;s Day, Father&#39;s Day, Valentine&#39;s Day, birthdays, anniversaries, etc., as well as an ideal hostess gift.\n\nThe piece measures nearly 6&quot; long by 1&quot; high. The scoop end is 1 7/8&quot; in diameter, and the slot measures 3/16 &quot; wide by about 4&quot; long.\n\n**A level scoopful approximates a 1- to 2-cup measure; a heaping scoopful approximates a 2-cup measure. Dial it in to your own personal taste for coffee strength.\n\nOne photo shows two scoops. The listed price is for one scoop.\n\nPLEASE NOTE: The hardwoods used in my shop are either not endangered (oak, maple, wild cherry, black walnut, ash, etc.,) or, if endangered, are those listed in Appendix II of the CITES international treaty, and available from importers, suppliers and dealers that are certified and/or licensed by the U.S. Fish, Game and Wildlife Administration, which administers and enforces the CITES treaty. Appendix II of the CITES treaty “includes [wood] species not necessarily threatened with extinction, but in which trade must be controlled in order to avoid utilization incompatible with their survival.”`;
const testData2 = `hjasd asdjasd asd asd asd PERSONaLIZED MOTHER NECKLAcE, ...NAME JEWELRy...`;
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

const descriptionTags = (tags, string) => {
  let counter = 0;
  lowerString = string.toLowerCase();
  tags.map(element => {
    if (lowerString.includes(element.toLowerCase())) counter++;
  });
  return counter;
};

descriptionTags(testTag, testData);
descriptionTags(testTag2, testData2);
