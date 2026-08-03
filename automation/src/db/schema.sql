PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS prospects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  company TEXT NOT NULL,
  email TEXT NOT NULL COLLATE NOCASE,
  email_domain TEXT NOT NULL,
  website TEXT,
  industry TEXT,
  status TEXT NOT NULL DEFAULT 'aktiv',
  senast_kontaktad TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(email)
);

CREATE INDEX IF NOT EXISTS idx_prospects_status ON prospects(status);
CREATE INDEX IF NOT EXISTS idx_prospects_senast ON prospects(senast_kontaktad);
CREATE INDEX IF NOT EXISTS idx_prospects_domain ON prospects(email_domain);

CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  prospect_id INTEGER NOT NULL REFERENCES prospects(id),
  direction TEXT NOT NULL CHECK (direction IN ('out', 'in')),
  graph_message_id TEXT,
  conversation_id TEXT,
  subject TEXT,
  body TEXT,
  sent_at TEXT NOT NULL DEFAULT (datetime('now')),
  status TEXT NOT NULL DEFAULT 'skickat',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_messages_prospect ON messages(prospect_id);
CREATE INDEX IF NOT EXISTS idx_messages_graph ON messages(graph_message_id);

CREATE TABLE IF NOT EXISTS classifications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  message_id INTEGER NOT NULL REFERENCES messages(id),
  label TEXT NOT NULL,
  rationale TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS escalations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  prospect_id INTEGER NOT NULL REFERENCES prospects(id),
  inbound_message_id INTEGER REFERENCES messages(id),
  notice_message_id TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  resolved_at TEXT
);

CREATE TABLE IF NOT EXISTS quarantine_skips (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  prospect_id INTEGER NOT NULL REFERENCES prospects(id),
  reason TEXT NOT NULL,
  detail TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS blog_articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  keyword TEXT NOT NULL,
  url TEXT,
  mode TEXT NOT NULL,
  published_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

INSERT OR IGNORE INTO settings (key, value) VALUES ('outreach_enabled', 'true');
INSERT OR IGNORE INTO settings (key, value) VALUES ('blog_enabled', 'true');
INSERT OR IGNORE INTO settings (key, value) VALUES ('ramp_week_start', date('now'));
