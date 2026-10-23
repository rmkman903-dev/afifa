import * as THREE from 'three'

// Helper: Seeded pseudo-random generator for consistent procedural generation
function pseudoRandom(seed) {
  const x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

// 1. Sun Texture: Vibrant dynamic core with solar granules and flares
export function createSunTexture() {
  const width = 1024
  const height = 512
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')

  // Base solar plasma gradient
  const grad = ctx.createLinearGradient(0, 0, 0, height)
  grad.addColorStop(0, '#ff3b00')
  grad.addColorStop(0.2, '#ff6a00')
  grad.addColorStop(0.5, '#ff9900')
  grad.addColorStop(0.8, '#ff6a00')
  grad.addColorStop(1, '#ff3b00')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, width, height)

  // Solar granules & turbulent convection cells
  for (let i = 0; i < 400; i++) {
    const x = Math.random() * width
    const y = Math.random() * height
    const rad = 8 + Math.random() * 25
    const cellGrad = ctx.createRadialGradient(x, y, 0, x, y, rad)
    cellGrad.addColorStop(0, 'rgba(255, 255, 200, 0.45)')
    cellGrad.addColorStop(0.5, 'rgba(255, 170, 0, 0.25)')
    cellGrad.addColorStop(1, 'rgba(255, 60, 0, 0)')
    ctx.fillStyle = cellGrad
    ctx.beginPath()
    ctx.arc(x, y, rad, 0, Math.PI * 2)
    ctx.fill()
  }

  // Solar flare streaks
  ctx.fillStyle = 'rgba(255, 230, 150, 0.15)'
  for (let i = 0; i < 40; i++) {
    const y = Math.random() * height
    ctx.fillRect(0, y, width, 2 + Math.random() * 6)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.ClampToEdgeWrapping
  return texture
}

// 2. Mercury Texture: Cratered slate grey, rocky and desolate
export function createMercuryTexture() {
  const width = 512
  const height = 256
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')

  // Base slate grey
  ctx.fillStyle = '#83858a'
  ctx.fillRect(0, 0, width, height)

  // High & low terrain variation
  for (let i = 0; i < 300; i++) {
    const x = Math.random() * width
    const y = Math.random() * height
    const rad = 4 + Math.random() * 20
    const shade = Math.random() > 0.5 ? 'rgba(50, 52, 56, 0.35)' : 'rgba(160, 164, 170, 0.3)'
    ctx.fillStyle = shade
    ctx.beginPath()
    ctx.arc(x, y, rad, 0, Math.PI * 2)
    ctx.fill()
  }

  // Impact craters with rim highlights
  for (let i = 0; i < 80; i++) {
    const x = Math.random() * width
    const y = Math.random() * height
    const rad = 2 + Math.random() * 8

    // Crater floor
    ctx.fillStyle = 'rgba(30, 32, 35, 0.6)'
    ctx.beginPath()
    ctx.arc(x, y, rad, 0, Math.PI * 2)
    ctx.fill()

    // Crater rim
    ctx.strokeStyle = 'rgba(200, 205, 210, 0.5)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.arc(x, y, rad, 0, Math.PI * 2)
    ctx.stroke()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  return texture
}

// 3. Venus Texture: Dense swirling amber & creamy sulfuric atmosphere
export function createVenusTexture() {
  const width = 512
  const height = 256
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')

  // Golden base
  const grad = ctx.createLinearGradient(0, 0, 0, height)
  grad.addColorStop(0, '#caa369')
  grad.addColorStop(0.3, '#e7c687')
  grad.addColorStop(0.5, '#f4d59e')
  grad.addColorStop(0.7, '#dab072')
  grad.addColorStop(1, '#caa369')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, width, height)

  // Atmospheric super-rotation swirling cloud bands
  for (let i = 0; i < 60; i++) {
    ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 245, 220, 0.18)' : 'rgba(180, 130, 70, 0.15)'
    ctx.beginPath()
    const y = (i / 60) * height
    const waveAmp = 5 + Math.random() * 10
    ctx.moveTo(0, y)
    for (let x = 0; x <= width; x += 30) {
      ctx.lineTo(x, y + Math.sin(x * 0.03 + i) * waveAmp)
    }
    ctx.lineTo(width, height)
    ctx.lineTo(0, height)
    ctx.closePath()
    ctx.fill()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  return texture
}

// 4. Earth Texture: Vibrant oceans, continents & vegetation
export function createEarthTexture() {
  const width = 1024
  const height = 512
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')

  // Deep royal ocean base
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, height)
  oceanGrad.addColorStop(0, '#0a2342')
  oceanGrad.addColorStop(0.5, '#0c356a')
  oceanGrad.addColorStop(1, '#0a2342')
  ctx.fillStyle = oceanGrad
  ctx.fillRect(0, 0, width, height)

  // Continents generator (procedural landmass clusters)
  const continents = [
    // North America
    { cx: width * 0.25, cy: height * 0.32, rx: 75, ry: 50 },
    // South America
    { cx: width * 0.32, cy: height * 0.65, rx: 55, ry: 75 },
    // Eurasia
    { cx: width * 0.65, cy: height * 0.30, rx: 120, ry: 60 },
    // Africa
    { cx: width * 0.55, cy: height * 0.55, rx: 70, ry: 70 },
    // Australia
    { cx: width * 0.82, cy: height * 0.72, rx: 45, ry: 35 },
    // Greenland / North
    { cx: width * 0.38, cy: height * 0.15, rx: 35, ry: 20 },
  ]

  continents.forEach(cont => {
    // Landmass blobs
    for (let i = 0; i < 35; i++) {
      const x = cont.cx + (Math.random() - 0.5) * cont.rx * 1.8
      const y = cont.cy + (Math.random() - 0.5) * cont.ry * 1.6
      const rad = 15 + Math.random() * 35

      // Natural green/brown gradients
      const isCoast = Math.random() > 0.4
      ctx.fillStyle = isCoast ? '#2d6a4f' : '#40916c'
      ctx.beginPath()
      ctx.arc(x, y, rad, 0, Math.PI * 2)
      ctx.fill()
    }

    // High terrain / mountain spines (ochre/brown)
    for (let i = 0; i < 15; i++) {
      const x = cont.cx + (Math.random() - 0.5) * cont.rx * 1.2
      const y = cont.cy + (Math.random() - 0.5) * cont.ry * 1.2
      ctx.fillStyle = '#7f5539'
      ctx.beginPath()
      ctx.arc(x, y, 8 + Math.random() * 15, 0, Math.PI * 2)
      ctx.fill()
    }
  })

  // Polar ice caps (North & South)
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, width, height * 0.08)
  ctx.fillRect(0, height * 0.92, width, height * 0.08)

  // Jagged ice edges
  for (let x = 0; x < width; x += 15) {
    ctx.beginPath()
    ctx.arc(x, height * 0.08, 10 + Math.random() * 8, 0, Math.PI * 2)
    ctx.arc(x, height * 0.92, 10 + Math.random() * 8, 0, Math.PI * 2)
    ctx.fill()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  return texture
}

