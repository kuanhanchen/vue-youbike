<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <b-table
      striped
      hover
      :fields="fields"
      :items="stations"
      responsive="sm"
      class="table"
    ></b-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import axios from 'axios'
@Component
export default class Table extends Vue {
  @Prop() private title!: string
  @Prop() private stations!: Record<string, any>[]
  data () {
    return {
      fields: [
        { key: 'snaen', label: 'Rental site' },
        { key: 'aren', label: 'Staion location' },
        { key: 'sbi', label: 'Can be by vehicle' },
        { key: 'tot', label: 'Can be stopped' }
      ]
    }
  }

  mounted () {
    axios
      .get('https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json')
      .then(({ data: { retVal } }: any) => {
        this.stations = Object.keys(retVal).map(key => retVal[key])
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$title-color: #2c3e50;
h1 {
  color: $title-color;
}
</style>
