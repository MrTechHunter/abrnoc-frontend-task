<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>New server instance</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-alert border="top" color="red lighten-2" dark>
                  Your server name: {{ server_name }}
                </v-alert>
                <v-alert border="right" color="blue-grey" dark>
                  Your server SSD: {{ SSD }}
                </v-alert>
                <form ref="form" @submit.prevent="">
                  <v-text-field
                    v-model="server_name"
                    name="server_name"
                    label="Server name"
                    type="text"
                    placeholder="server name"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="SSD"
                    name="SSD"
                    label="SSD (GB)"
                    type="text"
                    placeholder="SSD"
                    required
                  ></v-text-field>

                  <v-btn
                    type="submit"
                    class="mt-4"
                    color="primary"
                    value="add new instance"
                    >Add new instance</v-btn
                  >
                </form>
                <v-list-item-subtitle v-on:click="back"
                  >back</v-list-item-subtitle
                >
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "new-server",
  data() {
    return {
      server_name: "",
      SSD: "",
    };
  },
  methods: {
    back() {
      this.$router.replace({ name: "servers" });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>