// 4b. Earth Clouds Texture: Realistic swirling cloud layer with transparency
export function createEarthCloudTexture() {
  const width = 1024
  const height = 512
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')

  ctx.clearRect(0, 0, width, height)

  // Cloud bands and cyclone spirals
  for (let i = 0; i < 280; i++) {
    const x = Math.random() * width
    const y = height * 0.15 + Math.random() * height * 0.7
    const rad = 12 + Math.random() * 32
    const opacity = 0.2 + Math.random() * 0.5

    const cloudGrad = ctx.createRadialGradient(x, y, 0, x, y, rad)
    cloudGrad.addColorStop(0, `rgba(255, 255, 255, ${opacity})`)
    cloudGrad.addColorStop(0.6, `rgba(240, 245, 255, ${opacity * 0.6})`)
    cloudGrad.addColorStop(1, 'rgba(255, 255, 255, 0)')

    ctx.fillStyle = cloudGrad
    ctx.beginPath()
    ctx.arc(x, y, rad, 0, Math.PI * 2)
    ctx.fill()
  }

  // Equatorial swirl
  for (let x = 0; x < width; x += 10) {
    const y = height * 0.5 + Math.sin(x * 0.02) * 20
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)'
    ctx.beginPath()
    ctx.arc(x, y, 16 + Math.sin(x * 0.05) * 8, 0, Math.PI * 2)
    ctx.fill()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  return texture
}

// 5. Moon (Luna) Texture: Pearlescent cratered surface
export function createMoonTexture() {
  const width = 512
  const height = 256
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = '#b0b3b8'
  ctx.fillRect(0, 0, width, height)

  // Lunar maria (dark basalt plains)
  const maria = [
    { x: width * 0.35, y: height * 0.38, r: 40 },
    { x: width * 0.55, y: height * 0.45, r: 50 },
    { x: width * 0.70, y: height * 0.35, r: 35 },
    { x: width * 0.45, y: height * 0.60, r: 30 }
  ]
  maria.forEach(m => {
    const grad = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r)
    grad.addColorStop(0, 'rgba(75, 78, 85, 0.7)')
    grad.addColorStop(1, 'rgba(120, 125, 132, 0)')
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2)
    ctx.fill()
  })

  // Craters with bright ejecta rays
  for (let i = 0; i < 90; i++) {
    const x = Math.random() * width
    const y = Math.random() * height
    const rad = 2 + Math.random() * 7

    ctx.fillStyle = 'rgba(60, 62, 68, 0.6)'
    ctx.beginPath()
    ctx.arc(x, y, rad, 0, Math.PI * 2)
    ctx.fill()

    ctx.strokeStyle = 'rgba(235, 238, 245, 0.6)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.arc(x, y, rad, 0, Math.PI * 2)
    ctx.stroke()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  return texture
}

