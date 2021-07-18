<template>
  <section>
    <div class="text-secondary-dark text-lg">Membres :</div>
    <template v-if="pagination.total">
      <template v-if="profiles.length">
        <div class="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2">
          <InsameeProfileCard
            v-for="profile in profiles"
            :key="profile.id"
            type="small"
            :last-name="profile.last_name"
            :first-name="profile.first_name"
            :current-role="profile.current_role"
            :user-id="profile.user_id"
            :text="profile.text"
            :focus-interests="getTexts(profile.insamee_profile.focus_interests)"
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
      <p class="mt-4 max-w-sm mx-auto text-justify">
        Les membres de cette association ne sont pas encore inscrit sur la
        plateforme ou ils n’ont pas renseigné qu’ils faisaient parti de
        l’association. Si tu penses que c’est une erreur, n’hésite à nous le
        signaler!
      </p>
      <div class="mt-4 text-center">
        <InsameeAppButton empty inline :to="{ name: 'contact' }">
          Nous contacter ?
        </InsameeAppButton>
      </div>
      <div class="mt-4 max-w-sm mx-auto text-justify">
        Si vous faites parti de l'association, vous pouvez le renseigner dans
        <InsameeAppButton
          inline
          empty
          :href="$config.insameeURL + '/me'"
          icon-external
        >
          votre profil insamee
        </InsameeAppButton>
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
