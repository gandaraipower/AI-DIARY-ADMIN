export type ReportReason = 'PROFANITY' | 'OBSCENE' | 'PERSONAL_INFO' | 'HARASSMENT' | 'FAKE_PROFILE' | 'SPAM' | 'OTHER';
export type ReportStatus = 'PENDING' | 'IN_PROGRESS' | 'RESOLVED' | 'DISMISSED';

// 차단 관련
export type BlockStatus = 'ACTIVE' | 'UNBLOCKED' | 'ADMIN_CANCELLED';
export type BlockReason = 'HARASSMENT' | 'SPAM' | 'INAPPROPRIATE' | 'OFFENSIVE' | 'OTHER';

// 외부 연락처 탐지
export type ContactPatternType = 'PHONE' | 'EMAIL' | 'KAKAO' | 'INSTAGRAM' | 'LINK';
export type ContactDetectionStatus = 'PENDING' | 'CONFIRMED' | 'FALSE_POSITIVE';

export interface Report {
  id: number;
  reporterId: number;
  reporterNickname: string;
  reporterEmail: string;
  targetId: number;
  targetNickname: string;
  targetEmail: string;
  reason: ReportReason;
  detail: string;
  evidenceContent: string;
  status: ReportStatus;
  createdAt: string;
  resolvedAt: string | null;
  resolvedBy: string | null;
  resolveNote: string | null;
  targetPreviousReports: TargetPreviousReport[];
}

export interface TargetPreviousReport {
  id: number;
  reason: ReportReason;
  status: ReportStatus;
  createdAt: string;
}

export interface ReportSummary {
  totalReports: number;
  pendingCount: number;
  inProgressCount: number;
  resolvedCount: number;
  dismissedCount: number;
}

export interface Block {
  id: number;
  blockerId: number;
  blockerNickname: string;
  blockedId: number;
  blockedNickname: string;
  reason: BlockReason;
  status: BlockStatus;
  createdAt: string;
  unblockedAt: string | null;
}

export interface ContactDetection {
  id: number;
  contentId: number;
  contentType: string;
  userId: number;
  nickname: string;
  patternType: ContactPatternType;
  detectedText: string;
  context: string;
  confidence: number;
  status: ContactDetectionStatus;
  detectedAt: string;
}

export interface ReportSearchParams {
  status?: ReportStatus;
  reason?: ReportReason;
  keyword?: string;
  page?: number;
  size?: number;
  sort?: string;
}
