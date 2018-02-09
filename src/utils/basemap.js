export const solarSystemSettings = {
  'Earth': null,
  'Moon': {
    url: '/maps/Moonmap_from_clementine_data.png',
    bounds: [[-90,-180], [90,180]]
  },
  'Mercury': {
    url: '/maps/Mercury.png',
    bounds: [[-90,-180], [90,180]]
  },
  'Venus': {
    url: '/maps/Venus.jpg',
    bounds: [[-90,-120], [90,240]]
  },
  'Mars': {
    url: '/maps/Mars.jpg',
    bounds: [[-90,-180], [90,180]]
  },
  'Pluto': {
    url: '/maps/Pluto.jpg',
    bounds: [[-90,0], [90,360]]
  },
  'Ceres': {
    url: '/maps/Ceres.jpg',
    bounds: [[-90,0], [90,360]]
  },
  'Io': {
    url: '/maps/Io.jpg',
    bounds: [[-90,-180], [90,180]]
  },
  'Enceladus': {
    url: '/maps/Enceladus.jpg',
    bounds: [[-90,0], [90,360]]
  },
  'Tethys': {
    url: '/maps/Tethys.jpg',
    bounds: [[-90,0], [90,360]]
  },
  'Dione': {
    url: '/maps/Dione.jpg',
    bounds: [[-90,-180], [90,180]]
  },
  'Rhea': {
    url: '/maps/Rhea.jpg',
    bounds: [[-90,0], [90,360]]
  },
  'Titan': {
    url: '/maps/Titan.jpg',
    bounds: [[-90,0], [90,360]]
  },
  'Triton': {
    url: '/maps/Triton.jpg',
    bounds: [[-90,-180], [90,180]]
  }
}

export const baseMapSettings = {
  'OpenStreetMap': {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: 'data by <b>OpenStreetMap</b>',
    attribution_url: 'http://www.openstreetmap.org/copyright'
  },
  'Google Maps': {
    maptype: 'roadmap',
    attribution: 'data by <b>Google Maps</b>',
    attribution_url: 'https://www.google.com/intl/en_us/help/terms_maps.html'
  },
  'OpenTopoMap': {
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution: 'data by <b>OpenStreetMap</b>, <b>SRTM</b><br />style by <b>OpenTopoMap</b>',
    attribution_url: 'https://opentopomap.org'
  },
  'Stamen Toner Lite': {
    url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png',
    attribution: 'data by <b>OpenStreetMap</b><br/>style by <b>Stamen Design</b>',
    attribution_url: 'http://stamen.com'
  },
  'Stamen Terrain': {
    url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png',
    attribution: 'data by <b>OpenStreetMap</b><br/>style by <b>Stamen Design</b>',
    attribution_url: 'http://stamen.com',
    overlay: {
      url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png',
      name: 'Annotations'
    }
  },
  'Stamen Watercolor': {
    url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',
    attribution: 'data by <b>OpenStreetMap</b><br/>style by <b>Stamen Design</b>',
    attribution_url: 'http://stamen.com'
  },
  'Esri World Street Map': {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    attribution: 'data by <b>Esri</b>',
    attribution_url: 'https://www.esri.com'
  },
  'Esri World Topo Map': {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    attribution: 'data by <b>Esri</b>',
    attribution_url: 'https://www.esri.com'
  },
  'Esri World Imagery': {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'data by <b>Esri</b>',
    attribution_url: 'https://www.esri.com'
  },
  'Esri National Georaphic Map': {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
    attribution: 'data by <b>Esri</b>',
    attribution_url: 'https://www.esri.com'
  },
  'CartoDB Light': {
    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png',
    attribution: 'data by <b>OpenStreetMap</b><br/>style by <b>CartoDB</b>',
    attribution_url: 'http://cartodb.com/attributions',
    overlay: {
      url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
      name: 'Annotations'
    }
  },
  'CartoDB Dark': {
    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png',
    attribution: 'data by <b>OpenStreetMap</b><br/>style by <b>CartoDB</b>',
    attribution_url: 'http://cartodb.com/attributions',
    overlay: {
      url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
      name: 'Annotations'
    }
  },
  'TianDiTu': {
    url: 'http://t0.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}',
    attribution: 'data by <b>TianDiTu</b>',
    attribution_url: 'http://www.tianditu.com',
    overlay: {
      url: 'http://t0.tianditu.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}',
      name: 'Annotations'
    }
  },
  'TianDiTu Satellite':{
    url: 'http://t0.tianditu.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}',
    attribution: 'data by <b>TianDiTu</b>',
    attribution_url: 'http://www.tianditu.com',
    overlay: {
      url: 'http://t0.tianditu.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}',
      name: 'Annotations'
    }
  },
  'TianDiTu Terrain': {
    url: 'http://t0.tianditu.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}',
    attribution: 'data by <b>TianDiTu</b>',
    attribution_url: 'http://www.tianditu.com',
    overlay: {
      url: 'http://t0.tianditu.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}',
      name: 'Annotations'
    }
  }
}