// 6. Mars Texture: Crimson & rust red terrain with canyon basins and polar ice
export function createMarsTexture() {
  const width = 512
  const height = 256
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')

  // Terracotta & rust base
  ctx.fillStyle = '#c1440e'
  ctx.fillRect(0, 0, width, height)

  // Dark basalt volcanic regions (Syrtis Major, Acidalia Planitia)
  for (let i = 0; i < 180; i++) {
    const x = Math.random() * width
    const y = height * 0.2 + Math.random() * height * 0.6
    const rad = 10 + Math.random() * 30
    const darkGrad = ctx.createRadialGradient(x, y, 0, x, y, rad)
    darkGrad.addColorStop(0, 'rgba(88, 30, 8, 0.45)')
    darkGrad.addColorStop(1, 'rgba(193, 68, 14, 0)')
    ctx.fillStyle = darkGrad
    ctx.beginPath()
    ctx.arc(x, y, rad, 0, Math.PI * 2)
    ctx.fill()
  }

  // Olympus Mons & canyon rift highlights
  ctx.strokeStyle = 'rgba(60, 18, 5, 0.5)'
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(width * 0.3, height * 0.48)
  ctx.lineTo(width * 0.65, height * 0.52)
  ctx.stroke()

  // Polar ice caps (North & South)
  ctx.fillStyle = '#ffffff'
  ctx.beginPath()
  ctx.arc(width * 0.5, 0, 32, 0, Math.PI)
  ctx.fill()

  ctx.beginPath()
  ctx.arc(width * 0.5, height, 24, Math.PI, 0)
  ctx.fill()

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  return texture
}

// 7. Jupiter Texture: Iconic atmospheric storm belts & Great Red Spot
export function createJupiterTexture() {
  const width = 1024
  const height = 512
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')

  // Multi-banded alternating Jovian atmosphere
  const bands = [
    { pos: 0.00, color: '#c49b6b' },
    { pos: 0.12, color: '#e8d2b2' },
    { pos: 0.22, color: '#a26b38' },
    { pos: 0.30, color: '#f0e3ce' },
    { pos: 0.38, color: '#8d4d24' }, // North Equatorial Belt
    { pos: 0.48, color: '#e7d6bf' }, // Equatorial Zone
    { pos: 0.58, color: '#97532a' }, // South Equatorial Belt
    { pos: 0.68, color: '#eedec9' },
    { pos: 0.78, color: '#a87243' },
    { pos: 0.88, color: '#dfcdb4' },
    { pos: 1.00, color: '#bc9363' }
  ]

  const bandGrad = ctx.createLinearGradient(0, 0, 0, height)
  bands.forEach(b => bandGrad.addColorStop(b.pos, b.color))
  ctx.fillStyle = bandGrad
  ctx.fillRect(0, 0, width, height)

  // Turbulent wave swirls along band borders
  for (let i = 0; i < 40; i++) {
    const y = (i / 40) * height
    ctx.strokeStyle = i % 2 === 0 ? 'rgba(255, 240, 215, 0.2)' : 'rgba(90, 40, 15, 0.2)'
    ctx.lineWidth = 2 + Math.random() * 3
    ctx.beginPath()
    ctx.moveTo(0, y)
    for (let x = 0; x <= width; x += 20) {
      ctx.lineTo(x, y + Math.sin(x * 0.04 + i) * 3)
    }
    ctx.stroke()
  }

  // The Iconic Great Red Spot (Anti-cyclonic storm)
  const grsX = width * 0.62
  const grsY = height * 0.62
  const grsRadiusX = 55
  const grsRadiusY = 32

  const grsGrad = ctx.createRadialGradient(grsX, grsY, 5, grsX, grsY, grsRadiusX)
  grsGrad.addColorStop(0, '#bd3218')
  grsGrad.addColorStop(0.5, '#d35400')
  grsGrad.addColorStop(0.85, '#e67e22')
  grsGrad.addColorStop(1, 'rgba(230, 126, 34, 0)')

  ctx.save()
  ctx.translate(grsX, grsY)
  ctx.scale(1, grsRadiusY / grsRadiusX)
  ctx.fillStyle = grsGrad
  ctx.beginPath()
  ctx.arc(0, 0, grsRadiusX, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()

  // Inner vortex eye
  ctx.fillStyle = '#8b1e0b'
  ctx.beginPath()
  ctx.ellipse(grsX, grsY, 18, 10, 0, 0, Math.PI * 2)
  ctx.fill()

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  return texture
}

// 8. Saturn Texture: Soft golden honey gas giant
export function createSaturnTexture() {
  const width = 512
  const height = 256
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')

  // Elegant golden-amber gradient bands
  const grad = ctx.createLinearGradient(0, 0, 0, height)
  grad.addColorStop(0.0, '#bba375')
  grad.addColorStop(0.2, '#decc9c')
  grad.addColorStop(0.4, '#e9dab1')
  grad.addColorStop(0.5, '#f0e6c5')
  grad.addColorStop(0.6, '#e0cf9b')
  grad.addColorStop(0.8, '#d4be88')
  grad.addColorStop(1.0, '#bba375')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, width, height)

  // Subtle band striations
  for (let i = 0; i < 25; i++) {
    const y = (i / 25) * height
    ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 255, 230, 0.12)' : 'rgba(150, 120, 60, 0.1)'
    ctx.fillRect(0, y, width, 4)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  return texture
}

