<template>
  <table className="table w-full">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th v-for="column in columns" className="text-xs sm:text-base" :key="column">{{ column }}</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

      <tr v-for="marketingItem in marketingItems" :key="marketingItem.title"
        className="hover:bg-base-100 text-xs sm:text-sm">
        <th>
          <label>
            <input type="checkbox" className="checkbox w-1 h-1 sm:w-4 sm:h-4" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold">
                <ExternalLink :href="marketingItem.url">{{ marketingItem.title }}</ExternalLink>
              </div>
            </div>
          </div>
        </td>

        <td v-if="columns.includes('Link Strength')">
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold">
                {{ marketingItem.linkStrength }}
              </div>
            </div>
          </div>
        </td>

        <td>
          <MarketingDescription :item="marketingItem.description" />
        </td>
      </tr>

    </tbody>
  </table>
</template>

<script lang="tsx" setup>
import { type MarketingTableProps } from "./types";
import ExternalLink from "@/components/base/ExternalLink/ExternalLink.vue";
import { defineProps } from 'vue';
import MarketingDescription from "./MarketingDescription.vue";

const props = defineProps<MarketingTableProps>();

const { marketingItems, columns } = props;



</script>

<style></style>