<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2 rounded-borders">
      <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Market</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="500"
        overlay
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area class="fit">
          <q-list>
            <router-link
              v-for="(menuItem, index) in menuList"
              :key="index"
              :to="menuItem.route" 
              class="q-item"
            >
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </router-link>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
      </q-page-container>
      <router-view></router-view>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue';

const menuList = [
  {
    icon: 'home',
    label: 'Home',
    route: '/Home',
    separator: true,
  },
  {
    icon: 'articles',
    label: 'Articulos',
    route: '/Articulos',
    separator: false,
  },
  {
    icon: 'category',
    label: 'Categorias',
    route: '/Categorias',
    separator: false,
  },
  {
    icon: 'move_to_inbox',
    label: 'Movimientos',
    route: '/Movimientos',
    separator: false,
  },
  {
    icon: 'person',
    label: 'Terceros',
    route: '/Terceros',
    separator: true,
  },
];

export default {
  setup() {
    return {
      drawer: ref(true),
      menuList,
    };
  },
};
</script>

<style>

.q-list .q-item {
  border-bottom: none;
  text-decoration: none;
  color: inherit;
}
</style>
