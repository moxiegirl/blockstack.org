'use strict'

import { Component }   from 'react'
import DocumentTitle   from 'react-document-title'
//import { UAParser }    from 'ua-parser-js'

class DownloadsPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      macDownloadLink: 'https://github.com/blockstack/blockstack-portal/releases/download/v0.4.0/Blockstack-v0.4.app.zip',
      portalReleasesLink: 'https://github.com/blockstack/blockstack-portal/releases',
      cliInstallationLink: 'https://github.com/blockstack/blockstack-core',
    }
  }

  render() {
    /*const parser = new UAParser()
    const result = parser.getResult()
    const browserName = result.browser.name
    const osName = result.os.name*/


    return (
      <DocumentTitle title="Blockstack newsletter sign-up">
        <div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container m-b-5">
                <section className="sec-light row">
                  <div className="col-md-12">
                    <h1>
                      Install Blockstack
                    </h1>

                    <div>
                      <h3>Browser Add-on</h3>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Developer alpha</td>
                            <td>
                              <a href={this.state.portalReleasesLink} role="button"
                                className="btn btn-sm btn-outline-primary btn-block">
                                Releases on GitHub
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>macOS</td>
                            <td>
                              <a href="#" role="button"
                                className="btn btn-sm btn-outline-primary btn-block disabled">
                                Coming Soon
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Linux</td>
                            <td>
                              <a href="#" role="button"
                                className="btn btn-sm btn-outline-primary btn-block disabled">
                                Coming Soon
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Windows</td>
                            <td>
                              <a href="#" role="button"
                                className="btn btn-sm btn-outline-primary btn-block disabled">
                                Coming Soon
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div>
                      <h3>Command Line Interface</h3>
                      <p>
                        <a href={this.state.cliInstallationLink} role="button"
                          className="btn btn-outline-primary btn-block">
                          Instructions on GitHub
                        </a>
                      </p>
                    </div>

                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </DocumentTitle>
    )
  }

}

export default DownloadsPage
