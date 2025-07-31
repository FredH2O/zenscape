import MarketingRibbon from "./MarketingRibbon";
import AnimatedQuote from "../AnimatedIcon/AnimatedQuote";
import { shuffle } from "lodash";

const CustomerReviews = [
  {
    title: "Breathtaking Leaves",
    description:
      "I placed my new Monstera by the window, and every morning feels like a small miracle. It’s thriving. So am I.",
    icon: <AnimatedQuote />,
  },
  {
    title: "Rooted in Quality",
    description:
      "Every plant arrived lush, healthy, and well-packed. You can tell care goes into every step of the process.",
    icon: <AnimatedQuote />,
  },
  {
    title: "Indoor Jungle Goals",
    description:
      "From ferns to figs, my flat feels like a rainforest retreat now. These plants are more than décor — they’re joy.",
    icon: <AnimatedQuote />,
  },
  {
    title: "The Gift That Grew",
    description:
      "Bought a snake plant for my mum. She named it Gerald. It’s been six months, and they’re both doing splendidly.",
    icon: <AnimatedQuote />,
  },
  {
    title: "Fast, Friendly, Flourishing",
    description:
      "Delivery was lightning-quick, and everything was so easy to unpack. My balcony looks like a slice of Eden.",
    icon: <AnimatedQuote />,
  },
  {
    title: "Green Companionship",
    description:
      "During a quiet season of life, I bought a fiddle-leaf fig. It’s strange how something so still can bring such peace to a room.",
    icon: <AnimatedQuote />,
  },
  {
    title: "My Kitchen's Heart",
    description:
      "I placed a basil plant on the windowsill — now it’s the soul of my cooking. Every dish tastes brighter, more alive.",
    icon: <AnimatedQuote />,
  },
  {
    title: "A Plant with Personality",
    description:
      "My rubber plant has a lean, a sway, a mood all its own. It greets me every morning like an old friend.",
    icon: <AnimatedQuote />,
  },
  {
    title: "Therapy in a Pot",
    description:
      "Watering my calatheas has become a ritual. Ten quiet minutes, away from screens. I didn’t expect to need it, but I do.",
    icon: <AnimatedQuote />,
  },
  {
    title: "Balcony Bloom",
    description:
      "What was once a grey little slab now bursts with life. My neighbours keep asking where I got my plants — I just smile.",
    icon: <AnimatedQuote />,
  },
  {
    title: "Impressed from First Leaf",
    description:
      "I ordered a peace lily and was stunned by how vibrant it looked on arrival. It felt like it came straight from a forest.",
    icon: <AnimatedQuote />,
  },
  {
    title: "Sunshine Delivered",
    description:
      "Every package I’ve received has been packed with such care. It’s like unwrapping a piece of someone’s garden.",
    icon: <AnimatedQuote />,
  },
  {
    title: "Gift of Growth",
    description:
      "I sent a potted fern to a friend going through a hard time. She said it’s the first thing she’s taken care of in weeks.",
    icon: <AnimatedQuote />,
  },
  {
    title: "Quietly Magical",
    description:
      "There’s something about waking up and seeing new growth. It’s like hope, unfolding one leaf at a time.",
    icon: <AnimatedQuote />,
  },
  {
    title: "A Little More Life",
    description:
      "With just three new plants, my whole flat feels warmer, fuller. Less apartment, more home.",
    icon: <AnimatedQuote />,
  },
];

const CustomerTestimonials = () => {
  const pickedReview = shuffle(CustomerReviews).slice(0, 2);

  return (
    <>
      <MarketingRibbon marketingArray={pickedReview} />
    </>
  );
};

export default CustomerTestimonials;
