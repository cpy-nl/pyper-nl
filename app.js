new Vue({
  el: "#welcome",
  data: {
    greeting: ['hi there', 'hello', 'hi', 'welcome'],
    speak: ['CSS', 'JavaScript', 'PHP', 'SQL', 'Coffee'],
    // fullList: ['Coffee', 'CSS', 'CURL' 'JavaScript', 'PHP', 'Pizza', 'SQL', 'Vue.js']
  },
  methods: {
    randomList: function(rand){
      return rand.sort(function(){return 0.5 - Math.random()});
    }
  }
});
