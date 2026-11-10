"""Future SQLite persistence. No DB is created by this scaffold."""

class Database:
    def connect(self) -> None:
        raise NotImplementedError("Choose models and SQLite strategy first")
