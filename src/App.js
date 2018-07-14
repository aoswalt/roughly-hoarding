import React, { Component } from 'react'
import logo from './logo.svg'
import data from './data.json';
import AllItemsPage from './AllItemsPage';
import MyItemsPage from './MyItemsPage';

class App extends Component {
  state = {
    myItems: [],
    page: 'all',
  }

  swapPage = () => this.setState(({ page }) => ({ page: page === 'all' ? 'my' : 'all' }))

  onAdd = item => {
    fetch('google.com')
      .then(() => this.setState(({ myItems }) => ({ myItems: [...myItems, item] })))
      .catch(console.error)
  }

  onDelete = index => this.setState(({ myItems }) => ({ myItems: myItems.filter((item, i) => i !== index) }))

  render() {
    const { myItems, page } = this.state

    return (
      <div className='App'>
        <h1>{page === 'all' ? 'All Items' : 'My Items'}</h1>
        <button onClick={this.swapPage}>Change Page</button>
        {page === 'all'
            ? <AllItemsPage items={Object.values(data)} onAdd={this.onAdd} />
            : <MyItemsPage items={myItems} onDelete={this.onDelete} />
        }
      </div>
    )
  }
}

export default App
