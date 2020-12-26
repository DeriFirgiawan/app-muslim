import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer border-top shadow">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Tentang</h6>
            <p className="text-justify">
              Assalamualaikum Warahmatullahi Wabarakatuh
              Ini adalah sebuah Website Hadith online yang mungkin berguna bagi kita semua.
              Mohon maaf bila ada kesalahan dalam Hadith dan bila data yang ditampilkan tidak sesuai dengan Hadith yang tersedia
            </p>
          </div>
          
          <div className="col-xs-6 col-md-3">
            <h6>Alternatif Links</h6>
            <ul className="footer-links">
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/hadith">Hadith</Link></li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Sumber</h6>
            <ul className="footer-links">
              <li><span>https://github.com/sutanlab/hadith-api</span></li>
            </ul>
            <div className="col-xs-6 col-md-3">
              <h6>Kontak</h6>
              <ul className="footer-links">
                <li><span>derifirgiawan025@gmail.com</span></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <p className="copyright-text text-center">Copyright © 2020 All Rights Reserved by 
          <span>DeriFDev</span>.
          </p>
        </div>
      </div>
  </footer>
  )
}