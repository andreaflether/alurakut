import Box from '../src/components/Box'
import MainGrid from '../src/components/MainGrid'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar({githubUser}) {
  return(
    <Box>
      <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'andreaflether'
  const favPeople = ['twice', 'blackpink', 'dreamcatcher', 'itzy', 'redvelvet', 'gidle']
  
  return(
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profile'}}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcome'}}>
          <Box>
            <h1 className="title">Bem-vindo(a)!</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="relationshipsArea" style={{gridArea: 'relationships'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Pessoas da Comunidade ({favPeople.length})</h2>
            <ul>
              {favPeople.map((item) => {
                return(
                  <li>
                    <a href={`/users/${item}`} key={item}>
                      <img src={`https://github.com/${item}.png`} alt="Imagem do usuário no Github"/>
                      <span>{item}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  )
}
