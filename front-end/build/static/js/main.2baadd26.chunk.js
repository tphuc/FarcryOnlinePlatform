(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){e.exports=a.p+"static/media/farcry1.e14bc1c8.jpg"},126:function(e,t,a){e.exports=a.p+"static/media/logo4.cea7c7f1.png"},139:function(e,t,a){e.exports=a(222)},145:function(e,t,a){},218:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),o=a.n(s),l=(a(144),a(145),a(17)),i=a(18),c=a(21),u=a(19),m=a(22),d=a(268),p=a(20),h=a(257),f=a(264),g=a(93),b=a(276),y=a(130),E=a(258),v=a(25),w=a.n(v),O=function(e,t){return{type:"GET_ERRORS",payload:{msg:e,status:t}}},k=function(){return function(e,t){e({type:"USER_LOADING"}),w.a.get("http://localhost:8000/api/auth/user",C(t)).then(function(t){e({type:"USER_LOADED",payload:t.data})}).catch(function(t){e({type:"AUTH_ERROR"})})}},j=function(e,t,a){return function(n){var r=JSON.stringify({username:e,email:t,password:a});w.a.post("/api/auth/register",r,{headers:{"Content-Type":"application/json"}}).then(function(e){n({type:"REGISTER_SUCCESS",payload:e.data})}).catch(function(e){n(O(e.response.data,e.response.status)),n({type:"REGISTER_FAILED"})})}},C=function(e){var t=e().auth.token,a={headers:{"Content-Type":"application/json"}};return t&&(a.headers.Authorization="Token ".concat(t)),a},_=a(36),S=a(16),x={lazyWeapon:1,screenBrightness:1,graphicQuality:3,playerModel:"Jack",skinColor:2},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SLIDER_VALUE":return Object(S.a)({},e,Object(_.a)({},t.payload.varName,t.payload.value));default:return e}},A={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOADING":return Object(S.a)({},e,{isLoading:!0});case"USER_LOADED":return Object(S.a)({},e,{isLoading:!1,isAuthenticated:!0,user:t.payload});case"REGISTER_SUCCESS":case"LOGIN_SUCCESS":return localStorage.setItem("token",t.payload.token),Object(S.a)({},e,t.payload,{isAuthenticated:!0,isLoading:!1});case"USER_LOGOUT":case"LOGOUT_SUCCESS":case"LOGIN_FAILED":case"AUTH_ERROR":case"REGISTER_FAILED":return localStorage.removeItem("token"),Object(S.a)({},e,{token:null,user:null,isAuthenticated:null,isLoading:!1});default:return e}},R={msg:{},status:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return{msg:t.payload.msg,status:t.payload.status};default:return e}},U={selected:"profile"},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_TAB":return Object(S.a)({},e,{selected:t.payload.selected});default:return e}},D=a(69),N=a(121),P=Object(D.c)({auth:L,setting:T,error:W,tabs:I}),G=Object(D.d)(P,{},Object(D.a)(N.a)),z=Object(y.a)({palette:{primary:{main:"#00838f"},type:"dark"}}),F={label:{color:"#eeeeee"},input:{color:"#dddddd"}},M=function(){var e=G.getState().auth.token,t={headers:{"Content-Type":"application/json"}};return e&&(t.headers.Authorization="Token ".concat(e)),t},B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).submitData=function(e,t,n){w.a.post("http://localhost:8000/api/auth/login",JSON.stringify({username:e,password:t}),{headers:{"Content-Type":"application/json"}}).then(function(e){return w.a.put("/api/user/".concat(G.getState().auth.user.id,"/profile"),{password:n},M()).then(function(e){return alert("Successfully updated")}).then(function(){return a.setState({password:"",new_password:""})})}).catch(function(e){return alert("Why don't you remember your old password? >_>")})},a.state={password:"",new_password:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{style:{marginTop:100}},r.a.createElement(E.a,{theme:z},r.a.createElement(g.a,{style:F.label},"Email address"),r.a.createElement(b.a,{id:"outlined-name",label:"email",margin:"normal",variant:"outlined",fullWidth:!0,value:this.props.user.email}),r.a.createElement(g.a,{style:F.label},"Account"),r.a.createElement(b.a,{id:"outlined-name",label:"username",margin:"normal",variant:"outlined",value:this.props.user.username,fullWidth:!0}),r.a.createElement(b.a,{id:"outlined-name-2",label:"password",margin:"normal",variant:"outlined",type:"password",fullWidth:!0,value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement(b.a,{id:"outlined-name-2",label:"new password",margin:"normal",variant:"outlined",fullWidth:!0,type:"password",value:this.state.new_password,onChange:function(t){return e.setState({new_password:t.target.value})}}),r.a.createElement(f.a,{variant:"outline-info",type:"submit",onClick:function(t){return e.submitData(e.props.user.username,e.state.password,e.state.new_password)}},"Update")))}}]),t}(n.Component),H=Object(p.b)(function(e){return{user:e.auth.user}})(B),J=["k_move_left","k_move_right","k_move_backward","k_move_forward","k_reload","k_movemode2","k_firemode"],K=Object(y.a)({palette:{primary:{main:"#00838f"},type:"dark"}}),q=function(){var e=G.getState().auth.token,t={headers:{"Content-Type":"application/json"}};return e&&(t.headers.Authorization="Token ".concat(e)),t},Q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).submitData=function(){var e=a.state;delete e.user,w.a.put("http://localhost:8000/api/user/".concat(a.props.user.id,"/settings"),e,q()).then(function(e){alert("Successfully updated"),G.dispatch(k())}).catch(function(e){return alert("Invalid fields")})},a.state=a.props.user.settings,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keypress",this.keyDetector,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress",this.keyDetector,!1)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{marginTop:100,paddingBottom:100}},r.a.createElement(E.a,{theme:K},r.a.createElement("p",{className:"text-info"}," For particular reasons we only support few settings below: "),J.map(function(t,a){return r.a.createElement(b.a,{id:t,label:t,margin:"normal",variant:"outlined",value:e.state[t],onKeyPress:function(a){for(var n in e.state)e.state[n]===a.key&&n!==t&&e.setState(Object(_.a)({},n,""));e.setState(Object(_.a)({},t,a.key))},fullWidth:!0})})),r.a.createElement(f.a,{style:{marginTop:50},variant:"outline-info",type:"button",onClick:function(){return e.submitData()}},"Update"))}}]),t}(n.Component),X=Object(p.b)(function(e){return{user:e.auth.user}})(Q),V=a(266),Y=a(7),$=a(282),Z=a(265),ee=a(267),te=a(273),ae=Object(y.a)({palette:{primary:{main:"#00838f"},type:"dark"}}),ne=Object(Y.a)({thumb:{backgroundColor:"#00bcd4"},track:{backgroundColor:"#00bcd4"}})(Z.a),re={text:{fontFamily:"Arial",color:"#dddddd",marginTop:10},label:{fontWeight:"bold"},slider:{padding:"10px 0px"}},se={hero:"objects/characters/pmodels/hero/hero_mp.cgf",merc_scout:"objects/characters/mercenaries/merc_scout/merc_scout_mp.cgf",merc_rear:"objects/characters/mercenaries/merc_rear/merc_rear_mp.cgf",evil_worker:"bbjects/characters/workers/evil_worker/evil_worker_MP.cgf",mertz:"objects/characters/pmodels/story_characters/mertz/mertz_mp.cgf"},oe=["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],le=function(){var e=G.getState().auth.token,t={headers:{"Content-Type":"application/json"}};return e&&(t.headers.Authorization="Token ".concat(e)),t},ie=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).submitData=function(){var e=a.state.settings;delete e.user,w.a.put("http://localhost:8000/api/user/".concat(a.props.user.id,"/settings"),e,le()).then(function(e){alert("Successfully updated"),G.dispatch(k())}).catch(function(e){return alert("Invalid fields")})},a.state={settings:e.user.settings},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{style:{marginTop:80}},r.a.createElement(E.a,{theme:ae},r.a.createElement(V.a,null,r.a.createElement(b.a,{id:"outlined-bare",label:"Game path",margin:"normal",variant:"outlined",fullWidth:!0}),r.a.createElement(b.a,{id:"outlined-bare",label:"Player name",value:this.state.settings.ingame_name,onChange:function(t,a){return e.setState({settings:Object(S.a)({},e.state.settings,{ingame_name:t.target.value})})},margin:"normal",variant:"outlined",fullWidth:!0}),r.a.createElement(g.a,{id:"lazy-weapon",style:re.text},"Lazy weapon"),r.a.createElement(ne,{style:re.slider,"aria-labelledby":"lazy-weapon",min:0,max:1,value:this.state.settings.lazy_weapon,onChange:function(t,a){return e.setState({settings:Object(S.a)({},e.state.settings,{lazy_weapon:a})})}}),r.a.createElement(g.a,{id:"screen-brightness",style:re.text},"Screen brightness"),r.a.createElement(ne,{style:re.slider,"aria-labelledby":"screen-brightness",min:0,max:1,value:this.state.settings.brightness,onChange:function(t,a){return e.setState({settings:Object(S.a)({},e.state.settings,{brightness:a})})}}),r.a.createElement(g.a,{id:"graphic-quality",style:re.text},"Graphic Quality"),r.a.createElement(ne,{style:re.slider,"aria-labelledby":"graphic-quality",value:this.state.settings.screen_quality,min:0,max:3,step:1,onChange:function(t,a){return e.setState({settings:Object(S.a)({},e.state.settings,{screen_quality:a})})}}),r.a.createElement(g.a,{style:re.text},"Player class"),r.a.createElement(te.a,{value:this.state.settings.model,onChange:function(t){e.setState({settings:Object(S.a)({},e.state.settings,{model:t.target.value})})},input:r.a.createElement($.a,{name:"model",fullWidth:!0,id:"outlined-age-native-simple"}),style:{width:"100%"}},Object.keys(se).map(function(e,t){return r.a.createElement("option",{value:se[e]}," ",e)})),r.a.createElement(g.a,{id:"skin-color",style:re.text},"Skin color"),r.a.createElement(te.a,{value:this.state.settings.player_skin,onChange:function(t){return e.setState({settings:Object(S.a)({},e.state.settings,{player_skin:t})})},inputProps:{name:"skin",id:"demo-controlled-open-select"},variant:"filled",style:{width:"100%"}},oe.map(function(e,t){return r.a.createElement(ee.a,{value:t,style:{backgroundColor:{val:e}}})}))),r.a.createElement(V.a,{style:{marginTop:50}},r.a.createElement(f.a,{variant:"outline-info",type:"button",onClick:function(){return e.submitData()}},"Update"))))}}]),t}(n.Component),ce=Object(p.b)(function(e){return{user:e.auth.user}})(ie),ue=a(124),me=a.n(ue),de=a(269),pe=a(277),he=a(281),fe=a(270),ge={text:{color:"#00bfa5"},btn_right:{position:"absolute",right:10,bottom:10},game_logo:{width:200,transform:"rotateY(35deg)"}},be=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getMatches=function(){w.a.get("/api/matches.list?").then(function(e){return e.data}).then(function(e){return a.setState({matches:e}),e}).then(function(e){return e.map(function(e,t){return a.getFragsFromMatch(e.id)})})},a.getFragsFromMatch=function(e){w.a.get("/api/frags.list?match_id=".concat(e)).then(function(e){return e.data}).then(function(t){a.setState(function(a){return a.matches.map(function(a){return a.id===e?(a.frags=t,a):a})})})},a.getFrags=function(){for(var e in a.state.matches)console.log(e)},a.state={matches:[]},a.getMatches(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{style:{marginTop:50,paddingBottom:50}},r.a.createElement(V.a,null,r.a.createElement(d.a,{xs:4,md:4,lg:4,xl:4},r.a.createElement("div",{style:{perspective:1e3,boxShadow:"0 4px 8px 0 #ffffff, 0 6px 20px 0 #00838f"}},r.a.createElement(de.a,{src:me.a,style:ge.game_logo}))),r.a.createElement(d.a,{xs:8,md:8,lg:8,xl:8,style:{backgroundColor:"rgba(0,0,0,0.1)"}},r.a.createElement("p",{style:ge.text},"Far Cry is a first-person shooter (FPS) video game with amazing graphics, developed by Crytek and published by Ubisoft. The game was released in 2004 for Microsoft Windows. The game was a huge commercial success. Ubisoft closed the online servers almost 12 years later."),r.a.createElement(f.a,{variant:"outline-info",style:ge.btn_right},"Play"))),r.a.createElement("hr",null),r.a.createElement(V.a,null,r.a.createElement("h3",{style:Object(S.a)({},ge.text,{marginTop:50,marginLeft:20})},"Recent matches")),r.a.createElement(V.a,{style:{color:"#eeeeee"}},r.a.createElement(d.a,null,r.a.createElement(pe.a,{ActiveKey:0},this.state.matches.map(function(e,t){return r.a.createElement(he.a,{style:{backgroundColor:"transparent"}},r.a.createElement(pe.a.Toggle,{as:f.a,variant:"outline-light",eventKey:t},"Match ",e.id),r.a.createElement(pe.a.Collapse,{eventKey:t},r.a.createElement(he.a.Body,null,r.a.createElement("p",null," start time : ",e.start_time," "),r.a.createElement("p",null," end time : ",e.end_time," "),r.a.createElement(fe.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Time"),r.a.createElement("th",null,"killer"),r.a.createElement("th",null,"victim"),r.a.createElement("th",null,"weapon code"))),r.a.createElement("tbody",null,e.frags?e.frags.map(function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,e.frag_time),r.a.createElement("td",null,e.killer),r.a.createElement("td",null,e.victim),r.a.createElement("td",null,e.weapon_code))}):"")))))})))))}}]),t}(n.Component),ye=a(278),Ee=a(53),ve=a(77),we=(a(97),function(e){e.preventDefault(),a(97).PythonShell.run("../scripts/my_script.py",null)}),Oe=Object(p.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated}})(function(e){return r.a.createElement(V.a,null,r.a.createElement(ye.a,{variant:"dark",fixed:"top",style:{backgroundColor:"#111111"}},r.a.createElement(g.a,{variant:"h6",style:{marginLeft:240,color:"#00bcd4"}},"Farcry Online"),e.isAuthenticated&&r.a.createElement(f.a,{className:"ml-auto",variant:"outline-info",onClick:we,style:{borderWidth:0,borderRadius:"45%"}},r.a.createElement(ve.a,{icon:Ee.b}))))}),ke=a(274),je=a(126),Ce=a.n(je),_e=a(279),Se=a(263),xe=a(271),Te=a(224),Ae=a(272),Le=function(e){return{type:"SELECT_TAB",payload:{selected:e}}},Re=["Home","Profile","Setting","Keyboard"],We=[Ee.c,Ee.f,Ee.a,Ee.d],Ue={root:{display:"flex"},title:{height:100,backgroundColor:"#1a1a1a"},appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240},item:{color:"#bbbbbb"},drawer:{width:240},selected:{color:"#00bcd4"},drawerPaper:{width:240,backgroundColor:"#1a1a1a"}},Ie=function(e){e.preventDefault(),G.dispatch(function(e,t){w.a.post("http://localhost:8000/api/auth/logout/",null,C(t)).then(function(t){e({type:"USER_LOGOUT"})}).catch(function(t){e(O(t.response.data,t.response.status)),e({type:"EXCEPTION"})})}),window.location.href="/login"},De=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={selected:"Home"},G.dispatch(Le("Home")),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(_e.a,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper},anchor:"left"},r.a.createElement("div",{className:t.title},r.a.createElement(ke.a.Link,{href:"/"},r.a.createElement(de.a,{src:Ce.a,fluid:!0}))),r.a.createElement(xe.a,null),r.a.createElement(Se.a,null,Re.map(function(a,n){return r.a.createElement(Te.a,{button:!0,key:a,classes:{selected:t.selected,root:t.item},selected:a===e.state.selected,onClick:function(){e.setState({selected:a}),G.dispatch(Le(a))}},r.a.createElement(Ae.a,null,r.a.createElement(ve.a,{icon:We[n]}),"    ",a))})),r.a.createElement(xe.a,null),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(f.a,{style:{position:"absolute",bottom:0,border:0,width:"100%"},variant:"outline-info",onClick:Ie}," ",r.a.createElement(ve.a,{icon:Ee.e}),"Logout")))}}]),t}(n.Component),Ne=Object(Y.a)(Ue)(De),Pe=a(58),Ge=Object(p.b)(function(e){return{selected:e.tabs.selected,isAuthenticated:e.auth.isAuthenticated}})(function(e){return e.isAuthenticated?r.a.createElement("div",null,r.a.createElement(d.a,{xs:4,md:4,xl:4,sm:4,lg:4},r.a.createElement(Ne,null)),r.a.createElement(d.a,{xs:8,md:8,xl:8,sm:8,lg:8,style:{marginLeft:240}},r.a.createElement(Oe,null),"Home"===e.selected&&r.a.createElement(be,null),"Profile"===e.selected&&r.a.createElement(H,null),"Setting"===e.selected&&r.a.createElement(ce,null),"Keyboard"===e.selected&&r.a.createElement(X,null))):r.a.createElement(Pe.a,{to:"/login"})}),ze=Object(y.a)({palette:{primary:{main:"#00838f"},type:"dark"}}),Fe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){a.setState(Object(_.a)({},e.target.name,e.target.value))},a.state={username:"",password:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.props.isAuthenticated?r.a.createElement(Pe.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(h.a,{style:{width:"80%",maxWidth:500}},r.a.createElement("h1",{className:"text-center pt-5",style:{color:"#eeeeee"}}," Login "),r.a.createElement(E.a,{theme:ze},r.a.createElement(V.a,null,r.a.createElement(b.a,{error:!(!this.props.errors.username&&!this.props.errors.authenticate_error),helperText:this.props.errors.username?this.props.errors.username:"",label:"Username",type:"username",name:"username",autoComplete:"email",margin:"normal",variant:"outlined",value:this.state.username,onChange:this.onChange,fullWidth:!0}),r.a.createElement(b.a,{error:!(!this.props.errors.password&&!this.props.errors.authenticate_error),helperText:this.props.errors.password?this.props.errors.password:"",id:"outlined-password-input",label:"Password",type:"password",name:"password",autoComplete:"current-password",margin:"normal",variant:"outlined",value:this.state.password,onChange:this.onChange,fullWidth:!0})),r.a.createElement(V.a,null,r.a.createElement(f.a,{type:"button",variant:"info",onClick:function(t){var a,n;G.dispatch((a=e.state.username,n=e.state.password,function(e){var t=JSON.stringify({username:a,password:n});w.a.post("http://localhost:8000/api/auth/login",t,{headers:{"Content-Type":"application/json"}}).then(function(t){e({type:"LOGIN_SUCCESS",payload:t.data})}).catch(function(t){e(O(t.response.data,t.response.status)),e({type:"LOGIN_FAILED"})})}))},block:!0}," Sign in ")),r.a.createElement("p",{className:"text-center mb-1 text-secondary"},"or"),r.a.createElement(V.a,null,r.a.createElement(f.a,{href:"/signup",type:"button",variant:"success",block:!0}," Register ")))))}}]),t}(n.Component),Me=Object(p.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated,errors:e.error.msg}})(Fe),Be=a(280),He=Object(y.a)({palette:{primary:{main:"#00838f"},type:"dark"}}),Je=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleRegister=function(e,t,a,n){a===n&&G.dispatch(j(e,t,a))},a.onChange=function(e){a.setState(Object(_.a)({},e.target.name,e.target.value))},a.state={alerts:"Invalid form",username:"",email:"",password:"",confirm_password:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.props.isAuthenticated?r.a.createElement(Pe.a,{to:"/"}):r.a.createElement(h.a,{style:{width:"80%",maxWidth:500}},r.a.createElement(E.a,{theme:He},r.a.createElement("h1",{className:"text-center pt-5",style:{color:"#eeeeee"}}," Register "),r.a.createElement(V.a,null,r.a.createElement(Be.a,{variant:"danger",show:!1,dismissible:!0,style:{width:"100%",height:50},closeLabel:"X",onClose:function(){return e.setState({showAlert:!1})}},r.a.createElement("p",null,this.state.alerts))),r.a.createElement(V.a,null,r.a.createElement(b.a,{label:"Username",error:!!this.props.errors.username,helperText:this.props.errors.username?this.props.errors.username:"",type:"username",name:"username",autoComplete:"email",margin:"normal",variant:"outlined",value:this.state.username,onChange:this.onChange,fullWidth:!0}),r.a.createElement(b.a,{error:!!this.props.errors.email,helperText:this.props.errors.email?this.props.errors.email:"",label:"Email",type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"outlined",value:this.state.email,onChange:this.onChange,fullWidth:!0}),r.a.createElement(b.a,{error:!!this.props.errors.password,helperText:this.props.errors.password?this.props.errors.password:"",id:"outlined-password-input",label:"Password",type:"password",name:"password",autoComplete:"current-password",margin:"normal",variant:"outlined",value:this.state.password,onChange:this.onChange,fullWidth:!0}),r.a.createElement(b.a,{error:this.state.confirm_password!==this.state.password,helperText:this.state.confirm_password!==this.state.password?"Passwords do not match!":"",id:"outlined-password-input",label:"Confirm password",type:"password",name:"confirm_password",autoComplete:"current-password",margin:"normal",variant:"outlined",value:this.state.confirm_password,onChange:this.onChange,fullWidth:!0})),r.a.createElement(V.a,null,r.a.createElement(f.a,{type:"button",variant:"outline-info",onClick:function(t){e.handleRegister(e.state.username,e.state.email,e.state.password,e.state.confirm_password)},block:!0}," Register ")),r.a.createElement("p",{className:"text-center mb-1 text-secondary"},"Already have an account?"),r.a.createElement(V.a,null,r.a.createElement(f.a,{href:"/login",type:"button",variant:"outline-success",block:!0}," Sign in "))))}}]),t}(n.Component),Ke=Object(p.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated,errors:e.error.msg}})(Je),qe=(a(218),a(74)),Qe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){G.dispatch(k())},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(qe.a,null,r.a.createElement(Pe.d,null,r.a.createElement(Pe.b,{path:"/login",component:Me}),r.a.createElement(Pe.b,{exact:!0,path:"/",component:Ge}),r.a.createElement(Pe.b,{path:"/signup",component:Ke})))}}]),t}(n.Component),Xe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ve(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(p.a,{store:G},r.a.createElement(Qe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");Xe?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ve(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Ve(t,e)})}}()}},[[139,1,2]]]);
//# sourceMappingURL=main.2baadd26.chunk.js.map