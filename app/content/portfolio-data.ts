export type PhotoCategory =
  | "wedding"
  | "prewedding"
  | "family"
  | "editorial"
  | "portrait"
  | "live";

export type PhotoItem = {
  id: string;
  src: string;
  alt: string;
  category: PhotoCategory;
  title: string;
  label: string;
  width: number;
  height: number;
};

export type VideoItem = {
  id: string;
  title: string;
  description: string;
  label: string;
  thumbnailAspect: string;
  videoSrc: string;
  previewTime: number;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const staticAssetPath = (folder: string, fileName: string) =>
  `${basePath}/${folder}/${encodeURIComponent(fileName)}`;
const optimizedPhotoPath = (fileName: string) =>
  staticAssetPath("portfolio", fileName.replace(/\.(png|jpe?g)$/i, ".jpg"));
const videoPath = (fileName: string) => staticAssetPath("videos", fileName);

const photo = (
  id: string,
  fileName: string,
  category: PhotoCategory,
  title: string,
  label: string,
  width: number,
  height: number,
): PhotoItem => ({
  id,
  src: optimizedPhotoPath(fileName),
  alt: `NOKAT art ${title.toLowerCase()}.`,
  category,
  title,
  label,
  width,
  height,
});

export const brandLogoSrc = staticAssetPath("brand", "perfil.png");
export const personalPortraitSrc = staticAssetPath("about", "fotoperfilpessoal.jpeg");
export const heroVideoSrc = videoPath("hero-background.mp4");

export const photos: PhotoItem[] = [
  photo(
    "wedding-entrance",
    "ArmsHotel.nokatart_14.jpg",
    "wedding",
    "Guests arrive and the day opens in quiet light.",
    "Wedding Day",
    5293,
    3529,
  ),
  photo(
    "wedding-portrait",
    "ArmsHotel.nokatart_31.jpg",
    "wedding",
    "A portrait held after the vows, still and unforced.",
    "Wedding Portrait",
    3849,
    5774,
  ),
  photo(
    "ceremony-light",
    "ArmsHotel.nokatart_7.jpg",
    "wedding",
    "Ceremony light held like a memory before it fades.",
    "Ceremony Light",
    6000,
    4000,
  ),
  photo(
    "wedding-morning",
    "casamento noiva.jpg",
    "wedding",
    "A family glance at the threshold before the celebration unfolds.",
    "Wedding Morning",
    1917,
    884,
  ),
  photo(
    "wedding-afterglow",
    "casamento noiva 2.jpg",
    "wedding",
    "A brighter breath of joy carried into the afternoon.",
    "After The Ceremony",
    2102,
    970,
  ),
  photo(
    "prewedding-close",
    "prewefing casamento.jpg",
    "prewedding",
    "A close frame where the whole world narrows to two people.",
    "Pre-Wedding",
    3773,
    5659,
  ),
  photo(
    "prewedding-kiss",
    "prewedingcasamento.jpg",
    "prewedding",
    "A softer black-and-white pause between breath and touch.",
    "Pre-Wedding",
    4000,
    5328,
  ),
  photo(
    "prewedding-movement",
    "IMG_1153-2.jpg",
    "prewedding",
    "Motion, shadow, and the little wildness before the promise.",
    "Pre-Wedding",
    3827,
    5097,
  ),
  photo(
    "prewedding-roses",
    "IMG_1220.jpg",
    "prewedding",
    "Roses forward, love just beyond them.",
    "Pre-Wedding",
    3626,
    4830,
  ),
  photo(
    "prewedding-laughter",
    "IMG_1351.jpg",
    "prewedding",
    "A loose, laughing frame that refuses to feel staged.",
    "Pre-Wedding",
    3565,
    4748,
  ),
  photo(
    "prewedding-tree-embrace",
    "prewedding-embrace.jpg",
    "prewedding",
    "A closer embrace shaped by bark, shadow, and breath.",
    "Pre-Wedding",
    4000,
    5328,
  ),
  photo(
    "wedding-party",
    "IMG_4560.png",
    "wedding",
    "The whole wedding party gathered in a single quiet frame.",
    "Wedding Party",
    2556,
    1179,
  ),
  photo(
    "wedding-nearness",
    "IMG_4561.jpg",
    "wedding",
    "A private laugh that barely notices the camera.",
    "Quiet Nearness",
    544,
    1179,
  ),
  photo(
    "wedding-arrival",
    "IMG_4574.jpg",
    "wedding",
    "Arrival, nerves, and children already inside the story.",
    "Arrival",
    1920,
    886,
  ),
  photo(
    "little-gentleman",
    "IMG_4576.jpg",
    "wedding",
    "A smaller guest holding the seriousness of the day.",
    "Little Gentleman",
    1878,
    866,
  ),
  photo(
    "ceremony-vows",
    "IMG_4578.jpg",
    "wedding",
    "The vows seen from the room, not just the altar.",
    "Ceremony Vows",
    2075,
    957,
  ),
  photo(
    "small-witness",
    "IMG_4583.jpg",
    "wedding",
    "A small face carrying the gravity of the moment.",
    "Small Witness",
    2062,
    951,
  ),
  photo(
    "bridal-circle",
    "IMG_4584.jpg",
    "wedding",
    "Bridal light and friendship held in one easy glance.",
    "Bridal Circle",
    2102,
    970,
  ),
  photo(
    "bridesmaids-outside",
    "IMG_4585.jpg",
    "wedding",
    "A brighter pause before the day folds into the ceremony.",
    "Bridesmaids",
    2090,
    963,
  ),
  photo(
    "afterglow-portrait",
    "IMG_4586.jpg",
    "wedding",
    "A softer portrait where laughter arrives before posing does.",
    "Afterglow Portrait",
    2069,
    954,
  ),
  photo(
    "balcony-moment",
    "IMG_4587.jpg",
    "wedding",
    "A turn toward the balcony and the people already waiting.",
    "Balcony Moment",
    1827,
    843,
  ),
  photo(
    "family-table",
    "IMG_4591.jpg",
    "wedding",
    "A table-side greeting that lands like family memory.",
    "Family Table",
    1909,
    881,
  ),
  photo(
    "family-embrace",
    "IMG_4592.jpg",
    "wedding",
    "Three generations held close before the next scene begins.",
    "Family Embrace",
    1884,
    869,
  ),
  photo(
    "family-gathering",
    "@nokatart.niversofia-2023_173.jpg",
    "family",
    "A family portrait held with warmth and ease.",
    "Family Moment",
    5151,
    3434,
  ),
  photo(
    "maternity-shoreline",
    "A&V nokatart.2025-173.JPG",
    "family",
    "A quieter maternity portrait held against the shoreline and wind.",
    "Seaside Maternity",
    7227,
    4818,
  ),
  photo(
    "maternity-embrace",
    "A&V nokatart.2025-191.JPG",
    "family",
    "An embrace that keeps the whole waiting season close and simple.",
    "Waiting Together",
    5032,
    7548,
  ),
  photo(
    "maternity-distance",
    "A&V nokatart.2025-286.JPG",
    "family",
    "A more distant frame where the couple and the sea share the same quietness.",
    "Ocean Distance",
    4918,
    7377,
  ),
  photo(
    "maternity-laughter",
    "A&V nokatart.2025-301.JPG",
    "family",
    "A lighter close frame, full of ease, skin, and the feeling of arrival.",
    "Soft Arrival",
    7728,
    5152,
  ),
  photo(
    "maternity-profile",
    "gravidapraia.jpg",
    "family",
    "A standing portrait where the body, the partner, and the horizon stay in balance.",
    "Maternity Portrait",
    4818,
    7227,
  ),
  photo(
    "iceland-stillness",
    "Icelandjune2025-45.JPG",
    "editorial",
    "A quieter editorial frame carried by wind, distance, and open coast.",
    "Editorial Frame",
    1920,
    2400,
  ),
  photo(
    "iceland-portrait",
    "Icelandjune2025-46.JPG",
    "editorial",
    "A softer portrait held against northern light and weather.",
    "Northern Portrait",
    1920,
    2400,
  ),
  photo(
    "iceland-horizon",
    "Icelandjune2025-64.JPG",
    "editorial",
    "A wider frame where figure, place, and atmosphere stay in balance.",
    "Open Horizon",
    2200,
    1238,
  ),
  photo(
    "limerick-portrait",
    "Limerick-Chris22feb2025-25.jpg",
    "portrait",
    "A portrait shaped by quieter city light and an easy stillness.",
    "City Portrait",
    3780,
    2835,
  ),
  photo(
    "limerick-light",
    "Limerick-Chris22feb2025-40.jpg",
    "portrait",
    "A warmer frame where portrait and evening atmosphere hold together.",
    "Limerick Light",
    5163,
    3872,
  ),
  photo(
    "artist-portrait",
    "@nokatartukbsb2023_107.jpg",
    "portrait",
    "A portrait built from shadow, structure, and presence.",
    "Editorial Portrait",
    3817,
    5726,
  ),
  photo(
    "band-portrait",
    "@nokatartukbsb2023_94.jpg",
    "portrait",
    "An informal band portrait before the room grows loud.",
    "Band Portrait",
    5781,
    3854,
  ),
  photo(
    "concert-blue",
    "foto show.jpg",
    "live",
    "Stage light and movement meeting in the same frame.",
    "Live Session",
    6000,
    4000,
  ),
  photo(
    "concert-noir",
    "foto show 2.jpg",
    "live",
    "A darker live frame carried by breath and rhythm.",
    "Concert Night",
    6000,
    4000,
  ),
  photo(
    "acoustic-session",
    "armshoteljune08.nokatart_2.jpg",
    "live",
    "An acoustic performance shaped by grain and restraint.",
    "Acoustic Session",
    5017,
    3345,
  ),
  photo(
    "concert-crowd",
    "@nokatartUKDESPEDIDA2023_7.jpg",
    "live",
    "A crowd, stage haze, and light cutting through the room.",
    "Concert Crowd",
    5579,
    3719,
  ),
  photo(
    "pub-session",
    "dannimikethepies.nokatart_33.jpg",
    "live",
    "A pub session shaped by closeness, grain, and song.",
    "Pub Session",
    5735,
    3823,
  ),
  photo(
    "quiet-portrait",
    "26 dec 2026 Ademir_28.jpg",
    "portrait",
    "A quieter portrait drifting between stillness and smoke.",
    "Quiet Portrait",
    6000,
    4000,
  ),
  photo(
    "stage-detail",
    "IMG_4594.jpg",
    "live",
    "A stage-detail frame of keys, light, and drifting color.",
    "Stage Detail",
    1932,
    891,
  ),
];

const photoById = Object.fromEntries(photos.map((item) => [item.id, item])) as Record<
  string,
  PhotoItem
>;

export const featuredPhotos: PhotoItem[] = [
  photoById["wedding-entrance"],
  photoById["wedding-portrait"],
  photoById["ceremony-light"],
  photoById["prewedding-close"],
  photoById["prewedding-kiss"],
];

export const galleryPhotos: PhotoItem[] = [
  photoById["wedding-morning"],
  photoById["wedding-afterglow"],
  photoById["prewedding-movement"],
  photoById["prewedding-roses"],
  photoById["prewedding-laughter"],
  photoById["prewedding-tree-embrace"],
  photoById["wedding-party"],
  photoById["wedding-nearness"],
  photoById["wedding-arrival"],
  photoById["little-gentleman"],
  photoById["ceremony-vows"],
  photoById["small-witness"],
  photoById["bridal-circle"],
  photoById["bridesmaids-outside"],
  photoById["afterglow-portrait"],
  photoById["balcony-moment"],
  photoById["family-table"],
  photoById["family-embrace"],
];

export const otherStoriesPhotos: PhotoItem[] = [
  photoById["maternity-shoreline"],
  photoById["limerick-light"],
  photoById["limerick-portrait"],
  photoById["maternity-embrace"],
  photoById["iceland-portrait"],
  photoById["maternity-distance"],
  photoById["maternity-laughter"],
  photoById["maternity-profile"],
  photoById["iceland-stillness"],
  photoById["iceland-horizon"],
  photoById["family-gathering"],
  photoById["artist-portrait"],
  photoById["band-portrait"],
  photoById["concert-blue"],
  photoById["concert-noir"],
  photoById["acoustic-session"],
  photoById["concert-crowd"],
  photoById["pub-session"],
  photoById["quiet-portrait"],
  photoById["stage-detail"],
];

export const galleryCategories: Array<{
  value: PhotoCategory | "all";
  label: string;
}> = [
  { value: "all", label: "All" },
  { value: "wedding", label: "Wedding Days" },
  { value: "prewedding", label: "Pre-Weddings" },
];

export const videos: VideoItem[] = [
  {
    id: "insidecalm-reel",
    title: "Hidden Realms",
    description: "A softer wedding reel built around glances, texture, and the feeling of being quietly inside the day.",
    label: "Highlight Film",
    thumbnailAspect: "aspect-[16/10]",
    videoSrc: videoPath("hidden-realms.mp4"),
    previewTime: 2.8,
  },
  {
    id: "main-wedding-film",
    title: "Ceremony Story",
    description: "A fuller wedding film shaped by light, vows, and the spaces where emotion settles in.",
    label: "Main Film",
    thumbnailAspect: "aspect-[16/10]",
    videoSrc: videoPath("ceremony-story.mp4"),
    previewTime: 3.2,
  },
  {
    id: "wedding-movie",
    title: "Evening Afterglow",
    description: "A quieter wedding film of speeches, movement, and the late warmth that stays after the ceremony.",
    label: "Wedding Film",
    thumbnailAspect: "aspect-[16/10]",
    videoSrc: videoPath("evening-afterglow.mp4"),
    previewTime: 2.4,
  },
];

