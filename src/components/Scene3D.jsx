import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Stars, Float, Html } from '@react-three/drei'
import * as THREE from 'three'
import {
  createSunTexture,
  createMercuryTexture,
  createVenusTexture,
  createEarthTexture,
  createEarthCloudTexture,
  createMoonTexture,
  createMarsTexture,
  createJupiterTexture,
  createSaturnTexture,
  createSaturnRingTexture,
  createUranusTexture,
  createNeptuneTexture
} from './solarTextures'

// -------------------------------------------------------------
// PLANETARY SPECIFICATIONS
// -------------------------------------------------------------
const PLANETS_CONFIG = [
  {
    id: 'mercury',
    name: 'MERCURY',
    title: 'The Swift Planet',
    type: 'Terrestrial',
    radius: 0.22,
    distance: 3.4,
    speed: 1.4,
    rotationSpeed: 0.6,
    color: '#83858a',
    emissive: '#35373a',
    textureFactory: createMercuryTexture,
    details: {
      distAU: '0.39 AU',
      period: '88 Days',
      temp: '167°C',
      moons: 0,
      fact: 'Fastest orbital velocity in the Solar System (47 km/s)'
    }
  },
  {
    id: 'venus',
    name: 'VENUS',
    title: 'The Morning Star',
    type: 'Super-Greenhouse',
    radius: 0.32,
    distance: 4.8,
    speed: 1.05,
    rotationSpeed: -0.4, // Retrograde spin
    color: '#e7c687',
    emissive: '#5c451c',
    textureFactory: createVenusTexture,
    atmosphereColor: '#ffdd99',
    details: {
      distAU: '0.72 AU',
      period: '225 Days',
      temp: '464°C',
      moons: 0,
      fact: 'Hottest planet; rotates backwards relative to most planets'
    }
  },
  {
    id: 'earth',
    name: 'EARTH',
    title: 'The Blue Marble',
    type: 'Habitable World',
    radius: 0.36,
    distance: 6.6,
    speed: 0.85,
    rotationSpeed: 1.0,
    color: '#2b6cb0',
    emissive: '#092147',
    textureFactory: createEarthTexture,
    hasClouds: true,
    cloudFactory: createEarthCloudTexture,
    atmosphereColor: '#60a5fa',
    moon: {
      radius: 0.09,
      distance: 0.72,
      speed: 3.4,
      textureFactory: createMoonTexture
    },
    details: {
      distAU: '1.00 AU',
      period: '365.25 Days',
      temp: '15°C',
      moons: 1,
      fact: 'Only known haven for carbon-based computational minds'
    }
  },
  {
    id: 'mars',
    name: 'MARS',
    title: 'The Red Planet',
    type: 'Desert World',
    radius: 0.26,
    distance: 8.6,
    speed: 0.68,
    rotationSpeed: 0.95,
    color: '#c1440e',
    emissive: '#591e06',
    textureFactory: createMarsTexture,
    atmosphereColor: '#f97316',
    details: {
      distAU: '1.52 AU',
      period: '687 Days',
      temp: '-65°C',
      moons: 2,
      fact: 'Home to Olympus Mons, the largest volcano in the system'
    }
  },
  {
    id: 'jupiter',
    name: 'JUPITER',
    title: 'The Jovian King',
    type: 'Gas Giant',
    radius: 0.85,
    distance: 13.2,
    speed: 0.42,
    rotationSpeed: 2.2,
    color: '#d8b18a',
    emissive: '#4d3013',
    textureFactory: createJupiterTexture,
    atmosphereColor: '#fed7aa',
    hasGalileanMoons: true,
    details: {
      distAU: '5.20 AU',
      period: '11.86 Years',
      temp: '-110°C',
      moons: 95,
      fact: 'Has a magnetic field 20,000 times stronger than Earth'
    }
  },
  {
    id: 'saturn',
    name: 'SATURN',
    title: 'Jewel of the Solar System',
    type: 'Ringed Gas Giant',
    radius: 0.72,
    distance: 17.2,
    speed: 0.32,
    rotationSpeed: 1.9,
    color: '#decc9c',
    emissive: '#4a3b1a',
    textureFactory: createSaturnTexture,
    tilt: [0.45, 0, 0.15],
    rings: {
      innerRadius: 0.98,
      outerRadius: 2.15,
      textureFactory: createSaturnRingTexture
    },
    details: {
      distAU: '9.58 AU',
      period: '29.45 Years',
      temp: '-140°C',
      moons: 146,
      fact: 'Rings are made mostly of billions of water ice chunks'
    }
  },
  {
    id: 'uranus',
    name: 'URANUS',
    title: 'The Tilted Giant',
    type: 'Ice Giant',
    radius: 0.50,
    distance: 21.4,
    speed: 0.22,
    rotationSpeed: -1.2,
    color: '#7ce2ee',
    emissive: '#164e63',
    textureFactory: createUranusTexture,
    tilt: [1.4, 0, 0], // Nearly 90 deg sideways
    rings: {
      innerRadius: 0.68,
      outerRadius: 0.95,
      isVertical: true
    },
    details: {
      distAU: '19.2 AU',
      period: '84.0 Years',
      temp: '-195°C',
      moons: 28,
      fact: 'Rotates almost completely on its side with extreme seasons'
    }
  },
  {
    id: 'neptune',
    name: 'NEPTUNE',
    title: 'The Mystic Ice Giant',
    type: 'Ice Giant',
    radius: 0.48,
    distance: 25.4,
    speed: 0.17,
    rotationSpeed: 1.4,
    color: '#274687',
    emissive: '#0c1d47',
    textureFactory: createNeptuneTexture,
    atmosphereColor: '#38bdf8',
    details: {
      distAU: '30.1 AU',
      period: '164.8 Years',
      temp: '-200°C',
      moons: 16,
      fact: 'Supersonic winds reach up to 2,100 km/h in its upper clouds'
    }
  }
]

