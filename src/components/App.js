import Vue from 'vue'

const App = `
<div>
    <h1>Hello Webpack</h1>
    <router-link to="/test">to</router-link>
</div>
`

export default Vue.component('App', {template: App})