// src/types/chat.ts

export interface ChatMessage {
  type: "msg";
  sender: "customer" | "store";
  text: string;
}

export interface MovementPoint {
  x: number;
  y: number;
  timestamp: string;
}

export interface PurchasedItem {
  id: string;
  name: string;
  price: number;
}

export interface StrategyReport {
  summary: string;             // 대화 요약
  keyword: string[];           // 핵심 키워드
  strategy: string;            // 고객 맞춤 마케팅 전략
  recommendedCoupons: any[];   // TBD
  recommendedProducts: any[];  // TBD
  debugRecentUtterances: string;
}

export interface StrategyResult {
  type: "strategy_result";
  customerId: string;
  payloadUsed: {
    customerId: string;
    chatMessages: ChatMessage[];
    movementPath: MovementPoint[];
    purchasedItems: PurchasedItem[];
  };
  report: StrategyReport;
}
