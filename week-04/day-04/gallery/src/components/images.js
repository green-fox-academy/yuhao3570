const IMAGES = [
    {
        title: 'Niagara Falls, Canada',
        description: 'Whether observed day or night, from a viewing platform or from a boat, the 3,160 tons of water that flow over Niagara Falls every second are a sight to be seen.',
        src: 'images/niagara-falls-canada.jpg'
    },
    {
        title: 'The Grand Canyon, Arizona, USA',
        description: 'The Grand Canyon is 277 miles long, and, at its widest point, 18 miles across. You can explore various areas of the massive canyon at the Grand Canyon National Park. ',
        src: 'images/the-grand-canyon-arizona-usa.jpg'
    },
    {
        title: 'Peyto Lake, Banff National Park, Canada',
        description: "It's hard to believe that Peyto Lake's sparkling turquoise water is natural, but the color actually comes from significant amounts of glacial flour (tiny rock particles that result from glacial erosion) that are deposited into the water.",
        src: 'images/peyto-lake-banff-national-park-canada.jpg'
    },
    {
        title: 'Cliffs of Moher, Ireland',
        description: "Located on the west coast of Ireland, the Cliffs of Moher reach a whopping 702 feet at their highest point.",
        src: 'images/cliffs-of-moher-ireland.jpg'
    },
    {
        title: 'Mount Bromo, Indonesia',
        description: "Mount Bromo, the only active volcano on the island of Java, is known for its unparalleled views of the sunrise.",
        src: 'images/mount-bromo-indonesia.jpg'
    },
    {
        title: 'Spencer Lake, Australia',
        description: "This bubblegum pink lake in Australia may not seem natural, but it actually gets its neon colorfrom a chemical called carotene, which is produced by algae.",
        src: 'images/spencer-lake-australia.jpg'
    },
    {
        title: 'Salar de Uyuni, Bolivia',
        description: "Salar de Uyuni is the world's largest salt flat, located in southwestern Bolivia. All it takes is a thin layer of water on the flat's surface to create a mirror-like appearance on the ground that extends into the horizon.  ",
        src: 'images/salar-de-uyuni-bolivia.jpg'
    },
    {
        title: 'Ha Long Bay, Vietnam',
        description: "Vietnam's Ha Long Bay is a UNESCO World Heritage Site, and with good reason. The bay is dotted with approximately 1,600 islands and inlets, including many massive greenery-covered limestone pillars.",
        src: 'images/ha-long-bay-vietnam.jpg'
    },
    {
        title: 'The Dead Sea, Israel',
        description: "Due to its exceptionally high salt content, there are no animals or life forms besides bacteria in Israel's Dead Sea. You can also easily float in the salt-filled waters, and the mud in the area is said to have healing qualities.",
        src: 'images/the-dead-sea-israel.jpg'
    },
    {
        title: 'Zhangjiajie National Forest Park, China',
        description: "Zhangjiajie, China, is not for those who fear heights. The incredible forest is said to have inspired the stunning scenery depicted in \"Avatar.\"",
        src: 'images/zhangjiajie-national-forest-park-china.jpg'
    },
    {
        title: 'Arches National Park, Utah, USA',
        description: "Utah is known for its beautiful red rock formations, specifically at Arches National Park. There are 2,000 named arches in the park, although about one collapses per year due to natural causes.",
        src: 'images/arches-national-park-utah-usa.jpg'
    },
    {
        title: "Uluru (Ayer's Rock), Australia",
        description: "Uluru, also known as Ayer's Rock, is located in a remote area in Australia's Northern Territory, home to the Anangu Aboriginal people. The giant sandstone formation has a circumference of about 5.8 miles.",
        src: 'images/uluru-ayers-rock-australia.jpg'
    },
    {
        title: 'The Galapagos Islands, Ecuador',
        description: "Perhaps best known for their impact on Charles Darwin's theory of evolution, the Galapagos Islands off the coast of Ecuador are home to a unique enclave of species who have survived the Islands' harsh conditions.",
        src: 'images/the-galapagos-islands-ecuador.jpg'
    },
    {
        title: 'Yellowstone National Park, Wyoming, USA',
        description: "From mud pots to hot springs to the famous Old Faithful geyser, Yellowstone National Park is full of natural wonder. Visitors have been enjoying all Yellowstone has to offer since it was established as the world's first national park in 1872.",
        src: 'images/yellowstone-national-park-wyoming-usa.jpg'
    },
    {
        title: 'Pamukkale, Turkey',
        description: "It's no mystery why these travertine stone steps and tiered pools are called Pamukkale, which translates to \"cotton castle\" in Turkish.",
        src: 'images/pamukkale-turkey.jpg'
    },
    {
        title: 'Iguazu Falls, Argentina and Brazil',
        description: "The Iguazu Falls, which span Argentina and Brazil, comprise the largest system of waterfalls in the world.",
        src: 'images/iguazu-falls-argentina-and-brazil.jpg'
    },
    {
        title: 'Verdon Gorge, France',
        description: "Located in the Verdon River Canyon in southeastern France, Verdon Gorge is known for its unique blue-green waters that are perfect for kayaking, swimming, and other water activities.",
        src: 'images/verdon-gorge-france.jpg'
    },
    {
        title: 'Mud volcanoes, Gobustan, Azerbaijan',
        description: "Azerbaijan's sedimentary volcanoes, commonly known as mud volcanoes, are a mesmerizing geological phenomenon in which pockets of gas underground force their way to the Earth's surface and consequently bubble up.",
        src: 'images/mud-volcanoes-gobustan-azerbaijan.jpg'
    },
    {
        title: 'Pulpit Rock, Norway',
        description: "Pulpit Rock looms almost 2,000 feet over the Lysefjord in Norway. Geologists speculate that the giant mountain plateau was shaped by ice expansion about 10,000 years ago.",
        src: 'images/pulpit-rock-norway.jpg'
    },
    {
        title: 'Sequoia National Park, California, USA',
        description: "Northern California's famous redwood trees can be found in Sequoia National Park. The park is home to about 8,000 Sequoias, which are the largest and longest-living trees on Earth. ",
        src: 'images/sequoia-national-park-california-usa.jpg'
    },
    {
        title: 'El Yunque National Forest, Puerto Rico',
        description: "Puerto Rico's El Yunque National Forest, located just outside of San Juan, is one of the most biologically diverse of all of the US' national forests.",
        src: 'images/el-yunque-national-forest-puerto-rico.jpg'
    },
    {
        title: 'The Sahara Desert, Africa',
        description: "The largest hot desert in the world has an area of 3.552 million square miles, and spans 10 countries — Algeria, Chad, Egypt, Libya, Mali, Mauritania, Morocco, Niger, Sudan, and Tunisia.",
        src: 'images/the-sahara-desert-africa.jpg'
    },
    {
        title: 'The Blyde River Canyon, South Africa',
        description: "View South Africa from over 2,600 feet in the air from a hike in the Blyde River Canyon. The area is known for its colorful rock formations and lush greenery.",
        src: 'images/the-blyde-river-canyon-south-africa.jpg'
    },
    {
        title: 'Marble Caves, Chile',
        description: "These caves, formed by thousands of years of erosion, are also called the \"Marble Cathedral.\"",
        src: 'images/marble-caves-chile.jpg'
    },
    {
        title: 'The Matterhorn, Switzerland',
        description: "The Matterhorn is more than just a classic ride at Disneyland. The actual mountain, located in Switzerland, is known for its \"chiseled rock pyramid\" look, after which the Disney roller coaster was modeled. ",
        src: 'images/the-matterhorn-switzerland.jpg'
    },
    {
        title: 'Victoria Falls, Zambia and Zimbabwe',
        description: "Victoria Falls sits on the border between Zambia and Zimbabwe, where a giant curtain of water  often creates rainbows amid the mist and surrounding rainforest. ",
        src: 'images/victoria-falls-zambia-and-zimbabwe.jpg'
    },
]

export default IMAGES;