// 8b. Saturn Rings Texture: Majestic concentric rings with Cassini division & transparency
export function createSaturnRingTexture() {
  const width = 512
  const height = 64
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')

  // Draw radial gradient along the X axis (inner radius to outer radius)
  const grad = ctx.createLinearGradient(0, 0, width, 0)
  
  // Inner faint Ring C
  grad.addColorStop(0.00, 'rgba(0, 0, 0, 0)')
  grad.addColorStop(0.08, 'rgba(180, 160, 120, 0.25)')
  grad.addColorStop(0.22, 'rgba(215, 195, 150, 0.55)')

  // Main bright Ring B
  grad.addColorStop(0.25, 'rgba(240, 225, 180, 0.95)')
  grad.addColorStop(0.55, 'rgba(245, 230, 190, 0.98)')
  grad.addColorStop(0.60, 'rgba(220, 200, 160, 0.85)')

  // Cassini Division (Iconic dark gap!)
  grad.addColorStop(0.62, 'rgba(0, 0, 0, 0.02)')
  grad.addColorStop(0.67, 'rgba(0, 0, 0, 0.05)')

  // Ring A with subtle Encke gap
  grad.addColorStop(0.70, 'rgba(225, 210, 170, 0.85)')
  grad.addColorStop(0.85, 'rgba(210, 190, 150, 0.70)')
  grad.addColorStop(0.88, 'rgba(150, 130, 90, 0.25)')
  grad.addColorStop(0.92, 'rgba(190, 170, 130, 0.60)')

  // Outer boundary fade
  grad.addColorStop(0.98, 'rgba(120, 100, 70, 0.20)')
  grad.addColorStop(1.00, 'rgba(0, 0, 0, 0)')

  ctx.fillStyle = grad
  ctx.fillRect(0, 0, width, height)

  const texture = new THREE.CanvasTexture(canvas)
  return texture
}

// 9. Uranus Texture: Smooth aquamarine & pale ice-cyan
export function createUranusTexture() {
  const width = 512
  const height = 256
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')

  const grad = ctx.createLinearGradient(0, 0, 0, height)
  grad.addColorStop(0.0, '#7ce2ee')
  grad.addColorStop(0.3, '#92ebf6')
  grad.addColorStop(0.5, '#a6f1fa')
  grad.addColorStop(0.7, '#88e4f0')
  grad.addColorStop(1.0, '#6ed8e6')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, width, height)

  // Very faint atmospheric haze bands
  for (let i = 0; i < 15; i++) {
    const y = (i / 15) * height
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)'
    ctx.fillRect(0, y, width, 5)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  return texture
}

// 10. Neptune Texture: Deep royal azure blue with supersonic cloud streaks
export function createNeptuneTexture() {
  const width = 512
  const height = 256
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')

  const grad = ctx.createLinearGradient(0, 0, 0, height)
  grad.addColorStop(0.0, '#1c3d82')
  grad.addColorStop(0.3, '#2453aa')
  grad.addColorStop(0.5, '#2f67cc')
  grad.addColorStop(0.7, '#2350a4')
  grad.addColorStop(1.0, '#193674')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, width, height)

  // Supersonic methane storm wisps (Scooter storm)
  for (let i = 0; i < 12; i++) {
    const y = height * 0.3 + Math.random() * height * 0.4
    ctx.fillStyle = 'rgba(255, 255, 255, 0.35)'
    ctx.beginPath()
    const x = Math.random() * width
    ctx.ellipse(x, y, 30 + Math.random() * 40, 3 + Math.random() * 3, 0, 0, Math.PI * 2)
    ctx.fill()
  }

  // Dark spot
  ctx.fillStyle = 'rgba(15, 30, 65, 0.45)'
  ctx.beginPath()
  ctx.ellipse(width * 0.45, height * 0.42, 35, 18, 0, 0, Math.PI * 2)
  ctx.fill()

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  return texture
}
