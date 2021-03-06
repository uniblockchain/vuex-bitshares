const config = {
  bitsharesNodes: {
    list: {
      'wss://bitshares.openledger.info/ws': { location: 'Nuremberg, Germany' },
      'wss://eu.openledger.info/ws': { location: 'Berlin, Germany' },
      // 'wss://bit.btsabc.org/ws': { location: 'Hong Kong' },
      'wss://bts.ai.la/ws': { location: 'Hong Kong' },
      'wss://bitshares.apasia.tech/ws': { location: 'Bangkok, Thailand' },
      'wss://japan.bitshares.apasia.tech/ws': { location: 'Tokyo, Japan' },
      // 'wss://bitshares.dacplay.org/ws': { location: 'Hangzhou, China' },
      'wss://bitshares-api.wancloud.io/ws': { location: 'China' },
      // 'wss://openledger.hk/ws': { location: 'Hong Kong' },
      // 'wss://bitshares.crypto.fans/ws': { location: 'Munich, Germany' },
      'wss://ws.gdex.top': { location: 'China' },
      // 'wss://dex.rnglab.org': { location: 'Netherlands' },
      'wss://dexnode.net/ws': { location: 'Dallas, USA' },
      'wss://kc-us-dex.xeldal.com/ws': { location: 'Kansas City, USA' },
      'wss://btsza.co.za:8091/ws': { location: 'Cape Town, South Africa' },
      'wss://api.bts.blckchnd.com': { location: 'Falkenstein, Germany' },
      'wss://api-ru.bts.blckchnd.com': { location: 'Moscow, Russia' },
      'wss://eu.nodes.bitshares.ws': {
        location: 'Central Europe - BitShares Infrastructure Program'
      },
      'wss://us.nodes.bitshares.ws': {
        location: 'U.S. West Coast - BitShares Infrastructure Program'
      },
      'wss://sg.nodes.bitshares.ws': { location: 'Singapore - BitShares Infrastructure Program' },
      'wss://ws.winex.pro': { location: 'Singapore' }
    },
    defaultNode: 'wss://bitshares.openledger.info/ws'
  },
  referrer: 'trfnd',
  faucetUrl: 'https://faucet.trusty.fund/signup',
  bbfFaucetUrl: 'https://faucet.bitshares.eu/onboarding',
  bbfRegisterationUser: '1.2.450921',
  removePrefix: 'OPEN.',
  marketBases: ['OPEN.BTC', 'OPEN.ETH', 'BTS', 'USD', 'CNY'],
  defaultMarkets: {
    'OPEN.BTC': [
      'BTS',
      'USD',
      'OPEN.ETH',
      'OPEN.DASH',
      'BLOCKPAY',
      'OPEN.DGD',
      'OPEN.STEEM',
      'OPEN.USDT',
      'OPEN.MAID',
    ],
    BTS: [
      'USD',
      'OPEN.ETH',
      'OPEN.EOS',
      'PPY',
      'OPEN.STEEM',
      'OBITS',
      'RUBLE',
      'HERO',
      'OCT',
      'SILVER',
      'GOLD',
      'BLOCKPAY',
      'BTWTY',
      'SMOKE',
      'GDEX.BTC',
      'GDEX.ETH',
      'GDEX.EOS',
      'GDEX.BTO',
      'OPEN.EOSDAC',
      'OPEN.MAID',
      'OPEN.HEAT',
      'XBTSX.STH',
      'ZEPH',
      'HERTZ',
      'SPARKDEX.BTC',
      'SPARKDEX.ETH'
    ],
    USD: [
      'BTS',
      'OPEN.BTC',
      'OPEN.USDT',
      'OPEN.ETH',
      'OPEN.DASH',
      'OPEN.STEEM',
      'OPEN.MAID',
      'GOLD',
      'HERO',
      'GDEX.BTC',
      'GDEX.ETH',
      'GDEX.EOS',
      'GDEX.BTO',
      'OPEN.EOSDAC'
    ],
    CNY: [
      'BTS',
      'OPEN.BTC',
      'USD',
      'OPEN.ETH',
      'YOYOW',
      'OCT',
      'GDEX.BTC',
      'GDEX.ETH',
      'GDEX.EOS',
      'GDEX.BTO',
      'GDEX.BTM'
    ]
  },
  MAIN_NET_CHAINID: '4018d7844c78f6a6c41c6a552b898022310fc5dec06da467ee7905a8dad512c8'
};

export default config;
