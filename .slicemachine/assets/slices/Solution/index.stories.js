import MyComponent from '../../../../slices/Solution';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Solution'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"features":{"dimensions":{"width":8640,"height":8640},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68"},"icon":{"dimensions":{"width":12288,"height":16384},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab"},"titles":"word","descriptions":[{"type":"paragraph","text":"Aliqua est minim laboris nisi. Est Lorem pariatur nulla elit proident esse aliqua ea sit pariatur.","spans":[]}],"button":"numeral"}],"primary":{"title":[{"type":"heading1","text":"Seldom","spans":[]}],"description":[{"type":"paragraph","text":"Do duis tempor quis cillum labore et labore do dolor.","spans":[]}],"subtitle":"climate"},"id":"_Default","slice_type":"solution"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