// -------------------------------------------------------------
// 1. THE SUN COMPONENT (Dynamic Corona & Heat Radiance)
// -------------------------------------------------------------
function Sun({ isHovered, onHover, onClick }) {
  const sunRef = useRef()
  const coronaRef = useRef()
  const flareRef = useRef()

  const sunTexture = useMemo(() => createSunTexture(), [])

  useFrame((state, delta) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += delta * 0.12
    }
    if (coronaRef.current) {
      coronaRef.current.rotation.y -= delta * 0.08
      coronaRef.current.rotation.z += delta * 0.05
      // Gentle breathing pulse
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.8) * 0.04
      coronaRef.current.scale.set(pulse, pulse, pulse)
    }
    if (flareRef.current) {
      flareRef.current.rotation.x += delta * 0.05
      flareRef.current.rotation.y += delta * 0.07
    }
  })

  return (
    <group
      position={[0, 0, 0]}
      onPointerOver={(e) => {
        e.stopPropagation()
        onHover('sun')
      }}
      onPointerOut={() => onHover(null)}
      onClick={(e) => {
        e.stopPropagation()
        onClick && onClick('sun')
      }}
      className="cursor-pointer"
    >
      {/* Central Blinding Solar Star Core */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshBasicMaterial map={sunTexture} color="#fff2cc" />
      </mesh>

      {/* Primary Radiant Corona Shell */}
      <mesh ref={coronaRef} scale={1.12}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial
          color="#ff7700"
          transparent
          opacity={0.38}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Atmospheric Flare Halo */}
      <mesh ref={flareRef} scale={1.3}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial
          color="#ff4400"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Sun Light Source - Illuminates all daytime hemispheres */}
      <pointLight
        color="#fff6e8"
        intensity={3.2}
        distance={90}
        decay={0.7}
      />
      {/* Ambient solar warmth */}
      <pointLight
        color="#ff8c00"
        intensity={1.2}
        distance={40}
        decay={1.2}
      />
    </group>
  )
}

