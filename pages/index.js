import Box from '../src/components/Box'
import MainGrid from '../src/components/MainGrid'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import { useState, useEffect } from 'react'

function ProfileSidebar({githubUser}) {
  return(
    <Box as="aside">
      <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${githubUser}`}>@{githubUser}</a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileRelationsBox({items, title}) {
  return(
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">{title} ({items.length})</h2>
      <ul>
        {items.map((item) => {
          return(
            <li key={item.id}>
              <a href={`/users/${item.login}`}>
                <img src={`https://github.com/${item.login}.png`} alt="Imagem do usuário no Github"/>
                <span>{item.login}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home() {
  const githubUser = 'andreaflether'
  const [communities, setCommunities] = useState([])
  const favPeople = ['twice', 'blackpink', 'dreamcatcher', 'itzy', 'redvelvet', 'gidle']
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/andreaflether/followers')
    .then((response) => {
      return response.json()
    })
    .then((fullResponse) => {
      setFollowers(fullResponse)
    })

    // API GraphQL
    fetch('')
  }, [])


  function handleCommunityCreate(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    const community = {
      title: formData.get('title'),
      image: formData.get('image'),
      created_at: new Date().toISOString()
    }
    setCommunities([...communities, community])
  }
  
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

          <Box>
            <h2 className="subtitle">O que você deseja fazer?</h2>
            <form onSubmit={(e) => handleCommunityCreate(e)}>
              <input 
                placeholder="Qual vai ser o nome da sua comunidade?"
                name="title"
                aria-label="Qual vai ser o nome da sua comunidade?"
                type="text"
              />
              <input 
                placeholder="Coloque uma URL para usarmos de capa"
                name="image"
                aria-label="Coloque uma URL para usarmos de capa"
                type="text"
              />
              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div className="relationshipsArea" style={{gridArea: 'relationships'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Pessoas da Comunidade ({favPeople.length})</h2>
            <ul>
              {favPeople.map((item) => {
                return(
                  <li key={item}>
                    <a href={`/users/${item}`}>
                      <img src={`https://github.com/${item}.png`} alt="Imagem do usuário no Github"/>
                      <span>{item}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({communities.length})</h2>
            <ul>
              {communities.map((community) => {
                return(
                  <li key={community.created_at}>
                    <a href="">
                      <img src={community.image} alt="Imagem da comunidade" />
                      <span>{community.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBox items={followers} title="Seguidores" />
        </div>
      </MainGrid>
    </>
  )
}
