<template>
  <div class="relative">
    <GraphicSmallBlob
      class="
        text-primary-base/10
        fill-current
        absolute
        top-[4.5rem]
        -left-52
        pointer-events-none
      "
    />
    <div class="flex flex-row justify-center items-center relative">
      <InsameeAppProfileAvatar />
      <div class="ml-6">
        <div class="text-xl font-bold uppercase">{{ name }}</div>
        <div class="font-light">{{ schoolName }}</div>
      </div>
    </div>
    <div class="relative mt-8">
      <div class="text-primary-light text-lg capitalize">{{ thematic }}</div>
      <InsameeAppChips :texts="tags" />
    </div>
    <div class="text-justify mt-8 text-lg">
      {{ text }}
    </div>
    <div class="flex justify-center items-center mt-8">
      <InsameeAppButton
        shadow
        :disabled="!hasEmail"
        :href="`mailto:${email}`"
        variant="secondary"
      >
        Contacter l'association
      </InsameeAppButton>
    </div>
    <Report v-slot="{ on }" type="associations" class="mt-4">
      <InsameeAppButton empty variant="grey-secondary" v-on="on">
        Signaler l'association
      </InsameeAppButton>
    </Report>
    <p v-if="!email" class="text-justify font-bold max-w-sm mx-auto mt-8">
      Cette association n’a renseigné aucun moyen de contact, mais vous pouvez
      la contacter via ses membres !
    </p>
  </div>
</template>

<script>
export default {
  name: 'AssociationInformation',
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
    tags: {
      type: Array,
      default: undefined,
    },
    text: {
      type: String,
      default: undefined,
    },
    email: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    hasEmail() {
      return !!this.email
    },
  },
}
</script>
