import fs from 'fs'

const jsonFile = '../models/feed.json'

export const jsonFeed = () => {
  const content = JSON.parse(fs.readFileSync(jsonFile, 'utf8'))
  return content
}