import * as ex from 'excalibur'
import {TiledMapResource} from '@excaliburjs/plugin-tiled'

const engine = new ex.Engine({
  width: 800,
  height: 600,
})

const map = new TiledMapResource('iso.tmx') // causes error
// const map = new TiledMapResource('orthogonal.tmx') // works

const loader = new ex.Loader([map])

engine.start(loader).then(() => {
  map.addTiledMapToScene(engine.currentScene)
})