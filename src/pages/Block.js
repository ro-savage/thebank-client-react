import React from 'react';
import blocksStore from '../store/blocks'
import { view } from 'react-easy-state';

const Vin = (props) => {
  return (
    <div>
      {props.inputs.map(input => {
        if (input.coinbase) {
          console.log(input.coinbase)
          return (
            <div key={input.coinbase}>
              Coinbase: {input.coinbase}
            </div>
          )
        }

        if (input.txid) {
          return (
            <div key={input.txid}>
              txid: {input.txid} <br />
              {
                input.voutTransaction &&
                <div>
                  Value: {input.voutTransaction && input.voutTransaction.value} <br />
                  Addresses: {input.voutTransaction.scriptPubKey.addresses.join(', ')} <br />
                </div>
              }
            </div>
          )
        }
      })}
    </div>
  )
}

class Block extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      block: blocksStore.getBlock(props.blockId) || {},
      transactions: [],
    }
  }
  async componentDidMount() {
    const { blockId } = this.props
    // const blockFromStore = blocksStore.getBlock(blockId)
    // if (blockFromStore) {
    //   return this.setState({ block: blockFromStore })
    // }

    const response = await fetch(`http://localhost:3000/getblock/${blockId}`);
    const block = await response.json();
    const transactions = block.transactions
    this.setState({ block, transactions })
  }
  render() {
    const { block, transactions } = this.state
    console.log(transactions)
    return (
      <div>
        <h1>Block {block.blockHeight}</h1>
        <h2>Block Details</h2>
        <table>
          <tbody>
            <tr><th>Block Height</th><td>{block.blockHeight}</td></tr>
            <tr><th>Block Hash</th><td>{block.blockHash}</td></tr>
          </tbody>
        </table>
        <h2>Transactions</h2>
        <table>
          <thead>
            <tr>
              <th>TX Hash</th>
              <th>vin</th>
              <th>vout</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.txHash}>
                  <td>{transaction.txHash}</td>
                  <td><Vin inputs={transaction.txInfo.vin} /></td>
                  <td>vout</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default view(Block);
