<template>
  <InsameeResponsiveList>
    <template #filter>
      <InsameeAppCard class="w-full">
        <InsameeAppCardTitle>Filtres</InsameeAppCardTitle>
      </InsameeAppCard>
    </template>
    <template #cards>
      <InsameeResponsiveListCards>
        <AssociationCard
          v-for="value in 6"
          :id="card.id"
          :key="value"
          :name="card.name"
          :school-name="card.school.name"
          :thematic="card.thematic"
          :thematics="card.thematics"
          :text="card.text"
          :image-url="card.image_url"
        />
        <template #pagination>
          <InsameeResponsiveListPagination>
            <InsameePagination
              small
              :previous-page="pagination.previousPage"
              :next-page="pagination.nextPage"
              :first-page="pagination.firstPage"
              :current-page="pagination.currentPage"
              :last-page="pagination.lastPage"
            />
          </InsameeResponsiveListPagination>
        </template>
      </InsameeResponsiveListCards>
    </template>
  </InsameeResponsiveList>
</template>

<script>
export default {
  data() {
    return {
      card: {
        id: 1,
        name: 'lorem ipsum',
        school: {
          name: 'ipsum lorem',
        },
        thematic: 'dolor',
        thematics: ['lorem', 'upsum', 'dolor', 'sit amet'],
        text: 'Assocation est une association de musique. Elle fait partie du pôle culturel de l Insa Centre Val de Loire',
      },
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
