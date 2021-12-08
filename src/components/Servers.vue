<template>
  <v-app>
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-title>Servers</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{ email || "Email" }}
            </v-list-item-title>
            <v-list-item-subtitle v-on:click="back">back</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="server in servers" :key="server.title" link>
          <v-list-item-icon>
            <v-icon>{{ server.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ server.title }}</v-list-item-title>
            <v-list-item-title>{{ server.cpu }}</v-list-item-title>
            <v-list-item-title>{{ server.ram }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <v-row class="fill-height">
          <v-col>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer> abrNOC - Mahdi Hamldar </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      servers: [
        {
          title: "Plan-A",
          cpu: "1Core",
          ram: "2GB",
          icon: "mdi-server-security",
        },
        {
          title: "Plan-B",
          cpu: "2Core",
          ram: "4GB",
          icon: "mdi-server-security",
        },
        {
          title: "Plan-C",
          cpu: "4Core",
          ram: "8GB",
          icon: "mdi-server-security",
        },
        {
          title: "Plan-D",
          cpu: "6Core",
          ram: "8GB",
          icon: "mdi-server-security",
        },
        {
          title: "Plan-E",
          cpu: "8Core",
          ram: "16GB",
          icon: "mdi-server-security",
        },
      ],
      email: this.$route.params.email,
    };
  },
  methods: {
    back() {
      this.$router.replace({ name: "dashboard" });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>