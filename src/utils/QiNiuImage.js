var Base64 = require('js-base64').Base64;
window.base64 = Base64;
function TextUrlBuilder(host){
  var op = {
    text:{
      type:String,
      require:true
    },
    font:{
      type:String
    },
    fontsize:{
      type:Number
    },
    fill:{
      type:String
    },
    dissolve:{
      type:Number
    },
    gravity:{
      type:String
    },
    dx:{
      type:Number
    },
    dy:{
      type:Number
    }
  }
  this.data = {};
  this._host = host;
  this.text = (value)=>{
    this.data.text = new String(base64.encode(value).replace(/\//g, '_').replace(/\+/g, '-'));
    return this;
  }
  this.font = (value)=>{
    this.data.font = new String(value);
    return this;
  }
  this.fontSize = (value)=>{
    this.data.fontsize = new Number(value);
    return this;
  }
  this.fill = (value)=>{
    this.data.fill = new String(value);
    return this;
  }
  this.dissolve = (value)=>{
    this.data.dissolve = new Number(value);
    return this;
  }
  this.gravity = (value)=>{
    this.data.gravity = new String(value);
    return this;
  }
  this.dx = (value)=>{
    this.data.dx = new Number(value);
    return this;
  }
  this.dy = (value)=>{
    this.data.dy = new Number(value);
    return this;
  }
  this.watermark = ()=>{
    var watermarkText = "";
    for(var key in op){
      if(op[key]['require']==true){
        if(!this.data[key]) {
          console.error(key+" can not be empty");return;
        }
      }
      if(!this.data[key] instanceof op[key]['type']) {
        console.error("Does not match the current type");return;
      }
      if(this.data[key]){
        console.log("/"+key+"/"+this.data[key])
        watermarkText += "/"+key+"/"+this.data[key]
      }
    }
    return watermarkText
  }
  this.toUrl = ()=>{
    if(this._host){
      return this._host+"?watermark/2"+this.watermark()
    }else{
      return "";
    }
  }
}

export default function(){

  this.createTextWater = (host)=>{
    return new TextUrlBuilder(host)
  }
}
