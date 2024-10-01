<template>
  <section class="relative ">
    <div
      class="absolute top-[-118px] left-0 w-[436px] h-[436px] bg-surface-brand rounded-full blur-[150px] opacity-10 z-10 pointer-events-none">
    </div>
    <div class="relative z-0 mx-8 mt-8 overflow-hidden bg-slate-50 rounded-2xl">
      <div class="flex flex-col gap-3 py-12 mx-auto max-sm:py-6 max-w-7xl">
        <div class="flex flex-col items-center px-8 text-left basis-1/2">
          <div class="w-[60%] max-sm:w-[95%] mb-2">
            <h2 class="text-4xl font-extrabold text-center max-sm:text-2xl text-base-content">
              Ship your startup quickly, speed up your launch, and start
              earning 💰
            </h2>
          </div>
        </div>
        <p
          class="px-8 mx-auto text-base font-normal leading-relaxed text-center text-gray-800 max-sm:text-sm text-opacity-80 font-inter">
          Easily authenticate users, handle payments, add AI tools, and send
          emails quickly. Spend your time growing your startup 📈 instead of
          setting up APIs. Nuxt Starter AI gives you the basic code to start
          fast.
        </p>

        <div>
          <AnimatedTabs v-model="selectedOption" :options="options" class="mt-5 !ml-8"
            subContainerclass="z-10 bg-white" />
          <div class="px-8">
            <ul>

              <ListItem v-for="(item, idx) in selectedOption.content" :key="`${selectedOption.value}-${idx}`"
                :item="item" />
            </ul>
            <div>
              <NSButton v-if="selectedOption?.docsLink" @click="() => router.push(selectedOption.docsLink as string)"
                outlined>
                <span class="flex items-center">
                  See in the Docs
                  <svg xmlns="http://www.w3.org/2000/svg" class="ml-1" width="20" height="20" viewBox="0 0 20 20"
                    fill="none">
                    <path
                      d="M17.3172 10.4423L11.6922 16.0673C11.5749 16.1846 11.4159 16.2505 11.25 16.2505C11.0841 16.2505 10.9251 16.1846 10.8078 16.0673C10.6905 15.95 10.6247 15.791 10.6247 15.6251C10.6247 15.4593 10.6905 15.3002 10.8078 15.1829L15.3664 10.6251H3.125C2.95924 10.6251 2.80027 10.5593 2.68306 10.442C2.56585 10.3248 2.5 10.1659 2.5 10.0001C2.5 9.83434 2.56585 9.67537 2.68306 9.55816C2.80027 9.44095 2.95924 9.3751 3.125 9.3751H15.3664L10.8078 4.81729C10.6905 4.70002 10.6247 4.54096 10.6247 4.3751C10.6247 4.20925 10.6905 4.05019 10.8078 3.93292C10.9251 3.81564 11.0841 3.74976 11.25 3.74976C11.4159 3.74976 11.5749 3.81564 11.6922 3.93292L17.3172 9.55792C17.3753 9.61596 17.4214 9.68489 17.4529 9.76077C17.4843 9.83664 17.5005 9.91797 17.5005 10.0001C17.5005 10.0822 17.4843 10.1636 17.4529 10.2394C17.4214 10.3153 17.3753 10.3842 17.3172 10.4423Z"
                      fill="#00C16A" />
                  </svg>
                </span>
              </NSButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="tsx" setup>
import { ref } from "vue";
import { type Option } from "./types";
import ExternalLink from "@/components/base/ExternalLink/ExternalLink.vue";
import NSButton from "@/components/base/NSButton/NSButton.vue";
import ListItem from "./ListItem.vue";
import AnimatedTabs from "@/components/app/AnimatedTabs/AnimatedTabs.vue";

import { useRouter } from "vue-router";

