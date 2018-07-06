Vue.component('bar-selector', {
  template: '#bar-selector',
  props: ['bars'],
  data() {
    return {};
  },
  methods: {
    selectProgressBar(event) {
      this.$root.$emit('select-progress-bar', event.target.value);
    },
  },
});
