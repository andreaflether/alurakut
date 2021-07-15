import Box from '../src/components/Box'
import MainGrid from '../src/components/MainGrid'

export default function Home() {
  return(
    <MainGrid>
      <div className="profileArea" style={{gridArea: 'profile'}}>
        <Box>
          <img src="https://github.com/andreaflether.png" />
        </Box>
      </div>
      <div className="welcomeArea" style={{gridArea: 'welcome'}}>
        <Box>Welcome</Box>
      </div>
      <div className="relationshipsArea" style={{gridArea: 'relationships'}}>
        <Box>People</Box>
        <Box>Communities</Box>
      </div>
    </MainGrid>
  )
}
