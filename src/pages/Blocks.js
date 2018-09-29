import React from 'react'
import { Link } from 'buttermilk'
import { view } from 'react-easy-state';

import blocksStore from '../store/blocks'

class Blocks extends React.Component {
  constructor() {
    super()
    this.state = {
      blocks: []
    }
  }
  async componentDidMount() {
    const response = await fetch('http://localhost:3000/getblocks')
    const blocks = await response.json()
    blocksStore.addBlocks(blocks)
    this.setState({ blocks })
  }
  render() {
    const { blocks } = this.state
    return (
      <div>
        Blocks page
        <table>
          <thead>
            <tr>
              <th>Block Height</th>
              <th>Block Hash</th>
            </tr>
          </thead>
          <tbody>
            {blocks.map(block => {
              return (
                <tr key={block.blockHeight}>
                  <td><Link href={`/block/${block.blockHeight}`}>{block.blockHeight}</Link></td>
                  <td><Link href={`/block/${block.blockHash}`}>{block.blockHash}</Link></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default view(Blocks);
