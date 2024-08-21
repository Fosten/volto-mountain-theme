const applyConfig = (config) => {
  //include site title in <title>
  if (!config.settings.siteTitleFormat) {
    config.settings.siteTitleFormat = { includeSiteTitle: true };
  } else config.settings.siteTitleFormat.includeSiteTitle = true;
  config.settings.titleAndSiteTitleSeparator = '|';

  return config;
};

export default applyConfig;
