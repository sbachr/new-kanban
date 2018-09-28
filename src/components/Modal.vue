<template>
<div>
  
</div>
</template>

<script>
export default {
    props : ['dialog'],
    data(){
        return{
            open : '',
            title : '',
            desc: '',
            status : 'backlog',
        }
    },
    created(){
      this.openModal()
    },
    methods:{
      modal(){
        this.open = false
        console.log(this.open)
      },
      openModal(){
        this.open = this.dialog
      }
    }
}
</script>

