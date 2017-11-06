import enum


class AnalysisStatus(enum.Enum):
    pending = 'pending'
    approved = 'approved'
    not_approved = 'not_approved'
