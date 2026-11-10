from app.domain.track import Track, TrackRef
from app.domain.playlist import PlaylistDraft


def test_provider_track_identity_is_explicit():
    track = Track(ref=TrackRef(provider="fixture", track_id="abc"), title="Example")
    assert track.ref.provider == "fixture"
    assert track.playback_available is False


def test_playlist_draft_is_a_proposal_not_a_saved_playlist():
    draft = PlaylistDraft(draft_id="draft-1", proposed_name="Study")
    assert draft.tracks == []
