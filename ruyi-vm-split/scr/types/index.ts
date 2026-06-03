/** 节气总线定义 */
export interface SolarTerm {
  name: string;
  code: number;
  earthBranch: string;
  longevity: string;
  pcStep: number;      // PC步进值，负数表示逆溯
  permMod: string;     // 权限调制模式
}

/** 纳音四象限冲突结果 */
export interface QuadrantResult {
  violation: boolean;
  ripple: number;
  srcMod: number;
  msg: string;
}

/** 字段词解码结果 (22bit) */
export interface FieldWord {
  rippleLvl: number;   // [19:18] 涟漪等级
  ringSel: number;     // [17]    环选择
  dizhi: number;       // [14:11] 地支
  nayin: number;       // [10:6]  纳音索引
  tiangan: number;     // [5:2]   天干
  jiaziPh: number;     // [1:0]   甲子相位
}