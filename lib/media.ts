export type ImageAsset = {
  src: string;
  alt: string;
  /** CSS object-position — the focal point to keep when cropping. */
  position?: string;
};

export type VideoAsset = {
  src: string;
  poster: string;
};

const img = (file: string, alt: string, position?: string): ImageAsset => ({
  src: `/assets/images/${file}.jpg`,
  alt,
  position,
});

export const images = {
  zenCourt: img("zen-court", "Stone-clad house above a still reflecting pool and gravel garden", "50% 40%"),
  stoneVillaDusk: img("stone-villa-dusk", "Two-storey limestone villa with warm interior light at dusk", "50% 45%"),
  timberFacade: img("timber-facade", "Dark timber facade with uplit planting at the entrance", "50% 50%"),
  gardenCottage: img("garden-cottage", "White cottage with a black roof behind a planted front garden", "50% 45%"),
  lanternSteps: img("lantern-steps", "Lit stone steps rising through planting to a timber-clad house", "50% 55%"),
  firepitTerrace: img("firepit-terrace", "Terrace with a sunken fire pit in front of a glazed villa", "50% 60%"),
  litGardenPath: img("lit-garden-path", "Curving garden path lit by lanterns towards a large stone house", "50% 45%"),
  colonialHouse: img("colonial-house", "Pale colonial-style house with a columned porch", "50% 55%"),
  travertineTower: img("travertine-tower", "Tall travertine-clad volume with wide glazing and a sculpted pine", "50% 45%"),
  whiteGables: img("white-gables", "White gabled house with black windows and a clipped lawn", "50% 50%"),
  limestoneWall: img("limestone-wall", "Textured limestone wall and wide steps of a contemporary home", "60% 50%"),
  glassStoneHouse: img("glass-stone-house", "Double-height glazing framed in stone, lit steps below", "50% 50%"),
  archedResidenceNight: img("arched-residence-night", "Classical residence with a tall arched window lit at blue hour", "50% 45%"),
  darkModernVilla: img("dark-modern-villa", "Dark cantilevered villa with white steps at dusk", "50% 50%"),
  interiorSunset: img("interior-sunset", "Double-height living room facing a sunset through full-height glass", "50% 60%"),
  interiorIvory: img("interior-ivory", "Ivory living space with low sofas and a floating staircase", "50% 55%"),
  nightVilla: img("night-villa", "Contemporary villa lit at night above a pale stone forecourt", "50% 45%"),
  interiorAtrium: img("interior-atrium", "Bright entrance atrium with a staircase and arched windows", "50% 45%"),
  archedResidenceDay: img("arched-residence-day", "Cream classical residence with an arched window in daylight", "50% 45%"),
  travertineEntrance: img("travertine-entrance", "Travertine path leading to a timber-soffit entrance", "50% 55%"),
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;

export const videos = {
  villaDusk: {
    src: "/assets/video/villa-dusk.mp4",
    poster: "/assets/video/villa-dusk-poster.jpg",
  },
  construction: {
    src: "/assets/video/construction-to-completion.mp4",
    poster: "/assets/video/construction-to-completion-poster.jpg",
  },
  desertResidence: {
    src: "/assets/video/desert-residence.mp4",
    poster: "/assets/video/desert-residence-poster.jpg",
  },
} satisfies Record<string, VideoAsset>;
