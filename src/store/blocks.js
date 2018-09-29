import { store } from 'react-easy-state';

const blocks = store({
  blocks: {},
  hashToHeight: {},
  getBlock: function (blockId) {
    if (!isNaN(blockId)) { // is a block height
      return this.blocks[blockId]
    }

    if (isNaN(blockId)) { // is a hash
      const blockHeight = this.hashToHeight[blockId]
      return blockHeight ? this.blocks[blockHeight] : undefined
    }
  },
  addBlocks: function (blocksToAdd) {
    blocksToAdd.forEach(block => {
      const blockHeight = block.blockHeight
      const blockHash = block.blockHash
      this.blocks[blockHeight] = block
      this.hashToHeight[blockHash] = blockHeight
    })
  }
})

export default blocks
