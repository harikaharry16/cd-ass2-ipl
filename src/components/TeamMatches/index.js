// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchData: []}

  componentDidMount() {
    this.getTeamMatchData()
  }

  getTeamMatchData = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const updateData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    updateData.latestMatchDetails = {
      umpires: updateData.latestMatchDetails.umpires,
      result: updateData.latestMatchDetails.result,
      manOfTheMatch: updateData.latestMatchDetails.man_of_the_match,
      id: updateData.latestMatchDetails.id,
      date: updateData.latestMatchDetails.id,
      venue: updateData.latestMatchDetails.venue,
      competingTeam: updateData.latestMatchDetails.competing_team,
      competingTeamLogo: updateData.latestMatchDetails.competing_team_logo,
      firstInnings: updateData.latestMatchDetails.first_innings,
      secondInnings: updateData.latestMatchDetails.second_innings,
      matchStatus: updateData.latestMatchDetails.match_status,
    }

    this.setState({teamMatchData: updateData, isLoading: false})
  }

  render() {
    const {teamMatchData, isLoading} = this.state
    const {latestMatchDetails} = teamMatchData

    const ourBanner = teamMatchData.teamBannerUrl

    console.log(ourBanner)

    return (
      <div className="bg">
        <div className="match-latest-container">
          <img src={ourBanner} alt="team banner" className="banner" />
        </div>
        <LatestMatch latestData={latestMatchDetails} />
      </div>
    )
  }
}

export default TeamMatches
