<template>
  <v-app>
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-title>Dashboard</v-toolbar-title>
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
            <v-list-item-subtitle v-on:click="logout"
              >log out</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.href"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
      items: [
        { title: "Dashboard", href: "/dashboard", icon: "mdi-view-dashboard" },
        { title: "Servers", href: "/servers", icon: "mdi-server" },
        { title: "About", href: "/about", icon: "mdi-help-box" },
      ],
      email: this.$route.params.email,
    };
  },
  methods: {
    logout() {
      this.$router.replace({ name: "account" });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>