// -------------------------------------------------------------
// 2. ORBIT TRACK COMPONENT (Sci-Fi Neon Orbit Ring)
// -------------------------------------------------------------
function OrbitTrack({ distance, isHighlighted }) {
  const lineGeometry = useMemo(() => {
    const points = []
    const segments = 128
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2
      points.push(new THREE.Vector3(Math.cos(theta) * distance, 0, Math.sin(theta) * distance))
    }
    const geom = new THREE.BufferGeometry().setFromPoints(points)
    return geom
  }, [distance])

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial
        color={isHighlighted ? "#00f0ff" : "#38bdf8"}
        transparent
        opacity={isHighlighted ? 0.65 : 0.16}
        linewidth={isHighlighted ? 2 : 1}
      />
    </line>
  )
}

// -------------------------------------------------------------
// 3. PLANET COMPONENT WITH MOONS & RINGS
// -------------------------------------------------------------
function Planet({
  config,
  speedMultiplier,
  showLabel,
  isHovered,
  onHover,
  onClick
}) {
  const orbitRef = useRef()
  const planetRef = useRef()
  const cloudsRef = useRef()
  const moonOrbitRef = useRef()

  // Generate textures once
  const planetTexture = useMemo(() => config.textureFactory(), [config])
  const cloudTexture = useMemo(() => (config.hasClouds ? config.cloudFactory() : null), [config])
  const moonTexture = useMemo(() => (config.moon ? config.moon.textureFactory() : null), [config])
  const ringTexture = useMemo(
    () => (config.rings && config.rings.textureFactory ? config.rings.textureFactory() : null),
    [config]
  )

  // Galilean Moons for Jupiter
  const galileanMoons = useMemo(() => {
    if (!config.hasGalileanMoons) return []
    return [
      { name: 'Io', dist: 1.35, size: 0.045, speed: 4.2, color: '#fef08a' },
      { name: 'Europa', dist: 1.65, size: 0.04, speed: 3.1, color: '#e2e8f0' },
      { name: 'Ganymede', dist: 2.05, size: 0.065, speed: 2.2, color: '#94a3b8' },
      { name: 'Callisto', dist: 2.55, size: 0.055, speed: 1.5, color: '#64748b' }
    ]
  }, [config.hasGalileanMoons])

  useFrame((state, delta) => {
    // 1. Revolution around the Sun
    if (orbitRef.current && speedMultiplier > 0) {
      orbitRef.current.rotation.y += delta * (config.speed * 0.18) * speedMultiplier
    }

    // 2. Axial Rotation
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * config.rotationSpeed * 0.5
    }

    // 3. Cloud Layer rotation (slightly faster for dynamic weather)
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * (config.rotationSpeed * 0.65)
    }

    // 4. Moon orbit around Earth
    if (moonOrbitRef.current && speedMultiplier > 0) {
      moonOrbitRef.current.rotation.y += delta * (config.moon.speed * 0.4) * speedMultiplier
    }
  })

  return (
    <group ref={orbitRef}>
      {/* Position planet along its orbital radius */}
      <group position={[config.distance, 0, 0]}>
        
        {/* Planet Core Mesh */}
        <group
          ref={planetRef}
          rotation={config.tilt || [0, 0, 0]}
          onPointerOver={(e) => {
            e.stopPropagation()
            onHover(config.id)
          }}
          onPointerOut={() => onHover(null)}
          onClick={(e) => {
            e.stopPropagation()
            onClick && onClick(config.id)
          }}
        >
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[config.radius, 48, 48]} />
            <meshStandardMaterial
              map={planetTexture}
              roughness={0.7}
              metalness={0.1}
              emissive={config.emissive}
              emissiveIntensity={isHovered ? 0.35 : 0.05}
            />
          </mesh>

          {/* Earth Atmosphere and Weather Clouds */}
          {config.hasClouds && cloudTexture && (
            <mesh ref={cloudsRef} scale={1.035}>
              <sphereGeometry args={[config.radius, 40, 40]} />
              <meshStandardMaterial
                map={cloudTexture}
                transparent
                opacity={0.65}
                blending={THREE.NormalBlending}
                depthWrite={false}
              />
            </mesh>
          )}

          {/* Atmospheric Glow Rim */}
          {config.atmosphereColor && (
            <mesh scale={1.08}>
              <sphereGeometry args={[config.radius, 32, 32]} />
              <meshBasicMaterial
                color={config.atmosphereColor}
                transparent
                opacity={isHovered ? 0.45 : 0.22}
                blending={THREE.AdditiveBlending}
                side={THREE.BackSide}
              />
            </mesh>
          )}

          {/* Saturn / Uranus Rings */}
          {config.rings && (
            <mesh
              rotation={config.rings.isVertical ? [0, 0, Math.PI / 2] : [Math.PI / 2, 0, 0]}
              receiveShadow
            >
              <ringGeometry
                args={[config.rings.innerRadius, config.rings.outerRadius, 64]}
              />
              {ringTexture ? (
                <meshStandardMaterial
                  map={ringTexture}
                  side={THREE.DoubleSide}
                  transparent
                  opacity={0.92}
                  roughness={0.5}
                />
              ) : (
                <meshStandardMaterial
                  color="#a5f3fc"
                  side={THREE.DoubleSide}
                  transparent
                  opacity={0.35}
                />
              )}
            </mesh>
          )}
        </group>

        {/* Earth's Moon */}
        {config.moon && (
          <group ref={moonOrbitRef}>
            <mesh position={[config.moon.distance, 0, 0]} castShadow receiveShadow>
              <sphereGeometry args={[config.moon.radius, 24, 24]} />
              <meshStandardMaterial
                map={moonTexture}
                roughness={0.85}
                metalness={0.05}
                emissive="#222"
                emissiveIntensity={0.05}
              />
            </mesh>
          </group>
        )}

        {/* Jupiter's Galilean Moons */}
        {galileanMoons.map((m, idx) => (
          <group key={idx} rotation={[0, idx * 1.5, 0]}>
            <mesh position={[m.dist, 0, 0]}>
              <sphereGeometry args={[m.size, 16, 16]} />
              <meshBasicMaterial color={m.color} />
            </mesh>
          </group>
        ))}

        {/* Hover Highlight Ring */}
        {isHovered && (
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[config.radius * 1.45, config.radius * 1.6, 32]} />
            <meshBasicMaterial
              color="#00f0ff"
              side={THREE.DoubleSide}
              transparent
              opacity={0.85}
            />
          </mesh>
        )}

        {/* Sleek Sci-Fi Planet Name Tag */}
        {showLabel && (
          <Html
            position={[0, config.radius + 0.45, 0]}
            center
            distanceFactor={18}
            className="pointer-events-none select-none transition-all duration-300"
          >
            <div
              className={`px-2 py-0.5 rounded border text-[10px] font-mono tracking-wider uppercase backdrop-blur-md whitespace-nowrap shadow-lg ${
                isHovered
                  ? 'bg-cyan-500/30 border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(0,240,255,0.5)]'
                  : 'bg-slate-900/70 border-slate-700/60 text-slate-300'
              }`}
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 bg-cyan-400 animate-pulse"></span>
              {config.name}
            </div>
          </Html>
        )}
      </group>
    </group>
  )
}

