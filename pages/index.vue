<template>
  <v-row justify="center" align="start">
    <v-col cols="12">
      <font color="red">{{ formError }}</font>
    </v-col>
    <v-col cols="8">
      <v-row justify="start" align="start">
        <template v-for="(item, index) in choosen">
          <v-col :key="index" cols="4">
            <v-card @click="chooseCard(item)" class="elevation-1">
              <v-row justify="start" align="start" no-gutters class="pl-4">
                <v-col cols="12">
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="item.text"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-col>
                <v-col cols="4">
                  <v-list-item-avatar>
                    <v-img  :src="item.avatar"></v-img>
                  </v-list-item-avatar>
                </v-col>
                <v-col cols="8" >
                  <v-list-item-content>
                    <v-list-item-title
                      v-html="item.comment"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-col>
    <v-col  id="scroll" cols="4" class="log-list" >
      <v-list three-line>
        <template v-for="(item, index) in logs">
          <v-card :key="index" class="elevation-1">
            <v-row justify="start" align="start" no-gutters class="pl-4">
              <v-col cols="12">
                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.text"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-col>
              <v-col cols="2">
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>
              </v-col>
              <v-col cols="10">
                <v-list-item-content>
                  <v-list-item-title v-html="item.comment"></v-list-item-title>
                </v-list-item-content>
              </v-col>
            </v-row>
          </v-card>
        </template>
      </v-list>
    </v-col>
    <v-col cols="6">
      <v-btn primary color="primary" @click="backMenu()">メニュー画面へ</v-btn>
    </v-col>
    <v-col class="text-md-right" cols="6"> </v-col>
  </v-row>
</template>
<script src="../logic/indexpage.ts" lang="ts"></script>
<style scoped>
.log-list {
  height: 60vh;
  overflow-y: auto;
}
.v-list-item__title,
.v-list-item__subtitle {
  flex: 1 1 100%;
  /* overflow: hidden; */
  text-overflow: ellipsis;
  white-space: normal;
}
</style>