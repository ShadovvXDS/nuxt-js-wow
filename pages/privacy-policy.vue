<template>
    <main class="max-w-xl mx-auto">
      <div class="p-5">
        <Link href="/" class="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 class="text-3xl font-extrabold pb-6">
          Privacy Policy for {{ config.appName }}
        </h1>

        <pre
          class="leading-relaxed whitespace-pre-wrap"
          :style="{ fontFamily: 'sans-serif' }"
          v-html="privacyPolicyText"
        />
      </div>
    </main>
</template>

<script lang="tsx" setup>
// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://nuxtstarter.ai
// - Name: Nuxt Starter AI
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: support@mail.nuxtstarter.ai

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:
import config from "@/config";

const privacyPolicyText = `Privacy Policy

Last updated: 26 March 2024

Welcome to Nuxt Starter AI!

At Nuxt Starter AI, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website https://nuxtstarter.ai.

Information We Collect
We collect the following types of user data:
Name
Email
Payment information
Non-Personal Data Collection
We may collect non-personal data through the use of web cookies.

Purpose of Data Collection
We collect user data for the purpose of order processing.

Data Sharing
We do not share the collected data with any other parties.

Children's Privacy
We do not collect any data from children under the age of 13.

Updates to the Privacy Policy
Users will be notified of any updates to this Privacy Policy via email.

If you have any questions or concerns regarding our Privacy Policy, please contact us at support@mail.nuxtstarter.ai.

Thank you for choosing Nuxt Starter AI!`

</script>
