// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamCardData: []}

  componentDidMount() {
    this.getTeamCardsData()
  }

  getTeamCardsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(e => ({
      name: e.name,
      id: e.id,
      teamImageUrl: e.team_image_url,
    }))

    this.setState({teamCardData: updatedData, isLoading: false})
  }

  render() {
    const {teamCardData, isLoading} = this.state

    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader
              type="Oval"
              color="black
            "
              height={50}
              width={50}
            />
          </div>
        ) : (
          <div className="bg-container">
            <div className="head-ipl">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="logo"
                alt="ipl logo"
              />
              <h1 className="dashboard">IPL Dashboard</h1>
            </div>
            <ul className="ul-list">
              {teamCardData.map(each => (
                <TeamCard key={each.id} teamData={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
