import React from 'react'
import Axios from 'axios'

// Component
import Hadith from './Hadith'
import Jumbotron from '../../../Components/Jumbotron/Jumbotron'
// Style
import './Hadith.css'

class HadithPage extends React.Component {
  state = {
    listHadith: []
  }

  componentDidMount() {
    Axios.get('https://api.hadith.sutanlab.id/books')
      .then(result => {
        this.setState({
          listHadith: result.data.data
        })
    })
  }

  handleDetailHadithById = (id) => {
    this.props.history.push(`/hadith-detail/${id}`)
  }
  render() {
    return (
      <main className="container">
        <Jumbotron>
          {
            this.state.listHadith.map(result => {
              return (
                <Hadith key={result.available} data={result} detail={this.handleDetailHadithById} />
              )
            })
            }
          </Jumbotron>
      </main>
    )
  }
}
export default HadithPage