// -------------------------------------------------------------
// 4. MAIN ASTEROID BELT (Between Mars and Jupiter)
// -------------------------------------------------------------
function AsteroidBelt({ count = 650, speedMultiplier }) {
  const beltRef = useRef()

  const [positions, scales, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const sc = new Float32Array(count)
    const cols = new Float32Array(count * 3)

    const color1 = new THREE.Color('#8c857b')
    const color2 = new THREE.Color('#5c554e')
    const color3 = new THREE.Color('#b5aba0')

    for (let i = 0; i < count; i++) {
      // Radius between 10.2 and 11.8 units
      const radius = 10.2 + Math.random() * 1.6
      const angle = Math.random() * Math.PI * 2
      // Slight vertical dispersal
      const y = (Math.random() - 0.5) * 0.55

      pos[i * 3] = Math.cos(angle) * radius
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = Math.sin(angle) * radius

      sc[i] = 0.02 + Math.random() * 0.05

      const c = Math.random() > 0.6 ? color1 : Math.random() > 0.3 ? color2 : color3
      cols[i * 3] = c.r
      cols[i * 3 + 1] = c.g
      cols[i * 3 + 2] = c.b
    }

    return [pos, sc, cols]
  }, [count])

  useFrame((state, delta) => {
    if (beltRef.current && speedMultiplier > 0) {
      beltRef.current.rotation.y += delta * 0.03 * speedMultiplier
    }
  })

  return (
    <group ref={beltRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          vertexColors
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>
    </group>
  )
}

