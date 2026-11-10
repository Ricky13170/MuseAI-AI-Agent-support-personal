"""Planned LangGraph topology: route -> use tools/clarify -> respond.

The builder remains unimplemented on purpose. No fake LLM responses.
"""
from typing import Any


def build_graph() -> Any:
    """Eventually construct and compile one session-aware StateGraph."""
    # TODO: LangGraph nodes, checkpointing, budgets, confirmation interrupts.
    raise NotImplementedError("Single-Agent LangGraph has not been implemented")
