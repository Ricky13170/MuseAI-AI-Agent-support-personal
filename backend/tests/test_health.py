"""First executable smoke test; works without any external provider."""
from fastapi.testclient import TestClient
from app.main import app


def test_health_is_scaffold_only():
    response = TestClient(app).get("/api/health")
    assert response.status_code == 200
    assert response.json()["stage"] == "scaffold"


def test_search_is_not_implemented():
    response = TestClient(app).get("/api/music/search", params={"q": "test"})
    assert response.status_code == 501
