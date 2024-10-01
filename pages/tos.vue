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
          Terms and Conditions for {{ config.appName }}
        </h1>

        <pre
          class="leading-relaxed whitespace-pre-wrap"
          :style="{ fontFamily: 'sans-serif' }"
          v-html="tosHtml"
        />
      </div>
    </main>
</template>

<script lang="tsx" setup>
// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://nuxtstarter.ai
// - Name: Nuxt Starter AI
// - Contact information: support@mail.nuxtstarter.ai
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://nuxtstarter.ai/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:


import config from "@/config";

const tosHtml = `
          Terms of Service

Last updated: 26 March 2024

Welcome to Nuxt Starter AI!

By accessing https://nuxtstarter.ai, you agree to comply with these terms and conditions. If you disagree with any part of these terms, please do not use our website.

Description
Nuxt Starter AI provides a JavaScript code boilerplate designed to assist entrepreneurs in launching their startups quickly.

Ownership
When purchasing a package, users gain access to download code for creating apps. Users own the code but are not permitted to resell it. A full refund can be requested within 7 days of purchase.

User Data
We collect and store user data including name, email, and payment information. For more details on how we handle user data, please refer to our Privacy Policy at https://nuxtstarter.ai/privacy-policy.

Non-Personal Data Collection
We may collect non-personal data through the use of web cookies.

Governing Law
These Terms of Service are governed by and construed in accordance with the laws of France.

Updates to the Terms
Users will be notified of any updates to these Terms of Service via email.

If you have any questions or concerns regarding these terms, please contact us at support@mail.nuxtstarter.ai.

Thank you for using Nuxt Starter AI!
          `

</script>
