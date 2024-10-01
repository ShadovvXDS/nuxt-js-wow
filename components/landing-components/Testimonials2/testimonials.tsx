
// Use this object to add an icon to the testimonial (optional) like the Product Hunt logo for instance.

import type { VNode } from "vue";

// Only change the values if you add more referrings sites (currently Twitter & Product Hunt)
const refTypes: {
    productHunt: {
      id: string;
      ariaLabel: string;
      svg: VNode;
    };
    twitter: {
      id: string;
      ariaLabel: string;
      svg: VNode;
    };
    other: { id: string; ariaLabel?: null; svg?: null };
  } = {
    productHunt: {
      id: "product_hunt",
      ariaLabel: "See user review on Product Hunt",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.245 26.256"
          className="w-[18px] h-[18px]"
        >
          <path
            d="M26.254 13.128c0 7.253-5.875 13.128-13.128 13.128S-.003 20.382-.003 13.128 5.872 0 13.125 0s13.128 5.875 13.128 13.128"
            fill="#da552f"
          />
          <path
            d="M14.876 13.128h-3.72V9.2h3.72c1.083 0 1.97.886 1.97 1.97s-.886 1.97-1.97 1.97m0-6.564H8.53v13.128h2.626v-3.938h3.72c2.538 0 4.595-2.057 4.595-4.595s-2.057-4.595-4.595-4.595"
            fill="#fff"
          />
        </svg>
      ),
    },
    twitter: {
      id: "twitter",
      ariaLabel: "See user post on Twitter",
      svg: (
        <svg
          className="w-5 h-5 fill-[#00aCee]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
        </svg>
      ),
    },
    other: { id: "other" },
  };

// The list of your testimonials. It needs 11 items to fill the grid. The last one (11th) is featured on large devices (span 2 columns + big font)
export const list: {
    username?: string;
    name: string;
    text: string;
    type?: (typeof refTypes)[keyof typeof refTypes];
    link?: string;
    img?: string | StaticImageData;
  }[] = [
    {
      // Show @username for social media like Twitter. Does not link anywhere but cool to display
      username: "SaraSmallBiz",
      name: "Sara Mitchell",
      text: " In just minutes, I transformed a basic concept into a nice looking logo, experiencing a level of flexibility to stylize AI illustrations that has truly set my brand apart. 👇 Highly recommended for those seeking a unique and edge in branding!!",
      // use refTypes.other if you don't want to display an icon
      type: refTypes.twitter,
      // A statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
      img: "/assets/testimonials/sara-mitchell.jpg",
    },
    {
      username: "chris_mark",
      name: "Chris Davidson",
      text: "As a marketing professional, Sketch Logo AI is my secret weapon for creating eye-catching visuals. 🚀 The ability to transform images into stylized logos has saved me time and added a creative flair to our campaigns. Love it!",
      type: refTypes.twitter,
      img: "/assets/testimonials/david_marketing.webp",
    },
    {
      username: "CreativeEm",
      name: "Emily Turner",
      text: "I'm in awe of what Sketch Logo AI can do! It's unleashed my creativity by turning my sketches into polished logos. This app is a must-have for anyone looking to express their unique brand identity effortlessly.",
      type: refTypes.productHunt,
      img: "/assets/testimonials/emily.webp",
    },
    {
      name: "Alex Peterson",
      text: "Sketch Logo AI is a dream come true for designers. 🚀 It simplifies the logo creation process, and the generative AI adds an element of surprise and innovation to my projects. It's become my go-to tool!",
      type: refTypes.productHunt,
      img: "/assets/testimonials/alex-peterson.webp",
    },
    {
      username: "StartupMike9492",
      name: "Michael Lawson",
      text: "Sketch Logo AI helped us achieve just that by transforming our images into memorable illustrations. The results exceeded our expectations, and the process was seamless.",
      type: refTypes.twitter,
    },
    {
      username: "linda_rod_soci",
      name: "Linda Rodriguez",
      text: "Sketch Logo AI has taken my branding to the next level! I can effortlessly convert my snapshots into unique illustrations that perfectly match my aesthetic. It's become an integral part of my content creation routine.",
      type: refTypes.productHunt,
    },
    {
      name: "Jason Bennett",
      text: "Sketch Logo AI is a tattoo dream come true! I sketch, and the app turns my ideas into ink-worthy designs. It's my go-to for creating personalized tattoos that truly express who I am. Simple, speedy, and sensational results!",
      type: refTypes.other,
    },
    {
      username: "welcometobriami",
      name: "Brian Thompson",
      text: "As a designer and tattoo enthusiast, Sketch Logo AI has become my playground for creating personalized body art. It effortlessly translates my design ideas into tattoo-ready illustrations, making the entire process exciting and collaborative.",
      type: refTypes.twitter,
      img: "/assets/testimonials/brian.webp",
    },
    {
      username: "TattooArtistElena",
      name: "Elena Martinez",
      text: "Sketch Logo AI has turned my passion for tattoos into a creative adventure. It's not just about getting inked; it's about crafting a visual story on my skin. The app's innovation and user-friendly interface make it a must-have for anyone serious about their ink.",
      type: refTypes.productHunt,
    },
    // The last testimonial is featured on big devices (span 2 columns + big font) 👇
    {
      username: "DesignInkMaya",
      name: "Maya Kowalski",
      text: "Sketch Logo AI has made my tattoo journey even more exciting. I can easily experiment with various design elements and styles, turning my ideas into stunning tattoo possibilities. It's like having a tattoo studio in my pocket! 100% worth it 🚀🚀🚀",
      type: refTypes.twitter,
      img: "/assets/testimonials/maya_ink.webp",
    },
  ];