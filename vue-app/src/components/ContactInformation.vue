<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" lg="4" md="6">
        <v-card class="business-card" max-width="400" outlined>
          <v-img
            class="business-card__photo"
            contain
            height="200"
            :src="myPhoto"
          />
          <v-card-title class="text-h5">{{ name }}</v-card-title>
          <v-card-subtitle class="text-subtitle-1">{{ title }}</v-card-subtitle>
          <v-card-text>
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-list dense>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-icon>mdi-earth</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>Location</v-list-item-title>
                      <v-list-item-subtitle>Minnesota</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-icon>mdi-email</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>Email</v-list-item-title>
                      <v-list-item-subtitle>
                        <a href="mailto:me@benhickman.dev">me@benhickman.dev</a>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-icon>mdi-phone</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>Phone</v-list-item-title>
                      <v-list-item-subtitle
                        >(651) 300-4252</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import myPhoto from '@/assets/me.jpg';

export default {
  name: 'BusinessCard',
  props: {
    photoUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      myPhoto,
    };
  },
};
</script>

<style scoped>
.business-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.business-card__photo {
  width: 100%;
  height: auto;
}
</style>
