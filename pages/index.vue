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
          Sur <span class="font-bold text-primary-base">Associations</span>, tu
          pourras découvrir des associations ou trouver celle qu'il te faut.
        </InsameeHeroBannerSubtitle>
      </template>
      <template #graphic>
        <GraphicCommunity class="flex-1 h-auto mx-auto mt-8 md:m-0 md:w-full" />
      </template>
    </InsameeHeroBanner>
    <InsameeFullContainer v-slot="{ graphicStyle }" around type="top-left">
      <InsameeFullContainerTitle>
        La vie associative, tu connais ?
      </InsameeFullContainerTitle>
      <InsameeFullContainerText class="text-right self-end">
        Les <span class="text-primary-base">associations</span> organisent
        souvent des évènemnts ! Tu peux y rencontrer des personnes avec les
        mêmes centres d'intérêts que toi !
      </InsameeFullContainerText>
      <GraphicHavingFun :class="graphicStyle" />
    </InsameeFullContainer>
    <InsameeAppHr class="my-8" />
    <InsameeFullContainer v-slot="{ graphicStyle }" around type="right">
      <InsameeFullContainerTitle>
        Envie de rejoindre une association ?
      </InsameeFullContainerTitle>
      <InsameeFullContainerText>
        Avec <span class="text-primary-base">associations</span>, tu peux
        contacter les membres des associations pour les rejoindre !
      </InsameeFullContainerText>
      <GraphicWaiting :class="graphicStyle" />
    </InsameeFullContainer>
    <InsameeAppHr class="my-8" />
    <InsameeFullContainer v-slot="{ graphicStyle }" around type="bottom-left">
      <div>
        <InsameeFullContainerTitle>
          Un projet ambitieux ?
        </InsameeFullContainerTitle>
        <InsameeFullContainerText class="mt-12">
          Sur <span class="text-primary-base">associations</span>, tu peux
          trouver des associations avec lesquelles collaborer !
        </InsameeFullContainerText>
      </div>
      <GraphicTeamWork :class="graphicStyle" />
    </InsameeFullContainer>
  </div>
</template>

<script>
export default {}
</script>
