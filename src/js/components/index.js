/* eslint-disable no-unused-vars */
const app = new Vue({
  /* eslint-enable no-unused-vars */
  el: document.querySelector('#app'),
  data: {
    buttons: null,
    bars: [],
    limit: null,
    selectedBar: 0,
  },
  methods: {
    /**
       * Fetch seed data required to initialize the progress bars and controls
       * from the API end-point.
       */
    getSeedData() {
      fetch('http://pb-api.herokuapp.com/bars')
        .then(response => response.json())
        .then((data) => {
          this.limit = data.limit;
          this.buttons = data.buttons.sort((a, b) => {
            if (a < b) {
              return -1;
            } if (b < a) {
              return 1;
            }
            return 0;
          });

          data.bars.forEach((barValue) => {
            const bar = {
              barValue,
              percentage: Math.round((barValue / this.limit) * 100),
            };
            this.bars.push(bar);
          });
        })
        .catch(() => {
          // Handle error
        });
    },

    /**
       * Update progress value for the currently selected progress bar
       * @param {number} selectedBar - index of currently selected bar
       * @param {number} value - increment/decrement by value
       */
    updateProgress(selectedBar, value) {
      if (this.bars && this.bars[selectedBar]) {
        let newBarValue = this.bars[selectedBar].barValue + value;
        newBarValue = newBarValue < 0 ? 0 : newBarValue;
        const newPercentageValue = Math.round((newBarValue / this.limit) * 100);
        Vue.set(this.bars, selectedBar, {
          barValue: newBarValue,
          percentage: newPercentageValue,
        });
      }
    },
  },

  /**
     * Any code that needs to be run after the Vue instance has been
     * compiled and mounted goes here. Ideal place for any code that
     * needs the UI to be loaded first.
     */
  mounted() {
    // Fetch seed data and initialize the progress bars
    this.getSeedData();
  },

  /**
     * Code that needs to be run after the Vue instance has been created can be
     * added here. This is an ideal place to register event listeners.
     */
  created() {
    // Selected progress bar has been changed
    this.$on('select-progress-bar', (index) => {
      this.selectedBar = index;
    });

    // User clicked an increment/decrement button
    this.$on('update-progress', (value) => {
      this.updateProgress(this.selectedBar, value);
    });
  },
});
