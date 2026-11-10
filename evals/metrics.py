"""Future offline evaluation metric contracts. No computed scores yet."""
from dataclasses import dataclass

@dataclass
class EvaluationResult:
    case_id: str
    success: bool
    selected_tools: list[str]
    latency_ms: float | None = None


def evaluate_case(case: dict) -> EvaluationResult:
    raise NotImplementedError("Build reproducible evaluation fixtures first")