// -------------------------------------------------------------
// 5. DEEP SPACE NEBULA & COSMIC DUST
// -------------------------------------------------------------
function CosmicNebulaClouds() {
  const pointsRef = useRef()

  const [positions, colors] = useMemo(() => {
    const count = 180
    const pos = new Float32Array(count * 3)
    const cols = new Float32Array(count * 3)

    const cyan = new THREE.Color('#00f0ff')
    const purple = new THREE.Color('#8b5cf6')
    const deepBlue = new THREE.Color('#1e1b4b')

    for (let i = 0; i < count; i++) {
      const radius = 30 + Math.random() * 35
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6
      pos[i * 3 + 2] = radius * Math.cos(phi)

      const mixed = Math.random() > 0.5 ? cyan : purple
      if (Math.random() > 0.7) mixed.lerp(deepBlue, 0.4)

      cols[i * 3] = mixed.r
      cols[i * 3 + 1] = mixed.g
      cols[i * 3 + 2] = mixed.b
    }
    return [pos, cols]
  }, [])

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.008
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.45}
        vertexColors
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

// -------------------------------------------------------------
// 6. CAMERA PARALLAX RIG
// -------------------------------------------------------------
function CameraRig({ mousePos, isUserInteracting }) {
  const { camera } = useThree()

  useFrame(() => {
    // Only apply subtle mouse parallax when user is not manually dragging OrbitControls
    if (!isUserInteracting) {
      const targetX = (mousePos.x * 3.5)
      const targetY = 11 + (-mousePos.y * 2.2)
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.02)
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.02)
    }
  })

  return null
}

