(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+qEP":function(t,a,s){"use strict";var e=s("smgL");s.n(e).a},"0yRR":function(t,a,s){"use strict";var e=s("73dO");s.n(e).a},"1SLL":function(t,a,s){},"2qYH":function(t,a,s){"use strict";s.r(a);var e=s("A6W1"),o=s("n6yM"),i={components:{Author:e.a,PostMeta:o.a},metaInfo:{title:"Tag"},data:function(){return{scrolledDist:0}},methods:{handleScroll:function(){this.scrolledDist=window.scrollY}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},c=(s("+qEP"),s("KHd+")),n=null,r=Object(c.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h1",{staticClass:"tag-title text-center space-bottom"},[t._v("# "+t._s(t.$page.tag.title))]),s("div",{staticClass:"posts"},t._l(t.$page.tag.belongsTo.edges,(function(a){return s("div",{key:a.node.id,staticClass:"post-card content-box",class:{"post-card--has-poster":a.node.poster},attrs:{post:a.node}},[s("div",{staticClass:"post-card__header"},[a.node.cover_image?s("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:a.node.cover_image}}):t._e()],1),s("div",{staticClass:"post-card__content"},[s("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(a.node.title)}}),s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(a.node.description)}}),s("PostMeta",{staticClass:"post-card__meta",attrs:{post:a.node}}),s("g-link",{staticClass:"post-card__link",attrs:{to:a.node.path}},[t._v("Link")])],1)])})),0),s("transition",{attrs:{name:"fade"}},[t.scrolledDist>800?s("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#app"},expression:"{ el: '#app' }"}],attrs:{id:"back-to-top"}},[s("font-awesome",{attrs:{id:"back-to-top-icon",icon:["fas","arrow-up"]}})],1):t._e()])],1)}),[],!1,null,null,null);"function"==typeof n&&n(r);a.default=r.exports},"3vJw":function(t,a,s){"use strict";var e=s("1SLL");s.n(e).a},"73dO":function(t,a,s){},A6W1:function(t,a,s){"use strict";var e={props:["showTitle"]},o=(s("0yRR"),s("KHd+")),i=s("Kw5r"),c=i.default.config.optionMergeStrategies.computed,n={metadata:{siteName:"Fakes's Blog"}},r=function(t){var a=t.options;a.__staticData?a.__staticData.data=n:(a.__staticData=i.default.observable({data:n}),a.computed=c({$static:function(){return a.__staticData.data}},a.computed))},l=Object(o.a)(e,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"author"},[a("g-image",{staticClass:"author__image",attrs:{alt:"Author image",src:s("ESAu"),width:"180",height:"180",blur:"5"}}),this.showTitle?a("h1",{staticClass:"author__site-title"},[this._v("\n    "+this._s(this.$static.metadata.siteName)+"\n  ")]):this._e(),a("p",{staticClass:"author__intro"},[this._v("\n    Hi\n  ")]),a("p",{staticClass:"author__links"},[a("g-link",[a("g-link",{staticStyle:{color:"var(--title-color)"},attrs:{to:"/archives"}},[a("font-awesome",{attrs:{icon:["fas","archive"]}})],1),a("g-link",{staticStyle:{color:"#117cb7"},attrs:{to:"/about"}},[a("font-awesome",{attrs:{icon:["fas","id-badge"]}})],1)],1)],1)],1)}),[],!1,null,null,null);"function"==typeof r&&r(l);a.a=l.exports},ESAu:function(t,a){t.exports={type:"image",mimeType:"image/jpeg",src:"/%3CBlog%3E/assets/static/author.e6b6009.b45d23b18a2ba9c52697a64419a8cd8d.jpg",size:{width:180,height:180},sizes:"(max-width: 180px) 100vw, 180px",srcset:["/%3CBlog%3E/assets/static/author.e6b6009.b45d23b18a2ba9c52697a64419a8cd8d.jpg 180w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-87ed001a5afe714562336d4a3cabe614'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='5'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-87ed001a5afe714562336d4a3cabe614)' width='180' height='180' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABAAEADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABQcGCAkEAwD/xAAwEAACAQMDAwMEAQMFAQAAAAABAgMEBREABiEHEjETQVEUImGBMghScRUzcpKh0f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC1Gop1CMtfaXsFFKY6y6I0OV/kkZwrt%2bAASc/jHvqTzypBA8shARFLEk441BJoam%2b2S43morau10slOzwyUjCOd41BIYuQSqe6qMZz3HzgBz7yulTtazrV7ctn%2bo1cNYltoqUP2rlolQBj7IrLk%2bP4%2bR50vm6jbUsNR62%2bt91l/vZ/3KOzmRaKmP8AaixYVseO52Yn4Gg3XmwW%2b1dObjNZTXQyiSOSV5K6aUyq7nuLd7Ec/OPfVTjoLo1P9UGyaKm9O32%2b%2b1JRcIHjRQf8szk/vnTA6M7xqt77envNa1HEaiYvFRwTrK1NH4VXxyDxk5AJJPAGNZ26LbZ3DdNs3eC52SslpKuI5DxsR3D3VvkH40GnuvtJTpl/UFtXctKtPfayOy3JB931jBIpfyH/AIg/g402rFe7dfqRquzVcVbSBzGJ4T3RuR57W8MB4yMjOR7aCKdZ7olBtOnomk9N7xcKW2K2cYEsoDn/AKBtce/79QXCnl2vb6lgGKJWtSRNK8UXcMxKqg/c38MnCqCSTnAPr1dtFRcW23WLVCmo7dXPPO6KHlJMLpGI1IIZi7AD4JBwca6dpUkn1FJTUlIlutVOvrvToFZpn8AyvyS3dk8e68s3gAmP6grsr7WucA%2bpmhknX1qNojDNCoOVOSOFHjlcH54zqr6UdPVTenSvOkh8JInd7Z8r/wDNXN62me97U3cLeZjVxkQU4hRnYiHBkXAHhu%2bQEfgZ41WXo7Q1O4uqdjAiildplklVvsQpGAzE4HA7V%2bNBGYrGIWZLg8sZZElhlhT1F7WGQzLwwUjnOP0dcu5qWipLzPHaqtayi4McyqVDZHPB5GDkc/Gnz1A2fb5eme36ha%2bhF3t9rmjdBOvq9sTGSI4znx6iD/mo9tV3klaUZl%2b5vZz5/Z99Ae6cz2qDetoO4ImktjTqkxXtzGCcB8MCrdpwSGBBAI1pFZaaSjtlPTSmAmFewGCMRoVHghRwvGOBx8azHsdFHcrxRUMtQtMlTKsPrOCVjLHAYgc4BPOPbWjfTOK/0uzrfRbsiVbrRxinklSRXWcLwJAR8gDyAfxoCG5Z4vpVpZMkyOjMFwSF7xnAPk%2bcDknBxofV19BsfZVRc6ub6iGmg9QuiBTNhftVVHA4AAA/J1Ft1XlIqiso5ld7xIkM0MSTB5pHIOI44VyQqZ5J8nn5IK7S2akIqIr3X194MCR06fWTFo0HpoXCpgAZOeSCccZ0CK2ZNvfcuwZrpYLlLFVz3eaoljjp1lcNIC7oc/coz6ZBHGHGeMnTl2x0wslr3gL5T0VOJWoZqKrhGCqs5Rl4/u9Nih%2bRj9lNrbctmwa6no6I9lJcB9Ojyee9MtEhPuewsoPkhFHONS2qrjTz%2bmlLPKxAYlAADnPgkjJ4/XHzoEpuLo/a7dLuW8tFTqtXT1Sinpw5MocFlHb7duFYgZyUGMDjUe6PbJk2Hs8XHdtrpQZ81zzT9qyUtMUYSxv3Ak/xiPaMZ78Z4OrIJiqSmn7Xj7T6gSRMMMgjBB8HnSa617Kv%2b%2bt72G0LcZqfbclNUSVEUTlVYp2Y78fyJZlxngAfOdBX3pj0tuW8b8l%2bstM8W3kvCpE0gwfREncx/wAKmB/njV7YU9KFIwSe1QuT%2bBoRszb9Ntba9ustEqiGjhEQKj%2bRHlj%2bT5OjWgjFxorPR7nfcMsSNcoKQUa%2bmoMjh37gg%2bWJHA/J%2bdG7TTyQUgNRj6mVjLLg5AZuSB%2bBwB%2bBoRBZaam3RHUx08EefVkTsUAglYwT%2bCSWz%2btSPQc9dR09fSvT1kSzQvjKsPcHII%2bCDggjkHQ6Wmu9LA0duq6efx2GtViyD8lcd/7wfknReR0ijaSRlSNAWZmOAAPJJ0mep3XuybXqHtVkjN1vrERqi59KNj47iOT5HA50E0sdsvs27rhNuW7QVdJTJE1DR00HoxqWBLSOO5ixBBVckgYJxnR67JNT1MVwR1aGDJlRnC4jKkMQTgDnsPJ9jyNIuh6sPtWseLflluFs3a9NKkpKGVK9h2%2bj6JXjHdkBRwvceck69d2bL6i9UNp1M91qksMCxK1vsJckzEY5qnGPuI8L4BxkDnQNm2dRNqXMA0V7opF5HcJVwCDgg88fvz7Z1JKOupa1O%2bjqYZ0/uicMP/NZf3Wkq7fcamiuUMkFZTyNFLFIMMjKcFSPxpjdHd6z7Ov9ql%2bumSnlqhDVI7kxojKArY9u05J%2bRxoP/9k=' /%3e%3c/svg%3e"}},n6yM:function(t,a,s){"use strict";var e={props:["post"]},o=(s("3vJw"),s("KHd+")),i=Object(o.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"post-meta"},[t._v("\n  Posted "+t._s(t.post.date)+".\n  "),t.post.cjkWordCount?[t._v("\n    "+t._s(t.post.cjkWordCount)+" words.\n    "),s("strong",[t._v(" "+t._s(t.post.cjkReadTime)+" min read. ")])]:t._e()],2)}),[],!1,null,null,null);a.a=i.exports},smgL:function(t,a,s){}}]);