const options: Option[] = [
  {
    label: "Payments",
    value: "payments",
    docsLink: "/docs/tutorials/payments",
    content: [
      <span>Initiate checkout easily with either Stripe or Lemon Squeezy 🍋</span>,
      <span>Handle either Stripe or Lemon Squeezy webhooks to sell subscriptions, one-time payments... 💳</span>,
      <span>Tips to set up your account with ease & boost customer retention!</span>,
      <span>
        Time Saved:
        <span class="font-semibold text-surface-success">15 hours</span>
      </span>,
      <span class="flex items-center">
        with{" "}
        <img
          class="h-[20px]"
          src="/assets/features-showcase/stripe.svg"
          width={60}
          height={20}
          alt="Stripe logo"
        />
        or
        <img
          class="h-[75px] ml-2"
          src="/assets/features-showcase/lemon-squeezy.svg"
          width={150}
          height={75}
          alt="Lemon Squeezy Logo"
        />{" "}
      </span>,
    ],
  },
  {
    label: "Authentication",
    value: "authetication",
    docsLink: "/docs/tutorials/user-authentication",
    content: [
      <span>Set up magic links for seamless sign-in and sign-up experiences with ease ✨</span>,
      <span>Step-by-step handbook for Google login configuration 🧾</span>,
      <span>Supabase authentication configuration</span>,
      <span>Set up private/protected pages and API calls in seconds!</span>,
      <span>
        Time Saved:{" "}
        <span class="font-semibold text-surface-success">4 hours</span>
      </span>,
      <span class="flex items-center">
        with
        <div class="h-[60px] flex items-center">
          <img
            class="h-[20px]"
            src="/assets/features-showcase/supabase.svg"
            width={40}
            height={40}
            alt="Supabase logo"
          />
        </div>
        <strong>Supabase</strong>
      </span>,
    ],
  },
  {
    label: "SEO",
    value: "seo",
    docsLink: "/docs/features/seo",
    content: [
      <span>
        Ready to ship blog framework 📚 (
        <ExternalLink follow={true} href="https://sketchlogo.ai/blog">
          https://sketchlogo.ai/blog
        </ExternalLink>
        )
      </span>,
      <span>Ready to use meta tags for Google ranking</span>,
      <span>Extensive OpenGraph tags for high-converting social media sharing</span>,
      <span>Sitemap generator for fast Google indexing</span>,
      <span>Structured data markup for Rich Snippets for better SEO </span>,
      <span>SEO-optimized UI components</span>,
      <span>
        Time Saved:{" "}
        <span class="font-semibold text-surface-success">8 hours</span>
      </span>,
    ],
  },
  {
    label: "Database",
    value: "database",
    docsLink: "/docs/features/database",
    content: [
      <span>Ready to build app tables in Postgres</span>,
      <span>Simplify your life with Supabase plugins</span>,
      <span class="flex items-center">
        with{" "}
        <div class="h-[60px] flex items-center">
          <img
            class="h-[20px]"
            src="/assets/features-showcase/supabase.svg"
            width={40}
            height={40}
            alt="Supabase logo"
          />
        </div>{" "}
        <strong>Supabase</strong>
      </span>,
    ],
  },
  {
    label: "AI",
    value: "ai",
    docsLink: "/docs/features/ai/replicate",
    content: [
      <span>Setup AI integrations in seconds with AI providers such as RunPod, Replicate, OpenAI, and others... ✨</span>,
      <span>Already implemented retry mechanism to manage failed AI calls with ease!</span>,
      <span>
        Time Saved:{" "}
        <span class="font-semibold text-surface-success">8 hours</span>
      </span>,
    ],
  },
  {
    label: "Style",
    value: "style",
    docsLink: "/docs/hero-1",
    content: [
      <span>Ready to use components, animations, and sections for high conversion rates!</span>,
      <span>No more overspending hours building custom components</span>,
      <span>Global configuration for the theme!</span>,
      <span>
        Time Saved:{" "}
        <span class="font-semibold text-surface-success">10+ hours</span> of
        challenges and frustrations...
      </span>,
      <span class="flex items-center">
        with{" "}
        <div class="h-[60px] flex items-center">
          <img
            class="h-[20px]"
            src="/assets/features-showcase/tailwind.svg"
            width={40}
            height={40}
            alt="Tailwind logo"
          />
        </div>{" "}
        <strong>Tailwind</strong>
      </span>,
    ],
  },
  {
    label: "Emails",
    value: "emails",
    docsLink: "/docs/features/email",
    content: [
      <span>Send transactional emails automatically! 📨</span>,
      <span>DNS configuration to prevent emails from ending up in spam folders</span>,
      <span>(DKIM, DMARC, SPF in a subdomain)</span>,
      <span>Ready to use webhook to receive and forward emails</span>,
      <span>
        Time Saved:{" "}
        <span class="font-semibold text-surface-success">3 hours</span>
      </span>,
      <span>Frustration: 0</span>,
    ],
  },
  {
    label: "More",
    value: "more",
    content: [
      <span>Guidelines for highly converting landing page content!</span>,
      <span>Collect emails to the waitlist from day 1 before launching your product.</span>,
      <span>Generate terms and privacy policy with AI in seconds</span>,
      <span>Copy-paste code templates for faster development</span>,
      <span>Straightforward tutorials</span>,
      <span class="flex items-center">
        Time Saved:{" "}
        <span class="flex items-center font-semibold text-surface-success">
          <svg
            class="ml-1 mr-1"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="50"
            viewBox="0 0 1280.000000 640.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
              fill="#55B685"
              stroke="none"
            >
              <path
                fill="#55B685"
                d="M9638 6075 c-772 -93 -1504 -467 -2317 -1184 -198 -174 -334 -303
-657 -624 -230 -229 -264 -258 -281 -249 -11 6 -100 93 -199 194 -1144 1171
-1886 1664 -2745 1822 -560 103 -1141 38 -1669 -186 -885 -376 -1533 -1167
-1714 -2093 -41 -207 -51 -318 -51 -565 0 -392 54 -719 176 -1065 338 -964
1145 -1627 2164 -1779 634 -95 1337 26 1957 335 243 121 448 250 703 441 321
239 556 450 1061 950 176 175 327 318 334 318 8 0 77 -66 154 -146 172 -179
592 -584 770 -743 820 -731 1442 -1055 2226 -1163 58 -8 194 -12 350 -12 213
0 279 4 400 23 650 100 1205 379 1659 832 457 457 742 1045 823 1699 19 155
16 563 -6 720 -78 561 -275 1067 -568 1457 -95 128 -294 332 -425 435 -364
290 -837 486 -1378 570 -172 26 -594 34 -767 13z m-6331 -1199 c336 -71 676
-233 1010 -481 119 -88 297 -234 413 -339 146 -133 880 -850 880 -860 0 -16
-640 -649 -795 -788 -492 -438 -947 -715 -1375 -839 -202 -58 -321 -74 -565
-74 -190 0 -235 3 -334 23 -590 119 -1022 504 -1210 1077 -160 489 -130 953
90 1385 252 496 706 824 1266 915 63 10 146 13 293 10 172 -3 225 -8 327 -29z
m6863 19 c327 -46 605 -171 841 -378 439 -384 649 -1063 517 -1677 -134 -625
-615 -1131 -1229 -1295 -148 -39 -279 -55 -454 -55 -310 0 -559 62 -870 215
-327 160 -642 391 -1037 761 -248 232 -743 719 -746 734 -3 16 466 495 668
681 682 630 1221 933 1800 1014 130 18 382 18 510 0z"
              />
            </g>
          </svg>{" "}
          hours
        </span>
      </span>,
    ],
  },
];

const selectedOption = ref<Option>(options[0]);
const router = useRouter();
</script>