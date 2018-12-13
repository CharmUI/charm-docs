(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m}),n.d(t,"_frontmatter",function(){return d});var a=n(141),o=n.n(a),r=n(6),c=n.n(r),s=n(0),l=n.n(s),i=n(136),u=n(140),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=u.a,n}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return l.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:n,components:t},l.a.createElement(i.MDXTag,{name:"h1",components:t,props:{id:"gatsby-js"}},"Gatsby JS"))},t}(l.a.Component),d={}},134:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return g});var a=n(0),o=n.n(a),r=n(4),c=n.n(r),s=n(132),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var i=n(135),u=n.n(i);n.d(t,"PageRenderer",function(){return u.a});var m=n(29);n.d(t,"parsePath",function(){return m.a});var d=o.a.createContext({}),g=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},135:function(e,t,n){var a;e.exports=(a=n(138))&&a.default||a},137:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var a=n(13),o=n.n(a),r=n(0),c=n.n(r),s=n(4),l=n.n(s),i=n(47),u=n(2),m=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return c.a.createElement(i.a,o()({location:t,pageResources:n},n.json))};m.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=m},139:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAABqCAYAAACrryMwAAAAAXNSR0IArs4c6QAAGNJJREFUeAHtnQmYFcW1x2fYFxFwF1Ahxi3i8gLBJaiQsCkRRJSIuIHsBIEnQY0LmigJi4CyCSggIj557hKXIDjRKI8o6lNxQXFjCYoIyD7ATH7/pqtTt29fZu7cO3PvQPX39dSpU6eqTp3631NLV/fk5LjLWcBZwFnAWcBZwFnAWcBZwFnAWcBZwFnAWcBZwFnAWcBZwFkgVQvkplpAecjfs2fPRrm5uS0LCwuPQd8G3BWJf1ihQoUPjj766FfvvPPO3eWhHeVdx/0WbEOGDDlk69at3QsKCrrQSc0SdRSgWwboBk2dOnVhIhnHT48F9juw9e7duwYebBDmuYmwdnHNBOB6TZs27cHiyju55C2w34CNobDSqlWremCC4dz1EphiM/w1eLMNALER9JGW3MY6deo0GDNmzFaL58g0WqBCGsvKWFF9+vS5FKB9iAJTuWOABrB2cT/HfVmDBg0Oe/DBB0+ePn36OXiyY+B1t5Sus2XLlhOteED27dv3iF69ep0ZMBxRIguUa88GCBru3r37YVp+flTrAdOz3DcyPK6ISve94S6ThuylAPFpEzchC4wl0M0A6K8o61XDd2FyFii3ng1Pcx1Ae5/mxgEN0HxUsWLFNgDnkkRAk5mGDx++B1l7Jfpt2Hx4zXbwtMAorFSp0spwuosX3wKVii+aHZL9+/c/aNeuXbOYc3WO0KgQ8Izmvo3VZeCxIuQ8FkA6inICG5BvWViW1eytPm/R5MmTPw+nu3jxLRAYuvhZMiep/bL8/Pzn0KBxhBZr8WbXALIFEWmRLIDUwiQAtFV4wU0mrpCVbXNkmoum7OkK3VVyC5SbYZSOb0kz3+KOAxpAeZEh7oxkgCaTke8Shf611BAmxOvd7NPr2PyNm8sZORcWzwLlwrNpfkbHy7PE6QtgRuKRbiEsLF6T90oxHB/FcNzJyjPXouXVTsOrtRePsh9mMZFvpzs6eQtkvWcDaLcBtJncYaDlszq8jkXAzckCTWZicdGLMiv7JttYv359Dc/BRdrvg0hOjhtCLWOUlKxY0oylnW/evHkV2WSdEup0U+06gNYej/a8YSQTastj06ZNj5KnlvLJc40dO/YZUwZe7xi8mgAm++SxNzfWpLmw5BYIe4uSl5TGnAMHDqy6YMGCxwCaPcx5NQCM5fDbAbQvS1olG8CXkzfY/KW8WXZZDK+D4RmvN81Oc3TJLZB1wyhAO3j79u0vRQGNZr5brVq15niaEgMNr1YNwI4wJoN+i/L+z8QHDx5cB7q3H19fvXr1p0yaC1OzQFZ5tn79+tUFaAtoUpNwswDF6wDtNxMmTPgxnJZMfPXq1UMBckOThy2NYYZWyEmRPqQfJJo6H6a+naLdlboFssazDRgw4FAm7YtoUhTQ/nrQQQe1TRVoPN7Sk4A7LLO98MADD+SZOCvQygDtBhMHbG5hYIyRhjArwMbQefjOnTsX0dFxD7vp8Me4O40bN257Ku3V8Lhnz57HqcObi1Hmj+zNDQiVeSVxM5dbyLzwk1C6i6ZggYyDbdCgQUfu2LFDD7dPD7cDQDzKlsRVdPqucFoy8aFDh9bkRMfTAK2hycdqdgBe7SsTV0j6jVZ8gkU7Mg0WyCjYdHRn27ZteXTyqeG2yKO1bt36Wib0BeG0ZOLDhg2rxTbHS+RpYeWby9OGOVY8h+ekrdHjNJ/3dZs2bebb6Y5O3QIZA5seqDNH+ysdfHK4GQBtHkC7ukuXLnvCacnEmYPV3rBhw9+ow3u+6eddXKtWrZ7hcthXC7waXm9yqnWHy3fxnJyMgE0TcfaynqADmoY7AaA9wdDZLdXO1jsIAGghQDvbquPTqlWrXhye//GU4lTk2kqO+rdXrlz5ISuPI9NkgTIHG52ay/2Q6dxQO54CaF0ZOneH+ElFtVfHHG0RmeyV7UqA1nbSpEnrIwr7b4v3WAIZS8SRJbFAmYMNr/ZngHZ1hLJ5HNtOGWgql5XtQOo4w9SBt3qPPbqzAdHXhmdCzRuhu5k4+24TDe3C9FqgTMEG0G4ABDdFNOFD9tE64dHyI9JKwtpmZXqpbt2650+cOHGNxQtIhtr+6FTVZ7zBCvXdINERabVAmT1B4ODjZXTquLD2eJ3VzJEuGj9+/MZwWknj9erVm7BmzZrN5N8GPS/RsAy/Gs9J+5t68Gpuu8MYoxTCMgEbQ9V/saE6G7DFeFKAtomN1Ys4bp3Ws/0+uB4syl4ATcPn4b7cGvRzz0GLMloK6TGdn0I5CbPq6QBAe4aOrB4Syod36ZQpU94P8cssCtiHmMqgp6a6eWzKcmG0BUoVbNri4MH6E4Dq2FD1ejGlB6cttGLMyOVv4prN5HyGcneUqJR7olTBBsjuR//zw20AaLdwwlaHFzN2sTAIvBpKzGYoX5sxZQ6QiksNbCwIegO2vmE7sjs/CaCNDPPLMo7HPRnd2qlOgK89veB8W1nqcaDVVSpgozOb04lx+1XwnmF1GBzhyZSxAdog6jZfA5iZymHMTLWhPNabdrBpk5QhSvM0c6za2GUxe2lXslIsMIxMhHqMRb3XqG7Av5O52p8yoceBWGfatz54uK4tB/vrQOrUz7g7hJ9JZsLgnMTV8F5DdRNOTfe2S7raxI/S6xt/GyddxWa0HDOUpEUJhs+eeLWY062ATLv5zZinxX3aIC2VJlGIOpBj4V8CsgZk21qzZs3j77vvvrjveyRRZFpFsZ/3bTn0G0bBehdiM3Pc2YRD9odtmbR5Nt4f+AleLe4JAYYakA1AQ48cgKanGAJaDp0IzrIHaP43TF5Bv7Okn3/V4ser08R6unKbYZbXMC1zNjxGBY4M6QmB96KIZYyHAdosK55pcrAUwNtu4tHUmEwrY9fPN0yeCgEtSEbfC4NIOSbSAjaeQ8rt/9K2Awb6CO8RPHe00zJBsxVzttWZ9/HkYkMm9IiqU8+N4bdWGnbbRfC4H4qluWVNjyjnf1IGGwcPz8TV32XbAUNtA2iXM8+wT1/YImVOo5N3EpdwE3O1qOG+zHUyFaKTZz9CrdS7shVzBQB7w6QTvmfR5ZZMCWw899TRnDncVWwLYLT+nPH/yOZlkmY+dAr1Xyod0I0DJuk7YZJqu/SpB4D1M7+c55l2POnTh1llP2vR5ZZMaYHAW1EjMJR5vugZgc6chUd7OJsswnzoD+ijH5Ym2lnl1Zjrnm/ZaoZoAHgUOusHomsto4SO0Jf65a/WG9OHy0pj9Vtiz8bmbQuAZj9flNdYxq3VU9ZcvlfrKoXQ7X6MuClrlEMRbOiBDd30oekXpRtA60PgffQHHiqn9iqjyizqoj/rc+RqKfq8y7ToA23OF5Un2fQSeTb2g2pzbEjeK9eqcCu78ZezSZo18zTphue4h0Adt4Oj4XGP0CST4es8v/7lAhVPOKpv3rzZPFPewXsT+gJ6iS9Ot1xKXx2Gd5xD+ZF9A7AaIyOge9tChCexjXUl4fgSVxyRsURgA/33cx8bKq8/QPs4xMtolB/FWfxKO0kJPMQjfL5hXSKF5AEB5g3IaRqwJJFcuvnUVw9bysN5x9YBmkaLo1QPaWMSHWcvjh60fwggGitZyteXm7wVr51Xb5YBrNfh1bH51L3DjqeDTnoYRbnOKH6NXTmKzWAFNdvmZQONnnf7ehTidRPO1fj1/xag/RP5vtyPaO6SjP5FyWOzX+A9GkaVSX3bxceGZ6DHCZA3+3Ir4f3Zp5MOANqxVvuVP2ZrSgxktAh5njsGaErjSrvjSMqo/sQ1xq1jkOU8YP/dXv2y5y97V+dh7Fa+Ri9GeV19cPCVV14Zw69/sNGcPCewb6jV9W7Ds0MBh3iTKlWqLOItrttpfxueTBxGfa+xUfwAq/DHjbzsBYinUmYHvEc+gGvCCzUfmnSF5Nc8qT33EejxLixvT42yhlNW5LBn509E49H14/KeAfsy39qyAK0yMlr5NrL5otFpJ69Upt27JwU2Jq56efdQSzmduL0+Gx6wWzp5JHrdRQcaOs6r4Y2q+R8cvMTOS75dieY2AK0HZXovMAM0gbGSqQO6BWBpgUxLyhjIHOkkgKbvzNX3y68C4MxbXEGVpGuYa+8zPKCJpqzpALg/5fwu2WEdHdpSrrfV45er4HOL1rA6nri3OLH5oklbgn0yN4zSAM19LrIVw6iTMMQ/bF420Pxqz8JgLaULOn6DjgttvfQdOLzRAmQ8oCGjXXvvgrfR0HZImfI+9tHxyB8qMvq+20LNgwgN0KTHy0w1ltplioa3iKAP6T+G0rSoaYr3eZZy7IVYSCw2qhe0kY8ZfXyJ4CAEfXkBMvt6uqM5XNqvYs3ZQLmGldF27RjnK+ZBt9i8bKEx5ACjC/RcdN3r4mBqSY/HeQ1+c19mPendjDz0FkOb0B+S5xEXAGIu5L/n7siwdwUJK5VI2Vph1hGti/TdpCe0FYCbhi3r48X6I/vO3lzB3yPR+ZQgZhH6aA7A6e/PvbwU9j4nQxxniRnSA5uGT/SbYph+GDM/Q4/FofS0RCN/neGSmcPoDfPjbT4K9WYeFNcxtkwmaL3NhcG7mLrpvDmG9tPkSU4Vj7QvCdrRNntuE3g5ydDRzfBS+gCOLaMkc93Erv9zitDx65H7G2TYE91W1MvPvi0FgimAuzeh553QcTvzwxXE464ffvihK8xJ1HkP359rxFm9ntDBD8fOQDkGUHpsF4AX/gziDcgX8Nhu+aedV7Q8JlOHa/C0K/lxPBtOL068SM+mXw2K3G4XJgWZvC6weWVNo1Muup2G141pA0C7mjRvboSe75njTQIab3rpg4Me0ND3C7zJBaQvR+4IS/+jDM3q8AzmTi8Rr2V4oXAref9HPHTRMPsMZBhoLzCMjwrl22eUMtdZAo8n+tSqbODL1QFoc4gnrIe2fqxjYMjcYcqmnhV8LUAfq25meAoPPfTQDSYu7wn4x2DXlQBtAnlmmrRkwyI9GxX8kUJrWwWv58XioVa8zEm8TX28iEDQmF1vufxzLSW8eZjiGMZ7zKOj4HxoRvO2xj5fU4AWeBNv2EOurvi6MPzBlN0KUmfJZhK32+7JmD/ke453KgqQH4ns7+GbzvdESN9Zo0aNHoTBMG7yFhFe56fvwdZ/Csv6G7+T4HfnLuCugJ7tw3JWfJ0+loOec5Gr7vP3MDpdvXHjRrU9GPKVtnbt2kMIvtPXOvGeL0M3I5+SZJ9IL+slFvEnxiuEZVFOXkAuPbgw3B2ZPJ4D0BribV5HIQ84hGfr65VSUN/lxRgB8ADAYjxODTZK58M/TTJc+rG0M0ATA7mDFZoLWS0edL4sIdB82ZqAfQVyw4jHAM1PfzrZA5raa6O8i5UfW8/H1l/4ZXmB2kp7XiMioOkKJv57o16+J8n7LxMn/JeGZsptY/H+wui0GLn6Fs8jsW9f5BvxA30Fhu319JToqrB8ceP7BBuF3Mtd0RSGYh/wkT5vLmF4ZRkC/hMFNIzWyNSLTo+YDmVuJY9k9C1k7vH/yMq7nePL70C+Ax34qcmvEJmadjyKJt/uMJ98HeDVC/NNHM8x19BRoRZemgvZaQBfIPKAS53q7ODStIHhcgmMpmKSrkOgnQnf9OM7Ce9lj6wLYTD3JP1g7nGS0QX9Drrd5dM7PKb1h3YpTR6sic2Gvi5sOyu9SDIh2GhYSypta5eAkoNS/UifXV4yNB6tMfr8nbuBlW8O4O9h4nTUTwyNrp8yoR2P/IWGR9iDOZrXMRZPR8QNQG12QFMWRRfImxb7Io8m9losxF0CGfa9Ea/4NXOh72jbL40Q+tr0NvHh5eJpricU0I4TTzoR6L8QfsacsDneujnPfo9h8j6U8pUWXORryO0tcMi3jbsbeTwwKh4IxhIe4A0LG/2Rsr1pieElGyacs2HcYaHCnkLBV0O8MonSMT/Ha6nj7A3laXzPrR/gtw17rKXQ8dAnmzjGGoH+j5m4HdLWPXY8RBeStyf3B3jVt0JpMVE67hs61ehQlQXJ4QissoUAzWWAbCQ874eBvMDUiLh3WJIytCAzWQbgzQ+h/dfAOM3iyxtdZVbB5FEGL7/JSPg9t9ElYCN7G3b4xDBo03po5Y8Bl0lXSJ5R5LnT5iWi0RHx6DlqpGejcZrfeG+M+4XmE2ZkUUDn6Dj3IuoPgEbHj8fQfcO/YGS8uZt0Jk9lhbpo/Hwm8rfvjcX/JX1dPHev9yBNB0Fncr8NPQC5AAkmD/wf0WkgKzudBfM8BvXLtub0hrZQ9HRBi5n/5TYeWCAfRtlzCL2LfIGngf4592hu9Ye5tC/4a9r/pGEkCGeH+eR7s1WrVvfbfECkfcI8m2do+AXQd1LXTYaXKKSfhtO+bdxvgJ/IuW4k2GhcDLCoNCNvjaP4BdStyXqgPJ0qDzUEflynI/dF2BjIfcLw0i0CmIEoMi9zbwkYe4mFBE0w9AOGDz0ZuSuIv8AtgOahzx3MDU9Bp4mjRo3aDM8ebm+lE96mHV/imV9Fv7NJN9cXlNWOoWm0YSiEl2fHQ7TynIsecVOBkFwOz6sfQTZoE/QK7q5R0yD4g7g3hcpQXRegn+ZvRV7IbqV91RE8h/DxqAxxrhPjNCDjF2TwPAO0DvX9FGN+E1VAafHooLaUrf9doAaY61YaP8JEwiG6d4U31/DRW99/O6s4k1p/lduRPFUBkL5AGR6WTLH7DNnLOh1gvW3sFyG8kfJHAtBxUftnLBg0/GrKcL6Vdyv0ePKNph/CoLDEYkntEzJFuBbuKtr10L7ycmjgGJ6stEf2RO4XWGTk8QONWxTF1hAbw/5fwTlOXOrrzo9ilmhzxYGNTpbbtj3bNDq4j8lQFiFKX0Y9j3JXseobgh7jrXgcydbHcRwW+BT9q5KoyUMHGjw/TrCUGQwj2smfbAMOXX7knsjqcQzg37AvFbSPxrZDC+Q1fC5jr+6NbHpvIpHu9NsM0rorHd23c7cE4EuMfAzYNNZiIE1yveU4wrtYUZ0Q9eFjU0C6QxS+nnqnoYM3xEMXQPcDaNOKUxc/llbI30O+qQBNjc/IpXkvenSh8trosoz/nTrXH2Yzok9ZVIrtf0Gbg0ddtPsT+uAUU3cM2BDWM9BgAokwstN7G+HSDumgG3H7Y0w91L+boaO7PYE2aS7MTgvgLLQ3+Gtfu3U4iSOMpuEFwuUmQSEdvc9hy5ZNlUbJu22gUd4O7s4OaKlatmzzM03oh5NYTq3fgp/Bdu2BZ/NPla7GsxkAvgYqL7CFS4OmvlwmshMA2gCrfH1QpSPj/asWz5Hl3ALBpi4rqE4W0DTBm1LabWO1U4mhcxb1djN1Ue/3AO1C7WsZngv3DwsEYMOzdLaa9C1L36eseNpJQFaD07L6/5+/MYUDtFU86G3DQ/KPDc+F+48FvCGTjj+MJrUwzaLTZ+B19NSgVC7/dMbCENA+Y+Xb3AGtVEyeFYV6YMOrdUSbikYjwPaEodMd+nth/wBowW469b3HXtJ5ZbnFku52ufKKtoAHNjq7uSW6lvnSu1Y8baR21zmJ8SZACx6QU/fr3C3MMaG0VeYKyjoLeGBDq/9svOXmvkTnF6ZbUz2IZhHyGuXWM2VTz5PMDdvs6zGKkXVh+bdAHNho0ovpbhabxV04yqJ3KIMH6gBtgg75MTfUfpq7DgALVMLj1MfjBKdF2ZTLS2e72az9AyC7mzLNnp6eWeo/vIxMZz2urOy3gF6U+JmlZj4PiXV0JuULj1UFoM2ioHu4PaABMp0gudYBLWXzlssCKgE2e762FjCkPF/T1ganUbVPZx+T0VMBPX5aUC4t5ZRO2QICm44uexf0WkOXNGTFeRIrTh3r+akpAwB/w7myi/Ga7xueCw88C2iBUGA1O6XJOguBzsz/dMQkABr0YvbQmjmgWVY+QMlKeJ3deDTT/GBINYzihDyB0PcjRnIPseUp+1GOZF/PHppeMXPXAW4BebYVlg0OZ3UanD+y+AlJrWYBWV4IaELvrSwEroo6+pywMJewX1tAYHvHbiH7Yc3s+L5ohs3rGDbfB2jnWnI/sH3SkeNJIyyeI50Fcirwips+rLLassVdbFuYzV6L/R+SLY1GAE1vPc2Eq+9CmOsNHqafyYrzecNwobOAsUDFvLy8wqZNm1YHOL/ymUfziv/XS5cufc8ImVDfmTj99NNvBZyzkT/J8Am1UfsXXhq+dvTo0RstviOdBQILeJutOmLEyQ99/8LzUgBnA2DqDXjmf/fdd3UYWs/k7gT/Wvh6cym44C2HpxdSFgVMRzgLRFjAPELKYWjUMaNnbBmApDebIodU0rYhezfPN+8tzbNvtj6OLt8WCMCmZjAP02v2+hdBkQCTDCDTNob+a9ztnNb4Rjx3OQsUxwIxYFMGHQViyNSnM+1nppqTfc49gze5H9rXP68oTqVO5sC0QBzYjBk0jwNwTYj/oE9kclx7i0lzobOAs4CzgLOAs4CzgLOAs4CzgLOAs4CzgLOAs4CzgLOAs4CzgLOAs4CzgLOAs4CzgLOAs4CzgLOAs4CzQLQF/g1JU1iuk19P+QAAAABJRU5ErkJggg=="},140:function(e,t,n){"use strict";n(133);var a=n(6),o=n.n(a),r=(n(142),n(143),n(137),n(136)),c=n(0),s=n.n(c),l=n(4),i=n.n(l),u=n(134),m=n(147);n(144);function d(e){var t=e.path,n=e.name,a=e.exact,o=e.className,r=e.onClick;return s.a.createElement(u.Link,{to:t,exact:a.toString(),className:"link_main "+o,activeClassName:"is-active",onClick:r},n)}d.defaultProps={path:null,name:null,exact:!1,className:"",onClick:function(){}},d.propTypes={path:i.a.string,name:i.a.string,exact:i.a.bool,className:i.a.string,onClick:i.a.func};var g=Object(c.memo)(d);n(66);function p(e){var t=e.listContents,n=e.isInner,a=e.LinkComponent,o=e.onLinkClick;return s.a.createElement("ul",{className:"aside__list"},t.map(function(t){var r=t.bullet,l=t.content,i=t.isCurrentPath,u=void 0!==i&&i;return s.a.createElement(c.Fragment,{key:r},s.a.createElement("li",{className:n?"":"list-item--style-none"},s.a.createElement(a,Object.assign({},t,{onClick:o,className:n?"link_small":""}))),l&&(u||n)?s.a.createElement("li",{className:n?"list-item--style-none":"list-item--style-none margin-bottom--1"},s.a.createElement(p,Object.assign({},e,{listContents:l,isInner:!0}))):null)}))}p.defaultProps={listContents:[],isInner:!1,LinkComponent:null,onLinkClick:function(){}};var f=p;function b(e){var t=e.prevRoute,n=e.nextRoute,a=e.onFooterLinkClick;return s.a.createElement("div",{className:"footer__inner"},t?s.a.createElement("button",{className:"button",type:"button",onClick:function(){return a(t.path)}},"Previous",s.a.createElement("br",null),s.a.createElement("span",{className:"text--blue"},"— ",t.name)):s.a.createElement("div",null),n?s.a.createElement("button",{className:"button text--right",type:"button",onClick:function(){return a(n.path)}},"Next",s.a.createElement("br",null),s.a.createElement("span",{className:"text--blue"},n.name," —")):s.a.createElement("div",null))}b.defaultProps={prevRoute:null,nextRoute:null,onFooterLinkClick:function(){}};var h,A,y=b,v=n(139),O=n.n(v),C=[{exact:!0,path:"/",name:"Getting started",description:"Get started with Charm UI library",content:[{path:"/#installation",name:"Installation",content:[{path:"/#css",name:"CSS"},{path:"/#js",name:"JS"}]}]},{path:"/usage/",name:"Usage",description:"Learn how to use Charm with different libraries",content:[{path:"/usage/gatsby",name:"Gatsby JS"},{path:"/usage/next",name:"Next JS"}]},{path:"/about/",name:"About",description:"Other lead"}];n(145),n(146),n(67);function L(e){return e.pathname.split("/charm-docs")[1]}function N(e,t,n){return e.reduce(function(a,o,r){return o.bullet===t&&(e[r+1]||e[r-1])&&(a=n?e[r-1]:e[r+1]),o.content&&!a?N(o.content,t,n):a},null)}function M(){document.documentElement.style.setProperty("--color-fontBlack","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--color-fontMain","rgba(210, 210, 210, 1)"),document.documentElement.style.setProperty("--color-bgMain","rgba(32, 32, 32, 1)"),document.documentElement.style.setProperty("--color-bgMain-99","rgba(32, 32, 32, 1)"),document.documentElement.style.setProperty("--color-bgYellow","rgba(45, 45, 45, 1)"),document.documentElement.style.setProperty("--color-fontSecondary","rgba(170, 170, 170, 1)"),document.documentElement.style.setProperty("--color-fontSecondary-70","rgba(170, 170, 170, 0.7)"),document.documentElement.style.setProperty("--color-fontSecondary-light","rgba(100, 100, 100, 0.7)"),document.documentElement.style.setProperty("--color-blue","rgba(74, 144, 226, 1)"),document.documentElement.style.setProperty("--color-blue-20","rgba(74, 144, 226, 0.2)")}"undefined"!=typeof window&&(h=window.localStorage,A=window.matchMedia("(min-width: 576px)").matches);var w=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={showAside:!1,theme:h&&h.getItem("theme")||"Light"},t.toggleAside=function(){t.setState({showAside:!t.state.showAside})},t.toggleTheme=function(){"Light"===t.state.theme?(t.setState({theme:"Dark"}),h.setItem("theme","Dark"),M()):(t.setState({theme:"Light"}),h.setItem("theme","Light"),document.documentElement.style.setProperty("--color-fontBlack","rgba(46, 46, 46, 1)"),document.documentElement.style.setProperty("--color-fontMain","rgba(51, 51, 51, 1)"),document.documentElement.style.setProperty("--color-bgMain","rgba(253, 253, 253, 1)"),document.documentElement.style.setProperty("--color-bgMain-99","rgba(253, 253, 253, 0.99)"),document.documentElement.style.setProperty("--color-bgYellow","rgba(255, 224, 102, 0.1)"),document.documentElement.style.setProperty("--color-fontSecondary","rgba(74, 74, 74, 1)"),document.documentElement.style.setProperty("--color-fontSecondary-70","rgba(74, 74, 74, 0.7)"),document.documentElement.style.setProperty("--color-fontSecondary-light","rgba(155, 155, 155, 0.7)"),document.documentElement.style.setProperty("--color-blue","rgba(0, 82, 155, 1)"),document.documentElement.style.setProperty("--color-blue-20","rgba(0, 82, 155, 0.7)"))},t}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){"Dark"===this.state.theme&&M()},n.render=function(){var e,t=this.props,n=t.children,a=t.location,o=this.state,c=o.showAside,l=o.theme,i=function e(t,n){return void 0===n&&(n=-1),t.map(function(t,a,o){return Object.assign({},t,{bullet:n>=0?n+"."+a:""+a},t.content?{content:e(t.content,n>=0?n+"."+a:""+a)}:{})})}(C),d=function e(t,n){return t.reduce(function(t,a){return L(n)===a.path?Object.assign({},t,a):a.content?Object.assign({},t,e(a.content,n)):t},{})}(i,a),p=N(i,d.bullet,!1),b=N(i,d.bullet,!0),h=[A?void 0:s.a.createElement("button",{type:"button",className:"button text--small",onClick:this.toggleAside},s.a.createElement("small",{className:"small"},"Menu")),s.a.createElement("small",{className:"small"},d.name),s.a.createElement("button",{type:"button",className:"button text--small",onClick:this.toggleTheme},s.a.createElement("small",{className:"small"},"Light"===l?"Dark":"Light"))];return s.a.createElement(r.MDXProvider,{components:(e=d.description,{h1:function(t){var n=t.children;return s.a.createElement("h1",t,n,s.a.createElement("p",{className:"lead text--light margin-top--1"},e))}})},s.a.createElement(m.b,{isAsideShown:c,aside:s.a.createElement(m.a,{logo:s.a.createElement("img",{style:{maxWidth:60},src:O.a,alt:"logo"})},s.a.createElement(f,{LinkComponent:g,listContents:function e(t,n){return t.map(function(t){return Object.assign({},t,{isCurrentPath:function(e,t,n){return e===t||(""!==n?t.includes(n):"/"===t?e===t:e.includes(t))}(L(n),t.path,n.hash)},t.content?{content:e(t.content,n)}:{content:t.content})})}(i,a),onLinkClick:this.toggleAside})),nav:s.a.createElement(m.c,{content:h.filter(function(e){return e})}),footer:s.a.createElement(y,{nextRoute:p,prevRoute:b,onFooterLinkClick:function(e){return Object(u.navigate)(e)}})},n))},t}(c.Component);w.defaultProps={location:null},w.propTypes={location:i.a.shape()};t.a=w}}]);
//# sourceMappingURL=component---src-pages-usage-gatsby-mdx-fbf6e4c92d15d0362aa4.js.map