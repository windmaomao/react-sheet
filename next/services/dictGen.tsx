import {randPick, randShuffle} from './random'

export type Dict = {
  word: string,
  meaning: string
}

const Dicts = [
  ['coup'],
  ['forevermore'],
  ['perilous'],
  ['surfeit'],
  ['epitomize'],
  ['leeway'],
  ['opaque'],
  ['unmistakably'],
  ['prominent'],
  ['judicious'],
  ['pique'],
  ['judiciously'],
  ['pillory'],
  ['embrace'],
  ['fertile'],
  ['heuristic'],
  ['intractable'],
  ['invariant'],
  ['hindsight'],
  ['reap'],
  ['purport', '意味着'] 
].map(([word, meaning]) => ({
  word, meaning
}))

const FjList1: Dict[] = [
  ['divulge', '泄密'],
  ['inadvertent', '粗心的，不留意的'],
  ['panergyric', '赞文，赞美'],
  ['draconian', '极其严苛的'],
  ['hodgepodge', '混杂，混合物'],
  ['incontrovertible', '不容置疑的'],
  ['impartial', '公正的，不偏不倚的'],
  ['endemic', '流行的，地方的'],
  ['minuscule', '微小的'],
  ['lucrative', '盈利的，赚钱的'],
  ['compensate', '补偿'],
  ['discursive', '散漫的，不得要领的'],
  ['presuppose', '预先假设'],
  ['intermediary', '作为中间人的'],
  ['derogate', '贬低'],
  ['overbearing', '专横傲慢的'],
  ['zealous', '对狂热的'],
  ['extraneous', '不重要的，外部的'],
  ['rehash', '重提'],
  ['perfunctory', '敷衍草率的'],
  ['compound', '合成，是变糟糕'],
  ['envy', '嫉妒'],
  ['defensive', '防御的'],
  ['unbounded', '不受限制的'],
  ['specious', '似是而非的'],
  ['aimless', '无目的的'],
  ['ingenuous', '纯朴的，真诚的'],
  ['intrinsic', '核心的，内在的'],
  ['inevitable', '不可避免的'],
  ['intransigent', '固执的，不妥协的'],
  ['detached', '不受感情影响的，脱离的'],
  ['inveterate', '根深蒂固的，习惯做的'],
  ['backhanded', '不直接的，含沙射影的'],
  ['affable', '和蔼可亲的'],
  ['whimsy', '突发奇想'],
  ['tenacious', '坚定的，持续的'],
  ['sardonic', '嘲讽的，讥笑的'],
  ['skullduggery', '欺骗，作假'],
  ['legitimate', '合法的'],
  ['plagiarize', '抄袭'],
  ['disavow', '否认'],
  ['deplete', '耗尽'],
  ['ridicule', '嘲笑，耻笑'],
  ['undermine', '削弱'],
  ['self-serving', '自私的'],
  ['perishable', '易消亡的，短暂的'],
  ['capricious', '变化多端的'],
  ['egotism', '自大'],
  ['unqualified', '不合格的，完全的'],
  ['magisterial', '权威的'],
  ['chauvinistic', '极端爱过的'],
  ['sleek', '光滑的，时髦的'],
  ['astringent', '严厉的，尖刻的'],
  ['ambivalent', '矛盾'],
  ['ameliorate', '改善，提升'],
  ['exemplar', '典型'],
  ['grudge', '不愿承认，怨恨'],
  ['sweeping', '广泛的，全面的'],
  ['extirpate', '拔除，使绝迹'],
  ['parity', '平等'],
  ['utilitarian', '实用的，功利的'],
  ['elicit', '引起'],
  ['beneficial', '有益处的'],
  ['intoxicate', '使陶醉，沉醉'],
  ['inchoate', '早期的，混乱的'],
  ['rebuff', '粗鲁的回复，拒绝'],
  ['construe', '理解'],
  ['fallacy', '错误，谬论'],
  ['increment', '增长，递增'],
  ['deteriorate', '恶化'],
  ['grandiose', '宏伟壮观的'],
  ['trucate', '缩短'],
  ['haphazard', '随机的，凌乱的'],
  ['quizzical', '好奇而疑惑的'],
  ['provincial', '眼光狭隘的，乡下的'],
  ['insensitive', '漠视的，不在乎的'],
  ['shackle', '阻碍'],
  ['cumbersome', '笨拙的'],
  ['encomium', '赞美'],
  ['decelerate', '减缓'],
  ['revitalize', '使复活'],
  ['indusputable', '不容置疑的'],
  ['roost', '栖息'],
  ['corroborate', '佐证，提供证据'],
  ['proclivity', '倾向，偏好'],
  ['hysteria', '情绪失控，举止失常'],
  ['speculate', '猜测'],
  ['conducive', '有益的'],
  ['vexation', '烦恼'],
  ['disdain', '鄙视'],
  ['caterwaul', '发出难听的声音'],
  ['efficacious', '有效果的'],
  ['alienate', '疏远'],
  ['analgesic', '止痛药'],
  ['anatomize', '解刨'],
  ['embargo', '贸易禁令'],
  ['contemplate', '深入思考'],
  ['dogmatic', '教条的'],
  ['concrete', '真实的'],
  ['equitable', '平等的'],
].map(([word, meaning]) => ({
  word, meaning
}))

