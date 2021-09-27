// Creating the "root" component
let rootComponent = {
  data() {
    return {
      myName: "Brenna",
      names: ["Tyler", "Brenna", "Tosin"],
      newName: "",
      people: ["Tyler", "Brenna", "Tosin"],
      friends: [],
      things: ["Cassette", "Tripod", "Guitar", "Window"],
      x: 5,
      y: 10,
      beers: [],
    }
  },
  created() {
    fetch('https://api.punkapi.com/v2/beers')
    .then(resp => resp.json())
    .then(data => this.beers = data.map(beer => beer.name))
  },
  methods: {
    addName(name) {
      if (name !== "") {
        this.names.push(name)
        this.newName = ""
      }
    },
    sortAlphabetically() {
      this.things.sort((a, b) => {
        if (a > b) return 1
        else if (b > a) return -1
        else return 0
      })
    },
    sortReverseAlphabetically() {
      this.things.sort((a, b) => {
        if (a > b) return -1
        else if (b > a) return 1
        else return 0
      })
    },
  }
}

// let listComponent = {
//   props: ['things'],
//   template: `
//     <ul>
//       <li v-for="thing in things">{{ thing }}</li>
//     </ul>
//     <button @click="sort">Sort from list component!</button>
//   `,
//   methods: {
//     sort() {
//       this.$emit('sort-alphabetically')
//       console.log("testing sort button on component")
//     }
//   }
// }

let listComponent = {
  props: ['things'],
  template: `
    <ul>
      <li v-for="thing in things">{{ thing }}</li>
    </ul>
    <button @click="$emit('sort')">Sort from list component!</button>
  `,
}

//* Often times, we're going to be working with arrays of values */


// let vue = Vue.createApp({})
//* Can pass in an empty object */

// Target the div with an id of "app" from our index.html file
// let vue = Vue.createApp(rootComponent).mount("#app")
//* Can pass in an object with a variable name defined elsewhere (ex: like as defined above) */
//* Can target any CSS selector in the mount method */

// Add component to the root Vue instance we're creating
let vue = Vue.createApp(rootComponent)
  .component('list-component', listComponent)
  .mount("#app")