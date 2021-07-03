<template>
  <section>
    <template v-if="pagination.total">
      <div class="text-secondary-dark text-lg">Membres :</div>
      <template v-if="profiles.length">
        <div class="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2">
          <InsameeProfileCard
            v-for="profile in profiles"
            :key="profile.id"
            :last-name="profile.last_name"
            :first-name="profile.first_name"
            :current-role="profile.current_role"
            :user-id="profile.user_id"
            :text="profile.text"
            :skills="getTexts(profile.insamee_profile.skills)"
            :associations="profile.insamee_profile.associations"
            :link="profile.link"
          />
        </div>
        <InsameePagination
          class="mt-8 max-w-lg mx-auto"
          :small="$screen.lg"
          :previous-page="
            pagination.previous_page_url
              ? pagination.current_page - 1
              : undefined
          "
          :next-page="
            pagination.next_page_url ? pagination.current_page + 1 : undefined
          "
          :first-page="pagination.first_page"
          :last-page="pagination.last_page"
          :current-page="pagination.current_page"
          @pagination="$emit('pagination', $event)"
        />
      </template>
      <template v-else>
        Il semble que vous ne soyez pas sur la bonne page !
      </template>
    </template>
    <template v-else>
      <div>Cette association n'a pas de membres !</div>
      <div>
        Si vous en faites parti, vous pouvez le renseigner dans
        <InsameeAppLink :link="$config.insameeURL + '/me'">
          votre profile insamee
        </InsameeAppLink>
      </div>
    </template>
  </section>
</template>

<script>
import getTexts from '@/mixins/getTexts'

export default {
  name: 'AssociationProfiles',
  mixins: [getTexts],
  props: {
    profiles: {
      type: Array,
      default: undefined,
    },
    pagination: {
      type: Object,
      default: undefined,
    },
  },
}
</script>
