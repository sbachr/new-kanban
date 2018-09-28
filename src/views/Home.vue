<template>
  <div class="home">
    <v-vontainer grid-list-md text-xs-ceter>
      <v-layout row wrap>
          <v-flex xs3>
            <Board 
              v-bind:jobs="jobs"
              v-bind:color="backlogHead"
              v-bind:status="statusBacklog"/>
          </v-flex>
          <v-flex xs3>
              <Board 
                v-bind:jobs="jobs"
                v-bind:color="todoHead"
                v-bind:status="statusTodo"/>
          </v-flex>
        <v-flex xs3>
          <Board 
            v-bind:jobs="jobs"
            v-bind:color="doingHead"
            v-bind:status="statusDoing"/>
        </v-flex>
        <v-flex xs3>
          <Board 
            v-bind:jobs="jobs"
            v-bind:color="doneHead"
            v-bind:status="statusDone"
            />
        </v-flex>
      </v-layout>
    </v-vontainer>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Board from '@/components/Board.vue'
import db from '@/firebase/firebase.js'
import Navbar from '@/components/Navbar.vue'
import draggable from 'vuedraggable'

export default {
  name: 'home',
  data(){
    return{
      backlogHead: "red",
      todoHead: "light-blue",
      doingHead: "lime",
      doneHead: "light-green",
      statusBacklog : "backlog",
      statusTodo : "todo",
      statusDoing : "doing",
      statusDone : "done",
      jobs : [],
    }
  },
  components: {
    Board,
    draggable,
    Navbar
  },
  mounted(){
    this.getJobList()
  },
  methods:{
    getJobList(){
        var starCountRef = db.ref('jobs/')
        starCountRef.on('value',(snapshot)=> {
        let snapshotDatas = snapshot.val()
        let jobsCollection = []
        for(let i in snapshot.val()){
          jobsCollection.push(snapshotDatas[i])
        }
        this.jobs = [...jobsCollection]
        updateStarCount(postElement, snapshot.val());
        })
    }
  }

}
</script>


