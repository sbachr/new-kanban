<template>
    <v-card class="respon-font">
        <v-container
        fluid
        grid-list-lg
        >
          <v-layout row wrap>  
            <v-flex xs12>
              <v-card color="cyan darken-2" class="white--text">
                <v-layout>
                  <v-flex>
                    <v-card-title primary-title>
                        <p class="headline">{{job.title}}</p>
                    </v-card-title>
                    <v-divider light></v-divider>
                    <v-card-text>
                        <p>{{(job.job)}}</p>
                    </v-card-text>
                    <v-divider light></v-divider>
                    <v-card-action>
                        <v-layout>
                            <v-flex xs4>
                                <v-icon v-on:click="prev">keyboard_arrow_left</v-icon>
                            </v-flex>
                            <v-flex xs4>
                                <v-icon v-on:click="remove" >delete_sweep</v-icon>
                            </v-flex>
                            <v-flex xs4>
                                <v-icon v-on:click="next">keyboard_arrow_right</v-icon>
                            </v-flex>
                        </v-layout>
                    </v-card-action>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
</template>

<script>
import db from "@/firebase/firebase.js";
export default {
  props: ["job"],
  data() {
    return {
      status: ["backlog", "todo", "doing", "done"]
    };
  },
  methods: {
    next() {
      let indxStatus = this.status.indexOf(this.job.status);
      let newStatus = this.job.status;
      if (indxStatus + 1 < 4) {
        newStatus = this.status[indxStatus + 1];
      }

      var postData = {
        title: this.job.title,
        job: this.job.job,
        status: newStatus
      };

      var updates = {};
      updates["/jobs/" + this.job.title + 123] = postData;
      return db.ref().update(updates);
    },
    prev() {
      let indxStatus = this.status.indexOf(this.job.status);
      let newStatus = this.job.status;
      if (indxStatus - 1 >= 0) {
        newStatus = this.status[indxStatus - 1];
      }
      var postData = {
        title: this.job.title,
        job: this.job.job,
        status: newStatus
      };

      var updates = {};
      updates["/jobs/" + this.job.title + 123] = postData;
      return db.ref().update(updates);
    },
    remove() {
      console.log("delete");
      return db.ref("jobs/" + this.job.title + 123).set(null);
    }
  }
};
</script>


<style scoped>
@media (max-width: 786px) {
  .respon-font {
    font-size: 9px;
  }
}
</style>

