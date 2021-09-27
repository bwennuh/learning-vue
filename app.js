// Creating the "root" component
let rootComponent = {
  data() {
    return {
      name: "Brenna",
      x: 5,
      y: 10,
    }
  }
}


// let vue = Vue.createApp({})
//* Can pass in an empty object */

// Target the div with an id of "app" from our index.html file
let vue = Vue.createApp(rootComponent).mount("#app")
//* Can pass in an object with a variable name defined elsewhere (ex: like as defined above) */
//* Can target any CSS selector in the mount method */