const FjList2 = [
  ['fervent', '热的，热烈的'],
  ['alleviate', '减缓'],
  ['contagious', '传染的'],
  ['pedantic', '卖弄知识的'],
  ['unwieldy', '粗笨，笨重'],
  ['vociferous', '吵吵嚷嚷的'],
  ['profess', '宣称'],
  ['obeisance', '尊敬'],
  ['diffuse', '分散的，啰嗦的'],
  ['fulminate', '抨击，辱骂'],
  ['voluble', '健谈的，话多的'],
  ['sterling', '高质量的'],
  ['surmount', '克服，战胜'],
  ['prying', '窥视的'],
  ['inhibit', '抑制'],
  ['censure', '批评'],
  ['peripatetic', '巡游的'],
  ['stringent', '非常严格的'],
  ['dwindle', '减少'],
  ['underate', '低估'],
  ['incursion', '侵入'],
  ['pastiche', '模仿作品'],
  ['dishearten', '使士气低落'],
  ['emulate', '模仿'],
  ['adduce', '引用'],
  ['emblematic', '象征的'],
  ['indict', '指控'],
  ['discountinue', '终止'],
  ['wary', '谨慎小心的'],
  ['opprobrium', '辱骂'],
  ['aesthetic', '美学的，吸引人的'],
  ['expedite', '加速'],
  ['captivate', '吸引'],
  ['irreversible', '不可逆的'],
  ['emotive', '有感染力的'],
  ['refine', '提纯'],
  ['exhilarate', '使喜悦或兴奋'],
  ['solitary', '单独的'],
  ['jar', '使不安'],
  ['unfrettered', '自由的'],
  ['flummery', '假恭维'],
  ['implacable', '毫无妥协的'],
  ['arduous', '困难的'],
  ['conciliatory', '安抚的，调和的'],
  ['optimism', '乐观'],
  ['vindicate', '证明清白'],
  ['malady', '疾病'],
  ['warrant', '保证'],
  ['puncture', '刺穿'],
  ['ascribe', '归因于'],
  ['clandestine', '秘密的'],
  ['equivocal', '莫林两颗的'],
  ['elucidate', '阐释'],
  ['propaganda', '政治宣传'],
  ['putative', '公认的'],
  ['conjecture', '猜测'],
  ['coalesce', '聚合，团结'],
  ['tractable', '易控制的'],
  ['warble', '低唱'],
  ['knotty', '复杂的'],
  ['dichotomy', '矛盾的事物'],
  ['restive', '不服管理的'],
  ['courteous', '有礼貌的'],
  ['invigorate', ''],
  ['truculent', ''],
  ['congenial', ''],
  ['insouciance', ''],
  ['devastate', ''],
  ['keen', ''],
  ['ethos', ''],
  ['flagrant', ''],
  ['solitude', ''],
  ['anachronism', ''],
  ['turbid', ''],
  ['confine', ''],
  ['venerate', ''],
  ['premeditate', ''],
  ['insular', ''],
  ['consolidate', ''],
  ['unheaval', ''],
  ['unyielding', ''],
  ['mendacious', ''],
  ['sonorous', ''],
  ['fertile', ''],
  ['decadent', ''],
  ['indispensable', ''],
  ['covert', ''],
  ['instinct', ''],
  ['discern', ''],
  ['orientation', ''],
  ['riddle', ''],
  ['jejune', ''],
  ['clownish', ''],
  ['indifferent', ''],
  ['lethargic', ''],
  ['clique', ''],
  ['fungible', ''],
  ['complimentary', ''],
  ['empirical', ''],
].map(([word, meaning]) => ({
  word, meaning
}))

const Lists: Record<string, Dict[]> = {
  custom: Dicts,
  day1: FjList1,
  day2: FjList2
}

export default function dictGen(day: string) {
  const List = Lists[day]
  const dicts = randShuffle(List)
  let i = -1
  return (): Dict => {
    i++
    if (i == dicts.length) i = 0
    return dicts[i]
  }
}
