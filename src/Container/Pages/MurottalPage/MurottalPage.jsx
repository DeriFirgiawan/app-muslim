import React from 'react'
import Axios from 'axios'

// Component
import Card from '../../../Components/Card/Card'

class MurottalPage extends React.Component {
  state = {
    listMurottal: []
  }

  componentDidMount() {
    Axios.get('https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json')
      .then(result => {
        this.setState({
          listMurottal: result.data
        }, () => console.log(this.state.listMurottal))
      })
  }
  render() {
    return (
      <main className="container">
        <h1 className="text-center">Murottal Al-Qur'an</h1>
        {
          this.state.listMurottal.map(result => {
            return (
              <Card id="murottal">
                <div className="card-content p-3 animate__animated animate__fadeIn" key={result.number_of_surah}>
                  <h4>{result.number_of_surah} {result.name}</h4>
                  <p className="text-muted mt-4">{result.name_translations.ar}</p>
                  <audio controls srcSet={result.recitation} src={result.recitation} type="audio/mpeg">
                    Maaf browser Spertinya Tidak Support
                  </audio>
                </div>
              </Card>
            )
          })
        }
        
      </main>
    )
  }
}

export default MurottalPage
