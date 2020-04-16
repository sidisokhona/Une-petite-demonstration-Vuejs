
var todolist = new Vue({
  el: '#app',
  data: {
    newitem: '',
    todo: [
      { id:1, label: "Apprendre VueJs", done: true },
      { id:2, label: "Coder une liste de tâche", done: false },
      { id:3, label: "Apprendre d'autres trucs fun !", done: false }
    ]
  },
  methods: {
    completeTask: function(item) {
      item.done = !item.done;
    },
    deleteItem: function(item) {

      // On récupère le numéro d'index de l'élément
      let index = this.todo.indexOf(item);
      console.log(index);
      //console.log(index);
      // On supprime l'élément correspondant à son index.
      // (La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments.)
      this.todo.splice(index, 1);
    },
    addItem: function(){
      var value = this.newitem && this.newitem.trim();
      if (!value){
        return
      }
      var newId= this.todo.length +1;
      this.todo.push({
        id:newId,
        label:this.newitem,
        done:false
      });
      this.newitem ='';
    }
  }
});
