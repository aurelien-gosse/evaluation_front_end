// vue pour le choix du formulaire dans le header
let app = new Vue({
  el: "#apphome",
  data: {
    choixForm: "form1"
  },
  created() {

  },
  methods: {
    changeChoix(param) {
      this.choixForm = param;
    }
  }
});

// récupération des boutons au dessus des formulaires
let btnsForm = $(".div-btns > a");
// changement de la class des boutons
btnsForm.click(function (){
  btnsForm.removeClass("active");
  $(this).addClass("active");
});