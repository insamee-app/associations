<template>
  <InsameeProfile
    :last-name="profile.last_name"
    :first-name="profile.first_name"
    :current-role="profile.current_role"
    :graduation-year="profile.graduation_year"
    :email="profile.user.email"
    :school-name="profile.school.name"
    :text="text"
    :preferred-subjects="texts"
    :difficulties-subjects="texts"
    :socials="socials"
    :avatar-url="undefined"
  />
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      profile: {
        last_name: 'a last name',
        first_name: 'a first name',
        current_role: 'student',
        graduation_year: 2023,
        user: {
          email: 'this is a super email',
        },
        school: {
          name: ' this is a school name',
        },
      },
      socials: {
        facebook: 'facebook',
        instagram: undefined,
      },
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus erat. Mauris in fringilla orci. Duis maximus dictum urna sed interdum. Pellentesque faucibus tellus risus, in tempus nunc rhoncus a. Mauris non metus feugiat, mattis mauris et, dictum orci. Vivamus vitae porta metus. Nulla ut fringilla justo. Aliquam lobortis gravida ligula, et pretium ex euismod id. Nam ut consectetur mauris, id vestibulum elit. Aenean non libero sed diam facilisis lacinia. Curabitur nec turpis consectetur est condimentum convallis sit amet vitae lacus. Maecenas mattis porta tortor eu elementum. Nulla rhoncus turpis felis, imperdiet convallis magna viverra pretium. Quisque ac mauris semper, tempus est vel, tincidunt risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum at libero eu sem rhoncus gravida ut lacinia leo.',
      texts: ['lorem', 'upsum', 'dolor', 'sit amet'],
    }
  },
}
</script>
