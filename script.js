var _0x356a=['\x20by\x20','.newDeposit','click','.accountDeposit','val','.accountName','.ledger','append','<p>','</p><p\x20class=\x27ledgerBorder\x27>$','</p>','forEach','.number','text','Number\x20of\x20Transactions:\x20','length','.total','Total:\x20$','.update','log','Your\x20last\x20deposit\x20amount\x20was\x20$'];(function(_0x5b584a,_0x48f24a){var _0x2fc036=function(_0x27ea71){while(--_0x27ea71){_0x5b584a['push'](_0x5b584a['shift']());}};_0x2fc036(++_0x48f24a);}(_0x356a,0x1ba));var _0x2b37=function(_0x542508,_0x4aa2f7){_0x542508=_0x542508-0x0;var _0x4a35cf=_0x356a[_0x542508];return _0x4a35cf;};var depositNames=[];var depositAmounts=[];var deposit;var name;var totalDeposit;$(_0x2b37('0x0'))[_0x2b37('0x1')](function(){totalDeposit=0x0;deposit=$(_0x2b37('0x2'))[_0x2b37('0x3')]();name=$(_0x2b37('0x4'))[_0x2b37('0x3')]();$(_0x2b37('0x5'))[_0x2b37('0x6')](_0x2b37('0x7')+name+_0x2b37('0x8')+deposit+_0x2b37('0x9'));depositAmounts['push'](deposit);depositNames['push'](name);depositAmounts[_0x2b37('0xa')](function(_0x26ce12){totalDeposit=totalDeposit+parseInt(_0x26ce12);$(_0x2b37('0xb'))[_0x2b37('0xc')](_0x2b37('0xd')+depositAmounts[_0x2b37('0xe')]);$(_0x2b37('0xf'))[_0x2b37('0xc')](_0x2b37('0x10')+totalDeposit);});});$(_0x2b37('0x11'))[_0x2b37('0x1')](function(){console[_0x2b37('0x12')](depositAmounts[depositAmounts[_0x2b37('0xe')]]);alert(_0x2b37('0x13')+depositAmounts[depositAmounts[_0x2b37('0xe')]-0x1]+_0x2b37('0x14')+depositNames[depositNames[_0x2b37('0xe')]-0x1]);});
