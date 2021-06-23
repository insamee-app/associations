<template>
  <InsameeAppContainer class="max-w-4xl mx-auto">
    <Association
      :name="association.name"
      :school-name="association.school.name"
      :image-url="association.image_url"
      :thematic="association.thematic"
      :thematics="association.thematics"
      :text="association.text"
      :profiles="profiles"
    />
  </InsameeAppContainer>
</template>

<script>
export default {
  data() {
    return {
      association: {
        name: 'lorem ipsum',
        school: {
          name: 'dolor',
        },
        image_url: undefined,
        thematic: 'lorem them',
        thematics: ['lorem', 'upsum', 'dolor', 'sit amet'],
        text: 'Assocation est une association de musique. Elle fait partie du pôle culturel de l Insa Centre Val de Loire, et propose des Jam chaque Jeudi. Son président est grave beau.',
      },
      profiles: [
        {
          id: 1,
          user_id: 1,
          last_name: 'a last name',
          first_name: 'a first name',
          current_role: 'student',
          text: 'lorem ipsum, this is the text',
          link: undefined,
        },
        {
          id: 2,
          user_id: 1,
          last_name: 'a last name',
          first_name: 'a first name',
          current_role: 'student',
          text: 'lorem ipsum, this is the text',
          skills: ['lorem', 'ipsum'],
          link: undefined,
        },
      ],
    }
  },
}
</script>
