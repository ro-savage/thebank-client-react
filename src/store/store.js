import { store } from 'react-easy-state';

const appStore = store({
  blocks: {
    ablock: { name: 'test' }
  }
})

export default appStore
