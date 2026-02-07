export type DocumentStatus =
  | "Draft"
  | "Reviewed"
  | "Ready for Audit"
  | "Issue"
  | "Cleared"
  | "Archived";

export type DocumentSection = "Individuals" | "Companies" | "Clearing";

export interface AuditDocument {
  id: number;
  uuid: string;
  filePath: string;
  documentType: string;
  category: string;
  section: DocumentSection;
  branch: string;
  status: DocumentStatus;
  extractedDate: string;
  captureTime: string;
  amounts?: string;
  notes: string;
  confidence: number;
  classificationConfidence: number;
  pageCount: number;
  fileSize: number;
  tags?: string;
  legalHold: boolean;
  archivedAt?: string;
  retentionExpiryDate?: string;
  disposalStatus?: string | null;
}

export const MOCK_DOCUMENTS: AuditDocument[] = [
  {
    id: 42,
    uuid: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    filePath: "C:\\Scans\\invoice_2024.pdf",
    documentType: "Invoice",
    category: "Financial",
    section: "Companies",
    branch: "Main Office",
    status: "Ready for Audit",
    extractedDate: "2024-02-07",
    captureTime: "2024-02-07T14:30:00Z",
    amounts: "1,500.00 EUR",
    notes: "Pending review",
    confidence: 0.94,
    classificationConfidence: 0.92,
    pageCount: 3,
    fileSize: 245760,
    tags: "follow-up,vip",
    legalHold: false,
  },
  {
    id: 43,
    uuid: "b2c3d4e5-f6a7-8901-bcde-f23456789012",
    filePath: "C:\\Scans\\contract_2024.pdf",
    documentType: "Contract",
    category: "Legal",
    section: "Individuals",
    branch: "Regional A",
    status: "Reviewed",
    extractedDate: "2024-02-06",
    captureTime: "2024-02-06T10:15:00Z",
    amounts: undefined,
    notes: "Verified against bank statement",
    confidence: 0.96,
    classificationConfidence: 0.94,
    pageCount: 12,
    fileSize: 512000,
    tags: undefined,
    legalHold: false,
  },
  {
    id: 44,
    uuid: "c3d4e5f6-a7b8-9012-cdef-345678901234",
    filePath: "C:\\Scans\\statement_2024.pdf",
    documentType: "Bank Statement",
    category: "Financial",
    section: "Clearing",
    branch: "Main Office",
    status: "Cleared",
    extractedDate: "2024-02-05",
    captureTime: "2024-02-05T09:00:00Z",
    amounts: "45,200.00 EUR",
    notes: "Cleared",
    confidence: 0.98,
    classificationConfidence: 0.96,
    pageCount: 2,
    fileSize: 128000,
    tags: undefined,
    legalHold: false,
    archivedAt: "2024-02-10T09:00:00Z",
    retentionExpiryDate: "2029-02-07",
  },
  {
    id: 45,
    uuid: "d4e5f6a7-b8c9-0123-defa-456789012345",
    filePath: "C:\\Scans\\receipt_2024.pdf",
    documentType: "Receipt",
    category: "Financial",
    section: "Companies",
    branch: "Regional A",
    status: "Draft",
    extractedDate: "2024-02-07",
    captureTime: "2024-02-07T11:22:00Z",
    amounts: "89.50 EUR",
    notes: "",
    confidence: 0.89,
    classificationConfidence: 0.87,
    pageCount: 1,
    fileSize: 64000,
    tags: undefined,
    legalHold: false,
  },
];
