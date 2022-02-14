import { randPick } from './random'

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
].map(([word]) => ({
  word
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
  ['inveterate', '一贯的，习惯做的'],
  ['backhanded', '不直接的，含沙射影的'],
  ['affable', '和蔼可亲的'],
  ['whimsy', '突发奇想'],
  ['tenacious', '坚定的，持续的'],
  ['sardonic', '嘲讽的，讥笑的'],
  ['skullduggery', '欺骗，作假'],
  ['legitimate', '合法的'],
  ['', ''],
  ['', ''],
  ['', ''],
  ['', ''],
  ['', ''],
].map(([word, meaning]) => ({
  word, meaning
}))

export default function dictGen() {
  const dicts = [...FjList1]
  return (): Dict => {
    return randPick(dicts)
  }
}
