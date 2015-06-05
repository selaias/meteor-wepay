'use strict';

var wepay = Npm.require('wepay').WEPAY;

var endpoints = {
  stage: {
    oauth: "https://stage.wepayapi.com/v2/",
    token: "https://stage.wepayapi.com/v2/oauth2/token",
    api: "https://stage.wepayapi.com/v2/"
  },
  production: {
    oauth: "https://www.wepay.com",
    token: "https://wepayapi.com/v2/oauth2/token",
    api: "https://wepayapi.com/v2/"
  }
};

WePay = function WePay(settings) {
  var self = this;
  check(settings, self.CONFIG_PAT);
  self._config = settings;
  self.wp = new wepay(settings);
};

var WP = WePay.prototype;

WP.CONFIG_PAT = {
  client_id: Match(String),
  client_secret: Match(String),
  access_token: Match(String),
  environment: Match(String),
};

WP.getConfig = function(paramName) {
  return this._config[paramName];
};

WP.config = function(options){
  var self = this;
  check(options, self.CONFIG_PAT);
  self._config = options;
}


WP.call = function(url, parameters, callback){
  
  var self = this;
  
  check(url, String);
  check(parameters, Object);
  check(callback, Match.Optional(Match.Where(_.isFunction)));
  
  if (self._config.environment == 'staging'){
    self.wp.use_staging(); 
  }else{
    self.wp.use_production(); 
  }

  self.wp.call(url, parameters, function(response){
    callback(response);    
  })
}