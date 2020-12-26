import React from 'react'
import Axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


// component
import Card from '../../../Components/Card/Card'
import CardContent from '../../../Components/Card/CardContent'

class HadithById extends React.Component {
  state = {
    listDetailId: [],
    nameDetail: '',
    endRange: 50,
    buttonStatus: true
  }

  // Property GET API
  getDataApiById = () => {
    let detailId = this.props.match.params.id
    Axios.get(`https://api.hadith.sutanlab.id/books/${detailId}?range=1-${this.state.endRange}`)
      .then(result => {
        let resultData = result.data.data.hadiths
        this.setState({
          listDetailId: resultData,
          nameDetail: result.data.data.name
        })
      })
  }

  componentDidMount() {
    this.getDataApiById()
  }

  // Handle ButtonNext Click
  handleButtonNext = () => {
    this.setState({
      endRange: this.state.endRange + 1,
    }, () => {
      if (this.state.endRange === 350) {
        this.setState({
          buttonStatus: false
        })
      }
    })
    setTimeout(() => {
      this.getDataApiById()
    }, 0);
  }

  

  // If buttonTotop at click then back to top
  handleButtonToTop = () => {
    window.scrollTo(0, window.scrollY - window.scrollY)
  }

  // Handle button show to top
  handleShowButtonTop = () => {
    if (window.location.pathname === this.props.location.pathname) {
      const buttonTop = document.querySelector('#button')
      if (window.scrollY > 450) {
        buttonTop.classList.remove('hidden')
      } else {
        buttonTop.classList.add('hidden')
      }
    }
  }
  
  render() {
    // Show ButtonNext
    let buttonNext
    if (this.state.buttonStatus) {
      buttonNext = (
        <ButtonNext next={this.handleButtonNext} />
      )
    }
      // Event Scroll
    window.addEventListener('scroll', () => {
      this.handleShowButtonTop()
    })
    return (
      <main className="container">
        <button className="btn btn-primary hidden" id="button" onClick={this.handleButtonToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <Card id="detail-hadith">
          {
            this.state.listDetailId.map(result => {
              return (
                <CardContent key={result.number} name={this.state.nameDetail} number={result.number} arab={result.arab} id={result.id} />
              )
            })
          }
          {buttonNext}
        </Card>
      </main>
    )
  }
}

function ButtonNext(props) {
  return (
    <div className="button-next text-center">
      <button className="btn btn-light btn-lg" onClick={props.next}>Selengkapnya</button>
    </div>
  )
}


export default HadithById
