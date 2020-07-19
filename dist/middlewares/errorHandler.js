"use strict";Object.defineProperty(exports, "__esModule", {value: true});exports. default = (err,req,res,next)=>{
    if(err) res.status(500).json(err)
    else next()
}