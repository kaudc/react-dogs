import React from 'react'

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null)
  React.useEffect(() => {
    const changeMatch = () => {
      const { matches: matchedMedia } = window.matchMedia(media)
      setMatch(matchedMedia)
    }
    changeMatch()
    window.addEventListener('resize', changeMatch)
    return () => {
      window.removeEventListener('resize', changeMatch)
    }
  }, [media])
  return match
}

export default useMedia
