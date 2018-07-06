Vue.component('button-panel', {
  template: '#button-panel',
  props: ['buttons'],
  data() {
    return {};
  },
  methods: {
    updateProgress(value) {
      this.$root.$emit('update-progress', value);
    },
  },
});
