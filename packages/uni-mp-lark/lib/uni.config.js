module.exports = {
  options: {
    cssVars: {
      '--status-bar-height': '25px',
      '--window-top': '0px',
      '--window-bottom': '0px',
      '--window-left': '0px',
      '--window-right': '0px'
    },
    extnames: {
      style: '.ttss',
      template: '.ttml'
    },
    subPackages: true,
    project: 'project.lark.json',
    darkmode: true
  },
  copyWebpackOptions (platformOptions, vueOptions) {
    const copyOptions = ['ttcomponents', 'theme.json']
    global.uniModules.forEach(module => {
      copyOptions.push('uni_modules/' + module + '/ttcomponents')
    })
    return copyOptions
  }
}
