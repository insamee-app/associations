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
    <div v-if="profiles" class="space-y-8">
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
}
</script>
