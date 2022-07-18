const sdk = require('api')('@vtex-rest-api/v2.1#5ro6f36kzihwho1');



sdk.Getdocument({
  acronym: '{{acronym}}',
  id: '{{id}}',
  Accept: 'application/vnd.vtex.ds.v10+json',
  'X-VTEX-API-AppKey': 'vtexappkey-controll-FAUAFU',
  'X-VTEX-API-AppToken': 'JYXTPRJTTLDYNTNNNERLAWWFOJLFFCKWZQJCWDCYDGVIQEGTNLGPERTZITFXXXJJLLAYDGJOATQFAHPCSKMOEABUJFTOKWRBVFXOPVMGPNDIAZRNODLWHZVWBXAZHOCX'
})
  .then(res => console.log(res))
  .catch(err => console.error(err));