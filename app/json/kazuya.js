const kazuya = {
  'moves': [{
    'notation': '1',
    'hit_level': 'h',
    'damage': '9',
    'speed': '10',
    'on_block': '+1',
    'on_hit': '+8',
    'on_ch': '+8',
    'notes': null
  }, {
    'notation': '1, 1',
    'hit_level': 'h, h',
    'damage': '9,8',
    'speed': '10',
    'on_block': '-1',
    'on_hit': '+8',
    'on_ch': '+8',
    'notes': null
  }, {
    'notation': '1, 1, 2',
    'hit_level': 'h, h, m',
    'damage': '9,8,16',
    'speed': '10',
    'on_block': '-17',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': '1, 2',
    'hit_level': 'h, h',
    'damage': '9,10',
    'speed': '10',
    'on_block': '-1',
    'on_hit': '+7',
    'on_ch': '+7',
    'notes': null
  }, {
    'notation': '1, 2, 2',
    'hit_level': 'h, h, h',
    'damage': '9,10,16',
    'speed': '10',
    'on_block': '-12',
    'on_hit': '+4',
    'on_ch': '+4',
    'notes': null
  }, {
    'notation': '1, 2, 4',
    'hit_level': 'h, h, l',
    'damage': '9,10,24',
    'speed': '10',
    'on_block': '-14',
    'on_hit': '-3',
    'on_ch': '0 OC',
    'notes': null
  }, {
    'notation': '1, 2, 4, 3',
    'hit_level': 'h, h, l, m',
    'damage': '9,10,24,33',
    'speed': '10',
    'on_block': '-2',
    'on_hit': 'KND',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': '2',
    'hit_level': 'h',
    'damage': '16',
    'speed': '12',
    'on_block': '-3',
    'on_hit': '+8',
    'on_ch': '+8',
    'notes': null
  }, {
    'notation': '2, 2',
    'hit_level': 'h, m',
    'damage': '16,29',
    'speed': '12',
    'on_block': '-10',
    'on_hit': '+6',
    'on_ch': 'CS',
    'notes': 'Tail spin'
  }, {
    'notation': '3',
    'hit_level': 'h',
    'damage': '18',
    'speed': '14',
    'on_block': '-8',
    'on_hit': '+4',
    'on_ch': '+4',
    'notes': null
  }, {
    'notation': '3, 1',
    'hit_level': 'h, h',
    'damage': '18,9',
    'speed': '14',
    'on_block': '-1',
    'on_hit': '+7',
    'on_ch': '+7',
    'notes': null
  }, {
    'notation': '3, 1, 4',
    'hit_level': 'h, h, m',
    'damage': '18,9,20',
    'speed': '14',
    'on_block': '-6',
    'on_hit': '+8',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': '4',
    'hit_level': 'h',
    'damage': '24',
    'speed': '12',
    'on_block': '-9',
    'on_hit': '+2',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': '4~3',
    'hit_level': 'mm (TJ)',
    'damage': '24,33',
    'speed': '31,35~36 RG (32~)',
    'on_block': '-11~-10',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': '1+2',
    'hit_level': 'mm',
    'damage': '13,16?',
    'speed': '12,28',
    'on_block': '-14',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': '3+4',
    'hit_level': 'h',
    'damage': '21',
    'speed': '14',
    'on_block': '-8',
    'on_hit': '+4',
    'on_ch': '+4',
    'notes': null
  }, {
    'notation': 'f+2',
    'hit_level': 'm(h or m punch parry)',
    'damage': '33',
    'speed': '20',
    'on_block': '-12',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': 'Power crush'
  }, {
    'notation': 'f+3',
    'hit_level': 'm',
    'damage': '29',
    'speed': '19',
    'on_block': '-13',
    'on_hit': '+5',
    'on_ch': 'KND?()',
    'notes': null
  }, {
    'notation': 'f+4',
    'hit_level': 'm',
    'damage': '27',
    'speed': '19~20',
    'on_block': '+3~+4 OC',
    'on_hit': '+7~+8 OC',
    'on_ch': 'KND?',
    'notes': null
  }, {
    'notation': 'f+1+2',
    'hit_level': 'm',
    'damage': '27',
    'speed': '25',
    'on_block': '-16',
    'on_hit': 'CS',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': 'd/f+1 or d/f+1+2',
    'hit_level': 'm',
    'damage': '14',
    'speed': '15~16',
    'on_block': '-7~-6',
    'on_hit': '+9~+10',
    'on_ch': '+9~+10',
    'notes': null
  }, {
    'notation': 'd/f+1, 2',
    'hit_level': 'm, m',
    'damage': '14,',
    'speed': '15~16s',
    'on_block': 's',
    'on_hit': 's',
    'on_ch': 's',
    'notes': null
  }, {
    'notation': 'd/f+1+2, 2',
    'hit_level': 'm, h',
    'damage': '14,27',
    'speed': '15~16',
    'on_block': '+1s?',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'd/f+1, 4',
    'hit_level': 'm, h',
    'damage': '14,20',
    'speed': '15~16',
    'on_block': '-7',
    'on_hit': '+',
    'on_ch': 'KND?',
    'notes': 'Tail spin'
  }, {
    'notation': 'd/f+1, f+2',
    'hit_level': 'm, m',
    'damage': '13,29',
    'speed': '15~16',
    'on_block': '-12',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'd/f+2',
    'hit_level': 'm',
    'damage': '27',
    'speed': '14',
    'on_block': '-12',
    'on_hit': '+5',
    'on_ch': 'CS(13)',
    'notes': 'Homing'
  }, {
    'notation': 'd/f+3',
    'hit_level': 'm',
    'damage': '17',
    'speed': '18~19',
    'on_block': '-7~-6',
    'on_hit': '+9~+10',
    'on_ch': '+9~+10',
    'notes': null
  }, {
    'notation': 'd/f+3, 2',
    'hit_level': 'm, m',
    'damage': '17,20',
    'speed': '18~19',
    'on_block': '-11',
    'on_hit': '+5',
    'on_ch': '+5',
    'notes': null
  }, {
    'notation': 'd/f+3, 2, 1',
    'hit_level': 'm, m, m',
    'damage': '17,20,28',
    'speed': '18~19',
    'on_block': '-19',
    'on_hit': 'KND',
    'on_ch': '+24',
    'notes': null
  }, {
    'notation': 'd/f+4',
    'hit_level': 'm',
    'damage': '13',
    'speed': '13~14',
    'on_block': '-9~-8',
    'on_hit': '+2~+3',
    'on_ch': '+2~+3',
    'notes': null
  }, {
    'notation': 'd/f+4, 4',
    'hit_level': 'm, m',
    'damage': '13,21',
    'speed': '13~14',
    'on_block': '-15~-14',
    'on_hit': '-4~-3 OC',
    'on_ch': '-4~-3 OC',
    'notes': null
  }, {
    'notation': 'd+1+2',
    'hit_level': 'l (TC)',
    'damage': '24',
    'speed': '25 RC',
    'on_block': '-16',
    'on_hit': '+2 OC',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'd/b+2',
    'hit_level': 'm',
    'damage': '27',
    'speed': '20 RC',
    'on_block': '0 OC',
    'on_hit': '+9 OC',
    'on_ch': '+9 OC',
    'notes': null
  }, {
    'notation': 'd/b+3',
    'hit_level': 'l (TC)',
    'damage': '18',
    'speed': '19~20 RC',
    'on_block': '-12~-11',
    'on_hit': '-1~0',
    'on_ch': '+7~+8 OC',
    'notes': null
  }, {
    'notation': 'd/b+4',
    'hit_level': 'l',
    'damage': '24',
    'speed': '20~21',
    'on_block': '-12~-11',
    'on_hit': '+2~+3',
    'on_ch': '+10~?g',
    'notes': null
  }, {
    'notation': 'b+1',
    'hit_level': 'h',
    'damage': '17',
    'speed': '11~12',
    'on_block': '-10~-9',
    'on_hit': '+1~+2',
    'on_ch': '+1~+2',
    'notes': null
  }, {
    'notation': 'b+1, 2',
    'hit_level': 'h, m',
    'damage': '17,27',
    'speed': '11~12',
    'on_block': '-15',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'b+2',
    'hit_level': 'm',
    'damage': '16',
    'speed': '14',
    'on_block': '-7',
    'on_hit': '+4',
    'on_ch': '+4',
    'notes': null
  }, {
    'notation': 'b+2, 4',
    'hit_level': 'm, h',
    'damage': '16,16',
    'speed': '14',
    'on_block': '-3',
    'on_hit': '+8',
    'on_ch': '+8',
    'notes': null
  }, {
    'notation': 'b+2, 4, 1',
    'hit_level': 'm, h, m',
    'damage': '16,16,29',
    'speed': '14',
    'on_block': '-14~-13',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'b+3',
    'hit_level': 'h',
    'damage': '20',
    'speed': '18',
    'on_block': '-8',
    'on_hit': '+3',
    'on_ch': '+3',
    'notes': null
  }, {
    'notation': 'b+3, 1',
    'hit_level': 'h, h',
    'damage': '20,13',
    'speed': '18',
    'on_block': '0',
    'on_hit': '+6',
    'on_ch': '+6',
    'notes': null
  }, {
    'notation': 'b+3, 1, 4',
    'hit_level': 'h, h, l',
    'damage': '20,13,13',
    'speed': '18',
    'on_block': '-10',
    'on_hit': '+7',
    'on_ch': '+7',
    'notes': null
  }, {
    'notation': 'b+3, 1, 4, 1',
    'hit_level': 'h, h, l, m',
    'damage': '20,13,13,20',
    'speed': '18',
    'on_block': '-14',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'b+3, 1, 4, 3',
    'hit_level': 'h, h, l, l',
    'damage': '20,13,13,16',
    'speed': '18',
    'on_block': '-13',
    'on_hit': '+1',
    'on_ch': '+1',
    'notes': null
  }, {
    'notation': 'b+4',
    'hit_level': 'm',
    'damage': '29?',
    'speed': '17~18?',
    'on_block': '-8~-7?',
    'on_hit': '+6~+7?',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': 'b+1+2',
    'hit_level': 'm',
    'damage': '28',
    'speed': '22',
    'on_block': '-9',
    'on_hit': '+4',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': 'b+1+4',
    'hit_level': '!',
    'damage': '40',
    'speed': '43',
    'on_block': 'Launch',
    'on_hit': 'Launch',
    'on_ch': 'Launch',
    'notes': null
  }, {
    'notation': 'B+1+4',
    'hit_level': '!',
    'damage': '67',
    'speed': '63',
    'on_block': 'Launch',
    'on_hit': 'Launch',
    'on_ch': 'Launch',
    'notes': null
  }, {
    'notation': 'u or u/f+3',
    'hit_level': 'm (TJ)',
    'damage': '33',
    'speed': '19',
    'on_block': '-9',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'u or u/f+4',
    'hit_level': 'm (TJ)',
    'damage': '21',
    'speed': '25',
    'on_block': '-12',
    'on_hit': '-1',
    'on_ch': '-1',
    'notes': null
  }, {
    'notation': 'u/f+4, 4',
    'hit_level': 'm (TJ), l',
    'damage': '21,16',
    'speed': '25',
    'on_block': '-18',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'u/f+4, 4, 4',
    'hit_level': 'm (TJ), l, l',
    'damage': '21,16,13',
    'speed': '25',
    'on_block': '-18',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'u/f+4, 4, 4, 4',
    'hit_level': 'm (TJ), l, l, m',
    'damage': '21,16,13,27',
    'speed': '25',
    'on_block': '-17',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, F+2',
    'hit_level': 'h',
    'damage': '37',
    'speed': '13(14~)',
    'on_block': '-11',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, F+3',
    'hit_level': 'm',
    'damage': '33',
    'speed': '20(21~)',
    'on_block': '-3 OC',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, f, f+3 or WR+3',
    'hit_level': 'm (TJ)',
    'damage': '40',
    'speed': '22~23 (25~)',
    'on_block': '+9~+10 GB',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'WS+1',
    'hit_level': 'm',
    'damage': '13',
    'speed': '13',
    'on_block': '-5',
    'on_hit': '+5',
    'on_ch': '+5',
    'notes': null
  }, {
    'notation': 'WS+1, 2',
    'hit_level': 'm, m',
    'damage': '13,16',
    'speed': '13',
    'on_block': '-13',
    'on_hit': 'Launch (JG?)',
    'on_ch': 'Launch (JG?)',
    'notes': null
  }, {
    'notation': 'WS+2',
    'hit_level': 'm',
    'damage': '33',
    'speed': '16',
    'on_block': '-18',
    'on_hit': 'CS',
    'on_ch': 'CS',
    'notes': 'Homing'
  }, {
    'notation': 'WS+3',
    'hit_level': 'm',
    'damage': '32',
    'speed': '21',
    'on_block': '-5',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': 'Homing'
  }, {
    'notation': 'WS+4',
    'hit_level': 'm',
    'damage': '17',
    'speed': '11~12',
    'on_block': '-3~-2',
    'on_hit': '+8~+9',
    'on_ch': '+8~+9',
    'notes': null
  }, {
    'notation': 'WS+4, 4',
    'hit_level': 'm, m',
    'damage': '17,21',
    'speed': '11~12',
    'on_block': '-15~-14',
    'on_hit': '-4~-3 OC',
    'on_ch': '-4~-3 OC',
    'notes': null
  }, {
    'notation': 'FC+d/f+3+4',
    'hit_level': 'm (TC)',
    'damage': '32',
    'speed': '22~23 RC',
    'on_block': '-11~-10 OC',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'SS+3',
    'hit_level': 'm',
    'damage': '27',
    'speed': '23(32~)',
    'on_block': '-10',
    'on_hit': 'CS',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': 'SS+1+2',
    'hit_level': 'h',
    'damage': '29',
    'speed': '16(25~)',
    'on_block': '-6',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': 'Tail spin'
  }, {
    'notation': 'Opponent Down d+3+4',
    'hit_level': 'On grounded opponent(l)',
    'damage': '25',
    'speed': '23',
    'on_block': '-12',
    'on_hit': '-1',
    'on_ch': '-1',
    'notes': null
  }, {
    'notation': 'in rage d/f+1+2',
    'hit_level': 'm',
    'damage': null,
    'speed': '23',
    'on_block': '–',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': 'Rage art'
  }, {
    'notation': 'Odd frame f, n (SSL)',
    'hit_level': '(Special)',
    'damage': null,
    'speed': '23',
    'on_block': null,
    'on_hit': null,
    'on_ch': null,
    'notes': null
  }, {
    'notation': 'Even frame f, n (SSR)',
    'hit_level': '(Special)',
    'damage': null,
    'speed': '23',
    'on_block': null,
    'on_hit': null,
    'on_ch': null,
    'notes': null
  }, {
    'notation': 'f, n, D/F+2',
    'hit_level': 'h',
    'damage': '31',
    'speed': '11(14~)',
    'on_block': '-10',
    'on_hit': 'Launch (JG?)',
    'on_ch': 'Launch (JG?)',
    'notes': null
  }, {
    'notation': 'f, n, d/f+2',
    'hit_level': 'h',
    'damage': '31',
    'speed': '11(13~)',
    'on_block': '+5',
    'on_hit': 'Launch (JG?)',
    'on_ch': 'Launch (JG?)',
    'notes': null
  }, {
    'notation': 'f, n, d/f+1',
    'hit_level': 'm',
    'damage': '33',
    'speed': '23(25~)',
    'on_block': '-15',
    'on_hit': 'Launch',
    'on_ch': 'Launch',
    'notes': null
  }, {
    'notation': 'f, n, d/f+3',
    'hit_level': 'h (TJ)',
    'damage': '47',
    'speed': '18~27 (20~)',
    'on_block': '-9~0',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, n, d/f+4',
    'hit_level': 'l',
    'damage': '20',
    'speed': '16(18~)',
    'on_block': '-26',
    'on_hit': '-3 OC (KND)',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, n, d, D/F',
    'hit_level': '(Special)',
    'damage': null,
    'speed': '16(18~)',
    'on_block': null,
    'on_hit': null,
    'on_ch': null,
    'notes': null
  }, {
    'notation': 'f, n, d, D/F+2',
    'hit_level': 'h',
    'damage': '31',
    'speed': '11(15~)',
    'on_block': '-10',
    'on_hit': 'Launch (JG?)',
    'on_ch': 'Launch (JG?)',
    'notes': null
  }, {
    'notation': 'f, n, d, d/f+2',
    'hit_level': 'h',
    'damage': '31',
    'speed': '11(14~)',
    'on_block': '+5',
    'on_hit': 'Launch (JG?)',
    'on_ch': 'Launch (JG?)',
    'notes': null
  }, {
    'notation': 'f, n, d, d/f+1',
    'hit_level': 'm',
    'damage': '33',
    'speed': '23(26~)',
    'on_block': '-15',
    'on_hit': 'Launch',
    'on_ch': 'Launch',
    'notes': null
  }, {
    'notation': 'f, n, d, d/f+1, 3',
    'hit_level': 'm, m',
    'damage': '33,20',
    'speed': '23(26~)',
    'on_block': '-14',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, n, d, d/f+1, 4',
    'hit_level': 'm, l',
    'damage': '33,16',
    'speed': '23(26~)',
    'on_block': '-14',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, n, d, d/f+3',
    'hit_level': 'h (TJ)',
    'damage': '42',
    'speed': '18~27 (21~)',
    'on_block': '-9~0',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, n, d, d/f+4',
    'hit_level': 'l',
    'damage': '20',
    'speed': '16(19~)',
    'on_block': '-26',
    'on_hit': '-3 OC (KND)',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, n, d, d/f+4 (Far)',
    'hit_level': 'l',
    'damage': '20',
    'speed': '17(20~)',
    'on_block': '-23',
    'on_hit': '-3 OC (KND)',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, n, d, d/f+4, 4',
    'hit_level': 'l, l',
    'damage': '20,16',
    'speed': '17(20~)',
    'on_block': '-23',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, n, d, d/f+4, 1',
    'hit_level': 'l, m',
    'damage': '20,40',
    'speed': '17(20~)',
    'on_block': '-16',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'in rage u/b+1+2 (to DVK)',
    'hit_level': '(DVK)',
    'damage': null,
    'speed': '17(20~)',
    'on_block': null,
    'on_hit': null,
    'on_ch': null,
    'notes': 'Rage art'
  }, {
    'notation': 'DVK 1+2',
    'hit_level': 'h!',
    'damage': '54',
    'speed': '42~',
    'on_block': 'KND',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'DVK 3+4',
    'hit_level': '! (TJ)',
    'damage': '54',
    'speed': '69 Air~',
    'on_block': 'KND',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'DVK 3+4, 3+4',
    'hit_level': '(Special) (TJ), ! (TJ)',
    'damage': '54',
    'speed': '113 Air~',
    'on_block': 'KND',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'DVK f+1+2',
    'hit_level': 'm',
    'damage': '28',
    'speed': '22',
    'on_block': '-10?',
    'on_hit': 'CS',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': 'DVK d/f+1',
    'hit_level': 'm',
    'damage': '14',
    'speed': '15~16',
    'on_block': '-7~-6',
    'on_hit': '+9~+10',
    'on_ch': '+9~+10',
    'notes': null
  }, {
    'notation': 'DVK d/f+1, 2',
    'hit_level': 'm, m',
    'damage': '14,14',
    'speed': '15~16',
    'on_block': '-13',
    'on_hit': 'Launch (JG?)',
    'on_ch': 'Launch (JG?)',
    'notes': null
  }, {
    'notation': 'DVK u or u/f+1+2',
    'hit_level': '(Sky)!',
    'damage': '29',
    'speed': '20~32',
    'on_block': 'KND',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'DVK f, F+2',
    'hit_level': 'm',
    'damage': '27(,4*3)',
    'speed': '16(17~)',
    'on_block': '-13',
    'on_hit': 'KND',
    'on_ch': 'Throw(CS)',
    'notes': null
  }, {
    'notation': 'DVK f, n, d, d/f+1 When hit U/F',
    'hit_level': 'm, (throw)',
    'damage': '33,10',
    'speed': '23 Air(26~)',
    'on_block': '-15',
    'on_hit': 'Throw(KND)',
    'on_ch': 'Throw(KND)',
    'notes': null
  }, {
    'notation': 'DVK f, n, d, d/f+2',
    'hit_level': 'm',
    'damage': '31',
    'speed': '11(14~)',
    'on_block': '-10',
    'on_hit': 'Launch (JG?)',
    'on_ch': 'Launch (JG?)',
    'notes': null
  }, {
    'notation': 'DVK f, n, d, d/f+4',
    'hit_level': 'l',
    'damage': '20',
    'speed': '16(19~)',
    'on_block': '-?',
    'on_hit': '-3s? (KND)',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'DVK SS+2',
    'hit_level': 'm',
    'damage': '33',
    'speed': '17(26~)',
    'on_block': '-22',
    'on_hit': 'Launch',
    'on_ch': 'Launch',
    'notes': null
  }, {
    'notation': 'DVK d+1+2 (Opponent Down)',
    'hit_level': 'l(On grounded opponent)',
    'damage': '25',
    'speed': '24~25',
    'on_block': '-15~-13',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'Command',
    'hit_level': 'Hit level',
    'damage': 'Damage',
    'speed': 'Start up frame',
    'on_block': 'Block frame',
    'on_hit': 'Hit frame',
    'on_ch': 'Counter hit frame'
  }, {
    'notation': 'd/f+1, 2',
    'hit_level': 'm, m',
    'damage': '14,',
    'speed': '15~16s',
    'on_block': 's',
    'on_hit': 's',
    'on_ch': 's'
  }, {
    'notation': 'b+4',
    'hit_level': 'm',
    'damage': '29?',
    'speed': '17~18?',
    'on_block': '-8~-7?',
    'on_hit': '+6~+7?',
    'on_ch': 'CS'
  }, {
    'notation': 'in rage d/f+1+2',
    'hit_level': 'm',
    'damage': null,
    'speed': '23',
    'on_block': '–',
    'on_hit': 'KND',
    'on_ch': 'KND'
  }, {
    'notation': 'in rage u/b+1+2 (to DVK)',
    'hit_level': '(DVK)',
    'damage': null,
    'speed': '17(20~)',
    'on_block': null,
    'on_hit': null,
    'on_ch': null
  }, {
    'notation': 'DVK f+1+2',
    'hit_level': 'm',
    'damage': '28',
    'speed': '22',
    'on_block': '-9',
    'on_hit': 'CS',
    'on_ch': 'CS'
  }, {
    'notation': 'DVK f, n, d, d/f+2',
    'hit_level': 'm',
    'damage': '31',
    'speed': '11(14~)',
    'on_block': '-10',
    'on_hit': 'Launch (JG?)',
    'on_ch': 'Launch (JG?)'
  }, {
    'notation': 'DVK f, n, d, d/f+4',
    'hit_level': 'l',
    'damage': '20',
    'speed': '16(19~)',
    'on_block': '-?',
    'on_hit': '-3s? (KND)',
    'on_ch': 'KND'
  }, {
    'notation': '2, 4',
    'hit_level': 'h, h',
    'damage': '16,22',
    'speed': '12',
    'on_block': '-9',
    'on_hit': '+4',
    'on_ch': 'CS'
  }, {
    'notation': 'f+1+2, 2',
    'hit_level': 'm, m',
    'damage': '27,27',
    'speed': '25',
    'on_block': '-13',
    'on_hit': 'KND',
    'on_ch': 'KND'
  }, {
    'notation': 'b+4, 1',
    'hit_level': 'm, m',
    'damage': '20,29',
    'speed': '15',
    'on_block': '-12',
    'on_hit': 'KND',
    'on_ch': 'KND'
  }, {
    'notation': 'u/b or u or u/f+2',
    'hit_level': 'h',
    'damage': '24',
    'speed': '17',
    'on_block': '-8',
    'on_hit': '+3',
    'on_ch': '+3'
  }, {
    'notation': 'u/f+2, 2',
    'hit_level': 'h, l (TC)',
    'damage': '24,24',
    'speed': '17 RC',
    'on_block': '-16',
    'on_hit': '+2 OC',
    'on_ch': 'KND'
  }, {
    'notation': 'u/f+2, 2, B (Cancel)',
    'hit_level': 'h',
    'damage': '24',
    'speed': '17 RC',
    'on_block': '-19',
    'on_hit': '-8',
    'on_ch': '-8'
  }, {
    'notation': 'u/b+1+2 (to DVK)',
    'hit_level': '(DVK)',
    'damage': null,
    'speed': '17(20~)',
    'on_block': null,
    'on_hit': null,
    'on_ch': null
  }],
  'metadata': {
    'ver': '0.4',
    'game': 't7',
    'character': 'kazuya',
    'type': 'normal'
  }
}


export default kazuya;