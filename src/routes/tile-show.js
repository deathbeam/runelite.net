import { h, Fragment } from 'preact'
import Layout from '../components/layout'
import hero from '../_data/hero'
import Meta from '../components/meta'
import { connect } from 'react-redux'
import '../components/tooltip.css'
import './tag.css'
import L, { point, rectangle, Control, DomUtil, DomEvent } from 'leaflet'
import {
  MapContainer,
  TileLayer,
  Rectangle,
  Tooltip,
  ImageOverlay,
  useMap
} from 'react-leaflet'
import './tile.scss'

const BOUNDS_TOLERANCE = 4

L.CRS.Simple.infinite = false
L.CRS.Simple.projection.bounds = new L.Bounds([
  [0, 0],
  [12800, 12800]
])

const translateBounds = bounds => {
  var newbounds = [
    [0, 0],
    [12000, 12000]
  ]
  if (Array.isArray(bounds) && bounds.length === 2) {
    // South-West
    if (Array.isArray(bounds[0]) && bounds[0].length === 2) {
      newbounds[0][0] = bounds[0][1]
      newbounds[0][1] = bounds[0][0]
    }
    // North-East
    if (Array.isArray(bounds[1]) && bounds[1].length === 2) {
      newbounds[1][0] = bounds[1][1]
      newbounds[1][1] = bounds[1][0]
    }
  }
  return newbounds
}

const toColor = num => {
  num >>>= 0
  const b = num & 0xff,
    g = (num & 0xff00) >>> 8,
    r = (num & 0xff0000) >>> 16,
    a = ((num & 0xff000000) >>> 24) / 255
  return 'rgba(' + [r, g, b, a].join(',') + ')'
}

const mapTile = tile => {
  const regionId = tile['regionId']
  const regionX = tile['regionX']
  const regionY = tile['regionY']
  let jsColor = '#ffffff'

  if (tile['color']) {
    const intColor = tile['color']['value']

    if (intColor) {
      jsColor = toColor(intColor)
    } else if (tile['color']) {
      const argb = tile['color']
      jsColor = '#' + argb.slice(3, 9) + argb[1] + argb[2]
    }
  }

  const x = ((regionId >>> 8) << 6) + regionX
  const y = ((regionId & 0xff) << 6) + regionY
  const z = tile['z']

  return {
    x,
    y,
    z,
    label: tile['label'],
    color: jsColor
  }
}

const prepareMap = map => {
  map.setView([3225, 3219], 2)

  const resetButton = new Control({ position: 'topleft' })
  resetButton.onAdd = map => {
    const container = DomUtil.create(
      'div',
      'leaflet-bar leaflet-control leaflet-control-zoom'
    )
    const button = DomUtil.create('a', 'fas fa-redo', container)

    DomEvent.disableClickPropagation(button).addListener(
      button,
      'click',
      () => map.viewport && map.fitBounds(map.viewport),
      button
    )

    return container
  }

  resetButton.addTo(map)
}

const TileLayerHandler = ({ plane }) => (
  <TileLayer
    url="https://maps.runescape.wiki/osrs/tiles/{mapID}_{cacheVersion}/{z}/{plane}_{x}_{-y}.png"
    plane={plane}
    cacheVersion={'2019-03-28_1'}
    mapID={0}
    bounds={translateBounds([
      [1052, 2396],
      [3940, 4132]
    ])}
    minZoom={-3}
    maxZoom={5}
    maxNativeZoom={3}
  />
)

const TileMapHandler = ({ tiles }) => {
  const map = useMap()
  const tilesX = tiles.map(t => t.x)
  const tilesY = tiles.map(t => t.y)
  const minX = Math.min(...tilesX) - BOUNDS_TOLERANCE
  const maxX = Math.max(...tilesX) + BOUNDS_TOLERANCE
  const minY = Math.min(...tilesY) - BOUNDS_TOLERANCE
  const maxY = Math.max(...tilesY) + BOUNDS_TOLERANCE
  const viewport = translateBounds([
    [minX, minY],
    [maxX, maxY]
  ])

  map.viewport = viewport
  map.fitBounds(viewport)
  map.setMaxBounds(viewport)

  return tiles.map(tile => {
    const bounds = translateBounds([
      [tile.x, tile.y],
      [tile.x + 1, tile.y + 1]
    ])
    return (
      <Fragment>
        {tile.label && (
          <ImageOverlay bounds={bounds} url={'/img/tile-text.png'} />
        )}
        <Rectangle
          bounds={bounds}
          pathOptions={{
            color: tile.color,
            fillColor: tile.color,
            fillOpacity: 0.3,
            weight: 1,
            interactive: false
          }}
        >
          {tile.label && <Tooltip>{tile.label}</Tooltip>}
        </Rectangle>
      </Fragment>
    )
  })
}

const TileMap = ({ tiles }) => {
  if (!tiles || tiles.length === 0) {
    return null
  }

  return (
    <MapContainer
      maxBounds={[
        [0, 0],
        [12800, 12800]
      ]}
      maxBoundsViscosity={0.5}
      attributionControl={false}
      whenCreated={prepareMap}
      crs={L.CRS.Simple}
    >
      <TileLayerHandler plane={tiles[0].z} />
      <TileMapHandler tiles={tiles} />
    </MapContainer>
  )
}

const TileShow = ({ data, tiles }) => {
  return (
    <Layout>
      <Meta title={`Tile markers - ${hero.title}`} description={data} />
      <section id="tiles">
        <div class="content-section tag-container">
          <h1 class="page-header">Tile markers</h1>
          <TileMap tiles={tiles.map(mapTile)} />
          <pre class="pre-select">{data}</pre>
        </div>
      </section>
    </Layout>
  )
}

const mapStateToProps = (state, { b64 }) => {
  const decodedData = atob(b64)
  let jsonData = []

  try {
    jsonData = JSON.parse(decodedData)
  } catch (ignored) {}

  return {
    data: decodedData,
    tiles: jsonData
  }
}

export default connect(mapStateToProps)(TileShow)
