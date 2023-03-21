// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestData} = props
  const updatedLatestData = {
    umpires: latestData.umpires,
    result: latestData.result,
    manOfTheMatch: latestData.man_of_the_match,
    id: latestData.id,
    date: latestData.id,
    venue: latestData.venue,
    competingTeam: latestData.competing_team,
    competingTeamLogo: latestData.competing_team_logo,
    firstInnings: latestData.first_innings,
    secondInnings: latestData.second_innings,
    matchStatus: latestData.match_status,
  }
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = updatedLatestData

  return (
    <div className="latest-container">
      <div className="team-logo">
        <div className="team-data">
          <h1 className="team-name">{competingTeam}</h1>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="venue">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest Match ${competingTeam}`}
          className="team-competing-logo"
        />
      </div>
      <hr className="hr-line" />
      <div className="bottom">
        <h1 className="head">First Innings</h1>
        <p className="para">{firstInnings}</p>
        <h1 className="head">Second Innings</h1>
        <p className="para">{secondInnings}</p>
        <h1 className="head">Man Of The Match</h1>
        <p className="para">{manOfTheMatch}</p>
        <h1 className="head">Umpires</h1>
        <p className="para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