// -------------------------------------------------------------
// 7. MAIN SCENE 3D CONTAINER WITH INTERACTIVE HUD
// -------------------------------------------------------------
export default function Scene3D() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [hasWebGLError, setHasWebGLError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Solar System Interactive Controls
  const [speedMultiplier, setSpeedMultiplier] = useState(1.0)
  const [showOrbits, setShowOrbits] = useState(true)
  const [showLabels, setShowLabels] = useState(true)
  const [hoveredEntity, setHoveredEntity] = useState(null)
  const [selectedEntity, setSelectedEntity] = useState(null)
  const [isUserInteracting, setIsUserInteracting] = useState(false)
  const controlsRef = useRef()

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (mobile) setShowLabels(false) // Clean look on mobile
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Retrieve active entity data for telemetry card
  const activeInfo = useMemo(() => {
    const targetId = hoveredEntity || selectedEntity
    if (!targetId) return null
    if (targetId === 'sun') {
      return {
        name: 'THE SUN (HELIOS)',
        title: 'G-Type Main-Sequence Star',
        type: 'Yellow Dwarf (G2V)',
        details: {
          distAU: '0.00 AU (Center)',
          period: '230M Yrs (Galactic)',
          temp: '5,500°C (Surface) / 15M°C (Core)',
          moons: '8 Planets + Belts',
          fact: 'Accounts for 99.86% of the total mass of the Solar System'
        }
      }
    }
    return PLANETS_CONFIG.find((p) => p.id === targetId) || null
  }, [hoveredEntity, selectedEntity])

  // Reset Camera View
  const handleResetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
    setSelectedEntity(null)
  }

  // Graceful WebGL Error Fallback
  if (hasWebGLError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-80 h-80 rounded-full border border-cyan-500/30 bg-gradient-to-tr from-purple-900/40 via-cyan-900/20 to-transparent backdrop-blur-2xl flex items-center justify-center animate-pulse-glow">
          <div className="w-64 h-64 rounded-full border border-purple-500/40 animate-spin-slow"></div>
          <div className="absolute w-20 h-20 rounded-full bg-amber-500/80 shadow-[0_0_40px_#ffaa00]"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
      {/* 3D WebGL Canvas */}
      <Canvas
        camera={{ position: [0, 11, 23], fov: 48, near: 0.1, far: 1000 }}
        dpr={isMobile ? [1, 1.25] : [1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        onError={() => setHasWebGLError(true)}
      >
        <color attach="background" args={['#030014']} />

        {/* Ambient celestial lighting for silhouette definition */}
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 15, 0]} intensity={0.2} color="#4338ca" />

        {/* Deep Field Twinkling Stars */}
        <Stars
          radius={70}
          depth={50}
          count={isMobile ? 1200 : 2800}
          factor={4}
          saturation={0.3}
          fade
          speed={0.8}
        />

        {/* Nebula cosmic dust particles */}
        <CosmicNebulaClouds />

        {/* The Solar System Core */}
        <Suspense fallback={null}>
          {/* Central Sun */}
          <Sun
            isHovered={hoveredEntity === 'sun'}
            onHover={setHoveredEntity}
            onClick={setSelectedEntity}
          />

          {/* Orbital Paths */}
          {showOrbits &&
            PLANETS_CONFIG.map((p) => (
              <OrbitTrack
                key={`orbit-${p.id}`}
                distance={p.distance}
                isHighlighted={hoveredEntity === p.id || selectedEntity === p.id}
              />
            ))}

          {/* Planets & Moons */}
          {PLANETS_CONFIG.map((planet) => (
            <Planet
              key={planet.id}
              config={planet}
              speedMultiplier={speedMultiplier}
              showLabel={showLabels}
              isHovered={hoveredEntity === planet.id || selectedEntity === planet.id}
              onHover={setHoveredEntity}
              onClick={setSelectedEntity}
            />
          ))}

          {/* Asteroid Belt */}
          <AsteroidBelt
            count={isMobile ? 300 : 750}
            speedMultiplier={speedMultiplier}
          />
        </Suspense>

        {/* Camera Controls & Parallax */}
        <CameraRig mousePos={mousePos} isUserInteracting={isUserInteracting} />
        <OrbitControls
          ref={controlsRef}
          enablePan={true}
          enableZoom={true}
          minDistance={4}
          maxDistance={50}
          maxPolarAngle={Math.PI / 2 + 0.15}
          onStart={() => setIsUserInteracting(true)}
          onEnd={() => setIsUserInteracting(false)}
          dampingFactor={0.06}
        />
      </Canvas>

      {/* --------------------------------------------------------- */}
      {/* FUTURISTIC SOLAR SYSTEM TELEMETRY & CONTROLS HUD */}
      {/* --------------------------------------------------------- */}

      {/* Floating Planet Inspection Telemetry Card */}
      {activeInfo && (
        <div className="absolute top-24 left-4 sm:left-8 z-20 max-w-xs sm:max-w-sm pointer-events-auto animate-fadeIn">
          <div className="glass-panel p-4 rounded-2xl border border-cyan-400/40 shadow-[0_0_25px_rgba(0,240,255,0.2)] backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-bl-full pointer-events-none"></div>

            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-2.5">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase">
                  {activeInfo.name}
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700">
                {activeInfo.type}
              </span>
            </div>

            <p className="text-xs text-slate-300 font-sans mb-3 italic">
              "{activeInfo.details.fact}"
            </p>

            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="p-1.5 rounded bg-slate-900/50 border border-slate-800">
                <span className="text-slate-400 block text-[9px] uppercase">Orbit Radius</span>
                <span className="text-cyan-300 font-semibold">{activeInfo.details.distAU}</span>
              </div>
              <div className="p-1.5 rounded bg-slate-900/50 border border-slate-800">
                <span className="text-slate-400 block text-[9px] uppercase">Orbital Period</span>
                <span className="text-emerald-300 font-semibold">{activeInfo.details.period}</span>
              </div>
              <div className="p-1.5 rounded bg-slate-900/50 border border-slate-800">
                <span className="text-slate-400 block text-[9px] uppercase">Avg Temp</span>
                <span className="text-amber-300 font-semibold">{activeInfo.details.temp}</span>
              </div>
              <div className="p-1.5 rounded bg-slate-900/50 border border-slate-800">
                <span className="text-slate-400 block text-[9px] uppercase">Moons</span>
                <span className="text-purple-300 font-semibold">{activeInfo.details.moons}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setHoveredEntity(null)
                setSelectedEntity(null)
              }}
              className="mt-3 w-full py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 hover:text-white rounded bg-slate-800/40 hover:bg-slate-700/60 transition-colors"
            >
              Dismiss Telemetry ✕
            </button>
          </div>
        </div>
      )}

      {/* Bottom Floating Sci-Fi Solar HUD Control Bar */}
      <div className="absolute bottom-6 right-4 sm:right-8 z-20 pointer-events-auto">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-2xl glass-panel border border-cyan-500/30 shadow-[0_0_20px_rgba(0,240,255,0.15)] text-[11px] font-mono">
          
          {/* Orbit Speed Selector */}
          <div className="flex items-center space-x-1 px-2 py-1 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="text-slate-400 text-[10px] hidden sm:inline">SPEED:</span>
            {[
              { label: '0x', val: 0 },
              { label: '1x', val: 1 },
              { label: '2.5x', val: 2.5 }
            ].map((spd) => (
              <button
                key={spd.label}
                onClick={() => setSpeedMultiplier(spd.val)}
                className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all ${
                  speedMultiplier === spd.val
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_8px_rgba(0,240,255,0.6)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {spd.label}
              </button>
            ))}
          </div>

          {/* Toggle Orbits */}
          <button
            onClick={() => setShowOrbits((prev) => !prev)}
            className={`px-2.5 py-1 rounded-xl transition-all border ${
              showOrbits
                ? 'bg-cyan-500/20 border-cyan-400/60 text-cyan-200'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title="Toggle Planetary Orbit Lines"
          >
            Orbits {showOrbits ? '✓' : '✗'}
          </button>

          {/* Toggle Labels */}
          <button
            onClick={() => setShowLabels((prev) => !prev)}
            className={`px-2.5 py-1 rounded-xl transition-all border ${
              showLabels
                ? 'bg-cyan-500/20 border-cyan-400/60 text-cyan-200'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title="Toggle Planet Hologram Labels"
          >
            Labels {showLabels ? '✓' : '✗'}
          </button>

          {/* Reset View */}
          <button
            onClick={handleResetCamera}
            className="px-2.5 py-1 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-400/40 text-slate-300 hover:text-white transition-all active:scale-95"
            title="Reset to Default Perspective"
          >
            Reset ↺
          </button>
        </div>
      </div>
    </div>
  )
}
