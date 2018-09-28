<template>
  <v-app id="inspire">
    <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn>
    <div
      id="e3"
      style="max-width: 500px;"
      class="grey lighten-3 respon-font"

    >
      <v-toolbar
        v-bind:color="color"
        dark
      >
      
        <v-layout >
          <v-flex xs2>
            <v-btn icon v-on:click="add">
              <v-icon>add</v-icon>
            </v-btn>  
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs10 >
            <v-toolbar-title>{{status}}</v-toolbar-title>
          </v-flex>
        </v-layout>
      </v-toolbar>
      <draggable>
        <Tag 
          v-for="(job, a) in jobs" 
          :key="{a}"
          v-bind:job="job"
          v-if="statusCheck(job)"
        />
      </draggable>
    </div>
  
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
    
      <v-card >
        <v-card-title>
          <span class="headline">ADD JOB</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md >
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="title" label="title" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="job" label="job" required></v-text-field>
              </v-flex>                            
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  </v-app>
</template>

<script>

import Tag from '@/components/Tag.vue'
import Modal from '@/components/Modal.vue'
import db from '@/firebase/firebase.js'
import draggable from 'vuedraggable' 

export default {
    props : [ 'jobs','color','status'],
    data(){
      return{
        title : '',
        job : '',
        dialog: false,
      }
    },
    
    components:{
        Tag,
        Modal,
        draggable,
    },
    methods:{
      statusCheck(job){
        if(job.status === this.status){
          return true
        }else{
          return false
        }
      },
      save(){
        this.dialog = false
        console.log(this.dialog, this.title, this.jobs.length)
        let lastIndex = this.jobs.length
        db.ref('jobs/' +this.title+123).set({
        title: this.title,
        job: this.job,
        status : 'backlog'
        });
      },
      add(){
        this.dialog = true
      }
    }
}
</script>

