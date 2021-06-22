<template>
  <div>
    <InsameeHeroBanner>
      <template #title>
        <InsameeHeroBannerTitle>
          Du temps libre après les cours ?
        </InsameeHeroBannerTitle>
      </template>
      <template #subtitle>
        <InsameeHeroBannerSubtitle>
          Sur <span class="font-bold text-primary-base">Association</span>, tu
          pourras découvrir des associations ou trouver celle qu'il te faut.
        </InsameeHeroBannerSubtitle>
      </template>
      <template #graphic>
        <GraphicCommunity class="mx-auto mt-8" />
      </template>
    </InsameeHeroBanner>
    <InsameeFullContainer v-slot="{ graphicStyle }" around>
      <InsameeFullContainerTitle>
        La vie associative, tu connais ?
      </InsameeFullContainerTitle>
      <InsameeFullContainerText class="text-right">
        Les <span class="text-primary-base">associations</span> organisent
        souvent des évènemnts ! Tu peux y rencontrer des personnes avec les
        mêmes centres d'intérêts que toi !
      </InsameeFullContainerText>
      <GraphicHavingFun :class="graphicStyle" />
    </InsameeFullContainer>
    <InsameeFullContainer v-slot="{ graphicStyle }" around>
      <InsameeFullContainerTitle>
        Envie de rejoindre une association ?
      </InsameeFullContainerTitle>
      <InsameeFullContainerText>
        Avec <span class="text-primary-base">associations</span>, tu peux
        contacter les membres des associations pour les rejoindre !
      </InsameeFullContainerText>
      <GraphicWaiting :class="graphicStyle" />
    </InsameeFullContainer>
    <InsameeFullContainer v-slot="{ graphicStyle }" around>
      <div>
        <InsameeFullContainerTitle>
          Un projet ambitieux ?
        </InsameeFullContainerTitle>
        <InsameeFullContainerText class="mt-12">
          Sur <span class="text-primary-base">associations</span>, tu peux
          trouver des associations avec lesquelles colaborer !
        </InsameeFullContainerText>
      </div>
      <GraphicTeamWork :class="graphicStyle" />
    </InsameeFullContainer>
  </div>
</template>

<script>
export default {}
</script>
