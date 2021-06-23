<template>
  <div class="space-y-8">
    <AssociationInformation
      :name="name"
      :school-name="schoolName"
      :image-url="imageUrl"
      :thematic="thematic"
      :thematics="thematics"
      :text="text"
    />
    <div class="text-secondary-dark text-lg">Membres :</div>
    <section>
      <div
        v-if="profiles"
        class="grid gap-2 lg:gap-8 grid-cols-1 md:grid-cols-2"
      >
        <InsameeProfileCard
          v-for="profile in profiles"
          :key="profile.id"
          :last-name="profile.last_name"
          :first-name="profile.first_name"
          :current-role="profile.current_role"
          :user-id="profile.user_id"
          :text="profile.text"
          :skills="profile.skills"
          :associations="profile.associations"
          :link="profile.link"
        />
      </div>
      <InsameePagination
        class="mt-8 max-w-lg mx-auto"
        small
        :previous-page="pagination.previousPage"
        :next-page="pagination.nextPage"
        :first-page="pagination.firstPage"
        :current-page="pagination.currentPage"
        :last-page="pagination.lastPage"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Association',
  props: {
    name: {
      type: String,
      default: undefined,
    },
    schoolName: {
      type: String,
      default: undefined,
    },
    imageUrl: {
      type: String,
      default: undefined,
    },
    thematic: {
      type: String,
      default: undefined,
    },
    thematics: {
      type: Array,
      default: undefined,
    },
    text: {
      type: String,
      default: undefined,
    },
    profiles: {
      type: Array,
      default: undefined,
    },
  },
  data() {
    return {
      pagination: {
        previousPage: 114,
        nextPage: 116,
        firstPage: 1,
        currentPage: 115,
        lastPage: 119,
      },
    }
  },
}
</script>
