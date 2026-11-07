import type { StaticImageData } from "next/image";

import christineAfter from "@/assets/images/christine-after.jpg";
import christineBefore from "@/assets/images/christine-before.jpg";
import activewearBarbell from "@/assets/images/community-activewear-barbell.jpg";
import activewearBench from "@/assets/images/community-activewear-bench.jpg";
import activewearKneeling from "@/assets/images/community-activewear-kneeling.jpg";
import activewearLaughing from "@/assets/images/community-activewear-laughing.jpg";
import activewearStanding from "@/assets/images/community-activewear-standing.jpg";
import beachGroup from "@/assets/images/community-beach-group.jpg";
import beachRocks from "@/assets/images/community-beach-rocks.jpg";
import beachWaves from "@/assets/images/community-beach-waves.jpg";
import shootPoster from "@/assets/images/community-shoot-poster.jpg";
import swimArms from "@/assets/images/community-studio-swim-arms.jpg";
import swimBack from "@/assets/images/community-studio-swim-back.jpg";
import swimGroup from "@/assets/images/community-studio-swim-group.jpg";
import swimLaughing from "@/assets/images/community-studio-swim-laughing.jpg";
import fionDeadlift from "@/assets/images/fion-deadlift-competition.jpg";
import fionPortrait from "@/assets/images/fion-portrait.jpg";
import melbourneGym from "@/assets/images/melbourne-gym.jpg";
import sheryceAfter from "@/assets/images/sheryce-after.jpg";
import sheryceBefore from "@/assets/images/sheryce-before.jpg";
import tappingStudio from "@/assets/images/tapping-studio.jpg";

export type SiteImage = { src: StaticImageData; alt: string };

/**
 * Every photo on the site, with its alt text.
 * Before/after photos have the words "Before"/"After" baked into the image, so the
 * surrounding UI should label them too (for screen readers and consistency).
 */
export const images = {
  fionPortrait: { src: fionPortrait, alt: "Fion Chan, smiling, in a white embroidered top" },
  fionDeadlift: {
    src: fionDeadlift,
    alt: "Black-and-white photo of Fion setting up a heavy deadlift at a powerlifting competition",
  },
  tappingStudio: {
    src: tappingStudio,
    alt: "Inside the private Tapping studio: a power rack, cable machine, benches and rubber flooring",
  },
  melbourneGym: {
    src: melbourneGym,
    alt: "Fion's former Melbourne gym, with a squat rack, coloured bumper plates and a wall of dumbbells",
  },
  activewearBarbell: {
    src: activewearBarbell,
    alt: "Eight women from the FC Fitness community in activewear, posing together around a loaded barbell",
  },
  activewearKneeling: {
    src: activewearKneeling,
    alt: "FC Fitness clients in matching activewear against a concrete wall, one kneeling by a weight plate",
  },
  activewearStanding: {
    src: activewearStanding,
    alt: "Seven FC Fitness clients in activewear standing arm in arm against a concrete wall",
  },
  activewearBench: {
    src: activewearBench,
    alt: "FC Fitness clients in activewear sitting together on a bench, smiling at the camera",
  },
  activewearLaughing: {
    src: activewearLaughing,
    alt: "A group of FC Fitness clients in activewear laughing together during the community photoshoot",
  },
  beachGroup: {
    src: beachGroup,
    alt: "Six women from the FC Fitness community in swimwear, arm in arm on the beach",
  },
  beachRocks: {
    src: beachRocks,
    alt: "FC Fitness community members in swimwear sitting on coastal rocks",
  },
  beachWaves: {
    src: beachWaves,
    alt: "FC Fitness community members laughing as waves wash around their feet",
  },
  swimGroup: {
    src: swimGroup,
    alt: "Six FC Fitness clients in black swimwear posing together in a photo studio",
  },
  swimLaughing: {
    src: swimLaughing,
    alt: "FC Fitness clients in swimwear laughing together in a photo studio",
  },
  swimBack: {
    src: swimBack,
    alt: "FC Fitness clients in swimwear posing with their backs to the camera in a photo studio",
  },
  swimArms: {
    src: swimArms,
    alt: "FC Fitness clients in swimwear with their arms around each other in a photo studio",
  },
  shootPoster: {
    src: shootPoster,
    alt: "Behind the scenes at the community photoshoot: a client pressing two dumbbells overhead",
  },
  sheryceBefore: { src: sheryceBefore, alt: "Sheryce before: a mirror selfie at the start of her training" },
  sheryceAfter: { src: sheryceAfter, alt: "Sheryce after losing more than 60kg: a mirror selfie in activewear" },
  christineBefore: {
    src: christineBefore,
    alt: "Christine before: front, back and side views at the start of her training",
  },
  christineAfter: {
    src: christineAfter,
    alt: "Christine after two years: front, back and side views showing her body recomposition",
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;

/** Community photoshoot gallery, in display order (activewear first, then swim and beach). */
export const communityGallery: ImageKey[] = [
  "activewearBarbell",
  "beachGroup",
  "activewearLaughing",
  "swimGroup",
  "beachWaves",
  "activewearStanding",
  "swimLaughing",
  "activewearBench",
  "beachRocks",
  "activewearKneeling",
  "swimBack",
  "swimArms",
];

export const communityVideo = {
  src: "/video/community-shoot.mp4",
  loop: "/video/community-shoot-loop.mp4",
  poster: images.shootPoster,
  durationSeconds: 30,
  title: "Behind the scenes at the FC Fitness community photoshoot",
};
