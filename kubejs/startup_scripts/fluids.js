StartupEvents.registry('fluid', event => {

  // Mozanite
  event.create('molten_monazite')
    .thickTexture(0x8D2185)
    .bucketColor(0x8D2185)
    .displayName('Molten Monazite')
    .luminosity(8)
    .noBucket()

  // Antimony
  event.create('molten_antimony')
    .thickTexture(0xA5A5B4)
    .bucketColor(0xA5A5B4)
    .displayName('Molten Antimony')
    .luminosity(8)
    .noBucket()

  // Iridium
  event.create('molten_iridium')
    .thickTexture(0xE5E5E5)
    .bucketColor(0xE5E5E5)
    .displayName('Molten Iridium')
    .luminosity(8)
    .noBucket()

  // Alloys (TO BE DONE)
  // Battery Alloy
  event.create('molten_battery_alloy')
    .thickTexture(0x93758D)
    .bucketColor(0x93758D)
    .displayName('Molten Battery Alloy')
    .luminosity(8)
    .noBucket()
  
  // Blastproof Alloy
  event.create('molten_blastproof_alloy')
    .thickTexture(0x59523F)
    .bucketColor(0x59523F)
    .displayName('Molten Blastproof Alloy')
    .luminosity(0)
    .noBucket()

  // Advanced Alloy ?
  // Andesite Alloy ?
})
